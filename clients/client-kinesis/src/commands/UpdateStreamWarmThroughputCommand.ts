// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStreamWarmThroughputInput, UpdateStreamWarmThroughputOutput } from "../models/models_0";
import { UpdateStreamWarmThroughput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the warm throughput configuration for the specified Amazon Kinesis Data Streams on-demand data stream. Updates the warm throughput configuration for the specified on-demand data stream. Use this operation to scale your stream to a specified throughput level before anticipated traffic spikes, or to release excess capacity after traffic has decreased.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * Updating the warm throughput is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to `UPDATING`. After the update is complete, Kinesis Data Streams sets the status of the stream back to `ACTIVE`. Depending on the size of the stream, the scaling action could take a few minutes to complete. You can continue to read and write data to your stream while its status is `UPDATING`.
 *
 * This operation is only supported for data streams with the on-demand capacity mode in accounts that have `MinimumThroughputBillingCommitment` enabled. Provisioned capacity mode streams do not support warm throughput configuration.
 *
 * To release excess capacity, call the API again and set the warm throughput to the same or a lower value.
 *
 * This operation has the following default limits. By default, you cannot do the following:
 *
 * - Scale to more than 10 GiBps for an on-demand stream.
 * - This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the `LimitExceededException`.
 *
 * For the default limits for an Amazon Web Services account, see [Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*. To request an increase in the call rate limit, the shard limit for this API, or your overall shard limit, use the [limits form](https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase&limitType=service-code-kinesis).
 *
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
 *   StreamId: "STRING_VALUE",
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
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Specifies that you tried to invoke this API for a data stream with the on-demand capacity mode. This API is only supported for data streams with the provisioned capacity mode.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class UpdateStreamWarmThroughputCommand extends command<UpdateStreamWarmThroughputCommandInput, UpdateStreamWarmThroughputCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStreamWarmThroughput",
  UpdateStreamWarmThroughput$
) {
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
