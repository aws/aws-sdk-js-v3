// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { RegisterCertificateRequest, RegisterCertificateResponse } from "../models/models_2";
import { RegisterCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterCertificateCommand}.
 */
export interface RegisterCertificateCommandInput extends RegisterCertificateRequest {}
/**
 * @public
 *
 * The output of {@link RegisterCertificateCommand}.
 */
export interface RegisterCertificateCommandOutput extends RegisterCertificateResponse, __MetadataBearer {}

/**
 * <p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must
 *          specify the CA certificate that was used to sign the device certificate being
 *          registered.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RegisterCertificateRequest
 *   certificatePem: "STRING_VALUE", // required
 *   caCertificatePem: "STRING_VALUE",
 *   setAsActive: true || false,
 *   status: "ACTIVE" || "INACTIVE" || "REVOKED" || "PENDING_TRANSFER" || "REGISTER_INACTIVE" || "PENDING_ACTIVATION",
 * };
 * const command = new RegisterCertificateCommand(input);
 * const response = await client.send(command);
 * // { // RegisterCertificateResponse
 * //   certificateArn: "STRING_VALUE",
 * //   certificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterCertificateCommandInput - {@link RegisterCertificateCommandInput}
 * @returns {@link RegisterCertificateCommandOutput}
 * @see {@link RegisterCertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link CertificateConflictException} (client fault)
 *  <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 *
 * @throws {@link CertificateStateException} (client fault)
 *  <p>The certificate operation is not allowed.</p>
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
 *
 * @public
 */
export class RegisterCertificateCommand extends $Command
  .classBuilder<
    RegisterCertificateCommandInput,
    RegisterCertificateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "RegisterCertificate", {})
  .n("IoTClient", "RegisterCertificateCommand")
  .sc(RegisterCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCertificateRequest;
      output: RegisterCertificateResponse;
    };
    sdk: {
      input: RegisterCertificateCommandInput;
      output: RegisterCertificateCommandOutput;
    };
  };
}
