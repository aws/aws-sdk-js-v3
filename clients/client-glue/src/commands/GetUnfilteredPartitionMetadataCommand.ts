// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUnfilteredPartitionMetadataRequest, GetUnfilteredPartitionMetadataResponse } from "../models/models_2";
import { GetUnfilteredPartitionMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUnfilteredPartitionMetadataCommand}.
 */
export interface GetUnfilteredPartitionMetadataCommandInput extends GetUnfilteredPartitionMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetUnfilteredPartitionMetadataCommand}.
 */
export interface GetUnfilteredPartitionMetadataCommandOutput
  extends GetUnfilteredPartitionMetadataResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered
 *           metadata.</p>
 *          <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUnfilteredPartitionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUnfilteredPartitionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetUnfilteredPartitionMetadataRequest
 *   Region: "STRING_VALUE",
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *     RequestedColumns: [ // AuditColumnNamesList
 *       "STRING_VALUE",
 *     ],
 *     AllColumnsRequested: true || false,
 *   },
 *   SupportedPermissionTypes: [ // PermissionTypeList // required
 *     "COLUMN_PERMISSION" || "CELL_FILTER_PERMISSION" || "NESTED_PERMISSION" || "NESTED_CELL_PERMISSION",
 *   ],
 *   QuerySessionContext: { // QuerySessionContext
 *     QueryId: "STRING_VALUE",
 *     QueryStartTime: new Date("TIMESTAMP"),
 *     ClusterId: "STRING_VALUE",
 *     QueryAuthorizationId: "STRING_VALUE",
 *     AdditionalContext: { // AdditionalContextMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetUnfilteredPartitionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetUnfilteredPartitionMetadataResponse
 * //   Partition: { // Partition
 * //     Values: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     DatabaseName: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastAccessTime: new Date("TIMESTAMP"),
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
 * //     Parameters: "<ParametersMap>",
 * //     LastAnalyzedTime: new Date("TIMESTAMP"),
 * //     CatalogId: "STRING_VALUE",
 * //   },
 * //   AuthorizedColumns: "<NameStringList>",
 * //   IsRegisteredWithLakeFormation: true || false,
 * // };
 *
 * ```
 *
 * @param GetUnfilteredPartitionMetadataCommandInput - {@link GetUnfilteredPartitionMetadataCommandInput}
 * @returns {@link GetUnfilteredPartitionMetadataCommandOutput}
 * @see {@link GetUnfilteredPartitionMetadataCommandInput} for command's `input` shape.
 * @see {@link GetUnfilteredPartitionMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link PermissionTypeMismatchException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetUnfilteredPartitionMetadataCommand extends $Command
  .classBuilder<
    GetUnfilteredPartitionMetadataCommandInput,
    GetUnfilteredPartitionMetadataCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetUnfilteredPartitionMetadata", {})
  .n("GlueClient", "GetUnfilteredPartitionMetadataCommand")
  .sc(GetUnfilteredPartitionMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUnfilteredPartitionMetadataRequest;
      output: GetUnfilteredPartitionMetadataResponse;
    };
    sdk: {
      input: GetUnfilteredPartitionMetadataCommandInput;
      output: GetUnfilteredPartitionMetadataCommandOutput;
    };
  };
}
