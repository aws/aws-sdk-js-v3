// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorProxyRequest,
  PutVoiceConnectorProxyRequestFilterSensitiveLog,
  PutVoiceConnectorProxyResponse,
  PutVoiceConnectorProxyResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_PutVoiceConnectorProxyCommand, se_PutVoiceConnectorProxyCommand } from "../protocols/Aws_restJson1";

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
 * <p>Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorProxy.html">PutVoiceConnectorProxy</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by PutVoiceConnectorProxy in the Amazon Chime SDK Voice Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorProxyCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorProxyCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class PutVoiceConnectorProxyCommand extends $Command
  .classBuilder<
    PutVoiceConnectorProxyCommandInput,
    PutVoiceConnectorProxyCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "PutVoiceConnectorProxy", {})
  .n("ChimeClient", "PutVoiceConnectorProxyCommand")
  .f(PutVoiceConnectorProxyRequestFilterSensitiveLog, PutVoiceConnectorProxyResponseFilterSensitiveLog)
  .ser(se_PutVoiceConnectorProxyCommand)
  .de(de_PutVoiceConnectorProxyCommand)
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
