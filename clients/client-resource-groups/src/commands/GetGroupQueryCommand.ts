// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGroupQueryInput, GetGroupQueryOutput } from "../models/models_0";
import { GetGroupQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGroupQueryCommand}.
 */
export interface GetGroupQueryCommandInput extends GetGroupQueryInput {}
/**
 * @public
 *
 * The output of {@link GetGroupQueryCommand}.
 */
export interface GetGroupQueryCommandOutput extends GetGroupQueryOutput, __MetadataBearer {}

/**
 * Retrieves the resource query associated with the specified resource group. For more information about resource queries, see [Create a tag-based group in Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag).
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetGroupQuery`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetGroupQueryInput
 *   GroupName: "STRING_VALUE",
 *   Group: "STRING_VALUE",
 * };
 * const command = new GetGroupQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupQueryOutput
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
 * @param GetGroupQueryCommandInput - {@link GetGroupQueryCommandInput}
 * @returns {@link GetGroupQueryCommandOutput}
 * @see {@link GetGroupQueryCommandInput} for command's `input` shape.
 * @see {@link GetGroupQueryCommandOutput} for command's `response` shape.
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
export class GetGroupQueryCommand extends command<GetGroupQueryCommandInput, GetGroupQueryCommandOutput>(
  _ep0,
  _mw0,
  "GetGroupQuery",
  GetGroupQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupQueryInput;
      output: GetGroupQueryOutput;
    };
    sdk: {
      input: GetGroupQueryCommandInput;
      output: GetGroupQueryCommandOutput;
    };
  };
}
