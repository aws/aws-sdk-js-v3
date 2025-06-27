// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpGroupsRequest, DescribeIpGroupsResult } from "../models/models_0";
import { de_DescribeIpGroupsCommand, se_DescribeIpGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DescribeIpGroupsCommand extends $Command
  .classBuilder<
    DescribeIpGroupsCommandInput,
    DescribeIpGroupsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeIpGroups", {})
  .n("WorkSpacesClient", "DescribeIpGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIpGroupsCommand)
  .de(de_DescribeIpGroupsCommand)
  .build() {
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
