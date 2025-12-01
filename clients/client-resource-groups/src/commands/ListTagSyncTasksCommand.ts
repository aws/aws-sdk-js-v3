// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTagSyncTasksInput, ListTagSyncTasksOutput } from "../models/models_0";
import type {
  ResourceGroupsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsClient";
import { ListTagSyncTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagSyncTasksCommand}.
 */
export interface ListTagSyncTasksCommandInput extends ListTagSyncTasksInput {}
/**
 * @public
 *
 * The output of {@link ListTagSyncTasksCommand}.
 */
export interface ListTagSyncTasksCommandOutput extends ListTagSyncTasksOutput, __MetadataBearer {}

/**
 * <p>Returns a list of tag-sync tasks. </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:ListTagSyncTasks</code> with the group passed in the filters as the resource
 *                     or * if using no filters </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, ListTagSyncTasksCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, ListTagSyncTasksCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // ListTagSyncTasksInput
 *   Filters: [ // ListTagSyncTasksFilterList
 *     { // ListTagSyncTasksFilter
 *       GroupArn: "STRING_VALUE",
 *       GroupName: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTagSyncTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListTagSyncTasksOutput
 * //   TagSyncTasks: [ // TagSyncTaskList
 * //     { // TagSyncTaskItem
 * //       GroupArn: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       TaskArn: "STRING_VALUE",
 * //       TagKey: "STRING_VALUE",
 * //       TagValue: "STRING_VALUE",
 * //       ResourceQuery: { // ResourceQuery
 * //         Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 * //         Query: "STRING_VALUE", // required
 * //       },
 * //       RoleArn: "STRING_VALUE",
 * //       Status: "ACTIVE" || "ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTagSyncTasksCommandInput - {@link ListTagSyncTasksCommandInput}
 * @returns {@link ListTagSyncTasksCommandOutput}
 * @see {@link ListTagSyncTasksCommandInput} for command's `input` shape.
 * @see {@link ListTagSyncTasksCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request includes one or more parameters that violate validation rules.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request. Check permissions.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred while processing the request. Try again later.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The request uses an HTTP method that isn't allowed for the specified resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You've exceeded throttling limits by making too many requests in a period of
 *             time.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target
 *             resource.</p>
 *
 * @throws {@link ResourceGroupsServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroups service.</p>
 *
 *
 * @public
 */
export class ListTagSyncTasksCommand extends $Command
  .classBuilder<
    ListTagSyncTasksCommandInput,
    ListTagSyncTasksCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "ListTagSyncTasks", {})
  .n("ResourceGroupsClient", "ListTagSyncTasksCommand")
  .sc(ListTagSyncTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagSyncTasksInput;
      output: ListTagSyncTasksOutput;
    };
    sdk: {
      input: ListTagSyncTasksCommandInput;
      output: ListTagSyncTasksCommandOutput;
    };
  };
}
