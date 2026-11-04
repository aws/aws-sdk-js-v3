// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServicesByNamespaceRequest, ListServicesByNamespaceResponse } from "../models/models_0";
import { ListServicesByNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, `ListServices` can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use `ListServices`. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListServicesByNamespaceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListServicesByNamespaceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
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
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have authorization to perform the requested action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter isn't valid. Review the available parameters for the API request.
 *
 * For more information about service event errors, see [Amazon ECS service event messages](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html).
 *
 * @throws {@link NamespaceNotFoundException} (client fault)
 *
 * The specified namespace wasn't found.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server issue.
 *
 * @throws {@link ECSServiceException}
 *
 * Base exception class for all service exceptions from ECS service.
 *
 * @public
 */
export class ListServicesByNamespaceCommand extends command<ListServicesByNamespaceCommandInput, ListServicesByNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "ListServicesByNamespace",
  ListServicesByNamespace$
) {
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
