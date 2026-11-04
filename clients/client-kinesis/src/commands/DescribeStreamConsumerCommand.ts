// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep4, _mw0, command } from "../commandBuilder";
import type { DescribeStreamConsumerInput, DescribeStreamConsumerOutput } from "../models/models_0";
import { DescribeStreamConsumer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeStreamConsumerCommand}.
 */
export interface DescribeStreamConsumerCommandInput extends DescribeStreamConsumerInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamConsumerCommand}.
 */
export interface DescribeStreamConsumerCommandOutput extends DescribeStreamConsumerOutput, __MetadataBearer {}

/**
 * To get the description of a registered consumer, provide the ARN of the consumer. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to describe, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream.
 *
 * This operation has a limit of 20 transactions per second per stream.
 *
 * > **Note:** When making a cross-account call with `DescribeStreamConsumer`, make sure to provide the ARN of the consumer.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DescribeStreamConsumerInput
 *   StreamARN: "STRING_VALUE",
 *   ConsumerName: "STRING_VALUE",
 *   ConsumerARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new DescribeStreamConsumerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamConsumerOutput
 * //   ConsumerDescription: { // ConsumerDescription
 * //     ConsumerName: "STRING_VALUE", // required
 * //     ConsumerARN: "STRING_VALUE", // required
 * //     ConsumerStatus: "CREATING" || "DELETING" || "ACTIVE", // required
 * //     ConsumerCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     StreamARN: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamConsumerCommandInput - {@link DescribeStreamConsumerCommandInput}
 * @returns {@link DescribeStreamConsumerCommandOutput}
 * @see {@link DescribeStreamConsumerCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamConsumerCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class DescribeStreamConsumerCommand extends command<DescribeStreamConsumerCommandInput, DescribeStreamConsumerCommandOutput>(
  _ep4,
  _mw0,
  "DescribeStreamConsumer",
  DescribeStreamConsumer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamConsumerInput;
      output: DescribeStreamConsumerOutput;
    };
    sdk: {
      input: DescribeStreamConsumerCommandInput;
      output: DescribeStreamConsumerCommandOutput;
    };
  };
}
