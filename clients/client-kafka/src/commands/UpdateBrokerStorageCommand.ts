// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerStorageRequest, UpdateBrokerStorageResponse } from "../models/models_0";
import { de_UpdateBrokerStorageCommand, se_UpdateBrokerStorageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrokerStorageCommand}.
 */
export interface UpdateBrokerStorageCommandInput extends UpdateBrokerStorageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrokerStorageCommand}.
 */
export interface UpdateBrokerStorageCommandOutput extends UpdateBrokerStorageResponse, __MetadataBearer {}

/**
 * <p>Updates the EBS storage associated with MSK brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerStorageCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerStorageCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateBrokerStorageRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   TargetBrokerEBSVolumeInfo: [ // __listOfBrokerEBSVolumeInfo // required
 *     { // BrokerEBSVolumeInfo
 *       KafkaBrokerNodeId: "STRING_VALUE", // required
 *       ProvisionedThroughput: { // ProvisionedThroughput
 *         Enabled: true || false,
 *         VolumeThroughput: Number("int"),
 *       },
 *       VolumeSizeGB: Number("int"),
 *     },
 *   ],
 * };
 * const command = new UpdateBrokerStorageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrokerStorageResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrokerStorageCommandInput - {@link UpdateBrokerStorageCommandInput}
 * @returns {@link UpdateBrokerStorageCommandOutput}
 * @see {@link UpdateBrokerStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerStorageCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
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
export class UpdateBrokerStorageCommand extends $Command
  .classBuilder<
    UpdateBrokerStorageCommandInput,
    UpdateBrokerStorageCommandOutput,
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
  .s("Kafka", "UpdateBrokerStorage", {})
  .n("KafkaClient", "UpdateBrokerStorageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBrokerStorageCommand)
  .de(de_UpdateBrokerStorageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrokerStorageRequest;
      output: UpdateBrokerStorageResponse;
    };
    sdk: {
      input: UpdateBrokerStorageCommandInput;
      output: UpdateBrokerStorageCommandOutput;
    };
  };
}
