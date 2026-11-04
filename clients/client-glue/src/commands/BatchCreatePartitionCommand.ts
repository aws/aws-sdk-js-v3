// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreatePartitionRequest, BatchCreatePartitionResponse } from "../models/models_0";
import { BatchCreatePartition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreatePartitionCommand}.
 */
export interface BatchCreatePartitionCommandInput extends BatchCreatePartitionRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreatePartitionCommand}.
 */
export interface BatchCreatePartitionCommandOutput extends BatchCreatePartitionResponse, __MetadataBearer {}

/**
 * Creates one or more partitions in a batch operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchCreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchCreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchCreatePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionInputList: [ // PartitionInputList // required
 *     { // PartitionInput
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *       LastAccessTime: new Date("TIMESTAMP"),
 *       StorageDescriptor: { // StorageDescriptor
 *         Columns: [ // ColumnList
 *           { // Column
 *             Name: "STRING_VALUE", // required
 *             Type: "STRING_VALUE",
 *             Comment: "STRING_VALUE",
 *             Parameters: { // ParametersMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         Location: "STRING_VALUE",
 *         AdditionalLocations: [ // LocationStringList
 *           "STRING_VALUE",
 *         ],
 *         InputFormat: "STRING_VALUE",
 *         OutputFormat: "STRING_VALUE",
 *         Compressed: true || false,
 *         NumberOfBuckets: Number("int"),
 *         SerdeInfo: { // SerDeInfo
 *           Name: "STRING_VALUE",
 *           SerializationLibrary: "STRING_VALUE",
 *           Parameters: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         BucketColumns: [ // NameStringList
 *           "STRING_VALUE",
 *         ],
 *         SortColumns: [ // OrderList
 *           { // Order
 *             Column: "STRING_VALUE", // required
 *             SortOrder: Number("int"), // required
 *           },
 *         ],
 *         Parameters: "<ParametersMap>",
 *         SkewedInfo: { // SkewedInfo
 *           SkewedColumnNames: [
 *             "STRING_VALUE",
 *           ],
 *           SkewedColumnValues: [ // ColumnValueStringList
 *             "STRING_VALUE",
 *           ],
 *           SkewedColumnValueLocationMaps: { // LocationMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         StoredAsSubDirectories: true || false,
 *         SchemaReference: { // SchemaReference
 *           SchemaId: { // SchemaId
 *             SchemaArn: "STRING_VALUE",
 *             SchemaName: "STRING_VALUE",
 *             RegistryName: "STRING_VALUE",
 *           },
 *           SchemaVersionId: "STRING_VALUE",
 *           SchemaVersionNumber: Number("long"),
 *         },
 *       },
 *       Parameters: "<ParametersMap>",
 *       LastAnalyzedTime: new Date("TIMESTAMP"),
 *     },
 *   ],
 * };
 * const command = new BatchCreatePartitionCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreatePartitionResponse
 * //   Errors: [ // PartitionErrors
 * //     { // PartitionError
 * //       PartitionValues: [ // ValueStringList
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
 * @param BatchCreatePartitionCommandInput - {@link BatchCreatePartitionCommandInput}
 * @returns {@link BatchCreatePartitionCommandOutput}
 * @see {@link BatchCreatePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchCreatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class BatchCreatePartitionCommand extends command<BatchCreatePartitionCommandInput, BatchCreatePartitionCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreatePartition",
  BatchCreatePartition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreatePartitionRequest;
      output: BatchCreatePartitionResponse;
    };
    sdk: {
      input: BatchCreatePartitionCommandInput;
      output: BatchCreatePartitionCommandOutput;
    };
  };
}
