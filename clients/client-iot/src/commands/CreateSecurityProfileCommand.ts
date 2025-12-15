// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CreateSecurityProfileRequest, CreateSecurityProfileResponse } from "../models/models_0";
import { CreateSecurityProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityProfileCommand}.
 */
export interface CreateSecurityProfileCommandInput extends CreateSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityProfileCommand}.
 */
export interface CreateSecurityProfileCommandOutput extends CreateSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateSecurityProfileRequest
 *   securityProfileName: "STRING_VALUE", // required
 *   securityProfileDescription: "STRING_VALUE",
 *   behaviors: [ // Behaviors
 *     { // Behavior
 *       name: "STRING_VALUE", // required
 *       metric: "STRING_VALUE",
 *       metricDimension: { // MetricDimension
 *         dimensionName: "STRING_VALUE", // required
 *         operator: "IN" || "NOT_IN",
 *       },
 *       criteria: { // BehaviorCriteria
 *         comparisonOperator: "less-than" || "less-than-equals" || "greater-than" || "greater-than-equals" || "in-cidr-set" || "not-in-cidr-set" || "in-port-set" || "not-in-port-set" || "in-set" || "not-in-set",
 *         value: { // MetricValue
 *           count: Number("long"),
 *           cidrs: [ // Cidrs
 *             "STRING_VALUE",
 *           ],
 *           ports: [ // Ports
 *             Number("int"),
 *           ],
 *           number: Number("double"),
 *           numbers: [ // NumberList
 *             Number("double"),
 *           ],
 *           strings: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         durationSeconds: Number("int"),
 *         consecutiveDatapointsToAlarm: Number("int"),
 *         consecutiveDatapointsToClear: Number("int"),
 *         statisticalThreshold: { // StatisticalThreshold
 *           statistic: "STRING_VALUE",
 *         },
 *         mlDetectionConfig: { // MachineLearningDetectionConfig
 *           confidenceLevel: "LOW" || "MEDIUM" || "HIGH", // required
 *         },
 *       },
 *       suppressAlerts: true || false,
 *       exportMetric: true || false,
 *     },
 *   ],
 *   alertTargets: { // AlertTargets
 *     "<keys>": { // AlertTarget
 *       alertTargetArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   additionalMetricsToRetain: [ // AdditionalMetricsToRetainList
 *     "STRING_VALUE",
 *   ],
 *   additionalMetricsToRetainV2: [ // AdditionalMetricsToRetainV2List
 *     { // MetricToRetain
 *       metric: "STRING_VALUE", // required
 *       metricDimension: {
 *         dimensionName: "STRING_VALUE", // required
 *         operator: "IN" || "NOT_IN",
 *       },
 *       exportMetric: true || false,
 *     },
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   metricsExportConfig: { // MetricsExportConfig
 *     mqttTopic: "STRING_VALUE", // required
 *     roleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityProfileResponse
 * //   securityProfileName: "STRING_VALUE",
 * //   securityProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityProfileCommandInput - {@link CreateSecurityProfileCommandInput}
 * @returns {@link CreateSecurityProfileCommandOutput}
 * @see {@link CreateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateSecurityProfileCommand extends $Command
  .classBuilder<
    CreateSecurityProfileCommandInput,
    CreateSecurityProfileCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateSecurityProfile", {})
  .n("IoTClient", "CreateSecurityProfileCommand")
  .sc(CreateSecurityProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityProfileRequest;
      output: CreateSecurityProfileResponse;
    };
    sdk: {
      input: CreateSecurityProfileCommandInput;
      output: CreateSecurityProfileCommandOutput;
    };
  };
}
