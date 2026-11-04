// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTopicRequest, UpdateTopicResponse } from "../models/models_0";
import { UpdateTopic$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTopicCommand}.
 */
export interface UpdateTopicCommandInput extends UpdateTopicRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTopicCommand}.
 */
export interface UpdateTopicCommandOutput extends UpdateTopicResponse, __MetadataBearer {}

/**
 * Updates the configuration of the specified topic.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateTopicCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateTopicCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateTopicRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   TopicName: "STRING_VALUE", // required
 *   Configs: "STRING_VALUE",
 *   PartitionCount: Number("int"),
 * };
 * const command = new UpdateTopicCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * //   TopicName: "STRING_VALUE",
 * //   Status: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * // };
 *
 * ```
 *
 * @param UpdateTopicCommandInput - {@link UpdateTopicCommandInput}
 * @returns {@link UpdateTopicCommandOutput}
 * @see {@link UpdateTopicCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link UnauthorizedException} (client fault)
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
export class UpdateTopicCommand extends command<UpdateTopicCommandInput, UpdateTopicCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTopic",
  UpdateTopic$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTopicRequest;
      output: UpdateTopicResponse;
    };
    sdk: {
      input: UpdateTopicCommandInput;
      output: UpdateTopicCommandOutput;
    };
  };
}
