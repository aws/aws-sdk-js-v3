// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeScheduledInstanceAvailabilityRequest,
  DescribeScheduledInstanceAvailabilityResult,
} from "../models/models_4";
import { DescribeScheduledInstanceAvailability } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledInstanceAvailabilityCommand}.
 */
export interface DescribeScheduledInstanceAvailabilityCommandInput
  extends DescribeScheduledInstanceAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledInstanceAvailabilityCommand}.
 */
export interface DescribeScheduledInstanceAvailabilityCommandOutput
  extends DescribeScheduledInstanceAvailabilityResult,
    __MetadataBearer {}

/**
 * <p>Finds available schedules that meet the specified criteria.</p>
 *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
 *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
 *          to purchase Scheduled Instances with that schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstanceAvailabilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstanceAvailabilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeScheduledInstanceAvailabilityRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   FirstSlotStartTimeRange: { // SlotDateTimeRangeRequest
 *     EarliestTime: new Date("TIMESTAMP"), // required
 *     LatestTime: new Date("TIMESTAMP"), // required
 *   },
 *   MaxResults: Number("int"),
 *   MaxSlotDurationInHours: Number("int"),
 *   MinSlotDurationInHours: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Recurrence: { // ScheduledInstanceRecurrenceRequest
 *     Frequency: "STRING_VALUE",
 *     Interval: Number("int"),
 *     OccurrenceDays: [ // OccurrenceDayRequestSet
 *       Number("int"),
 *     ],
 *     OccurrenceRelativeToEnd: true || false,
 *     OccurrenceUnit: "STRING_VALUE",
 *   },
 * };
 * const command = new DescribeScheduledInstanceAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledInstanceAvailabilityResult
 * //   NextToken: "STRING_VALUE",
 * //   ScheduledInstanceAvailabilitySet: [ // ScheduledInstanceAvailabilitySet
 * //     { // ScheduledInstanceAvailability
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailableInstanceCount: Number("int"),
 * //       FirstSlotStartTime: new Date("TIMESTAMP"),
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       MaxTermDurationInDays: Number("int"),
 * //       MinTermDurationInDays: Number("int"),
 * //       NetworkPlatform: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PurchaseToken: "STRING_VALUE",
 * //       Recurrence: { // ScheduledInstanceRecurrence
 * //         Frequency: "STRING_VALUE",
 * //         Interval: Number("int"),
 * //         OccurrenceDaySet: [ // OccurrenceDaySet
 * //           Number("int"),
 * //         ],
 * //         OccurrenceRelativeToEnd: true || false,
 * //         OccurrenceUnit: "STRING_VALUE",
 * //       },
 * //       SlotDurationInHours: Number("int"),
 * //       TotalScheduledInstanceHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeScheduledInstanceAvailabilityCommandInput - {@link DescribeScheduledInstanceAvailabilityCommandInput}
 * @returns {@link DescribeScheduledInstanceAvailabilityCommandOutput}
 * @see {@link DescribeScheduledInstanceAvailabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstanceAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeScheduledInstanceAvailabilityCommand extends $Command
  .classBuilder<
    DescribeScheduledInstanceAvailabilityCommandInput,
    DescribeScheduledInstanceAvailabilityCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeScheduledInstanceAvailability", {})
  .n("EC2Client", "DescribeScheduledInstanceAvailabilityCommand")
  .sc(DescribeScheduledInstanceAvailability)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduledInstanceAvailabilityRequest;
      output: DescribeScheduledInstanceAvailabilityResult;
    };
    sdk: {
      input: DescribeScheduledInstanceAvailabilityCommandInput;
      output: DescribeScheduledInstanceAvailabilityCommandOutput;
    };
  };
}
