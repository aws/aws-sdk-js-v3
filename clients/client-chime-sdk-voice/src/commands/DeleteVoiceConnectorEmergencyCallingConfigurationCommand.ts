// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorEmergencyCallingConfigurationRequest } from "../models/models_0";
import { DeleteVoiceConnectorEmergencyCallingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput extends DeleteVoiceConnectorEmergencyCallingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommand}.
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the emergency calling details from the specified Amazon Chime SDK Voice Connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorEmergencyCallingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorEmergencyCallingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorEmergencyCallingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorEmergencyCallingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput - {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput}
 * @returns {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput}
 * @see {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteVoiceConnectorEmergencyCallingConfigurationCommand extends command<DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput, DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnectorEmergencyCallingConfiguration",
  DeleteVoiceConnectorEmergencyCallingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorEmergencyCallingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput;
      output: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput;
    };
  };
}
