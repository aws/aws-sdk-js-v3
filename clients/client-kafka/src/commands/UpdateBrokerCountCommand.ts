// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBrokerCountRequest, UpdateBrokerCountResponse } from "../models/models_0";
import { UpdateBrokerCount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBrokerCountCommand}.
 */
export interface UpdateBrokerCountCommandInput extends UpdateBrokerCountRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrokerCountCommand}.
 */
export interface UpdateBrokerCountCommandOutput extends UpdateBrokerCountResponse, __MetadataBearer {}

/**
 * Updates the number of broker nodes in the cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerCountCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerCountCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateBrokerCountRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   TargetNumberOfBrokerNodes: Number("int"), // required
 * };
 * const command = new UpdateBrokerCountCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrokerCountResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrokerCountCommandInput - {@link UpdateBrokerCountCommandInput}
 * @returns {@link UpdateBrokerCountCommandOutput}
 * @see {@link UpdateBrokerCountCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerCountCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
 * @throws {@link KafkaServiceException}
 *
 * Base exception class for all service exceptions from Kafka service.
 *
 * @public
 */
export class UpdateBrokerCountCommand extends command<UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBrokerCount",
  UpdateBrokerCount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrokerCountRequest;
      output: UpdateBrokerCountResponse;
    };
    sdk: {
      input: UpdateBrokerCountCommandInput;
      output: UpdateBrokerCountCommandOutput;
    };
  };
}
