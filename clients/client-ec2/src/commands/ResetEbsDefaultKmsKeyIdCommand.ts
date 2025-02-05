// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetEbsDefaultKmsKeyIdRequest, ResetEbsDefaultKmsKeyIdResult } from "../models/models_7";
import { de_ResetEbsDefaultKmsKeyIdCommand, se_ResetEbsDefaultKmsKeyIdCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetEbsDefaultKmsKeyIdCommand}.
 */
export interface ResetEbsDefaultKmsKeyIdCommandInput extends ResetEbsDefaultKmsKeyIdRequest {}
/**
 * @public
 *
 * The output of {@link ResetEbsDefaultKmsKeyIdCommand}.
 */
export interface ResetEbsDefaultKmsKeyIdCommandOutput extends ResetEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Resets the default KMS key for EBS encryption for your account in this Region
 *       to the Amazon Web Services managed KMS key for EBS.</p>
 *          <p>After resetting the default KMS key to the Amazon Web Services managed KMS key, you can continue to encrypt by a
 *       customer managed KMS key by specifying it when you create the volume. For more information, see
 *       <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ResetEbsDefaultKmsKeyIdRequest
 *   DryRun: true || false,
 * };
 * const command = new ResetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * // { // ResetEbsDefaultKmsKeyIdResult
 * //   KmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetEbsDefaultKmsKeyIdCommandInput - {@link ResetEbsDefaultKmsKeyIdCommandInput}
 * @returns {@link ResetEbsDefaultKmsKeyIdCommandOutput}
 * @see {@link ResetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ResetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ResetEbsDefaultKmsKeyIdCommand extends $Command
  .classBuilder<
    ResetEbsDefaultKmsKeyIdCommandInput,
    ResetEbsDefaultKmsKeyIdCommandOutput,
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
  .s("AmazonEC2", "ResetEbsDefaultKmsKeyId", {})
  .n("EC2Client", "ResetEbsDefaultKmsKeyIdCommand")
  .f(void 0, void 0)
  .ser(se_ResetEbsDefaultKmsKeyIdCommand)
  .de(de_ResetEbsDefaultKmsKeyIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetEbsDefaultKmsKeyIdRequest;
      output: ResetEbsDefaultKmsKeyIdResult;
    };
    sdk: {
      input: ResetEbsDefaultKmsKeyIdCommandInput;
      output: ResetEbsDefaultKmsKeyIdCommandOutput;
    };
  };
}
