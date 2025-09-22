// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDefaultVpcRequest, CreateDefaultVpcResult } from "../models/models_1";
import { CreateDefaultVpc } from "../schemas/schemas_9_Vpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDefaultVpcCommand}.
 */
export interface CreateDefaultVpcCommandInput extends CreateDefaultVpcRequest {}
/**
 * @public
 *
 * The output of {@link CreateDefaultVpcCommand}.
 */
export interface CreateDefaultVpcCommandOutput extends CreateDefaultVpcResult, __MetadataBearer {}

/**
 * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet
 * 			in each Availability Zone. For more information about the components of a default VPC,
 * 			see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPCs</a>
 * 		    in the <i>Amazon VPC User Guide</i>. You cannot specify the components of the
 * 		    default VPC yourself.</p>
 *          <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have
 * 			more than one default VPC per Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateDefaultVpcRequest
 *   DryRun: true || false,
 * };
 * const command = new CreateDefaultVpcCommand(input);
 * const response = await client.send(command);
 * // { // CreateDefaultVpcResult
 * //   Vpc: { // Vpc
 * //     OwnerId: "STRING_VALUE",
 * //     InstanceTenancy: "default" || "dedicated" || "host",
 * //     Ipv6CidrBlockAssociationSet: [ // VpcIpv6CidrBlockAssociationSet
 * //       { // VpcIpv6CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockState: { // VpcCidrBlockState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //         NetworkBorderGroup: "STRING_VALUE",
 * //         Ipv6Pool: "STRING_VALUE",
 * //         Ipv6AddressAttribute: "public" || "private",
 * //         IpSource: "amazon" || "byoip" || "none",
 * //       },
 * //     ],
 * //     CidrBlockAssociationSet: [ // VpcCidrBlockAssociationSet
 * //       { // VpcCidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         CidrBlockState: {
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     IsDefault: true || false,
 * //     EncryptionControl: { // VpcEncryptionControl
 * //       VpcId: "STRING_VALUE",
 * //       VpcEncryptionControlId: "STRING_VALUE",
 * //       Mode: "monitor" || "enforce",
 * //       State: "enforce-in-progress" || "monitor-in-progress" || "enforce-failed" || "monitor-failed" || "deleting" || "deleted" || "available" || "creating" || "delete-failed",
 * //       StateMessage: "STRING_VALUE",
 * //       ResourceExclusions: { // VpcEncryptionControlExclusions
 * //         InternetGateway: { // VpcEncryptionControlExclusion
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         EgressOnlyInternetGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         NatGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         VirtualPrivateGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         VpcPeering: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BlockPublicAccessStates: { // BlockPublicAccessStates
 * //       InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress",
 * //     },
 * //     VpcId: "STRING_VALUE",
 * //     State: "pending" || "available",
 * //     CidrBlock: "STRING_VALUE",
 * //     DhcpOptionsId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDefaultVpcCommandInput - {@link CreateDefaultVpcCommandInput}
 * @returns {@link CreateDefaultVpcCommandOutput}
 * @see {@link CreateDefaultVpcCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateDefaultVpcCommand extends $Command
  .classBuilder<
    CreateDefaultVpcCommandInput,
    CreateDefaultVpcCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateDefaultVpc", {})
  .n("EC2Client", "CreateDefaultVpcCommand")
  .sc(CreateDefaultVpc)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDefaultVpcRequest;
      output: CreateDefaultVpcResult;
    };
    sdk: {
      input: CreateDefaultVpcCommandInput;
      output: CreateDefaultVpcCommandOutput;
    };
  };
}
