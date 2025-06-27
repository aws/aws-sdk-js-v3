// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVoiceConnectorOriginationRequest } from "../models/models_0";
import {
  de_DeleteVoiceConnectorOriginationCommand,
  se_DeleteVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the origination settings for the specified Amazon Chime SDK Voice Connector. </p>
 *          <note>
 *             <p>If emergency calling is configured for the Voice Connector, it must be
 *          deleted prior to deleting the origination settings.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
export class DeleteVoiceConnectorOriginationCommand extends $Command
  .classBuilder<
    DeleteVoiceConnectorOriginationCommandInput,
    DeleteVoiceConnectorOriginationCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "DeleteVoiceConnectorOrigination", {})
  .n("ChimeSDKVoiceClient", "DeleteVoiceConnectorOriginationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVoiceConnectorOriginationCommand)
  .de(de_DeleteVoiceConnectorOriginationCommand)
  .build() {
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
