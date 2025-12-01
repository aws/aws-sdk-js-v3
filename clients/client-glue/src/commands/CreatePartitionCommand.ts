// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { CreatePartitionRequest, CreatePartitionResponse } from "../models/models_1";
import { CreatePartition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePartitionCommand}.
 */
export interface CreatePartitionCommandInput extends CreatePartitionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartitionCommand}.
 */
export interface CreatePartitionCommandOutput extends CreatePartitionResponse, __MetadataBearer {}

/**
 * <p>Creates a new partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreatePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionInput: { // PartitionInput
 *     Values: [ // ValueStringList
 *       "STRING_VALUE",
 *     ],
 *     LastAccessTime: new Date("TIMESTAMP"),
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
 *     Parameters: "<ParametersMap>",
 *     LastAnalyzedTime: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new CreatePartitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePartitionCommandInput - {@link CreatePartitionCommandInput}
 * @returns {@link CreatePartitionCommandOutput}
 * @see {@link CreatePartitionCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreatePartitionCommand extends $Command
  .classBuilder<
    CreatePartitionCommandInput,
    CreatePartitionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreatePartition", {})
  .n("GlueClient", "CreatePartitionCommand")
  .sc(CreatePartition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePartitionRequest;
      output: {};
    };
    sdk: {
      input: CreatePartitionCommandInput;
      output: CreatePartitionCommandOutput;
    };
  };
}
