// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVoiceConnectorTerminationRequest } from "../models/models_0";
import {
  de_DeleteVoiceConnectorTerminationCommand,
  se_DeleteVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the termination settings for the specified Amazon Chime SDK Voice Connector.</p>
 *          <note>
 *             <p>If emergency calling is configured for the Voice Connector, it must be
 *          deleted prior to deleting the termination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
 * @public
 */
export class DeleteVoiceConnectorTerminationCommand extends $Command
  .classBuilder<
    DeleteVoiceConnectorTerminationCommandInput,
    DeleteVoiceConnectorTerminationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "DeleteVoiceConnectorTermination", {})
  .n("ChimeSDKVoiceClient", "DeleteVoiceConnectorTerminationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVoiceConnectorTerminationCommand)
  .de(de_DeleteVoiceConnectorTerminationCommand)
  .build() {}
