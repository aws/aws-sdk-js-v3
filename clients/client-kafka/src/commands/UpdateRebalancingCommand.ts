// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateRebalancingRequest, UpdateRebalancingResponse } from "../models/models_0";
import { de_UpdateRebalancingCommand, se_UpdateRebalancingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRebalancingCommand}.
 */
export interface UpdateRebalancingCommandInput extends UpdateRebalancingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRebalancingCommand}.
 */
export interface UpdateRebalancingCommandOutput extends UpdateRebalancingResponse, __MetadataBearer {}

/**
 * <p>Use this resource to update the intelligent rebalancing status of an Amazon MSK Provisioned cluster with Express brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateRebalancingCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateRebalancingCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateRebalancingRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   Rebalancing: { // Rebalancing
 *     Status: "PAUSED" || "ACTIVE",
 *   },
 * };
 * const command = new UpdateRebalancingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRebalancingResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRebalancingCommandInput - {@link UpdateRebalancingCommandInput}
 * @returns {@link UpdateRebalancingCommandOutput}
 * @see {@link UpdateRebalancingCommandInput} for command's `input` shape.
 * @see {@link UpdateRebalancingCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
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
export class UpdateRebalancingCommand extends $Command
  .classBuilder<
    UpdateRebalancingCommandInput,
    UpdateRebalancingCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "UpdateRebalancing", {})
  .n("KafkaClient", "UpdateRebalancingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRebalancingCommand)
  .de(de_UpdateRebalancingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRebalancingRequest;
      output: UpdateRebalancingResponse;
    };
    sdk: {
      input: UpdateRebalancingCommandInput;
      output: UpdateRebalancingCommandOutput;
    };
  };
}
