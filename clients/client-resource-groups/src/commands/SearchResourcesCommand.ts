// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchResourcesInput, SearchResourcesOutput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { SearchResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandInput extends SearchResourcesInput {}
/**
 * @public
 *
 * The output of {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandOutput extends SearchResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The
 *             query uses the same format as a resource query in a <a>CreateGroup</a> or
 *                 <a>UpdateGroupQuery</a> operation.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:SearchResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudformation:DescribeStacks</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudformation:ListStackResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, SearchResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, SearchResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // SearchResourcesInput
 *   ResourceQuery: { // ResourceQuery
 *     Type: "TAG_FILTERS_1_0" || "CLOUDFORMATION_STACK_1_0", // required
 *     Query: "STRING_VALUE", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * // { // SearchResourcesOutput
 * //   ResourceIdentifiers: [ // ResourceIdentifierList
 * //     { // ResourceIdentifier
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   QueryErrors: [ // QueryErrorList
 * //     { // QueryError
 * //       ErrorCode: "CLOUDFORMATION_STACK_INACTIVE" || "CLOUDFORMATION_STACK_NOT_EXISTING" || "CLOUDFORMATION_STACK_UNASSUMABLE_ROLE" || "RESOURCE_TYPE_NOT_SUPPORTED",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchResourcesCommandInput - {@link SearchResourcesCommandInput}
 * @returns {@link SearchResourcesCommandOutput}
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
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
export class SearchResourcesCommand extends $Command
  .classBuilder<
    SearchResourcesCommandInput,
    SearchResourcesCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "SearchResources", {})
  .n("ResourceGroupsClient", "SearchResourcesCommand")
  .sc(SearchResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchResourcesInput;
      output: SearchResourcesOutput;
    };
    sdk: {
      input: SearchResourcesCommandInput;
      output: SearchResourcesCommandOutput;
    };
  };
}
