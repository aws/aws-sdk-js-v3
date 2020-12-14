import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { StartMonitoringMemberRequest } from "../models/models_0";
import {
  deserializeAws_restJson1StartMonitoringMemberCommand,
  serializeAws_restJson1StartMonitoringMemberCommand,
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

export type StartMonitoringMemberCommandInput = StartMonitoringMemberRequest;
export type StartMonitoringMemberCommandOutput = __MetadataBearer;

/**
 * <p>Sends a request to enable data ingest for a member account that has a status of
 *          <code>ACCEPTED_BUT_DISABLED</code>.</p>
 *          <p>For valid member accounts, the status is updated as follows.</p>
 *          <ul>
 *             <li>
 *                <p>If Detective enabled the member account, then the new status is
 *                <code>ENABLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Detective cannot enable the member account, the status remains
 *                <code>ACCEPTED_BUT_DISABLED</code>. </p>
 *             </li>
 *          </ul>
 */
export class StartMonitoringMemberCommand extends $Command<
  StartMonitoringMemberCommandInput,
  StartMonitoringMemberCommandOutput,
  DetectiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMonitoringMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "StartMonitoringMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMonitoringMemberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMonitoringMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMonitoringMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMonitoringMemberCommandOutput> {
    return deserializeAws_restJson1StartMonitoringMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
