// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVoiceConnectorRequest } from "../models/models_0";
import { DeleteVoiceConnector } from "../schemas/schemas_46_DeleteVoiceConnector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated
 *          with the Amazon Chime SDK Voice Connector must be disassociated from it before it
 *          can be deleted.</p>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
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
export class DeleteVoiceConnectorCommand extends $Command
  .classBuilder<
    DeleteVoiceConnectorCommandInput,
    DeleteVoiceConnectorCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "DeleteVoiceConnector", {})
  .n("ChimeSDKVoiceClient", "DeleteVoiceConnectorCommand")
  .sc(DeleteVoiceConnector)
  .build() {
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
