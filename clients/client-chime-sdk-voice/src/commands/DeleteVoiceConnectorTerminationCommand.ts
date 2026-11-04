// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorTerminationRequest } from "../models/models_0";
import { DeleteVoiceConnectorTermination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorTerminationCommand}.
 */
export interface DeleteVoiceConnectorTerminationCommandInput extends DeleteVoiceConnectorTerminationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorTerminationCommand}.
 */
export interface DeleteVoiceConnectorTerminationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the termination settings for the specified Amazon Chime SDK Voice Connector.
 *
 * > **Note:** If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the termination settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorTerminationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorTerminationCommandInput - {@link DeleteVoiceConnectorTerminationCommandInput}
 * @returns {@link DeleteVoiceConnectorTerminationCommandOutput}
 * @see {@link DeleteVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorTerminationCommandOutput} for command's `response` shape.
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
export class DeleteVoiceConnectorTerminationCommand extends command<DeleteVoiceConnectorTerminationCommandInput, DeleteVoiceConnectorTerminationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnectorTermination",
  DeleteVoiceConnectorTermination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorTerminationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorTerminationCommandInput;
      output: DeleteVoiceConnectorTerminationCommandOutput;
    };
  };
}
