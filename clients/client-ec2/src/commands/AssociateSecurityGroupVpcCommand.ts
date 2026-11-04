// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSecurityGroupVpcRequest, AssociateSecurityGroupVpcResult } from "../models/models_0";
import { AssociateSecurityGroupVpc$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSecurityGroupVpcCommand}.
 */
export interface AssociateSecurityGroupVpcCommandInput extends AssociateSecurityGroupVpcRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSecurityGroupVpcCommand}.
 */
export interface AssociateSecurityGroupVpcCommandOutput extends AssociateSecurityGroupVpcResult, __MetadataBearer {}

/**
 * Associates a security group with another VPC in the same Region. This enables you to use the same security group with network interfaces and instances in the specified VPC.
 *
 * > **Note:**
 * >
 * > - The VPC you want to associate the security group with must be in the same Region.
 * > - You can associate the security group with another VPC if your account owns the VPC or if the VPC was shared with you.
 * > - You must own the security group.
 * > - You cannot use this feature with default security groups.
 * > - You cannot use this feature with the default VPC.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSecurityGroupVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSecurityGroupVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateSecurityGroupVpcRequest
 *   GroupId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateSecurityGroupVpcCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSecurityGroupVpcResult
 * //   State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * // };
 *
 * ```
 *
 * @param AssociateSecurityGroupVpcCommandInput - {@link AssociateSecurityGroupVpcCommandInput}
 * @returns {@link AssociateSecurityGroupVpcCommandOutput}
 * @see {@link AssociateSecurityGroupVpcCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityGroupVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class AssociateSecurityGroupVpcCommand extends command<AssociateSecurityGroupVpcCommandInput, AssociateSecurityGroupVpcCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSecurityGroupVpc",
  AssociateSecurityGroupVpc$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSecurityGroupVpcRequest;
      output: AssociateSecurityGroupVpcResult;
    };
    sdk: {
      input: AssociateSecurityGroupVpcCommandInput;
      output: AssociateSecurityGroupVpcCommandOutput;
    };
  };
}
