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
  GetCalendarStateRequest,
  GetCalendarStateRequestFilterSensitiveLog,
  GetCalendarStateResponse,
  GetCalendarStateResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetCalendarStateCommand,
  serializeAws_json1_1GetCalendarStateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface GetCalendarStateCommandInput extends GetCalendarStateRequest {}
export interface GetCalendarStateCommandOutput extends GetCalendarStateResponse, __MetadataBearer {}

/**
 * <p>Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If
 *    you specify a time, <code>GetCalendarState</code> returns the state of the calendar at that
 *    specific time, and returns the next time that the change calendar state will transition. If you
 *    don't specify a time, <code>GetCalendarState</code> uses the current time. Change Calendar
 *    entries have two possible states: <code>OPEN</code> or <code>CLOSED</code>.</p>
 *          <p>If you specify more than one calendar in a request, the command returns the status of
 *     <code>OPEN</code> only if all calendars in the request are open. If one or more calendars in the
 *    request are closed, the status returned is <code>CLOSED</code>.</p>
 *          <p>For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-change-calendar.html">Amazon Web Services Systems Manager Change Calendar</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetCalendarStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetCalendarStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetCalendarStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCalendarStateCommandInput} for command's `input` shape.
 * @see {@link GetCalendarStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class GetCalendarStateCommand extends $Command<
  GetCalendarStateCommandInput,
  GetCalendarStateCommandOutput,
  SSMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCalendarStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetCalendarStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCalendarStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCalendarStateResponseFilterSensitiveLog,
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
