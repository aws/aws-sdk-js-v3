import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAutoMLJobRequest, CreateAutoMLJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAutoMLJobCommand,
  serializeAws_json1_1CreateAutoMLJobCommand,
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

export type CreateAutoMLJobCommandInput = CreateAutoMLJobRequest;
export type CreateAutoMLJobCommandOutput = CreateAutoMLJobResponse & __MetadataBearer;

/**
 * <p>Creates an Autopilot job.</p>
 *          <p>Find the best performing model after you run an Autopilot job by calling . Deploy that model by following the steps described in
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html">Step 6.1:
 *             Deploy the Model to Amazon SageMaker Hosting Services</a>.</p>
 *          <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html"> Automate Model
 *             Development with Amazon SageMaker Autopilot</a>.</p>
 */
export class CreateAutoMLJobCommand extends $Command<
  CreateAutoMLJobCommandInput,
  CreateAutoMLJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAutoMLJobCommandInput) {
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
  ): Handler<CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateAutoMLJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAutoMLJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAutoMLJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAutoMLJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAutoMLJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAutoMLJobCommandOutput> {
    return deserializeAws_json1_1CreateAutoMLJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
