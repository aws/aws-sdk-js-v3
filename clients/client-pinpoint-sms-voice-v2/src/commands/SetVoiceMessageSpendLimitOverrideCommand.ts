// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetVoiceMessageSpendLimitOverrideRequest, SetVoiceMessageSpendLimitOverrideResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_SetVoiceMessageSpendLimitOverrideCommand,
  se_SetVoiceMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetVoiceMessageSpendLimitOverrideCommand}.
 */
export interface SetVoiceMessageSpendLimitOverrideCommandInput extends SetVoiceMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetVoiceMessageSpendLimitOverrideCommand}.
 */
export interface SetVoiceMessageSpendLimitOverrideCommandOutput
  extends SetVoiceMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetVoiceMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetVoiceMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetVoiceMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetVoiceMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetVoiceMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetVoiceMessageSpendLimitOverrideCommandInput - {@link SetVoiceMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetVoiceMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetVoiceMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetVoiceMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class SetVoiceMessageSpendLimitOverrideCommand extends $Command
  .classBuilder<
    SetVoiceMessageSpendLimitOverrideCommandInput,
    SetVoiceMessageSpendLimitOverrideCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "SetVoiceMessageSpendLimitOverride", {})
  .n("PinpointSMSVoiceV2Client", "SetVoiceMessageSpendLimitOverrideCommand")
  .f(void 0, void 0)
  .ser(se_SetVoiceMessageSpendLimitOverrideCommand)
  .de(de_SetVoiceMessageSpendLimitOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetVoiceMessageSpendLimitOverrideRequest;
      output: SetVoiceMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: SetVoiceMessageSpendLimitOverrideCommandInput;
      output: SetVoiceMessageSpendLimitOverrideCommandOutput;
    };
  };
}
