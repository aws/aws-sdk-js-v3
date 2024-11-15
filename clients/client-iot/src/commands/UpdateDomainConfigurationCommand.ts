// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateDomainConfigurationRequest, UpdateDomainConfigurationResponse } from "../models/models_2";
import { de_UpdateDomainConfigurationCommand, se_UpdateDomainConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainConfigurationCommand}.
 */
export interface UpdateDomainConfigurationCommandInput extends UpdateDomainConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainConfigurationCommand}.
 */
export interface UpdateDomainConfigurationCommandOutput extends UpdateDomainConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates values stored in the domain configuration. Domain configurations for default
 *          endpoints can't be updated.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateDomainConfigurationRequest
 *   domainConfigurationName: "STRING_VALUE", // required
 *   authorizerConfig: { // AuthorizerConfig
 *     defaultAuthorizerName: "STRING_VALUE",
 *     allowAuthorizerOverride: true || false,
 *   },
 *   domainConfigurationStatus: "ENABLED" || "DISABLED",
 *   removeAuthorizerConfig: true || false,
 *   tlsConfig: { // TlsConfig
 *     securityPolicy: "STRING_VALUE",
 *   },
 *   serverCertificateConfig: { // ServerCertificateConfig
 *     enableOCSPCheck: true || false,
 *     ocspLambdaArn: "STRING_VALUE",
 *     ocspAuthorizedResponderArn: "STRING_VALUE",
 *   },
 *   authenticationType: "CUSTOM_AUTH_X509" || "CUSTOM_AUTH" || "AWS_X509" || "AWS_SIGV4" || "DEFAULT",
 *   applicationProtocol: "SECURE_MQTT" || "MQTT_WSS" || "HTTPS" || "DEFAULT",
 *   clientCertificateConfig: { // ClientCertificateConfig
 *     clientCertificateCallbackArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainConfigurationResponse
 * //   domainConfigurationName: "STRING_VALUE",
 * //   domainConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainConfigurationCommandInput - {@link UpdateDomainConfigurationCommandInput}
 * @returns {@link UpdateDomainConfigurationCommandOutput}
 * @see {@link UpdateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *  <p>The certificate is invalid.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class UpdateDomainConfigurationCommand extends $Command
  .classBuilder<
    UpdateDomainConfigurationCommandInput,
    UpdateDomainConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateDomainConfiguration", {})
  .n("IoTClient", "UpdateDomainConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDomainConfigurationCommand)
  .de(de_UpdateDomainConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainConfigurationRequest;
      output: UpdateDomainConfigurationResponse;
    };
    sdk: {
      input: UpdateDomainConfigurationCommandInput;
      output: UpdateDomainConfigurationCommandOutput;
    };
  };
}
