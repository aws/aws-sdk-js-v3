// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateDomainConfigurationRequest, CreateDomainConfigurationResponse } from "../models/models_0";
import { de_CreateDomainConfigurationCommand, se_CreateDomainConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainConfigurationCommand}.
 */
export interface CreateDomainConfigurationCommandInput extends CreateDomainConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainConfigurationCommand}.
 */
export interface CreateDomainConfigurationCommandOutput extends CreateDomainConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a domain configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateDomainConfigurationRequest
 *   domainConfigurationName: "STRING_VALUE", // required
 *   domainName: "STRING_VALUE",
 *   serverCertificateArns: [ // ServerCertificateArns
 *     "STRING_VALUE",
 *   ],
 *   validationCertificateArn: "STRING_VALUE",
 *   authorizerConfig: { // AuthorizerConfig
 *     defaultAuthorizerName: "STRING_VALUE",
 *     allowAuthorizerOverride: true || false,
 *   },
 *   serviceType: "DATA" || "CREDENTIAL_PROVIDER" || "JOBS",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
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
 * const command = new CreateDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainConfigurationResponse
 * //   domainConfigurationName: "STRING_VALUE",
 * //   domainConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDomainConfigurationCommandInput - {@link CreateDomainConfigurationCommandInput}
 * @returns {@link CreateDomainConfigurationCommandOutput}
 * @see {@link CreateDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateDomainConfigurationCommand extends $Command
  .classBuilder<
    CreateDomainConfigurationCommandInput,
    CreateDomainConfigurationCommandOutput,
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
  .s("AWSIotService", "CreateDomainConfiguration", {})
  .n("IoTClient", "CreateDomainConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateDomainConfigurationCommand)
  .de(de_CreateDomainConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainConfigurationRequest;
      output: CreateDomainConfigurationResponse;
    };
    sdk: {
      input: CreateDomainConfigurationCommandInput;
      output: CreateDomainConfigurationCommandOutput;
    };
  };
}
