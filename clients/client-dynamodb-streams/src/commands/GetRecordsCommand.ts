// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { de_GetRecordsCommand, se_GetRecordsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // import type { DynamoDBStreamsClientConfig } from "@aws-sdk/client-dynamodb-streams";
 * const config = {}; // type is DynamoDBStreamsClientConfig
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
 * //             B: new Uint8Array(),
 * //             SS: [ // StringSetAttributeValue
 * //               "STRING_VALUE",
 * //             ],
 * //             NS: [ // NumberSetAttributeValue
 * //               "STRING_VALUE",
 * //             ],
 * //             BS: [ // BinarySetAttributeValue
 * //               new Uint8Array(),
 * //             ],
 * //             M: { // MapAttributeValue
 * //               "<keys>": {//  Union: only one key present
 * //                 S: "STRING_VALUE",
 * //                 N: "STRING_VALUE",
 * //                 B: new Uint8Array(),
 * //                 SS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BS: [
 * //                   new Uint8Array(),
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
 *
 * @public
 */
export class GetRecordsCommand extends $Command
  .classBuilder<
    GetRecordsCommandInput,
    GetRecordsCommandOutput,
    DynamoDBStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DynamoDBStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDBStreams_20120810", "GetRecords", {})
  .n("DynamoDBStreamsClient", "GetRecordsCommand")
  .f(void 0, void 0)
  .ser(se_GetRecordsCommand)
  .de(de_GetRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecordsInput;
      output: GetRecordsOutput;
    };
    sdk: {
      input: GetRecordsCommandInput;
      output: GetRecordsCommandOutput;
    };
  };
}
