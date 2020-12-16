import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { GetHostedConfigurationVersionRequest, HostedConfigurationVersion } from "../models/models_0";
import {
  deserializeAws_restJson1GetHostedConfigurationVersionCommand,
  serializeAws_restJson1GetHostedConfigurationVersionCommand,
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

export type GetHostedConfigurationVersionCommandInput = GetHostedConfigurationVersionRequest;
export type GetHostedConfigurationVersionCommandOutput = HostedConfigurationVersion & __MetadataBearer;

/**
 * <p>Get information about a specific configuration version.</p>
 */
export class GetHostedConfigurationVersionCommand extends $Command<
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostedConfigurationVersionCommandInput) {
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
  ): Handler<GetHostedConfigurationVersionCommandInput, GetHostedConfigurationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "GetHostedConfigurationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHostedConfigurationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersion.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostedConfigurationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetHostedConfigurationVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHostedConfigurationVersionCommandOutput> {
    return deserializeAws_restJson1GetHostedConfigurationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
