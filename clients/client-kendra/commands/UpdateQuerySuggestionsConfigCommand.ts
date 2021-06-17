import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateQuerySuggestionsConfigRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand,
  serializeAws_json1_1UpdateQuerySuggestionsConfigCommand,
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

export interface UpdateQuerySuggestionsConfigCommandInput extends UpdateQuerySuggestionsConfigRequest {}
export interface UpdateQuerySuggestionsConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the settings of query suggestions for an index.</p>
 *         <p>Amazon Kendra supports partial updates, so you only need to provide
 *             the fields you want to update.</p>
 *         <p>If an update is currently processing (i.e. 'happening'), you
 *             need to wait for the update to finish before making another update.</p>
 *         <p>Updates to query suggestions settings might not take effect right away.
 *             The time for your updated settings to take effect depends on the updates
 *             made and the number of search queries in your index.</p>
 *         <p>You can still enable/disable query suggestions at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateQuerySuggestionsConfigCommand extends $Command<
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateQuerySuggestionsConfigCommandInput) {
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
  ): Handler<UpdateQuerySuggestionsConfigCommandInput, UpdateQuerySuggestionsConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "UpdateQuerySuggestionsConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateQuerySuggestionsConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateQuerySuggestionsConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateQuerySuggestionsConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput> {
    return deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
