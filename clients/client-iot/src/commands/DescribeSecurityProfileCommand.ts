// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeSecurityProfileRequest, DescribeSecurityProfileResponse } from "../models/models_1";
import { de_DescribeSecurityProfileCommand, se_DescribeSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityProfileCommand}.
 */
export interface DescribeSecurityProfileCommandInput extends DescribeSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityProfileCommand}.
 */
export interface DescribeSecurityProfileCommandOutput extends DescribeSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeSecurityProfileRequest
 *   securityProfileName: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityProfileResponse
 * //   securityProfileName: "STRING_VALUE",
 * //   securityProfileArn: "STRING_VALUE",
 * //   securityProfileDescription: "STRING_VALUE",
 * //   behaviors: [ // Behaviors
 * //     { // Behavior
 * //       name: "STRING_VALUE", // required
 * //       metric: "STRING_VALUE",
 * //       metricDimension: { // MetricDimension
 * //         dimensionName: "STRING_VALUE", // required
 * //         operator: "IN" || "NOT_IN",
 * //       },
 * //       criteria: { // BehaviorCriteria
 * //         comparisonOperator: "less-than" || "less-than-equals" || "greater-than" || "greater-than-equals" || "in-cidr-set" || "not-in-cidr-set" || "in-port-set" || "not-in-port-set" || "in-set" || "not-in-set",
 * //         value: { // MetricValue
 * //           count: Number("long"),
 * //           cidrs: [ // Cidrs
 * //             "STRING_VALUE",
 * //           ],
 * //           ports: [ // Ports
 * //             Number("int"),
 * //           ],
 * //           number: Number("double"),
 * //           numbers: [ // NumberList
 * //             Number("double"),
 * //           ],
 * //           strings: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         durationSeconds: Number("int"),
 * //         consecutiveDatapointsToAlarm: Number("int"),
 * //         consecutiveDatapointsToClear: Number("int"),
 * //         statisticalThreshold: { // StatisticalThreshold
 * //           statistic: "STRING_VALUE",
 * //         },
 * //         mlDetectionConfig: { // MachineLearningDetectionConfig
 * //           confidenceLevel: "LOW" || "MEDIUM" || "HIGH", // required
 * //         },
 * //       },
 * //       suppressAlerts: true || false,
 * //       exportMetric: true || false,
 * //     },
 * //   ],
 * //   alertTargets: { // AlertTargets
 * //     "<keys>": { // AlertTarget
 * //       alertTargetArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   additionalMetricsToRetain: [ // AdditionalMetricsToRetainList
 * //     "STRING_VALUE",
 * //   ],
 * //   additionalMetricsToRetainV2: [ // AdditionalMetricsToRetainV2List
 * //     { // MetricToRetain
 * //       metric: "STRING_VALUE", // required
 * //       metricDimension: {
 * //         dimensionName: "STRING_VALUE", // required
 * //         operator: "IN" || "NOT_IN",
 * //       },
 * //       exportMetric: true || false,
 * //     },
 * //   ],
 * //   version: Number("long"),
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * //   metricsExportConfig: { // MetricsExportConfig
 * //     mqttTopic: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSecurityProfileCommandInput - {@link DescribeSecurityProfileCommandInput}
 * @returns {@link DescribeSecurityProfileCommandOutput}
 * @see {@link DescribeSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityProfileCommandOutput} for command's `response` shape.
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
export class DescribeSecurityProfileCommand extends $Command
  .classBuilder<
    DescribeSecurityProfileCommandInput,
    DescribeSecurityProfileCommandOutput,
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
  .s("AWSIotService", "DescribeSecurityProfile", {})
  .n("IoTClient", "DescribeSecurityProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityProfileCommand)
  .de(de_DescribeSecurityProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityProfileRequest;
      output: DescribeSecurityProfileResponse;
    };
    sdk: {
      input: DescribeSecurityProfileCommandInput;
      output: DescribeSecurityProfileCommandOutput;
    };
  };
}
