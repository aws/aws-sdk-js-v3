// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchContactFlowsResponse } from "../models/models_2";
import { SearchContactFlowsRequest } from "../models/models_3";
import { SearchContactFlows } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchContactFlowsCommand}.
 */
export interface SearchContactFlowsCommandInput extends SearchContactFlowsRequest {}
/**
 * @public
 *
 * The output of {@link SearchContactFlowsCommand}.
 */
export interface SearchContactFlowsCommandOutput extends SearchContactFlowsResponse, __MetadataBearer {}

/**
 * <p>Searches the flows in an Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchContactFlowsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchContactFlowsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchContactFlowsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // ContactFlowSearchFilter
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
 *   SearchCriteria: { // ContactFlowSearchCriteria
 *     OrConditions: [ // ContactFlowSearchConditionList
 *       {
 *         OrConditions: [
 *           "<ContactFlowSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<ContactFlowSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         TypeCondition: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN",
 *         StateCondition: "ACTIVE" || "ARCHIVED",
 *         StatusCondition: "PUBLISHED" || "SAVED",
 *       },
 *     ],
 *     AndConditions: [
 *       "<ContactFlowSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     TypeCondition: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN",
 *     StateCondition: "ACTIVE" || "ARCHIVED",
 *     StatusCondition: "PUBLISHED" || "SAVED",
 *   },
 * };
 * const command = new SearchContactFlowsCommand(input);
 * const response = await client.send(command);
 * // { // SearchContactFlowsResponse
 * //   ContactFlows: [ // ContactFlowSearchSummaryList
 * //     { // ContactFlow
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN",
 * //       State: "ACTIVE" || "ARCHIVED",
 * //       Status: "PUBLISHED" || "SAVED",
 * //       Description: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       FlowContentSha256: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       VersionDescription: "STRING_VALUE",
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
 * @param SearchContactFlowsCommandInput - {@link SearchContactFlowsCommandInput}
 * @returns {@link SearchContactFlowsCommandOutput}
 * @see {@link SearchContactFlowsCommandInput} for command's `input` shape.
 * @see {@link SearchContactFlowsCommandOutput} for command's `response` shape.
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
export class SearchContactFlowsCommand extends $Command
  .classBuilder<
    SearchContactFlowsCommandInput,
    SearchContactFlowsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchContactFlows", {})
  .n("ConnectClient", "SearchContactFlowsCommand")
  .sc(SearchContactFlows)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchContactFlowsRequest;
      output: SearchContactFlowsResponse;
    };
    sdk: {
      input: SearchContactFlowsCommandInput;
      output: SearchContactFlowsCommandOutput;
    };
  };
}
