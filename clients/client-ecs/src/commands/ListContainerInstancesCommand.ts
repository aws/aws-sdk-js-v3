// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContainerInstancesRequest, ListContainerInstancesResponse } from "../models/models_0";
import { ListContainerInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContainerInstancesCommand}.
 */
export interface ListContainerInstancesCommandInput extends ListContainerInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListContainerInstancesCommand}.
 */
export interface ListContainerInstancesCommandOutput extends ListContainerInstancesResponse, __MetadataBearer {}

/**
 * Returns a list of container instances in a specified cluster. You can filter the results of a `ListContainerInstances` operation with cluster query language statements inside the `filter` parameter. For more information, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListContainerInstancesRequest
 *   cluster: "STRING_VALUE",
 *   filter: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "ACTIVE" || "DRAINING" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED",
 * };
 * const command = new ListContainerInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListContainerInstancesResponse
 * //   containerInstanceArns: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainerInstancesCommandInput - {@link ListContainerInstancesCommandInput}
 * @returns {@link ListContainerInstancesCommandOutput}
 * @see {@link ListContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link ListContainerInstancesCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @example To list your available container instances in a cluster
 * ```javascript
 * // This example lists all of your available container instances in the specified cluster in your default region.
 * const input = {
 *   cluster: "default"
 * };
 * const command = new ListContainerInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   containerInstanceArns: [
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/default/f6bbb147-5370-4ace-8c73-c7181ded911f",
 *     "arn:aws:ecs:us-east-1:<aws_account_id>:container-instance/default/ffe3d344-77e2-476c-a4d0-bf560ad50acb"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListContainerInstancesCommand extends command<ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput>(
  _ep0,
  _mw0,
  "ListContainerInstances",
  ListContainerInstances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainerInstancesRequest;
      output: ListContainerInstancesResponse;
    };
    sdk: {
      input: ListContainerInstancesCommandInput;
      output: ListContainerInstancesCommandOutput;
    };
  };
}
