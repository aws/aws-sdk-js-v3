// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVoiceConnectorExternalSystemsConfigurationRequest } from "../models/models_0";
import { DeleteVoiceConnectorExternalSystemsConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface DeleteVoiceConnectorExternalSystemsConfigurationCommandInput
  extends DeleteVoiceConnectorExternalSystemsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the external systems configuration for a Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorExternalSystemsConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorExternalSystemsConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorExternalSystemsConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorExternalSystemsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorExternalSystemsConfigurationCommandInput - {@link DeleteVoiceConnectorExternalSystemsConfigurationCommandInput}
 * @returns {@link DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput}
 * @see {@link DeleteVoiceConnectorExternalSystemsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
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
export class DeleteVoiceConnectorExternalSystemsConfigurationCommand extends $Command
  .classBuilder<
    DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
    DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "DeleteVoiceConnectorExternalSystemsConfiguration", {})
  .n("ChimeSDKVoiceClient", "DeleteVoiceConnectorExternalSystemsConfigurationCommand")
  .sc(DeleteVoiceConnectorExternalSystemsConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorExternalSystemsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorExternalSystemsConfigurationCommandInput;
      output: DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput;
    };
  };
}
