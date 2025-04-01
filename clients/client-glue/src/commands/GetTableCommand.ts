// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableRequest } from "../models/models_2";
import { GetTableResponse } from "../models/models_3";
import { de_GetTableCommand, se_GetTableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableCommand}.
 */
export interface GetTableCommandInput extends GetTableRequest {}
/**
 * @public
 *
 * The output of {@link GetTableCommand}.
 */
export interface GetTableCommandOutput extends GetTableResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <code>Table</code> definition in a Data Catalog for
 *       a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE",
 *   QueryAsOfTime: new Date("TIMESTAMP"),
 *   IncludeStatusDetails: true || false,
 * };
 * const command = new GetTableCommand(input);
 * const response = await client.send(command);
 * // { // GetTableResponse
 * //   Table: { // Table
 * //     Name: "STRING_VALUE", // required
 * //     DatabaseName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //     LastAccessTime: new Date("TIMESTAMP"),
 * //     LastAnalyzedTime: new Date("TIMESTAMP"),
 * //     Retention: Number("int"),
 * //     StorageDescriptor: { // StorageDescriptor
 * //       Columns: [ // ColumnList
 * //         { // Column
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //           Comment: "STRING_VALUE",
 * //           Parameters: { // ParametersMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Location: "STRING_VALUE",
 * //       AdditionalLocations: [ // LocationStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       InputFormat: "STRING_VALUE",
 * //       OutputFormat: "STRING_VALUE",
 * //       Compressed: true || false,
 * //       NumberOfBuckets: Number("int"),
 * //       SerdeInfo: { // SerDeInfo
 * //         Name: "STRING_VALUE",
 * //         SerializationLibrary: "STRING_VALUE",
 * //         Parameters: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       BucketColumns: [ // NameStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SortColumns: [ // OrderList
 * //         { // Order
 * //           Column: "STRING_VALUE", // required
 * //           SortOrder: Number("int"), // required
 * //         },
 * //       ],
 * //       Parameters: "<ParametersMap>",
 * //       SkewedInfo: { // SkewedInfo
 * //         SkewedColumnNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SkewedColumnValues: [ // ColumnValueStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         SkewedColumnValueLocationMaps: { // LocationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       StoredAsSubDirectories: true || false,
 * //       SchemaReference: { // SchemaReference
 * //         SchemaId: { // SchemaId
 * //           SchemaArn: "STRING_VALUE",
 * //           SchemaName: "STRING_VALUE",
 * //           RegistryName: "STRING_VALUE",
 * //         },
 * //         SchemaVersionId: "STRING_VALUE",
 * //         SchemaVersionNumber: Number("long"),
 * //       },
 * //     },
 * //     PartitionKeys: [
 * //       {
 * //         Name: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE",
 * //         Comment: "STRING_VALUE",
 * //         Parameters: "<ParametersMap>",
 * //       },
 * //     ],
 * //     ViewOriginalText: "STRING_VALUE",
 * //     ViewExpandedText: "STRING_VALUE",
 * //     TableType: "STRING_VALUE",
 * //     Parameters: "<ParametersMap>",
 * //     CreatedBy: "STRING_VALUE",
 * //     IsRegisteredWithLakeFormation: true || false,
 * //     TargetTable: { // TableIdentifier
 * //       CatalogId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     CatalogId: "STRING_VALUE",
 * //     VersionId: "STRING_VALUE",
 * //     FederatedTable: { // FederatedTable
 * //       Identifier: "STRING_VALUE",
 * //       DatabaseIdentifier: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //     },
 * //     ViewDefinition: { // ViewDefinition
 * //       IsProtected: true || false,
 * //       Definer: "STRING_VALUE",
 * //       SubObjects: [ // ViewSubObjectsList
 * //         "STRING_VALUE",
 * //       ],
 * //       Representations: [ // ViewRepresentationList
 * //         { // ViewRepresentation
 * //           Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //           DialectVersion: "STRING_VALUE",
 * //           ViewOriginalText: "STRING_VALUE",
 * //           ViewExpandedText: "STRING_VALUE",
 * //           ValidationConnection: "STRING_VALUE",
 * //           IsStale: true || false,
 * //         },
 * //       ],
 * //     },
 * //     IsMultiDialectView: true || false,
 * //     Status: { // TableStatus
 * //       RequestedBy: "STRING_VALUE",
 * //       UpdatedBy: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       UpdateTime: new Date("TIMESTAMP"),
 * //       Action: "UPDATE" || "CREATE",
 * //       State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //       Error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       Details: { // StatusDetails
 * //         RequestedChange: {
 * //           Name: "STRING_VALUE", // required
 * //           DatabaseName: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Owner: "STRING_VALUE",
 * //           CreateTime: new Date("TIMESTAMP"),
 * //           UpdateTime: new Date("TIMESTAMP"),
 * //           LastAccessTime: new Date("TIMESTAMP"),
 * //           LastAnalyzedTime: new Date("TIMESTAMP"),
 * //           Retention: Number("int"),
 * //           StorageDescriptor: {
 * //             Columns: "<ColumnList>",
 * //             Location: "STRING_VALUE",
 * //             AdditionalLocations: [
 * //               "STRING_VALUE",
 * //             ],
 * //             InputFormat: "STRING_VALUE",
 * //             OutputFormat: "STRING_VALUE",
 * //             Compressed: true || false,
 * //             NumberOfBuckets: Number("int"),
 * //             SerdeInfo: {
 * //               Name: "STRING_VALUE",
 * //               SerializationLibrary: "STRING_VALUE",
 * //               Parameters: "<ParametersMap>",
 * //             },
 * //             BucketColumns: "<NameStringList>",
 * //             SortColumns: [
 * //               {
 * //                 Column: "STRING_VALUE", // required
 * //                 SortOrder: Number("int"), // required
 * //               },
 * //             ],
 * //             Parameters: "<ParametersMap>",
 * //             SkewedInfo: {
 * //               SkewedColumnNames: "<NameStringList>",
 * //               SkewedColumnValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               SkewedColumnValueLocationMaps: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             StoredAsSubDirectories: true || false,
 * //             SchemaReference: {
 * //               SchemaId: {
 * //                 SchemaArn: "STRING_VALUE",
 * //                 SchemaName: "STRING_VALUE",
 * //                 RegistryName: "STRING_VALUE",
 * //               },
 * //               SchemaVersionId: "STRING_VALUE",
 * //               SchemaVersionNumber: Number("long"),
 * //             },
 * //           },
 * //           PartitionKeys: "<ColumnList>",
 * //           ViewOriginalText: "STRING_VALUE",
 * //           ViewExpandedText: "STRING_VALUE",
 * //           TableType: "STRING_VALUE",
 * //           Parameters: "<ParametersMap>",
 * //           CreatedBy: "STRING_VALUE",
 * //           IsRegisteredWithLakeFormation: true || false,
 * //           TargetTable: {
 * //             CatalogId: "STRING_VALUE",
 * //             DatabaseName: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //             Region: "STRING_VALUE",
 * //           },
 * //           CatalogId: "STRING_VALUE",
 * //           VersionId: "STRING_VALUE",
 * //           FederatedTable: {
 * //             Identifier: "STRING_VALUE",
 * //             DatabaseIdentifier: "STRING_VALUE",
 * //             ConnectionName: "STRING_VALUE",
 * //           },
 * //           ViewDefinition: {
 * //             IsProtected: true || false,
 * //             Definer: "STRING_VALUE",
 * //             SubObjects: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Representations: [
 * //               {
 * //                 Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                 DialectVersion: "STRING_VALUE",
 * //                 ViewOriginalText: "STRING_VALUE",
 * //                 ViewExpandedText: "STRING_VALUE",
 * //                 ValidationConnection: "STRING_VALUE",
 * //                 IsStale: true || false,
 * //               },
 * //             ],
 * //           },
 * //           IsMultiDialectView: true || false,
 * //           Status: {
 * //             RequestedBy: "STRING_VALUE",
 * //             UpdatedBy: "STRING_VALUE",
 * //             RequestTime: new Date("TIMESTAMP"),
 * //             UpdateTime: new Date("TIMESTAMP"),
 * //             Action: "UPDATE" || "CREATE",
 * //             State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //             Error: {
 * //               ErrorCode: "STRING_VALUE",
 * //               ErrorMessage: "STRING_VALUE",
 * //             },
 * //             Details: {
 * //               RequestedChange: "<Table>",
 * //               ViewValidations: [ // ViewValidationList
 * //                 { // ViewValidation
 * //                   Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //                   DialectVersion: "STRING_VALUE",
 * //                   ViewValidationText: "STRING_VALUE",
 * //                   UpdateTime: new Date("TIMESTAMP"),
 * //                   State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //                   Error: "<ErrorDetail>",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //         ViewValidations: [
 * //           {
 * //             Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //             DialectVersion: "STRING_VALUE",
 * //             ViewValidationText: "STRING_VALUE",
 * //             UpdateTime: new Date("TIMESTAMP"),
 * //             State: "QUEUED" || "IN_PROGRESS" || "SUCCESS" || "STOPPED" || "FAILED",
 * //             Error: "<ErrorDetail>",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableCommandInput - {@link GetTableCommandInput}
 * @returns {@link GetTableCommandOutput}
 * @see {@link GetTableCommandInput} for command's `input` shape.
 * @see {@link GetTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link FederationSourceRetryableException} (client fault)
 *  <p>A federation source failed, but the operation may be retried.</p>
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
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>A resource was not ready for a transaction.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetTableCommand extends $Command
  .classBuilder<
    GetTableCommandInput,
    GetTableCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetTable", {})
  .n("GlueClient", "GetTableCommand")
  .f(void 0, void 0)
  .ser(se_GetTableCommand)
  .de(de_GetTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRequest;
      output: GetTableResponse;
    };
    sdk: {
      input: GetTableCommandInput;
      output: GetTableCommandOutput;
    };
  };
}
