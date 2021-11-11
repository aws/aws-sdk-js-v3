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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { StartAssessmentFrameworkShareRequest, StartAssessmentFrameworkShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartAssessmentFrameworkShareCommand,
  serializeAws_restJson1StartAssessmentFrameworkShareCommand,
} from "../protocols/Aws_restJson1";

export interface StartAssessmentFrameworkShareCommandInput extends StartAssessmentFrameworkShareRequest {}
export interface StartAssessmentFrameworkShareCommandOutput
  extends StartAssessmentFrameworkShareResponse,
    __MetadataBearer {}

/**
 * <p> Creates a share request for a custom framework in Audit Manager. </p>
 *          <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p>
 *          <important>
 *             <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to
 *             share a custom framework with another Amazon Web Services account. You may not share a
 *             custom framework that is derived from a standard framework if the standard framework is
 *             designated as not eligible for sharing by Amazon Web Services, unless you have obtained
 *             permission to do so from the owner of the standard framework. To learn more about which
 *             standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User
 *                Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, StartAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, StartAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new StartAssessmentFrameworkShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAssessmentFrameworkShareCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentFrameworkShareCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class StartAssessmentFrameworkShareCommand extends $Command<
  StartAssessmentFrameworkShareCommandInput,
  StartAssessmentFrameworkShareCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAssessmentFrameworkShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAssessmentFrameworkShareCommandInput, StartAssessmentFrameworkShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "StartAssessmentFrameworkShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAssessmentFrameworkShareRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartAssessmentFrameworkShareResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAssessmentFrameworkShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartAssessmentFrameworkShareCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAssessmentFrameworkShareCommandOutput> {
    return deserializeAws_restJson1StartAssessmentFrameworkShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
