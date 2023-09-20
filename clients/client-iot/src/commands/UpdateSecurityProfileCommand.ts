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
import { UpdateSecurityProfileRequest, UpdateSecurityProfileResponse } from "../models/models_2";
import { de_UpdateSecurityProfileCommand, se_UpdateSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityProfileCommand}.
 */
export interface UpdateSecurityProfileCommandInput extends UpdateSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityProfileCommand}.
 */
export interface UpdateSecurityProfileCommandOutput extends UpdateSecurityProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateSecurityProfileRequest
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
 *   deleteBehaviors: true || false,
 *   deleteAlertTargets: true || false,
 *   deleteAdditionalMetricsToRetain: true || false,
 *   expectedVersion: Number("long"),
 * };
 * const command = new UpdateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityProfileResponse
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
 * //     },
 * //   ],
 * //   version: Number("long"),
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateSecurityProfileCommandInput - {@link UpdateSecurityProfileCommandInput}
 * @returns {@link UpdateSecurityProfileCommandOutput}
 * @see {@link UpdateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class UpdateSecurityProfileCommand extends $Command<
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
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
  constructor(readonly input: UpdateSecurityProfileCommandInput) {
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
  ): Handler<UpdateSecurityProfileCommandInput, UpdateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSecurityProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "UpdateSecurityProfile",
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
  private serialize(input: UpdateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSecurityProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecurityProfileCommandOutput> {
    return de_UpdateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
