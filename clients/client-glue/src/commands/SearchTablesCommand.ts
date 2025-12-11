// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { SearchTablesRequest } from "../models/models_2";
import type { SearchTablesResponse } from "../models/models_3";
import { SearchTables } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchTablesCommand}.
 */
export interface SearchTablesCommandInput extends SearchTablesRequest {}
/**
 * @public
 *
 * The output of {@link SearchTablesCommand}.
 */
export interface SearchTablesCommandOutput extends SearchTablesResponse, __MetadataBearer {}

/**
 * <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p>
 *          <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, SearchTablesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, SearchTablesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // SearchTablesRequest
 *   CatalogId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // SearchPropertyPredicates
 *     { // PropertyPredicate
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       Comparator: "EQUALS" || "GREATER_THAN" || "LESS_THAN" || "GREATER_THAN_EQUALS" || "LESS_THAN_EQUALS",
 *     },
 *   ],
 *   SearchText: "STRING_VALUE",
 *   SortCriteria: [ // SortCriteria
 *     { // SortCriterion
 *       FieldName: "STRING_VALUE",
 *       Sort: "ASC" || "DESC",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   ResourceShareType: "FOREIGN" || "ALL" || "FEDERATED",
 *   IncludeStatusDetails: true || false,
 * };
 * const command = new SearchTablesCommand(input);
 * const response = await client.send(command);
 * // { // SearchTablesResponse
 * //   NextToken: "STRING_VALUE",
 * //   TableList: [ // TableList
 * //     { // Table
 * //       Name: "STRING_VALUE", // required
 * //       DatabaseName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       LastAccessTime: new Date("TIMESTAMP"),
 * //       LastAnalyzedTime: new Date("TIMESTAMP"),
 * //       Retention: Number("int"),
 * //       StorageDescriptor: { // StorageDescriptor
 * //         Columns: [ // ColumnList
 * //           { // Column
 * //             Name: "STRING_VALUE", // required
 * //             Type: "STRING_VALUE",
 * //             Comment: "STRING_VALUE",
 * //             Parameters: { // ParametersMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         Location: "STRING_VALUE",
 * //         AdditionalLocations: [ // LocationStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         InputFormat: "STRING_VALUE",
 * //         OutputFormat: "STRING_VALUE",
 * //         Compressed: true || false,
 * //         NumberOfBuckets: Number("int"),
 * //         SerdeInfo: { // SerDeInfo
 * //           Name: "STRING_VALUE",
 * //           SerializationLibrary: "STRING_VALUE",
 * //           Parameters: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         BucketColumns: [ // NameStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         SortColumns: [ // OrderList
 * //           { // Order
 * //             Column: "STRING_VALUE", // required
 * //             SortOrder: Number("int"), // required
 * //           },
 * //         ],
 * //         Parameters: "<ParametersMap>",
 * //         SkewedInfo: { // SkewedInfo
 * //           SkewedColumnNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //           SkewedColumnValues: [ // ColumnValueStringList
 * //             "STRING_VALUE",
 * //           ],
 * //           SkewedColumnValueLocationMaps: { // LocationMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         StoredAsSubDirectories: true || false,
 * //         SchemaReference: { // SchemaReference
 * //           SchemaId: { // SchemaId
 * //             SchemaArn: "STRING_VALUE",
 * //             SchemaName: "STRING_VALUE",
 * //             RegistryName: "STRING_VALUE",
 * //           },
 * //           SchemaVersionId: "STRING_VALUE",
 * //           SchemaVersionNumber: Number("long"),
 * //         },
 * //       },
 * //       PartitionKeys: [
 * //         {
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //           Comment: "STRING_VALUE",
 * //           Parameters: "<ParametersMap>",
 * //         },
 * //       ],
 * //       ViewOriginalText: "STRING_VALUE",
 * //       ViewExpandedText: "STRING_VALUE",
 * //       TableType: "STRING_VALUE",
 * //       Parameters: "<ParametersMap>",
 * //       CreatedBy: "STRING_VALUE",
 * //       IsRegisteredWithLakeFormation: true || false,
 * //       TargetTable: { // TableIdentifier
 * //         CatalogId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       CatalogId: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       FederatedTable: { // FederatedTable
 * //         Identifier: "STRING_VALUE",
 * //         DatabaseIdentifier: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //         ConnectionType: "STRING_VALUE",
 * //       },
 * //       ViewDefinition: { // ViewDefinition
 * //         IsProtected: true || false,
 * //         Definer: "STRING_VALUE",
 * //         ViewVersionId: Number("long"),
 * //         ViewVersionToken: "STRING_VALUE",
 * //         RefreshSeconds: Number("long"),
 * //         LastRefreshType: "FULL" || "INCREMENTAL",
 * //         SubObjects: [ // ViewSubObjectsList
 * //           "STRING_VALUE",
 * //         ],
 * //         SubObjectVersionIds: [ // ViewSubObjectVersionIdsList
 * //           Number("long"),
 * //         ],
 * //         Representations: [ // ViewRepresentationList
 * //           { // ViewRepresentation
 * //             Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //             DialectVersion: "STRING_VALUE",
 * //             ViewOriginalText: "STRING_VALUE",
 * //             ViewExpandedText: "STRING_VALUE",
 * //             ValidationConnection: "STRING_VALUE",
 * //             IsStale: true || false,
 * //           },
 * //         ],
 * //       },
 * //       IsMultiDialectView: true || false,
 * //       IsMaterializedView: true || false,
 * //       Status: { // TableStatus
 * //         RequestedBy: "STRING_VALUE",
 * //         UpdatedBy: "STRING_VALUE",
 * //         RequestTime: new Date("TIMESTAMP"),
 * //         UpdateTime: new Date("TIMESTAMP"),
 * //         Action: "UPDATE" || "CREATE",
 * //         State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //         Error: { // ErrorDetail
 * //           ErrorCode: "STRING_VALUE",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         Details: { // StatusDetails
 * //           RequestedChange: {
 * //             Name: "STRING_VALUE", // required
 * //             DatabaseName: "STRING_VALUE",
 * //             Description: "STRING_VALUE",
 * //             Owner: "STRING_VALUE",
 * //             CreateTime: new Date("TIMESTAMP"),
 * //             UpdateTime: new Date("TIMESTAMP"),
 * //             LastAccessTime: new Date("TIMESTAMP"),
 * //             LastAnalyzedTime: new Date("TIMESTAMP"),
 * //             Retention: Number("int"),
 * //             StorageDescriptor: {
 * //               Columns: "<ColumnList>",
 * //               Location: "STRING_VALUE",
 * //               AdditionalLocations: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               InputFormat: "STRING_VALUE",
 * //               OutputFormat: "STRING_VALUE",
 * //               Compressed: true || false,
 * //               NumberOfBuckets: Number("int"),
 * //               SerdeInfo: {
 * //                 Name: "STRING_VALUE",
 * //                 SerializationLibrary: "STRING_VALUE",
 * //                 Parameters: "<ParametersMap>",
 * //               },
 * //               BucketColumns: "<NameStringList>",
 * //               SortColumns: [
 * //                 {
 * //                   Column: "STRING_VALUE", // required
 * //                   SortOrder: Number("int"), // required
 * //                 },
 * //               ],
 * //               Parameters: "<ParametersMap>",
 * //               SkewedInfo: {
 * //                 SkewedColumnNames: "<NameStringList>",
 * //                 SkewedColumnValues: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 SkewedColumnValueLocationMaps: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //               },
 * //               StoredAsSubDirectories: true || false,
 * //               SchemaReference: {
 * //                 SchemaId: {
 * //                   SchemaArn: "STRING_VALUE",
 * //                   SchemaName: "STRING_VALUE",
 * //                   RegistryName: "STRING_VALUE",
 * //                 },
 * //                 SchemaVersionId: "STRING_VALUE",
 * //                 SchemaVersionNumber: Number("long"),
 * //               },
 * //             },
 * //             PartitionKeys: "<ColumnList>",
 * //             ViewOriginalText: "STRING_VALUE",
 * //             ViewExpandedText: "STRING_VALUE",
 * //             TableType: "STRING_VALUE",
 * //             Parameters: "<ParametersMap>",
 * //             CreatedBy: "STRING_VALUE",
 * //             IsRegisteredWithLakeFormation: true || false,
 * //             TargetTable: {
 * //               CatalogId: "STRING_VALUE",
 * //               DatabaseName: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //             },
 * //             CatalogId: "STRING_VALUE",
 * //             VersionId: "STRING_VALUE",
 * //             FederatedTable: {
 * //               Identifier: "STRING_VALUE",
 * //               DatabaseIdentifier: "STRING_VALUE",
 * //               ConnectionName: "STRING_VALUE",
 * //               ConnectionType: "STRING_VALUE",
 * //             },
 * //             ViewDefinition: {
 * //               IsProtected: true || false,
 * //               Definer: "STRING_VALUE",
 * //               ViewVersionId: Number("long"),
 * //               ViewVersionToken: "STRING_VALUE",
 * //               RefreshSeconds: Number("long"),
 * //               LastRefreshType: "FULL" || "INCREMENTAL",
 * //               SubObjects: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               SubObjectVersionIds: [
 * //                 Number("long"),
 * //               ],
 * //               Representations: [
 * //                 {
 * //                   Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                   DialectVersion: "STRING_VALUE",
 * //                   ViewOriginalText: "STRING_VALUE",
 * //                   ViewExpandedText: "STRING_VALUE",
 * //                   ValidationConnection: "STRING_VALUE",
 * //                   IsStale: true || false,
 * //                 },
 * //               ],
 * //             },
 * //             IsMultiDialectView: true || false,
 * //             IsMaterializedView: true || false,
 * //             Status: {
 * //               RequestedBy: "STRING_VALUE",
 * //               UpdatedBy: "STRING_VALUE",
 * //               RequestTime: new Date("TIMESTAMP"),
 * //               UpdateTime: new Date("TIMESTAMP"),
 * //               Action: "UPDATE" || "CREATE",
 * //               State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //               Error: {
 * //                 ErrorCode: "STRING_VALUE",
 * //                 ErrorMessage: "STRING_VALUE",
 * //               },
 * //               Details: {
 * //                 RequestedChange: "<Table>",
 * //                 ViewValidations: [ // ViewValidationList
 * //                   { // ViewValidation
 * //                     Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                     DialectVersion: "STRING_VALUE",
 * //                     ViewValidationText: "STRING_VALUE",
 * //                     UpdateTime: new Date("TIMESTAMP"),
 * //                     State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //                     Error: "<ErrorDetail>",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //           ViewValidations: [
 * //             {
 * //               Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //               DialectVersion: "STRING_VALUE",
 * //               ViewValidationText: "STRING_VALUE",
 * //               UpdateTime: new Date("TIMESTAMP"),
 * //               State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //               Error: "<ErrorDetail>",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchTablesCommandInput - {@link SearchTablesCommandInput}
 * @returns {@link SearchTablesCommandOutput}
 * @see {@link SearchTablesCommandInput} for command's `input` shape.
 * @see {@link SearchTablesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class SearchTablesCommand extends $Command
  .classBuilder<
    SearchTablesCommandInput,
    SearchTablesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "SearchTables", {})
  .n("GlueClient", "SearchTablesCommand")
  .sc(SearchTables)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchTablesRequest;
      output: SearchTablesResponse;
    };
    sdk: {
      input: SearchTablesCommandInput;
      output: SearchTablesCommandOutput;
    };
  };
}
