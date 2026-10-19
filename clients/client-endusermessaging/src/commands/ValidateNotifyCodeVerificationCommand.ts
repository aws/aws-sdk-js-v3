// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidateNotifyCodeVerificationInput, ValidateNotifyCodeVerificationOutput } from "../models/models_0";
import { ValidateNotifyCodeVerification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidateNotifyCodeVerificationCommand}.
 */
export interface ValidateNotifyCodeVerificationCommandInput extends ValidateNotifyCodeVerificationInput {}
/**
 * @public
 *
 * The output of {@link ValidateNotifyCodeVerificationCommand}.
 */
export interface ValidateNotifyCodeVerificationCommandOutput extends ValidateNotifyCodeVerificationOutput, __MetadataBearer {}

/**
 * <p>Validates a one-time passcode that a recipient submitted. Validation succeeds when the passcode matches, the validity period has not elapsed, and the maximum number of attempts has not been exceeded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, ValidateNotifyCodeVerificationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, ValidateNotifyCodeVerificationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // ValidateNotifyCodeVerificationInput
 *   destinationIdentity: "STRING_VALUE", // required
 *   referenceId: "STRING_VALUE",
 *   code: "STRING_VALUE", // required
 * };
 * const command = new ValidateNotifyCodeVerificationCommand(input);
 * const response = await client.send(command);
 * // { // ValidateNotifyCodeVerificationOutput
 * //   status: "VALID" || "INVALID", // required
 * // };
 *
 * ```
 *
 * @param ValidateNotifyCodeVerificationCommandInput - {@link ValidateNotifyCodeVerificationCommandInput}
 * @returns {@link ValidateNotifyCodeVerificationCommandOutput}
 * @see {@link ValidateNotifyCodeVerificationCommandInput} for command's `input` shape.
 * @see {@link ValidateNotifyCodeVerificationCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 * <p>Base exception class for all service exceptions from EndUserMessaging service.</p>
 *
 *
 * @example Validate a submitted one-time passcode
 * ```javascript
 * //
 * const input = {
 *   code: "123456",
 *   destinationIdentity: "+14255550100",
 *   referenceId: "signup-flow-42"
 * };
 * const command = new ValidateNotifyCodeVerificationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   status: "VALID"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ValidateNotifyCodeVerificationCommand extends command<ValidateNotifyCodeVerificationCommandInput, ValidateNotifyCodeVerificationCommandOutput>(
  _ep0,
  _mw0,
  "ValidateNotifyCodeVerification",
  ValidateNotifyCodeVerification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateNotifyCodeVerificationInput;
      output: ValidateNotifyCodeVerificationOutput;
    };
    sdk: {
      input: ValidateNotifyCodeVerificationCommandInput;
      output: ValidateNotifyCodeVerificationCommandOutput;
    };
  };
}
