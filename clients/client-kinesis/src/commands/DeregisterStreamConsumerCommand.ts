// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep4, _mw0, command } from "../commandBuilder";
import type { DeregisterStreamConsumerInput } from "../models/models_0";
import { DeregisterStreamConsumer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterStreamConsumerCommand}.
 */
export interface DeregisterStreamConsumerCommandInput extends DeregisterStreamConsumerInput {}
/**
 * @public
 *
 * The output of {@link DeregisterStreamConsumerCommand}.
 */
export interface DeregisterStreamConsumerCommandOutput extends __MetadataBearer {}

/**
 * To deregister a consumer, provide its ARN. Alternatively, you can provide the ARN of the data stream and the name you gave the consumer when you registered it. You may also provide all three parameters, as long as they don't conflict with each other. If you don't know the name or ARN of the consumer that you want to deregister, you can use the ListStreamConsumers operation to get a list of the descriptions of all the consumers that are currently registered with a given data stream. The description of a consumer contains its name and ARN.
 *
 * This operation has a limit of five transactions per second per stream.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DeregisterStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DeregisterStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DeregisterStreamConsumerInput
 *   StreamARN: "STRING_VALUE",
 *   ConsumerName: "STRING_VALUE",
 *   ConsumerARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new DeregisterStreamConsumerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterStreamConsumerCommandInput - {@link DeregisterStreamConsumerCommandInput}
 * @returns {@link DeregisterStreamConsumerCommandOutput}
 * @see {@link DeregisterStreamConsumerCommandInput} for command's `input` shape.
 * @see {@link DeregisterStreamConsumerCommandOutput} for command's `response` shape.
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
export class DeregisterStreamConsumerCommand extends command<DeregisterStreamConsumerCommandInput, DeregisterStreamConsumerCommandOutput>(
  _ep4,
  _mw0,
  "DeregisterStreamConsumer",
  DeregisterStreamConsumer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterStreamConsumerInput;
      output: {};
    };
    sdk: {
      input: DeregisterStreamConsumerCommandInput;
      output: DeregisterStreamConsumerCommandOutput;
    };
  };
}
