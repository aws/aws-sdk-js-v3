import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetAnalyzedResourceRequest, GetAnalyzedResourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAnalyzedResourceCommand,
  serializeAws_restJson1GetAnalyzedResourceCommand,
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

export type GetAnalyzedResourceCommandInput = GetAnalyzedResourceRequest;
export type GetAnalyzedResourceCommandOutput = GetAnalyzedResourceResponse & __MetadataBearer;

/**
 * <p>Retrieves information about a resource that was analyzed.</p>
 */
export class GetAnalyzedResourceCommand extends $Command<
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAnalyzedResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAnalyzedResourceCommandInput, GetAnalyzedResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "GetAnalyzedResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAnalyzedResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAnalyzedResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAnalyzedResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAnalyzedResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnalyzedResourceCommandOutput> {
    return deserializeAws_restJson1GetAnalyzedResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
