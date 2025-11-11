// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNatGatewaysRequest, DescribeNatGatewaysResult } from "../models/models_5";
import { DescribeNatGateways } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNatGatewaysCommand}.
 */
export interface DescribeNatGatewaysCommandInput extends DescribeNatGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNatGatewaysCommand}.
 */
export interface DescribeNatGatewaysCommandOutput extends DescribeNatGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes your NAT gateways. The default is to describe all your NAT gateways.
 *           Alternatively, you can specify specific NAT gateway IDs or filter the results to
 *           include only the NAT gateways that match specific criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNatGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNatGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeNatGatewaysRequest
 *   DryRun: true || false,
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NatGatewayIds: [ // NatGatewayIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNatGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNatGatewaysResult
 * //   NatGateways: [ // NatGatewayList
 * //     { // NatGateway
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       DeleteTime: new Date("TIMESTAMP"),
 * //       FailureCode: "STRING_VALUE",
 * //       FailureMessage: "STRING_VALUE",
 * //       NatGatewayAddresses: [ // NatGatewayAddressList
 * //         { // NatGatewayAddress
 * //           AllocationId: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //           PrivateIp: "STRING_VALUE",
 * //           PublicIp: "STRING_VALUE",
 * //           AssociationId: "STRING_VALUE",
 * //           IsPrimary: true || false,
 * //           FailureMessage: "STRING_VALUE",
 * //           Status: "assigning" || "unassigning" || "associating" || "disassociating" || "succeeded" || "failed",
 * //         },
 * //       ],
 * //       NatGatewayId: "STRING_VALUE",
 * //       ProvisionedBandwidth: { // ProvisionedBandwidth
 * //         ProvisionTime: new Date("TIMESTAMP"),
 * //         Provisioned: "STRING_VALUE",
 * //         RequestTime: new Date("TIMESTAMP"),
 * //         Requested: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //       State: "pending" || "failed" || "available" || "deleting" || "deleted",
 * //       SubnetId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ConnectivityType: "private" || "public",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNatGatewaysCommandInput - {@link DescribeNatGatewaysCommandInput}
 * @returns {@link DescribeNatGatewaysCommandOutput}
 * @see {@link DescribeNatGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeNatGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe a NAT gateway
 * ```javascript
 * // This example describes the NAT gateway for the specified VPC.
 * const input = {
 *   Filter: [
 *     {
 *       Name: "vpc-id",
 *       Values: [
 *         "vpc-1a2b3c4d"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeNatGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NatGateways: [
 *     {
 *       CreateTime: "2015-12-01T12:26:55.983Z",
 *       NatGatewayAddresses: [
 *         {
 *           AllocationId: "eipalloc-89c620ec",
 *           NetworkInterfaceId: "eni-9dec76cd",
 *           PrivateIp: "10.0.0.149",
 *           PublicIp: "198.11.222.333"
 *         }
 *       ],
 *       NatGatewayId: "nat-05dba92075d71c408",
 *       State: "available",
 *       SubnetId: "subnet-847e4dc2",
 *       VpcId: "vpc-1a2b3c4d"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeNatGatewaysCommand extends $Command
  .classBuilder<
    DescribeNatGatewaysCommandInput,
    DescribeNatGatewaysCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeNatGateways", {})
  .n("EC2Client", "DescribeNatGatewaysCommand")
  .sc(DescribeNatGateways)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNatGatewaysRequest;
      output: DescribeNatGatewaysResult;
    };
    sdk: {
      input: DescribeNatGatewaysCommandInput;
      output: DescribeNatGatewaysCommandOutput;
    };
  };
}
