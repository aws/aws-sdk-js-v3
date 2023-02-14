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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import {
  PutLogEventsRequest,
  PutLogEventsRequestFilterSensitiveLog,
  PutLogEventsResponse,
  PutLogEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutLogEventsCommand,
  serializeAws_json1_1PutLogEventsCommand,
} from "../protocols/Aws_json1_1";

export interface PutLogEventsCommandInput extends PutLogEventsRequest {}
export interface PutLogEventsCommandOutput extends PutLogEventsResponse, __MetadataBearer {}

/**
 * <p>Uploads a batch of log events to the specified log stream.</p>
 *          <important>
 *             <p>The sequence token is now ignored in <code>PutLogEvents</code>
 *       actions. <code>PutLogEvents</code>
 *       actions are always accepted and never return <code>InvalidSequenceTokenException</code> or
 *       <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use
 *       parallel <code>PutLogEvents</code> actions on the same log stream. </p>
 *          </important>
 *          <p>The batch of events must satisfy the following constraints:</p>
 *          <ul>
 *             <li>
 *                <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of
 *           all event messages in UTF-8, plus 26 bytes for each log event.</p>
 *             </li>
 *             <li>
 *                <p>None of the log events in the batch can be more than 2 hours in the future.</p>
 *             </li>
 *             <li>
 *                <p>None of the log events in the batch can be more than 14 days in the past. Also,
 *           none of the log events can be from earlier than the retention period of the log
 *           group.</p>
 *             </li>
 *             <li>
 *                <p>The log events in the batch must be in chronological order by their timestamp. The
 *           timestamp is the time that the event occurred, expressed as the number of milliseconds
 *           after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell
 *           and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format:
 *             <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p>
 *             </li>
 *             <li>
 *                <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p>
 *             </li>
 *             <li>
 *                <p>The maximum number of log events in a batch is 10,000.</p>
 *             </li>
 *             <li>
 *                <important>
 *                   <p>The quota of five requests per second per log stream
 *           has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a
 *         per-second per-account quota. You can request an increase to the per-second throttling
 *         quota by using the Service Quotas service.</p>
 *                </important>
 *             </li>
 *          </ul>
 *          <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most
 *       likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutLogEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLogEventsCommandInput} for command's `input` shape.
 * @see {@link PutLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class PutLogEventsCommand extends $Command<
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput,
  CloudWatchLogsClientResolvedConfig
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

  constructor(readonly input: PutLogEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLogEventsCommandInput, PutLogEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutLogEventsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutLogEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLogEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutLogEventsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLogEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutLogEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLogEventsCommandOutput> {
    return deserializeAws_json1_1PutLogEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
