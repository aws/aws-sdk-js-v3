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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeLogStreamsRequest, DescribeLogStreamsResponse } from "../models/models_0";
import { de_DescribeLogStreamsCommand, se_DescribeLogStreamsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLogStreamsCommand}.
 */
export interface DescribeLogStreamsCommandInput extends DescribeLogStreamsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLogStreamsCommand}.
 */
export interface DescribeLogStreamsCommandOutput extends DescribeLogStreamsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the log streams for the specified log group.
 *       You can list all the log streams or filter the results by prefix.
 *       You can also control how the results are ordered.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>.
 *       You must include one of these two parameters, but you can't include both.
 *     </p>
 *          <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and
 *       view data from the linked source accounts. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeLogStreamsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeLogStreamsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeLogStreamsRequest
 *   logGroupName: "STRING_VALUE",
 *   logGroupIdentifier: "STRING_VALUE",
 *   logStreamNamePrefix: "STRING_VALUE",
 *   orderBy: "LogStreamName" || "LastEventTime",
 *   descending: true || false,
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeLogStreamsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLogStreamsResponse
 * //   logStreams: [ // LogStreams
 * //     { // LogStream
 * //       logStreamName: "STRING_VALUE",
 * //       creationTime: Number("long"),
 * //       firstEventTimestamp: Number("long"),
 * //       lastEventTimestamp: Number("long"),
 * //       lastIngestionTime: Number("long"),
 * //       uploadSequenceToken: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       storedBytes: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLogStreamsCommandInput - {@link DescribeLogStreamsCommandInput}
 * @returns {@link DescribeLogStreamsCommandOutput}
 * @see {@link DescribeLogStreamsCommandInput} for command's `input` shape.
 * @see {@link DescribeLogStreamsCommandOutput} for command's `response` shape.
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
export class DescribeLogStreamsCommand extends $Command<
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
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
  constructor(readonly input: DescribeLogStreamsCommandInput) {
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
  ): Handler<DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLogStreamsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeLogStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "DescribeLogStreams",
      },
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
  private serialize(input: DescribeLogStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLogStreamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLogStreamsCommandOutput> {
    return de_DescribeLogStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
