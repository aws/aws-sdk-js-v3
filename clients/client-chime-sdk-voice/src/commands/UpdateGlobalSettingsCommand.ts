// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGlobalSettingsRequest } from "../models/models_0";
import { de_UpdateGlobalSettingsCommand, se_UpdateGlobalSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlobalSettingsCommand}.
 */
export interface UpdateGlobalSettingsCommandInput extends UpdateGlobalSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalSettingsCommand}.
 */
export interface UpdateGlobalSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates global settings for the Amazon Chime SDK Voice Connectors in an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateGlobalSettingsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateGlobalSettingsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateGlobalSettingsRequest
 *   VoiceConnector: { // VoiceConnectorSettings
 *     CdrBucket: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGlobalSettingsCommandInput - {@link UpdateGlobalSettingsCommandInput}
 * @returns {@link UpdateGlobalSettingsCommandOutput}
 * @see {@link UpdateGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalSettingsCommandOutput} for command's `response` shape.
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
export class UpdateGlobalSettingsCommand extends $Command
  .classBuilder<
    UpdateGlobalSettingsCommandInput,
    UpdateGlobalSettingsCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "UpdateGlobalSettings", {})
  .n("ChimeSDKVoiceClient", "UpdateGlobalSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGlobalSettingsCommand)
  .de(de_UpdateGlobalSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlobalSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateGlobalSettingsCommandInput;
      output: UpdateGlobalSettingsCommandOutput;
    };
  };
}
