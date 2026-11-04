// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStreamConsumersInput, ListStreamConsumersOutput } from "../models/models_0";
import { ListStreamConsumers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStreamConsumersCommand}.
 */
export interface ListStreamConsumersCommandInput extends ListStreamConsumersInput {}
/**
 * @public
 *
 * The output of {@link ListStreamConsumersCommand}.
 */
export interface ListStreamConsumersCommandOutput extends ListStreamConsumersOutput, __MetadataBearer {}

/**
 * Lists the consumers registered to receive data from a stream using enhanced fan-out, and provides information about each consumer.
 *
 * This operation has a limit of 5 transactions per second per stream.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListStreamConsumersCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListStreamConsumersCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // ListStreamConsumersInput
 *   StreamARN: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StreamCreationTimestamp: new Date("TIMESTAMP"),
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new ListStreamConsumersCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamConsumersOutput
 * //   Consumers: [ // ConsumerList
 * //     { // Consumer
 * //       ConsumerName: "STRING_VALUE", // required
 * //       ConsumerARN: "STRING_VALUE", // required
 * //       ConsumerStatus: "CREATING" || "DELETING" || "ACTIVE", // required
 * //       ConsumerCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamConsumersCommandInput - {@link ListStreamConsumersCommandInput}
 * @returns {@link ListStreamConsumersCommandOutput}
 * @see {@link ListStreamConsumersCommandInput} for command's `input` shape.
 * @see {@link ListStreamConsumersCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link ExpiredNextTokenException} (client fault)
 *
 * The pagination token passed to the operation is expired.
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
export class ListStreamConsumersCommand extends command<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput>(
  _ep0,
  _mw0,
  "ListStreamConsumers",
  ListStreamConsumers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamConsumersInput;
      output: ListStreamConsumersOutput;
    };
    sdk: {
      input: ListStreamConsumersCommandInput;
      output: ListStreamConsumersCommandOutput;
    };
  };
}
