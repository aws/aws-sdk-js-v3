// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTrafficMirrorFiltersRequest, DescribeTrafficMirrorFiltersResult } from "../models/models_4";
import { DescribeTrafficMirrorFilters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficMirrorFiltersCommand}.
 */
export interface DescribeTrafficMirrorFiltersCommandInput extends DescribeTrafficMirrorFiltersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficMirrorFiltersCommand}.
 */
export interface DescribeTrafficMirrorFiltersCommandOutput
  extends DescribeTrafficMirrorFiltersResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more Traffic Mirror filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorFiltersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorFiltersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTrafficMirrorFiltersRequest
 *   TrafficMirrorFilterIds: [ // TrafficMirrorFilterIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
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
 * const command = new DescribeTrafficMirrorFiltersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficMirrorFiltersResult
 * //   TrafficMirrorFilters: [ // TrafficMirrorFilterSet
 * //     { // TrafficMirrorFilter
 * //       TrafficMirrorFilterId: "STRING_VALUE",
 * //       IngressFilterRules: [ // TrafficMirrorFilterRuleList
 * //         { // TrafficMirrorFilterRule
 * //           TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //           TrafficMirrorFilterId: "STRING_VALUE",
 * //           TrafficDirection: "ingress" || "egress",
 * //           RuleNumber: Number("int"),
 * //           RuleAction: "accept" || "reject",
 * //           Protocol: Number("int"),
 * //           DestinationPortRange: { // TrafficMirrorPortRange
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           SourcePortRange: {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //           SourceCidrBlock: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Tags: [ // TagList
 * //             { // Tag
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       EgressFilterRules: [
 * //         {
 * //           TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //           TrafficMirrorFilterId: "STRING_VALUE",
 * //           TrafficDirection: "ingress" || "egress",
 * //           RuleNumber: Number("int"),
 * //           RuleAction: "accept" || "reject",
 * //           Protocol: Number("int"),
 * //           DestinationPortRange: {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           SourcePortRange: {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //           SourceCidrBlock: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       NetworkServices: [ // TrafficMirrorNetworkServiceList
 * //         "amazon-dns",
 * //       ],
 * //       Description: "STRING_VALUE",
 * //       Tags: [
 * //         {
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
 * @param DescribeTrafficMirrorFiltersCommandInput - {@link DescribeTrafficMirrorFiltersCommandInput}
 * @returns {@link DescribeTrafficMirrorFiltersCommandOutput}
 * @see {@link DescribeTrafficMirrorFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorFiltersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTrafficMirrorFiltersCommand extends $Command
  .classBuilder<
    DescribeTrafficMirrorFiltersCommandInput,
    DescribeTrafficMirrorFiltersCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeTrafficMirrorFilters", {})
  .n("EC2Client", "DescribeTrafficMirrorFiltersCommand")
  .sc(DescribeTrafficMirrorFilters$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrafficMirrorFiltersRequest;
      output: DescribeTrafficMirrorFiltersResult;
    };
    sdk: {
      input: DescribeTrafficMirrorFiltersCommandInput;
      output: DescribeTrafficMirrorFiltersCommandOutput;
    };
  };
}
