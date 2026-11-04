// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountAttributesRequest, DescribeAccountAttributesResult } from "../models/models_3";
import { DescribeAccountAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes attributes of your Amazon Web Services account. The following are the supported account attributes:
 *
 * - `default-vpc`: The ID of the default VPC for your account, or `none`.
 * - `max-instances`: This attribute is no longer supported. The returned value does not reflect your actual vCPU limit for running On-Demand Instances. For more information, see [On-Demand Instance Limits](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits) in the *Amazon Elastic Compute Cloud User Guide*.
 * - `max-elastic-ips`: The maximum number of Elastic IP addresses that you can allocate.
 * - `supported-platforms`: This attribute is deprecated.
 * - `vpc-max-elastic-ips`: The maximum number of Elastic IP addresses that you can allocate.
 * - `vpc-max-security-groups-per-interface`: The maximum number of security groups that you can assign to a network interface.
 *
 * > **Note:** The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
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
export class DescribeAccountAttributesCommand extends command<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountAttributes",
  DescribeAccountAttributes$
) {
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
