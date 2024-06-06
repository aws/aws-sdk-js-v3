// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEbsEncryptionByDefaultRequest, GetEbsEncryptionByDefaultResult } from "../models/models_5";
import { de_GetEbsEncryptionByDefaultCommand, se_GetEbsEncryptionByDefaultCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEbsEncryptionByDefaultCommand}.
 */
export interface GetEbsEncryptionByDefaultCommandInput extends GetEbsEncryptionByDefaultRequest {}
/**
 * @public
 *
 * The output of {@link GetEbsEncryptionByDefaultCommand}.
 */
export interface GetEbsEncryptionByDefaultCommandOutput extends GetEbsEncryptionByDefaultResult, __MetadataBearer {}

/**
 * <p>Describes whether EBS encryption by default is enabled for your account in the current
 *       Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetEbsEncryptionByDefaultRequest
 *   DryRun: true || false,
 * };
 * const command = new GetEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * // { // GetEbsEncryptionByDefaultResult
 * //   EbsEncryptionByDefault: true || false,
 * //   SseType: "sse-ebs" || "sse-kms" || "none",
 * // };
 *
 * ```
 *
 * @param GetEbsEncryptionByDefaultCommandInput - {@link GetEbsEncryptionByDefaultCommandInput}
 * @returns {@link GetEbsEncryptionByDefaultCommandOutput}
 * @see {@link GetEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link GetEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetEbsEncryptionByDefaultCommand extends $Command
  .classBuilder<
    GetEbsEncryptionByDefaultCommandInput,
    GetEbsEncryptionByDefaultCommandOutput,
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
  .s("AmazonEC2", "GetEbsEncryptionByDefault", {})
  .n("EC2Client", "GetEbsEncryptionByDefaultCommand")
  .f(void 0, void 0)
  .ser(se_GetEbsEncryptionByDefaultCommand)
  .de(de_GetEbsEncryptionByDefaultCommand)
  .build() {}
