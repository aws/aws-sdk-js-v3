import {CryptoProvider, SourceData} from "@aws/types";
import {ProviderOptions} from "./ProviderOptions";
import {isMsWindow} from "./Ie11CryptoProvider/MsWindow";
import {supportsWebCrypto} from "./supportsWebCrypto";
import {Ie11CryptoProvider} from "./Ie11CryptoProvider/index";
import {WebCryptoProvider} from "./WebCryptoProvider";
import {PureJsCryptoProvider} from "./PureJsCryptoProvider";

export class BrowserCryptoProvider implements CryptoProvider {
    private readonly provider: CryptoProvider;

    constructor(options: ProviderOptions = {}) {
        if (isMsWindow(window)) {
            this.provider = new Ie11CryptoProvider(options);
        } else if (supportsWebCrypto(window)) {
            this.provider = new WebCryptoProvider(options);
        } else {
            this.provider = new PureJsCryptoProvider(options);
        }
    }

    sha256Digest(toHash: SourceData): Promise<Uint8Array> {
        return this.provider.sha256Digest(toHash);
    }

    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Uint8Array> {
        return this.provider.hmacSha256(toHash, secret);
    }

    randomValues(length: number): Promise<Uint8Array> {
        return this.provider.randomValues(length);
    }
}
