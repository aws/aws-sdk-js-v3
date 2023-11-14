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
import {
  DescribeDetectMitigationActionsTaskRequest,
  DescribeDetectMitigationActionsTaskResponse,
} from "../models/models_1";
import {
  de_DescribeDetectMitigationActionsTaskCommand,
  se_DescribeDetectMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDetectMitigationActionsTaskCommand}.
 */
export interface DescribeDetectMitigationActionsTaskCommandInput extends DescribeDetectMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectMitigationActionsTaskCommand}.
 */
export interface DescribeDetectMitigationActionsTaskCommandOutput
  extends DescribeDetectMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Gets information about a Device Defender ML Detect mitigation action.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeDetectMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectMitigationActionsTaskResponse
 * //   taskSummary: { // DetectMitigationActionsTaskSummary
 * //     taskId: "STRING_VALUE",
 * //     taskStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELED",
 * //     taskStartTime: new Date("TIMESTAMP"),
 * //     taskEndTime: new Date("TIMESTAMP"),
 * //     target: { // DetectMitigationActionsTaskTarget
 * //       violationIds: [ // TargetViolationIdsForDetectMitigationActions
 * //         "STRING_VALUE",
 * //       ],
 * //       securityProfileName: "STRING_VALUE",
 * //       behaviorName: "STRING_VALUE",
 * //     },
 * //     violationEventOccurrenceRange: { // ViolationEventOccurrenceRange
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //     },
 * //     onlyActiveViolationsIncluded: true || false,
 * //     suppressedAlertsIncluded: true || false,
 * //     actionsDefinition: [ // MitigationActionList
 * //       { // MitigationAction
 * //         name: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         roleArn: "STRING_VALUE",
 * //         actionParams: { // MitigationActionParams
 * //           updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //             action: "DEACTIVATE", // required
 * //           },
 * //           updateCACertificateParams: { // UpdateCACertificateParams
 * //             action: "DEACTIVATE", // required
 * //           },
 * //           addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //             thingGroupNames: [ // ThingGroupNames // required
 * //               "STRING_VALUE",
 * //             ],
 * //             overrideDynamicGroups: true || false,
 * //           },
 * //           replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //             templateName: "BLANK_POLICY", // required
 * //           },
 * //           enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //             roleArnForLogging: "STRING_VALUE", // required
 * //             logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //           },
 * //           publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //             topicArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     taskStatistics: { // DetectMitigationActionsTaskStatistics
 * //       actionsExecuted: Number("long"),
 * //       actionsSkipped: Number("long"),
 * //       actionsFailed: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDetectMitigationActionsTaskCommandInput - {@link DescribeDetectMitigationActionsTaskCommandInput}
 * @returns {@link DescribeDetectMitigationActionsTaskCommandOutput}
 * @see {@link DescribeDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
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
export class DescribeDetectMitigationActionsTaskCommand extends $Command<
  DescribeDetectMitigationActionsTaskCommandInput,
  DescribeDetectMitigationActionsTaskCommandOutput,
  IoTClientResolvedConfig
> {
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
  constructor(readonly input: DescribeDetectMitigationActionsTaskCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDetectMitigationActionsTaskCommandInput, DescribeDetectMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDetectMitigationActionsTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeDetectMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeDetectMitigationActionsTask",
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
    input: DescribeDetectMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDetectMitigationActionsTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDetectMitigationActionsTaskCommandOutput> {
    return de_DescribeDetectMitigationActionsTaskCommand(output, context);
  }
}
