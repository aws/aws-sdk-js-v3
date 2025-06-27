// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointAssociationsRequest, DescribeVpcEndpointAssociationsResult } from "../models/models_5";
import {
  de_DescribeVpcEndpointAssociationsCommand,
  se_DescribeVpcEndpointAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointAssociationsCommand}.
 */
export interface DescribeVpcEndpointAssociationsCommandInput extends DescribeVpcEndpointAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointAssociationsCommand}.
 */
export interface DescribeVpcEndpointAssociationsCommandOutput
  extends DescribeVpcEndpointAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the VPC resources, VPC endpoint services, Amazon Lattice services, or service networks
 *          associated with the VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointAssociationsRequest
 *   DryRun: true || false,
 *   VpcEndpointIds: [ // VpcEndpointIdList
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
 * const command = new DescribeVpcEndpointAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointAssociationsResult
 * //   VpcEndpointAssociations: [ // VpcEndpointAssociationSet
 * //     { // VpcEndpointAssociation
 * //       Id: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //       ServiceNetworkArn: "STRING_VALUE",
 * //       ServiceNetworkName: "STRING_VALUE",
 * //       AssociatedResourceAccessibility: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       DnsEntry: { // DnsEntry
 * //         DnsName: "STRING_VALUE",
 * //         HostedZoneId: "STRING_VALUE",
 * //       },
 * //       PrivateDnsEntry: {
 * //         DnsName: "STRING_VALUE",
 * //         HostedZoneId: "STRING_VALUE",
 * //       },
 * //       AssociatedResourceArn: "STRING_VALUE",
 * //       ResourceConfigurationGroupArn: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointAssociationsCommandInput - {@link DescribeVpcEndpointAssociationsCommandInput}
 * @returns {@link DescribeVpcEndpointAssociationsCommandOutput}
 * @see {@link DescribeVpcEndpointAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointAssociationsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointAssociationsCommandInput,
    DescribeVpcEndpointAssociationsCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcEndpointAssociations", {})
  .n("EC2Client", "DescribeVpcEndpointAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcEndpointAssociationsCommand)
  .de(de_DescribeVpcEndpointAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointAssociationsRequest;
      output: DescribeVpcEndpointAssociationsResult;
    };
    sdk: {
      input: DescribeVpcEndpointAssociationsCommandInput;
      output: DescribeVpcEndpointAssociationsCommandOutput;
    };
  };
}
