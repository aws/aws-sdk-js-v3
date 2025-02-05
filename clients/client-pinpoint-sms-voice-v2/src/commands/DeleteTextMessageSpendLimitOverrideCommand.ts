// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTextMessageSpendLimitOverrideRequest,
  DeleteTextMessageSpendLimitOverrideResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DeleteTextMessageSpendLimitOverrideCommand,
  se_DeleteTextMessageSpendLimitOverrideCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTextMessageSpendLimitOverrideCommand}.
 */
export interface DeleteTextMessageSpendLimitOverrideCommandInput extends DeleteTextMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTextMessageSpendLimitOverrideCommand}.
 */
export interface DeleteTextMessageSpendLimitOverrideCommandOutput
  extends DeleteTextMessageSpendLimitOverrideResult,
    __MetadataBearer {}

/**
 * <p>Deletes an account-level monthly spending limit override for sending text messages.
 *             Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the
 *                 <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more
 *             information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/quotas.html">Quotas </a>
 *             in the <i>AWS End User Messaging SMS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteTextMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteTextMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteTextMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTextMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteTextMessageSpendLimitOverrideCommandInput - {@link DeleteTextMessageSpendLimitOverrideCommandInput}
 * @returns {@link DeleteTextMessageSpendLimitOverrideCommandOutput}
 * @see {@link DeleteTextMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteTextMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class DeleteTextMessageSpendLimitOverrideCommand extends $Command
  .classBuilder<
    DeleteTextMessageSpendLimitOverrideCommandInput,
    DeleteTextMessageSpendLimitOverrideCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DeleteTextMessageSpendLimitOverride", {})
  .n("PinpointSMSVoiceV2Client", "DeleteTextMessageSpendLimitOverrideCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTextMessageSpendLimitOverrideCommand)
  .de(de_DeleteTextMessageSpendLimitOverrideCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteTextMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: DeleteTextMessageSpendLimitOverrideCommandInput;
      output: DeleteTextMessageSpendLimitOverrideCommandOutput;
    };
  };
}
