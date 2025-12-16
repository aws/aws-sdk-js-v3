// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeCoipPoolsRequest, DescribeCoipPoolsResult } from "../models/models_3";
import { DescribeCoipPools$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCoipPoolsCommand}.
 */
export interface DescribeCoipPoolsCommandInput extends DescribeCoipPoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCoipPoolsCommand}.
 */
export interface DescribeCoipPoolsCommandOutput extends DescribeCoipPoolsResult, __MetadataBearer {}

/**
 * <p>Describes the specified customer-owned address pools or all of your customer-owned address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCoipPoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCoipPoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeCoipPoolsRequest
 *   PoolIds: [ // CoipPoolIdSet
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
 * const command = new DescribeCoipPoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCoipPoolsResult
 * //   CoipPools: [ // CoipPoolSet
 * //     { // CoipPool
 * //       PoolId: "STRING_VALUE",
 * //       PoolCidrs: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PoolArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCoipPoolsCommandInput - {@link DescribeCoipPoolsCommandInput}
 * @returns {@link DescribeCoipPoolsCommandOutput}
 * @see {@link DescribeCoipPoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeCoipPoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCoipPoolsCommand extends $Command
  .classBuilder<
    DescribeCoipPoolsCommandInput,
    DescribeCoipPoolsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeCoipPools", {})
  .n("EC2Client", "DescribeCoipPoolsCommand")
  .sc(DescribeCoipPools$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCoipPoolsRequest;
      output: DescribeCoipPoolsResult;
    };
    sdk: {
      input: DescribeCoipPoolsCommandInput;
      output: DescribeCoipPoolsCommandOutput;
    };
  };
}
