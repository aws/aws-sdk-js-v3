// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0";
import { de_DescribeStreamCommand, se_DescribeStreamCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandInput extends DescribeStreamInput {}
/**
 * @public
 *
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
 * const input = { // DescribeStreamInput
 *   StreamArn: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   ExclusiveStartShardId: "STRING_VALUE",
 * };
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamOutput
 * //   StreamDescription: { // StreamDescription
 * //     StreamArn: "STRING_VALUE",
 * //     StreamLabel: "STRING_VALUE",
 * //     StreamStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //     StreamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY",
 * //     CreationRequestDateTime: new Date("TIMESTAMP"),
 * //     TableName: "STRING_VALUE",
 * //     KeySchema: [ // KeySchema
 * //       { // KeySchemaElement
 * //         AttributeName: "STRING_VALUE", // required
 * //         KeyType: "HASH" || "RANGE", // required
 * //       },
 * //     ],
 * //     Shards: [ // ShardDescriptionList
 * //       { // Shard
 * //         ShardId: "STRING_VALUE",
 * //         SequenceNumberRange: { // SequenceNumberRange
 * //           StartingSequenceNumber: "STRING_VALUE",
 * //           EndingSequenceNumber: "STRING_VALUE",
 * //         },
 * //         ParentShardId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastEvaluatedShardId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamCommandInput - {@link DescribeStreamCommandInput}
 * @returns {@link DescribeStreamCommandOutput}
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
 * @throws {@link DynamoDBStreamsServiceException}
 * <p>Base exception class for all service exceptions from DynamoDBStreams service.</p>
 *
 * @public
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
export class DescribeStreamCommand extends $Command
  .classBuilder<
    DescribeStreamCommandInput,
    DescribeStreamCommandOutput,
    DynamoDBStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDBStreams_20120810", "DescribeStream", {})
  .n("DynamoDBStreamsClient", "DescribeStreamCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStreamCommand)
  .de(de_DescribeStreamCommand)
  .build() {}
