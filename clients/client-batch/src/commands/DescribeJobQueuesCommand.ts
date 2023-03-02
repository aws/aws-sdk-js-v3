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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  DescribeJobQueuesRequest,
  DescribeJobQueuesRequestFilterSensitiveLog,
  DescribeJobQueuesResponse,
  DescribeJobQueuesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeJobQueuesCommand,
  serializeAws_restJson1DescribeJobQueuesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DescribeJobQueuesCommand}.
 */
export interface DescribeJobQueuesCommandInput extends DescribeJobQueuesRequest {}
/**
 * The output of {@link DescribeJobQueuesCommand}.
 */
export interface DescribeJobQueuesCommandOutput extends DescribeJobQueuesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more of your job queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobQueuesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobQueuesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DescribeJobQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeJobQueuesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @example To describe a job queue
 * ```javascript
 * // This example describes the HighPriority job queue.
 * const input = {
 *   "jobQueues": [
 *     "HighPriority"
 *   ]
 * };
 * const command = new DescribeJobQueuesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobQueues": [
 *     {
 *       "computeEnvironmentOrder": [
 *         {
 *           "computeEnvironment": "arn:aws:batch:us-east-1:012345678910:compute-environment/C4OnDemand",
 *           "order": 1
 *         }
 *       ],
 *       "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
 *       "jobQueueName": "HighPriority",
 *       "priority": 1,
 *       "state": "ENABLED",
 *       "status": "VALID",
 *       "statusReason": "JobQueue Healthy"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class DescribeJobQueuesCommand extends $Command<
  DescribeJobQueuesCommandInput,
  DescribeJobQueuesCommandOutput,
  BatchClientResolvedConfig
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

  constructor(readonly input: DescribeJobQueuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobQueuesCommandInput, DescribeJobQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobQueuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeJobQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeJobQueuesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeJobQueuesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeJobQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeJobQueuesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobQueuesCommandOutput> {
    return deserializeAws_restJson1DescribeJobQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
