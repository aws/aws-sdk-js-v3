import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { ListRelatedItemsInput, ListRelatedItemsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRelatedItemsCommand,
  serializeAws_restJson1ListRelatedItemsCommand,
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

export interface ListRelatedItemsCommandInput extends ListRelatedItemsInput {}
export interface ListRelatedItemsCommandOutput extends ListRelatedItemsOutput, __MetadataBearer {}

/**
 * <p>List all related items for an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListRelatedItemsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListRelatedItemsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRelatedItemsCommand extends $Command<
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput,
  SSMIncidentsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRelatedItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRelatedItemsCommandInput, ListRelatedItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "ListRelatedItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRelatedItemsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRelatedItemsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRelatedItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRelatedItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRelatedItemsCommandOutput> {
    return deserializeAws_restJson1ListRelatedItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
