// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SetAccountDefaultProtectConfigurationRequest,
  SetAccountDefaultProtectConfigurationResult,
} from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import { SetAccountDefaultProtectConfiguration } from "../schemas/schemas_31_SetAccountDefaultProtectConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetAccountDefaultProtectConfigurationCommand}.
 */
export interface SetAccountDefaultProtectConfigurationCommandInput
  extends SetAccountDefaultProtectConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetAccountDefaultProtectConfigurationCommand}.
 */
export interface SetAccountDefaultProtectConfigurationCommandOutput
  extends SetAccountDefaultProtectConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Set a protect configuration as your account default. You can only have one account default protect configuration at a time. The current account default protect configuration is replaced with the provided protect configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, SetAccountDefaultProtectConfigurationCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, SetAccountDefaultProtectConfigurationCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * // import type { PinpointSMSVoiceV2ClientConfig } from "@aws-sdk/client-pinpoint-sms-voice-v2";
 * const config = {}; // type is PinpointSMSVoiceV2ClientConfig
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // SetAccountDefaultProtectConfigurationRequest
 *   ProtectConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new SetAccountDefaultProtectConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetAccountDefaultProtectConfigurationResult
 * //   DefaultProtectConfigurationArn: "STRING_VALUE", // required
 * //   DefaultProtectConfigurationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SetAccountDefaultProtectConfigurationCommandInput - {@link SetAccountDefaultProtectConfigurationCommandInput}
 * @returns {@link SetAccountDefaultProtectConfigurationCommandOutput}
 * @see {@link SetAccountDefaultProtectConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetAccountDefaultProtectConfigurationCommandOutput} for command's `response` shape.
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
export class SetAccountDefaultProtectConfigurationCommand extends $Command
  .classBuilder<
    SetAccountDefaultProtectConfigurationCommandInput,
    SetAccountDefaultProtectConfigurationCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PinpointSMSVoiceV2", "SetAccountDefaultProtectConfiguration", {})
  .n("PinpointSMSVoiceV2Client", "SetAccountDefaultProtectConfigurationCommand")
  .sc(SetAccountDefaultProtectConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetAccountDefaultProtectConfigurationRequest;
      output: SetAccountDefaultProtectConfigurationResult;
    };
    sdk: {
      input: SetAccountDefaultProtectConfigurationCommandInput;
      output: SetAccountDefaultProtectConfigurationCommandOutput;
    };
  };
}
