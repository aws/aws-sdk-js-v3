// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchGroupsRequest, SearchGroupsResponse } from "../models/models_5";
import { de_SearchGroupsCommand, se_SearchGroupsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchGroupsCommand}.
 */
export interface SearchGroupsCommandInput extends SearchGroupsRequest {}
/**
 * @public
 *
 * The output of {@link SearchGroupsCommand}.
 */
export interface SearchGroupsCommandOutput extends SearchGroupsResponse, __MetadataBearer {}

/**
 * <p>Use the <code>SearchGroups</code> operation to search groups in a specified Quick Sight namespace using the supplied filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchGroupsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchGroupsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // SearchGroupsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Namespace: "STRING_VALUE", // required
 *   Filters: [ // GroupSearchFilterList // required
 *     { // GroupSearchFilter
 *       Operator: "StartsWith", // required
 *       Name: "GROUP_NAME", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SearchGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SearchGroupsResponse
 * //   GroupList: [ // GroupList
 * //     { // Group
 * //       Arn: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchGroupsCommandInput - {@link SearchGroupsCommandInput}
 * @returns {@link SearchGroupsCommandOutput}
 * @see {@link SearchGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchGroupsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class SearchGroupsCommand extends $Command
  .classBuilder<
    SearchGroupsCommandInput,
    SearchGroupsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "SearchGroups", {})
  .n("QuickSightClient", "SearchGroupsCommand")
  .f(void 0, void 0)
  .ser(se_SearchGroupsCommand)
  .de(de_SearchGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchGroupsRequest;
      output: SearchGroupsResponse;
    };
    sdk: {
      input: SearchGroupsCommandInput;
      output: SearchGroupsCommandOutput;
    };
  };
}
