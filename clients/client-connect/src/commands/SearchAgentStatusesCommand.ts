// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchAgentStatusesResponse } from "../models/models_2";
import { SearchAgentStatusesRequest } from "../models/models_3";
import { de_SearchAgentStatusesCommand, se_SearchAgentStatusesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchAgentStatusesCommand}.
 */
export interface SearchAgentStatusesCommandInput extends SearchAgentStatusesRequest {}
/**
 * @public
 *
 * The output of {@link SearchAgentStatusesCommand}.
 */
export interface SearchAgentStatusesCommandOutput extends SearchAgentStatusesResponse, __MetadataBearer {}

/**
 * <p>Searches AgentStatuses in an Amazon Connect instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchAgentStatusesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchAgentStatusesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchAgentStatusesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // AgentStatusSearchFilter
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
 *   SearchCriteria: { // AgentStatusSearchCriteria
 *     OrConditions: [ // AgentStatusSearchConditionList
 *       {
 *         OrConditions: [
 *           "<AgentStatusSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<AgentStatusSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<AgentStatusSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchAgentStatusesCommand(input);
 * const response = await client.send(command);
 * // { // SearchAgentStatusesResponse
 * //   AgentStatuses: [ // AgentStatusList
 * //     { // AgentStatus
 * //       AgentStatusARN: "STRING_VALUE",
 * //       AgentStatusId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Type: "ROUTABLE" || "CUSTOM" || "OFFLINE",
 * //       DisplayOrder: Number("int"),
 * //       State: "ENABLED" || "DISABLED",
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
 * @param SearchAgentStatusesCommandInput - {@link SearchAgentStatusesCommandInput}
 * @returns {@link SearchAgentStatusesCommandOutput}
 * @see {@link SearchAgentStatusesCommandInput} for command's `input` shape.
 * @see {@link SearchAgentStatusesCommandOutput} for command's `response` shape.
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
export class SearchAgentStatusesCommand extends $Command
  .classBuilder<
    SearchAgentStatusesCommandInput,
    SearchAgentStatusesCommandOutput,
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
  .s("AmazonConnectService", "SearchAgentStatuses", {})
  .n("ConnectClient", "SearchAgentStatusesCommand")
  .f(void 0, void 0)
  .ser(se_SearchAgentStatusesCommand)
  .de(de_SearchAgentStatusesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAgentStatusesRequest;
      output: SearchAgentStatusesResponse;
    };
    sdk: {
      input: SearchAgentStatusesCommandInput;
      output: SearchAgentStatusesCommandOutput;
    };
  };
}
