import { blobReader } from "@aws-sdk/chunked-blob-reader";
import { ChecksumConstructor, StreamChecksum } from "@aws-sdk/types";

export const blobHasher: StreamChecksum<Blob> = async function blobHasher(
  hashCtor: ChecksumConstructor,
  blob: Blob
): Promise<Uint8Array> {
  const hash = new hashCtor();

  await blobReader(blob, (chunk) => {
    hash.update(chunk);
  });

  return hash.digest();
};
