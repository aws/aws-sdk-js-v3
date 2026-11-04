// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGroupQueryInput, UpdateGroupQueryOutput } from "../models/models_0";
import { UpdateGroupQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGroupQueryCommand}.
 */
export interface UpdateGroupQueryCommandInput extends UpdateGroupQueryInput {}
/**
 * @public
 *
 * The output of {@link UpdateGroupQueryCommand}.
 */
export interface UpdateGroupQueryCommandOutput extends UpdateGroupQueryOutput, __MetadataBearer {}

/**
 * Updates the resource query of a group. For more information about resource queries, see [Create a tag-based group in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag).
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:UpdateGroupQuery`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // UpdateGroupQueryInput
 *   GroupName: "STRING_VALUE",
 *   Group: "STRING_VALUE",
 *   ResourceQuery: { // ResourceQuery
 *     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 *     Query: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateGroupQueryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGroupQueryOutput
 * //   GroupQuery: { // GroupQuery
 * //     GroupName: "STRING_VALUE", // required
 * //     ResourceQuery: { // ResourceQuery
 * //       Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 * //       Query: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGroupQueryCommandInput - {@link UpdateGroupQueryCommandInput}
 * @returns {@link UpdateGroupQueryCommandOutput}
 * @see {@link UpdateGroupQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupQueryCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceGroupsServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroups service.
 *
 * @public
 */
export class UpdateGroupQueryCommand extends command<UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGroupQuery",
  UpdateGroupQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGroupQueryInput;
      output: UpdateGroupQueryOutput;
    };
    sdk: {
      input: UpdateGroupQueryCommandInput;
      output: UpdateGroupQueryCommandOutput;
    };
  };
}
