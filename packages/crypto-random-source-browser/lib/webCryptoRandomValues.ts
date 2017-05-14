export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise(resolve => {
        const randomBytes = new Uint8Array(byteLength);
        window.crypto.getRandomValues(randomBytes);

        resolve(randomBytes);
    });
}
