// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListStreamConsumersInput, ListStreamConsumersOutput } from "../models/models_0";
import { de_ListStreamConsumersCommand, se_ListStreamConsumersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the consumers registered to receive data from a stream using enhanced fan-out,
 *             and provides information about each consumer.</p>
 *          <p>This operation has a limit of 5 transactions per second per stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListStreamConsumersCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListStreamConsumersCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // ListStreamConsumersInput
 *   StreamARN: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StreamCreationTimestamp: new Date("TIMESTAMP"),
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
 *  <p>The pagination token passed to the operation is expired.</p>
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
 *
 * @public
 */
export class ListStreamConsumersCommand extends $Command
  .classBuilder<
    ListStreamConsumersCommandInput,
    ListStreamConsumersCommandOutput,
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
  .s("Kinesis_20131202", "ListStreamConsumers", {})
  .n("KinesisClient", "ListStreamConsumersCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamConsumersCommand)
  .de(de_ListStreamConsumersCommand)
  .build() {
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
