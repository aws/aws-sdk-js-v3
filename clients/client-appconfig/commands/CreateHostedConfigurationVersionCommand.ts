import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { CreateHostedConfigurationVersionRequest, HostedConfigurationVersion } from "../models/models_0";
import {
  deserializeAws_restJson1CreateHostedConfigurationVersionCommand,
  serializeAws_restJson1CreateHostedConfigurationVersionCommand,
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

export type CreateHostedConfigurationVersionCommandInput = CreateHostedConfigurationVersionRequest;
export type CreateHostedConfigurationVersionCommandOutput = HostedConfigurationVersion & __MetadataBearer;

/**
 * <p>Create a new configuration in the AppConfig configuration store.</p>
 */
export class CreateHostedConfigurationVersionCommand extends $Command<
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHostedConfigurationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHostedConfigurationVersionCommandInput, CreateHostedConfigurationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "CreateHostedConfigurationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHostedConfigurationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersion.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateHostedConfigurationVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateHostedConfigurationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateHostedConfigurationVersionCommandOutput> {
    return deserializeAws_restJson1CreateHostedConfigurationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
