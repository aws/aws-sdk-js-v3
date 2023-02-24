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
  DisableSecurityHubRequest,
  DisableSecurityHubRequestFilterSensitiveLog,
  DisableSecurityHubResponse,
  DisableSecurityHubResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1DisableSecurityHubCommand,
  serializeAws_restJson1DisableSecurityHubCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface DisableSecurityHubCommandInput extends DisableSecurityHubRequest {}
export interface DisableSecurityHubCommandOutput extends DisableSecurityHubResponse, __MetadataBearer {}

/**
 * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all
 *          Regions, you must submit one request per Region where you have enabled Security Hub.</p>
 *          <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated
 *          member accounts.</p>
 *          <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration
 *          settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
 *          are disabled, and your administrator and member account associations are removed.</p>
 *          <p>If you want to save your existing findings, you must export them before you disable
 *          Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableSecurityHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link DisableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class DisableSecurityHubCommand extends $Command<
  DisableSecurityHubCommandInput,
  DisableSecurityHubCommandOutput,
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

  constructor(readonly input: DisableSecurityHubCommandInput) {
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
  ): Handler<DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableSecurityHubCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DisableSecurityHubCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableSecurityHubRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableSecurityHubResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableSecurityHubCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableSecurityHubCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableSecurityHubCommandOutput> {
    return deserializeAws_restJson1DisableSecurityHubCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
