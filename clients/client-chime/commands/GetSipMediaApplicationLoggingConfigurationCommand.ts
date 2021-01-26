import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  GetSipMediaApplicationLoggingConfigurationRequest,
  GetSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand,
  serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand,
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

export type GetSipMediaApplicationLoggingConfigurationCommandInput = GetSipMediaApplicationLoggingConfigurationRequest;
export type GetSipMediaApplicationLoggingConfigurationCommandOutput = GetSipMediaApplicationLoggingConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Returns the logging configuration for the specified SIP media application.</p>
 */
export class GetSipMediaApplicationLoggingConfigurationCommand extends $Command<
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSipMediaApplicationLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSipMediaApplicationLoggingConfigurationCommandInput,
    GetSipMediaApplicationLoggingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetSipMediaApplicationLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSipMediaApplicationLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSipMediaApplicationLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSipMediaApplicationLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> {
    return deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
