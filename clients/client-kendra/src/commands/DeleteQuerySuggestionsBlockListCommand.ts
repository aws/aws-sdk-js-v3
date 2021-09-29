import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteQuerySuggestionsBlockListRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand,
  serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand,
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

export interface DeleteQuerySuggestionsBlockListCommandInput extends DeleteQuerySuggestionsBlockListRequest {}
export interface DeleteQuerySuggestionsBlockListCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a block list used for query suggestions for an index.</p>
 *         <p>A deleted block list might not take effect right away. Amazon Kendra
 *             needs to refresh the entire suggestions list to add back the
 *             queries that were previously blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link DeleteQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteQuerySuggestionsBlockListCommand extends $Command<
  DeleteQuerySuggestionsBlockListCommandInput,
  DeleteQuerySuggestionsBlockListCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQuerySuggestionsBlockListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQuerySuggestionsBlockListCommandInput, DeleteQuerySuggestionsBlockListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DeleteQuerySuggestionsBlockListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQuerySuggestionsBlockListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteQuerySuggestionsBlockListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteQuerySuggestionsBlockListCommandOutput> {
    return deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
