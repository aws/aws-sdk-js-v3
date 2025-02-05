// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateEnclaveCertificateIamRoleRequest,
  DisassociateEnclaveCertificateIamRoleResult,
} from "../models/models_5";
import {
  de_DisassociateEnclaveCertificateIamRoleCommand,
  se_DisassociateEnclaveCertificateIamRoleCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateEnclaveCertificateIamRoleCommand}.
 */
export interface DisassociateEnclaveCertificateIamRoleCommandInput
  extends DisassociateEnclaveCertificateIamRoleRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateEnclaveCertificateIamRoleCommand}.
 */
export interface DisassociateEnclaveCertificateIamRoleCommandOutput
  extends DisassociateEnclaveCertificateIamRoleResult,
    __MetadataBearer {}

/**
 * <p>Disassociates an IAM role from an Certificate Manager (ACM) certificate. Disassociating an IAM role
 * 			from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and
 * 			encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the
 * 			KMS key used to encrypt the private key. This effectively revokes the role's permission
 * 			to use the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DisassociateEnclaveCertificateIamRoleRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateEnclaveCertificateIamRoleResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisassociateEnclaveCertificateIamRoleCommandInput - {@link DisassociateEnclaveCertificateIamRoleCommandInput}
 * @returns {@link DisassociateEnclaveCertificateIamRoleCommandOutput}
 * @see {@link DisassociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisassociateEnclaveCertificateIamRoleCommand extends $Command
  .classBuilder<
    DisassociateEnclaveCertificateIamRoleCommandInput,
    DisassociateEnclaveCertificateIamRoleCommandOutput,
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
  .s("AmazonEC2", "DisassociateEnclaveCertificateIamRole", {})
  .n("EC2Client", "DisassociateEnclaveCertificateIamRoleCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateEnclaveCertificateIamRoleCommand)
  .de(de_DisassociateEnclaveCertificateIamRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateEnclaveCertificateIamRoleRequest;
      output: DisassociateEnclaveCertificateIamRoleResult;
    };
    sdk: {
      input: DisassociateEnclaveCertificateIamRoleCommandInput;
      output: DisassociateEnclaveCertificateIamRoleCommandOutput;
    };
  };
}
