// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifyPhoneNumberRequest, VerifyPhoneNumberResponse } from "../models/models_0";
import { VerifyPhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link VerifyPhoneNumberCommand}.
 */
export interface VerifyPhoneNumberCommandInput extends VerifyPhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link VerifyPhoneNumberCommand}.
 */
export interface VerifyPhoneNumberCommandOutput extends VerifyPhoneNumberResponse, __MetadataBearer {}

/**
 * Verifies the phone number in the primary contact information of an Amazon Web Services account by submitting the one-time passcode that SendPhoneNumberVerification sent to that phone number.
 *
 * For complete details about how to use the primary contact operations, see [Update the primary contact for your Amazon Web Services account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-primary.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, VerifyPhoneNumberCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, VerifyPhoneNumberCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // VerifyPhoneNumberRequest
 *   AccountId: "STRING_VALUE",
 *   Otp: "STRING_VALUE", // required
 * };
 * const command = new VerifyPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // VerifyPhoneNumberResponse
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifyPhoneNumberCommandInput - {@link VerifyPhoneNumberCommandInput}
 * @returns {@link VerifyPhoneNumberCommandOutput}
 * @see {@link VerifyPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link VerifyPhoneNumberCommandOutput} for command's `response` shape.
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
export class VerifyPhoneNumberCommand extends command<VerifyPhoneNumberCommandInput, VerifyPhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "VerifyPhoneNumber",
  VerifyPhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyPhoneNumberRequest;
      output: VerifyPhoneNumberResponse;
    };
    sdk: {
      input: VerifyPhoneNumberCommandInput;
      output: VerifyPhoneNumberCommandOutput;
    };
  };
}
