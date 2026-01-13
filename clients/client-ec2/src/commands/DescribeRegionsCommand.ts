// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRegionsRequest, DescribeRegionsResult } from "../models/models_4";
import { DescribeRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegionsCommand}.
 */
export interface DescribeRegionsCommandInput extends DescribeRegionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegionsCommand}.
 */
export interface DescribeRegionsCommandOutput extends DescribeRegionsResult, __MetadataBearer {}

/**
 * <p>Describes the Regions that are enabled for your account, or all Regions.</p>
 *          <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-endpoints.html">Amazon EC2 service endpoints</a>.</p>
 *          <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html">Specify which Amazon Web Services Regions
 *       your account can use</a> in the <i>Amazon Web Services Account Management Reference Guide</i>.</p>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested structures,
 *         might vary. Applications should not assume the elements appear in a particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRegionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRegionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeRegionsRequest
 *   RegionNames: [ // RegionNameStringList
 *     "STRING_VALUE",
 *   ],
 *   AllRegions: true || false,
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
 * const command = new DescribeRegionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegionsResult
 * //   Regions: [ // RegionList
 * //     { // Region
 * //       OptInStatus: "STRING_VALUE",
 * //       RegionName: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRegionsCommandInput - {@link DescribeRegionsCommandInput}
 * @returns {@link DescribeRegionsCommandOutput}
 * @see {@link DescribeRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe your regions
 * ```javascript
 * // This example describes all the regions that are available to you.
 * const input = { /* empty *\/ };
 * const command = new DescribeRegionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Regions: [
 *     {
 *       Endpoint: "ec2.ap-south-1.amazonaws.com",
 *       RegionName: "ap-south-1"
 *     },
 *     {
 *       Endpoint: "ec2.eu-west-1.amazonaws.com",
 *       RegionName: "eu-west-1"
 *     },
 *     {
 *       Endpoint: "ec2.ap-southeast-1.amazonaws.com",
 *       RegionName: "ap-southeast-1"
 *     },
 *     {
 *       Endpoint: "ec2.ap-southeast-2.amazonaws.com",
 *       RegionName: "ap-southeast-2"
 *     },
 *     {
 *       Endpoint: "ec2.eu-central-1.amazonaws.com",
 *       RegionName: "eu-central-1"
 *     },
 *     {
 *       Endpoint: "ec2.ap-northeast-2.amazonaws.com",
 *       RegionName: "ap-northeast-2"
 *     },
 *     {
 *       Endpoint: "ec2.ap-northeast-1.amazonaws.com",
 *       RegionName: "ap-northeast-1"
 *     },
 *     {
 *       Endpoint: "ec2.us-east-1.amazonaws.com",
 *       RegionName: "us-east-1"
 *     },
 *     {
 *       Endpoint: "ec2.sa-east-1.amazonaws.com",
 *       RegionName: "sa-east-1"
 *     },
 *     {
 *       Endpoint: "ec2.us-west-1.amazonaws.com",
 *       RegionName: "us-west-1"
 *     },
 *     {
 *       Endpoint: "ec2.us-west-2.amazonaws.com",
 *       RegionName: "us-west-2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeRegionsCommand extends $Command
  .classBuilder<
    DescribeRegionsCommandInput,
    DescribeRegionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeRegions", {})
  .n("EC2Client", "DescribeRegionsCommand")
  .sc(DescribeRegions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegionsRequest;
      output: DescribeRegionsResult;
    };
    sdk: {
      input: DescribeRegionsCommandInput;
      output: DescribeRegionsCommandOutput;
    };
  };
}
