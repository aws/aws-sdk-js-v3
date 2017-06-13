interface ByteSource {
    (size: number): Buffer;
}

interface CryptoModule {
    __setByteSource(source: ByteSource): void;
    __clearByteSource(): void;
    randomBytes(size: number, cb: (err: Error|null, buf?: Buffer) => void): void;
}

let byteSource: ByteSource|undefined;
const cryptoModule: CryptoModule = <CryptoModule>jest.genMockFromModule('crypto');
cryptoModule.__setByteSource = (source: ByteSource) => { byteSource = source; };
cryptoModule.__clearByteSource = () => { byteSource = void 0; };
cryptoModule.randomBytes = (size, cb) => {
    if (byteSource) {
        try {
            cb(null, byteSource(size));
        } catch (e) {
            cb(e);
        }
    } else {
        throw new Error('No byte source defined');
    }
};

module.exports = cryptoModule;
