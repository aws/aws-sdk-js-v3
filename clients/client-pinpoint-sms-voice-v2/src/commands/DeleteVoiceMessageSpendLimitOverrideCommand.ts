// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteVoiceMessageSpendLimitOverrideRequest,
  DeleteVoiceMessageSpendLimitOverrideResult,
} from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DeleteVoiceMessageSpendLimitOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceMessageSpendLimitOverrideCommand}.
 */
export interface DeleteVoiceMessageSpendLimitOverrideCommandInput extends DeleteVoiceMessageSpendLimitOverrideRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceMessageSpendLimitOverrideCommand}.
 */
export interface DeleteVoiceMessageSpendLimitOverrideCommandOutput extends DeleteVoiceMessageSpendLimitOverrideResult, __MetadataBearer {}

/**
 * <p>Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/quotas.html">Quotas </a> in the <i>End User MessagingSMS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteVoiceMessageSpendLimitOverrideCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteVoiceMessageSpendLimitOverrideCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteVoiceMessageSpendLimitOverrideCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVoiceMessageSpendLimitOverrideResult
 * //   MonthlyLimit: Number("long"),
 * // };
 *
 * ```
 *
 * @param DeleteVoiceMessageSpendLimitOverrideCommandInput - {@link DeleteVoiceMessageSpendLimitOverrideCommandInput}
 * @returns {@link DeleteVoiceMessageSpendLimitOverrideCommandOutput}
 * @see {@link DeleteVoiceMessageSpendLimitOverrideCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceMessageSpendLimitOverrideCommandOutput} for command's `response` shape.
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
export class DeleteVoiceMessageSpendLimitOverrideCommand extends $Command
  .classBuilder<
    DeleteVoiceMessageSpendLimitOverrideCommandInput,
    DeleteVoiceMessageSpendLimitOverrideCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DeleteVoiceMessageSpendLimitOverride", {})
  .n("PinpointSMSVoiceV2Client", "DeleteVoiceMessageSpendLimitOverrideCommand")
  .sc(DeleteVoiceMessageSpendLimitOverride$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteVoiceMessageSpendLimitOverrideResult;
    };
    sdk: {
      input: DeleteVoiceMessageSpendLimitOverrideCommandInput;
      output: DeleteVoiceMessageSpendLimitOverrideCommandOutput;
    };
  };
}
