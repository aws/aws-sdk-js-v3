// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorOriginationRequest } from "../models/models_0";
import { DeleteVoiceConnectorOrigination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorOriginationCommand}.
 */
export interface DeleteVoiceConnectorOriginationCommandInput extends DeleteVoiceConnectorOriginationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorOriginationCommand}.
 */
export interface DeleteVoiceConnectorOriginationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the origination settings for the specified Amazon Chime SDK Voice Connector.
 *
 * > **Note:** If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the origination settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorOriginationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorOriginationCommandInput - {@link DeleteVoiceConnectorOriginationCommandInput}
 * @returns {@link DeleteVoiceConnectorOriginationCommandOutput}
 * @see {@link DeleteVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorOriginationCommandOutput} for command's `response` shape.
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
export class DeleteVoiceConnectorOriginationCommand extends command<DeleteVoiceConnectorOriginationCommandInput, DeleteVoiceConnectorOriginationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnectorOrigination",
  DeleteVoiceConnectorOrigination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorOriginationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorOriginationCommandInput;
      output: DeleteVoiceConnectorOriginationCommandOutput;
    };
  };
}
