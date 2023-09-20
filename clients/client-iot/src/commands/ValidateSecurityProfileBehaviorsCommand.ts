// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ValidateSecurityProfileBehaviorsRequest, ValidateSecurityProfileBehaviorsResponse } from "../models/models_2";
import {
  de_ValidateSecurityProfileBehaviorsCommand,
  se_ValidateSecurityProfileBehaviorsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface ValidateSecurityProfileBehaviorsCommandOutput
  extends ValidateSecurityProfileBehaviorsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ValidateSecurityProfileBehaviorsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ValidateSecurityProfileBehaviorsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 */
export class ValidateSecurityProfileBehaviorsCommand extends $Command<
  ValidateSecurityProfileBehaviorsCommandInput,
  ValidateSecurityProfileBehaviorsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ValidateSecurityProfileBehaviorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateSecurityProfileBehaviorsCommandInput, ValidateSecurityProfileBehaviorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateSecurityProfileBehaviorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ValidateSecurityProfileBehaviorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ValidateSecurityProfileBehaviors",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ValidateSecurityProfileBehaviorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ValidateSecurityProfileBehaviorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateSecurityProfileBehaviorsCommandOutput> {
    return de_ValidateSecurityProfileBehaviorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
