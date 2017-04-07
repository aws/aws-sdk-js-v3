import CryptoOperation from './CryptoOperation';
import Key from './Key';
import KeyOperation from './KeyOperation';

export type KeyUsage = 'encrypt'|'decrypt'|'sign'|'verify'|'derive'|'wrap'|'unwrap';

type Ie11EncryptionAlgorithm = 'AES-CBC'|'AES-GCM'|'RSAES-PKCS1-v1_5'|'RSA-OAEP';
type Ie11DigestAlgorithm = 'SHA-1'|'SHA-256'|'SHA-384';

interface HashAlgorithm {
    name: Ie11DigestAlgorithm;
}

interface HmacAlgorithm {
    name: 'HMAC';
    hash: HashAlgorithm;
}

type SigningAlgorithm = HmacAlgorithm;

interface MsSubtleCrypto {
    // decrypt(
    //     algorithm: Ie11EncryptionAlgorithm,
    //     key: Key,
    //     buffer?: ArrayBufferView
    // ): CryptoOperation;
    digest(
        algorithm: Ie11DigestAlgorithm,
        buffer?: ArrayBufferView
    ): CryptoOperation;

    importKey(
        format: string,
        keyData: ArrayBufferView,
        algorithm: any,
        extractable?: boolean,
        keyUsages?: Array<KeyUsage>
    ): KeyOperation;

    sign(
        algorithm: SigningAlgorithm,
        key: Key,
        buffer?: ArrayBufferView,
    ): CryptoOperation;
}

export default MsSubtleCrypto;
