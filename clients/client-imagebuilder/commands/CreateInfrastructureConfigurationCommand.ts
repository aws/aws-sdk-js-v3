import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import {
  CreateInfrastructureConfigurationRequest,
  CreateInfrastructureConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateInfrastructureConfigurationCommand,
  serializeAws_restJson1CreateInfrastructureConfigurationCommand,
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

export type CreateInfrastructureConfigurationCommandInput = CreateInfrastructureConfigurationRequest;
export type CreateInfrastructureConfigurationCommandOutput = CreateInfrastructureConfigurationResponse &
  __MetadataBearer;

/**
 * <p> Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested. </p>
 */
export class CreateInfrastructureConfigurationCommand extends $Command<
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInfrastructureConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInfrastructureConfigurationCommandInput, CreateInfrastructureConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "CreateInfrastructureConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInfrastructureConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInfrastructureConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateInfrastructureConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateInfrastructureConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateInfrastructureConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateInfrastructureConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
