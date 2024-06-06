// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateClusterConfigurationRequest, UpdateClusterConfigurationResponse } from "../models/models_0";
import { de_UpdateClusterConfigurationCommand, se_UpdateClusterConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterConfigurationCommand}.
 */
export interface UpdateClusterConfigurationCommandInput extends UpdateClusterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterConfigurationCommand}.
 */
export interface UpdateClusterConfigurationCommandOutput extends UpdateClusterConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the cluster with the configuration that is specified in the request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateClusterConfigurationRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ConfigurationInfo: { // ConfigurationInfo
 *     Arn: "STRING_VALUE", // required
 *     Revision: Number("long"), // required
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateClusterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterConfigurationResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateClusterConfigurationCommandInput - {@link UpdateClusterConfigurationCommandInput}
 * @returns {@link UpdateClusterConfigurationCommandOutput}
 * @see {@link UpdateClusterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class UpdateClusterConfigurationCommand extends $Command
  .classBuilder<
    UpdateClusterConfigurationCommandInput,
    UpdateClusterConfigurationCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "UpdateClusterConfiguration", {})
  .n("KafkaClient", "UpdateClusterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterConfigurationCommand)
  .de(de_UpdateClusterConfigurationCommand)
  .build() {}
