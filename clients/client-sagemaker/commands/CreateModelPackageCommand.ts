import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelPackageInput, CreateModelPackageOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateModelPackageCommand,
  serializeAws_json1_1CreateModelPackageCommand,
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

export type CreateModelPackageCommandInput = CreateModelPackageInput;
export type CreateModelPackageCommandOutput = CreateModelPackageOutput & __MetadataBearer;

/**
 * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS
 *             Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on AWS Marketplace to create
 *             models in Amazon SageMaker.</p>
 *         <p>To create a model package by specifying a Docker container that contains your
 *             inference code and the Amazon S3 location of your model artifacts, provide values for
 *                 <code>InferenceSpecification</code>. To create a model from an algorithm resource
 *             that you created or subscribed to in AWS Marketplace, provide a value for
 *                 <code>SourceAlgorithmSpecification</code>.</p>
 *         <note>
 *             <p>There are two types of model packages:</p>
 *             <ul>
 *                <li>
 *                     <p>Versioned - a model that is part of a model group in the model registry.</p>
 *                 </li>
 *                <li>
 *                     <p>Unversioned - a model package that is not part of a model group.</p>
 *                 </li>
 *             </ul>
 *         </note>
 */
export class CreateModelPackageCommand extends $Command<
  CreateModelPackageCommandInput,
  CreateModelPackageCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateModelPackageCommandInput) {
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
  ): Handler<CreateModelPackageCommandInput, CreateModelPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelPackageInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateModelPackageOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelPackageCommandOutput> {
    return deserializeAws_json1_1CreateModelPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
