// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProtectConfigurationRequest, UpdateProtectConfigurationResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { de_UpdateProtectConfigurationCommand, se_UpdateProtectConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProtectConfigurationCommand}.
 */
export interface UpdateProtectConfigurationCommandInput extends UpdateProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProtectConfigurationCommand}.
 */
export interface UpdateProtectConfigurationCommandOutput extends UpdateProtectConfigurationResult, __MetadataBearer {}

/**
 * <p>Update the setting for an existing protect configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, UpdateProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, UpdateProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // UpdateProtectConfigurationRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 *   DeletionProtectionEnabled: true || false,
 * };
 * const command = new UpdateProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProtectConfigurationResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   AccountDefault: true || false, // required
 * //   DeletionProtectionEnabled: true || false, // required
 * // };
 *
 * ```
 *
 * @param UpdateProtectConfigurationCommandInput - {@link UpdateProtectConfigurationCommandInput}
 * @returns {@link UpdateProtectConfigurationCommandOutput}
 * @see {@link UpdateProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateProtectConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateProtectConfigurationCommand extends $Command
  .classBuilder<
    UpdateProtectConfigurationCommandInput,
    UpdateProtectConfigurationCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "UpdateProtectConfiguration", {})
  .n("PinpointSMSVoiceV2Client", "UpdateProtectConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProtectConfigurationCommand)
  .de(de_UpdateProtectConfigurationCommand)
  .build() {}
