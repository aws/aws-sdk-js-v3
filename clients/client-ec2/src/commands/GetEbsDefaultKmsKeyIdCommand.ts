// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/models_6";
import { de_GetEbsDefaultKmsKeyIdCommand, se_GetEbsDefaultKmsKeyIdCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEbsDefaultKmsKeyIdCommand}.
 */
export interface GetEbsDefaultKmsKeyIdCommandInput extends GetEbsDefaultKmsKeyIdRequest {}
/**
 * @public
 *
 * The output of {@link GetEbsDefaultKmsKeyIdCommand}.
 */
export interface GetEbsDefaultKmsKeyIdCommandOutput extends GetEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Describes the default KMS key for EBS encryption by default for your account in this Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetEbsDefaultKmsKeyIdRequest
 *   DryRun: true || false,
 * };
 * const command = new GetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * // { // GetEbsDefaultKmsKeyIdResult
 * //   KmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEbsDefaultKmsKeyIdCommandInput - {@link GetEbsDefaultKmsKeyIdCommandInput}
 * @returns {@link GetEbsDefaultKmsKeyIdCommandOutput}
 * @see {@link GetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link GetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetEbsDefaultKmsKeyIdCommand extends $Command
  .classBuilder<
    GetEbsDefaultKmsKeyIdCommandInput,
    GetEbsDefaultKmsKeyIdCommandOutput,
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
  .s("AmazonEC2", "GetEbsDefaultKmsKeyId", {})
  .n("EC2Client", "GetEbsDefaultKmsKeyIdCommand")
  .f(void 0, void 0)
  .ser(se_GetEbsDefaultKmsKeyIdCommand)
  .de(de_GetEbsDefaultKmsKeyIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEbsDefaultKmsKeyIdRequest;
      output: GetEbsDefaultKmsKeyIdResult;
    };
    sdk: {
      input: GetEbsDefaultKmsKeyIdCommandInput;
      output: GetEbsDefaultKmsKeyIdCommandOutput;
    };
  };
}
