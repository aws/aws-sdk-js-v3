// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTableInput, DescribeTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeTableCommand,
  serializeAws_json1_0DescribeTableCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DescribeTableCommand}.
 */
export interface DescribeTableCommandInput extends DescribeTableInput {}
/**
 * @public
 *
 * The output of {@link DescribeTableCommand}.
 */
export interface DescribeTableCommandOutput extends DescribeTableOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the table, including the current status of the table, when
 *             it was created, the primary key schema, and any indexes on the table.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 of global tables.
 *             </p>
 *          </important>
 *          <note>
 *             <p>If you issue a <code>DescribeTable</code> request immediately after a
 *                     <code>CreateTable</code> request, DynamoDB might return a
 *                     <code>ResourceNotFoundException</code>. This is because
 *                     <code>DescribeTable</code> uses an eventually consistent query, and the metadata
 *                 for your table might not be available at that moment. Wait for a few seconds, and
 *                 then try the <code>DescribeTable</code> request again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeTableInput
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTableCommandInput - {@link DescribeTableCommandInput}
 * @returns {@link DescribeTableCommandOutput}
 * @see {@link DescribeTableCommandInput} for command's `input` shape.
 * @see {@link DescribeTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 *
 * @example To describe a table
 * ```javascript
 * // This example describes the Music table.
 * const input = {
 *   "TableName": "Music"
 * };
 * const command = new DescribeTableCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Table": {
 *     "AttributeDefinitions": [
 *       {
 *         "AttributeName": "Artist",
 *         "AttributeType": "S"
 *       },
 *       {
 *         "AttributeName": "SongTitle",
 *         "AttributeType": "S"
 *       }
 *     ],
 *     "CreationDateTime": "1421866952.062",
 *     "ItemCount": 0,
 *     "KeySchema": [
 *       {
 *         "AttributeName": "Artist",
 *         "KeyType": "HASH"
 *       },
 *       {
 *         "AttributeName": "SongTitle",
 *         "KeyType": "RANGE"
 *       }
 *     ],
 *     "ProvisionedThroughput": {
 *       "NumberOfDecreasesToday": 1,
 *       "ReadCapacityUnits": 5,
 *       "WriteCapacityUnits": 5
 *     },
 *     "TableName": "Music",
 *     "TableSizeBytes": 0,
 *     "TableStatus": "ACTIVE"
 *   }
 * }
 * *\/
 * // example id: to-describe-a-table-1475884440502
 * ```
 *
 */
export class DescribeTableCommand extends $Command<
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
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
  constructor(readonly input: DescribeTableCommandInput) {
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
  ): Handler<DescribeTableCommandInput, DescribeTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DescribeTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTableCommandOutput> {
    return deserializeAws_json1_0DescribeTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
