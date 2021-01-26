import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateCompilationJobRequest, CreateCompilationJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCompilationJobCommand,
  serializeAws_json1_1CreateCompilationJobCommand,
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

export type CreateCompilationJobCommandInput = CreateCompilationJobRequest;
export type CreateCompilationJobCommandOutput = CreateCompilationJobResponse & __MetadataBearer;

/**
 * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the
 *             resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p>
 *         <p>If
 *             you choose to host your model using Amazon SageMaker hosting services, you can use the resulting
 *             model artifacts as part of the model. You can also use the artifacts with
 *             AWS
 *             IoT Greengrass. In that case, deploy them as an ML
 *             resource.</p>
 *         <p>In the request body, you provide the following:</p>
 *         <ul>
 *             <li>
 *                 <p>A name for the compilation job</p>
 *             </li>
 *             <li>
 *                 <p> Information about the input model artifacts </p>
 *             </li>
 *             <li>
 *                 <p>The output location for the compiled model and the device (target) that the
 *                     model runs on </p>
 *             </li>
 *             <li>
 *                 <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform
 *                     the model compilation job. </p>
 *             </li>
 *          </ul>
 *         <p>You can also provide a <code>Tag</code> to track the model compilation job's resource
 *             use and costs. The response body contains the
 *                 <code>CompilationJobArn</code>
 *             for the compiled job.</p>
 *         <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get
 *             information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model
 *             compilation jobs, use <a>ListCompilationJobs</a>.</p>
 */
export class CreateCompilationJobCommand extends $Command<
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCompilationJobCommandInput) {
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
  ): Handler<CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateCompilationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCompilationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCompilationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCompilationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCompilationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCompilationJobCommandOutput> {
    return deserializeAws_json1_1CreateCompilationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
