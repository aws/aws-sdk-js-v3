// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGroupResourcesInput, ListGroupResourcesOutput } from "../models/models_0";
import { ListGroupResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of Amazon resource names (ARNs) of the resources that are members of a specified resource group.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:ListGroupResources`
 * - `cloudformation:DescribeStacks`
 * - `cloudformation:ListStackResources`
 * - `tag:GetResources`
 *
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
export class ListGroupResourcesCommand extends command<ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListGroupResources",
  ListGroupResources$
) {
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
