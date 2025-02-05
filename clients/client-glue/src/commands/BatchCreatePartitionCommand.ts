// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchCreatePartitionRequest, BatchCreatePartitionResponse } from "../models/models_0";
import { de_BatchCreatePartitionCommand, se_BatchCreatePartitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchCreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchCreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class BatchCreatePartitionCommand extends $Command
  .classBuilder<
    BatchCreatePartitionCommandInput,
    BatchCreatePartitionCommandOutput,
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
  .s("AWSGlue", "BatchCreatePartition", {})
  .n("GlueClient", "BatchCreatePartitionCommand")
  .f(void 0, void 0)
  .ser(se_BatchCreatePartitionCommand)
  .de(de_BatchCreatePartitionCommand)
  .build() {
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
