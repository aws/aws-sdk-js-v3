// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTagsInput, GetTagsOutput } from "../models/models_0";
import { GetTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTagsCommand}.
 */
export interface GetTagsCommandInput extends GetTagsInput {}
/**
 * @public
 *
 * The output of {@link GetTagsCommand}.
 */
export interface GetTagsCommandOutput extends GetTagsOutput, __MetadataBearer {}

/**
 * Returns a list of tags that are associated with a resource group, specified by an Amazon resource name (ARN).
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GetTags`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GetTagsCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GetTagsCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // GetTagsInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetTagsCommand(input);
 * const response = await client.send(command);
 * // { // GetTagsOutput
 * //   Arn: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTagsCommandInput - {@link GetTagsCommandInput}
 * @returns {@link GetTagsCommandOutput}
 * @see {@link GetTagsCommandInput} for command's `input` shape.
 * @see {@link GetTagsCommandOutput} for command's `response` shape.
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
export class GetTagsCommand extends command<GetTagsCommandInput, GetTagsCommandOutput>(
  _ep0,
  _mw0,
  "GetTags",
  GetTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTagsInput;
      output: GetTagsOutput;
    };
    sdk: {
      input: GetTagsCommandInput;
      output: GetTagsCommandOutput;
    };
  };
}
