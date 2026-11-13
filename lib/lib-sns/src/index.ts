/**
 * Validates inbound HTTP(S) Amazon SNS messages by verifying their signature
 * against the signing certificate SNS advertises. Standalone, with no
 * dependency on an SNS client. Node-only (relies on `node:crypto`).
 *
 * @example
 * ```typescript
 * import { MessageValidator } from "@aws-sdk/lib-sns";
 *
 * const validator = new MessageValidator();
 * const message = await validator.validate(JSON.parse(body));
 * if (message.Type === "SubscriptionConfirmation") {
 *   await fetch(message.SubscribeURL!);
 * }
 * ```
 *
 * @packageDocumentation
 */

export { MessageValidator } from "./MessageValidator";
export { SNSValidationError } from "./errors";
export { DEFAULT_HOST_PATTERN } from "./constants";
export type { MessageValidatorOptions, SNSMessage, SNSMessageType, ValidationCallback } from "./types";
