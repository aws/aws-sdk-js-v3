// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import type { DescribeTopicRequest, DescribeTopicResponse } from "../models/models_0";
import { DescribeTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DescribeTopicCommand extends $Command
  .classBuilder<
    DescribeTopicCommandInput,
    DescribeTopicCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DescribeTopic", {})
  .n("KafkaClient", "DescribeTopicCommand")
  .sc(DescribeTopic$)
  .build() {
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
