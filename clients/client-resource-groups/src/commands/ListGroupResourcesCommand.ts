// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGroupResourcesInput, ListGroupResourcesOutput } from "../models/models_0";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { ListGroupResources } from "../schemas/schemas_3_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupResourcesCommand}.
 */
export interface ListGroupResourcesCommandInput extends ListGroupResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListGroupResourcesCommand}.
 */
export interface ListGroupResourcesCommandOutput extends ListGroupResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of Amazon resource names (ARNs) of the resources that are members of a specified resource
 *             group.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:ListGroupResources</code>
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
 * import { ResourceGroupsClient, ListGroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, ListGroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // ListGroupResourcesInput
 *   GroupName: "STRING_VALUE",
 *   Group: "STRING_VALUE",
 *   Filters: [ // ResourceFilterList
 *     { // ResourceFilter
 *       Name: "resource-type", // required
 *       Values: [ // ResourceFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGroupResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupResourcesOutput
 * //   Resources: [ // ListGroupResourcesItemList
 * //     { // ListGroupResourcesItem
 * //       Identifier: { // ResourceIdentifier
 * //         ResourceArn: "STRING_VALUE",
 * //         ResourceType: "STRING_VALUE",
 * //       },
 * //       Status: { // ResourceStatus
 * //         Name: "PENDING",
 * //       },
 * //     },
 * //   ],
 * //   ResourceIdentifiers: [ // ResourceIdentifierList
 * //     {
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
 * @param ListGroupResourcesCommandInput - {@link ListGroupResourcesCommandInput}
 * @returns {@link ListGroupResourcesCommandOutput}
 * @see {@link ListGroupResourcesCommandInput} for command's `input` shape.
 * @see {@link ListGroupResourcesCommandOutput} for command's `response` shape.
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
export class ListGroupResourcesCommand extends $Command
  .classBuilder<
    ListGroupResourcesCommandInput,
    ListGroupResourcesCommandOutput,
    ResourceGroupsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Ardi", "ListGroupResources", {})
  .n("ResourceGroupsClient", "ListGroupResourcesCommand")
  .sc(ListGroupResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupResourcesInput;
      output: ListGroupResourcesOutput;
    };
    sdk: {
      input: ListGroupResourcesCommandInput;
      output: ListGroupResourcesCommandOutput;
    };
  };
}
