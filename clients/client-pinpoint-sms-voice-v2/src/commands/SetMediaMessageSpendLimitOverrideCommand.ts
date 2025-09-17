// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetMediaMessageSpendLimitOverrideRequest, SetMediaMessageSpendLimitOverrideResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_SetMediaMessageSpendLimitOverrideCommand,
  se_SetMediaMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetMediaMessageSpendLimitOverrideCommand}.
 */
export interface SetMediaMessageSpendLimitOverrideCommandInput extends SetMediaMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link SetMediaMessageSpendLimitOverrideCommand}.
 */
export interface SetMediaMessageSpendLimitOverrideCommandOutput
  extends SetMediaMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * <p>Sets an account level monthly spend limit override for sending MMS messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetMediaMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetMediaMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetMediaMessageSpendLimitOverrideRequest
 *   MonthlyLimit: Number("long"), // required
 * };
 * const command = new SetMediaMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // SetMediaMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param SetMediaMessageSpendLimitOverrideCommandInput - {@link SetMediaMessageSpendLimitOverrideCommandInput}
 * @returns {@link SetMediaMessageSpendLimitOverrideCommandOutput}
 * @see {@link SetMediaMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link SetMediaMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class SetMediaMessageSpendLimitOverrideCommand extends $Command
  .classBuilder<
    SetMediaMessageSpendLimitOverrideCommandInput,
    SetMediaMessageSpendLimitOverrideCommandOutput,
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
  .s("PinpointSMSVoiceV2", "SetMediaMessageSpendLimitOverride", {})
  .n("PinpointSMSVoiceV2Client", "SetMediaMessageSpendLimitOverrideCommand")
  .f(void 0, void 0)
  .ser(se_SetMediaMessageSpendLimitOverrideCommand)
  .de(de_SetMediaMessageSpendLimitOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetMediaMessageSpendLimitOverrideRequest;
      output: SetMediaMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: SetMediaMessageSpendLimitOverrideCommandInput;
      output: SetMediaMessageSpendLimitOverrideCommandOutput;
    };
  };
}
