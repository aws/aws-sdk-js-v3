import { MetadataService } from "./MetadataService";

describe("MetadataService", () => {
  let metadataService: MetadataService;

  beforeEach(() => {
    metadataService = new MetadataService();
  });

  it("should successfully make a request and return response body", async () => {
    const path = "latest/meta-data/hostname";
    const response = await metadataService.request(path, {});
    expect(response).toEqual({});
  });
});
