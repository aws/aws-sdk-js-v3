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
import { ListDetectMitigationActionsTasksRequest, ListDetectMitigationActionsTasksResponse } from "../models/models_1";
import {
  de_ListDetectMitigationActionsTasksCommand,
  se_ListDetectMitigationActionsTasksCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDetectMitigationActionsTasksCommand}.
 */
export interface ListDetectMitigationActionsTasksCommandInput extends ListDetectMitigationActionsTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectMitigationActionsTasksCommand}.
 */
export interface ListDetectMitigationActionsTasksCommandOutput
  extends ListDetectMitigationActionsTasksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       List of Device Defender ML Detect mitigation actions tasks.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListDetectMitigationActionsTasksRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListDetectMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectMitigationActionsTasksResponse
 * //   tasks: [ // DetectMitigationActionsTaskSummaryList
 * //     { // DetectMitigationActionsTaskSummary
 * //       taskId: "STRING_VALUE",
 * //       taskStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELED",
 * //       taskStartTime: new Date("TIMESTAMP"),
 * //       taskEndTime: new Date("TIMESTAMP"),
 * //       target: { // DetectMitigationActionsTaskTarget
 * //         violationIds: [ // TargetViolationIdsForDetectMitigationActions
 * //           "STRING_VALUE",
 * //         ],
 * //         securityProfileName: "STRING_VALUE",
 * //         behaviorName: "STRING_VALUE",
 * //       },
 * //       violationEventOccurrenceRange: { // ViolationEventOccurrenceRange
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //       },
 * //       onlyActiveViolationsIncluded: true || false,
 * //       suppressedAlertsIncluded: true || false,
 * //       actionsDefinition: [ // MitigationActionList
 * //         { // MitigationAction
 * //           name: "STRING_VALUE",
 * //           id: "STRING_VALUE",
 * //           roleArn: "STRING_VALUE",
 * //           actionParams: { // MitigationActionParams
 * //             updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //               action: "DEACTIVATE", // required
 * //             },
 * //             updateCACertificateParams: { // UpdateCACertificateParams
 * //               action: "DEACTIVATE", // required
 * //             },
 * //             addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //               thingGroupNames: [ // ThingGroupNames // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               overrideDynamicGroups: true || false,
 * //             },
 * //             replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //               templateName: "BLANK_POLICY", // required
 * //             },
 * //             enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //               roleArnForLogging: "STRING_VALUE", // required
 * //               logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //             },
 * //             publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //               topicArn: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       taskStatistics: { // DetectMitigationActionsTaskStatistics
 * //         actionsExecuted: Number("long"),
 * //         actionsSkipped: Number("long"),
 * //         actionsFailed: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectMitigationActionsTasksCommandInput - {@link ListDetectMitigationActionsTasksCommandInput}
 * @returns {@link ListDetectMitigationActionsTasksCommandOutput}
 * @see {@link ListDetectMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsTasksCommandOutput} for command's `response` shape.
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
export class ListDetectMitigationActionsTasksCommand extends $Command<
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
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
  constructor(readonly input: ListDetectMitigationActionsTasksCommandInput) {
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
  ): Handler<ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDetectMitigationActionsTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListDetectMitigationActionsTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListDetectMitigationActionsTasks",
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
    input: ListDetectMitigationActionsTasksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListDetectMitigationActionsTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDetectMitigationActionsTasksCommandOutput> {
    return de_ListDetectMitigationActionsTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
