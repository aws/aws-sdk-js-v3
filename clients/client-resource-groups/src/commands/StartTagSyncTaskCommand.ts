// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTagSyncTaskInput, StartTagSyncTaskOutput } from "../models/models_0";
import { StartTagSyncTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new tag-sync task to onboard and sync resources tagged with a specific tag key-value pair to an application. To start a tag-sync task, you need a [resource tagging role](https://docs.aws.amazon.com/servicecatalog/latest/arguide/app-tag-sync.html#tag-sync-role). The resource tagging role grants permissions to tag and untag applications resources and must include a trust policy that allows Resource Groups to assume the role and perform resource tagging tasks on your behalf.
 *
 * For instructions on creating a tag-sync task, see [Create a tag-sync using the Resource Groups API](https://docs.aws.amazon.com/servicecatalog/latest/arguide/app-tag-sync.html#create-tag-sync) in the *Amazon Web Services Service Catalog AppRegistry Administrator Guide*.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:StartTagSyncTask` on the application group
 * - `resource-groups:CreateGroup`
 * - `iam:PassRole` on the role provided in the request
 *
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
 *
 * The request includes one or more parameters that violate validation rules.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request. Check permissions.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred while processing the request. Try again later.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The request uses an HTTP method that isn't allowed for the specified resource.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the specified resources don't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You've exceeded throttling limits by making too many requests in a period of time.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request was rejected because it doesn't have valid credentials for the target resource.
 *
 * @throws {@link ResourceGroupsServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroups service.
 *
 * @public
 */
export class StartTagSyncTaskCommand extends command<StartTagSyncTaskCommandInput, StartTagSyncTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartTagSyncTask",
  StartTagSyncTask$
) {
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
