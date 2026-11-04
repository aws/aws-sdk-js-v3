// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCertificateFromCsrRequest, CreateCertificateFromCsrResponse } from "../models/models_0";
import { CreateCertificateFromCsr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an X.509 certificate using the specified certificate signing request.
 *
 * Requires permission to access the [CreateCertificateFromCsr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * > **Note:** The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256, NIST P-384, or NIST P-521 curves. For supported certificates, consult [Certificate signing algorithms supported by IoT](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms).
 *
 * > **Note:** Reusing the same certificate signing request (CSR) results in a distinct certificate.
 *
 * You can create multiple certificates in a batch by creating a directory, copying multiple `.csr` files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. In the following commands, we assume that a set of CSRs are located inside of the directory my-csr-directory:
 *
 * On Linux and OS X, the command is:
 *
 * `$ ls my-csr-directory/ | xargs -I \{\} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/\{\}`
 *
 * This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the `aws iot create-certificate-from-csr` Amazon Web Services CLI command to create a certificate for the corresponding CSR.
 *
 * You can also run the `aws iot create-certificate-from-csr` part of the command in parallel to speed up the certificate creation process:
 *
 * `$ ls my-csr-directory/ | xargs -P 10 -I \{\} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/\{\}`
 *
 * On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:
 *
 * `> ls -Name my-csr-directory | %\{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_\}`
 *
 * On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:
 *
 * `> forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateFromCsrCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateFromCsrCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
export class CreateCertificateFromCsrCommand extends command<CreateCertificateFromCsrCommandInput, CreateCertificateFromCsrCommandOutput>(
  _ep0,
  _mw0,
  "CreateCertificateFromCsr",
  CreateCertificateFromCsr$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCertificateFromCsrRequest;
      output: CreateCertificateFromCsrResponse;
    };
    sdk: {
      input: CreateCertificateFromCsrCommandInput;
      output: CreateCertificateFromCsrCommandOutput;
    };
  };
}
