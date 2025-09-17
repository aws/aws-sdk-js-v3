// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataResponse,
} from "../models/models_0";
import {
  de_GetScalingPlanResourceForecastDataCommand,
  se_GetScalingPlanResourceForecastDataCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetScalingPlanResourceForecastDataCommand}.
 */
export interface GetScalingPlanResourceForecastDataCommandInput extends GetScalingPlanResourceForecastDataRequest {}
/**
 * @public
 *
 * The output of {@link GetScalingPlanResourceForecastDataCommand}.
 */
export interface GetScalingPlanResourceForecastDataCommandOutput
  extends GetScalingPlanResourceForecastDataResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the forecast data for a scalable resource.</p>
 *          <p>Capacity forecasts are represented as predicted values, or data points, that are
 *          calculated using historical data points from a specified CloudWatch load metric. Data points are
 *          available for up to 56 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, GetScalingPlanResourceForecastDataCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, GetScalingPlanResourceForecastDataCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * // import type { AutoScalingPlansClientConfig } from "@aws-sdk/client-auto-scaling-plans";
 * const config = {}; // type is AutoScalingPlansClientConfig
 * const client = new AutoScalingPlansClient(config);
 * const input = { // GetScalingPlanResourceForecastDataRequest
 *   ScalingPlanName: "STRING_VALUE", // required
 *   ScalingPlanVersion: Number("long"), // required
 *   ServiceNamespace: "autoscaling" || "ecs" || "ec2" || "rds" || "dynamodb", // required
 *   ResourceId: "STRING_VALUE", // required
 *   ScalableDimension: "autoscaling:autoScalingGroup:DesiredCapacity" || "ecs:service:DesiredCount" || "ec2:spot-fleet-request:TargetCapacity" || "rds:cluster:ReadReplicaCount" || "dynamodb:table:ReadCapacityUnits" || "dynamodb:table:WriteCapacityUnits" || "dynamodb:index:ReadCapacityUnits" || "dynamodb:index:WriteCapacityUnits", // required
 *   ForecastDataType: "CapacityForecast" || "LoadForecast" || "ScheduledActionMinCapacity" || "ScheduledActionMaxCapacity", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetScalingPlanResourceForecastDataCommand(input);
 * const response = await client.send(command);
 * // { // GetScalingPlanResourceForecastDataResponse
 * //   Datapoints: [ // Datapoints // required
 * //     { // Datapoint
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       Value: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetScalingPlanResourceForecastDataCommandInput - {@link GetScalingPlanResourceForecastDataCommandInput}
 * @returns {@link GetScalingPlanResourceForecastDataCommandOutput}
 * @see {@link GetScalingPlanResourceForecastDataCommandInput} for command's `input` shape.
 * @see {@link GetScalingPlanResourceForecastDataCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception was thrown for a validation issue. Review the parameters provided.</p>
 *
 * @throws {@link AutoScalingPlansServiceException}
 * <p>Base exception class for all service exceptions from AutoScalingPlans service.</p>
 *
 *
 * @public
 */
export class GetScalingPlanResourceForecastDataCommand extends $Command
  .classBuilder<
    GetScalingPlanResourceForecastDataCommandInput,
    GetScalingPlanResourceForecastDataCommandOutput,
    AutoScalingPlansClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingPlansClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AnyScaleScalingPlannerFrontendService", "GetScalingPlanResourceForecastData", {})
  .n("AutoScalingPlansClient", "GetScalingPlanResourceForecastDataCommand")
  .f(void 0, void 0)
  .ser(se_GetScalingPlanResourceForecastDataCommand)
  .de(de_GetScalingPlanResourceForecastDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetScalingPlanResourceForecastDataRequest;
      output: GetScalingPlanResourceForecastDataResponse;
    };
    sdk: {
      input: GetScalingPlanResourceForecastDataCommandInput;
      output: GetScalingPlanResourceForecastDataCommandOutput;
    };
  };
}
