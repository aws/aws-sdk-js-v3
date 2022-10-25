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
  UpdateSecurityHubConfigurationRequest,
  UpdateSecurityHubConfigurationRequestFilterSensitiveLog,
  UpdateSecurityHubConfigurationResponse,
  UpdateSecurityHubConfigurationResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1UpdateSecurityHubConfigurationCommand,
  serializeAws_restJson1UpdateSecurityHubConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface UpdateSecurityHubConfigurationCommandInput extends UpdateSecurityHubConfigurationRequest {}
export interface UpdateSecurityHubConfigurationCommandOutput
  extends UpdateSecurityHubConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates configuration options for Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateSecurityHubConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateSecurityHubConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateSecurityHubConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityHubConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class UpdateSecurityHubConfigurationCommand extends $Command<
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: UpdateSecurityHubConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSecurityHubConfigurationCommandInput, UpdateSecurityHubConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSecurityHubConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateSecurityHubConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityHubConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityHubConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecurityHubConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSecurityHubConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityHubConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateSecurityHubConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
