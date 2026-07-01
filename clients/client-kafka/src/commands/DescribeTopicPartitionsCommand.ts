// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTopicPartitionsRequest, DescribeTopicPartitionsResponse } from "../models/models_0";
import { DescribeTopicPartitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTopicPartitionsCommand}.
 */
export interface DescribeTopicPartitionsCommandInput extends DescribeTopicPartitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicPartitionsCommand}.
 */
export interface DescribeTopicPartitionsCommandOutput extends DescribeTopicPartitionsResponse, __MetadataBearer {}

/**
 * <p>Returns partition details of this topic on a MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeTopicPartitionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeTopicPartitionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeTopicPartitionsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeTopicPartitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicPartitionsResponse
 * //   Partitions: [ // __listOfTopicPartitionInfo
 * //     { // TopicPartitionInfo
 * //       Partition: Number("int"),
 * //       Leader: Number("int"),
 * //       Replicas: [ // __listOf__integer
 * //         Number("int"),
 * //       ],
 * //       Isr: [
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTopicPartitionsCommandInput - {@link DescribeTopicPartitionsCommandInput}
 * @returns {@link DescribeTopicPartitionsCommandOutput}
 * @see {@link DescribeTopicPartitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicPartitionsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class DescribeTopicPartitionsCommand extends command<DescribeTopicPartitionsCommandInput, DescribeTopicPartitionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTopicPartitions",
  DescribeTopicPartitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicPartitionsRequest;
      output: DescribeTopicPartitionsResponse;
    };
    sdk: {
      input: DescribeTopicPartitionsCommandInput;
      output: DescribeTopicPartitionsCommandOutput;
    };
  };
}
