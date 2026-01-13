// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeTransitGatewayMeteringPoliciesRequest,
  DescribeTransitGatewayMeteringPoliciesResult,
} from "../models/models_4";
import { DescribeTransitGatewayMeteringPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayMeteringPoliciesCommand}.
 */
export interface DescribeTransitGatewayMeteringPoliciesCommandInput extends DescribeTransitGatewayMeteringPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayMeteringPoliciesCommand}.
 */
export interface DescribeTransitGatewayMeteringPoliciesCommandOutput extends DescribeTransitGatewayMeteringPoliciesResult, __MetadataBearer {}

/**
 * <p>Describes one or more transit gateway metering policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayMeteringPoliciesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayMeteringPoliciesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayMeteringPoliciesRequest
 *   TransitGatewayMeteringPolicyIds: [ // TransitGatewayMeteringPolicyIdStringList
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeTransitGatewayMeteringPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayMeteringPoliciesResult
 * //   TransitGatewayMeteringPolicies: [ // TransitGatewayMeteringPolicyList
 * //     { // TransitGatewayMeteringPolicy
 * //       TransitGatewayMeteringPolicyId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       MiddleboxAttachmentIds: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       State: "available" || "deleted" || "pending" || "modifying" || "deleting",
 * //       UpdateEffectiveAt: new Date("TIMESTAMP"),
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
 * @param DescribeTransitGatewayMeteringPoliciesCommandInput - {@link DescribeTransitGatewayMeteringPoliciesCommandInput}
 * @returns {@link DescribeTransitGatewayMeteringPoliciesCommandOutput}
 * @see {@link DescribeTransitGatewayMeteringPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayMeteringPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTransitGatewayMeteringPoliciesCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayMeteringPoliciesCommandInput,
    DescribeTransitGatewayMeteringPoliciesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeTransitGatewayMeteringPolicies", {})
  .n("EC2Client", "DescribeTransitGatewayMeteringPoliciesCommand")
  .sc(DescribeTransitGatewayMeteringPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransitGatewayMeteringPoliciesRequest;
      output: DescribeTransitGatewayMeteringPoliciesResult;
    };
    sdk: {
      input: DescribeTransitGatewayMeteringPoliciesCommandInput;
      output: DescribeTransitGatewayMeteringPoliciesCommandOutput;
    };
  };
}
