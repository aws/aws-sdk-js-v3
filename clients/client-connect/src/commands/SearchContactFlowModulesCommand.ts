// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchContactFlowModulesResponse } from "../models/models_2";
import { SearchContactFlowModulesRequest } from "../models/models_3";
import { de_SearchContactFlowModulesCommand, se_SearchContactFlowModulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchContactFlowModulesCommand}.
 */
export interface SearchContactFlowModulesCommandInput extends SearchContactFlowModulesRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactFlowModulesCommand}.
 */
export interface SearchContactFlowModulesCommandOutput extends SearchContactFlowModulesResponse, __MetadataBearer {}

/**
 * <p>Searches the flow modules in an Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchContactFlowModulesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchContactFlowModulesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchContactFlowModulesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // ContactFlowModuleSearchFilter
 *     TagFilter: { // ControlPlaneTagFilter
 *       OrConditions: [ // TagOrConditionList
 *         [ // TagAndConditionList
 *           { // TagCondition
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       ],
 *       AndConditions: [
 *         {
 *           TagKey: "STRING_VALUE",
 *           TagValue: "STRING_VALUE",
 *         },
 *       ],
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // ContactFlowModuleSearchCriteria
 *     OrConditions: [ // ContactFlowModuleSearchConditionList
 *       {
 *         OrConditions: [
 *           "<ContactFlowModuleSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<ContactFlowModuleSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         StateCondition: "ACTIVE" || "ARCHIVED",
 *         StatusCondition: "PUBLISHED" || "SAVED",
 *       },
 *     ],
 *     AndConditions: [
 *       "<ContactFlowModuleSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     StateCondition: "ACTIVE" || "ARCHIVED",
 *     StatusCondition: "PUBLISHED" || "SAVED",
 *   },
 * };
 * const command = new SearchContactFlowModulesCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactFlowModulesResponse
 * //   ContactFlowModules: [ // ContactFlowModuleSearchSummaryList
 * //     { // ContactFlowModule
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       State: "ACTIVE" || "ARCHIVED",
 * //       Status: "PUBLISHED" || "SAVED",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchContactFlowModulesCommandInput - {@link SearchContactFlowModulesCommandInput}
 * @returns {@link SearchContactFlowModulesCommandOutput}
 * @see {@link SearchContactFlowModulesCommandInput} for command's `input` shape.
 * @see {@link SearchContactFlowModulesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SearchContactFlowModulesCommand extends $Command
  .classBuilder<
    SearchContactFlowModulesCommandInput,
    SearchContactFlowModulesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SearchContactFlowModules", {})
  .n("ConnectClient", "SearchContactFlowModulesCommand")
  .f(void 0, void 0)
  .ser(se_SearchContactFlowModulesCommand)
  .de(de_SearchContactFlowModulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchContactFlowModulesRequest;
      output: SearchContactFlowModulesResponse;
    };
    sdk: {
      input: SearchContactFlowModulesCommandInput;
      output: SearchContactFlowModulesCommandOutput;
    };
  };
}
