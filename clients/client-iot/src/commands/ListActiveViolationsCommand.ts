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
import { ListActiveViolationsRequest, ListActiveViolationsResponse } from "../models/models_1";
import { de_ListActiveViolationsCommand, se_ListActiveViolationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Lists the active violations for a given Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListActiveViolationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListActiveViolationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 */
export class ListActiveViolationsCommand extends $Command<
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
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
  constructor(readonly input: ListActiveViolationsCommandInput) {
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
  ): Handler<ListActiveViolationsCommandInput, ListActiveViolationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListActiveViolationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListActiveViolationsCommand";
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
  private serialize(input: ListActiveViolationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListActiveViolationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListActiveViolationsCommandOutput> {
    return de_ListActiveViolationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
