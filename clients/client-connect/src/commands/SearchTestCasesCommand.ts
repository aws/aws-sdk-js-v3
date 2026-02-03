// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchTestCasesResponse } from "../models/models_2";
import type { SearchTestCasesRequest } from "../models/models_3";
import { SearchTestCases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTestCasesCommand}.
 */
export interface SearchTestCasesCommandInput extends SearchTestCasesRequest {}
/**
 * @public
 *
 * The output of {@link SearchTestCasesCommand}.
 */
export interface SearchTestCasesCommandOutput extends SearchTestCasesResponse, __MetadataBearer {}

/**
 * <p>Searches for test cases in the specified Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchTestCasesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchTestCasesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchTestCasesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // TestCaseSearchFilter
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
 *   SearchCriteria: { // TestCaseSearchCriteria
 *     OrConditions: [ // TestCaseSearchConditionList
 *       {
 *         OrConditions: [
 *           "<TestCaseSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<TestCaseSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         StatusCondition: "PUBLISHED" || "SAVED",
 *       },
 *     ],
 *     AndConditions: [
 *       "<TestCaseSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *     StatusCondition: "PUBLISHED" || "SAVED",
 *   },
 * };
 * const command = new SearchTestCasesCommand(input);
 * const response = await client.send(command);
 * // { // SearchTestCasesResponse
 * //   TestCases: [ // TestCaseSearchSummaryList
 * //     { // TestCase
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       EntryPoint: { // TestCaseEntryPoint
 * //         Type: "VOICE_CALL",
 * //         VoiceCallEntryPointParameters: { // VoiceCallEntryPointParameters
 * //           SourcePhoneNumber: "STRING_VALUE",
 * //           DestinationPhoneNumber: "STRING_VALUE",
 * //           FlowId: "STRING_VALUE",
 * //         },
 * //       },
 * //       InitializationData: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "PUBLISHED" || "SAVED",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TestCaseSha256: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchTestCasesCommandInput - {@link SearchTestCasesCommandInput}
 * @returns {@link SearchTestCasesCommandOutput}
 * @see {@link SearchTestCasesCommandInput} for command's `input` shape.
 * @see {@link SearchTestCasesCommandOutput} for command's `response` shape.
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
export class SearchTestCasesCommand extends $Command
  .classBuilder<
    SearchTestCasesCommandInput,
    SearchTestCasesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchTestCases", {})
  .n("ConnectClient", "SearchTestCasesCommand")
  .sc(SearchTestCases$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTestCasesRequest;
      output: SearchTestCasesResponse;
    };
    sdk: {
      input: SearchTestCasesCommandInput;
      output: SearchTestCasesCommandOutput;
    };
  };
}
