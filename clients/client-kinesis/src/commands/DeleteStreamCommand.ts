// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DeleteStreamInput } from "../models/models_0";
import { de_DeleteStreamCommand, se_DeleteStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStreamCommand}.
 */
export interface DeleteStreamCommandInput extends DeleteStreamInput {}
/**
 * @public
 *
 * The output of {@link DeleteStreamCommand}.
 */
export interface DeleteStreamCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Kinesis data stream and all its shards and data. You must shut down any
 *             applications that are operating on the stream before you delete the stream. If an
 *             application attempts to operate on a deleted stream, it receives the exception
 *                 <code>ResourceNotFoundException</code>.</p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the
 *                     <code>StreamName</code> parameter, or both. It is recommended that you use the
 *                     <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>If the stream is in the <code>ACTIVE</code> state, you can delete it. After a
 *                 <code>DeleteStream</code> request, the specified stream is in the
 *                 <code>DELETING</code> state until Kinesis Data Streams completes the
 *             deletion.</p>
 *          <p>
 *             <b>Note:</b> Kinesis Data Streams might continue to accept
 *             data read and write operations, such as <a>PutRecord</a>, <a>PutRecords</a>, and <a>GetRecords</a>, on a stream in the
 *                 <code>DELETING</code> state until the stream deletion is complete.</p>
 *          <p>When you delete a stream, any shards in that stream are also deleted, and any tags are
 *             dissociated from the stream.</p>
 *          <p>You can use the <a>DescribeStreamSummary</a> operation to check the state
 *             of the stream, which is returned in <code>StreamStatus</code>.</p>
 *          <p>
 *             <a>DeleteStream</a> has a limit of five transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DeleteStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DeleteStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // DeleteStreamInput
 *   StreamName: "STRING_VALUE",
 *   EnforceConsumerDeletion: true || false,
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStreamCommandInput - {@link DeleteStreamCommandInput}
 * @returns {@link DeleteStreamCommandOutput}
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 * @public
 */
export class DeleteStreamCommand extends $Command
  .classBuilder<
    DeleteStreamCommandInput,
    DeleteStreamCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "DeleteStream", {})
  .n("KinesisClient", "DeleteStreamCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStreamCommand)
  .de(de_DeleteStreamCommand)
  .build() {}
