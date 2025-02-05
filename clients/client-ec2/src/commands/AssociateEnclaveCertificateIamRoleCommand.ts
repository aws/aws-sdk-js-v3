// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateEnclaveCertificateIamRoleRequest,
  AssociateEnclaveCertificateIamRoleResult,
} from "../models/models_0";
import {
  de_AssociateEnclaveCertificateIamRoleCommand,
  se_AssociateEnclaveCertificateIamRoleCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateEnclaveCertificateIamRoleCommand}.
 */
export interface AssociateEnclaveCertificateIamRoleCommandInput extends AssociateEnclaveCertificateIamRoleRequest {}
/**
 * @public
 *
 * The output of {@link AssociateEnclaveCertificateIamRoleCommand}.
 */
export interface AssociateEnclaveCertificateIamRoleCommandOutput
  extends AssociateEnclaveCertificateIamRoleResult,
    __MetadataBearer {}

/**
 * <p>Associates an Identity and Access Management (IAM) role with an Certificate Manager (ACM) certificate.
 * 			This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">Certificate Manager for Nitro Enclaves</a> in the <i>Amazon Web Services Nitro Enclaves
 * 					User Guide</i>.</p>
 *          <p>When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted
 * 			private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate
 * 			is encrypted with an Amazon Web Services managed key that has an attached attestation-based key policy.</p>
 *          <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code>
 * 			on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key,
 * 			you must grant it permission to call <code>kms:Decrypt</code> on the KMS key returned by the command.
 * 			For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy">
 * 				Grant the role permission to access the certificate and encryption key</a> in the
 * 			<i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // AssociateEnclaveCertificateIamRoleRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * // { // AssociateEnclaveCertificateIamRoleResult
 * //   CertificateS3BucketName: "STRING_VALUE",
 * //   CertificateS3ObjectKey: "STRING_VALUE",
 * //   EncryptionKmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateEnclaveCertificateIamRoleCommandInput - {@link AssociateEnclaveCertificateIamRoleCommandInput}
 * @returns {@link AssociateEnclaveCertificateIamRoleCommandOutput}
 * @see {@link AssociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AssociateEnclaveCertificateIamRoleCommand extends $Command
  .classBuilder<
    AssociateEnclaveCertificateIamRoleCommandInput,
    AssociateEnclaveCertificateIamRoleCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AssociateEnclaveCertificateIamRole", {})
  .n("EC2Client", "AssociateEnclaveCertificateIamRoleCommand")
  .f(void 0, void 0)
  .ser(se_AssociateEnclaveCertificateIamRoleCommand)
  .de(de_AssociateEnclaveCertificateIamRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEnclaveCertificateIamRoleRequest;
      output: AssociateEnclaveCertificateIamRoleResult;
    };
    sdk: {
      input: AssociateEnclaveCertificateIamRoleCommandInput;
      output: AssociateEnclaveCertificateIamRoleCommandOutput;
    };
  };
}
