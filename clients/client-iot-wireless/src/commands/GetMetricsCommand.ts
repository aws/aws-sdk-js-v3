// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetMetricsRequest, GetMetricsResponse } from "../models/models_0";
import { GetMetrics } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricsCommand}.
 */
export interface GetMetricsCommandInput extends GetMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetMetricsCommand}.
 */
export interface GetMetricsCommandOutput extends GetMetricsResponse, __MetadataBearer {}

/**
 * <p>Get the summary metrics for this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetMetricsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetMetricsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetMetricsRequest
 *   SummaryMetricQueries: [ // SummaryMetricQueries
 *     { // SummaryMetricQuery
 *       QueryId: "STRING_VALUE",
 *       MetricName: "DeviceRSSI" || "DeviceSNR" || "DeviceRoamingRSSI" || "DeviceRoamingSNR" || "DeviceUplinkCount" || "DeviceDownlinkCount" || "DeviceUplinkLostCount" || "DeviceUplinkLostRate" || "DeviceJoinRequestCount" || "DeviceJoinAcceptCount" || "DeviceRoamingUplinkCount" || "DeviceRoamingDownlinkCount" || "GatewayUpTime" || "GatewayDownTime" || "GatewayRSSI" || "GatewaySNR" || "GatewayUplinkCount" || "GatewayDownlinkCount" || "GatewayJoinRequestCount" || "GatewayJoinAcceptCount" || "AwsAccountUplinkCount" || "AwsAccountDownlinkCount" || "AwsAccountUplinkLostCount" || "AwsAccountUplinkLostRate" || "AwsAccountJoinRequestCount" || "AwsAccountJoinAcceptCount" || "AwsAccountRoamingUplinkCount" || "AwsAccountRoamingDownlinkCount" || "AwsAccountDeviceCount" || "AwsAccountGatewayCount" || "AwsAccountActiveDeviceCount" || "AwsAccountActiveGatewayCount",
 *       Dimensions: [ // Dimensions
 *         { // Dimension
 *           name: "DeviceId" || "GatewayId",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       AggregationPeriod: "OneHour" || "OneDay" || "OneWeek",
 *       StartTimestamp: new Date("TIMESTAMP"),
 *       EndTimestamp: new Date("TIMESTAMP"),
 *     },
 *   ],
 * };
 * const command = new GetMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricsResponse
 * //   SummaryMetricQueryResults: [ // SummaryMetricQueryResults
 * //     { // SummaryMetricQueryResult
 * //       QueryId: "STRING_VALUE",
 * //       QueryStatus: "Succeeded" || "Failed",
 * //       Error: "STRING_VALUE",
 * //       MetricName: "DeviceRSSI" || "DeviceSNR" || "DeviceRoamingRSSI" || "DeviceRoamingSNR" || "DeviceUplinkCount" || "DeviceDownlinkCount" || "DeviceUplinkLostCount" || "DeviceUplinkLostRate" || "DeviceJoinRequestCount" || "DeviceJoinAcceptCount" || "DeviceRoamingUplinkCount" || "DeviceRoamingDownlinkCount" || "GatewayUpTime" || "GatewayDownTime" || "GatewayRSSI" || "GatewaySNR" || "GatewayUplinkCount" || "GatewayDownlinkCount" || "GatewayJoinRequestCount" || "GatewayJoinAcceptCount" || "AwsAccountUplinkCount" || "AwsAccountDownlinkCount" || "AwsAccountUplinkLostCount" || "AwsAccountUplinkLostRate" || "AwsAccountJoinRequestCount" || "AwsAccountJoinAcceptCount" || "AwsAccountRoamingUplinkCount" || "AwsAccountRoamingDownlinkCount" || "AwsAccountDeviceCount" || "AwsAccountGatewayCount" || "AwsAccountActiveDeviceCount" || "AwsAccountActiveGatewayCount",
 * //       Dimensions: [ // Dimensions
 * //         { // Dimension
 * //           name: "DeviceId" || "GatewayId",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AggregationPeriod: "OneHour" || "OneDay" || "OneWeek",
 * //       StartTimestamp: new Date("TIMESTAMP"),
 * //       EndTimestamp: new Date("TIMESTAMP"),
 * //       Timestamps: [ // MetricQueryTimestamps
 * //         new Date("TIMESTAMP"),
 * //       ],
 * //       Values: [ // MetricQueryValues
 * //         { // MetricQueryValue
 * //           Min: Number("double"),
 * //           Max: Number("double"),
 * //           Sum: Number("double"),
 * //           Avg: Number("double"),
 * //           Std: Number("double"),
 * //           P90: Number("double"),
 * //         },
 * //       ],
 * //       Unit: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMetricsCommandInput - {@link GetMetricsCommandInput}
 * @returns {@link GetMetricsCommandOutput}
 * @see {@link GetMetricsCommandInput} for command's `input` shape.
 * @see {@link GetMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class GetMetricsCommand extends $Command
  .classBuilder<
    GetMetricsCommandInput,
    GetMetricsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "GetMetrics", {})
  .n("IoTWirelessClient", "GetMetricsCommand")
  .sc(GetMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricsRequest;
      output: GetMetricsResponse;
    };
    sdk: {
      input: GetMetricsCommandInput;
      output: GetMetricsCommandOutput;
    };
  };
}
