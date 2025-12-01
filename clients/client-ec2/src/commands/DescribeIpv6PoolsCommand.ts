// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeIpv6PoolsRequest, DescribeIpv6PoolsResult } from "../models/models_4";
import { DescribeIpv6Pools } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpv6PoolsCommand}.
 */
export interface DescribeIpv6PoolsCommandInput extends DescribeIpv6PoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpv6PoolsCommand}.
 */
export interface DescribeIpv6PoolsCommandOutput extends DescribeIpv6PoolsResult, __MetadataBearer {}

/**
 * <p>Describes your IPv6 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpv6PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpv6PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpv6PoolsRequest
 *   PoolIds: [ // Ipv6PoolIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIpv6PoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpv6PoolsResult
 * //   Ipv6Pools: [ // Ipv6PoolSet
 * //     { // Ipv6Pool
 * //       PoolId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PoolCidrBlocks: [ // PoolCidrBlocksSet
 * //         { // PoolCidrBlock
 * //           Cidr: "STRING_VALUE",
 * //         },
 * //       ],
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
 * @param DescribeIpv6PoolsCommandInput - {@link DescribeIpv6PoolsCommandInput}
 * @returns {@link DescribeIpv6PoolsCommandOutput}
 * @see {@link DescribeIpv6PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpv6PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpv6PoolsCommand extends $Command
  .classBuilder<
    DescribeIpv6PoolsCommandInput,
    DescribeIpv6PoolsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpv6Pools", {})
  .n("EC2Client", "DescribeIpv6PoolsCommand")
  .sc(DescribeIpv6Pools)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpv6PoolsRequest;
      output: DescribeIpv6PoolsResult;
    };
    sdk: {
      input: DescribeIpv6PoolsCommandInput;
      output: DescribeIpv6PoolsCommandOutput;
    };
  };
}
