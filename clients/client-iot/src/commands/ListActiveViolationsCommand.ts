// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListActiveViolationsRequest, ListActiveViolationsResponse } from "../models/models_1";
import { de_ListActiveViolationsCommand, se_ListActiveViolationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActiveViolationsCommand}.
 */
export interface ListActiveViolationsCommandInput extends ListActiveViolationsRequest {}
/**
 * @public
 *
 * The output of {@link ListActiveViolationsCommand}.
 */
export interface ListActiveViolationsCommandOutput extends ListActiveViolationsResponse, __MetadataBearer {}

/**
 * <p>Lists the active violations for a given Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListActiveViolationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListActiveViolationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListActiveViolationsRequest
 *   thingName: "STRING_VALUE",
 *   securityProfileName: "STRING_VALUE",
 *   behaviorCriteriaType: "STATIC" || "STATISTICAL" || "MACHINE_LEARNING",
 *   listSuppressedAlerts: true || false,
 *   verificationState: "FALSE_POSITIVE" || "BENIGN_POSITIVE" || "TRUE_POSITIVE" || "UNKNOWN",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListActiveViolationsCommand(input);
 * const response = await client.send(command);
 * // { // ListActiveViolationsResponse
 * //   activeViolations: [ // ActiveViolations
 * //     { // ActiveViolation
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
 * //       lastViolationValue: {
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
 * //       verificationState: "FALSE_POSITIVE" || "BENIGN_POSITIVE" || "TRUE_POSITIVE" || "UNKNOWN",
 * //       verificationStateDescription: "STRING_VALUE",
 * //       lastViolationTime: new Date("TIMESTAMP"),
 * //       violationStartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActiveViolationsCommandInput - {@link ListActiveViolationsCommandInput}
 * @returns {@link ListActiveViolationsCommandOutput}
 * @see {@link ListActiveViolationsCommandInput} for command's `input` shape.
 * @see {@link ListActiveViolationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListActiveViolationsCommand extends $Command
  .classBuilder<
    ListActiveViolationsCommandInput,
    ListActiveViolationsCommandOutput,
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
  .s("AWSIotService", "ListActiveViolations", {})
  .n("IoTClient", "ListActiveViolationsCommand")
  .f(void 0, void 0)
  .ser(se_ListActiveViolationsCommand)
  .de(de_ListActiveViolationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActiveViolationsRequest;
      output: ListActiveViolationsResponse;
    };
    sdk: {
      input: ListActiveViolationsCommandInput;
      output: ListActiveViolationsCommandOutput;
    };
  };
}
