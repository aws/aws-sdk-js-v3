import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeDetectorModelAnalysisRequest, DescribeDetectorModelAnalysisResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDetectorModelAnalysisCommand,
  serializeAws_restJson1DescribeDetectorModelAnalysisCommand,
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

export type DescribeDetectorModelAnalysisCommandInput = DescribeDetectorModelAnalysisRequest;
export type DescribeDetectorModelAnalysisCommandOutput = DescribeDetectorModelAnalysisResponse & __MetadataBearer;

/**
 * <p>Retrieves execution information about a detector model analysis</p>
 */
export class DescribeDetectorModelAnalysisCommand extends $Command<
  DescribeDetectorModelAnalysisCommandInput,
  DescribeDetectorModelAnalysisCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDetectorModelAnalysisCommandInput) {
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
  ): Handler<DescribeDetectorModelAnalysisCommandInput, DescribeDetectorModelAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DescribeDetectorModelAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDetectorModelAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDetectorModelAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDetectorModelAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDetectorModelAnalysisCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDetectorModelAnalysisCommandOutput> {
    return deserializeAws_restJson1DescribeDetectorModelAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
