// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchNotificationsRequest, SearchNotificationsResponse } from "../models/models_3";
import { SearchNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchNotificationsCommand}.
 */
export interface SearchNotificationsCommandInput extends SearchNotificationsRequest {}
/**
 * @public
 *
 * The output of {@link SearchNotificationsCommand}.
 */
export interface SearchNotificationsCommandOutput extends SearchNotificationsResponse, __MetadataBearer {}

/**
 * <p>Searches for notifications based on specified criteria and filters. Returns a paginated list of notifications matching the search parameters, ordered by descending creation time. Supports filtering by content and tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchNotificationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchNotificationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchNotificationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // NotificationSearchFilter
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
 *   SearchCriteria: { // NotificationSearchCriteria
 *     OrConditions: [ // NotificationSearchConditionList
 *       {
 *         OrConditions: [
 *           "<NotificationSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<NotificationSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<NotificationSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // SearchNotificationsResponse
 * //   Notifications: [ // NotificationSearchSummaryList
 * //     { // NotificationSearchSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Content: { // NotificationContent
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Priority: "URGENT" || "HIGH" || "LOW",
 * //       Recipients: [ // RecipientList
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
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
 * @param SearchNotificationsCommandInput - {@link SearchNotificationsCommandInput}
 * @returns {@link SearchNotificationsCommandOutput}
 * @see {@link SearchNotificationsCommandInput} for command's `input` shape.
 * @see {@link SearchNotificationsCommandOutput} for command's `response` shape.
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
export class SearchNotificationsCommand extends $Command
  .classBuilder<
    SearchNotificationsCommandInput,
    SearchNotificationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchNotifications", {})
  .n("ConnectClient", "SearchNotificationsCommand")
  .sc(SearchNotifications$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchNotificationsRequest;
      output: SearchNotificationsResponse;
    };
    sdk: {
      input: SearchNotificationsCommandInput;
      output: SearchNotificationsCommandOutput;
    };
  };
}
