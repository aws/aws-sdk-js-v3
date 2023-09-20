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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DescribeJobQueuesRequest, DescribeJobQueuesResponse } from "../models/models_0";
import { de_DescribeJobQueuesCommand, se_DescribeJobQueuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobQueuesCommand}.
 */
export interface DescribeJobQueuesCommandInput extends DescribeJobQueuesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobQueuesCommand}.
 */
export interface DescribeJobQueuesCommandOutput extends DescribeJobQueuesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your job queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeJobQueuesCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeJobQueuesCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeJobQueuesRequest
 *   jobQueues: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeJobQueuesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobQueuesResponse
 * //   jobQueues: [ // JobQueueDetailList
 * //     { // JobQueueDetail
 * //       jobQueueName: "STRING_VALUE", // required
 * //       jobQueueArn: "STRING_VALUE", // required
 * //       state: "ENABLED" || "DISABLED", // required
 * //       schedulingPolicyArn: "STRING_VALUE",
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "DELETED" || "VALID" || "INVALID",
 * //       statusReason: "STRING_VALUE",
 * //       priority: Number("int"), // required
 * //       computeEnvironmentOrder: [ // ComputeEnvironmentOrders // required
 * //         { // ComputeEnvironmentOrder
 * //           order: Number("int"), // required
 * //           computeEnvironment: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobQueuesCommandInput - {@link DescribeJobQueuesCommandInput}
 * @returns {@link DescribeJobQueuesCommandOutput}
 * @see {@link DescribeJobQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeJobQueuesCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
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
 * // example id: to-describe-a-job-queue-1481153995804
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBatchV20160810",
        operation: "DescribeJobQueues",
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
  private serialize(input: DescribeJobQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobQueuesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobQueuesCommandOutput> {
    return de_DescribeJobQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
