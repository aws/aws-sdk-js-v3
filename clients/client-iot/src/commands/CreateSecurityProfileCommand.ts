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
} from "@smithy/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateSecurityProfileRequest, CreateSecurityProfileResponse } from "../models/models_0";
import { de_CreateSecurityProfileCommand, se_CreateSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *     },
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
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
 */
export class CreateSecurityProfileCommand extends $Command<
  CreateSecurityProfileCommandInput,
  CreateSecurityProfileCommandOutput,
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
  constructor(readonly input: CreateSecurityProfileCommandInput) {
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
  ): Handler<CreateSecurityProfileCommandInput, CreateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSecurityProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSecurityProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecurityProfileCommandOutput> {
    return de_CreateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
