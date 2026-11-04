// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTaskProtectionRequest, UpdateTaskProtectionResponse } from "../models/models_1";
import { UpdateTaskProtection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTaskProtectionCommand}.
 */
export interface UpdateTaskProtectionCommandInput extends UpdateTaskProtectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTaskProtectionCommand}.
 */
export interface UpdateTaskProtectionCommandOutput extends UpdateTaskProtectionResponse, __MetadataBearer {}

/**
 * Updates the protection status of a task. You can set `protectionEnabled` to `true` to protect your task from termination during scale-in events from [Service Autoscaling](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html) or [deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html).
 *
 * Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the `protectionEnabled` property making the task eligible for termination by a subsequent scale-in event.
 *
 * You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the `expiresInMinutes` property. The `expiresInMinutes` property is always reset when you invoke this operation for a task that already has `protectionEnabled` set to `true`. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.
 *
 * To learn more about Amazon ECS task protection, see [Task scale-in protection](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html) in the **Amazon Elastic Container Service Developer Guide** .
 *
 * > **Note:** This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an `TASK_NOT_VALID` failure. For more information, see [API failure reasons](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html).
 *
 * > **Important:** If you prefer to set task protection from within the container, we recommend using the [Task scale-in protection endpoint](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateTaskProtectionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateTaskProtectionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateTaskProtectionRequest
 *   cluster: "STRING_VALUE", // required
 *   tasks: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   protectionEnabled: true || false, // required
 *   expiresInMinutes: Number("int"),
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTaskProtectionResponse
 * //   protectedTasks: [ // ProtectedTasks
 * //     { // ProtectedTask
 * //       taskArn: "STRING_VALUE",
 * //       protectionEnabled: true || false,
 * //       expirationDate: new Date("TIMESTAMP"),
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
 * @param UpdateTaskProtectionCommandInput - {@link UpdateTaskProtectionCommandInput}
 * @returns {@link UpdateTaskProtectionCommandOutput}
 * @see {@link UpdateTaskProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskProtectionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *
 * The specified cluster wasn't found. You can view your available clusters with [ListClusters](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html). Amazon ECS clusters are Region specific.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *
 * The specified task isn't supported in this Region.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To set task scale-in protection for a task for 60 minutes
 * ```javascript
 * // This example enables scale-in protection for a task for 60 minutes.
 * const input = {
 *   cluster: "test-task-protection",
 *   expiresInMinutes: 60,
 *   protectionEnabled: true,
 *   tasks: [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   protectedTasks: [
 *     {
 *       expirationDate: "2022-11-02T06:56:32.553Z",
 *       protectionEnabled: true,
 *       taskArn: "arn:aws:ecs:us-west-2:012345678910:task/default/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To set task scale-in protection for the default time period in minutes
 * ```javascript
 * // This example enables task scale-in protection for a task, without specifying the expiresInMinutes parameter, for the default protection period of 120 minutes.
 * const input = {
 *   cluster: "test-task-protection",
 *   protectionEnabled: true,
 *   tasks: [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   protectedTasks: [
 *     {
 *       expirationDate: "2022-11-02T06:56:32.553Z",
 *       protectionEnabled: true,
 *       taskArn: "arn:aws:ecs:us-west-2:012345678910:task/default/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To remove task scale-in protection
 * ```javascript
 * // This example removes scale-in protection for a task.
 * const input = {
 *   cluster: "test-task-protection",
 *   protectionEnabled: false,
 *   tasks: [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failures:   [],
 *   protectedTasks: [
 *     {
 *       protectionEnabled: false,
 *       taskArn: "arn:aws:ecs:us-west-2:012345678910:task/default/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateTaskProtectionCommand extends command<UpdateTaskProtectionCommandInput, UpdateTaskProtectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTaskProtection",
  UpdateTaskProtection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTaskProtectionRequest;
      output: UpdateTaskProtectionResponse;
    };
    sdk: {
      input: UpdateTaskProtectionCommandInput;
      output: UpdateTaskProtectionCommandOutput;
    };
  };
}
