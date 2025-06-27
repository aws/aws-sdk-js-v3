// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteAccountDefaultProtectConfigurationRequest,
  DeleteAccountDefaultProtectConfigurationResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DeleteAccountDefaultProtectConfigurationCommand,
  se_DeleteAccountDefaultProtectConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountDefaultProtectConfigurationCommand}.
 */
export interface DeleteAccountDefaultProtectConfigurationCommandInput
  extends DeleteAccountDefaultProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountDefaultProtectConfigurationCommand}.
 */
export interface DeleteAccountDefaultProtectConfigurationCommandOutput
  extends DeleteAccountDefaultProtectConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Removes the current account default protect configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteAccountDefaultProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteAccountDefaultProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = {};
 * const command = new DeleteAccountDefaultProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAccountDefaultProtectConfigurationResult
 * //   DefaultProtectConfigurationArn: "STRING_VALUE", // required
 * //   DefaultProtectConfigurationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteAccountDefaultProtectConfigurationCommandInput - {@link DeleteAccountDefaultProtectConfigurationCommandInput}
 * @returns {@link DeleteAccountDefaultProtectConfigurationCommandOutput}
 * @see {@link DeleteAccountDefaultProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountDefaultProtectConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
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
export class DeleteAccountDefaultProtectConfigurationCommand extends $Command
  .classBuilder<
    DeleteAccountDefaultProtectConfigurationCommandInput,
    DeleteAccountDefaultProtectConfigurationCommandOutput,
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
  .s("PinpointSMSVoiceV2", "DeleteAccountDefaultProtectConfiguration", {})
  .n("PinpointSMSVoiceV2Client", "DeleteAccountDefaultProtectConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccountDefaultProtectConfigurationCommand)
  .de(de_DeleteAccountDefaultProtectConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteAccountDefaultProtectConfigurationResult;
    };
    sdk: {
      input: DeleteAccountDefaultProtectConfigurationCommandInput;
      output: DeleteAccountDefaultProtectConfigurationCommandOutput;
    };
  };
}
