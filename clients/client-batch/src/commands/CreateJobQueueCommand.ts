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
import { CreateJobQueueRequest, CreateJobQueueResponse } from "../models/models_0";
import { de_CreateJobQueueCommand, se_CreateJobQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateJobQueueCommand}.
 */
export interface CreateJobQueueCommandInput extends CreateJobQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobQueueCommand}.
 */
export interface CreateJobQueueCommandOutput extends CreateJobQueueResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the
 *    queue and assign an order of preference for the compute environments.</p>
 *          <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto
 *    its associated compute environments. For example, if a compute environment is associated with more than one job
 *    queue, the job queue with a higher priority is given preference for scheduling jobs to that compute
 *    environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // CreateJobQueueRequest
 *   jobQueueName: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   schedulingPolicyArn: "STRING_VALUE",
 *   priority: Number("int"), // required
 *   computeEnvironmentOrder: [ // ComputeEnvironmentOrders // required
 *     { // ComputeEnvironmentOrder
 *       order: Number("int"), // required
 *       computeEnvironment: "STRING_VALUE", // required
 *     },
 *   ],
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobQueueResponse
 * //   jobQueueName: "STRING_VALUE", // required
 * //   jobQueueArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateJobQueueCommandInput - {@link CreateJobQueueCommandInput}
 * @returns {@link CreateJobQueueCommandOutput}
 * @see {@link CreateJobQueueCommandInput} for command's `input` shape.
 * @see {@link CreateJobQueueCommandOutput} for command's `response` shape.
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
 * @example To create a job queue with a single compute environment
 * ```javascript
 * // This example creates a job queue called LowPriority that uses the M4Spot compute environment.
 * const input = {
 *   "computeEnvironmentOrder": [
 *     {
 *       "computeEnvironment": "M4Spot",
 *       "order": 1
 *     }
 *   ],
 *   "jobQueueName": "LowPriority",
 *   "priority": 1,
 *   "state": "ENABLED"
 * };
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/LowPriority",
 *   "jobQueueName": "LowPriority"
 * }
 * *\/
 * // example id: to-create-a-job-queue-with-a-single-compute-environment-1481152967946
 * ```
 *
 * @example To create a job queue with multiple compute environments
 * ```javascript
 * // This example creates a job queue called HighPriority that uses the C4OnDemand compute environment with an order of 1 and the M4Spot compute environment with an order of 2.
 * const input = {
 *   "computeEnvironmentOrder": [
 *     {
 *       "computeEnvironment": "C4OnDemand",
 *       "order": 1
 *     },
 *     {
 *       "computeEnvironment": "M4Spot",
 *       "order": 2
 *     }
 *   ],
 *   "jobQueueName": "HighPriority",
 *   "priority": 10,
 *   "state": "ENABLED"
 * };
 * const command = new CreateJobQueueCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobQueueArn": "arn:aws:batch:us-east-1:012345678910:job-queue/HighPriority",
 *   "jobQueueName": "HighPriority"
 * }
 * *\/
 * // example id: to-create-a-job-queue-with-multiple-compute-environments-1481153027051
 * ```
 *
 */
export class CreateJobQueueCommand extends $Command<
  CreateJobQueueCommandInput,
  CreateJobQueueCommandOutput,
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
  constructor(readonly input: CreateJobQueueCommandInput) {
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
  ): Handler<CreateJobQueueCommandInput, CreateJobQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateJobQueueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CreateJobQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBatchV20160810",
        operation: "CreateJobQueue",
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
  private serialize(input: CreateJobQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateJobQueueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobQueueCommandOutput> {
    return de_CreateJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
