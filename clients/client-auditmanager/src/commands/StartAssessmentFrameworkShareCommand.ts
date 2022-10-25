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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  StartAssessmentFrameworkShareRequest,
  StartAssessmentFrameworkShareRequestFilterSensitiveLog,
  StartAssessmentFrameworkShareResponse,
  StartAssessmentFrameworkShareResponseFilterSensitiveLog,
} from "../models/models_0";
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
 *          <p>The share request specifies a recipient and notifies them that a custom framework is
 *          available. Recipients have 120 days to accept or decline the request. If no action is
 *          taken, the share request expires.</p>
 *          <p>When you create a share request, Audit Manager stores a snapshot of your custom
 *          framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also
 *          stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p>
 *          <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following
 *          events occurs:</p>
 *          <ul>
 *             <li>
 *                <p>The sender revokes the share request.</p>
 *             </li>
 *             <li>
 *                <p>The recipient declines the share request.</p>
 *             </li>
 *             <li>
 *                <p>The recipient encounters an error and doesn't successfully accept the share
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>The share request expires before the recipient responds to the request.</p>
 *             </li>
 *          </ul>
 *          <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that
 *          corresponds with the latest version of the custom framework. </p>
 *          <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share
 *          request. </p>
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

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAssessmentFrameworkShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "StartAssessmentFrameworkShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAssessmentFrameworkShareRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartAssessmentFrameworkShareResponseFilterSensitiveLog,
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
