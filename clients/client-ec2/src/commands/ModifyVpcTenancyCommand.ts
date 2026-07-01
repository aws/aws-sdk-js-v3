// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyVpcTenancyRequest, ModifyVpcTenancyResult } from "../models/models_7";
import { ModifyVpcTenancy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class ModifyVpcTenancyCommand extends command<ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput>(
  _ep0,
  _mw0,
  "ModifyVpcTenancy",
  ModifyVpcTenancy$
) {
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
