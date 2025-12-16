// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchDataTablesResponse } from "../models/models_2";
import type { SearchDataTablesRequest } from "../models/models_3";
import { SearchDataTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchDataTablesCommand}.
 */
export interface SearchDataTablesCommandInput extends SearchDataTablesRequest {}
/**
 * @public
 *
 * The output of {@link SearchDataTablesCommand}.
 */
export interface SearchDataTablesCommandOutput extends SearchDataTablesResponse, __MetadataBearer {}

/**
 * <p>Searches for data tables based on the table's ID, name, and description. In the future, this operation can
 *    support searching on attribute names and possibly primary values. Follows other search operations closely and
 *    supports both search criteria and filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchDataTablesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchDataTablesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchDataTablesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchFilter: { // DataTableSearchFilter
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
 *   SearchCriteria: { // DataTableSearchCriteria
 *     OrConditions: [ // DataTableSearchConditionList
 *       {
 *         OrConditions: [
 *           "<DataTableSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<DataTableSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<DataTableSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchDataTablesCommand(input);
 * const response = await client.send(command);
 * // { // SearchDataTablesResponse
 * //   DataTables: [ // DataTableList
 * //     { // DataTable
 * //       Name: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       TimeZone: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       ValueLockLevel: "NONE" || "DATA_TABLE" || "PRIMARY_VALUE" || "ATTRIBUTE" || "VALUE",
 * //       LockVersion: { // DataTableLockVersion
 * //         DataTable: "STRING_VALUE",
 * //         Attribute: "STRING_VALUE",
 * //         PrimaryValues: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Version: "STRING_VALUE",
 * //       VersionDescription: "STRING_VALUE",
 * //       Status: "PUBLISHED",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedRegion: "STRING_VALUE",
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
 * @param SearchDataTablesCommandInput - {@link SearchDataTablesCommandInput}
 * @returns {@link SearchDataTablesCommandOutput}
 * @see {@link SearchDataTablesCommandInput} for command's `input` shape.
 * @see {@link SearchDataTablesCommandOutput} for command's `response` shape.
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
export class SearchDataTablesCommand extends $Command
  .classBuilder<
    SearchDataTablesCommandInput,
    SearchDataTablesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "SearchDataTables", {})
  .n("ConnectClient", "SearchDataTablesCommand")
  .sc(SearchDataTables$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDataTablesRequest;
      output: SearchDataTablesResponse;
    };
    sdk: {
      input: SearchDataTablesCommandInput;
      output: SearchDataTablesCommandOutput;
    };
  };
}
