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
  DescribeAuditMitigationActionsTaskRequest,
  DescribeAuditMitigationActionsTaskResponse,
} from "../models/models_1";
import {
  de_DescribeAuditMitigationActionsTaskCommand,
  se_DescribeAuditMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditMitigationActionsTaskCommand}.
 */
export interface DescribeAuditMitigationActionsTaskCommandInput extends DescribeAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditMitigationActionsTaskCommand}.
 */
export interface DescribeAuditMitigationActionsTaskCommandOutput
  extends DescribeAuditMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditMitigationActionsTaskResponse
 * //   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   taskStatistics: { // AuditMitigationActionsTaskStatistics
 * //     "<keys>": { // TaskStatisticsForAuditCheck
 * //       totalFindingsCount: Number("long"),
 * //       failedFindingsCount: Number("long"),
 * //       succeededFindingsCount: Number("long"),
 * //       skippedFindingsCount: Number("long"),
 * //       canceledFindingsCount: Number("long"),
 * //     },
 * //   },
 * //   target: { // AuditMitigationActionsTaskTarget
 * //     auditTaskId: "STRING_VALUE",
 * //     findingIds: [ // FindingIds
 * //       "STRING_VALUE",
 * //     ],
 * //     auditCheckToReasonCodeFilter: { // AuditCheckToReasonCodeFilter
 * //       "<keys>": [ // ReasonForNonComplianceCodes
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   auditCheckToActionsMapping: { // AuditCheckToActionsMapping
 * //     "<keys>": [ // MitigationActionNameList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   actionsDefinition: [ // MitigationActionList
 * //     { // MitigationAction
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       actionParams: { // MitigationActionParams
 * //         updateDeviceCertificateParams: { // UpdateDeviceCertificateParams
 * //           action: "DEACTIVATE", // required
 * //         },
 * //         updateCACertificateParams: { // UpdateCACertificateParams
 * //           action: "DEACTIVATE", // required
 * //         },
 * //         addThingsToThingGroupParams: { // AddThingsToThingGroupParams
 * //           thingGroupNames: [ // ThingGroupNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           overrideDynamicGroups: true || false,
 * //         },
 * //         replaceDefaultPolicyVersionParams: { // ReplaceDefaultPolicyVersionParams
 * //           templateName: "BLANK_POLICY", // required
 * //         },
 * //         enableIoTLoggingParams: { // EnableIoTLoggingParams
 * //           roleArnForLogging: "STRING_VALUE", // required
 * //           logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * //         },
 * //         publishFindingToSnsParams: { // PublishFindingToSnsParams
 * //           topicArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAuditMitigationActionsTaskCommandInput - {@link DescribeAuditMitigationActionsTaskCommandInput}
 * @returns {@link DescribeAuditMitigationActionsTaskCommandOutput}
 * @see {@link DescribeAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
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
export class DescribeAuditMitigationActionsTaskCommand extends $Command<
  DescribeAuditMitigationActionsTaskCommandInput,
  DescribeAuditMitigationActionsTaskCommandOutput,
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
  constructor(readonly input: DescribeAuditMitigationActionsTaskCommandInput) {
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
  ): Handler<DescribeAuditMitigationActionsTaskCommandInput, DescribeAuditMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditMitigationActionsTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeAuditMitigationActionsTask",
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
    input: DescribeAuditMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAuditMitigationActionsTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAuditMitigationActionsTaskCommandOutput> {
    return de_DescribeAuditMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
