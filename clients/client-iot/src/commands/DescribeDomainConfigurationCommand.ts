// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeDomainConfigurationRequest, DescribeDomainConfigurationResponse } from "../models/models_1";
import {
  de_DescribeDomainConfigurationCommand,
  se_DescribeDomainConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainConfigurationCommand}.
 */
export interface DescribeDomainConfigurationCommandInput extends DescribeDomainConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainConfigurationCommand}.
 */
export interface DescribeDomainConfigurationCommandOutput
  extends DescribeDomainConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets summary information about a domain configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeDomainConfigurationRequest
 *   domainConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainConfigurationResponse
 * //   domainConfigurationName: "STRING_VALUE",
 * //   domainConfigurationArn: "STRING_VALUE",
 * //   domainName: "STRING_VALUE",
 * //   serverCertificates: [ // ServerCertificates
 * //     { // ServerCertificateSummary
 * //       serverCertificateArn: "STRING_VALUE",
 * //       serverCertificateStatus: "INVALID" || "VALID",
 * //       serverCertificateStatusDetail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   authorizerConfig: { // AuthorizerConfig
 * //     defaultAuthorizerName: "STRING_VALUE",
 * //     allowAuthorizerOverride: true || false,
 * //   },
 * //   domainConfigurationStatus: "ENABLED" || "DISABLED",
 * //   serviceType: "DATA" || "CREDENTIAL_PROVIDER" || "JOBS",
 * //   domainType: "ENDPOINT" || "AWS_MANAGED" || "CUSTOMER_MANAGED",
 * //   lastStatusChangeDate: new Date("TIMESTAMP"),
 * //   tlsConfig: { // TlsConfig
 * //     securityPolicy: "STRING_VALUE",
 * //   },
 * //   serverCertificateConfig: { // ServerCertificateConfig
 * //     enableOCSPCheck: true || false,
 * //     ocspLambdaArn: "STRING_VALUE",
 * //     ocspAuthorizedResponderArn: "STRING_VALUE",
 * //   },
 * //   authenticationType: "CUSTOM_AUTH_X509" || "CUSTOM_AUTH" || "AWS_X509" || "AWS_SIGV4" || "DEFAULT",
 * //   applicationProtocol: "SECURE_MQTT" || "MQTT_WSS" || "HTTPS" || "DEFAULT",
 * //   clientCertificateConfig: { // ClientCertificateConfig
 * //     clientCertificateCallbackArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDomainConfigurationCommandInput - {@link DescribeDomainConfigurationCommandInput}
 * @returns {@link DescribeDomainConfigurationCommandOutput}
 * @see {@link DescribeDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
 *
 * @public
 */
export class DescribeDomainConfigurationCommand extends $Command
  .classBuilder<
    DescribeDomainConfigurationCommandInput,
    DescribeDomainConfigurationCommandOutput,
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
  .s("AWSIotService", "DescribeDomainConfiguration", {})
  .n("IoTClient", "DescribeDomainConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDomainConfigurationCommand)
  .de(de_DescribeDomainConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainConfigurationRequest;
      output: DescribeDomainConfigurationResponse;
    };
    sdk: {
      input: DescribeDomainConfigurationCommandInput;
      output: DescribeDomainConfigurationCommandOutput;
    };
  };
}
