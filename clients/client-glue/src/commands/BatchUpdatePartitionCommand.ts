// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchUpdatePartitionRequest, BatchUpdatePartitionResponse } from "../models/models_0";
import { de_BatchUpdatePartitionCommand, se_BatchUpdatePartitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchUpdatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchUpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 */
export class BatchUpdatePartitionCommand extends $Command<
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
  GlueClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: BatchUpdatePartitionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdatePartitionCommandInput, BatchUpdatePartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdatePartitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchUpdatePartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "BatchUpdatePartition",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchUpdatePartitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdatePartitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdatePartitionCommandOutput> {
    return de_BatchUpdatePartitionCommand(output, context);
  }
}
