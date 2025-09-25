// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountAttributesRequest, DescribeAccountAttributesResult } from "../models/models_3";
import { DescribeAccountAttributes } from "../schemas/schemas_113_DescribeAccountAttributes";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends DescribeAccountAttributesResult, __MetadataBearer {}

/**
 * <p>Describes attributes of your Amazon Web Services account. The following are the supported account attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>default-vpc</code>: The ID of the default VPC for your account, or <code>none</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-instances</code>: This attribute is no longer supported. The returned
 *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>supported-platforms</code>: This attribute is deprecated.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
 *                   that you can assign to a network interface.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *          structures, might vary. Applications should not assume the elements appear in a
 *          particular order.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAccountAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAccountAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeAccountAttributesRequest
 *   DryRun: true || false,
 *   AttributeNames: [ // AccountAttributeNameStringList
 *     "supported-platforms" || "default-vpc",
 *   ],
 * };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAttributesResult
 * //   AccountAttributes: [ // AccountAttributeList
 * //     { // AccountAttribute
 * //       AttributeName: "STRING_VALUE",
 * //       AttributeValues: [ // AccountAttributeValueList
 * //         { // AccountAttributeValue
 * //           AttributeValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe a single attribute for your AWS account
 * ```javascript
 * // This example describes the supported-platforms attribute for your AWS account.
 * const input = {
 *   AttributeNames: [
 *     "supported-platforms"
 *   ]
 * };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AccountAttributes: [
 *     {
 *       AttributeName: "supported-platforms",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "EC2"
 *         },
 *         {
 *           AttributeValue: "VPC"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe all attributes for your AWS account
 * ```javascript
 * // This example describes the attributes for your AWS account.
 * const input = { /* empty *\/ };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AccountAttributes: [
 *     {
 *       AttributeName: "supported-platforms",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "EC2"
 *         },
 *         {
 *           AttributeValue: "VPC"
 *         }
 *       ]
 *     },
 *     {
 *       AttributeName: "vpc-max-security-groups-per-interface",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "5"
 *         }
 *       ]
 *     },
 *     {
 *       AttributeName: "max-elastic-ips",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "5"
 *         }
 *       ]
 *     },
 *     {
 *       AttributeName: "max-instances",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "20"
 *         }
 *       ]
 *     },
 *     {
 *       AttributeName: "vpc-max-elastic-ips",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "5"
 *         }
 *       ]
 *     },
 *     {
 *       AttributeName: "default-vpc",
 *       AttributeValues: [
 *         {
 *           AttributeValue: "none"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAccountAttributesCommand extends $Command
  .classBuilder<
    DescribeAccountAttributesCommandInput,
    DescribeAccountAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeAccountAttributes", {})
  .n("EC2Client", "DescribeAccountAttributesCommand")
  .sc(DescribeAccountAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountAttributesRequest;
      output: DescribeAccountAttributesResult;
    };
    sdk: {
      input: DescribeAccountAttributesCommandInput;
      output: DescribeAccountAttributesCommandOutput;
    };
  };
}
