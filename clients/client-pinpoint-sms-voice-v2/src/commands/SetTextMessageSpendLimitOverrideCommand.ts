// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  SetTextMessageSpendLimitOverrideRequest,
  SetTextMessageSpendLimitOverrideResult,
} from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { SetTextMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTextMessageSpendLimitOverrideCommand}.
 */
export interface SetTextMessageSpendLimitOverrideCommandInput extends SetTextMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetTextMessageSpendLimitOverrideCommand}.
 */
export interface SetTextMessageSpendLimitOverrideCommandOutput extends SetTextMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetTextMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetTextMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetTextMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetTextMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetTextMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetTextMessageSpendLimitOverrideCommandInput - {@link SetTextMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetTextMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetTextMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetTextMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class SetTextMessageSpendLimitOverrideCommand extends $Command
  .classBuilder<
    SetTextMessageSpendLimitOverrideCommandInput,
    SetTextMessageSpendLimitOverrideCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "SetTextMessageSpendLimitOverride", {})
  .n("PinpointSMSVoiceV2Client", "SetTextMessageSpendLimitOverrideCommand")
  .sc(SetTextMessageSpendLimitOverride$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTextMessageSpendLimitOverrideRequest;
      output: SetTextMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: SetTextMessageSpendLimitOverrideCommandInput;
      output: SetTextMessageSpendLimitOverrideCommandOutput;
    };
  };
}
