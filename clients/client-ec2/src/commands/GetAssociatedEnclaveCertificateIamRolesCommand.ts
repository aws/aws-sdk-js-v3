// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAssociatedEnclaveCertificateIamRolesRequest,
  GetAssociatedEnclaveCertificateIamRolesResult,
} from "../models/models_6";
import { GetAssociatedEnclaveCertificateIamRoles } from "../schemas/schemas_180_Iam";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssociatedEnclaveCertificateIamRolesCommand}.
 */
export interface GetAssociatedEnclaveCertificateIamRolesCommandInput
  extends GetAssociatedEnclaveCertificateIamRolesRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedEnclaveCertificateIamRolesCommand}.
 */
export interface GetAssociatedEnclaveCertificateIamRolesCommandOutput
  extends GetAssociatedEnclaveCertificateIamRolesResult,
    __MetadataBearer {}

/**
 * <p>Returns the IAM roles that are associated with the specified ACM (ACM) certificate.
 * 			It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate,
 * 			certificate chain, and encrypted private key bundle are stored, and the ARN of the KMS key
 * 			that's used to encrypt the private key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetAssociatedEnclaveCertificateIamRolesRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetAssociatedEnclaveCertificateIamRolesCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedEnclaveCertificateIamRolesResult
 * //   AssociatedRoles: [ // AssociatedRolesList
 * //     { // AssociatedRole
 * //       AssociatedRoleArn: "STRING_VALUE",
 * //       CertificateS3BucketName: "STRING_VALUE",
 * //       CertificateS3ObjectKey: "STRING_VALUE",
 * //       EncryptionKmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAssociatedEnclaveCertificateIamRolesCommandInput - {@link GetAssociatedEnclaveCertificateIamRolesCommandInput}
 * @returns {@link GetAssociatedEnclaveCertificateIamRolesCommandOutput}
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetAssociatedEnclaveCertificateIamRolesCommand extends $Command
  .classBuilder<
    GetAssociatedEnclaveCertificateIamRolesCommandInput,
    GetAssociatedEnclaveCertificateIamRolesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetAssociatedEnclaveCertificateIamRoles", {})
  .n("EC2Client", "GetAssociatedEnclaveCertificateIamRolesCommand")
  .sc(GetAssociatedEnclaveCertificateIamRoles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssociatedEnclaveCertificateIamRolesRequest;
      output: GetAssociatedEnclaveCertificateIamRolesResult;
    };
    sdk: {
      input: GetAssociatedEnclaveCertificateIamRolesCommandInput;
      output: GetAssociatedEnclaveCertificateIamRolesCommandOutput;
    };
  };
}
