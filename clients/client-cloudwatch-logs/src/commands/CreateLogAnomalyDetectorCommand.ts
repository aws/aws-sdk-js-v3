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
import { CreateLogAnomalyDetectorRequest, CreateLogAnomalyDetectorResponse } from "../models/models_0";
import { de_CreateLogAnomalyDetectorCommand, se_CreateLogAnomalyDetectorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLogAnomalyDetectorCommand}.
 */
export interface CreateLogAnomalyDetectorCommandInput extends CreateLogAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateLogAnomalyDetectorCommand}.
 */
export interface CreateLogAnomalyDetectorCommandOutput extends CreateLogAnomalyDetectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an <i>anomaly detector</i> that regularly scans one or more
 *         log groups and look for patterns
 *       and anomalies in the logs.</p>
 *          <p>An anomaly detector can help surface issues by automatically discovering anomalies in your log event traffic.
 *        An anomaly detector uses machine learning algorithms to scan log events and find <i>patterns</i>.
 *
 *        A pattern is a shared text structure that recurs among your log fields.  Patterns provide a useful tool for
 *        analyzing large sets of logs because a large number of log events can often be
 *        compressed into a few patterns.</p>
 *          <p>The anomaly detector uses pattern recognition to find <code>anomalies</code>, which are unusual log
 *        events. It uses the <code>evaluationFrequency</code> to compare current log events and patterns
 *        with trained baselines. </p>
 *          <p>Fields within a pattern are called <i>tokens</i>.
 *        Fields that vary within a pattern, such as a
 *        request ID or timestamp, are referred to as <i>dynamic tokens</i> and
 *        represented by <code><*></code>. </p>
 *          <p>The following is an example of a pattern:</p>
 *          <p>
 *             <code>[INFO] Request time: <*> ms</code>
 *          </p>
 *          <p>This pattern
 *        represents log events like <code>[INFO] Request time: 327 ms</code> and other similar log events
 *        that differ only by the number, in this csse 327. When the pattern is displayed, the different numbers are replaced
 *        by <code><*></code>
 *          </p>
 *          <note>
 *             <p>Any parts of log events that are masked as sensitive data are not scanned for anomalies. For more information
 *      about masking sensitive data, see
 *      <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Help protect sensitive log data with
 *      masking</a>.
 *    </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateLogAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateLogAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateLogAnomalyDetectorRequest
 *   logGroupArnList: [ // LogGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   detectorName: "STRING_VALUE",
 *   evaluationFrequency: "ONE_MIN" || "FIVE_MIN" || "TEN_MIN" || "FIFTEEN_MIN" || "THIRTY_MIN" || "ONE_HOUR",
 *   filterPattern: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   anomalyVisibilityTime: Number("long"),
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLogAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateLogAnomalyDetectorResponse
 * //   anomalyDetectorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLogAnomalyDetectorCommandInput - {@link CreateLogAnomalyDetectorCommandInput}
 * @returns {@link CreateLogAnomalyDetectorCommandOutput}
 * @see {@link CreateLogAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateLogAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
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
export class CreateLogAnomalyDetectorCommand extends $Command<
  CreateLogAnomalyDetectorCommandInput,
  CreateLogAnomalyDetectorCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
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
  constructor(readonly input: CreateLogAnomalyDetectorCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLogAnomalyDetectorCommandInput, CreateLogAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLogAnomalyDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "CreateLogAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "CreateLogAnomalyDetector",
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
  private serialize(input: CreateLogAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLogAnomalyDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLogAnomalyDetectorCommandOutput> {
    return de_CreateLogAnomalyDetectorCommand(output, context);
  }
}
