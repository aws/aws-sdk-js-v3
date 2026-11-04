// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceConnectorGroupRequest } from "../models/models_0";
import { DeleteVoiceConnectorGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorGroupCommand}.
 */
export interface DeleteVoiceConnectorGroupCommandInput extends DeleteVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorGroupCommand}.
 */
export interface DeleteVoiceConnectorGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes an Amazon Chime SDK Voice Connector group. Any `VoiceConnectorItems` and phone numbers associated with the group must be removed before it can be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorGroupCommandInput - {@link DeleteVoiceConnectorGroupCommandInput}
 * @returns {@link DeleteVoiceConnectorGroupCommandOutput}
 * @see {@link DeleteVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorGroupCommandOutput} for command's `response` shape.
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
export class DeleteVoiceConnectorGroupCommand extends command<DeleteVoiceConnectorGroupCommandInput, DeleteVoiceConnectorGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceConnectorGroup",
  DeleteVoiceConnectorGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceConnectorGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteVoiceConnectorGroupCommandInput;
      output: DeleteVoiceConnectorGroupCommandOutput;
    };
  };
}
