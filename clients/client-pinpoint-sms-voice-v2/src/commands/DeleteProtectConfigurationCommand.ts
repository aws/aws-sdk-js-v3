// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProtectConfigurationRequest, DeleteProtectConfigurationResult } from "../models/models_0";
import type {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { DeleteProtectConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProtectConfigurationCommand}.
 */
export interface DeleteProtectConfigurationCommandInput extends DeleteProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProtectConfigurationCommand}.
 */
export interface DeleteProtectConfigurationCommandOutput extends DeleteProtectConfigurationResult, __MetadataBearer {}

/**
 * <p>Permanently delete the protect configuration. The protect configuration must have deletion protection disabled and must not be associated as the account default protect configuration or associated with a configuration set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DeleteProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DeleteProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DeleteProtectConfigurationRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProtectConfigurationResult
 * //   ProtectConfigurationArn: "STRING_VALUE", // required
 * //   ProtectConfigurationId: "STRING_VALUE", // required
 * //   CreatedTimestamp: new Date("TIMESTAMP"), // required
 * //   AccountDefault: true || false, // required
 * //   DeletionProtectionEnabled: true || false, // required
 * // };
 *
 * ```
 *
 * @param DeleteProtectConfigurationCommandInput - {@link DeleteProtectConfigurationCommandInput}
 * @returns {@link DeleteProtectConfigurationCommandOutput}
 * @see {@link DeleteProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteProtectConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time or it could be that the requested action isn't valid for the current state or configuration of the resource.</p>
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
export class DeleteProtectConfigurationCommand extends $Command
  .classBuilder<
    DeleteProtectConfigurationCommandInput,
    DeleteProtectConfigurationCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "DeleteProtectConfiguration", {})
  .n("PinpointSMSVoiceV2Client", "DeleteProtectConfigurationCommand")
  .sc(DeleteProtectConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProtectConfigurationRequest;
      output: DeleteProtectConfigurationResult;
    };
    sdk: {
      input: DeleteProtectConfigurationCommandInput;
      output: DeleteProtectConfigurationCommandOutput;
    };
  };
}
