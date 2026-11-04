// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTopicRequest, DeleteTopicResponse } from "../models/models_0";
import { DeleteTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandInput extends DeleteTopicRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandOutput extends DeleteTopicResponse, __MetadataBearer {}

/**
 * Deletes a topic in the specified MSK cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteTopicCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteTopicCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DeleteTopicRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * //   TopicName: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param DeleteTopicCommandInput - {@link DeleteTopicCommandInput}
 * @returns {@link DeleteTopicCommandOutput}
 * @see {@link DeleteTopicCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ClusterConnectivityException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ControllerMovedException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link GroupSubscribedToTopicException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link KafkaRequestException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link KafkaTimeoutException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link NotControllerException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ReassignmentInProgressException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link UnknownTopicOrPartitionException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link KafkaServiceException}
 *
 * Base exception class for all service exceptions from Kafka service.
 *
 * @public
 */
export class DeleteTopicCommand extends command<DeleteTopicCommandInput, DeleteTopicCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTopic",
  DeleteTopic$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicRequest;
      output: DeleteTopicResponse;
    };
    sdk: {
      input: DeleteTopicCommandInput;
      output: DeleteTopicCommandOutput;
    };
  };
}
