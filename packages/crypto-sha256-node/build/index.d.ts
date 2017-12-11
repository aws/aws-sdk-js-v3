import { Hash, SourceData } from '@aws/types';
export declare class Sha256 implements Hash {
    private readonly hash;
    constructor(secret?: SourceData);
    update(toHash: SourceData, encoding?: 'utf8' | 'ascii' | 'latin1'): void;
    digest(): Promise<Uint8Array>;
}
