// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableVersionRequest, GetTableVersionResponse } from "../models/models_2";
import { de_GetTableVersionCommand, se_GetTableVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableVersionCommand}.
 */
export interface GetTableVersionCommandInput extends GetTableVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetTableVersionCommand}.
 */
export interface GetTableVersionCommandOutput extends GetTableVersionResponse, __MetadataBearer {}

/**
 * <p>Retrieves a specified version of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetTableVersionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 * };
 * const command = new GetTableVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetTableVersionResponse
 * //   TableVersion: { // TableVersion
 * //     Table: { // Table
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
 * //       },
 * //       ViewDefinition: { // ViewDefinition
 * //         IsProtected: true || false,
 * //         Definer: "STRING_VALUE",
 * //         SubObjects: [ // ViewSubObjectsList
 * //           "STRING_VALUE",
 * //         ],
 * //         Representations: [ // ViewRepresentationList
 * //           { // ViewRepresentation
 * //             Dialect: "REDSHIFT" || "ATHENA" || "SPARK",
 * //             DialectVersion: "STRING_VALUE",
 * //             ViewOriginalText: "STRING_VALUE",
 * //             ViewExpandedText: "STRING_VALUE",
 * //             IsStale: true || false,
 * //           },
 * //         ],
 * //       },
 * //       IsMultiDialectView: true || false,
 * //     },
 * //     VersionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableVersionCommandInput - {@link GetTableVersionCommandInput}
 * @returns {@link GetTableVersionCommandOutput}
 * @see {@link GetTableVersionCommandInput} for command's `input` shape.
 * @see {@link GetTableVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetTableVersionCommand extends $Command
  .classBuilder<
    GetTableVersionCommandInput,
    GetTableVersionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetTableVersion", {})
  .n("GlueClient", "GetTableVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetTableVersionCommand)
  .de(de_GetTableVersionCommand)
  .build() {}
