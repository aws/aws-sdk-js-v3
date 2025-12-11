// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePhoneNumberSettingsRequest } from "../models/models_0";
import { UpdatePhoneNumberSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberSettingsCommand}.
 */
export interface UpdatePhoneNumberSettingsCommandInput extends UpdatePhoneNumberSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberSettingsCommand}.
 */
export interface UpdatePhoneNumberSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the phone number settings for the administrator's AWS account, such
 *          as the default outbound calling name. You can update the default outbound calling
 *          name once every seven days. Outbound calling names can take up to 72 hours to
 *          update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdatePhoneNumberSettingsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdatePhoneNumberSettingsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdatePhoneNumberSettingsRequest
 *   CallingName: "STRING_VALUE", // required
 * };
 * const command = new UpdatePhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePhoneNumberSettingsCommandInput - {@link UpdatePhoneNumberSettingsCommandInput}
 * @returns {@link UpdatePhoneNumberSettingsCommandOutput}
 * @see {@link UpdatePhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class UpdatePhoneNumberSettingsCommand extends $Command
  .classBuilder<
    UpdatePhoneNumberSettingsCommandInput,
    UpdatePhoneNumberSettingsCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "UpdatePhoneNumberSettings", {})
  .n("ChimeSDKVoiceClient", "UpdatePhoneNumberSettingsCommand")
  .sc(UpdatePhoneNumberSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdatePhoneNumberSettingsCommandInput;
      output: UpdatePhoneNumberSettingsCommandOutput;
    };
  };
}
