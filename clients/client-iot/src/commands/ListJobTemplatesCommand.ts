import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListJobTemplatesRequest, ListJobTemplatesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListJobTemplatesCommand,
  serializeAws_restJson1ListJobTemplatesCommand,
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

export interface ListJobTemplatesCommandInput extends ListJobTemplatesRequest {}
export interface ListJobTemplatesCommandOutput extends ListJobTemplatesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of job templates.</p>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListJobTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListJobTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListJobTemplatesCommand extends $Command<
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobTemplatesCommandInput) {
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
  ): Handler<ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListJobTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJobTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListJobTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJobTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobTemplatesCommandOutput> {
    return deserializeAws_restJson1ListJobTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
