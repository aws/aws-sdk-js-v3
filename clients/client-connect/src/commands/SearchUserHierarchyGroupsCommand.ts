// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchUserHierarchyGroupsResponse } from "../models/models_2";
import { SearchUserHierarchyGroupsRequest } from "../models/models_3";
import { SearchUserHierarchyGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchUserHierarchyGroupsCommand}.
 */
export interface SearchUserHierarchyGroupsCommandInput extends SearchUserHierarchyGroupsRequest {}
/**
 * @public
 *
 * The output of {@link SearchUserHierarchyGroupsCommand}.
 */
export interface SearchUserHierarchyGroupsCommandOutput extends SearchUserHierarchyGroupsResponse, __MetadataBearer {}

/**
 * <p>Searches UserHierarchyGroups in an Amazon Connect instance, with optional filtering.</p>
 *          <important>
 *             <p>The UserHierarchyGroup with <code>"LevelId": "0"</code> is the foundation for building levels on top of an
 *     instance. It is not user-definable, nor is it visible in the UI.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchUserHierarchyGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchUserHierarchyGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchUserHierarchyGroupsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // UserHierarchyGroupSearchFilter
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
 *   SearchCriteria: { // UserHierarchyGroupSearchCriteria
 *     OrConditions: [ // UserHierarchyGroupSearchConditionList
 *       {
 *         OrConditions: [
 *           "<UserHierarchyGroupSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<UserHierarchyGroupSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<UserHierarchyGroupSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchUserHierarchyGroupsCommand(input);
 * const response = await client.send(command);
 * // { // SearchUserHierarchyGroupsResponse
 * //   UserHierarchyGroups: [ // UserHierarchyGroupList
 * //     { // HierarchyGroup
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LevelId: "STRING_VALUE",
 * //       HierarchyPath: { // HierarchyPath
 * //         LevelOne: { // HierarchyGroupSummary
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           LastModifiedTime: new Date("TIMESTAMP"),
 * //           LastModifiedRegion: "STRING_VALUE",
 * //         },
 * //         LevelTwo: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           LastModifiedTime: new Date("TIMESTAMP"),
 * //           LastModifiedRegion: "STRING_VALUE",
 * //         },
 * //         LevelThree: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           LastModifiedTime: new Date("TIMESTAMP"),
 * //           LastModifiedRegion: "STRING_VALUE",
 * //         },
 * //         LevelFour: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           LastModifiedTime: new Date("TIMESTAMP"),
 * //           LastModifiedRegion: "STRING_VALUE",
 * //         },
 * //         LevelFive: {
 * //           Id: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           LastModifiedTime: new Date("TIMESTAMP"),
 * //           LastModifiedRegion: "STRING_VALUE",
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
 * @param SearchUserHierarchyGroupsCommandInput - {@link SearchUserHierarchyGroupsCommandInput}
 * @returns {@link SearchUserHierarchyGroupsCommandOutput}
 * @see {@link SearchUserHierarchyGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchUserHierarchyGroupsCommandOutput} for command's `response` shape.
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
export class SearchUserHierarchyGroupsCommand extends $Command
  .classBuilder<
    SearchUserHierarchyGroupsCommandInput,
    SearchUserHierarchyGroupsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchUserHierarchyGroups", {})
  .n("ConnectClient", "SearchUserHierarchyGroupsCommand")
  .sc(SearchUserHierarchyGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchUserHierarchyGroupsRequest;
      output: SearchUserHierarchyGroupsResponse;
    };
    sdk: {
      input: SearchUserHierarchyGroupsCommandInput;
      output: SearchUserHierarchyGroupsCommandOutput;
    };
  };
}
