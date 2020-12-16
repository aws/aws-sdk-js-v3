import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelPackageGroupInput, CreateModelPackageGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateModelPackageGroupCommand,
  serializeAws_json1_1CreateModelPackageGroupCommand,
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

export type CreateModelPackageGroupCommandInput = CreateModelPackageGroupInput;
export type CreateModelPackageGroupCommandOutput = CreateModelPackageGroupOutput & __MetadataBearer;

/**
 * <p>Creates a model group. A model group contains a group of model versions.</p>
 */
export class CreateModelPackageGroupCommand extends $Command<
  CreateModelPackageGroupCommandInput,
  CreateModelPackageGroupCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateModelPackageGroupCommandInput) {
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
  ): Handler<CreateModelPackageGroupCommandInput, CreateModelPackageGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelPackageGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelPackageGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateModelPackageGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelPackageGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelPackageGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelPackageGroupCommandOutput> {
    return deserializeAws_json1_1CreateModelPackageGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
