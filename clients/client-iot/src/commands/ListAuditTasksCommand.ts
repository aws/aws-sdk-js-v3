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
import { ListAuditTasksRequest, ListAuditTasksResponse } from "../models/models_1";
import { de_ListAuditTasksCommand, se_ListAuditTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAuditTasksCommand}.
 */
export interface ListAuditTasksCommandInput extends ListAuditTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditTasksCommand}.
 */
export interface ListAuditTasksCommandOutput extends ListAuditTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the Device Defender audits that have been performed during a given
 *           time period.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListAuditTasksRequest
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   taskType: "ON_DEMAND_AUDIT_TASK" || "SCHEDULED_AUDIT_TASK",
 *   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAuditTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditTasksResponse
 * //   tasks: [ // AuditTaskMetadataList
 * //     { // AuditTaskMetadata
 * //       taskId: "STRING_VALUE",
 * //       taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //       taskType: "ON_DEMAND_AUDIT_TASK" || "SCHEDULED_AUDIT_TASK",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditTasksCommandInput - {@link ListAuditTasksCommandInput}
 * @returns {@link ListAuditTasksCommandOutput}
 * @see {@link ListAuditTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditTasksCommandOutput} for command's `response` shape.
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
export class ListAuditTasksCommand extends $Command<
  ListAuditTasksCommandInput,
  ListAuditTasksCommandOutput,
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
  constructor(readonly input: ListAuditTasksCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAuditTasksCommandInput, ListAuditTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAuditTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListAuditTasks",
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
  private serialize(input: ListAuditTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAuditTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditTasksCommandOutput> {
    return de_ListAuditTasksCommand(output, context);
  }
}
