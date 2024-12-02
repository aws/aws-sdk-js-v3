// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVerifiedAccessEndpointsRequest, DescribeVerifiedAccessEndpointsResult } from "../models/models_5";
import {
  de_DescribeVerifiedAccessEndpointsCommand,
  se_DescribeVerifiedAccessEndpointsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessEndpointsCommand}.
 */
export interface DescribeVerifiedAccessEndpointsCommandInput extends DescribeVerifiedAccessEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessEndpointsCommand}.
 */
export interface DescribeVerifiedAccessEndpointsCommandOutput
  extends DescribeVerifiedAccessEndpointsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified Amazon Web Services Verified Access endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessEndpointsRequest
 *   VerifiedAccessEndpointIds: [ // VerifiedAccessEndpointIdList
 *     "STRING_VALUE",
 *   ],
 *   VerifiedAccessInstanceId: "STRING_VALUE",
 *   VerifiedAccessGroupId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
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
 * const command = new DescribeVerifiedAccessEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessEndpointsResult
 * //   VerifiedAccessEndpoints: [ // VerifiedAccessEndpointList
 * //     { // VerifiedAccessEndpoint
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       VerifiedAccessGroupId: "STRING_VALUE",
 * //       VerifiedAccessEndpointId: "STRING_VALUE",
 * //       ApplicationDomain: "STRING_VALUE",
 * //       EndpointType: "load-balancer" || "network-interface" || "rds" || "cidr",
 * //       AttachmentType: "vpc",
 * //       DomainCertificateArn: "STRING_VALUE",
 * //       EndpointDomain: "STRING_VALUE",
 * //       DeviceValidationDomain: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       LoadBalancerOptions: { // VerifiedAccessEndpointLoadBalancerOptions
 * //         Protocol: "http" || "https" || "tcp",
 * //         Port: Number("int"),
 * //         LoadBalancerArn: "STRING_VALUE",
 * //         SubnetIds: [ // VerifiedAccessEndpointSubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         PortRanges: [ // VerifiedAccessEndpointPortRangeList
 * //           { // VerifiedAccessEndpointPortRange
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       NetworkInterfaceOptions: { // VerifiedAccessEndpointEniOptions
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         Protocol: "http" || "https" || "tcp",
 * //         Port: Number("int"),
 * //         PortRanges: [
 * //           {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       Status: { // VerifiedAccessEndpointStatus
 * //         Code: "pending" || "active" || "updating" || "deleting" || "deleted",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       DeletionTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //         CustomerManagedKeyEnabled: true || false,
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //       RdsOptions: { // VerifiedAccessEndpointRdsOptions
 * //         Protocol: "http" || "https" || "tcp",
 * //         Port: Number("int"),
 * //         RdsDbInstanceArn: "STRING_VALUE",
 * //         RdsDbClusterArn: "STRING_VALUE",
 * //         RdsDbProxyArn: "STRING_VALUE",
 * //         RdsEndpoint: "STRING_VALUE",
 * //         SubnetIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CidrOptions: { // VerifiedAccessEndpointCidrOptions
 * //         Cidr: "STRING_VALUE",
 * //         PortRanges: [
 * //           {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //         ],
 * //         Protocol: "http" || "https" || "tcp",
 * //         SubnetIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessEndpointsCommandInput - {@link DescribeVerifiedAccessEndpointsCommandInput}
 * @returns {@link DescribeVerifiedAccessEndpointsCommandOutput}
 * @see {@link DescribeVerifiedAccessEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeVerifiedAccessEndpointsCommand extends $Command
  .classBuilder<
    DescribeVerifiedAccessEndpointsCommandInput,
    DescribeVerifiedAccessEndpointsCommandOutput,
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
  .s("AmazonEC2", "DescribeVerifiedAccessEndpoints", {})
  .n("EC2Client", "DescribeVerifiedAccessEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVerifiedAccessEndpointsCommand)
  .de(de_DescribeVerifiedAccessEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVerifiedAccessEndpointsRequest;
      output: DescribeVerifiedAccessEndpointsResult;
    };
    sdk: {
      input: DescribeVerifiedAccessEndpointsCommandInput;
      output: DescribeVerifiedAccessEndpointsCommandOutput;
    };
  };
}
