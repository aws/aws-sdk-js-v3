// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTrafficMirrorTargetsRequest, DescribeTrafficMirrorTargetsResult } from "../models/models_4";
import { DescribeTrafficMirrorTargets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficMirrorTargetsCommand}.
 */
export interface DescribeTrafficMirrorTargetsCommandInput extends DescribeTrafficMirrorTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficMirrorTargetsCommand}.
 */
export interface DescribeTrafficMirrorTargetsCommandOutput
  extends DescribeTrafficMirrorTargetsResult,
    __MetadataBearer {}

/**
 * <p>Information about one or more Traffic Mirror targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTrafficMirrorTargetsRequest
 *   TrafficMirrorTargetIds: [ // TrafficMirrorTargetIdList
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
 * const command = new DescribeTrafficMirrorTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficMirrorTargetsResult
 * //   TrafficMirrorTargets: [ // TrafficMirrorTargetSet
 * //     { // TrafficMirrorTarget
 * //       TrafficMirrorTargetId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       NetworkLoadBalancerArn: "STRING_VALUE",
 * //       Type: "network-interface" || "network-load-balancer" || "gateway-load-balancer-endpoint",
 * //       Description: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GatewayLoadBalancerEndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrafficMirrorTargetsCommandInput - {@link DescribeTrafficMirrorTargetsCommandInput}
 * @returns {@link DescribeTrafficMirrorTargetsCommandOutput}
 * @see {@link DescribeTrafficMirrorTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTrafficMirrorTargetsCommand extends $Command
  .classBuilder<
    DescribeTrafficMirrorTargetsCommandInput,
    DescribeTrafficMirrorTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeTrafficMirrorTargets", {})
  .n("EC2Client", "DescribeTrafficMirrorTargetsCommand")
  .sc(DescribeTrafficMirrorTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrafficMirrorTargetsRequest;
      output: DescribeTrafficMirrorTargetsResult;
    };
    sdk: {
      input: DescribeTrafficMirrorTargetsCommandInput;
      output: DescribeTrafficMirrorTargetsCommandOutput;
    };
  };
}
