// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTagSyncTaskInput, GetTagSyncTaskOutput } from "../models/models_0";
import { GetTagSyncTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTagSyncTaskCommand}.
 */
export interface GetTagSyncTaskCommandInput extends GetTagSyncTaskInput {}
/**
 * @public
 *
 * The output of {@link GetTagSyncTaskCommand}.
 */
export interface GetTagSyncTaskCommandOutput extends GetTagSyncTaskOutput, __MetadataBearer {}

/**
 * Returns information about a specified tag-sync task.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetTagSyncTask` on the application group
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetTagSyncTaskCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetTagSyncTaskCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetTagSyncTaskInput
 *   TaskArn: "STRING_VALUE", // required
 * };
 * const command = new GetTagSyncTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetTagSyncTaskOutput
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
 * //   Status: "ACTIVE" || "ERROR",
 * //   ErrorMessage: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTagSyncTaskCommandInput - {@link GetTagSyncTaskCommandInput}
 * @returns {@link GetTagSyncTaskCommandOutput}
 * @see {@link GetTagSyncTaskCommandInput} for command's `input` shape.
 * @see {@link GetTagSyncTaskCommandOutput} for command's `response` shape.
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
export class GetTagSyncTaskCommand extends command<GetTagSyncTaskCommandInput, GetTagSyncTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetTagSyncTask",
  GetTagSyncTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagSyncTaskInput;
      output: GetTagSyncTaskOutput;
    };
    sdk: {
      input: GetTagSyncTaskCommandInput;
      output: GetTagSyncTaskCommandOutput;
    };
  };
}
