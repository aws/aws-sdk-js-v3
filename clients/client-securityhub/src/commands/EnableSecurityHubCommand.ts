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
  EnableSecurityHubRequest,
  EnableSecurityHubRequestFilterSensitiveLog,
  EnableSecurityHubResponse,
  EnableSecurityHubResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1EnableSecurityHubCommand,
  serializeAws_restJson1EnableSecurityHubCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

export interface EnableSecurityHubCommandInput extends EnableSecurityHubRequest {}
export interface EnableSecurityHubCommandOutput extends EnableSecurityHubResponse, __MetadataBearer {}

/**
 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
 *          request.</p>
 *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
 *          from other services that are integrated with Security Hub.</p>
 *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
 *          automatically enable the following standards.</p>
 *          <ul>
 *             <li>
 *                <p>CIS Amazon Web Services Foundations</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Foundational Security Best Practices</p>
 *             </li>
 *          </ul>
 *          <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p>
 *          <p>To not enable the automatically enabled standards, set
 *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
 *          <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the
 *                <code>BatchDisableStandards</code> operation.</p>
 *          <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new EnableSecurityHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link EnableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class EnableSecurityHubCommand extends $Command<
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput,
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

  constructor(readonly input: EnableSecurityHubCommandInput) {
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
  ): Handler<EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableSecurityHubCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "EnableSecurityHubCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSecurityHubRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableSecurityHubResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableSecurityHubCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableSecurityHubCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableSecurityHubCommandOutput> {
    return deserializeAws_restJson1EnableSecurityHubCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
