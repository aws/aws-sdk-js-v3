/**
 * An error representing a failure of an individual credential provider.
 *
 * This error class has special meaning to
 */
export class CredentialError extends Error {
    constructor(message: string, public readonly tryNextLink: boolean = true) {
        super(message);
    }
}
