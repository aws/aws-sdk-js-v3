// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchUsersResponse } from "../models/models_2";
import { SearchUsersRequest } from "../models/models_3";
import { SearchUsers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandInput extends SearchUsersRequest {}
/**
 * @public
 *
 * The output of {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandOutput extends SearchUsersResponse, __MetadataBearer {}

/**
 * <p>Searches users in an Amazon Connect instance, with optional filtering. </p>
 *          <note>
 *             <p>
 *                <code>AfterContactWorkTimeLimit</code> is returned in milliseconds. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchUsersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchUsersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchUsersRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // UserSearchFilter
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
 *     UserAttributeFilter: { // ControlPlaneUserAttributeFilter
 *       OrConditions: [ // AttributeOrConditionList
 *         { // AttributeAndCondition
 *           TagConditions: "<TagAndConditionList>",
 *           HierarchyGroupCondition: { // HierarchyGroupCondition
 *             Value: "STRING_VALUE",
 *             HierarchyGroupMatchType: "EXACT" || "WITH_CHILD_GROUPS",
 *           },
 *         },
 *       ],
 *       AndCondition: {
 *         TagConditions: "<TagAndConditionList>",
 *         HierarchyGroupCondition: {
 *           Value: "STRING_VALUE",
 *           HierarchyGroupMatchType: "EXACT" || "WITH_CHILD_GROUPS",
 *         },
 *       },
 *       TagCondition: "<TagCondition>",
 *       HierarchyGroupCondition: "<HierarchyGroupCondition>",
 *     },
 *   },
 *   SearchCriteria: { // UserSearchCriteria
 *     OrConditions: [ // UserSearchConditionList
 *       {
 *         OrConditions: [
 *           "<UserSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<UserSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *         ListCondition: { // ListCondition
 *           TargetListType: "PROFICIENCIES",
 *           Conditions: [ // Conditions
 *             { // Condition
 *               StringCondition: {
 *                 FieldName: "STRING_VALUE",
 *                 Value: "STRING_VALUE",
 *                 ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *               },
 *               NumberCondition: { // NumberCondition
 *                 FieldName: "STRING_VALUE",
 *                 MinValue: Number("int"),
 *                 MaxValue: Number("int"),
 *                 ComparisonType: "GREATER_OR_EQUAL" || "GREATER" || "LESSER_OR_EQUAL" || "LESSER" || "EQUAL" || "NOT_EQUAL" || "RANGE",
 *               },
 *             },
 *           ],
 *         },
 *         HierarchyGroupCondition: "<HierarchyGroupCondition>",
 *       },
 *     ],
 *     AndConditions: [
 *       "<UserSearchCriteria>",
 *     ],
 *     StringCondition: "<StringCondition>",
 *     ListCondition: {
 *       TargetListType: "PROFICIENCIES",
 *       Conditions: [
 *         {
 *           StringCondition: "<StringCondition>",
 *           NumberCondition: {
 *             FieldName: "STRING_VALUE",
 *             MinValue: Number("int"),
 *             MaxValue: Number("int"),
 *             ComparisonType: "GREATER_OR_EQUAL" || "GREATER" || "LESSER_OR_EQUAL" || "LESSER" || "EQUAL" || "NOT_EQUAL" || "RANGE",
 *           },
 *         },
 *       ],
 *     },
 *     HierarchyGroupCondition: "<HierarchyGroupCondition>",
 *   },
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * // { // SearchUsersResponse
 * //   Users: [ // UserSearchSummaryList
 * //     { // UserSearchSummary
 * //       Arn: "STRING_VALUE",
 * //       DirectoryUserId: "STRING_VALUE",
 * //       HierarchyGroupId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       IdentityInfo: { // UserIdentityInfoLite
 * //         FirstName: "STRING_VALUE",
 * //         LastName: "STRING_VALUE",
 * //       },
 * //       PhoneConfig: { // UserPhoneConfig
 * //         PhoneType: "SOFT_PHONE" || "DESK_PHONE", // required
 * //         AutoAccept: true || false,
 * //         AfterContactWorkTimeLimit: Number("int"),
 * //         DeskPhoneNumber: "STRING_VALUE",
 * //         PersistentConnection: true || false,
 * //       },
 * //       RoutingProfileId: "STRING_VALUE",
 * //       SecurityProfileIds: [ // SecurityProfileIds
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Username: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchUsersCommandInput - {@link SearchUsersCommandInput}
 * @returns {@link SearchUsersCommandOutput}
 * @see {@link SearchUsersCommandInput} for command's `input` shape.
 * @see {@link SearchUsersCommandOutput} for command's `response` shape.
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
export class SearchUsersCommand extends $Command
  .classBuilder<
    SearchUsersCommandInput,
    SearchUsersCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchUsers", {})
  .n("ConnectClient", "SearchUsersCommand")
  .sc(SearchUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchUsersRequest;
      output: SearchUsersResponse;
    };
    sdk: {
      input: SearchUsersCommandInput;
      output: SearchUsersCommandOutput;
    };
  };
}
