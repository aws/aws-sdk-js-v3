// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutVoiceConnectorTerminationCredentialsRequest } from "../models/models_0";
import { PutVoiceConnectorTerminationCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorTerminationCredentialsCommand}.
 */
export interface PutVoiceConnectorTerminationCredentialsCommandInput extends PutVoiceConnectorTerminationCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorTerminationCredentialsCommand}.
 */
export interface PutVoiceConnectorTerminationCredentialsCommandOutput extends __MetadataBearer {}

/**
 * Updates a Voice Connector's termination credentials.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
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
export class PutVoiceConnectorTerminationCredentialsCommand extends command<PutVoiceConnectorTerminationCredentialsCommandInput, PutVoiceConnectorTerminationCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "PutVoiceConnectorTerminationCredentials",
  PutVoiceConnectorTerminationCredentials$
) {
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
