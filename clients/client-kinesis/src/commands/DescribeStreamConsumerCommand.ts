// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DescribeStreamConsumerInput, DescribeStreamConsumerOutput } from "../models/models_0";
import { de_DescribeStreamConsumerCommand, se_DescribeStreamConsumerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>To get the description of a registered consumer, provide the ARN of the consumer.
 *             Alternatively, you can provide the ARN of the data stream and the name you gave the
 *             consumer when you registered it. You may also provide all three parameters, as long as
 *             they don't conflict with each other. If you don't know the name or ARN of the consumer
 *             that you want to describe, you can use the <a>ListStreamConsumers</a>
 *             operation to get a list of the descriptions of all the consumers that are currently
 *             registered with a given data stream.</p>
 *          <p>This operation has a limit of 20 transactions per second per stream.</p>
 *          <note>
 *             <p>When making a cross-account call with <code>DescribeStreamConsumer</code>, make sure to provide the ARN of the consumer.  </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeStreamConsumerCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeStreamConsumerCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // DescribeStreamConsumerInput
 *   StreamARN: "STRING_VALUE",
 *   ConsumerName: "STRING_VALUE",
 *   ConsumerARN: "STRING_VALUE",
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
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
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
export class DescribeStreamConsumerCommand extends $Command
  .classBuilder<
    DescribeStreamConsumerCommandInput,
    DescribeStreamConsumerCommandOutput,
    KinesisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    OperationType: { type: "staticContextParams", value: `control` },
    ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
    StreamARN: { type: "contextParams", name: "StreamARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kinesis_20131202", "DescribeStreamConsumer", {})
  .n("KinesisClient", "DescribeStreamConsumerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStreamConsumerCommand)
  .de(de_DescribeStreamConsumerCommand)
  .build() {
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
