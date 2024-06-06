// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyEbsDefaultKmsKeyIdRequest, ModifyEbsDefaultKmsKeyIdResult } from "../models/models_6";
import { de_ModifyEbsDefaultKmsKeyIdCommand, se_ModifyEbsDefaultKmsKeyIdCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyEbsDefaultKmsKeyIdCommand}.
 */
export interface ModifyEbsDefaultKmsKeyIdCommandInput extends ModifyEbsDefaultKmsKeyIdRequest {}
/**
 * @public
 *
 * The output of {@link ModifyEbsDefaultKmsKeyIdCommand}.
 */
export interface ModifyEbsDefaultKmsKeyIdCommandOutput extends ModifyEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Changes the default KMS key for EBS encryption by default for your account in this Region.</p>
 *          <p>Amazon Web Services creates a unique Amazon Web Services managed KMS key in each Region for use with encryption by default. If
 *       you change the default KMS key to a symmetric customer managed KMS key, it is used instead of the Amazon Web Services
 *       managed KMS key. To reset the default KMS key to the Amazon Web Services managed KMS key for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric KMS keys.</p>
 *          <p>If you delete or disable the customer managed KMS key that you specified for use with
 *       encryption by default, your instances will fail to launch.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyEbsDefaultKmsKeyIdRequest
 *   KmsKeyId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * // { // ModifyEbsDefaultKmsKeyIdResult
 * //   KmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyEbsDefaultKmsKeyIdCommandInput - {@link ModifyEbsDefaultKmsKeyIdCommandInput}
 * @returns {@link ModifyEbsDefaultKmsKeyIdCommandOutput}
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyEbsDefaultKmsKeyIdCommand extends $Command
  .classBuilder<
    ModifyEbsDefaultKmsKeyIdCommandInput,
    ModifyEbsDefaultKmsKeyIdCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyEbsDefaultKmsKeyId", {})
  .n("EC2Client", "ModifyEbsDefaultKmsKeyIdCommand")
  .f(void 0, void 0)
  .ser(se_ModifyEbsDefaultKmsKeyIdCommand)
  .de(de_ModifyEbsDefaultKmsKeyIdCommand)
  .build() {}
