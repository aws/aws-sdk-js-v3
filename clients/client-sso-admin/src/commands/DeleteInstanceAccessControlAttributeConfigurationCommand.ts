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
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeleteInstanceAccessControlAttributeConfigurationRequestFilterSensitiveLog,
  DeleteInstanceAccessControlAttributeConfigurationResponse,
  DeleteInstanceAccessControlAttributeConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand,
  serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface DeleteInstanceAccessControlAttributeConfigurationCommandInput
  extends DeleteInstanceAccessControlAttributeConfigurationRequest {}
export interface DeleteInstanceAccessControlAttributeConfigurationCommandOutput
  extends DeleteInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center
 *       instance and deletes all of the attribute mappings that have been configured. Once deleted,
 *       any attributes that are received from an identity source and any custom attributes you have
 *       previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeleteInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class DeleteInstanceAccessControlAttributeConfigurationCommand extends $Command<
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteInstanceAccessControlAttributeConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeleteInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInstanceAccessControlAttributeConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteInstanceAccessControlAttributeConfigurationResponseFilterSensitiveLog,
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
