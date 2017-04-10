import {SourceData} from "./CryptoProvider";

export default function isEmptyData(data: SourceData): boolean {
    if (typeof data === 'string') {
        return data.length === 0;
    }

    return data.byteLength === 0;
}

export function emptyDataSha256(): Promise<Uint8Array> {
    return Promise.resolve(new Uint8Array([
        227,
        176,
        196,
        66,
        152,
        252,
        28,
        20,
        154,
        251,
        244,
        200,
        153,
        111,
        185,
        36,
        39,
        174,
        65,
        228,
        100,
        155,
        147,
        76,
        164,
        149,
        153,
        27,
        120,
        82,
        184,
        85,
    ]));
}
