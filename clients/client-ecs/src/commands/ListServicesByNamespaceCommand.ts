// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListServicesByNamespaceRequest, ListServicesByNamespaceResponse } from "../models/models_0";
import { de_ListServicesByNamespaceCommand, se_ListServicesByNamespaceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicesByNamespaceCommand}.
 */
export interface ListServicesByNamespaceCommandInput extends ListServicesByNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link ListServicesByNamespaceCommand}.
 */
export interface ListServicesByNamespaceCommandOutput extends ListServicesByNamespaceResponse, __MetadataBearer {}

/**
 * <p>This operation lists all of the services that are associated with a Cloud Map
 * 			namespace. This list might include services in different clusters. In contrast,
 * 				<code>ListServices</code> can only list services in one cluster at a time. If you
 * 			need to filter the list of services in a single cluster by various parameters, use
 * 				<code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListServicesByNamespaceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListServicesByNamespaceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // ListServicesByNamespaceRequest
 *   namespace: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServicesByNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // ListServicesByNamespaceResponse
 * //   serviceArns: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServicesByNamespaceCommandInput - {@link ListServicesByNamespaceCommandInput}
 * @returns {@link ListServicesByNamespaceCommandOutput}
 * @see {@link ListServicesByNamespaceCommandInput} for command's `input` shape.
 * @see {@link ListServicesByNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link NamespaceNotFoundException} (client fault)
 *  <p>The specified namespace wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @public
 */
export class ListServicesByNamespaceCommand extends $Command
  .classBuilder<
    ListServicesByNamespaceCommandInput,
    ListServicesByNamespaceCommandOutput,
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
  .s("AmazonEC2ContainerServiceV20141113", "ListServicesByNamespace", {})
  .n("ECSClient", "ListServicesByNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_ListServicesByNamespaceCommand)
  .de(de_ListServicesByNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicesByNamespaceRequest;
      output: ListServicesByNamespaceResponse;
    };
    sdk: {
      input: ListServicesByNamespaceCommandInput;
      output: ListServicesByNamespaceCommandOutput;
    };
  };
}
