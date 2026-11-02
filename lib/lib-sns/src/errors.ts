/**
 * Base class for all validation errors raised by {@link MessageValidator}.
 * @public
 */
export class SNSValidationError extends Error {
  public readonly name: string = "SNSValidationError";

  public constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
  }
}
