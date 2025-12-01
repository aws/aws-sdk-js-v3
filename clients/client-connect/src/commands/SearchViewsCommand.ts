// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchViewsResponse } from "../models/models_2";
import { SearchViewsRequest } from "../models/models_3";
import { SearchViews } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchViewsCommand}.
 */
export interface SearchViewsCommandInput extends SearchViewsRequest {}
/**
 * @public
 *
 * The output of {@link SearchViewsCommand}.
 */
export interface SearchViewsCommandOutput extends SearchViewsResponse, __MetadataBearer {}

/**
 * <p>Searches views based on name, description, or tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchViewsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchViewsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchViewsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // ViewSearchFilter
 *     AttributeFilter: { // ControlPlaneAttributeFilter
 *       OrConditions: [ // CommonAttributeOrConditionList
 *         { // CommonAttributeAndCondition
 *           TagConditions: [ // TagAndConditionList
 *             { // TagCondition
 *               TagKey: "STRING_VALUE",
 *               TagValue: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       ],
 *       AndCondition: {
 *         TagConditions: [
 *           {
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 *   SearchCriteria: { // ViewSearchCriteria
 *     OrConditions: [ // ViewSearchConditionList
 *       {
 *         OrConditions: [
 *           "<ViewSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<ViewSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         ViewTypeCondition: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 *         ViewStatusCondition: "PUBLISHED" || "SAVED",
 *       },
 *     ],
 *     AndConditions: [
 *       "<ViewSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     ViewTypeCondition: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 *     ViewStatusCondition: "PUBLISHED" || "SAVED",
 *   },
 * };
 * const command = new SearchViewsCommand(input);
 * const response = await client.send(command);
 * // { // SearchViewsResponse
 * //   Views: [ // ViewSearchSummaryList
 * //     { // View
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "PUBLISHED" || "SAVED",
 * //       Type: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //       Description: "STRING_VALUE",
 * //       Version: Number("int"),
 * //       VersionDescription: "STRING_VALUE",
 * //       Content: { // ViewContent
 * //         InputSchema: "STRING_VALUE",
 * //         Template: "STRING_VALUE",
 * //         Actions: [ // ViewActions
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       ViewContentSha256: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchViewsCommandInput - {@link SearchViewsCommandInput}
 * @returns {@link SearchViewsCommandOutput}
 * @see {@link SearchViewsCommandInput} for command's `input` shape.
 * @see {@link SearchViewsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class SearchViewsCommand extends $Command
  .classBuilder<
    SearchViewsCommandInput,
    SearchViewsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchViews", {})
  .n("ConnectClient", "SearchViewsCommand")
  .sc(SearchViews)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchViewsRequest;
      output: SearchViewsResponse;
    };
    sdk: {
      input: SearchViewsCommandInput;
      output: SearchViewsCommandOutput;
    };
  };
}
