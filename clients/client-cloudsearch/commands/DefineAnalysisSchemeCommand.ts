import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse } from "../models/models_0";
import {
  deserializeAws_queryDefineAnalysisSchemeCommand,
  serializeAws_queryDefineAnalysisSchemeCommand,
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

export type DefineAnalysisSchemeCommandInput = DefineAnalysisSchemeRequest;
export type DefineAnalysisSchemeCommandOutput = DefineAnalysisSchemeResponse & __MetadataBearer;

/**
 * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 */
export class DefineAnalysisSchemeCommand extends $Command<
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DefineAnalysisSchemeCommandInput) {
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
  ): Handler<DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineAnalysisSchemeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DefineAnalysisSchemeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DefineAnalysisSchemeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineAnalysisSchemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineAnalysisSchemeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineAnalysisSchemeCommandOutput> {
    return deserializeAws_queryDefineAnalysisSchemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
