// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutVoiceConnectorProxyRequest, PutVoiceConnectorProxyResponse } from "../models/models_0";
import { PutVoiceConnectorProxy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.</p>
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
 *  <p>You don't have the permissions needed to run this action.</p>
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
export class PutVoiceConnectorProxyCommand extends $Command
  .classBuilder<
    PutVoiceConnectorProxyCommandInput,
    PutVoiceConnectorProxyCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorProxy", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorProxyCommand")
  .sc(PutVoiceConnectorProxy)
  .build() {
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
