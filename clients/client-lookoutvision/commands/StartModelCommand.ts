import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { StartModelRequest, StartModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartModelCommand,
  serializeAws_restJson1StartModelCommand,
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

export type StartModelCommandInput = StartModelRequest;
export type StartModelCommandOutput = StartModelResponse & __MetadataBearer;

/**
 * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
 *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectAnomalies</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *          model, call <a>StopModel</a>.</p>
 *          </note>
 */
export class StartModelCommand extends $Command<
  StartModelCommandInput,
  StartModelCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartModelCommandInput, StartModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "StartModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartModelCommandOutput> {
    return deserializeAws_restJson1StartModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
