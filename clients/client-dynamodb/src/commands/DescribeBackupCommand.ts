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
import { DescribeBackupInput, DescribeBackupOutput } from "../models/models_0";
import { de_DescribeBackupCommand, se_DescribeBackupCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupCommand}.
 */
export interface DescribeBackupCommandInput extends DescribeBackupInput {}
/**
 * @public
 *
 * The output of {@link DescribeBackupCommand}.
 */
export interface DescribeBackupCommandOutput extends DescribeBackupOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing backup of a table.</p>
 *          <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per
 *             second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeBackupInput
 *   BackupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBackupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupOutput
 * //   BackupDescription: { // BackupDescription
 * //     BackupDetails: { // BackupDetails
 * //       BackupArn: "STRING_VALUE", // required
 * //       BackupName: "STRING_VALUE", // required
 * //       BackupSizeBytes: Number("long"),
 * //       BackupStatus: "CREATING" || "DELETED" || "AVAILABLE", // required
 * //       BackupType: "USER" || "SYSTEM" || "AWS_BACKUP", // required
 * //       BackupCreationDateTime: new Date("TIMESTAMP"), // required
 * //       BackupExpiryDateTime: new Date("TIMESTAMP"),
 * //     },
 * //     SourceTableDetails: { // SourceTableDetails
 * //       TableName: "STRING_VALUE", // required
 * //       TableId: "STRING_VALUE", // required
 * //       TableArn: "STRING_VALUE",
 * //       TableSizeBytes: Number("long"),
 * //       KeySchema: [ // KeySchema // required
 * //         { // KeySchemaElement
 * //           AttributeName: "STRING_VALUE", // required
 * //           KeyType: "HASH" || "RANGE", // required
 * //         },
 * //       ],
 * //       TableCreationDateTime: new Date("TIMESTAMP"), // required
 * //       ProvisionedThroughput: { // ProvisionedThroughput
 * //         ReadCapacityUnits: Number("long"), // required
 * //         WriteCapacityUnits: Number("long"), // required
 * //       },
 * //       ItemCount: Number("long"),
 * //       BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 * //     },
 * //     SourceTableFeatureDetails: { // SourceTableFeatureDetails
 * //       LocalSecondaryIndexes: [ // LocalSecondaryIndexes
 * //         { // LocalSecondaryIndexInfo
 * //           IndexName: "STRING_VALUE",
 * //           KeySchema: [
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
 * //         },
 * //       ],
 * //       GlobalSecondaryIndexes: [ // GlobalSecondaryIndexes
 * //         { // GlobalSecondaryIndexInfo
 * //           IndexName: "STRING_VALUE",
 * //           KeySchema: [
 * //             {
 * //               AttributeName: "STRING_VALUE", // required
 * //               KeyType: "HASH" || "RANGE", // required
 * //             },
 * //           ],
 * //           Projection: {
 * //             ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 * //             NonKeyAttributes: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           ProvisionedThroughput: {
 * //             ReadCapacityUnits: Number("long"), // required
 * //             WriteCapacityUnits: Number("long"), // required
 * //           },
 * //         },
 * //       ],
 * //       StreamDescription: { // StreamSpecification
 * //         StreamEnabled: true || false, // required
 * //         StreamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY",
 * //       },
 * //       TimeToLiveDescription: { // TimeToLiveDescription
 * //         TimeToLiveStatus: "ENABLING" || "DISABLING" || "ENABLED" || "DISABLED",
 * //         AttributeName: "STRING_VALUE",
 * //       },
 * //       SSEDescription: { // SSEDescription
 * //         Status: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING",
 * //         SSEType: "AES256" || "KMS",
 * //         KMSMasterKeyArn: "STRING_VALUE",
 * //         InaccessibleEncryptionDateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBackupCommandInput - {@link DescribeBackupCommandInput}
 * @returns {@link DescribeBackupCommandOutput}
 * @see {@link DescribeBackupCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link BackupNotFoundException} (client fault)
 *  <p>Backup not found for the given BackupARN. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class DescribeBackupCommand extends $Command<
  DescribeBackupCommandInput,
  DescribeBackupCommandOutput,
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
  constructor(readonly input: DescribeBackupCommandInput) {
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
  ): Handler<DescribeBackupCommandInput, DescribeBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "DescribeBackup",
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
  private serialize(input: DescribeBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupCommandOutput> {
    return de_DescribeBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
