// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityGroupReferencesRequest, DescribeSecurityGroupReferencesResult } from "../models/models_4";
import { DescribeSecurityGroupReferences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityGroupReferencesCommand}.
 */
export interface DescribeSecurityGroupReferencesCommandInput extends DescribeSecurityGroupReferencesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityGroupReferencesCommand}.
 */
export interface DescribeSecurityGroupReferencesCommandOutput
  extends DescribeSecurityGroupReferencesResult,
    __MetadataBearer {}

/**
 * <p>Describes the VPCs on the other side of a VPC peering or Transit Gateway connection that are referencing the security groups you've specified in this request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupReferencesRequest
 *   DryRun: true || false,
 *   GroupId: [ // GroupIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSecurityGroupReferencesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupReferencesResult
 * //   SecurityGroupReferenceSet: [ // SecurityGroupReferences
 * //     { // SecurityGroupReference
 * //       GroupId: "STRING_VALUE",
 * //       ReferencingVpcId: "STRING_VALUE",
 * //       VpcPeeringConnectionId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSecurityGroupReferencesCommandInput - {@link DescribeSecurityGroupReferencesCommandInput}
 * @returns {@link DescribeSecurityGroupReferencesCommandOutput}
 * @see {@link DescribeSecurityGroupReferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe security group references
 * ```javascript
 * // This example describes the security group references for the specified security group.
 * const input = {
 *   GroupId: [
 *     "sg-903004f8"
 *   ]
 * };
 * const command = new DescribeSecurityGroupReferencesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecurityGroupReferenceSet: [
 *     {
 *       GroupId: "sg-903004f8",
 *       ReferencingVpcId: "vpc-1a2b3c4d",
 *       VpcPeeringConnectionId: "pcx-b04deed9"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSecurityGroupReferencesCommand extends $Command
  .classBuilder<
    DescribeSecurityGroupReferencesCommandInput,
    DescribeSecurityGroupReferencesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeSecurityGroupReferences", {})
  .n("EC2Client", "DescribeSecurityGroupReferencesCommand")
  .sc(DescribeSecurityGroupReferences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityGroupReferencesRequest;
      output: DescribeSecurityGroupReferencesResult;
    };
    sdk: {
      input: DescribeSecurityGroupReferencesCommandInput;
      output: DescribeSecurityGroupReferencesCommandOutput;
    };
  };
}
