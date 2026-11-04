// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDomainConfigurationRequest, CreateDomainConfigurationResponse } from "../models/models_0";
import { CreateDomainConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a domain configuration.
 *
 * Requires permission to access the [CreateDomainConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * The certificate is invalid.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CreateDomainConfigurationCommand extends command<CreateDomainConfigurationCommandInput, CreateDomainConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDomainConfiguration",
  CreateDomainConfiguration$
) {
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
