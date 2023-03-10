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

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import {
  DescribeStreamInput,
  DescribeStreamInputFilterSensitiveLog,
  DescribeStreamOutput,
  DescribeStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeStreamCommand,
  serializeAws_json1_0DescribeStreamCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandInput extends DescribeStreamInput {}
/**
 * The output of {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandOutput extends DescribeStreamOutput, __MetadataBearer {}

/**
 * <p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p>
 *          <note>
 *             <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p>
 *          </note>
 *          <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the
 *         <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no
 *         <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream
 *       records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code>
 *       are present, then that shard is closed and can no longer receive more data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, DescribeStreamCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, DescribeStreamCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for DynamoDBStreamsClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource
 *             might not be specified correctly, or its status might not be
 *             <code>ACTIVE</code>.</p>
 *
 *
 * @example To describe a stream with a given stream ARN
 * ```javascript
 * // The following example describes a stream with a given stream ARN.
 * const input = {
 *   "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252"
 * };
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StreamDescription": {
 *     "CreationRequestDateTime": "Wed May 20 13:51:10 PDT 2015",
 *     "KeySchema": [
 *       {
 *         "AttributeName": "ForumName",
 *         "KeyType": "HASH"
 *       },
 *       {
 *         "AttributeName": "Subject",
 *         "KeyType": "RANGE"
 *       }
 *     ],
 *     "Shards": [
 *       {
 *         "SequenceNumberRange": {
 *           "EndingSequenceNumber": "20500000000000000910398",
 *           "StartingSequenceNumber": "20500000000000000910398"
 *         },
 *         "ShardId": "shardId-00000001414562045508-2bac9cd2"
 *       },
 *       {
 *         "ParentShardId": "shardId-00000001414562045508-2bac9cd2",
 *         "SequenceNumberRange": {
 *           "EndingSequenceNumber": "820400000000000001192334",
 *           "StartingSequenceNumber": "820400000000000001192334"
 *         },
 *         "ShardId": "shardId-00000001414576573621-f55eea83"
 *       },
 *       {
 *         "ParentShardId": "shardId-00000001414576573621-f55eea83",
 *         "SequenceNumberRange": {
 *           "EndingSequenceNumber": "1683700000000000001135967",
 *           "StartingSequenceNumber": "1683700000000000001135967"
 *         },
 *         "ShardId": "shardId-00000001414592258131-674fd923"
 *       },
 *       {
 *         "ParentShardId": "shardId-00000001414592258131-674fd923",
 *         "SequenceNumberRange": {
 *           "StartingSequenceNumber": "2574600000000000000935255"
 *         },
 *         "ShardId": "shardId-00000001414608446368-3a1afbaf"
 *       }
 *     ],
 *     "StreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252",
 *     "StreamLabel": "2015-05-20T20:51:10.252",
 *     "StreamStatus": "ENABLED",
 *     "StreamViewType": "NEW_AND_OLD_IMAGES",
 *     "TableName": "Forum"
 *   }
 * }
 * *\/
 * // example id: to-describe-a-stream-with-a-given-stream-arn-1473457835200
 * ```
 *
 */
export class DescribeStreamCommand extends $Command<
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
  DynamoDBStreamsClientResolvedConfig
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

  constructor(readonly input: DescribeStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBStreamsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStreamCommandInput, DescribeStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "DescribeStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStreamCommandOutput> {
    return deserializeAws_json1_0DescribeStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
