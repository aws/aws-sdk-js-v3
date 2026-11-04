// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendPhoneNumberVerificationRequest, SendPhoneNumberVerificationResponse } from "../models/models_0";
import { SendPhoneNumberVerification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendPhoneNumberVerificationCommand}.
 */
export interface SendPhoneNumberVerificationCommandInput extends SendPhoneNumberVerificationRequest {}
/**
 * @public
 *
 * The output of {@link SendPhoneNumberVerificationCommand}.
 */
export interface SendPhoneNumberVerificationCommandOutput extends SendPhoneNumberVerificationResponse, __MetadataBearer {}

/**
 * Sends a one-time passcode to the phone number in the primary contact information of an Amazon Web Services account. Use VerifyPhoneNumber to submit the passcode and complete the verification.
 *
 * For complete details about how to use the primary contact operations, see [Update the primary contact for your Amazon Web Services account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-primary.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, SendPhoneNumberVerificationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, SendPhoneNumberVerificationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // SendPhoneNumberVerificationRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new SendPhoneNumberVerificationCommand(input);
 * const response = await client.send(command);
 * // { // SendPhoneNumberVerificationResponse
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendPhoneNumberVerificationCommandInput - {@link SendPhoneNumberVerificationCommandInput}
 * @returns {@link SendPhoneNumberVerificationCommandOutput}
 * @see {@link SendPhoneNumberVerificationCommandInput} for command's `input` shape.
 * @see {@link SendPhoneNumberVerificationCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation failed because the calling identity doesn't have the minimum required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of a conflict in the current status of the resource. For example, this happens if you try to enable a Region that is currently being disabled (in a status of DISABLING) or if you try to change an account’s root user email to an email address which is already in use.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation failed because of an error internal to Amazon Web Services. Try your operation again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation failed because it specified a resource that can't be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The operation failed because it was called too frequently and exceeded a throttle limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed because one of the input parameters was invalid.
 *
 * @throws {@link AccountServiceException}
 *
 * Base exception class for all service exceptions from Account service.
 *
 * @public
 */
export class SendPhoneNumberVerificationCommand extends command<SendPhoneNumberVerificationCommandInput, SendPhoneNumberVerificationCommandOutput>(
  _ep0,
  _mw0,
  "SendPhoneNumberVerification",
  SendPhoneNumberVerification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendPhoneNumberVerificationRequest;
      output: SendPhoneNumberVerificationResponse;
    };
    sdk: {
      input: SendPhoneNumberVerificationCommandInput;
      output: SendPhoneNumberVerificationCommandOutput;
    };
  };
}
