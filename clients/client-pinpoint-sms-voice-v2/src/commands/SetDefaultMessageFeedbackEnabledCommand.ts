// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetDefaultMessageFeedbackEnabledRequest, SetDefaultMessageFeedbackEnabledResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_SetDefaultMessageFeedbackEnabledCommand,
  se_SetDefaultMessageFeedbackEnabledCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultMessageFeedbackEnabledCommand}.
 */
export interface SetDefaultMessageFeedbackEnabledCommandInput extends SetDefaultMessageFeedbackEnabledRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultMessageFeedbackEnabledCommand}.
 */
export interface SetDefaultMessageFeedbackEnabledCommandOutput
  extends SetDefaultMessageFeedbackEnabledResult,
    __MetadataBearer {}

/**
 * <p>Sets a configuration set's default for message feedback. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetDefaultMessageFeedbackEnabledCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetDefaultMessageFeedbackEnabledCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetDefaultMessageFeedbackEnabledRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   MessageFeedbackEnabled: true || false, // required
 * };
 * const command = new SetDefaultMessageFeedbackEnabledCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultMessageFeedbackEnabledResult
 * //   ConfigurationSetArn: "STRING_VALUE",
 * //   ConfigurationSetName: "STRING_VALUE",
 * //   MessageFeedbackEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param SetDefaultMessageFeedbackEnabledCommandInput - {@link SetDefaultMessageFeedbackEnabledCommandInput}
 * @returns {@link SetDefaultMessageFeedbackEnabledCommandOutput}
 * @see {@link SetDefaultMessageFeedbackEnabledCommandInput} for command's `input` shape.
 * @see {@link SetDefaultMessageFeedbackEnabledCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might
 *             be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of
 *             time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 * @public
 */
export class SetDefaultMessageFeedbackEnabledCommand extends $Command
  .classBuilder<
    SetDefaultMessageFeedbackEnabledCommandInput,
    SetDefaultMessageFeedbackEnabledCommandOutput,
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
  .s("PinpointSMSVoiceV2", "SetDefaultMessageFeedbackEnabled", {})
  .n("PinpointSMSVoiceV2Client", "SetDefaultMessageFeedbackEnabledCommand")
  .f(void 0, void 0)
  .ser(se_SetDefaultMessageFeedbackEnabledCommand)
  .de(de_SetDefaultMessageFeedbackEnabledCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetDefaultMessageFeedbackEnabledRequest;
      output: SetDefaultMessageFeedbackEnabledResult;
    };
    sdk: {
      input: SetDefaultMessageFeedbackEnabledCommandInput;
      output: SetDefaultMessageFeedbackEnabledCommandOutput;
    };
  };
}
