// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UploadSigningCertificateRequest, UploadSigningCertificateResponse } from "../models/models_1";
import { UploadSigningCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UploadSigningCertificateCommand}.
 */
export interface UploadSigningCertificateCommandInput extends UploadSigningCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UploadSigningCertificateCommand}.
 */
export interface UploadSigningCertificateCommandOutput extends UploadSigningCertificateResponse, __MetadataBearer {}

/**
 * Uploads an X.509 signing certificate and associates it with the specified IAM user. Some Amazon Web Services services require you to use certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is `Active`.
 *
 * For information about when you would use an X.509 signing certificate, see [Managing server certificates in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html) in the *IAM User Guide*.
 *
 * If the `UserName` is not specified, the IAM user name is determined implicitly based on the Amazon Web Services access key ID used to sign the request. This operation works for access keys under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user credentials even if the Amazon Web Services account has no associated users.
 *
 * > **Note:** Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling `UploadSigningCertificate`. For information about setting up signatures and authorization through the API, see [Signing Amazon Web Services API requests](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) in the *Amazon Web Services General Reference*. For general information about using the Query API with IAM, see [Making query requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSigningCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSigningCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UploadSigningCertificateRequest
 *   UserName: "STRING_VALUE",
 *   CertificateBody: "STRING_VALUE", // required
 * };
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * // { // UploadSigningCertificateResponse
 * //   Certificate: { // SigningCertificate
 * //     UserName: "STRING_VALUE", // required
 * //     CertificateId: "STRING_VALUE", // required
 * //     CertificateBody: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive" || "Expired", // required
 * //     UploadDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UploadSigningCertificateCommandInput - {@link UploadSigningCertificateCommandInput}
 * @returns {@link UploadSigningCertificateCommandOutput}
 * @see {@link UploadSigningCertificateCommandInput} for command's `input` shape.
 * @see {@link UploadSigningCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link DuplicateCertificateException} (client fault)
 *
 * The request was rejected because the same certificate is associated with an IAM user in the account.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @throws {@link InvalidCertificateException} (client fault)
 *
 * The request was rejected because the certificate is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link MalformedCertificateException} (client fault)
 *
 * The request was rejected because the certificate was malformed or expired. The error message describes the specific error.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To upload a signing certificate for an IAM user
 * ```javascript
 * // The following command uploads a signing certificate for the IAM user named Bob.
 * const input = {
 *   CertificateBody: "-----BEGIN CERTIFICATE-----<certificate-body>-----END CERTIFICATE-----",
 *   UserName: "Bob"
 * };
 * const command = new UploadSigningCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Certificate: {
 *     CertificateBody: "-----BEGIN CERTIFICATE-----<certificate-body>-----END CERTIFICATE-----",
 *     CertificateId: "ID123456789012345EXAMPLE",
 *     Status: "Active",
 *     UploadDate: "2015-06-06T21:40:08.121Z",
 *     UserName: "Bob"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UploadSigningCertificateCommand extends command<UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput>(
  _ep0,
  _mw0,
  "UploadSigningCertificate",
  UploadSigningCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadSigningCertificateRequest;
      output: UploadSigningCertificateResponse;
    };
    sdk: {
      input: UploadSigningCertificateCommandInput;
      output: UploadSigningCertificateCommandOutput;
    };
  };
}
