// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIpGroupsRequest, DescribeIpGroupsResult } from "../models/models_0";
import { DescribeIpGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeIpGroupsCommand}.
 */
export interface DescribeIpGroupsCommandInput extends DescribeIpGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpGroupsCommand}.
 */
export interface DescribeIpGroupsCommandOutput extends DescribeIpGroupsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your IP access control groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeIpGroupsRequest
 *   GroupIds: [ // IpGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeIpGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpGroupsResult
 * //   Result: [ // WorkspacesIpGroupsList
 * //     { // WorkspacesIpGroup
 * //       groupId: "STRING_VALUE",
 * //       groupName: "STRING_VALUE",
 * //       groupDesc: "STRING_VALUE",
 * //       userRules: [ // IpRuleList
 * //         { // IpRuleItem
 * //           ipRule: "STRING_VALUE",
 * //           ruleDesc: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIpGroupsCommandInput - {@link DescribeIpGroupsCommandInput}
 * @returns {@link DescribeIpGroupsCommandOutput}
 * @see {@link DescribeIpGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeIpGroupsCommand extends command<DescribeIpGroupsCommandInput, DescribeIpGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIpGroups",
  DescribeIpGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpGroupsRequest;
      output: DescribeIpGroupsResult;
    };
    sdk: {
      input: DescribeIpGroupsCommandInput;
      output: DescribeIpGroupsCommandOutput;
    };
  };
}
