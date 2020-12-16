import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineExpressionRequest, DefineExpressionResponse } from "../models/models_0";
import {
  deserializeAws_queryDefineExpressionCommand,
  serializeAws_queryDefineExpressionCommand,
} from "../protocols/Aws_query";
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

export type DefineExpressionCommandInput = DefineExpressionRequest;
export type DefineExpressionCommandOutput = DefineExpressionResponse & __MetadataBearer;

/**
 * <p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones.  If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DefineExpressionCommand extends $Command<
  DefineExpressionCommandInput,
  DefineExpressionCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DefineExpressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DefineExpressionCommandInput, DefineExpressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineExpressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DefineExpressionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DefineExpressionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineExpressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineExpressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineExpressionCommandOutput> {
    return deserializeAws_queryDefineExpressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
