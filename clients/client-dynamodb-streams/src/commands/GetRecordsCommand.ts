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
} from "@smithy/types";

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { de_GetRecordsCommand, se_GetRecordsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandInput extends GetRecordsInput {}
/**
 * @public
 *
 * The output of {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandOutput extends GetRecordsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the stream records from a given shard.</p>
 *          <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator
 *       specifies the position in the shard from which you want to start reading stream records
 *       sequentially. If there are no stream records available in the portion of the shard that the
 *       iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take
 *       multiple calls to get to a portion of the shard that contains stream records.</p>
 *          <note>
 *             <p>
 *                <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records,
 *         whichever comes first.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetRecordsCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetRecordsCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * const client = new DynamoDBStreamsClient(config);
 * const input = { // GetRecordsInput
 *   ShardIterator: "STRING_VALUE", // required
 *   Limit: Number("int"),
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordsOutput
 * //   Records: [ // RecordList
 * //     { // Record
 * //       eventID: "STRING_VALUE",
 * //       eventName: "INSERT" || "MODIFY" || "REMOVE",
 * //       eventVersion: "STRING_VALUE",
 * //       eventSource: "STRING_VALUE",
 * //       awsRegion: "STRING_VALUE",
 * //       dynamodb: { // StreamRecord
 * //         ApproximateCreationDateTime: new Date("TIMESTAMP"),
 * //         Keys: { // AttributeMap
 * //           "<keys>": { // AttributeValue Union: only one key present
 * //             S: "STRING_VALUE",
 * //             N: "STRING_VALUE",
 * //             B: "BLOB_VALUE",
 * //             SS: [ // StringSetAttributeValue
 * //               "STRING_VALUE",
 * //             ],
 * //             NS: [ // NumberSetAttributeValue
 * //               "STRING_VALUE",
 * //             ],
 * //             BS: [ // BinarySetAttributeValue
 * //               "BLOB_VALUE",
 * //             ],
 * //             M: { // MapAttributeValue
 * //               "<keys>": {//  Union: only one key present
 * //                 S: "STRING_VALUE",
 * //                 N: "STRING_VALUE",
 * //                 B: "BLOB_VALUE",
 * //                 SS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BS: [
 * //                   "BLOB_VALUE",
 * //                 ],
 * //                 M: {
 * //                   "<keys>": "<AttributeValue>",
 * //                 },
 * //                 L: [ // ListAttributeValue
 * //                   "<AttributeValue>",
 * //                 ],
 * //                 NULL: true || false,
 * //                 BOOL: true || false,
 * //               },
 * //             },
 * //             L: [
 * //               "<AttributeValue>",
 * //             ],
 * //             NULL: true || false,
 * //             BOOL: true || false,
 * //           },
 * //         },
 * //         NewImage: {
 * //           "<keys>": "<AttributeValue>",
 * //         },
 * //         OldImage: {
 * //           "<keys>": "<AttributeValue>",
 * //         },
 * //         SequenceNumber: "STRING_VALUE",
 * //         SizeBytes: Number("long"),
 * //         StreamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY",
 * //       },
 * //       userIdentity: { // Identity
 * //         PrincipalId: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextShardIterator: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRecordsCommandInput - {@link GetRecordsCommandInput}
 * @returns {@link GetRecordsCommandOutput}
 * @see {@link GetRecordsCommandInput} for command's `input` shape.
 * @see {@link GetRecordsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBStreamsClientResolvedConfig | config} for DynamoDBStreamsClient's `config` shape.
 *
 * @throws {@link ExpiredIteratorException} (client fault)
 *  <p>The shard iterator has expired and can no longer be used to retrieve stream records. A shard
 *       iterator expires 15 minutes after it is retrieved using the <code>GetShardIterator</code>
 *       action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *           include <code>CreateTable</code>, <code>UpdateTable</code>,
 *           <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *           <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *           indexes, you can have up to 250 such requests running at a time. However, if the table or
 *           index specifications are complex, then DynamoDB might temporarily reduce the number
 *           of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *           this limit may result in request throttling.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource
 *             might not be specified correctly, or its status might not be
 *             <code>ACTIVE</code>.</p>
 *
 * @throws {@link TrimmedDataAccessException} (client fault)
 *  <p>The operation attempted to read past the oldest stream record in a shard.</p>
 *          <p>In DynamoDB Streams, there is a 24 hour limit on data retention. Stream records whose age exceeds this limit are subject to removal (trimming) from the stream. You might receive a TrimmedDataAccessException if:</p>
 *          <ul>
 *             <li>
 *                <p>You request a shard iterator with a sequence number older than the trim point (24 hours).</p>
 *             </li>
 *             <li>
 *                <p>You obtain a shard iterator, but before you use the iterator in a <code>GetRecords</code>
 *         request, a stream record in the shard exceeds the 24 hour period and is trimmed. This causes
 *         the iterator to access a record that no longer exists.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link DynamoDBStreamsServiceException}
 * <p>Base exception class for all service exceptions from DynamoDBStreams service.</p>
 *
 * @example To retrieve all the stream records from a shard
 * ```javascript
 * // The following example retrieves all the stream records from a shard.
 * const input = {
 *   "ShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAEvJp6D+zaQ...  <remaining characters omitted> ..."
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextShardIterator": "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAGQBYshYDEe ... <remaining characters omitted> ...",
 *   "Records": [
 *     {
 *       "awsRegion": "us-west-2",
 *       "dynamodb": {
 *         "ApproximateCreationDateTime": "1.46480646E9",
 *         "Keys": {
 *           "ForumName": {
 *             "S": "DynamoDB"
 *           },
 *           "Subject": {
 *             "S": "DynamoDB Thread 3"
 *           }
 *         },
 *         "SequenceNumber": "300000000000000499659",
 *         "SizeBytes": 41,
 *         "StreamViewType": "KEYS_ONLY"
 *       },
 *       "eventID": "e2fd9c34eff2d779b297b26f5fef4206",
 *       "eventName": "INSERT",
 *       "eventSource": "aws:dynamodb",
 *       "eventVersion": "1.0"
 *     },
 *     {
 *       "awsRegion": "us-west-2",
 *       "dynamodb": {
 *         "ApproximateCreationDateTime": "1.46480527E9",
 *         "Keys": {
 *           "ForumName": {
 *             "S": "DynamoDB"
 *           },
 *           "Subject": {
 *             "S": "DynamoDB Thread 1"
 *           }
 *         },
 *         "SequenceNumber": "400000000000000499660",
 *         "SizeBytes": 41,
 *         "StreamViewType": "KEYS_ONLY"
 *       },
 *       "eventID": "4b25bd0da9a181a155114127e4837252",
 *       "eventName": "MODIFY",
 *       "eventSource": "aws:dynamodb",
 *       "eventVersion": "1.0"
 *     },
 *     {
 *       "awsRegion": "us-west-2",
 *       "dynamodb": {
 *         "ApproximateCreationDateTime": "1.46480646E9",
 *         "Keys": {
 *           "ForumName": {
 *             "S": "DynamoDB"
 *           },
 *           "Subject": {
 *             "S": "DynamoDB Thread 2"
 *           }
 *         },
 *         "SequenceNumber": "500000000000000499661",
 *         "SizeBytes": 41,
 *         "StreamViewType": "KEYS_ONLY"
 *       },
 *       "eventID": "740280c73a3df7842edab3548a1b08ad",
 *       "eventName": "REMOVE",
 *       "eventSource": "aws:dynamodb",
 *       "eventVersion": "1.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-all-the-stream-records-from-a-shard-1473707781419
 * ```
 *
 */
export class GetRecordsCommand extends $Command<
  GetRecordsCommandInput,
  GetRecordsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetRecordsCommandInput) {
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
  ): Handler<GetRecordsCommandInput, GetRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBStreamsClient";
    const commandName = "GetRecordsCommand";
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
  private serialize(input: GetRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecordsCommandOutput> {
    return de_GetRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
