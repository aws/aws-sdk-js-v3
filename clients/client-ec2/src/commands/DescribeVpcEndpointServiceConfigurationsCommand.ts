// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeVpcEndpointServiceConfigurationsRequest,
  DescribeVpcEndpointServiceConfigurationsResult,
} from "../models/models_5";
import { DescribeVpcEndpointServiceConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointServiceConfigurationsCommand}.
 */
export interface DescribeVpcEndpointServiceConfigurationsCommandInput extends DescribeVpcEndpointServiceConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointServiceConfigurationsCommand}.
 */
export interface DescribeVpcEndpointServiceConfigurationsCommandOutput extends DescribeVpcEndpointServiceConfigurationsResult, __MetadataBearer {}

/**
 * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointServiceConfigurationsRequest
 *   DryRun: true || false,
 *   ServiceIds: [ // VpcEndpointServiceIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointServiceConfigurationsResult
 * //   ServiceConfigurations: [ // ServiceConfigurationSet
 * //     { // ServiceConfiguration
 * //       ServiceType: [ // ServiceTypeDetailSet
 * //         { // ServiceTypeDetail
 * //           ServiceType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //         },
 * //       ],
 * //       ServiceId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       ServiceState: "Pending" || "Available" || "Deleting" || "Deleted" || "Failed",
 * //       AvailabilityZoneIds: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       AcceptanceRequired: true || false,
 * //       ManagesVpcEndpoints: true || false,
 * //       NetworkLoadBalancerArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       GatewayLoadBalancerArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedIpAddressTypes: [ // SupportedIpAddressTypes
 * //         "ipv4" || "ipv6",
 * //       ],
 * //       BaseEndpointDnsNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateDnsNameConfiguration: { // PrivateDnsNameConfiguration
 * //         State: "pendingVerification" || "verified" || "failed",
 * //         Type: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       PayerResponsibility: "ServiceOwner",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportedRegions: [ // SupportedRegionSet
 * //         { // SupportedRegionDetail
 * //           Region: "STRING_VALUE",
 * //           ServiceState: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RemoteAccessEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointServiceConfigurationsCommandInput - {@link DescribeVpcEndpointServiceConfigurationsCommandInput}
 * @returns {@link DescribeVpcEndpointServiceConfigurationsCommandOutput}
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointServiceConfigurationsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointServiceConfigurationsCommandInput,
    DescribeVpcEndpointServiceConfigurationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeVpcEndpointServiceConfigurations", {})
  .n("EC2Client", "DescribeVpcEndpointServiceConfigurationsCommand")
  .sc(DescribeVpcEndpointServiceConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointServiceConfigurationsRequest;
      output: DescribeVpcEndpointServiceConfigurationsResult;
    };
    sdk: {
      input: DescribeVpcEndpointServiceConfigurationsCommandInput;
      output: DescribeVpcEndpointServiceConfigurationsCommandOutput;
    };
  };
}
