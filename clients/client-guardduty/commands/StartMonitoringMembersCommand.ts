import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { StartMonitoringMembersRequest, StartMonitoringMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StartMonitoringMembersCommand,
  serializeAws_restJson1StartMonitoringMembersCommand,
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

export type StartMonitoringMembersCommandInput = StartMonitoringMembersRequest;
export type StartMonitoringMembersCommandOutput = StartMonitoringMembersResponse & __MetadataBearer;

/**
 * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
 *       restart monitoring of accounts that you stopped monitoring with the
 *         <code>StopMonitoringMembers</code> operation.</p>
 */
export class StartMonitoringMembersCommand extends $Command<
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMonitoringMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMonitoringMembersCommandInput, StartMonitoringMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "StartMonitoringMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMonitoringMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMonitoringMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMonitoringMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMonitoringMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMonitoringMembersCommandOutput> {
    return deserializeAws_restJson1StartMonitoringMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
