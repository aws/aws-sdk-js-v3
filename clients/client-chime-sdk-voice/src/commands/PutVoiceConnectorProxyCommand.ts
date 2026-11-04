// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutVoiceConnectorProxyRequest, PutVoiceConnectorProxyResponse } from "../models/models_0";
import { PutVoiceConnectorProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorProxyCommand}.
 */
export interface PutVoiceConnectorProxyCommandInput extends PutVoiceConnectorProxyRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorProxyCommand}.
 */
export interface PutVoiceConnectorProxyCommandOutput extends PutVoiceConnectorProxyResponse, __MetadataBearer {}

/**
 * Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.
 *
 * > **Important:** End of support notice: On April 7, 2026, AWS will end support for Amazon Chime SDK proxy sessions.
 *
 * @deprecated (since 2026-04-07) End of support notice: On April 7, 2026, AWS ended support for Amazon Chime SDK proxy sessions. For more information, refer to https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorProxy.html.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorProxyCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorProxyCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorProxyRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   DefaultSessionExpiryMinutes: Number("int"), // required
 *   PhoneNumberPoolCountries: [ // CountryList // required
 *     "STRING_VALUE",
 *   ],
 *   FallBackPhoneNumber: "STRING_VALUE",
 *   Disabled: true || false,
 * };
 * const command = new PutVoiceConnectorProxyCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorProxyResponse
 * //   Proxy: { // Proxy
 * //     DefaultSessionExpiryMinutes: Number("int"),
 * //     Disabled: true || false,
 * //     FallBackPhoneNumber: "STRING_VALUE",
 * //     PhoneNumberCountries: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorProxyCommandInput - {@link PutVoiceConnectorProxyCommandInput}
 * @returns {@link PutVoiceConnectorProxyCommandOutput}
 * @see {@link PutVoiceConnectorProxyCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorProxyCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have the permissions needed to run this action.
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
export class PutVoiceConnectorProxyCommand extends command<PutVoiceConnectorProxyCommandInput, PutVoiceConnectorProxyCommandOutput>(
  _ep0,
  _mw0,
  "PutVoiceConnectorProxy",
  PutVoiceConnectorProxy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVoiceConnectorProxyRequest;
      output: PutVoiceConnectorProxyResponse;
    };
    sdk: {
      input: PutVoiceConnectorProxyCommandInput;
      output: PutVoiceConnectorProxyCommandOutput;
    };
  };
}
