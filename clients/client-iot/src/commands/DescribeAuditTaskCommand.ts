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
import { DescribeAuditTaskRequest, DescribeAuditTaskResponse } from "../models/models_1";
import { de_DescribeAuditTaskCommand, se_DescribeAuditTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditTaskCommand}.
 */
export interface DescribeAuditTaskCommandInput extends DescribeAuditTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditTaskCommand}.
 */
export interface DescribeAuditTaskCommandOutput extends DescribeAuditTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a Device Defender audit.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuditTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditTaskResponse
 * //   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //   taskType: "ON_DEMAND_AUDIT_TASK" || "SCHEDULED_AUDIT_TASK",
 * //   taskStartTime: new Date("TIMESTAMP"),
 * //   taskStatistics: { // TaskStatistics
 * //     totalChecks: Number("int"),
 * //     inProgressChecks: Number("int"),
 * //     waitingForDataCollectionChecks: Number("int"),
 * //     compliantChecks: Number("int"),
 * //     nonCompliantChecks: Number("int"),
 * //     failedChecks: Number("int"),
 * //     canceledChecks: Number("int"),
 * //   },
 * //   scheduledAuditName: "STRING_VALUE",
 * //   auditDetails: { // AuditDetails
 * //     "<keys>": { // AuditCheckDetails
 * //       checkRunStatus: "IN_PROGRESS" || "WAITING_FOR_DATA_COLLECTION" || "CANCELED" || "COMPLETED_COMPLIANT" || "COMPLETED_NON_COMPLIANT" || "FAILED",
 * //       checkCompliant: true || false,
 * //       totalResourcesCount: Number("long"),
 * //       nonCompliantResourcesCount: Number("long"),
 * //       suppressedNonCompliantResourcesCount: Number("long"),
 * //       errorCode: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAuditTaskCommandInput - {@link DescribeAuditTaskCommandInput}
 * @returns {@link DescribeAuditTaskCommandOutput}
 * @see {@link DescribeAuditTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditTaskCommandOutput} for command's `response` shape.
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
export class DescribeAuditTaskCommand extends $Command<
  DescribeAuditTaskCommandInput,
  DescribeAuditTaskCommandOutput,
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
  constructor(readonly input: DescribeAuditTaskCommandInput) {
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
  ): Handler<DescribeAuditTaskCommandInput, DescribeAuditTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DescribeAuditTask",
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
  private serialize(input: DescribeAuditTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAuditTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuditTaskCommandOutput> {
    return de_DescribeAuditTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
