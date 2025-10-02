// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { PurchaseScheduledInstancesRequest, PurchaseScheduledInstancesResult } from "../models/models_8";
import { de_PurchaseScheduledInstancesCommand, se_PurchaseScheduledInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseScheduledInstancesCommand}.
 */
export interface PurchaseScheduledInstancesCommandInput extends PurchaseScheduledInstancesRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseScheduledInstancesCommand}.
 */
export interface PurchaseScheduledInstancesCommandOutput extends PurchaseScheduledInstancesResult, __MetadataBearer {}

/**
 * <note>
 *             <p>You can no longer purchase Scheduled Instances.</p>
 *          </note>
 *          <p>Purchases the Scheduled Instances with the specified schedule.</p>
 *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
 *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
 *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
 *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
 *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseScheduledInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseScheduledInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // PurchaseScheduledInstancesRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   PurchaseRequests: [ // PurchaseRequestSet // required
 *     { // PurchaseRequest
 *       InstanceCount: Number("int"), // required
 *       PurchaseToken: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PurchaseScheduledInstancesCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseScheduledInstancesResult
 * //   ScheduledInstanceSet: [ // PurchasedScheduledInstanceSet
 * //     { // ScheduledInstance
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       InstanceType: "STRING_VALUE",
 * //       NetworkPlatform: "STRING_VALUE",
 * //       NextSlotStartTime: new Date("TIMESTAMP"),
 * //       Platform: "STRING_VALUE",
 * //       PreviousSlotEndTime: new Date("TIMESTAMP"),
 * //       Recurrence: { // ScheduledInstanceRecurrence
 * //         Frequency: "STRING_VALUE",
 * //         Interval: Number("int"),
 * //         OccurrenceDaySet: [ // OccurrenceDaySet
 * //           Number("int"),
 * //         ],
 * //         OccurrenceRelativeToEnd: true || false,
 * //         OccurrenceUnit: "STRING_VALUE",
 * //       },
 * //       ScheduledInstanceId: "STRING_VALUE",
 * //       SlotDurationInHours: Number("int"),
 * //       TermEndDate: new Date("TIMESTAMP"),
 * //       TermStartDate: new Date("TIMESTAMP"),
 * //       TotalScheduledInstanceHours: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PurchaseScheduledInstancesCommandInput - {@link PurchaseScheduledInstancesCommandInput}
 * @returns {@link PurchaseScheduledInstancesCommandOutput}
 * @see {@link PurchaseScheduledInstancesCommandInput} for command's `input` shape.
 * @see {@link PurchaseScheduledInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class PurchaseScheduledInstancesCommand extends $Command
  .classBuilder<
    PurchaseScheduledInstancesCommandInput,
    PurchaseScheduledInstancesCommandOutput,
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
  .s("AmazonEC2", "PurchaseScheduledInstances", {})
  .n("EC2Client", "PurchaseScheduledInstancesCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseScheduledInstancesCommand)
  .de(de_PurchaseScheduledInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseScheduledInstancesRequest;
      output: PurchaseScheduledInstancesResult;
    };
    sdk: {
      input: PurchaseScheduledInstancesCommandInput;
      output: PurchaseScheduledInstancesCommandOutput;
    };
  };
}
