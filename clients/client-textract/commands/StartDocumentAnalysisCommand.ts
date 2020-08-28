import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { StartDocumentAnalysisRequest, StartDocumentAnalysisResponse } from "../models/index";
import {
  deserializeAws_json1_1StartDocumentAnalysisCommand,
  serializeAws_json1_1StartDocumentAnalysisCommand,
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

export type StartDocumentAnalysisCommandInput = StartDocumentAnalysisRequest;
export type StartDocumentAnalysisCommandOutput = StartDocumentAnalysisResponse & __MetadataBearer;

export class StartDocumentAnalysisCommand extends $Command<
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
  TextractClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDocumentAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartDocumentAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDocumentAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDocumentAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDocumentAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDocumentAnalysisCommandOutput> {
    return deserializeAws_json1_1StartDocumentAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
