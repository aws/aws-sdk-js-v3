// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorStreamingConfigurationRequest } from "../models/models_0";
import { DeleteVoiceConnectorStreamingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorStreamingConfigurationCommand}.
 */
export interface DeleteVoiceConnectorStreamingConfigurationCommandInput extends DeleteVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorStreamingConfigurationCommand}.
 */
export interface DeleteVoiceConnectorStreamingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a Voice Connector's streaming configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorStreamingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorStreamingConfigurationCommandInput - {@link DeleteVoiceConnectorStreamingConfigurationCommandInput}
 * @returns {@link DeleteVoiceConnectorStreamingConfigurationCommandOutput}
 * @see {@link DeleteVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteVoiceConnectorStreamingConfigurationCommand extends command<DeleteVoiceConnectorStreamingConfigurationCommandInput, DeleteVoiceConnectorStreamingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnectorStreamingConfiguration",
  DeleteVoiceConnectorStreamingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorStreamingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorStreamingConfigurationCommandInput;
      output: DeleteVoiceConnectorStreamingConfigurationCommandOutput;
    };
  };
}
