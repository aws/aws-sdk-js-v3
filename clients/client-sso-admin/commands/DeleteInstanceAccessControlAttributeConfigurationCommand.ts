import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeleteInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand,
  serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand,
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

export type DeleteInstanceAccessControlAttributeConfigurationCommandInput = DeleteInstanceAccessControlAttributeConfigurationRequest;
export type DeleteInstanceAccessControlAttributeConfigurationCommandOutput = DeleteInstanceAccessControlAttributeConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Disables the attributes-based access control (ABAC) feature for the specified AWS SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 */
export class DeleteInstanceAccessControlAttributeConfigurationCommand extends $Command<
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInstanceAccessControlAttributeConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    DeleteInstanceAccessControlAttributeConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeleteInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
