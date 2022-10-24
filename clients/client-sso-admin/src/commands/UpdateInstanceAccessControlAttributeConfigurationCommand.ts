// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationRequestFilterSensitiveLog,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
  UpdateInstanceAccessControlAttributeConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand,
  serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface UpdateInstanceAccessControlAttributeConfigurationCommandInput
  extends UpdateInstanceAccessControlAttributeConfigurationRequest {}
export interface UpdateInstanceAccessControlAttributeConfigurationCommandOutput
  extends UpdateInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance
 *       for attributes-based access control (ABAC). When using an external identity provider as an
 *       identity source, you can pass attributes through the SAML assertion as an alternative to
 *       configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of
 *       these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center
 *       identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new UpdateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class UpdateInstanceAccessControlAttributeConfigurationCommand extends $Command<
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateInstanceAccessControlAttributeConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "UpdateInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInstanceAccessControlAttributeConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateInstanceAccessControlAttributeConfigurationResponseFilterSensitiveLog,
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
