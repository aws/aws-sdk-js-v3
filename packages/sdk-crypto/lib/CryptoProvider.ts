export type SourceData = string|ArrayBuffer|ArrayBufferView;

export interface ProviderOptions {
    inputEncoding?: string;
}

interface CryptoProvider {
    sha256Digest(toHash: SourceData): Promise<Uint8Array>;
    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Uint8Array>;
    randomValues(length: number): Promise<Uint8Array>;
}

export default CryptoProvider;
