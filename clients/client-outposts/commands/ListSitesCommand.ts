import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListSitesInput, ListSitesOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListSitesCommand,
  serializeAws_restJson1ListSitesCommand,
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

export interface ListSitesCommandInput extends ListSitesInput {}
export interface ListSitesCommandOutput extends ListSitesOutput, __MetadataBearer {}

/**
 * <p>Lists the sites for the specified AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListSitesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListSitesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListSitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSitesCommandInput} for command's `input` shape.
 * @see {@link ListSitesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSitesCommand extends $Command<
  ListSitesCommandInput,
  ListSitesCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSitesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSitesCommandInput, ListSitesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "ListSitesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSitesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSitesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSitesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSitesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSitesCommandOutput> {
    return deserializeAws_restJson1ListSitesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
