// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSecurityGroupsForVpcRequest, GetSecurityGroupsForVpcResult } from "../models/models_7";
import { GetSecurityGroupsForVpc } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityGroupsForVpcCommand}.
 */
export interface GetSecurityGroupsForVpcCommandInput extends GetSecurityGroupsForVpcRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityGroupsForVpcCommand}.
 */
export interface GetSecurityGroupsForVpcCommandOutput extends GetSecurityGroupsForVpcResult, __MetadataBearer {}

/**
 * <p>Gets security groups that can be associated by the Amazon Web Services account making the request with network interfaces in the specified VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSecurityGroupsForVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSecurityGroupsForVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetSecurityGroupsForVpcRequest
 *   VpcId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new GetSecurityGroupsForVpcCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityGroupsForVpcResult
 * //   NextToken: "STRING_VALUE",
 * //   SecurityGroupForVpcs: [ // SecurityGroupForVpcList
 * //     { // SecurityGroupForVpc
 * //       Description: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrimaryVpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSecurityGroupsForVpcCommandInput - {@link GetSecurityGroupsForVpcCommandInput}
 * @returns {@link GetSecurityGroupsForVpcCommandOutput}
 * @see {@link GetSecurityGroupsForVpcCommandInput} for command's `input` shape.
 * @see {@link GetSecurityGroupsForVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetSecurityGroupsForVpcCommand extends $Command
  .classBuilder<
    GetSecurityGroupsForVpcCommandInput,
    GetSecurityGroupsForVpcCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetSecurityGroupsForVpc", {})
  .n("EC2Client", "GetSecurityGroupsForVpcCommand")
  .sc(GetSecurityGroupsForVpc)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityGroupsForVpcRequest;
      output: GetSecurityGroupsForVpcResult;
    };
    sdk: {
      input: GetSecurityGroupsForVpcCommandInput;
      output: GetSecurityGroupsForVpcCommandOutput;
    };
  };
}
