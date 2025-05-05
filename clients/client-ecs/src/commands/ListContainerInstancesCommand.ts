// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContainerInstancesRequest, ListContainerInstancesResponse } from "../models/models_0";
import { de_ListContainerInstancesCommand, se_ListContainerInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of container instances in a specified cluster. You can filter the
 * 			results of a <code>ListContainerInstances</code> operation with cluster query language
 * 			statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
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
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
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
export class ListContainerInstancesCommand extends $Command
  .classBuilder<
    ListContainerInstancesCommandInput,
    ListContainerInstancesCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "ListContainerInstances", {})
  .n("ECSClient", "ListContainerInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListContainerInstancesCommand)
  .de(de_ListContainerInstancesCommand)
  .build() {
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
