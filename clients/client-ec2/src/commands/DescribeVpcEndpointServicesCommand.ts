// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointServicesRequest, DescribeVpcEndpointServicesResult } from "../models/models_6";
import { de_DescribeVpcEndpointServicesCommand, se_DescribeVpcEndpointServicesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointServicesCommand}.
 */
export interface DescribeVpcEndpointServicesCommandInput extends DescribeVpcEndpointServicesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointServicesCommand}.
 */
export interface DescribeVpcEndpointServicesCommandOutput extends DescribeVpcEndpointServicesResult, __MetadataBearer {}

/**
 * <p>Describes available services to which you can create a VPC endpoint.</p>
 *          <p>When the service provider and the consumer have different accounts in multiple
 *             Availability Zones, and the consumer views the VPC endpoint service information, the
 *             response only includes the common Availability Zones. For example, when the service
 *             provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the
 *             consumer uses <code>us-east-1a</code> and <code>us-east-1b</code>, the response includes
 *             the VPC endpoint services in the common Availability Zone,
 *             <code>us-east-1a</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointServicesRequest
 *   DryRun: true || false,
 *   ServiceNames: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ServiceRegions: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeVpcEndpointServicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointServicesResult
 * //   ServiceNames: [ // ValueStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ServiceDetails: [ // ServiceDetailSet
 * //     { // ServiceDetail
 * //       ServiceName: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //       ServiceType: [ // ServiceTypeDetailSet
 * //         { // ServiceTypeDetail
 * //           ServiceType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //         },
 * //       ],
 * //       ServiceRegion: "STRING_VALUE",
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Owner: "STRING_VALUE",
 * //       BaseEndpointDnsNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateDnsNames: [ // PrivateDnsDetailsSet
 * //         { // PrivateDnsDetails
 * //           PrivateDnsName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcEndpointPolicySupported: true || false,
 * //       AcceptanceRequired: true || false,
 * //       ManagesVpcEndpoints: true || false,
 * //       PayerResponsibility: "ServiceOwner",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrivateDnsNameVerificationState: "pendingVerification" || "verified" || "failed",
 * //       SupportedIpAddressTypes: [ // SupportedIpAddressTypes
 * //         "ipv4" || "ipv6",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointServicesCommandInput - {@link DescribeVpcEndpointServicesCommandInput}
 * @returns {@link DescribeVpcEndpointServicesCommandOutput}
 * @see {@link DescribeVpcEndpointServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointServicesCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointServicesCommandInput,
    DescribeVpcEndpointServicesCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcEndpointServices", {})
  .n("EC2Client", "DescribeVpcEndpointServicesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcEndpointServicesCommand)
  .de(de_DescribeVpcEndpointServicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointServicesRequest;
      output: DescribeVpcEndpointServicesResult;
    };
    sdk: {
      input: DescribeVpcEndpointServicesCommandInput;
      output: DescribeVpcEndpointServicesCommandOutput;
    };
  };
}
