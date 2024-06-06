// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCertificateFromCsrRequest, CreateCertificateFromCsrResponse } from "../models/models_0";
import { de_CreateCertificateFromCsrCommand, se_CreateCertificateFromCsrCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCertificateFromCsrCommand}.
 */
export interface CreateCertificateFromCsrCommandInput extends CreateCertificateFromCsrRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateFromCsrCommand}.
 */
export interface CreateCertificateFromCsrCommandOutput extends CreateCertificateFromCsrResponse, __MetadataBearer {}

/**
 * <p>Creates an X.509 certificate using the specified certificate signing
 *          request.
 *       </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action.
 *       </p>
 *          <note>
 *             <p>The CSR must include a public key that is either an RSA key with a length of at least
 *             2048 bits or an ECC key from NIST P-256, NIST P-384, or NIST P-521 curves. For supported
 *             certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. </p>
 *          </note>
 *          <note>
 *             <p>Reusing the same certificate signing request (CSR)
 *             results in a distinct certificate.</p>
 *          </note>
 *          <p>You can create multiple certificates in a batch by creating a directory, copying
 *          multiple <code>.csr</code> files into that directory, and then specifying that directory on the command
 *          line. The following commands show how to create a batch of certificates given a batch of
 *          CSRs. In the following commands, we assume that a set of CSRs are located inside of the
 *          directory my-csr-directory:</p>
 *          <p>On Linux and OS X, the command is: </p>
 *          <p>
 *             <code>$ ls my-csr-directory/ | xargs -I \{\} aws iot create-certificate-from-csr
 *             --certificate-signing-request file://my-csr-directory/\{\}</code>
 *          </p>
 *          <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
 *          to the <code>aws iot create-certificate-from-csr</code> Amazon Web Services CLI command to create a certificate for
 *          the corresponding CSR. </p>
 *          <p>You can also run the <code>aws iot create-certificate-from-csr</code> part of the
 *          command in parallel to speed up the certificate creation process:</p>
 *          <p>
 *             <code>$ ls my-csr-directory/ | xargs -P 10 -I \{\} aws iot create-certificate-from-csr
 *             --certificate-signing-request file://my-csr-directory/\{\}
 *          </code>
 *          </p>
 *          <p>On Windows PowerShell, the command to create certificates for all CSRs in
 *          my-csr-directory is:</p>
 *          <p>
 *             <code>> ls -Name my-csr-directory | %\{aws iot create-certificate-from-csr
 *             --certificate-signing-request file://my-csr-directory/$_\}
 *          </code>
 *          </p>
 *          <p>On a Windows command prompt, the command to create certificates for all CSRs in
 *          my-csr-directory is:</p>
 *          <p>
 *             <code>> forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
 *             --certificate-signing-request file://@path"
 *          </code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateFromCsrCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateFromCsrCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateCertificateFromCsrRequest
 *   certificateSigningRequest: "STRING_VALUE", // required
 *   setAsActive: true || false,
 * };
 * const command = new CreateCertificateFromCsrCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateFromCsrResponse
 * //   certificateArn: "STRING_VALUE",
 * //   certificateId: "STRING_VALUE",
 * //   certificatePem: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCertificateFromCsrCommandInput - {@link CreateCertificateFromCsrCommandInput}
 * @returns {@link CreateCertificateFromCsrCommandOutput}
 * @see {@link CreateCertificateFromCsrCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateFromCsrCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class CreateCertificateFromCsrCommand extends $Command
  .classBuilder<
    CreateCertificateFromCsrCommandInput,
    CreateCertificateFromCsrCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateCertificateFromCsr", {})
  .n("IoTClient", "CreateCertificateFromCsrCommand")
  .f(void 0, void 0)
  .ser(se_CreateCertificateFromCsrCommand)
  .de(de_CreateCertificateFromCsrCommand)
  .build() {}
