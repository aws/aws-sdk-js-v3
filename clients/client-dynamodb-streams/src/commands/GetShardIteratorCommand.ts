// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBStreamsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetShardIteratorInput, GetShardIteratorOutput } from "../models/models_0";
import { GetShardIterator } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetShardIteratorCommand}.
 */
export interface GetShardIteratorCommandInput extends GetShardIteratorInput {}
/**
 * @public
 *
 * The output of {@link GetShardIteratorCommand}.
 */
export interface GetShardIteratorCommandOutput extends GetShardIteratorOutput, __MetadataBearer {}

/**
 * <p>Returns a shard iterator. A shard iterator provides information
 *       about how to retrieve the stream records from within a shard.  Use
 *       the shard iterator in a subsequent
 *       <code>GetRecords</code> request to read the stream records
 *       from the shard.</p>
 *          <note>
 *             <p>A shard iterator expires 15 minutes after it is returned to the requester.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBStreamsClient, GetShardIteratorCommand } from "@aws-sdk/client-dynamodb-streams"; // ES Modules import
 * // const { DynamoDBStreamsClient, GetShardIteratorCommand } = require("@aws-sdk/client-dynamodb-streams"); // CommonJS import
 * // import type { DynamoDBStreamsClientConfig } from "@aws-sdk/client-dynamodb-streams";
 * const config = {}; // type is DynamoDBStreamsClientConfig
 * const client = new DynamoDBStreamsClient(config);
 * const input = { // GetShardIteratorInput
 *   StreamArn: "STRING_VALUE", // required
 *   ShardId: "STRING_VALUE", // required
 *   ShardIteratorType: "TRIM_HORIZON" || "LATEST" || "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER", // required
 *   SequenceNumber: "STRING_VALUE",
 * };
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * // { // GetShardIteratorOutput
 * //   ShardIterator: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetShardIteratorCommandInput - {@link GetShardIteratorCommandInput}
 * @returns {@link GetShardIteratorCommandOutput}
 * @see {@link GetShardIteratorCommandInput} for command's `input` shape.
 * @see {@link GetShardIteratorCommandOutput} for command's `response` shape.
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
 * @example To obtain a shard iterator for the provided stream ARN and shard ID
 * ```javascript
 * // The following example returns a shard iterator for the provided stream ARN and shard ID.
 * const input = {
 *   ShardId: "00000001414576573621-f55eea83",
 *   ShardIteratorType: "TRIM_HORIZON",
 *   StreamArn: "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252"
 * };
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ShardIterator: "arn:aws:dynamodb:us-west-2:111122223333:table/Forum/stream/2015-05-20T20:51:10.252|1|AAAAAAAAAAEvJp6D+zaQ...  <remaining characters omitted> ..."
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetShardIteratorCommand extends $Command
  .classBuilder<
    GetShardIteratorCommandInput,
    GetShardIteratorCommandOutput,
    DynamoDBStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DynamoDBStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DynamoDBStreams_20120810", "GetShardIterator", {})
  .n("DynamoDBStreamsClient", "GetShardIteratorCommand")
  .sc(GetShardIterator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetShardIteratorInput;
      output: GetShardIteratorOutput;
    };
    sdk: {
      input: GetShardIteratorCommandInput;
      output: GetShardIteratorCommandOutput;
    };
  };
}
