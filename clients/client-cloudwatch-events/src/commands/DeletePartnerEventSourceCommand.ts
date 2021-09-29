import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeletePartnerEventSourceRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePartnerEventSourceCommand,
  serializeAws_json1_1DeletePartnerEventSourceCommand,
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

export interface DeletePartnerEventSourceCommandInput extends DeletePartnerEventSourceRequest {}
export interface DeletePartnerEventSourceCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation is used by SaaS partners to delete a partner event source. This operation
 *       is not used by Amazon Web Services customers.</p>
 *          <p>When you delete an event source, the status of the corresponding partner event bus in the
 *       Amazon Web Services customer account becomes DELETED.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeletePartnerEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeletePartnerEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DeletePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePartnerEventSourceCommand extends $Command<
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePartnerEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DeletePartnerEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePartnerEventSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePartnerEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePartnerEventSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePartnerEventSourceCommandOutput> {
    return deserializeAws_json1_1DeletePartnerEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
