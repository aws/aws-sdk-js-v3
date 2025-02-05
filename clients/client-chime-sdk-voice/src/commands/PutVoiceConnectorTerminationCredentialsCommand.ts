// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorTerminationCredentialsRequest,
  PutVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  de_PutVoiceConnectorTerminationCredentialsCommand,
  se_PutVoiceConnectorTerminationCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorTerminationCredentialsCommand}.
 */
export interface PutVoiceConnectorTerminationCredentialsCommandInput
  extends PutVoiceConnectorTerminationCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorTerminationCredentialsCommand}.
 */
export interface PutVoiceConnectorTerminationCredentialsCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a Voice Connector's termination credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorTerminationCredentialsRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Credentials: [ // CredentialList
 *     { // Credential
 *       Username: "STRING_VALUE",
 *       Password: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutVoiceConnectorTerminationCredentialsCommandInput - {@link PutVoiceConnectorTerminationCredentialsCommandInput}
 * @returns {@link PutVoiceConnectorTerminationCredentialsCommandOutput}
 * @see {@link PutVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
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
export class PutVoiceConnectorTerminationCredentialsCommand extends $Command
  .classBuilder<
    PutVoiceConnectorTerminationCredentialsCommandInput,
    PutVoiceConnectorTerminationCredentialsCommandOutput,
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
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorTerminationCredentials", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorTerminationCredentialsCommand")
  .f(PutVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog, void 0)
  .ser(se_PutVoiceConnectorTerminationCredentialsCommand)
  .de(de_PutVoiceConnectorTerminationCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVoiceConnectorTerminationCredentialsRequest;
      output: {};
    };
    sdk: {
      input: PutVoiceConnectorTerminationCredentialsCommandInput;
      output: PutVoiceConnectorTerminationCredentialsCommandOutput;
    };
  };
}
