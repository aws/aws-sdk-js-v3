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
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreateInstanceAccessControlAttributeConfigurationRequestFilterSensitiveLog,
  CreateInstanceAccessControlAttributeConfigurationResponse,
  CreateInstanceAccessControlAttributeConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand,
  serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface CreateInstanceAccessControlAttributeConfigurationCommandInput
  extends CreateInstanceAccessControlAttributeConfigurationRequest {}
export interface CreateInstanceAccessControlAttributeConfigurationCommandOutput
  extends CreateInstanceAccessControlAttributeConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center
 *       instance. You can also specify new attributes to add to your ABAC configuration during the
 *       enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
 *          <note>
 *             <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that
 *       <code>InstanceAccessControlAttributeConfiguration</code> was created.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class CreateInstanceAccessControlAttributeConfigurationCommand extends $Command<
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
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

  constructor(readonly input: CreateInstanceAccessControlAttributeConfigurationCommandInput) {
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
    CreateInstanceAccessControlAttributeConfigurationCommandInput,
    CreateInstanceAccessControlAttributeConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateInstanceAccessControlAttributeConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "CreateInstanceAccessControlAttributeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceAccessControlAttributeConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceAccessControlAttributeConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
