// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableEbsEncryptionByDefaultRequest, DisableEbsEncryptionByDefaultResult } from "../models/models_5";
import { DisableEbsEncryptionByDefault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableEbsEncryptionByDefaultCommand}.
 */
export interface DisableEbsEncryptionByDefaultCommandInput extends DisableEbsEncryptionByDefaultRequest {}
/**
 * @public
 *
 * The output of {@link DisableEbsEncryptionByDefaultCommand}.
 */
export interface DisableEbsEncryptionByDefaultCommandOutput extends DisableEbsEncryptionByDefaultResult, __MetadataBearer {}

/**
 * <p>Disables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you disable encryption by default, you can still create encrypted volumes by
 *       enabling encryption when you create each volume.</p>
 *          <p>Disabling encryption by default does not change the encryption status of your
 *       existing volumes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableEbsEncryptionByDefaultRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * // { // DisableEbsEncryptionByDefaultResult
 * //   EbsEncryptionByDefault: true || false,
 * // };
 *
 * ```
 *
 * @param DisableEbsEncryptionByDefaultCommandInput - {@link DisableEbsEncryptionByDefaultCommandInput}
 * @returns {@link DisableEbsEncryptionByDefaultCommandOutput}
 * @see {@link DisableEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link DisableEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableEbsEncryptionByDefaultCommand extends $Command
  .classBuilder<
    DisableEbsEncryptionByDefaultCommandInput,
    DisableEbsEncryptionByDefaultCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableEbsEncryptionByDefault", {})
  .n("EC2Client", "DisableEbsEncryptionByDefaultCommand")
  .sc(DisableEbsEncryptionByDefault$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableEbsEncryptionByDefaultRequest;
      output: DisableEbsEncryptionByDefaultResult;
    };
    sdk: {
      input: DisableEbsEncryptionByDefaultCommandInput;
      output: DisableEbsEncryptionByDefaultCommandOutput;
    };
  };
}
