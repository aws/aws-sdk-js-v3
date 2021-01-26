import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateImageVersionRequest, CreateImageVersionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateImageVersionCommand,
  serializeAws_json1_1CreateImageVersionCommand,
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

export type CreateImageVersionCommandInput = CreateImageVersionRequest;
export type CreateImageVersionCommandOutput = CreateImageVersionResponse & __MetadataBearer;

/**
 * <p>Creates a version of the SageMaker image specified by <code>ImageName</code>. The version
 *         represents the Amazon Container Registry (ECR) container image specified by <code>BaseImage</code>.</p>
 */
export class CreateImageVersionCommand extends $Command<
  CreateImageVersionCommandInput,
  CreateImageVersionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateImageVersionCommandInput) {
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
  ): Handler<CreateImageVersionCommandInput, CreateImageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateImageVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImageVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImageVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateImageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateImageVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageVersionCommandOutput> {
    return deserializeAws_json1_1CreateImageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
