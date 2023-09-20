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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeImportInput, DescribeImportOutput } from "../models/models_0";
import { de_DescribeImportCommand, se_DescribeImportCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportCommand}.
 */
export interface DescribeImportCommandInput extends DescribeImportInput {}
/**
 * @public
 *
 * The output of {@link DescribeImportCommand}.
 */
export interface DescribeImportCommandOutput extends DescribeImportOutput, __MetadataBearer {}

/**
 * @public
 * <p> Represents the properties of the import. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeImportCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeImportCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeImportInput
 *   ImportArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeImportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportOutput
 * //   ImportTableDescription: { // ImportTableDescription
 * //     ImportArn: "STRING_VALUE",
 * //     ImportStatus: "IN_PROGRESS" || "COMPLETED" || "CANCELLING" || "CANCELLED" || "FAILED",
 * //     TableArn: "STRING_VALUE",
 * //     TableId: "STRING_VALUE",
 * //     ClientToken: "STRING_VALUE",
 * //     S3BucketSource: { // S3BucketSource
 * //       S3BucketOwner: "STRING_VALUE",
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3KeyPrefix: "STRING_VALUE",
 * //     },
 * //     ErrorCount: Number("long"),
 * //     CloudWatchLogGroupArn: "STRING_VALUE",
 * //     InputFormat: "DYNAMODB_JSON" || "ION" || "CSV",
 * //     InputFormatOptions: { // InputFormatOptions
 * //       Csv: { // CsvOptions
 * //         Delimiter: "STRING_VALUE",
 * //         HeaderList: [ // CsvHeaderList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     InputCompressionType: "GZIP" || "ZSTD" || "NONE",
 * //     TableCreationParameters: { // TableCreationParameters
 * //       TableName: "STRING_VALUE", // required
 * //       AttributeDefinitions: [ // AttributeDefinitions // required
 * //         { // AttributeDefinition
 * //           AttributeName: "STRING_VALUE", // required
 * //           AttributeType: "S" || "N" || "B", // required
 * //         },
 * //       ],
 * //       KeySchema: [ // KeySchema // required
 * //         { // KeySchemaElement
 * //           AttributeName: "STRING_VALUE", // required
 * //           KeyType: "HASH" || "RANGE", // required
 * //         },
 * //       ],
 * //       BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 * //       ProvisionedThroughput: { // ProvisionedThroughput
 * //         ReadCapacityUnits: Number("long"), // required
 * //         WriteCapacityUnits: Number("long"), // required
 * //       },
 * //       SSESpecification: { // SSESpecification
 * //         Enabled: true || false,
 * //         SSEType: "AES256" || "KMS",
 * //         KMSMasterKeyId: "STRING_VALUE",
 * //       },
 * //       GlobalSecondaryIndexes: [ // GlobalSecondaryIndexList
 * //         { // GlobalSecondaryIndex
 * //           IndexName: "STRING_VALUE", // required
 * //           KeySchema: [ // required
 * //             {
 * //               AttributeName: "STRING_VALUE", // required
 * //               KeyType: "HASH" || "RANGE", // required
 * //             },
 * //           ],
 * //           Projection: { // Projection
 * //             ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 * //             NonKeyAttributes: [ // NonKeyAttributeNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           ProvisionedThroughput: {
 * //             ReadCapacityUnits: Number("long"), // required
 * //             WriteCapacityUnits: Number("long"), // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ProcessedSizeBytes: Number("long"),
 * //     ProcessedItemCount: Number("long"),
 * //     ImportedItemCount: Number("long"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeImportCommandInput - {@link DescribeImportCommandInput}
 * @returns {@link DescribeImportCommandOutput}
 * @see {@link DescribeImportCommandInput} for command's `input` shape.
 * @see {@link DescribeImportCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link ImportNotFoundException} (client fault)
 *  <p>
 *             The specified import was not found.
 *             </p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class DescribeImportCommand extends $Command<
  DescribeImportCommandInput,
  DescribeImportCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: DescribeImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImportCommandInput, DescribeImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeImportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "DescribeImport",
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
  private serialize(input: DescribeImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImportCommandOutput> {
    return de_DescribeImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
