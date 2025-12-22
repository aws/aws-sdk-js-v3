import { Glacier } from "@aws-sdk/client-glacier";
import { afterAll, afterEach, beforeAll, describe, expect, test as it } from "vitest";

describe(Glacier.name, () => {
  let client: Glacier;
  let vaultName: string;
  const createdArchives: string[] = [];

  beforeAll(async () => {
    client = new Glacier({ region: "us-west-2" });
    vaultName = `aws-js-sdk-integration-${Date.now()}`;

    // Create vault
    await client.createVault({
      accountId: "",
      vaultName: vaultName,
    });
  });

  afterEach(async () => {
    for (const archiveId of createdArchives) {
      try {
        await client.deleteArchive({
          accountId: "",
          vaultName: vaultName,
          archiveId: archiveId,
        });
      } catch (error) {
        // Ignore deletion errors
      }
    }
    createdArchives.length = 0;
  });

  afterAll(async () => {
    // Delete vault
    try {
      await client.deleteVault({
        accountId: "",
        vaultName: vaultName,
      });
    } catch (error) {
      console.warn(`Could not delete vault ${vaultName}:`, (error as Error).message);
    }
  });

  it("should describe vault with NumberOfArchives property", async () => {
    const describeResult = await client.describeVault({
      accountId: "",
      vaultName: vaultName,
    });

    expect(describeResult.NumberOfArchives).toBeDefined();
    expect(typeof describeResult.NumberOfArchives).toBe("number");
  });

  it("should upload archive, verify checksum, and delete it", async () => {
    // Create 0.25MB test data
    const data = Buffer.alloc(0.25 * 1024 * 1024);
    data.fill("0");

    // Upload archive
    const uploadResult = await client.uploadArchive({
      accountId: "",
      vaultName: vaultName,
      body: data,
    });

    expect(uploadResult.archiveId).toBeDefined();
    expect(uploadResult.checksum).toBe("6faefade5a638cd3545d638dd5754763658e32209e69420cb559b7650d4bf93a");

    // Store for cleanup
    if (uploadResult.archiveId) {
      createdArchives.push(uploadResult.archiveId);
    }
  });

  it("should complete multi-part upload with chunks", async () => {
    // Setup multi-part upload: 2.5MB archive in 1MB chunks
    const totalSize = 2.5 * 1024 * 1024;
    const partSize = 1024 * 1024; // 1MB
    const uploadData = Buffer.alloc(totalSize);
    uploadData.fill("0");

    // Initiate multi-part upload
    const initiateResult = await client.initiateMultipartUpload({
      accountId: "",
      vaultName: vaultName,
      partSize: partSize.toString(),
    });

    expect(initiateResult.uploadId).toBeDefined();

    const uploadId = initiateResult.uploadId!;

    // Upload parts
    for (let i = 0; i < uploadData.length; i += partSize) {
      const end = Math.min(i + partSize, uploadData.length);
      const buf = uploadData.subarray(i, end);
      const range = `bytes ${i}-${end - 1}/*`;

      await client.uploadMultipartPart({
        accountId: "",
        vaultName: vaultName,
        uploadId: uploadId,
        range: range,
        body: buf,
      });
    }

    // Complete multi-part upload
    const completeResult = await client.completeMultipartUpload({
      accountId: "",
      vaultName: vaultName,
      uploadId: uploadId,
      archiveSize: uploadData.length.toString(),
      checksum: "86118ad0c187fd240db59a37360e0e7f8a3a0c608eed740b4cd7b4271ab45171",
    });

    expect(completeResult.$metadata?.httpStatusCode).toBe(201);
    expect(completeResult.archiveId).toBeDefined();
    expect(completeResult.checksum).toBe("86118ad0c187fd240db59a37360e0e7f8a3a0c608eed740b4cd7b4271ab45171");

    // Store for cleanup
    if (completeResult.archiveId) {
      createdArchives.push(completeResult.archiveId);
    }
  });

  describe("Error handling", () => {
    it("should throw InvalidParameterValueException for incorrect checksum", async () => {
      const data = Buffer.alloc(0.05 * 1024 * 1024);
      data.fill("0");

      await expect(
        client.uploadArchive({
          accountId: "",
          vaultName: vaultName,
          body: data,
          checksum: "00000000000000000000000000000000",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidParameterValueException",
          message: expect.stringContaining("Checksum mismatch"),
        })
      );
    });

    it("should throw InvalidParameterValueException for invalid checksum format", async () => {
      const data = Buffer.alloc(0.05 * 1024 * 1024);
      data.fill("0");

      await expect(
        client.uploadArchive({
          accountId: "",
          vaultName: vaultName,
          body: data,
          checksum: "000",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidParameterValueException",
          message: expect.stringContaining("Invalid x-amz-sha256-tree-hash: 000"),
        })
      );
    });
  });
});
