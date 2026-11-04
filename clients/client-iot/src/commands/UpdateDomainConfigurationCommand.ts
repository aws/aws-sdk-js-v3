// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainConfigurationRequest, UpdateDomainConfigurationResponse } from "../models/models_2";
import { UpdateDomainConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.
 *
 * Requires permission to access the [UpdateDomainConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class UpdateDomainConfigurationCommand extends command<UpdateDomainConfigurationCommandInput, UpdateDomainConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomainConfiguration",
  UpdateDomainConfiguration$
) {
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
