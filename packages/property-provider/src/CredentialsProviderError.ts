import { ProviderError } from "./ProviderError";

/**
 * An error representing a failure of an individual credential provider.
 *
 * This error class has special meaning to the {@link chain} method. If a
 * provider in the chain is rejected with an error, the chain will only proceed
 * to the next provider if the value of the `tryNextLink` property on the error
 * is truthy. This allows individual providers to halt the chain and also
 * ensures the chain will stop if an entirely unexpected error is encountered.
 */
export class CredentialsProviderError extends ProviderError {
  name = "CredentialsProviderError";
  constructor(message: string, public readonly tryNextLink: boolean = true) {
    super(message, tryNextLink);
    // Remove once we stop targetting ES5.
    Object.setPrototypeOf(this, CredentialsProviderError.prototype);
  }
}
