// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchWorkspacesResponse } from "../models/models_2";
import { SearchWorkspacesRequest } from "../models/models_3";
import { SearchWorkspaces } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchWorkspacesCommand}.
 */
export interface SearchWorkspacesCommandInput extends SearchWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link SearchWorkspacesCommand}.
 */
export interface SearchWorkspacesCommandOutput extends SearchWorkspacesResponse, __MetadataBearer {}

/**
 * <p>Searches workspaces based on name, description, visibility, or tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchWorkspacesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchWorkspacesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchWorkspacesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // WorkspaceSearchFilter
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
 *   SearchCriteria: { // WorkspaceSearchCriteria
 *     OrConditions: [ // WorkspaceSearchConditionList
 *       {
 *         OrConditions: [
 *           "<WorkspaceSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<WorkspaceSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<WorkspaceSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // SearchWorkspacesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Workspaces: [ // WorkspaceSearchSummaryList
 * //     { // WorkspaceSearchSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Visibility: "ALL" || "ASSIGNED" || "NONE",
 * //       Description: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchWorkspacesCommandInput - {@link SearchWorkspacesCommandInput}
 * @returns {@link SearchWorkspacesCommandOutput}
 * @see {@link SearchWorkspacesCommandInput} for command's `input` shape.
 * @see {@link SearchWorkspacesCommandOutput} for command's `response` shape.
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
export class SearchWorkspacesCommand extends $Command
  .classBuilder<
    SearchWorkspacesCommandInput,
    SearchWorkspacesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchWorkspaces", {})
  .n("ConnectClient", "SearchWorkspacesCommand")
  .sc(SearchWorkspaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchWorkspacesRequest;
      output: SearchWorkspacesResponse;
    };
    sdk: {
      input: SearchWorkspacesCommandInput;
      output: SearchWorkspacesCommandOutput;
    };
  };
}
