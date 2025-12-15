// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { UpdateTableRequest, UpdateTableResponse } from "../models/models_2";
import { UpdateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandInput extends UpdateTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandOutput extends UpdateTableResponse, __MetadataBearer {}

/**
 * <p>Updates a metadata table in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   TableInput: { // TableInput
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     Owner: "STRING_VALUE",
 *     LastAccessTime: new Date("TIMESTAMP"),
 *     LastAnalyzedTime: new Date("TIMESTAMP"),
 *     Retention: Number("int"),
 *     StorageDescriptor: { // StorageDescriptor
 *       Columns: [ // ColumnList
 *         { // Column
 *           Name: "STRING_VALUE", // required
 *           Type: "STRING_VALUE",
 *           Comment: "STRING_VALUE",
 *           Parameters: { // ParametersMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       Location: "STRING_VALUE",
 *       AdditionalLocations: [ // LocationStringList
 *         "STRING_VALUE",
 *       ],
 *       InputFormat: "STRING_VALUE",
 *       OutputFormat: "STRING_VALUE",
 *       Compressed: true || false,
 *       NumberOfBuckets: Number("int"),
 *       SerdeInfo: { // SerDeInfo
 *         Name: "STRING_VALUE",
 *         SerializationLibrary: "STRING_VALUE",
 *         Parameters: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       BucketColumns: [ // NameStringList
 *         "STRING_VALUE",
 *       ],
 *       SortColumns: [ // OrderList
 *         { // Order
 *           Column: "STRING_VALUE", // required
 *           SortOrder: Number("int"), // required
 *         },
 *       ],
 *       Parameters: "<ParametersMap>",
 *       SkewedInfo: { // SkewedInfo
 *         SkewedColumnNames: [
 *           "STRING_VALUE",
 *         ],
 *         SkewedColumnValues: [ // ColumnValueStringList
 *           "STRING_VALUE",
 *         ],
 *         SkewedColumnValueLocationMaps: { // LocationMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       StoredAsSubDirectories: true || false,
 *       SchemaReference: { // SchemaReference
 *         SchemaId: { // SchemaId
 *           SchemaArn: "STRING_VALUE",
 *           SchemaName: "STRING_VALUE",
 *           RegistryName: "STRING_VALUE",
 *         },
 *         SchemaVersionId: "STRING_VALUE",
 *         SchemaVersionNumber: Number("long"),
 *       },
 *     },
 *     PartitionKeys: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Type: "STRING_VALUE",
 *         Comment: "STRING_VALUE",
 *         Parameters: "<ParametersMap>",
 *       },
 *     ],
 *     ViewOriginalText: "STRING_VALUE",
 *     ViewExpandedText: "STRING_VALUE",
 *     TableType: "STRING_VALUE",
 *     Parameters: "<ParametersMap>",
 *     TargetTable: { // TableIdentifier
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
 *     ViewDefinition: { // ViewDefinitionInput
 *       IsProtected: true || false,
 *       Definer: "STRING_VALUE",
 *       Representations: [ // ViewRepresentationInputList
 *         { // ViewRepresentationInput
 *           Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 *           DialectVersion: "STRING_VALUE",
 *           ViewOriginalText: "STRING_VALUE",
 *           ValidationConnection: "STRING_VALUE",
 *           ViewExpandedText: "STRING_VALUE",
 *         },
 *       ],
 *       ViewVersionId: Number("long"),
 *       ViewVersionToken: "STRING_VALUE",
 *       RefreshSeconds: Number("long"),
 *       LastRefreshType: "FULL" || "INCREMENTAL",
 *       SubObjects: [ // ViewSubObjectsList
 *         "STRING_VALUE",
 *       ],
 *       SubObjectVersionIds: [ // ViewSubObjectVersionIdsList
 *         Number("long"),
 *       ],
 *     },
 *   },
 *   SkipArchive: true || false,
 *   TransactionId: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   ViewUpdateAction: "ADD" || "REPLACE" || "ADD_OR_REPLACE" || "DROP",
 *   Force: true || false,
 *   UpdateOpenTableFormatInput: { // UpdateOpenTableFormatInput
 *     UpdateIcebergInput: { // UpdateIcebergInput
 *       UpdateIcebergTableInput: { // UpdateIcebergTableInput
 *         Updates: [ // IcebergTableUpdateList // required
 *           { // IcebergTableUpdate
 *             Schema: { // IcebergSchema
 *               SchemaId: Number("int"),
 *               IdentifierFieldIds: [ // IntegerList
 *                 Number("int"),
 *               ],
 *               Type: "struct",
 *               Fields: [ // IcebergStructFieldList // required
 *                 { // IcebergStructField
 *                   Id: Number("int"), // required
 *                   Name: "STRING_VALUE", // required
 *                   Type: "DOCUMENT_VALUE", // required
 *                   Required: true || false, // required
 *                   Doc: "STRING_VALUE",
 *                   InitialDefault: "DOCUMENT_VALUE",
 *                   WriteDefault: "DOCUMENT_VALUE",
 *                 },
 *               ],
 *             },
 *             PartitionSpec: { // IcebergPartitionSpec
 *               Fields: [ // IcebergPartitionSpecFieldList // required
 *                 { // IcebergPartitionField
 *                   SourceId: Number("int"), // required
 *                   Transform: "STRING_VALUE", // required
 *                   Name: "STRING_VALUE", // required
 *                   FieldId: Number("int"),
 *                 },
 *               ],
 *               SpecId: Number("int"),
 *             },
 *             SortOrder: { // IcebergSortOrder
 *               OrderId: Number("int"), // required
 *               Fields: [ // IcebergSortOrderFieldList // required
 *                 { // IcebergSortField
 *                   SourceId: Number("int"), // required
 *                   Transform: "STRING_VALUE", // required
 *                   Direction: "asc" || "desc", // required
 *                   NullOrder: "nulls-first" || "nulls-last", // required
 *                 },
 *               ],
 *             },
 *             Location: "STRING_VALUE", // required
 *             Properties: { // StringToStringMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             Action: "add-schema" || "set-current-schema" || "add-spec" || "set-default-spec" || "add-sort-order" || "set-default-sort-order" || "set-location" || "set-properties" || "remove-properties" || "add-encryption-key" || "remove-encryption-key",
 *             EncryptionKey: { // IcebergEncryptedKey
 *               KeyId: "STRING_VALUE", // required
 *               EncryptedKeyMetadata: "STRING_VALUE", // required
 *               EncryptedById: "STRING_VALUE",
 *               Properties: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *             KeyId: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTableCommandInput - {@link UpdateTableCommandInput}
 * @returns {@link UpdateTableCommandOutput}
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateTableCommand extends $Command
  .classBuilder<
    UpdateTableCommandInput,
    UpdateTableCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateTable", {})
  .n("GlueClient", "UpdateTableCommand")
  .sc(UpdateTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableRequest;
      output: {};
    };
    sdk: {
      input: UpdateTableCommandInput;
      output: UpdateTableCommandOutput;
    };
  };
}
