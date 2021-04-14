import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { GetDetectorModelAnalysisResultsRequest, GetDetectorModelAnalysisResultsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand,
  serializeAws_restJson1GetDetectorModelAnalysisResultsCommand,
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

export type GetDetectorModelAnalysisResultsCommandInput = GetDetectorModelAnalysisResultsRequest;
export type GetDetectorModelAnalysisResultsCommandOutput = GetDetectorModelAnalysisResultsResponse & __MetadataBearer;

/**
 * <p>Retrieves one or more analysis results of the detector model.</p>
 */
export class GetDetectorModelAnalysisResultsCommand extends $Command<
  GetDetectorModelAnalysisResultsCommandInput,
  GetDetectorModelAnalysisResultsCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDetectorModelAnalysisResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDetectorModelAnalysisResultsCommandInput, GetDetectorModelAnalysisResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "GetDetectorModelAnalysisResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDetectorModelAnalysisResultsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDetectorModelAnalysisResultsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDetectorModelAnalysisResultsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDetectorModelAnalysisResultsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDetectorModelAnalysisResultsCommandOutput> {
    return deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
