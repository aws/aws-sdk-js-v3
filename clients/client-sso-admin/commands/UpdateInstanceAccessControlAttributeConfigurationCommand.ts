import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import {
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand,
  serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand,
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

export type UpdateInstanceAccessControlAttributeConfigurationCommandInput = UpdateInstanceAccessControlAttributeConfigurationRequest;
export type UpdateInstanceAccessControlAttributeConfigurationCommandOutput = UpdateInstanceAccessControlAttributeConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Updates the AWS SSO identity store attributes to use with the AWS SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the AWS SSO identity store. If a SAML assertion passes any of these attributes, AWS SSO will replace the attribute value with the value from the AWS SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 */
export class UpdateInstanceAccessControlAttributeConfigurationCommand extends $Command<
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateInstanceAccessControlAttributeConfigurationCommandInput) {
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
    UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "UpdateInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
