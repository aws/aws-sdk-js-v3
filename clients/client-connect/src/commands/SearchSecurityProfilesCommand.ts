// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchSecurityProfilesResponse } from "../models/models_2";
import { SearchSecurityProfilesRequest } from "../models/models_3";
import { de_SearchSecurityProfilesCommand, se_SearchSecurityProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchSecurityProfilesCommand}.
 */
export interface SearchSecurityProfilesCommandInput extends SearchSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link SearchSecurityProfilesCommand}.
 */
export interface SearchSecurityProfilesCommandOutput extends SearchSecurityProfilesResponse, __MetadataBearer {}

/**
 * <p>Searches security profiles in an Amazon Connect instance, with optional
 *    filtering.</p>
 *          <p>For information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
 *      <i>Amazon Connect Administrator Guide</i>. For a mapping of the API name and
 *    user interface name of the security profile permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile
 *     permissions</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchSecurityProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchCriteria: { // SecurityProfileSearchCriteria
 *     OrConditions: [ // SecurityProfileSearchConditionList
 *       {
 *         OrConditions: [
 *           "<SecurityProfileSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<SecurityProfileSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<SecurityProfileSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 *   SearchFilter: { // SecurityProfilesSearchFilter
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
 * };
 * const command = new SearchSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchSecurityProfilesResponse
 * //   SecurityProfiles: [ // SecurityProfilesSearchSummaryList
 * //     { // SecurityProfileSearchSummary
 * //       Id: "STRING_VALUE",
 * //       OrganizationResourceId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       SecurityProfileName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
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
 * @param SearchSecurityProfilesCommandInput - {@link SearchSecurityProfilesCommandInput}
 * @returns {@link SearchSecurityProfilesCommandOutput}
 * @see {@link SearchSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchSecurityProfilesCommandOutput} for command's `response` shape.
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
export class SearchSecurityProfilesCommand extends $Command
  .classBuilder<
    SearchSecurityProfilesCommandInput,
    SearchSecurityProfilesCommandOutput,
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
  .s("AmazonConnectService", "SearchSecurityProfiles", {})
  .n("ConnectClient", "SearchSecurityProfilesCommand")
  .f(void 0, void 0)
  .ser(se_SearchSecurityProfilesCommand)
  .de(de_SearchSecurityProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchSecurityProfilesRequest;
      output: SearchSecurityProfilesResponse;
    };
    sdk: {
      input: SearchSecurityProfilesCommandInput;
      output: SearchSecurityProfilesCommandOutput;
    };
  };
}
