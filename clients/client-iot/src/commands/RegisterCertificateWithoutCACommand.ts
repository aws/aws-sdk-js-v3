// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { RegisterCertificateWithoutCARequest, RegisterCertificateWithoutCAResponse } from "../models/models_2";
import { RegisterCertificateWithoutCA$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterCertificateWithoutCACommand}.
 */
export interface RegisterCertificateWithoutCACommandInput extends RegisterCertificateWithoutCARequest {}
/**
 * @public
 *
 * The output of {@link RegisterCertificateWithoutCACommand}.
 */
export interface RegisterCertificateWithoutCACommandOutput extends RegisterCertificateWithoutCAResponse, __MetadataBearer {}

/**
 * <p>Register a certificate that does not have a certificate authority (CA).
 *          For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms">
 *          Certificate signing algorithms supported by IoT</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateWithoutCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateWithoutCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RegisterCertificateWithoutCARequest
 *   certificatePem: "STRING_VALUE", // required
 *   status: "ACTIVE" || "INACTIVE" || "REVOKED" || "PENDING_TRANSFER" || "REGISTER_INACTIVE" || "PENDING_ACTIVATION",
 * };
 * const command = new RegisterCertificateWithoutCACommand(input);
 * const response = await client.send(command);
 * // { // RegisterCertificateWithoutCAResponse
 * //   certificateArn: "STRING_VALUE",
 * //   certificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterCertificateWithoutCACommandInput - {@link RegisterCertificateWithoutCACommandInput}
 * @returns {@link RegisterCertificateWithoutCACommandOutput}
 * @see {@link RegisterCertificateWithoutCACommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateWithoutCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
export class RegisterCertificateWithoutCACommand extends $Command
  .classBuilder<
    RegisterCertificateWithoutCACommandInput,
    RegisterCertificateWithoutCACommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "RegisterCertificateWithoutCA", {})
  .n("IoTClient", "RegisterCertificateWithoutCACommand")
  .sc(RegisterCertificateWithoutCA$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterCertificateWithoutCARequest;
      output: RegisterCertificateWithoutCAResponse;
    };
    sdk: {
      input: RegisterCertificateWithoutCACommandInput;
      output: RegisterCertificateWithoutCACommandOutput;
    };
  };
}
