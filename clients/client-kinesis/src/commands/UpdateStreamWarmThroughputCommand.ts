// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import type { UpdateStreamWarmThroughputInput, UpdateStreamWarmThroughputOutput } from "../models/models_0";
import { UpdateStreamWarmThroughput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStreamWarmThroughputCommand}.
 */
export interface UpdateStreamWarmThroughputCommandInput extends UpdateStreamWarmThroughputInput {}
/**
 * @public
 *
 * The output of {@link UpdateStreamWarmThroughputCommand}.
 */
export interface UpdateStreamWarmThroughputCommandOutput extends UpdateStreamWarmThroughputOutput, __MetadataBearer {}

/**
 * <p>Updates the warm throughput configuration for the specified Amazon Kinesis Data Streams on-demand data stream. This operation allows you to proactively scale your on-demand data stream to a specified throughput level, enabling better performance for sudden traffic spikes. </p>
 *          <note>
 *             <p>When invoking this API, you must use either the <code>StreamARN</code> or the <code>StreamName</code> parameter, or both. It is recommended that you use the <code>StreamARN</code> input parameter when you invoke this API.</p>
 *          </note>
 *          <p>Updating the warm throughput is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to <code>UPDATING</code>. After the update is complete, Kinesis Data Streams sets the status of the stream back to <code>ACTIVE</code>. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is <code>UPDATING</code>.</p>
 *          <p>This operation is only supported for data streams with the on-demand capacity mode in accounts that have <code>MinimumThroughputBillingCommitment</code> enabled. Provisioned capacity mode streams do not support warm throughput configuration.</p>
 *          <p>This operation has the following default limits. By default, you cannot do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Scale to more than 10 GiBps for an on-demand stream.</p>
 *             </li>
 *             <li>
 *                <p>This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the <code>LimitExceededException</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For the default limits for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer
 *                     Guide</i>. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the <a href="https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&limitType=service-code-kinesis">limits form</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateStreamWarmThroughputCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateStreamWarmThroughputCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateStreamWarmThroughputInput
 *   StreamARN: "STRING_VALUE",
 *   StreamName: "STRING_VALUE",
 *   WarmThroughputMiBps: Number("int"), // required
 * };
 * const command = new UpdateStreamWarmThroughputCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStreamWarmThroughputOutput
 * //   StreamARN: "STRING_VALUE",
 * //   StreamName: "STRING_VALUE",
 * //   WarmThroughput: { // WarmThroughputObject
 * //     TargetMiBps: Number("int"),
 * //     CurrentMiBps: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateStreamWarmThroughputCommandInput - {@link UpdateStreamWarmThroughputCommandInput}
 * @returns {@link UpdateStreamWarmThroughputCommandOutput}
 * @see {@link UpdateStreamWarmThroughputCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamWarmThroughputCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class UpdateStreamWarmThroughputCommand extends $Command
  .classBuilder<
    UpdateStreamWarmThroughputCommandInput,
    UpdateStreamWarmThroughputCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kinesis_20131202", "UpdateStreamWarmThroughput", {})
  .n("KinesisClient", "UpdateStreamWarmThroughputCommand")
  .sc(UpdateStreamWarmThroughput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamWarmThroughputInput;
      output: UpdateStreamWarmThroughputOutput;
    };
    sdk: {
      input: UpdateStreamWarmThroughputCommandInput;
      output: UpdateStreamWarmThroughputCommandOutput;
    };
  };
}
