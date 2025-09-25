// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCertificateAuthorityRequest } from "../models/models_0";
import { UpdateCertificateAuthority } from "../schemas/schemas_2_Certificate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCertificateAuthorityCommand}.
 */
export interface UpdateCertificateAuthorityCommandInput extends UpdateCertificateAuthorityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateAuthorityCommand}.
 */
export interface UpdateCertificateAuthorityCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or make a CA that is in the <code>DISABLED</code> state active again.</p> <note> <p>Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies">Access policies for CRLs in Amazon S3</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, UpdateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UpdateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // UpdateCertificateAuthorityRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   RevocationConfiguration: { // RevocationConfiguration
 *     CrlConfiguration: { // CrlConfiguration
 *       Enabled: true || false, // required
 *       ExpirationInDays: Number("int"),
 *       CustomCname: "STRING_VALUE",
 *       S3BucketName: "STRING_VALUE",
 *       S3ObjectAcl: "PUBLIC_READ" || "BUCKET_OWNER_FULL_CONTROL",
 *       CrlDistributionPointExtensionConfiguration: { // CrlDistributionPointExtensionConfiguration
 *         OmitExtension: true || false, // required
 *       },
 *       CrlType: "COMPLETE" || "PARTITIONED",
 *       CustomPath: "STRING_VALUE",
 *     },
 *     OcspConfiguration: { // OcspConfiguration
 *       Enabled: true || false, // required
 *       OcspCustomCname: "STRING_VALUE",
 *     },
 *   },
 *   Status: "CREATING" || "PENDING_CERTIFICATE" || "ACTIVE" || "DELETED" || "DISABLED" || "EXPIRED" || "FAILED",
 * };
 * const command = new UpdateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCertificateAuthorityCommandInput - {@link UpdateCertificateAuthorityCommandInput}
 * @returns {@link UpdateCertificateAuthorityCommandOutput}
 * @see {@link UpdateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>A previous update to your private CA is still ongoing.</p>
 *
 * @throws {@link InvalidArgsException} (client fault)
 *  <p>One or more of the specified arguments was not valid.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidPolicyException} (client fault)
 *  <p>The resource policy is invalid or is missing a required statement. For general information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 *
 * @public
 */
export class UpdateCertificateAuthorityCommand extends $Command
  .classBuilder<
    UpdateCertificateAuthorityCommandInput,
    UpdateCertificateAuthorityCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ACMPrivateCA", "UpdateCertificateAuthority", {})
  .n("ACMPCAClient", "UpdateCertificateAuthorityCommand")
  .sc(UpdateCertificateAuthority)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateAuthorityRequest;
      output: {};
    };
    sdk: {
      input: UpdateCertificateAuthorityCommandInput;
      output: UpdateCertificateAuthorityCommandOutput;
    };
  };
}
