// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableVersionsRequest } from "../models/models_2";
import { GetTableVersionsResponse } from "../models/models_3";
import { GetTableVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableVersionsCommand}.
 */
export interface GetTableVersionsCommandInput extends GetTableVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetTableVersionsCommand}.
 */
export interface GetTableVersionsCommandOutput extends GetTableVersionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of strings that identify available versions of
 *       a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableVersionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableVersionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetTableVersionsRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetTableVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetTableVersionsResponse
 * //   TableVersions: [ // GetTableVersionsList
 * //     { // TableVersion
 * //       Table: { // Table
 * //         Name: "STRING_VALUE", // required
 * //         DatabaseName: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         CreateTime: new Date("TIMESTAMP"),
 * //         UpdateTime: new Date("TIMESTAMP"),
 * //         LastAccessTime: new Date("TIMESTAMP"),
 * //         LastAnalyzedTime: new Date("TIMESTAMP"),
 * //         Retention: Number("int"),
 * //         StorageDescriptor: { // StorageDescriptor
 * //           Columns: [ // ColumnList
 * //             { // Column
 * //               Name: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE",
 * //               Comment: "STRING_VALUE",
 * //               Parameters: { // ParametersMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Location: "STRING_VALUE",
 * //           AdditionalLocations: [ // LocationStringList
 * //             "STRING_VALUE",
 * //           ],
 * //           InputFormat: "STRING_VALUE",
 * //           OutputFormat: "STRING_VALUE",
 * //           Compressed: true || false,
 * //           NumberOfBuckets: Number("int"),
 * //           SerdeInfo: { // SerDeInfo
 * //             Name: "STRING_VALUE",
 * //             SerializationLibrary: "STRING_VALUE",
 * //             Parameters: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           BucketColumns: [ // NameStringList
 * //             "STRING_VALUE",
 * //           ],
 * //           SortColumns: [ // OrderList
 * //             { // Order
 * //               Column: "STRING_VALUE", // required
 * //               SortOrder: Number("int"), // required
 * //             },
 * //           ],
 * //           Parameters: "<ParametersMap>",
 * //           SkewedInfo: { // SkewedInfo
 * //             SkewedColumnNames: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SkewedColumnValues: [ // ColumnValueStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             SkewedColumnValueLocationMaps: { // LocationMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           StoredAsSubDirectories: true || false,
 * //           SchemaReference: { // SchemaReference
 * //             SchemaId: { // SchemaId
 * //               SchemaArn: "STRING_VALUE",
 * //               SchemaName: "STRING_VALUE",
 * //               RegistryName: "STRING_VALUE",
 * //             },
 * //             SchemaVersionId: "STRING_VALUE",
 * //             SchemaVersionNumber: Number("long"),
 * //           },
 * //         },
 * //         PartitionKeys: [
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //             Type: "STRING_VALUE",
 * //             Comment: "STRING_VALUE",
 * //             Parameters: "<ParametersMap>",
 * //           },
 * //         ],
 * //         ViewOriginalText: "STRING_VALUE",
 * //         ViewExpandedText: "STRING_VALUE",
 * //         TableType: "STRING_VALUE",
 * //         Parameters: "<ParametersMap>",
 * //         CreatedBy: "STRING_VALUE",
 * //         IsRegisteredWithLakeFormation: true || false,
 * //         TargetTable: { // TableIdentifier
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //         CatalogId: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //         FederatedTable: { // FederatedTable
 * //           Identifier: "STRING_VALUE",
 * //           DatabaseIdentifier: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           ConnectionType: "STRING_VALUE",
 * //         },
 * //         ViewDefinition: { // ViewDefinition
 * //           IsProtected: true || false,
 * //           Definer: "STRING_VALUE",
 * //           SubObjects: [ // ViewSubObjectsList
 * //             "STRING_VALUE",
 * //           ],
 * //           Representations: [ // ViewRepresentationList
 * //             { // ViewRepresentation
 * //               Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //               DialectVersion: "STRING_VALUE",
 * //               ViewOriginalText: "STRING_VALUE",
 * //               ViewExpandedText: "STRING_VALUE",
 * //               ValidationConnection: "STRING_VALUE",
 * //               IsStale: true || false,
 * //             },
 * //           ],
 * //         },
 * //         IsMultiDialectView: true || false,
 * //         Status: { // TableStatus
 * //           RequestedBy: "STRING_VALUE",
 * //           UpdatedBy: "STRING_VALUE",
 * //           RequestTime: new Date("TIMESTAMP"),
 * //           UpdateTime: new Date("TIMESTAMP"),
 * //           Action: "UPDATE" || "CREATE",
 * //           State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //           Error: { // ErrorDetail
 * //             ErrorCode: "STRING_VALUE",
 * //             ErrorMessage: "STRING_VALUE",
 * //           },
 * //           Details: { // StatusDetails
 * //             RequestedChange: {
 * //               Name: "STRING_VALUE", // required
 * //               DatabaseName: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               Owner: "STRING_VALUE",
 * //               CreateTime: new Date("TIMESTAMP"),
 * //               UpdateTime: new Date("TIMESTAMP"),
 * //               LastAccessTime: new Date("TIMESTAMP"),
 * //               LastAnalyzedTime: new Date("TIMESTAMP"),
 * //               Retention: Number("int"),
 * //               StorageDescriptor: {
 * //                 Columns: "<ColumnList>",
 * //                 Location: "STRING_VALUE",
 * //                 AdditionalLocations: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 InputFormat: "STRING_VALUE",
 * //                 OutputFormat: "STRING_VALUE",
 * //                 Compressed: true || false,
 * //                 NumberOfBuckets: Number("int"),
 * //                 SerdeInfo: {
 * //                   Name: "STRING_VALUE",
 * //                   SerializationLibrary: "STRING_VALUE",
 * //                   Parameters: "<ParametersMap>",
 * //                 },
 * //                 BucketColumns: "<NameStringList>",
 * //                 SortColumns: [
 * //                   {
 * //                     Column: "STRING_VALUE", // required
 * //                     SortOrder: Number("int"), // required
 * //                   },
 * //                 ],
 * //                 Parameters: "<ParametersMap>",
 * //                 SkewedInfo: {
 * //                   SkewedColumnNames: "<NameStringList>",
 * //                   SkewedColumnValues: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   SkewedColumnValueLocationMaps: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 StoredAsSubDirectories: true || false,
 * //                 SchemaReference: {
 * //                   SchemaId: {
 * //                     SchemaArn: "STRING_VALUE",
 * //                     SchemaName: "STRING_VALUE",
 * //                     RegistryName: "STRING_VALUE",
 * //                   },
 * //                   SchemaVersionId: "STRING_VALUE",
 * //                   SchemaVersionNumber: Number("long"),
 * //                 },
 * //               },
 * //               PartitionKeys: "<ColumnList>",
 * //               ViewOriginalText: "STRING_VALUE",
 * //               ViewExpandedText: "STRING_VALUE",
 * //               TableType: "STRING_VALUE",
 * //               Parameters: "<ParametersMap>",
 * //               CreatedBy: "STRING_VALUE",
 * //               IsRegisteredWithLakeFormation: true || false,
 * //               TargetTable: {
 * //                 CatalogId: "STRING_VALUE",
 * //                 DatabaseName: "STRING_VALUE",
 * //                 Name: "STRING_VALUE",
 * //                 Region: "STRING_VALUE",
 * //               },
 * //               CatalogId: "STRING_VALUE",
 * //               VersionId: "STRING_VALUE",
 * //               FederatedTable: {
 * //                 Identifier: "STRING_VALUE",
 * //                 DatabaseIdentifier: "STRING_VALUE",
 * //                 ConnectionName: "STRING_VALUE",
 * //                 ConnectionType: "STRING_VALUE",
 * //               },
 * //               ViewDefinition: {
 * //                 IsProtected: true || false,
 * //                 Definer: "STRING_VALUE",
 * //                 SubObjects: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Representations: [
 * //                   {
 * //                     Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                     DialectVersion: "STRING_VALUE",
 * //                     ViewOriginalText: "STRING_VALUE",
 * //                     ViewExpandedText: "STRING_VALUE",
 * //                     ValidationConnection: "STRING_VALUE",
 * //                     IsStale: true || false,
 * //                   },
 * //                 ],
 * //               },
 * //               IsMultiDialectView: true || false,
 * //               Status: {
 * //                 RequestedBy: "STRING_VALUE",
 * //                 UpdatedBy: "STRING_VALUE",
 * //                 RequestTime: new Date("TIMESTAMP"),
 * //                 UpdateTime: new Date("TIMESTAMP"),
 * //                 Action: "UPDATE" || "CREATE",
 * //                 State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //                 Error: {
 * //                   ErrorCode: "STRING_VALUE",
 * //                   ErrorMessage: "STRING_VALUE",
 * //                 },
 * //                 Details: {
 * //                   RequestedChange: "<Table>",
 * //                   ViewValidations: [ // ViewValidationList
 * //                     { // ViewValidation
 * //                       Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                       DialectVersion: "STRING_VALUE",
 * //                       ViewValidationText: "STRING_VALUE",
 * //                       UpdateTime: new Date("TIMESTAMP"),
 * //                       State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //                       Error: "<ErrorDetail>",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //             ViewValidations: [
 * //               {
 * //                 Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                 DialectVersion: "STRING_VALUE",
 * //                 ViewValidationText: "STRING_VALUE",
 * //                 UpdateTime: new Date("TIMESTAMP"),
 * //                 State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //                 Error: "<ErrorDetail>",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       VersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTableVersionsCommandInput - {@link GetTableVersionsCommandInput}
 * @returns {@link GetTableVersionsCommandOutput}
 * @see {@link GetTableVersionsCommandInput} for command's `input` shape.
 * @see {@link GetTableVersionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
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
export class GetTableVersionsCommand extends $Command
  .classBuilder<
    GetTableVersionsCommandInput,
    GetTableVersionsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetTableVersions", {})
  .n("GlueClient", "GetTableVersionsCommand")
  .sc(GetTableVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableVersionsRequest;
      output: GetTableVersionsResponse;
    };
    sdk: {
      input: GetTableVersionsCommandInput;
      output: GetTableVersionsCommandOutput;
    };
  };
}
