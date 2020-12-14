import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  UpdateGroupCertificateConfigurationRequest,
  UpdateGroupCertificateConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand,
  serializeAws_restJson1UpdateGroupCertificateConfigurationCommand,
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

export type UpdateGroupCertificateConfigurationCommandInput = UpdateGroupCertificateConfigurationRequest;
export type UpdateGroupCertificateConfigurationCommandOutput = UpdateGroupCertificateConfigurationResponse &
  __MetadataBearer;

/**
 * Updates the Certificate expiry time for a group.
 */
export class UpdateGroupCertificateConfigurationCommand extends $Command<
  UpdateGroupCertificateConfigurationCommandInput,
  UpdateGroupCertificateConfigurationCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGroupCertificateConfigurationCommandInput) {
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
  ): Handler<UpdateGroupCertificateConfigurationCommandInput, UpdateGroupCertificateConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "UpdateGroupCertificateConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGroupCertificateConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGroupCertificateConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateGroupCertificateConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGroupCertificateConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateGroupCertificateConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
