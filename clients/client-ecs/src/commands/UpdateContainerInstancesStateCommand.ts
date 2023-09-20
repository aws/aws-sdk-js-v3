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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateContainerInstancesStateRequest, UpdateContainerInstancesStateResponse } from "../models/models_0";
import {
  de_UpdateContainerInstancesStateCommand,
  se_UpdateContainerInstancesStateCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateContainerInstancesStateCommand}.
 */
export interface UpdateContainerInstancesStateCommandInput extends UpdateContainerInstancesStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContainerInstancesStateCommand}.
 */
export interface UpdateContainerInstancesStateCommandOutput
  extends UpdateContainerInstancesStateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the status of an Amazon ECS container instance.</p>
 *          <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the
 * 			status of a container instance to <code>DRAINING</code> to manually remove an instance
 * 			from a cluster, for example to perform system updates, update the Docker daemon, or
 * 			scale down the cluster size.</p>
 *          <important>
 *             <p>A container instance can't be changed to <code>DRAINING</code> until it has
 * 				reached an <code>ACTIVE</code> status. If the instance is in any other status, an
 * 				error will be received.</p>
 *          </important>
 *          <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks
 * 			from being scheduled for placement on the container instance and replacement service
 * 			tasks are started on other container instances in the cluster if the resources are
 * 			available. Service tasks on the container instance that are in the <code>PENDING</code>
 * 			state are stopped immediately.</p>
 *          <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are
 * 			stopped and replaced according to the service's deployment configuration parameters,
 * 				<code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change
 * 			the deployment configuration of your service using <a>UpdateService</a>.</p>
 *          <ul>
 *             <li>
 *                <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
 * 						<code>desiredCount</code> temporarily during task replacement. For example,
 * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
 * 					scheduler to stop two existing tasks before starting two new tasks. If the
 * 					minimum is 100%, the service scheduler can't remove existing tasks until the
 * 					replacement tasks are considered healthy. Tasks for services that do not use a
 * 					load balancer are considered healthy if they're in the <code>RUNNING</code>
 * 					state. Tasks for services that use a load balancer are considered healthy if
 * 					they're in the <code>RUNNING</code> state and are reported as healthy by the
 * 					load balancer.</p>
 *             </li>
 *             <li>
 *                <p>The <code>maximumPercent</code> parameter represents an upper limit on the
 * 					number of running tasks during task replacement. You can use this to define the
 * 					replacement batch size. For example, if <code>desiredCount</code> is four tasks,
 * 					a maximum of 200% starts four new tasks before stopping the four tasks to be
 * 					drained, provided that the cluster resources required to do this are available.
 * 					If the maximum is 100%, then replacement tasks can't start until the draining
 * 					tasks have stopped.</p>
 *             </li>
 *          </ul>
 *          <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service
 * 			aren't affected. You must wait for them to finish or stop them manually.</p>
 *          <p>A container instance has completed draining when it has no more <code>RUNNING</code>
 * 			tasks. You can verify this using <a>ListTasks</a>.</p>
 *          <p>When a container instance has been drained, you can set a container instance to
 * 				<code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler
 * 			can begin scheduling tasks on the instance again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerInstancesStateCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerInstancesStateCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // UpdateContainerInstancesStateRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   status: "ACTIVE" || "DRAINING" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED", // required
 * };
 * const command = new UpdateContainerInstancesStateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContainerInstancesStateResponse
 * //   containerInstances: [ // ContainerInstances
 * //     { // ContainerInstance
 * //       containerInstanceArn: "STRING_VALUE",
 * //       ec2InstanceId: "STRING_VALUE",
 * //       capacityProviderName: "STRING_VALUE",
 * //       version: Number("long"),
 * //       versionInfo: { // VersionInfo
 * //         agentVersion: "STRING_VALUE",
 * //         agentHash: "STRING_VALUE",
 * //         dockerVersion: "STRING_VALUE",
 * //       },
 * //       remainingResources: [ // Resources
 * //         { // Resource
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       registeredResources: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           longValue: Number("long"),
 * //           integerValue: Number("int"),
 * //           stringSetValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       status: "STRING_VALUE",
 * //       statusReason: "STRING_VALUE",
 * //       agentConnected: true || false,
 * //       runningTasksCount: Number("int"),
 * //       pendingTasksCount: Number("int"),
 * //       agentUpdateStatus: "PENDING" || "STAGING" || "STAGED" || "UPDATING" || "UPDATED" || "FAILED",
 * //       attributes: [ // Attributes
 * //         { // Attribute
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //           targetType: "container-instance",
 * //           targetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       registeredAt: new Date("TIMESTAMP"),
 * //       attachments: [ // Attachments
 * //         { // Attachment
 * //           id: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           details: [ // AttachmentDetails
 * //             { // KeyValuePair
 * //               name: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       tags: [ // Tags
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       healthStatus: { // ContainerInstanceHealthStatus
 * //         overallStatus: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //         details: [ // InstanceHealthCheckResultList
 * //           { // InstanceHealthCheckResult
 * //             type: "CONTAINER_RUNTIME",
 * //             status: "OK" || "IMPAIRED" || "INSUFFICIENT_DATA" || "INITIALIZING",
 * //             lastUpdated: new Date("TIMESTAMP"),
 * //             lastStatusChange: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   failures: [ // Failures
 * //     { // Failure
 * //       arn: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       detail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateContainerInstancesStateCommandInput - {@link UpdateContainerInstancesStateCommandInput}
 * @returns {@link UpdateContainerInstancesStateCommandOutput}
 * @see {@link UpdateContainerInstancesStateCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerInstancesStateCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class UpdateContainerInstancesStateCommand extends $Command<
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: UpdateContainerInstancesStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContainerInstancesStateCommandInput, UpdateContainerInstancesStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateContainerInstancesStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateContainerInstancesStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "UpdateContainerInstancesState",
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
  private serialize(input: UpdateContainerInstancesStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateContainerInstancesStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateContainerInstancesStateCommandOutput> {
    return de_UpdateContainerInstancesStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
