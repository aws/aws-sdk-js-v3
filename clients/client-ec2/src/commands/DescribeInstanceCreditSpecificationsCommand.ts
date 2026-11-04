// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeInstanceCreditSpecificationsRequest,
  DescribeInstanceCreditSpecificationsResult,
} from "../models/models_4";
import { DescribeInstanceCreditSpecifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstanceCreditSpecificationsCommand}.
 */
export interface DescribeInstanceCreditSpecificationsCommandInput extends DescribeInstanceCreditSpecificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceCreditSpecificationsCommand}.
 */
export interface DescribeInstanceCreditSpecificationsCommandOutput extends DescribeInstanceCreditSpecificationsResult, __MetadataBearer {}

/**
 * Describes the credit option for CPU usage of the specified burstable performance instances. The credit options are `standard` and `unlimited`.
 *
 * If you do not specify an instance ID, Amazon EC2 returns burstable performance instances with the `unlimited` credit option, as well as instances that were previously configured as T2, T3, and T3a with the `unlimited` credit option. For example, if you resize a T2 instance, while it is configured as `unlimited`, to an M4 instance, Amazon EC2 returns the M4 instance.
 *
 * If you specify one or more instance IDs, Amazon EC2 returns the credit option (`standard` or `unlimited`) of those instances. If you specify an instance ID that is not a burstable performance instance, Amazon EC2 returns the `standard` credit option.
 *
 * Recently terminated instances might appear in the returned results. This interval is usually less than one hour.
 *
 * If an Availability Zone is experiencing a service disruption and you specify instance IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs in an unaffected zone, the call works normally.
 *
 * For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceCreditSpecificationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceCreditSpecificationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceCreditSpecificationsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   InstanceIds: [ // InstanceIdStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceCreditSpecificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceCreditSpecificationsResult
 * //   InstanceCreditSpecifications: [ // InstanceCreditSpecificationList
 * //     { // InstanceCreditSpecification
 * //       InstanceId: "STRING_VALUE",
 * //       CpuCredits: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceCreditSpecificationsCommandInput - {@link DescribeInstanceCreditSpecificationsCommandInput}
 * @returns {@link DescribeInstanceCreditSpecificationsCommandOutput}
 * @see {@link DescribeInstanceCreditSpecificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceCreditSpecificationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribeInstanceCreditSpecificationsCommand extends command<DescribeInstanceCreditSpecificationsCommandInput, DescribeInstanceCreditSpecificationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstanceCreditSpecifications",
  DescribeInstanceCreditSpecifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceCreditSpecificationsRequest;
      output: DescribeInstanceCreditSpecificationsResult;
    };
    sdk: {
      input: DescribeInstanceCreditSpecificationsCommandInput;
      output: DescribeInstanceCreditSpecificationsCommandOutput;
    };
  };
}
