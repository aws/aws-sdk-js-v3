export type SourceData = string|ArrayBuffer|ArrayBufferView;

export interface ProviderOptions {
    inputEncoding?: string;
}

interface CryptoProvider {
    sha256Digest(toHash: SourceData): PromiseLike<Uint8Array>;
    hmacSha256(toHash: SourceData, secret: SourceData): PromiseLike<Uint8Array>;
    randomValues(length: number): PromiseLike<Uint8Array>;
}

export default CryptoProvider;
