// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCapacityManagerMetricDimensionsRequest,
  GetCapacityManagerMetricDimensionsResult,
} from "../models/models_6";
import {
  de_GetCapacityManagerMetricDimensionsCommand,
  se_GetCapacityManagerMetricDimensionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityManagerMetricDimensionsCommand}.
 */
export interface GetCapacityManagerMetricDimensionsCommandInput extends GetCapacityManagerMetricDimensionsRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityManagerMetricDimensionsCommand}.
 */
export interface GetCapacityManagerMetricDimensionsCommandOutput
  extends GetCapacityManagerMetricDimensionsResult,
    __MetadataBearer {}

/**
 * <p>
 * Retrieves the available dimension values for capacity metrics within a specified time range. This is useful for discovering what accounts,
 * regions, instance families, and other dimensions have data available for filtering and grouping.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityManagerMetricDimensionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityManagerMetricDimensionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetCapacityManagerMetricDimensionsRequest
 *   GroupBy: [ // GroupBySet // required
 *     "resource-region" || "availability-zone-id" || "account-id" || "instance-family" || "instance-type" || "instance-platform" || "reservation-arn" || "reservation-id" || "reservation-type" || "reservation-create-timestamp" || "reservation-start-timestamp" || "reservation-end-timestamp" || "reservation-end-date-type" || "tenancy" || "reservation-state" || "reservation-instance-match-criteria" || "reservation-unused-financial-owner",
 *   ],
 *   FilterBy: [ // CapacityManagerConditionSet
 *     { // CapacityManagerCondition
 *       DimensionCondition: { // DimensionCondition
 *         Dimension: "resource-region" || "availability-zone-id" || "account-id" || "instance-family" || "instance-type" || "instance-platform" || "reservation-arn" || "reservation-id" || "reservation-type" || "reservation-create-timestamp" || "reservation-start-timestamp" || "reservation-end-timestamp" || "reservation-end-date-type" || "tenancy" || "reservation-state" || "reservation-instance-match-criteria" || "reservation-unused-financial-owner",
 *         Comparison: "equals" || "in",
 *         Values: [ // ConditionValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   MetricNames: [ // MetricSet // required
 *     "reservation-total-capacity-hrs-vcpu" || "reservation-total-capacity-hrs-inst" || "reservation-max-size-vcpu" || "reservation-max-size-inst" || "reservation-min-size-vcpu" || "reservation-min-size-inst" || "reservation-unused-total-capacity-hrs-vcpu" || "reservation-unused-total-capacity-hrs-inst" || "reservation-unused-total-estimated-cost" || "reservation-max-unused-size-vcpu" || "reservation-max-unused-size-inst" || "reservation-min-unused-size-vcpu" || "reservation-min-unused-size-inst" || "reservation-max-utilization" || "reservation-min-utilization" || "reservation-avg-utilization-vcpu" || "reservation-avg-utilization-inst" || "reservation-total-count" || "reservation-total-estimated-cost" || "reservation-avg-future-size-vcpu" || "reservation-avg-future-size-inst" || "reservation-min-future-size-vcpu" || "reservation-min-future-size-inst" || "reservation-max-future-size-vcpu" || "reservation-max-future-size-inst" || "reservation-avg-committed-size-vcpu" || "reservation-avg-committed-size-inst" || "reservation-max-committed-size-vcpu" || "reservation-max-committed-size-inst" || "reservation-min-committed-size-vcpu" || "reservation-min-committed-size-inst" || "reserved-total-usage-hrs-vcpu" || "reserved-total-usage-hrs-inst" || "reserved-total-estimated-cost" || "unreserved-total-usage-hrs-vcpu" || "unreserved-total-usage-hrs-inst" || "unreserved-total-estimated-cost" || "spot-total-usage-hrs-vcpu" || "spot-total-usage-hrs-inst" || "spot-total-estimated-cost" || "spot-avg-run-time-before-interruption-inst" || "spot-max-run-time-before-interruption-inst" || "spot-min-run-time-before-interruption-inst",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetCapacityManagerMetricDimensionsCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityManagerMetricDimensionsResult
 * //   MetricDimensionResults: [ // MetricDimensionResultSet
 * //     { // CapacityManagerDimension
 * //       ResourceRegion: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       InstancePlatform: "STRING_VALUE",
 * //       ReservationArn: "STRING_VALUE",
 * //       ReservationId: "STRING_VALUE",
 * //       ReservationType: "capacity-block" || "odcr",
 * //       ReservationCreateTimestamp: new Date("TIMESTAMP"),
 * //       ReservationStartTimestamp: new Date("TIMESTAMP"),
 * //       ReservationEndTimestamp: new Date("TIMESTAMP"),
 * //       ReservationEndDateType: "limited" || "unlimited",
 * //       Tenancy: "default" || "dedicated",
 * //       ReservationState: "active" || "expired" || "cancelled" || "scheduled" || "pending" || "failed" || "delayed" || "unsupported" || "payment-pending" || "payment-failed" || "retired",
 * //       ReservationInstanceMatchCriteria: "STRING_VALUE",
 * //       ReservationUnusedFinancialOwner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCapacityManagerMetricDimensionsCommandInput - {@link GetCapacityManagerMetricDimensionsCommandInput}
 * @returns {@link GetCapacityManagerMetricDimensionsCommandOutput}
 * @see {@link GetCapacityManagerMetricDimensionsCommandInput} for command's `input` shape.
 * @see {@link GetCapacityManagerMetricDimensionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetCapacityManagerMetricDimensionsCommand extends $Command
  .classBuilder<
    GetCapacityManagerMetricDimensionsCommandInput,
    GetCapacityManagerMetricDimensionsCommandOutput,
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
  .s("AmazonEC2", "GetCapacityManagerMetricDimensions", {})
  .n("EC2Client", "GetCapacityManagerMetricDimensionsCommand")
  .f(void 0, void 0)
  .ser(se_GetCapacityManagerMetricDimensionsCommand)
  .de(de_GetCapacityManagerMetricDimensionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCapacityManagerMetricDimensionsRequest;
      output: GetCapacityManagerMetricDimensionsResult;
    };
    sdk: {
      input: GetCapacityManagerMetricDimensionsCommandInput;
      output: GetCapacityManagerMetricDimensionsCommandOutput;
    };
  };
}
