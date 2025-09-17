// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerTypeRequest, UpdateBrokerTypeResponse } from "../models/models_0";
import { de_UpdateBrokerTypeCommand, se_UpdateBrokerTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrokerTypeCommand}.
 */
export interface UpdateBrokerTypeCommandInput extends UpdateBrokerTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrokerTypeCommand}.
 */
export interface UpdateBrokerTypeCommandOutput extends UpdateBrokerTypeResponse, __MetadataBearer {}

/**
 * <p>Updates EC2 instance type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateBrokerTypeCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateBrokerTypeCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // UpdateBrokerTypeRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   TargetInstanceType: "STRING_VALUE", // required
 * };
 * const command = new UpdateBrokerTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrokerTypeResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBrokerTypeCommandInput - {@link UpdateBrokerTypeCommandInput}
 * @returns {@link UpdateBrokerTypeCommandOutput}
 * @see {@link UpdateBrokerTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateBrokerTypeCommandOutput} for command's `response` shape.
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
export class UpdateBrokerTypeCommand extends $Command
  .classBuilder<
    UpdateBrokerTypeCommandInput,
    UpdateBrokerTypeCommandOutput,
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
  .s("Kafka", "UpdateBrokerType", {})
  .n("KafkaClient", "UpdateBrokerTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBrokerTypeCommand)
  .de(de_UpdateBrokerTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrokerTypeRequest;
      output: UpdateBrokerTypeResponse;
    };
    sdk: {
      input: UpdateBrokerTypeCommandInput;
      output: UpdateBrokerTypeCommandOutput;
    };
  };
}
