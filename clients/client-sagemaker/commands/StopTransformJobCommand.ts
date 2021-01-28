import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopTransformJobRequest } from "../models/models_2";
import {
  deserializeAws_json1_1StopTransformJobCommand,
  serializeAws_json1_1StopTransformJobCommand,
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

export type StopTransformJobCommandInput = StopTransformJobRequest;
export type StopTransformJobCommandOutput = __MetadataBearer;

/**
 * <p>Stops a transform job.</p>
 *         <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
 *             changes to <code>Stopping</code>. After Amazon SageMaker
 *             stops
 *             the job, the status is set to <code>Stopped</code>. When you stop a transform job before
 *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
 */
export class StopTransformJobCommand extends $Command<
  StopTransformJobCommandInput,
  StopTransformJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopTransformJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTransformJobCommandInput, StopTransformJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopTransformJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTransformJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTransformJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTransformJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopTransformJobCommandOutput> {
    return deserializeAws_json1_1StopTransformJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
