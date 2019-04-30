import { Hash, HashConstructor, StreamHasher } from "@aws-sdk/types";

import { blobReader } from "@aws-sdk/chunked-blob-reader";

export const calculateSha256: StreamHasher<
  Blob
> = async function calculateSha256(
  hashCtor: HashConstructor,
  blob: Blob
): Promise<Uint8Array> {
  const hash = new hashCtor();

  await blobReader(blob, chunk => {
    hash.update(chunk);
  });

  return hash.digest();
};
