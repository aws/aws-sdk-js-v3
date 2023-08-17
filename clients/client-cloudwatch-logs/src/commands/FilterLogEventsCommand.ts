// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { FilterLogEventsRequest, FilterLogEventsResponse } from "../models/models_0";
import { de_FilterLogEventsCommand, se_FilterLogEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link FilterLogEventsCommand}.
 */
export interface FilterLogEventsCommandInput extends FilterLogEventsRequest {}
/**
 * @public
 *
 * The output of {@link FilterLogEventsCommand}.
 */
export interface FilterLogEventsCommandOutput extends FilterLogEventsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists log events from the specified log group. You can list all the log events or filter the results
 *       using a filter pattern, a time range, and the name of the log stream.</p>
 *          <p>You must have the <code>logs:FilterLogEvents</code> permission to perform this operation.</p>
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
 * const input = { // FilterLogEventsRequest
 *   logGroupName: "STRING_VALUE",
 *   logGroupIdentifier: "STRING_VALUE",
 *   logStreamNames: [ // InputLogStreamNames
 *     "STRING_VALUE",
 *   ],
 *   logStreamNamePrefix: "STRING_VALUE",
 *   startTime: Number("long"),
 *   endTime: Number("long"),
 *   filterPattern: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   interleaved: true || false,
 *   unmask: true || false,
 * };
 * const command = new FilterLogEventsCommand(input);
 * const response = await client.send(command);
 * // { // FilterLogEventsResponse
 * //   events: [ // FilteredLogEvents
 * //     { // FilteredLogEvent
 * //       logStreamName: "STRING_VALUE",
 * //       timestamp: Number("long"),
 * //       message: "STRING_VALUE",
 * //       ingestionTime: Number("long"),
 * //       eventId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   searchedLogStreams: [ // SearchedLogStreams
 * //     { // SearchedLogStream
 * //       logStreamName: "STRING_VALUE",
 * //       searchedCompletely: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param FilterLogEventsCommandInput - {@link FilterLogEventsCommandInput}
 * @returns {@link FilterLogEventsCommandOutput}
 * @see {@link FilterLogEventsCommandInput} for command's `input` shape.
 * @see {@link FilterLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: FilterLogEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_FilterLogEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FilterLogEventsCommandOutput> {
    return de_FilterLogEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
