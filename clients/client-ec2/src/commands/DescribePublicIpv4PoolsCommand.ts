// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePublicIpv4PoolsRequest, DescribePublicIpv4PoolsResult } from "../models/models_5";
import { de_DescribePublicIpv4PoolsCommand, se_DescribePublicIpv4PoolsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePublicIpv4PoolsCommand}.
 */
export interface DescribePublicIpv4PoolsCommandInput extends DescribePublicIpv4PoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePublicIpv4PoolsCommand}.
 */
export interface DescribePublicIpv4PoolsCommandOutput extends DescribePublicIpv4PoolsResult, __MetadataBearer {}

/**
 * <p>Describes the specified IPv4 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePublicIpv4PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePublicIpv4PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePublicIpv4PoolsRequest
 *   PoolIds: [ // PublicIpv4PoolIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribePublicIpv4PoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePublicIpv4PoolsResult
 * //   PublicIpv4Pools: [ // PublicIpv4PoolSet
 * //     { // PublicIpv4Pool
 * //       PoolId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PoolAddressRanges: [ // PublicIpv4PoolRangeSet
 * //         { // PublicIpv4PoolRange
 * //           FirstAddress: "STRING_VALUE",
 * //           LastAddress: "STRING_VALUE",
 * //           AddressCount: Number("int"),
 * //           AvailableAddressCount: Number("int"),
 * //         },
 * //       ],
 * //       TotalAddressCount: Number("int"),
 * //       TotalAvailableAddressCount: Number("int"),
 * //       NetworkBorderGroup: "STRING_VALUE",
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
 * @param DescribePublicIpv4PoolsCommandInput - {@link DescribePublicIpv4PoolsCommandInput}
 * @returns {@link DescribePublicIpv4PoolsCommandOutput}
 * @see {@link DescribePublicIpv4PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePublicIpv4PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribePublicIpv4PoolsCommand extends $Command
  .classBuilder<
    DescribePublicIpv4PoolsCommandInput,
    DescribePublicIpv4PoolsCommandOutput,
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
  .s("AmazonEC2", "DescribePublicIpv4Pools", {})
  .n("EC2Client", "DescribePublicIpv4PoolsCommand")
  .f(void 0, void 0)
  .ser(se_DescribePublicIpv4PoolsCommand)
  .de(de_DescribePublicIpv4PoolsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePublicIpv4PoolsRequest;
      output: DescribePublicIpv4PoolsResult;
    };
    sdk: {
      input: DescribePublicIpv4PoolsCommandInput;
      output: DescribePublicIpv4PoolsCommandOutput;
    };
  };
}
