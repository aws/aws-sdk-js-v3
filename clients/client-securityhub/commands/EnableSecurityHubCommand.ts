import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { EnableSecurityHubRequest, EnableSecurityHubResponse } from "../models/models_0";
import {
  deserializeAws_restJson1EnableSecurityHubCommand,
  serializeAws_restJson1EnableSecurityHubCommand,
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

export type EnableSecurityHubCommandInput = EnableSecurityHubRequest;
export type EnableSecurityHubCommandOutput = EnableSecurityHubResponse & __MetadataBearer;

/**
 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
 *          request.</p>
 *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
 *          from other services that are integrated with Security Hub.</p>
 *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
 *          automatically enable the following standards.</p>
 *          <ul>
 *             <li>
 *                <p>CIS AWS Foundations</p>
 *             </li>
 *             <li>
 *                <p>AWS Foundational Security Best Practices</p>
 *             </li>
 *          </ul>
 *          <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p>
 *          <p>To not enable the automatically enabled standards, set
 *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
 *          <p>After you enable Security Hub, to enable a standard, use the <code>
 *                <a>BatchEnableStandards</a>
 *             </code> operation. To disable a standard, use the
 *                <code>
 *                <a>BatchDisableStandards</a>
 *             </code> operation.</p>
 *          <p>To learn more, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">Setting Up
 *             AWS Security Hub</a> in the <i>AWS Security Hub User Guide</i>.</p>
 */
export class EnableSecurityHubCommand extends $Command<
  EnableSecurityHubCommandInput,
  EnableSecurityHubCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "EnableSecurityHubCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSecurityHubRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableSecurityHubResponse.filterSensitiveLog,
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
