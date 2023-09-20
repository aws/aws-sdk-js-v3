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
import { PutSubscriptionFilterRequest } from "../models/models_0";
import { de_PutSubscriptionFilterCommand, se_PutSubscriptionFilterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutSubscriptionFilterCommand}.
 */
export interface PutSubscriptionFilterCommandInput extends PutSubscriptionFilterRequest {}
/**
 * @public
 *
 * The output of {@link PutSubscriptionFilterCommand}.
 */
export interface PutSubscriptionFilterCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a subscription filter and associates it with the specified log
 *       group. With subscription filters, you can subscribe to a real-time stream of log events
 *       ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>
 *       and have them delivered to a specific destination. When log events are sent to the receiving
 *       service, they are Base64 encoded and compressed with the GZIP format.</p>
 *          <p>The following destinations are supported for subscription filters:</p>
 *          <ul>
 *             <li>
 *                <p>An Amazon Kinesis data stream belonging to the same account as the subscription
 *           filter, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A logical destination created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a> that belongs to a different account, for cross-account delivery.
 *           We currently support Kinesis Data Streams and Kinesis Data Firehose as logical destinations.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as
 *           the subscription filter, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>An Lambda function that belongs to the same account as the
 *           subscription filter, for same-account delivery.</p>
 *             </li>
 *          </ul>
 *          <p>Each log group can have up to two subscription filters associated with it. If you are
 *       updating an existing filter, you must specify the correct name in <code>filterName</code>.
 *       </p>
 *          <p>To perform a <code>PutSubscriptionFilter</code> operation for any destination except a Lambda function,
 *     you must also have the
 *       <code>iam:PassRole</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutSubscriptionFilterRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterName: "STRING_VALUE", // required
 *   filterPattern: "STRING_VALUE", // required
 *   destinationArn: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   distribution: "Random" || "ByLogStream",
 * };
 * const command = new PutSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSubscriptionFilterCommandInput - {@link PutSubscriptionFilterCommandInput}
 * @returns {@link PutSubscriptionFilterCommandOutput}
 * @see {@link PutSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link PutSubscriptionFilterCommandOutput} for command's `response` shape.
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
export class PutSubscriptionFilterCommand extends $Command<
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
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
  constructor(readonly input: PutSubscriptionFilterCommandInput) {
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
  ): Handler<PutSubscriptionFilterCommandInput, PutSubscriptionFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSubscriptionFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutSubscriptionFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "PutSubscriptionFilter",
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
  private serialize(input: PutSubscriptionFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutSubscriptionFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSubscriptionFilterCommandOutput> {
    return de_PutSubscriptionFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
