// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableEbsEncryptionByDefaultRequest, EnableEbsEncryptionByDefaultResult } from "../models/models_6";
import { EnableEbsEncryptionByDefault } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableEbsEncryptionByDefaultCommand}.
 */
export interface EnableEbsEncryptionByDefaultCommandInput extends EnableEbsEncryptionByDefaultRequest {}
/**
 * @public
 *
 * The output of {@link EnableEbsEncryptionByDefaultCommand}.
 */
export interface EnableEbsEncryptionByDefaultCommandOutput
  extends EnableEbsEncryptionByDefaultResult,
    __MetadataBearer {}

/**
 * <p>Enables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you enable encryption by default, the EBS volumes that you create are
 *     	always encrypted, either using the default KMS key or the KMS key that you specified
 *       when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon EBS User Guide</i>.</p>
 *          <p>Enabling encryption by default has no effect on the encryption status of your
 *       existing volumes.</p>
 *          <p>After you enable encryption by default, you can no longer launch instances
 *       using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html#ebs-encryption_supported_instances">Supported
 *         instance types</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableEbsEncryptionByDefaultRequest
 *   DryRun: true || false,
 * };
 * const command = new EnableEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * // { // EnableEbsEncryptionByDefaultResult
 * //   EbsEncryptionByDefault: true || false,
 * // };
 *
 * ```
 *
 * @param EnableEbsEncryptionByDefaultCommandInput - {@link EnableEbsEncryptionByDefaultCommandInput}
 * @returns {@link EnableEbsEncryptionByDefaultCommandOutput}
 * @see {@link EnableEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link EnableEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableEbsEncryptionByDefaultCommand extends $Command
  .classBuilder<
    EnableEbsEncryptionByDefaultCommandInput,
    EnableEbsEncryptionByDefaultCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableEbsEncryptionByDefault", {})
  .n("EC2Client", "EnableEbsEncryptionByDefaultCommand")
  .sc(EnableEbsEncryptionByDefault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableEbsEncryptionByDefaultRequest;
      output: EnableEbsEncryptionByDefaultResult;
    };
    sdk: {
      input: EnableEbsEncryptionByDefaultCommandInput;
      output: EnableEbsEncryptionByDefaultCommandOutput;
    };
  };
}
