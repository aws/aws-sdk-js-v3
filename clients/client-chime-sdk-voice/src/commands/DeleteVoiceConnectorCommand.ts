// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorRequest } from "../models/models_0";
import { DeleteVoiceConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorCommand}.
 */
export interface DeleteVoiceConnectorCommandInput extends DeleteVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorCommand}.
 */
export interface DeleteVoiceConnectorCommandOutput extends __MetadataBearer {}

/**
 * Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated with the Amazon Chime SDK Voice Connector must be disassociated from it before it can be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorCommandInput - {@link DeleteVoiceConnectorCommandInput}
 * @returns {@link DeleteVoiceConnectorCommandOutput}
 * @see {@link DeleteVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
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
export class DeleteVoiceConnectorCommand extends command<DeleteVoiceConnectorCommandInput, DeleteVoiceConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnector",
  DeleteVoiceConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorCommandInput;
      output: DeleteVoiceConnectorCommandOutput;
    };
  };
}
