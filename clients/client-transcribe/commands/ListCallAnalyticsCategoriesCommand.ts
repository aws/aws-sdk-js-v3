import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListCallAnalyticsCategoriesRequest, ListCallAnalyticsCategoriesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCallAnalyticsCategoriesCommand,
  serializeAws_json1_1ListCallAnalyticsCategoriesCommand,
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

export interface ListCallAnalyticsCategoriesCommandInput extends ListCallAnalyticsCategoriesRequest {}
export interface ListCallAnalyticsCategoriesCommandOutput
  extends ListCallAnalyticsCategoriesResponse,
    __MetadataBearer {}

/**
 * <p>Provides more information about the call analytics categories that you've created. You
 *             can use the information in this list to find a specific category. You can then use the
 *              operation to get more information about it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListCallAnalyticsCategoriesCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListCallAnalyticsCategoriesCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListCallAnalyticsCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCallAnalyticsCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListCallAnalyticsCategoriesCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCallAnalyticsCategoriesCommand extends $Command<
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCallAnalyticsCategoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCallAnalyticsCategoriesCommandInput, ListCallAnalyticsCategoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListCallAnalyticsCategoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCallAnalyticsCategoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCallAnalyticsCategoriesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCallAnalyticsCategoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCallAnalyticsCategoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCallAnalyticsCategoriesCommandOutput> {
    return deserializeAws_json1_1ListCallAnalyticsCategoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
