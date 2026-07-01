// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAttributesRequest, ListAttributesResponse } from "../models/models_0";
import { ListAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAttributesCommand}.
 */
export interface ListAttributesCommandInput extends ListAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttributesCommand}.
 */
export interface ListAttributesCommandOutput extends ListAttributesResponse, __MetadataBearer {}

/**
 * <p>Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAttributesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAttributesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // ListAttributesRequest
 *   cluster: "STRING_VALUE",
 *   targetType: "container-instance", // required
 *   attributeName: "STRING_VALUE",
 *   attributeValue: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttributesResponse
 * //   attributes: [ // Attributes
 * //     { // Attribute
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //       targetType: "container-instance",
 * //       targetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttributesCommandInput - {@link ListAttributesCommandInput}
 * @returns {@link ListAttributesCommandOutput}
 * @see {@link ListAttributesCommandInput} for command's `input` shape.
 * @see {@link ListAttributesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html">ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To list container instances that have a specific attribute
 * ```javascript
 * // This example lists attributes for a container instance with the attribute "stack" equal to the value "production".
 * const input = {
 *   attributeName: "stack",
 *   attributeValue: "production",
 *   cluster: "MyCluster",
 *   targetType: "container-instance"
 * };
 * const command = new ListAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   attributes: [
 *     {
 *       name: "stack",
 *       targetId: "arn:aws:ecs:us-west-2:123456789012:container-instance/1c3be8ed-df30-47b4-8f1e-6e68ebd01f34",
 *       value: "production"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAttributesCommand extends command<ListAttributesCommandInput, ListAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ListAttributes",
  ListAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttributesRequest;
      output: ListAttributesResponse;
    };
    sdk: {
      input: ListAttributesCommandInput;
      output: ListAttributesCommandOutput;
    };
  };
}
