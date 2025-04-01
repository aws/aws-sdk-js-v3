// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateClusterKafkaVersionRequest, UpdateClusterKafkaVersionResponse } from "../models/models_0";
import { de_UpdateClusterKafkaVersionCommand, se_UpdateClusterKafkaVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterKafkaVersionCommand}.
 */
export interface UpdateClusterKafkaVersionCommandInput extends UpdateClusterKafkaVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterKafkaVersionCommand}.
 */
export interface UpdateClusterKafkaVersionCommandOutput extends UpdateClusterKafkaVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the Apache Kafka version for the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterKafkaVersionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterKafkaVersionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateClusterKafkaVersionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ConfigurationInfo: { // ConfigurationInfo
 *     Arn: "STRING_VALUE", // required
 *     Revision: Number("long"), // required
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 *   TargetKafkaVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateClusterKafkaVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterKafkaVersionResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateClusterKafkaVersionCommandInput - {@link UpdateClusterKafkaVersionCommandInput}
 * @returns {@link UpdateClusterKafkaVersionCommandOutput}
 * @see {@link UpdateClusterKafkaVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterKafkaVersionCommandOutput} for command's `response` shape.
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
export class UpdateClusterKafkaVersionCommand extends $Command
  .classBuilder<
    UpdateClusterKafkaVersionCommandInput,
    UpdateClusterKafkaVersionCommandOutput,
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
  .s("Kafka", "UpdateClusterKafkaVersion", {})
  .n("KafkaClient", "UpdateClusterKafkaVersionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateClusterKafkaVersionCommand)
  .de(de_UpdateClusterKafkaVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterKafkaVersionRequest;
      output: UpdateClusterKafkaVersionResponse;
    };
    sdk: {
      input: UpdateClusterKafkaVersionCommandInput;
      output: UpdateClusterKafkaVersionCommandOutput;
    };
  };
}
