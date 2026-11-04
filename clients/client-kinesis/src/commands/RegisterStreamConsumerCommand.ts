// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterStreamConsumerInput, RegisterStreamConsumerOutput } from "../models/models_0";
import { RegisterStreamConsumer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterStreamConsumerCommand}.
 */
export interface RegisterStreamConsumerCommandInput extends RegisterStreamConsumerInput {}
/**
 * @public
 *
 * The output of {@link RegisterStreamConsumerCommand}.
 */
export interface RegisterStreamConsumerCommandOutput extends RegisterStreamConsumerOutput, __MetadataBearer {}

/**
 * Registers a consumer with a Kinesis data stream. When you use this operation, the consumer you register can then call SubscribeToShard to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream.
 *
 * You can add tags to the registered consumer when making a `RegisterStreamConsumer` request by setting the `Tags` parameter. If you pass the `Tags` parameter, in addition to having the `kinesis:RegisterStreamConsumer` permission, you must also have the `kinesis:TagResource` permission for the consumer that will be registered. Tags will take effect from the `CREATING` status of the consumer.
 *
 * With On-demand Advantage streams, you can register up to 50 consumers per stream to use Enhanced Fan-out. With On-demand Standard and Provisioned streams, you can register up to 20 consumers per stream to use Enhanced Fan-out. A given consumer can only be registered with one stream at a time.
 *
 * For an example of how to use this operation, see [Enhanced Fan-Out Using the Kinesis Data Streams API](https://docs.aws.amazon.com/streams/latest/dev/building-enhanced-consumers-api.html).
 *
 * The use of this operation has a limit of five transactions per second per account. Also, only 5 consumers can be created simultaneously. In other words, you cannot have more than 5 consumers in a `CREATING` status at the same time. Registering a 6th consumer while there are 5 in a `CREATING` status results in a `LimitExceededException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, RegisterStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, RegisterStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // RegisterStreamConsumerInput
 *   StreamARN: "STRING_VALUE", // required
 *   ConsumerName: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterStreamConsumerCommand(input);
 * const response = await client.send(command);
 * // { // RegisterStreamConsumerOutput
 * //   Consumer: { // Consumer
 * //     ConsumerName: "STRING_VALUE", // required
 * //     ConsumerARN: "STRING_VALUE", // required
 * //     ConsumerStatus: "CREATING" || "DELETING" || "ACTIVE", // required
 * //     ConsumerCreationTimestamp: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterStreamConsumerCommandInput - {@link RegisterStreamConsumerCommandInput}
 * @returns {@link RegisterStreamConsumerCommandOutput}
 * @see {@link RegisterStreamConsumerCommandInput} for command's `input` shape.
 * @see {@link RegisterStreamConsumerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
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
export class RegisterStreamConsumerCommand extends command<RegisterStreamConsumerCommandInput, RegisterStreamConsumerCommandOutput>(
  _ep0,
  _mw0,
  "RegisterStreamConsumer",
  RegisterStreamConsumer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterStreamConsumerInput;
      output: RegisterStreamConsumerOutput;
    };
    sdk: {
      input: RegisterStreamConsumerCommandInput;
      output: RegisterStreamConsumerCommandOutput;
    };
  };
}
