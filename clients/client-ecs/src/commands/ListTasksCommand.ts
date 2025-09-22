// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTasksRequest, ListTasksResponse } from "../models/models_0";
import { ListTasks } from "../schemas/schemas_4_Service";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTasksCommand}.
 */
export interface ListTasksCommandInput extends ListTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListTasksCommand}.
 */
export interface ListTasksCommandOutput extends ListTasksResponse, __MetadataBearer {}

/**
 * <p>Returns a list of tasks. You can filter the results by cluster, task definition
 * 			family, container instance, launch type, what IAM principal started the task, or by
 * 			the desired status of the task.</p>
 *          <p>Recently stopped tasks might appear in the returned results. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListTasksRequest
 *   cluster: "STRING_VALUE",
 *   containerInstance: "STRING_VALUE",
 *   family: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   startedBy: "STRING_VALUE",
 *   serviceName: "STRING_VALUE",
 *   desiredStatus: "RUNNING" || "PENDING" || "STOPPED",
 *   launchType: "EC2" || "FARGATE" || "EXTERNAL",
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListTasksResponse
 * //   taskArns: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTasksCommandInput - {@link ListTasksCommandInput}
 * @returns {@link ListTasksCommandOutput}
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ServiceNotFoundException} (client fault)
 *  <p>The specified service wasn't found. You can view your available services with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html">ListServices</a>. Amazon ECS services are cluster specific and Region
 * 			specific.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To list the tasks on a particular container instance
 * ```javascript
 * // This example lists the tasks of a specified container instance. Specifying a ``containerInstance`` value limits  the  results  to  tasks  that belong to that container instance.
 * const input = {
 *   cluster: "default",
 *   containerInstance: "f6bbb147-5370-4ace-8c73-c7181ded911f"
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   taskArns: [
 *     "arn:aws:ecs:us-east-1:012345678910:task/default/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list the tasks in a cluster
 * ```javascript
 * // This example lists all of the tasks in a cluster.
 * const input = {
 *   cluster: "default"
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   taskArns: [
 *     "arn:aws:ecs:us-east-1:012345678910:task/default/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84",
 *     "arn:aws:ecs:us-east-1:012345678910:task/default/6b809ef6-c67e-4467-921f-ee261c15a0a1"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTasksCommand extends $Command
  .classBuilder<
    ListTasksCommandInput,
    ListTasksCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerServiceV20141113", "ListTasks", {})
  .n("ECSClient", "ListTasksCommand")
  .sc(ListTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTasksRequest;
      output: ListTasksResponse;
    };
    sdk: {
      input: ListTasksCommandInput;
      output: ListTasksCommandOutput;
    };
  };
}
