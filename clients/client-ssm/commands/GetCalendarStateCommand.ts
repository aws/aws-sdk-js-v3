import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetCalendarStateRequest, GetCalendarStateResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetCalendarStateCommand,
  serializeAws_json1_1GetCalendarStateCommand,
} from "../protocols/Aws_json1_1";
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

export type GetCalendarStateCommandInput = GetCalendarStateRequest;
export type GetCalendarStateCommandOutput = GetCalendarStateResponse & __MetadataBearer;

/**
 * <p>Gets the state of the AWS Systems Manager Change Calendar at an optional, specified time. If you
 *    specify a time, <code>GetCalendarState</code> returns the state of the calendar at a specific
 *    time, and returns the next time that the Change Calendar state will transition. If you do not
 *    specify a time, <code>GetCalendarState</code> assumes the current time. Change Calendar entries
 *    have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
 *          <p>If you specify more than one calendar in a request, the command returns the status of
 *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
 *    request are closed, the status returned is <code>CLOSED</code>.</p>
 *          <p>For more information about Systems Manager Change Calendar, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">AWS Systems Manager Change
 *     Calendar</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export class GetCalendarStateCommand extends $Command<
  GetCalendarStateCommandInput,
  GetCalendarStateCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCalendarStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCalendarStateCommandInput, GetCalendarStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetCalendarStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCalendarStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCalendarStateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCalendarStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCalendarStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCalendarStateCommandOutput> {
    return deserializeAws_json1_1GetCalendarStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
