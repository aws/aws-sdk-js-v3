import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListStudioSessionMappingsCommand,
  serializeAws_json1_1ListStudioSessionMappingsCommand,
} from "../protocols/Aws_json1_1";
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

export interface ListStudioSessionMappingsCommandInput extends ListStudioSessionMappingsInput {}
export interface ListStudioSessionMappingsCommandOutput extends ListStudioSessionMappingsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all user or group session mappings for the Amazon EMR Studio specified by
 *             <code>StudioId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudioSessionMappingsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudioSessionMappingsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStudioSessionMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioSessionMappingsCommandInput} for command's `input` shape.
 * @see {@link ListStudioSessionMappingsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStudioSessionMappingsCommand extends $Command<
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStudioSessionMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStudioSessionMappingsCommandInput, ListStudioSessionMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStudioSessionMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStudioSessionMappingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStudioSessionMappingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStudioSessionMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStudioSessionMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStudioSessionMappingsCommandOutput> {
    return deserializeAws_json1_1ListStudioSessionMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
