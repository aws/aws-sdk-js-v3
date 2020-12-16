import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetInfrastructureConfigurationRequest, GetInfrastructureConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetInfrastructureConfigurationCommand,
  serializeAws_restJson1GetInfrastructureConfigurationCommand,
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

export type GetInfrastructureConfigurationCommandInput = GetInfrastructureConfigurationRequest;
export type GetInfrastructureConfigurationCommandOutput = GetInfrastructureConfigurationResponse & __MetadataBearer;

/**
 * <p> Gets an infrastructure configuration. </p>
 */
export class GetInfrastructureConfigurationCommand extends $Command<
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInfrastructureConfigurationCommandInput) {
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
  ): Handler<GetInfrastructureConfigurationCommandInput, GetInfrastructureConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetInfrastructureConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInfrastructureConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInfrastructureConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetInfrastructureConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetInfrastructureConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetInfrastructureConfigurationCommandOutput> {
    return deserializeAws_restJson1GetInfrastructureConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
