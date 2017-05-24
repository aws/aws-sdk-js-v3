export class CredentialError extends Error {
    constructor(message: string, public readonly tryNextLink: boolean = true) {
        super(message);
    }
}
