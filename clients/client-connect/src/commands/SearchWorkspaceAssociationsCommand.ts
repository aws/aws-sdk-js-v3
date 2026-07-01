// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchWorkspaceAssociationsResponse } from "../models/models_3";
import type { SearchWorkspaceAssociationsRequest } from "../models/models_4";
import { SearchWorkspaceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchWorkspaceAssociationsCommand}.
 */
export interface SearchWorkspaceAssociationsCommandInput extends SearchWorkspaceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link SearchWorkspaceAssociationsCommand}.
 */
export interface SearchWorkspaceAssociationsCommandOutput extends SearchWorkspaceAssociationsResponse, __MetadataBearer {}

/**
 * <p>Searches for workspace associations with users or routing profiles based on various criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchWorkspaceAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchWorkspaceAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchWorkspaceAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // WorkspaceAssociationSearchFilter
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
 *   SearchCriteria: { // WorkspaceAssociationSearchCriteria
 *     OrConditions: [ // WorkspaceAssociationSearchConditionList
 *       {
 *         OrConditions: [
 *           "<WorkspaceAssociationSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<WorkspaceAssociationSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<WorkspaceAssociationSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchWorkspaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // SearchWorkspaceAssociationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   WorkspaceAssociations: [ // WorkspaceAssociationSearchSummaryList
 * //     { // WorkspaceAssociationSearchSummary
 * //       WorkspaceId: "STRING_VALUE",
 * //       WorkspaceArn: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchWorkspaceAssociationsCommandInput - {@link SearchWorkspaceAssociationsCommandInput}
 * @returns {@link SearchWorkspaceAssociationsCommandOutput}
 * @see {@link SearchWorkspaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link SearchWorkspaceAssociationsCommandOutput} for command's `response` shape.
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
export class SearchWorkspaceAssociationsCommand extends command<SearchWorkspaceAssociationsCommandInput, SearchWorkspaceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "SearchWorkspaceAssociations",
  SearchWorkspaceAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchWorkspaceAssociationsRequest;
      output: SearchWorkspaceAssociationsResponse;
    };
    sdk: {
      input: SearchWorkspaceAssociationsCommandInput;
      output: SearchWorkspaceAssociationsCommandOutput;
    };
  };
}
