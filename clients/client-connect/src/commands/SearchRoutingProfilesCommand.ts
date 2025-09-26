// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchRoutingProfilesResponse } from "../models/models_2";
import { SearchRoutingProfilesRequest } from "../models/models_3";
import { de_SearchRoutingProfilesCommand, se_SearchRoutingProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchRoutingProfilesCommand}.
 */
export interface SearchRoutingProfilesCommandInput extends SearchRoutingProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchRoutingProfilesCommand}.
 */
export interface SearchRoutingProfilesCommandOutput extends SearchRoutingProfilesResponse, __MetadataBearer {}

/**
 * <p>Searches routing profiles in an Amazon Connect instance, with optional filtering.</p>
 *          <note>
 *             <p>
 *                <code>SearchRoutingProfiles</code> does not populate LastModifiedRegion, LastModifiedTime,
 *     MediaConcurrencies.CrossChannelBehavior, and AgentAvailabilityTimer in its response, but <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html">DescribeRoutingProfile</a> does.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchRoutingProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchRoutingProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchRoutingProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // RoutingProfileSearchFilter
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
 *   SearchCriteria: { // RoutingProfileSearchCriteria
 *     OrConditions: [ // RoutingProfileSearchConditionList
 *       {
 *         OrConditions: [
 *           "<RoutingProfileSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<RoutingProfileSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<RoutingProfileSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchRoutingProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchRoutingProfilesResponse
 * //   RoutingProfiles: [ // RoutingProfileList
 * //     { // RoutingProfile
 * //       InstanceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RoutingProfileArn: "STRING_VALUE",
 * //       RoutingProfileId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       MediaConcurrencies: [ // MediaConcurrencies
 * //         { // MediaConcurrency
 * //           Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 * //           Concurrency: Number("int"), // required
 * //           CrossChannelBehavior: { // CrossChannelBehavior
 * //             BehaviorType: "ROUTE_CURRENT_CHANNEL_ONLY" || "ROUTE_ANY_CHANNEL", // required
 * //           },
 * //         },
 * //       ],
 * //       DefaultOutboundQueueId: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       NumberOfAssociatedQueues: Number("long"),
 * //       NumberOfAssociatedManualAssignmentQueues: Number("long"),
 * //       NumberOfAssociatedUsers: Number("long"),
 * //       AgentAvailabilityTimer: "TIME_SINCE_LAST_ACTIVITY" || "TIME_SINCE_LAST_INBOUND",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       AssociatedQueueIds: [ // AssociatedQueueIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AssociatedManualAssignmentQueueIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchRoutingProfilesCommandInput - {@link SearchRoutingProfilesCommandInput}
 * @returns {@link SearchRoutingProfilesCommandOutput}
 * @see {@link SearchRoutingProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchRoutingProfilesCommandOutput} for command's `response` shape.
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
export class SearchRoutingProfilesCommand extends $Command
  .classBuilder<
    SearchRoutingProfilesCommandInput,
    SearchRoutingProfilesCommandOutput,
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
  .s("AmazonConnectService", "SearchRoutingProfiles", {})
  .n("ConnectClient", "SearchRoutingProfilesCommand")
  .f(void 0, void 0)
  .ser(se_SearchRoutingProfilesCommand)
  .de(de_SearchRoutingProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRoutingProfilesRequest;
      output: SearchRoutingProfilesResponse;
    };
    sdk: {
      input: SearchRoutingProfilesCommandInput;
      output: SearchRoutingProfilesCommandOutput;
    };
  };
}
