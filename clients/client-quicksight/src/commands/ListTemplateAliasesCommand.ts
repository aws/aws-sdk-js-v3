import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListTemplateAliasesRequest, ListTemplateAliasesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListTemplateAliasesCommand,
  serializeAws_restJson1ListTemplateAliasesCommand,
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

export interface ListTemplateAliasesCommandInput extends ListTemplateAliasesRequest {}
export interface ListTemplateAliasesCommandOutput extends ListTemplateAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists all the aliases of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTemplateAliasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTemplateAliasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListTemplateAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplateAliasesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateAliasesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTemplateAliasesCommand extends $Command<
  ListTemplateAliasesCommandInput,
  ListTemplateAliasesCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTemplateAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTemplateAliasesCommandInput, ListTemplateAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListTemplateAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTemplateAliasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTemplateAliasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTemplateAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTemplateAliasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTemplateAliasesCommandOutput> {
    return deserializeAws_restJson1ListTemplateAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
