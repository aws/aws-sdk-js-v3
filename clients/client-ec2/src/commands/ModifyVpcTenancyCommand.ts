// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcTenancyRequest, ModifyVpcTenancyResult } from "../models/models_8";
import { de_ModifyVpcTenancyCommand, se_ModifyVpcTenancyCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcTenancyCommand}.
 */
export interface ModifyVpcTenancyCommandInput extends ModifyVpcTenancyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcTenancyCommand}.
 */
export interface ModifyVpcTenancyCommandOutput extends ModifyVpcTenancyResult, __MetadataBearer {}

/**
 * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the
 *             instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the
 *             instance tenancy attribute to <code>dedicated</code>.</p>
 *          <p>After you modify the tenancy of the VPC, any new instances that you launch into the
 *             VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch.
 *             The tenancy of any existing instances in the VPC is not affected.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 * 				<i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcTenancyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcTenancyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcTenancyRequest
 *   VpcId: "STRING_VALUE", // required
 *   InstanceTenancy: "default", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyVpcTenancyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcTenancyResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcTenancyCommandInput - {@link ModifyVpcTenancyCommandInput}
 * @returns {@link ModifyVpcTenancyCommandOutput}
 * @see {@link ModifyVpcTenancyCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcTenancyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcTenancyCommand extends $Command
  .classBuilder<
    ModifyVpcTenancyCommandInput,
    ModifyVpcTenancyCommandOutput,
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
  .s("AmazonEC2", "ModifyVpcTenancy", {})
  .n("EC2Client", "ModifyVpcTenancyCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVpcTenancyCommand)
  .de(de_ModifyVpcTenancyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcTenancyRequest;
      output: ModifyVpcTenancyResult;
    };
    sdk: {
      input: ModifyVpcTenancyCommandInput;
      output: ModifyVpcTenancyCommandOutput;
    };
  };
}
