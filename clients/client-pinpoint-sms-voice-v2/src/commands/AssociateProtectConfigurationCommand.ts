// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateProtectConfigurationRequest, AssociateProtectConfigurationResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_AssociateProtectConfigurationCommand,
  se_AssociateProtectConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateProtectConfigurationCommand}.
 */
export interface AssociateProtectConfigurationCommandInput extends AssociateProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateProtectConfigurationCommand}.
 */
export interface AssociateProtectConfigurationCommandOutput
  extends AssociateProtectConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Associate a protect configuration with a configuration set. This replaces the
 *             configuration sets current protect configuration. A configuration set can
 *             only be associated with one protect configuration at a time. A protect configuration can
 *             be associated with multiple configuration sets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, AssociateProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, AssociateProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // AssociateProtectConfigurationRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new AssociateProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // AssociateProtectConfigurationResult
 * //   ConfigurationSetArn: "STRING_VALUE", // required
 * //   ConfigurationSetName: "STRING_VALUE", // required
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateProtectConfigurationCommandInput - {@link AssociateProtectConfigurationCommandInput}
 * @returns {@link AssociateProtectConfigurationCommandOutput}
 * @see {@link AssociateProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link AssociateProtectConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the
 *             resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time or it could be that the
 *             requested action isn't valid for the current state or configuration of the
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
export class AssociateProtectConfigurationCommand extends $Command
  .classBuilder<
    AssociateProtectConfigurationCommandInput,
    AssociateProtectConfigurationCommandOutput,
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
  .s("PinpointSMSVoiceV2", "AssociateProtectConfiguration", {})
  .n("PinpointSMSVoiceV2Client", "AssociateProtectConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_AssociateProtectConfigurationCommand)
  .de(de_AssociateProtectConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateProtectConfigurationRequest;
      output: AssociateProtectConfigurationResult;
    };
    sdk: {
      input: AssociateProtectConfigurationCommandInput;
      output: AssociateProtectConfigurationCommandOutput;
    };
  };
}
