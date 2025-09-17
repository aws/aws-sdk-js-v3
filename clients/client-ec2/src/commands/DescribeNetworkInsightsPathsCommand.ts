// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkInsightsPathsRequest, DescribeNetworkInsightsPathsResult } from "../models/models_5";
import { de_DescribeNetworkInsightsPathsCommand, se_DescribeNetworkInsightsPathsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInsightsPathsCommand}.
 */
export interface DescribeNetworkInsightsPathsCommandInput extends DescribeNetworkInsightsPathsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInsightsPathsCommand}.
 */
export interface DescribeNetworkInsightsPathsCommandOutput
  extends DescribeNetworkInsightsPathsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your paths.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsPathsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsPathsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInsightsPathsRequest
 *   NetworkInsightsPathIds: [ // NetworkInsightsPathIdList
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
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNetworkInsightsPathsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInsightsPathsResult
 * //   NetworkInsightsPaths: [ // NetworkInsightsPathList
 * //     { // NetworkInsightsPath
 * //       NetworkInsightsPathId: "STRING_VALUE",
 * //       NetworkInsightsPathArn: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Source: "STRING_VALUE",
 * //       Destination: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       SourceIp: "STRING_VALUE",
 * //       DestinationIp: "STRING_VALUE",
 * //       Protocol: "tcp" || "udp",
 * //       DestinationPort: Number("int"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       FilterAtSource: { // PathFilter
 * //         SourceAddress: "STRING_VALUE",
 * //         SourcePortRange: { // FilterPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationAddress: "STRING_VALUE",
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       },
 * //       FilterAtDestination: {
 * //         SourceAddress: "STRING_VALUE",
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationAddress: "STRING_VALUE",
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInsightsPathsCommandInput - {@link DescribeNetworkInsightsPathsCommandInput}
 * @returns {@link DescribeNetworkInsightsPathsCommandOutput}
 * @see {@link DescribeNetworkInsightsPathsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsPathsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeNetworkInsightsPathsCommand extends $Command
  .classBuilder<
    DescribeNetworkInsightsPathsCommandInput,
    DescribeNetworkInsightsPathsCommandOutput,
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
  .s("AmazonEC2", "DescribeNetworkInsightsPaths", {})
  .n("EC2Client", "DescribeNetworkInsightsPathsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNetworkInsightsPathsCommand)
  .de(de_DescribeNetworkInsightsPathsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkInsightsPathsRequest;
      output: DescribeNetworkInsightsPathsResult;
    };
    sdk: {
      input: DescribeNetworkInsightsPathsCommandInput;
      output: DescribeNetworkInsightsPathsCommandOutput;
    };
  };
}
