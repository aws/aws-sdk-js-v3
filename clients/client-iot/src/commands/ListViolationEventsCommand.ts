// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListViolationEventsRequest, ListViolationEventsResponse } from "../models/models_2";
import { de_ListViolationEventsCommand, se_ListViolationEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListViolationEventsCommand}.
 */
export interface ListViolationEventsCommandInput extends ListViolationEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListViolationEventsCommand}.
 */
export interface ListViolationEventsCommandOutput extends ListViolationEventsResponse, __MetadataBearer {}

/**
 * <p>Lists the Device Defender security profile violations discovered during the given time period.
 *       You can use filters to limit the results to those alerts issued for a particular security profile,
 *       behavior, or thing (device).</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListViolationEventsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListViolationEventsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // ListViolationEventsRequest
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   thingName: "STRING_VALUE",
 *   securityProfileName: "STRING_VALUE",
 *   behaviorCriteriaType: "STATIC" || "STATISTICAL" || "MACHINE_LEARNING",
 *   listSuppressedAlerts: true || false,
 *   verificationState: "FALSE_POSITIVE" || "BENIGN_POSITIVE" || "TRUE_POSITIVE" || "UNKNOWN",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListViolationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListViolationEventsResponse
 * //   violationEvents: [ // ViolationEvents
 * //     { // ViolationEvent
 * //       violationId: "STRING_VALUE",
 * //       thingName: "STRING_VALUE",
 * //       securityProfileName: "STRING_VALUE",
 * //       behavior: { // Behavior
 * //         name: "STRING_VALUE", // required
 * //         metric: "STRING_VALUE",
 * //         metricDimension: { // MetricDimension
 * //           dimensionName: "STRING_VALUE", // required
 * //           operator: "IN" || "NOT_IN",
 * //         },
 * //         criteria: { // BehaviorCriteria
 * //           comparisonOperator: "less-than" || "less-than-equals" || "greater-than" || "greater-than-equals" || "in-cidr-set" || "not-in-cidr-set" || "in-port-set" || "not-in-port-set" || "in-set" || "not-in-set",
 * //           value: { // MetricValue
 * //             count: Number("long"),
 * //             cidrs: [ // Cidrs
 * //               "STRING_VALUE",
 * //             ],
 * //             ports: [ // Ports
 * //               Number("int"),
 * //             ],
 * //             number: Number("double"),
 * //             numbers: [ // NumberList
 * //               Number("double"),
 * //             ],
 * //             strings: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           durationSeconds: Number("int"),
 * //           consecutiveDatapointsToAlarm: Number("int"),
 * //           consecutiveDatapointsToClear: Number("int"),
 * //           statisticalThreshold: { // StatisticalThreshold
 * //             statistic: "STRING_VALUE",
 * //           },
 * //           mlDetectionConfig: { // MachineLearningDetectionConfig
 * //             confidenceLevel: "LOW" || "MEDIUM" || "HIGH", // required
 * //           },
 * //         },
 * //         suppressAlerts: true || false,
 * //         exportMetric: true || false,
 * //       },
 * //       metricValue: {
 * //         count: Number("long"),
 * //         cidrs: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ports: [
 * //           Number("int"),
 * //         ],
 * //         number: Number("double"),
 * //         numbers: [
 * //           Number("double"),
 * //         ],
 * //         strings: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       violationEventAdditionalInfo: { // ViolationEventAdditionalInfo
 * //         confidenceLevel: "LOW" || "MEDIUM" || "HIGH",
 * //       },
 * //       violationEventType: "in-alarm" || "alarm-cleared" || "alarm-invalidated",
 * //       verificationState: "FALSE_POSITIVE" || "BENIGN_POSITIVE" || "TRUE_POSITIVE" || "UNKNOWN",
 * //       verificationStateDescription: "STRING_VALUE",
 * //       violationEventTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListViolationEventsCommandInput - {@link ListViolationEventsCommandInput}
 * @returns {@link ListViolationEventsCommandOutput}
 * @see {@link ListViolationEventsCommandInput} for command's `input` shape.
 * @see {@link ListViolationEventsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class ListViolationEventsCommand extends $Command
  .classBuilder<
    ListViolationEventsCommandInput,
    ListViolationEventsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListViolationEvents", {})
  .n("IoTClient", "ListViolationEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListViolationEventsCommand)
  .de(de_ListViolationEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListViolationEventsRequest;
      output: ListViolationEventsResponse;
    };
    sdk: {
      input: ListViolationEventsCommandInput;
      output: ListViolationEventsCommandOutput;
    };
  };
}
