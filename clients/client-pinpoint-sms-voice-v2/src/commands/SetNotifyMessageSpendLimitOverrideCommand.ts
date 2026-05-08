// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  SetNotifyMessageSpendLimitOverrideRequest,
  SetNotifyMessageSpendLimitOverrideResult,
} from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { SetNotifyMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetNotifyMessageSpendLimitOverrideCommand}.
 */
export interface SetNotifyMessageSpendLimitOverrideCommandInput extends SetNotifyMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetNotifyMessageSpendLimitOverrideCommand}.
 */
export interface SetNotifyMessageSpendLimitOverrideCommandOutput extends SetNotifyMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending notify messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetNotifyMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetNotifyMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetNotifyMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetNotifyMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetNotifyMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetNotifyMessageSpendLimitOverrideCommandInput - {@link SetNotifyMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetNotifyMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetNotifyMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetNotifyMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
 * @example SetNotifyMessageSpendLimitOverride
 * ```javascript
 * // Set a monthly spend limit override for notify messages.
 * const input = {
 *   MonthlyLimit: 1000
 * };
 * const command = new SetNotifyMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MonthlyLimit: 1000
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SetNotifyMessageSpendLimitOverrideCommand extends $Command
  .classBuilder<
    SetNotifyMessageSpendLimitOverrideCommandInput,
    SetNotifyMessageSpendLimitOverrideCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "SetNotifyMessageSpendLimitOverride", {})
  .n("PinpointSMSVoiceV2Client", "SetNotifyMessageSpendLimitOverrideCommand")
  .sc(SetNotifyMessageSpendLimitOverride$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetNotifyMessageSpendLimitOverrideRequest;
      output: SetNotifyMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: SetNotifyMessageSpendLimitOverrideCommandInput;
      output: SetNotifyMessageSpendLimitOverrideCommandOutput;
    };
  };
}
