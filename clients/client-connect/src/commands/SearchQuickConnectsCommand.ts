// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchQuickConnectsResponse } from "../models/models_2";
import { SearchQuickConnectsRequest } from "../models/models_3";
import { SearchQuickConnects } from "../schemas/schemas_38_Search";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchQuickConnectsCommand}.
 */
export interface SearchQuickConnectsCommandInput extends SearchQuickConnectsRequest {}
/**
 * @public
 *
 * The output of {@link SearchQuickConnectsCommand}.
 */
export interface SearchQuickConnectsCommandOutput extends SearchQuickConnectsResponse, __MetadataBearer {}

/**
 * <p>Searches quick connects in an Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchQuickConnectsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchQuickConnectsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchQuickConnectsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // QuickConnectSearchFilter
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
 *   SearchCriteria: { // QuickConnectSearchCriteria
 *     OrConditions: [ // QuickConnectSearchConditionList
 *       {
 *         OrConditions: [
 *           "<QuickConnectSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<QuickConnectSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<QuickConnectSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchQuickConnectsCommand(input);
 * const response = await client.send(command);
 * // { // SearchQuickConnectsResponse
 * //   QuickConnects: [ // QuickConnectSearchSummaryList
 * //     { // QuickConnect
 * //       QuickConnectARN: "STRING_VALUE",
 * //       QuickConnectId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       QuickConnectConfig: { // QuickConnectConfig
 * //         QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER", // required
 * //         UserConfig: { // UserQuickConnectConfig
 * //           UserId: "STRING_VALUE", // required
 * //           ContactFlowId: "STRING_VALUE", // required
 * //         },
 * //         QueueConfig: { // QueueQuickConnectConfig
 * //           QueueId: "STRING_VALUE", // required
 * //           ContactFlowId: "STRING_VALUE", // required
 * //         },
 * //         PhoneConfig: { // PhoneNumberQuickConnectConfig
 * //           PhoneNumber: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchQuickConnectsCommandInput - {@link SearchQuickConnectsCommandInput}
 * @returns {@link SearchQuickConnectsCommandOutput}
 * @see {@link SearchQuickConnectsCommandInput} for command's `input` shape.
 * @see {@link SearchQuickConnectsCommandOutput} for command's `response` shape.
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
export class SearchQuickConnectsCommand extends $Command
  .classBuilder<
    SearchQuickConnectsCommandInput,
    SearchQuickConnectsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchQuickConnects", {})
  .n("ConnectClient", "SearchQuickConnectsCommand")
  .sc(SearchQuickConnects)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchQuickConnectsRequest;
      output: SearchQuickConnectsResponse;
    };
    sdk: {
      input: SearchQuickConnectsCommandInput;
      output: SearchQuickConnectsCommandOutput;
    };
  };
}
