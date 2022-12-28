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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  TestFailoverMessage,
  TestFailoverMessageFilterSensitiveLog,
  TestFailoverResult,
  TestFailoverResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryTestFailoverCommand, serializeAws_queryTestFailoverCommand } from "../protocols/Aws_query";

export interface TestFailoverCommandInput extends TestFailoverMessage {}
export interface TestFailoverCommandOutput extends TestFailoverResult, __MetadataBearer {}

/**
 * <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on
 *             a specified node group (called shard in the console) in a replication group (called cluster in the console).</p>
 *          <p>This API is designed for testing the behavior of your application in case of ElastiCache failover. It is not designed to be an operational tool
 *            for initiating a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large-scale operational events, Amazon may block this API. </p>
 *          <p class="title">
 *             <b>Note the following</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI)
 *                     in any rolling 24-hour period.</p>
 *             </li>
 *             <li>
 *                <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group,
 *                     the first node replacement must complete before a subsequent call can be made.</p>
 *             </li>
 *             <li>
 *                <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console,
 *                     the Amazon CLI, or the ElastiCache API.
 *                     Look for the following automatic failover related events, listed here in order of occurrance:</p>
 *                <ol>
 *                   <li>
 *                      <p>Replication group message: <code>Test Failover API called for node group <node-group-id></code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Cache cluster message: <code>Failover from primary node <primary-node-id> to replica node <node-id> completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Replication group message: <code>Failover from primary node <primary-node-id> to replica node <node-id> completed</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Cache cluster message: <code>Recovering cache nodes <node-id></code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Cache cluster message: <code>Finished recovery for cache nodes <node-id></code>
 *                      </p>
 *                   </li>
 *                </ol>
 *                <p>For more information see:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a>
 *                             in the <i>ElastiCache User Guide</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, TestFailoverCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, TestFailoverCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new TestFailoverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestFailoverCommandInput} for command's `input` shape.
 * @see {@link TestFailoverCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class TestFailoverCommand extends $Command<
  TestFailoverCommandInput,
  TestFailoverCommandOutput,
  ElastiCacheClientResolvedConfig
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

  constructor(readonly input: TestFailoverCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestFailoverCommandInput, TestFailoverCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestFailoverCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "TestFailoverCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestFailoverMessageFilterSensitiveLog,
      outputFilterSensitiveLog: TestFailoverResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestFailoverCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryTestFailoverCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestFailoverCommandOutput> {
    return deserializeAws_queryTestFailoverCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
