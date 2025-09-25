// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UploadServerCertificateRequest, UploadServerCertificateResponse } from "../models/models_1";
import { UploadServerCertificate } from "../schemas/schemas_20_Server";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UploadServerCertificateCommand}.
 */
export interface UploadServerCertificateCommandInput extends UploadServerCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UploadServerCertificateCommand}.
 */
export interface UploadServerCertificateCommandOutput extends UploadServerCertificateResponse, __MetadataBearer {}

/**
 * <p>Uploads a server certificate entity for the Amazon Web Services account. The server certificate
 *             entity includes a public key certificate, a private key, and an optional certificate
 *             chain, which should all be PEM-encoded.</p>
 *          <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">Certificate Manager</a> to
 *             provision, manage, and deploy your server certificates. With ACM you can request a
 *             certificate, deploy it to Amazon Web Services resources, and let ACM handle certificate renewals for
 *             you. Certificates provided by ACM are free. For more information about using ACM,
 *             see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">Certificate Manager User
 *                 Guide</a>.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic includes a list of Amazon Web Services services that can use the server certificates that you
 *             manage with IAM.</p>
 *          <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Because the body of the public key certificate, private key, and the certificate
 *                 chain can be large, you should use POST rather than GET when calling
 *                     <code>UploadServerCertificate</code>. For information about setting up
 *                 signatures and authorization through the API, see <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing Amazon Web Services API
 *                     requests</a> in the <i>Amazon Web Services General Reference</i>. For general
 *                 information about using the Query API with IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by making HTTP query
 *                     requests</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UploadServerCertificateRequest
 *   Path: "STRING_VALUE",
 *   ServerCertificateName: "STRING_VALUE", // required
 *   CertificateBody: "STRING_VALUE", // required
 *   PrivateKey: "STRING_VALUE", // required
 *   CertificateChain: "STRING_VALUE",
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UploadServerCertificateCommand(input);
 * const response = await client.send(command);
 * // { // UploadServerCertificateResponse
 * //   ServerCertificateMetadata: { // ServerCertificateMetadata
 * //     Path: "STRING_VALUE", // required
 * //     ServerCertificateName: "STRING_VALUE", // required
 * //     ServerCertificateId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     UploadDate: new Date("TIMESTAMP"),
 * //     Expiration: new Date("TIMESTAMP"),
 * //   },
 * //   Tags: [ // tagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UploadServerCertificateCommandInput - {@link UploadServerCertificateCommandInput}
 * @returns {@link UploadServerCertificateCommandOutput}
 * @see {@link UploadServerCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link KeyPairMismatchException} (client fault)
 *  <p>The request was rejected because the public key certificate and the private key do not
 *       match.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedCertificateException} (client fault)
 *  <p>The request was rejected because the certificate was malformed or expired. The error
 *       message describes the specific error.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To upload a server certificate to your AWS account
 * ```javascript
 * // The following upload-server-certificate command uploads a server certificate to your AWS account:
 * const input = {
 *   CertificateBody: "-----BEGIN CERTIFICATE-----<a very long certificate text string>-----END CERTIFICATE-----",
 *   Path: "/company/servercerts/",
 *   PrivateKey: "-----BEGIN DSA PRIVATE KEY-----<a very long private key string>-----END DSA PRIVATE KEY-----",
 *   ServerCertificateName: "ProdServerCert"
 * };
 * const command = new UploadServerCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ServerCertificateMetadata: {
 *     Arn: "arn:aws:iam::123456789012:server-certificate/company/servercerts/ProdServerCert",
 *     Expiration: "2012-05-08T01:02:03.004Z",
 *     Path: "/company/servercerts/",
 *     ServerCertificateId: "ASCA1111111111EXAMPLE",
 *     ServerCertificateName: "ProdServerCert",
 *     UploadDate: "2010-05-08T01:02:03.004Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UploadServerCertificateCommand extends $Command
  .classBuilder<
    UploadServerCertificateCommandInput,
    UploadServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UploadServerCertificate", {})
  .n("IAMClient", "UploadServerCertificateCommand")
  .sc(UploadServerCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadServerCertificateRequest;
      output: UploadServerCertificateResponse;
    };
    sdk: {
      input: UploadServerCertificateCommandInput;
      output: UploadServerCertificateCommandOutput;
    };
  };
}
