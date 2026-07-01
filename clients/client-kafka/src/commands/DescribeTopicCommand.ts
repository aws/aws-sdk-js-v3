// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTopicRequest, DescribeTopicResponse } from "../models/models_0";
import { DescribeTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTopicCommand}.
 */
export interface DescribeTopicCommandInput extends DescribeTopicRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicCommand}.
 */
export interface DescribeTopicCommandOutput extends DescribeTopicResponse, __MetadataBearer {}

/**
 * <p>Returns topic details of this topic on a MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeTopicCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeTopicCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DescribeTopicRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * //   TopicName: "STRING_VALUE",
 * //   ReplicationFactor: Number("int"),
 * //   PartitionCount: Number("int"),
 * //   Configs: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param DescribeTopicCommandInput - {@link DescribeTopicCommandInput}
 * @returns {@link DescribeTopicCommandOutput}
 * @see {@link DescribeTopicCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicCommandOutput} for command's `response` shape.
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
export class DescribeTopicCommand extends command<DescribeTopicCommandInput, DescribeTopicCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTopic",
  DescribeTopic$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicRequest;
      output: DescribeTopicResponse;
    };
    sdk: {
      input: DescribeTopicCommandInput;
      output: DescribeTopicCommandOutput;
    };
  };
}
