import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateConfigurationRequest, GetGroupCertificateConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetGroupCertificateConfigurationCommand,
  serializeAws_restJson1GetGroupCertificateConfigurationCommand,
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

export type GetGroupCertificateConfigurationCommandInput = GetGroupCertificateConfigurationRequest;
export type GetGroupCertificateConfigurationCommandOutput = GetGroupCertificateConfigurationResponse & __MetadataBearer;

/**
 * Retrieves the current configuration for the CA used by the group.
 */
export class GetGroupCertificateConfigurationCommand extends $Command<
  GetGroupCertificateConfigurationCommandInput,
  GetGroupCertificateConfigurationCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGroupCertificateConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGroupCertificateConfigurationCommandInput, GetGroupCertificateConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetGroupCertificateConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupCertificateConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetGroupCertificateConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetGroupCertificateConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGroupCertificateConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetGroupCertificateConfigurationCommandOutput> {
    return deserializeAws_restJson1GetGroupCertificateConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
