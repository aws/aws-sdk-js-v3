import {
    Hash,
    HashConstructor,
    StreamHasher,
} from '@aws/types';

import {blobReader} from '@aws/chunked-blob-reader';

export const calculateSha256: StreamHasher<Blob> = async function calculateSha256(
    hashCtor: HashConstructor,
    blob: Blob
): Promise<Uint8Array> {
    const hash = new hashCtor();

    await blobReader(
        blob,
        (chunk) => {
            hash.update(chunk);
        }
    );

    return hash.digest();
}
