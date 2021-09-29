import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditTasksRequest, ListAuditTasksResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAuditTasksCommand,
  serializeAws_restJson1ListAuditTasksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListAuditTasksCommandInput extends ListAuditTasksRequest {}
export interface ListAuditTasksCommandOutput extends ListAuditTasksResponse, __MetadataBearer {}

/**
 * <p>Lists the Device Defender audits that have been performed during a given
 *           time period.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAuditTasksCommand extends $Command<
  ListAuditTasksCommandInput,
  ListAuditTasksCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAuditTasksCommandInput) {
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
  ): Handler<ListAuditTasksCommandInput, ListAuditTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAuditTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAuditTasksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAuditTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAuditTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditTasksCommandOutput> {
    return deserializeAws_restJson1ListAuditTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
