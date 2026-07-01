// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetRcsMessageSpendLimitOverrideRequest, SetRcsMessageSpendLimitOverrideResult } from "../models/models_0";
import { SetRcsMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetRcsMessageSpendLimitOverrideCommand}.
 */
export interface SetRcsMessageSpendLimitOverrideCommandInput extends SetRcsMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetRcsMessageSpendLimitOverrideCommand}.
 */
export interface SetRcsMessageSpendLimitOverrideCommandOutput extends SetRcsMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending RCS messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetRcsMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetRcsMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetRcsMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetRcsMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetRcsMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetRcsMessageSpendLimitOverrideCommandInput - {@link SetRcsMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetRcsMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetRcsMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetRcsMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class SetRcsMessageSpendLimitOverrideCommand extends command<SetRcsMessageSpendLimitOverrideCommandInput, SetRcsMessageSpendLimitOverrideCommandOutput>(
  _ep0,
  _mw0,
  "SetRcsMessageSpendLimitOverride",
  SetRcsMessageSpendLimitOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetRcsMessageSpendLimitOverrideRequest;
      output: SetRcsMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: SetRcsMessageSpendLimitOverrideCommandInput;
      output: SetRcsMessageSpendLimitOverrideCommandOutput;
    };
  };
}
