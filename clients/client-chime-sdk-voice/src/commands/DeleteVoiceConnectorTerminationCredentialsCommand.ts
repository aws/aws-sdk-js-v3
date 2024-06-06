// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteVoiceConnectorTerminationCredentialsRequest,
  DeleteVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DeleteVoiceConnectorTerminationCredentialsCommand,
  se_DeleteVoiceConnectorTerminationCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVoiceConnectorTerminationCredentialsCommand}.
 */
export interface DeleteVoiceConnectorTerminationCredentialsCommandInput
  extends DeleteVoiceConnectorTerminationCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceConnectorTerminationCredentialsCommand}.
 */
export interface DeleteVoiceConnectorTerminationCredentialsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified SIP credentials used by your equipment to
 *          authenticate during call termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, DeleteVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, DeleteVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // DeleteVoiceConnectorTerminationCredentialsRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Usernames: [ // SensitiveStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceConnectorTerminationCredentialsCommandInput - {@link DeleteVoiceConnectorTerminationCredentialsCommandInput}
 * @returns {@link DeleteVoiceConnectorTerminationCredentialsCommandOutput}
 * @see {@link DeleteVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
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
export class DeleteVoiceConnectorTerminationCredentialsCommand extends $Command
  .classBuilder<
    DeleteVoiceConnectorTerminationCredentialsCommandInput,
    DeleteVoiceConnectorTerminationCredentialsCommandOutput,
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
  .s("ChimeSDKTelephonyService", "DeleteVoiceConnectorTerminationCredentials", {})
  .n("ChimeSDKVoiceClient", "DeleteVoiceConnectorTerminationCredentialsCommand")
  .f(DeleteVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteVoiceConnectorTerminationCredentialsCommand)
  .de(de_DeleteVoiceConnectorTerminationCredentialsCommand)
  .build() {}
