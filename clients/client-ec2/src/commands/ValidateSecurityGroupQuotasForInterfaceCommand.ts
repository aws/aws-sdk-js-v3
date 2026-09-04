// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ValidateSecurityGroupQuotasForInterfaceRequest,
  ValidateSecurityGroupQuotasForInterfaceResult,
} from "../models/models_8";
import { ValidateSecurityGroupQuotasForInterface$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidateSecurityGroupQuotasForInterfaceCommand}.
 */
export interface ValidateSecurityGroupQuotasForInterfaceCommandInput extends ValidateSecurityGroupQuotasForInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link ValidateSecurityGroupQuotasForInterfaceCommand}.
 */
export interface ValidateSecurityGroupQuotasForInterfaceCommandOutput extends ValidateSecurityGroupQuotasForInterfaceResult, __MetadataBearer {}

/**
 * <p>Validates whether the specified security groups can be associated with a single
 *             network interface. The operation checks Amazon Virtual Private Cloud (Amazon VPC)
 *             quotas for inbound or outbound rules per security group and security groups per
 *             network interface. Only authorized AWS services can call this operation.</p>
 *          <p>For more information about security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-security-groups">Amazon
 *             VPC quotas</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ValidateSecurityGroupQuotasForInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ValidateSecurityGroupQuotasForInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ValidateSecurityGroupQuotasForInterfaceRequest
 *   SecurityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ValidateSecurityGroupQuotasForInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // ValidateSecurityGroupQuotasForInterfaceResult
 * //   Valid: true || false,
 * // };
 *
 * ```
 *
 * @param ValidateSecurityGroupQuotasForInterfaceCommandInput - {@link ValidateSecurityGroupQuotasForInterfaceCommandInput}
 * @returns {@link ValidateSecurityGroupQuotasForInterfaceCommandOutput}
 * @see {@link ValidateSecurityGroupQuotasForInterfaceCommandInput} for command's `input` shape.
 * @see {@link ValidateSecurityGroupQuotasForInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ValidateSecurityGroupQuotasForInterfaceCommand extends command<ValidateSecurityGroupQuotasForInterfaceCommandInput, ValidateSecurityGroupQuotasForInterfaceCommandOutput>(
  _ep0,
  _mw0,
  "ValidateSecurityGroupQuotasForInterface",
  ValidateSecurityGroupQuotasForInterface$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateSecurityGroupQuotasForInterfaceRequest;
      output: ValidateSecurityGroupQuotasForInterfaceResult;
    };
    sdk: {
      input: ValidateSecurityGroupQuotasForInterfaceCommandInput;
      output: ValidateSecurityGroupQuotasForInterfaceCommandOutput;
    };
  };
}
