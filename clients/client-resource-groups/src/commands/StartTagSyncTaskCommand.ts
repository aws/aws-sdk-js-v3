// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartTagSyncTaskInput, StartTagSyncTaskOutput } from "../models/models_0";
import type {
  ResourceGroupsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsClient";
import { StartTagSyncTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTagSyncTaskCommand}.
 */
export interface StartTagSyncTaskCommandInput extends StartTagSyncTaskInput {}
/**
 * @public
 *
 * The output of {@link StartTagSyncTaskCommand}.
 */
export interface StartTagSyncTaskCommandOutput extends StartTagSyncTaskOutput, __MetadataBearer {}

/**
 * <p>Creates a new tag-sync task to onboard and sync resources tagged with a specific tag key-value pair to an
 *             application. To start a tag-sync task, you need a <a href="https://docs.aws.amazon.com/servicecatalog/latest/arguide/app-tag-sync.html#tag-sync-role">resource tagging role</a>.
 *             The resource tagging role grants permissions to tag and untag applications resources and must include a
 *         trust policy that allows Resource Groups to assume the role and perform resource tagging tasks on your behalf. </p>
 *          <p>For instructions on creating a tag-sync task, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/arguide/app-tag-sync.html#create-tag-sync">Create a tag-sync
 *             using the Resource Groups API</a> in the <i>Amazon Web Services Service Catalog AppRegistry Administrator Guide</i>.  </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:StartTagSyncTask</code> on the application group</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>resource-groups:CreateGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>iam:PassRole</code> on the role provided in the request </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, StartTagSyncTaskCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, StartTagSyncTaskCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // StartTagSyncTaskInput
 *   Group: "STRING_VALUE", // required
 *   TagKey: "STRING_VALUE",
 *   TagValue: "STRING_VALUE",
 *   ResourceQuery: { // ResourceQuery
 *     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 *     Query: "STRING_VALUE", // required
 *   },
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new StartTagSyncTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartTagSyncTaskOutput
 * //   GroupArn: "STRING_VALUE",
 * //   GroupName: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   TagKey: "STRING_VALUE",
 * //   TagValue: "STRING_VALUE",
 * //   ResourceQuery: { // ResourceQuery
 * //     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 * //     Query: "STRING_VALUE", // required
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTagSyncTaskCommandInput - {@link StartTagSyncTaskCommandInput}
 * @returns {@link StartTagSyncTaskCommandOutput}
 * @see {@link StartTagSyncTaskCommandInput} for command's `input` shape.
 * @see {@link StartTagSyncTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the specified resources don't exist.</p>
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
export class StartTagSyncTaskCommand extends $Command
  .classBuilder<
    StartTagSyncTaskCommandInput,
    StartTagSyncTaskCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "StartTagSyncTask", {})
  .n("ResourceGroupsClient", "StartTagSyncTaskCommand")
  .sc(StartTagSyncTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTagSyncTaskInput;
      output: StartTagSyncTaskOutput;
    };
    sdk: {
      input: StartTagSyncTaskCommandInput;
      output: StartTagSyncTaskCommandOutput;
    };
  };
}
