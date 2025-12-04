// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { BatchUpdatePartitionRequest, BatchUpdatePartitionResponse } from "../models/models_0";
import { BatchUpdatePartition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdatePartitionCommand}.
 */
export interface BatchUpdatePartitionCommandInput extends BatchUpdatePartitionRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdatePartitionCommand}.
 */
export interface BatchUpdatePartitionCommandOutput extends BatchUpdatePartitionResponse, __MetadataBearer {}

/**
 * <p>Updates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchUpdatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchUpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchUpdatePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Entries: [ // BatchUpdatePartitionRequestEntryList // required
 *     { // BatchUpdatePartitionRequestEntry
 *       PartitionValueList: [ // BoundedPartitionValueList // required
 *         "STRING_VALUE",
 *       ],
 *       PartitionInput: { // PartitionInput
 *         Values: [ // ValueStringList
 *           "STRING_VALUE",
 *         ],
 *         LastAccessTime: new Date("TIMESTAMP"),
 *         StorageDescriptor: { // StorageDescriptor
 *           Columns: [ // ColumnList
 *             { // Column
 *               Name: "STRING_VALUE", // required
 *               Type: "STRING_VALUE",
 *               Comment: "STRING_VALUE",
 *               Parameters: { // ParametersMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           Location: "STRING_VALUE",
 *           AdditionalLocations: [ // LocationStringList
 *             "STRING_VALUE",
 *           ],
 *           InputFormat: "STRING_VALUE",
 *           OutputFormat: "STRING_VALUE",
 *           Compressed: true || false,
 *           NumberOfBuckets: Number("int"),
 *           SerdeInfo: { // SerDeInfo
 *             Name: "STRING_VALUE",
 *             SerializationLibrary: "STRING_VALUE",
 *             Parameters: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           BucketColumns: [ // NameStringList
 *             "STRING_VALUE",
 *           ],
 *           SortColumns: [ // OrderList
 *             { // Order
 *               Column: "STRING_VALUE", // required
 *               SortOrder: Number("int"), // required
 *             },
 *           ],
 *           Parameters: "<ParametersMap>",
 *           SkewedInfo: { // SkewedInfo
 *             SkewedColumnNames: [
 *               "STRING_VALUE",
 *             ],
 *             SkewedColumnValues: [ // ColumnValueStringList
 *               "STRING_VALUE",
 *             ],
 *             SkewedColumnValueLocationMaps: { // LocationMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           StoredAsSubDirectories: true || false,
 *           SchemaReference: { // SchemaReference
 *             SchemaId: { // SchemaId
 *               SchemaArn: "STRING_VALUE",
 *               SchemaName: "STRING_VALUE",
 *               RegistryName: "STRING_VALUE",
 *             },
 *             SchemaVersionId: "STRING_VALUE",
 *             SchemaVersionNumber: Number("long"),
 *           },
 *         },
 *         Parameters: "<ParametersMap>",
 *         LastAnalyzedTime: new Date("TIMESTAMP"),
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchUpdatePartitionCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdatePartitionResponse
 * //   Errors: [ // BatchUpdatePartitionFailureList
 * //     { // BatchUpdatePartitionFailureEntry
 * //       PartitionValueList: [ // BoundedPartitionValueList
 * //         "STRING_VALUE",
 * //       ],
 * //       ErrorDetail: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdatePartitionCommandInput - {@link BatchUpdatePartitionCommandInput}
 * @returns {@link BatchUpdatePartitionCommandOutput}
 * @see {@link BatchUpdatePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePartitionCommandOutput} for command's `response` shape.
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
export class BatchUpdatePartitionCommand extends $Command
  .classBuilder<
    BatchUpdatePartitionCommandInput,
    BatchUpdatePartitionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchUpdatePartition", {})
  .n("GlueClient", "BatchUpdatePartitionCommand")
  .sc(BatchUpdatePartition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdatePartitionRequest;
      output: BatchUpdatePartitionResponse;
    };
    sdk: {
      input: BatchUpdatePartitionCommandInput;
      output: BatchUpdatePartitionCommandOutput;
    };
  };
}
