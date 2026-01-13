// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type {
  ValidateSecurityProfileBehaviorsRequest,
  ValidateSecurityProfileBehaviorsResponse,
} from "../models/models_2";
import { ValidateSecurityProfileBehaviors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ValidateSecurityProfileBehaviorsCommand}.
 */
export interface ValidateSecurityProfileBehaviorsCommandInput extends ValidateSecurityProfileBehaviorsRequest {}
/**
 * @public
 *
 * The output of {@link ValidateSecurityProfileBehaviorsCommand}.
 */
export interface ValidateSecurityProfileBehaviorsCommandOutput extends ValidateSecurityProfileBehaviorsResponse, __MetadataBearer {}

/**
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ValidateSecurityProfileBehaviorsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ValidateSecurityProfileBehaviorsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ValidateSecurityProfileBehaviorsRequest
 *   behaviors: [ // Behaviors // required
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
 * };
 * const command = new ValidateSecurityProfileBehaviorsCommand(input);
 * const response = await client.send(command);
 * // { // ValidateSecurityProfileBehaviorsResponse
 * //   valid: true || false,
 * //   validationErrors: [ // ValidationErrors
 * //     { // ValidationError
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ValidateSecurityProfileBehaviorsCommandInput - {@link ValidateSecurityProfileBehaviorsCommandInput}
 * @returns {@link ValidateSecurityProfileBehaviorsCommandOutput}
 * @see {@link ValidateSecurityProfileBehaviorsCommandInput} for command's `input` shape.
 * @see {@link ValidateSecurityProfileBehaviorsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ValidateSecurityProfileBehaviorsCommand extends $Command
  .classBuilder<
    ValidateSecurityProfileBehaviorsCommandInput,
    ValidateSecurityProfileBehaviorsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ValidateSecurityProfileBehaviors", {})
  .n("IoTClient", "ValidateSecurityProfileBehaviorsCommand")
  .sc(ValidateSecurityProfileBehaviors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateSecurityProfileBehaviorsRequest;
      output: ValidateSecurityProfileBehaviorsResponse;
    };
    sdk: {
      input: ValidateSecurityProfileBehaviorsCommandInput;
      output: ValidateSecurityProfileBehaviorsCommandOutput;
    };
  };
}
