import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeDetectorModelRequest, DescribeDetectorModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDetectorModelCommand,
  serializeAws_restJson1DescribeDetectorModelCommand,
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

export type DescribeDetectorModelCommandInput = DescribeDetectorModelRequest;
export type DescribeDetectorModelCommandOutput = DescribeDetectorModelResponse & __MetadataBearer;

/**
 * <p>Describes a detector model. If the <code>version</code> parameter is not specified,
 *       information about the latest version is returned.</p>
 */
export class DescribeDetectorModelCommand extends $Command<
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput,
  IoTEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDetectorModelCommandInput) {
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
  ): Handler<DescribeDetectorModelCommandInput, DescribeDetectorModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DescribeDetectorModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDetectorModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDetectorModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDetectorModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDetectorModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDetectorModelCommandOutput> {
    return deserializeAws_restJson1DescribeDetectorModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
