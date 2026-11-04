// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchSecurityProfilesResponse } from "../models/models_3";
import type { SearchSecurityProfilesRequest } from "../models/models_4";
import { SearchSecurityProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Searches security profiles in an Connect Customer instance, with optional filtering.
 *
 * For information about security profiles, see [Security Profiles](https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html) in the *Connect Customer Administrator Guide*. For a mapping of the API name and user interface name of the security profile permissions, see [List of security profile permissions](https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
 * //       Type: "AWS_MANAGED" || "CUSTOMER_MANAGED",
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class SearchSecurityProfilesCommand extends command<SearchSecurityProfilesCommandInput, SearchSecurityProfilesCommandOutput>(
  _ep0,
  _mw0,
  "SearchSecurityProfiles",
  SearchSecurityProfiles$
) {
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
