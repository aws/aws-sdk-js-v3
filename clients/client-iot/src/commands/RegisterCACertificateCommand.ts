// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCACertificateRequest, RegisterCACertificateResponse } from "../models/models_2";
import { RegisterCACertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterCACertificateCommand}.
 */
export interface RegisterCACertificateCommandInput extends RegisterCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCACertificateCommand}.
 */
export interface RegisterCACertificateCommandOutput extends RegisterCACertificateResponse, __MetadataBearer {}

/**
 * <p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA
 *          certificates you can register in your Amazon Web Services account. You can register up to 10 CA
 *          certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RegisterCACertificateRequest
 *   caCertificate: "STRING_VALUE", // required
 *   verificationCertificate: "STRING_VALUE",
 *   setAsActive: true || false,
 *   allowAutoRegistration: true || false,
 *   registrationConfig: { // RegistrationConfig
 *     templateBody: "STRING_VALUE",
 *     roleArn: "STRING_VALUE",
 *     templateName: "STRING_VALUE",
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   certificateMode: "DEFAULT" || "SNI_ONLY",
 * };
 * const command = new RegisterCACertificateCommand(input);
 * const response = await client.send(command);
 * // { // RegisterCACertificateResponse
 * //   certificateArn: "STRING_VALUE",
 * //   certificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterCACertificateCommandInput - {@link RegisterCACertificateCommandInput}
 * @returns {@link RegisterCACertificateCommandOutput}
 * @see {@link RegisterCACertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCACertificateCommandOutput} for command's `response` shape.
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
 * @throws {@link RegistrationCodeValidationException} (client fault)
 *  <p>The registration code is invalid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class RegisterCACertificateCommand extends $Command
  .classBuilder<
    RegisterCACertificateCommandInput,
    RegisterCACertificateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "RegisterCACertificate", {})
  .n("IoTClient", "RegisterCACertificateCommand")
  .sc(RegisterCACertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCACertificateRequest;
      output: RegisterCACertificateResponse;
    };
    sdk: {
      input: RegisterCACertificateCommandInput;
      output: RegisterCACertificateCommandOutput;
    };
  };
}
