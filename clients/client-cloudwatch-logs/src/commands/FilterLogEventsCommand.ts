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
  FilterLogEventsRequest,
  FilterLogEventsRequestFilterSensitiveLog,
  FilterLogEventsResponse,
  FilterLogEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1FilterLogEventsCommand,
  serializeAws_json1_1FilterLogEventsCommand,
} from "../protocols/Aws_json1_1";

export interface FilterLogEventsCommandInput extends FilterLogEventsRequest {}
export interface FilterLogEventsCommandOutput extends FilterLogEventsResponse, __MetadataBearer {}

/**
 * <p>Lists log events from the specified log group. You can list all the log events or filter the results
 *       using a filter pattern, a time range, and the name of the log stream.</p>
 *          <p>You must have the <code>logs;FilterLogEvents</code> permission to perform this operation.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>.
 *       You must include one of these two parameters, but you can't include both.
 *     </p>
 *          <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000
 *       log events) or all the events found within the specified time range. If the results include a
 *       token, that means there are more log events available. You can get additional results by
 *       specifying the token in a subsequent call. This operation can return empty results while there
 *       are more log events available through the token.</p>
 *          <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested
 *     by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and
 *       view data from the linked source accounts. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, FilterLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, FilterLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new FilterLogEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FilterLogEventsCommandInput} for command's `input` shape.
 * @see {@link FilterLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class FilterLogEventsCommand extends $Command<
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput,
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

  constructor(readonly input: FilterLogEventsCommandInput) {
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
  ): Handler<FilterLogEventsCommandInput, FilterLogEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FilterLogEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "FilterLogEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FilterLogEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FilterLogEventsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FilterLogEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1FilterLogEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FilterLogEventsCommandOutput> {
    return deserializeAws_json1_1FilterLogEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
