// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetPartitionRequest, GetPartitionResponse } from "../models/models_2";
import { GetPartition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPartitionCommand}.
 */
export interface GetPartitionCommandInput extends GetPartitionRequest {}
/**
 * @public
 *
 * The output of {@link GetPartitionCommand}.
 */
export interface GetPartitionCommandOutput extends GetPartitionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specified partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetPartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetPartitionCommand(input);
 * const response = await client.send(command);
 * // { // GetPartitionResponse
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
 * // };
 *
 * ```
 *
 * @param GetPartitionCommandInput - {@link GetPartitionCommandInput}
 * @returns {@link GetPartitionCommandOutput}
 * @see {@link GetPartitionCommandInput} for command's `input` shape.
 * @see {@link GetPartitionCommandOutput} for command's `response` shape.
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetPartitionCommand extends $Command
  .classBuilder<
    GetPartitionCommandInput,
    GetPartitionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetPartition", {})
  .n("GlueClient", "GetPartitionCommand")
  .sc(GetPartition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPartitionRequest;
      output: GetPartitionResponse;
    };
    sdk: {
      input: GetPartitionCommandInput;
      output: GetPartitionCommandOutput;
    };
  };
}
