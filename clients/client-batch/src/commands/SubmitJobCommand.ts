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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { SubmitJobRequest, SubmitJobResponse } from "../models/models_0";
import { de_SubmitJobCommand, se_SubmitJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SubmitJobCommand}.
 */
export interface SubmitJobCommandInput extends SubmitJobRequest {}
/**
 * @public
 *
 * The output of {@link SubmitJobCommand}.
 */
export interface SubmitJobCommandOutput extends SubmitJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a>
 *    override parameters defined in the job definition. vCPU and memory requirements that are specified in the
 *     <code>resourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way
 *    using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
 *    parameters in a <code>resourceRequirements</code> object that's included in the <code>containerOverrides</code>
 *    parameter.</p>
 *          <note>
 *             <p>Job queues with a scheduling policy are limited to 500 active fair share identifiers at a time. </p>
 *          </note>
 *          <important>
 *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14
 *     days, Fargate resources might become unavailable and job might be terminated.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, SubmitJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, SubmitJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // SubmitJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobQueue: "STRING_VALUE", // required
 *   shareIdentifier: "STRING_VALUE",
 *   schedulingPriorityOverride: Number("int"),
 *   arrayProperties: { // ArrayProperties
 *     size: Number("int"),
 *   },
 *   dependsOn: [ // JobDependencyList
 *     { // JobDependency
 *       jobId: "STRING_VALUE",
 *       type: "N_TO_N" || "SEQUENTIAL",
 *     },
 *   ],
 *   jobDefinition: "STRING_VALUE", // required
 *   parameters: { // ParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   containerOverrides: { // ContainerOverrides
 *     vcpus: Number("int"),
 *     memory: Number("int"),
 *     command: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     instanceType: "STRING_VALUE",
 *     environment: [ // EnvironmentVariables
 *       { // KeyValuePair
 *         name: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     resourceRequirements: [ // ResourceRequirements
 *       { // ResourceRequirement
 *         value: "STRING_VALUE", // required
 *         type: "GPU" || "VCPU" || "MEMORY", // required
 *       },
 *     ],
 *   },
 *   nodeOverrides: { // NodeOverrides
 *     numNodes: Number("int"),
 *     nodePropertyOverrides: [ // NodePropertyOverrides
 *       { // NodePropertyOverride
 *         targetNodes: "STRING_VALUE", // required
 *         containerOverrides: {
 *           vcpus: Number("int"),
 *           memory: Number("int"),
 *           command: [
 *             "STRING_VALUE",
 *           ],
 *           instanceType: "STRING_VALUE",
 *           environment: [
 *             {
 *               name: "STRING_VALUE",
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resourceRequirements: [
 *             {
 *               value: "STRING_VALUE", // required
 *               type: "GPU" || "VCPU" || "MEMORY", // required
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   retryStrategy: { // RetryStrategy
 *     attempts: Number("int"),
 *     evaluateOnExit: [ // EvaluateOnExitList
 *       { // EvaluateOnExit
 *         onStatusReason: "STRING_VALUE",
 *         onReason: "STRING_VALUE",
 *         onExitCode: "STRING_VALUE",
 *         action: "RETRY" || "EXIT", // required
 *       },
 *     ],
 *   },
 *   propagateTags: true || false,
 *   timeout: { // JobTimeout
 *     attemptDurationSeconds: Number("int"),
 *   },
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   eksPropertiesOverride: { // EksPropertiesOverride
 *     podProperties: { // EksPodPropertiesOverride
 *       containers: [ // EksContainerOverrideList
 *         { // EksContainerOverride
 *           image: "STRING_VALUE",
 *           command: [
 *             "STRING_VALUE",
 *           ],
 *           args: [
 *             "STRING_VALUE",
 *           ],
 *           env: [ // EksContainerEnvironmentVariables
 *             { // EksContainerEnvironmentVariable
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resources: { // EksContainerResourceRequirements
 *             limits: { // EksLimits
 *               "<keys>": "STRING_VALUE",
 *             },
 *             requests: { // EksRequests
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *       metadata: { // EksMetadata
 *         labels: { // EksLabelsMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * // { // SubmitJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobName: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SubmitJobCommandInput - {@link SubmitJobCommandInput}
 * @returns {@link SubmitJobCommandOutput}
 * @see {@link SubmitJobCommandInput} for command's `input` shape.
 * @see {@link SubmitJobCommandOutput} for command's `response` shape.
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
 * @example To submit a job to a queue
 * ```javascript
 * // This example submits a simple container job called example to the HighPriority job queue.
 * const input = {
 *   "jobDefinition": "sleep60",
 *   "jobName": "example",
 *   "jobQueue": "HighPriority"
 * };
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobId": "876da822-4198-45f2-a252-6cea32512ea8",
 *   "jobName": "example"
 * }
 * *\/
 * // example id: to-submit-a-job-to-a-queue-1481154481673
 * ```
 *
 */
export class SubmitJobCommand extends $Command<
  SubmitJobCommandInput,
  SubmitJobCommandOutput,
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
  constructor(readonly input: SubmitJobCommandInput) {
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
  ): Handler<SubmitJobCommandInput, SubmitJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SubmitJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "SubmitJobCommand";
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
  private serialize(input: SubmitJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SubmitJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitJobCommandOutput> {
    return de_SubmitJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
