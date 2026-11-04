// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorExternalSystemsConfigurationRequest } from "../models/models_0";
import { DeleteVoiceConnectorExternalSystemsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface DeleteVoiceConnectorExternalSystemsConfigurationCommandInput extends DeleteVoiceConnectorExternalSystemsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorExternalSystemsConfigurationCommand}.
 */
export interface DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the external systems configuration for a Voice Connector.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource couldn't be found.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class DeleteVoiceConnectorExternalSystemsConfigurationCommand extends command<DeleteVoiceConnectorExternalSystemsConfigurationCommandInput, DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnectorExternalSystemsConfiguration",
  DeleteVoiceConnectorExternalSystemsConfiguration$
) {
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
