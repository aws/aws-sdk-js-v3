// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DeleteConfigurationRequest, DeleteConfigurationResponse } from "../models/models_0";
import { de_DeleteConfigurationCommand, se_DeleteConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationCommand}.
 */
export interface DeleteConfigurationCommandInput extends DeleteConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationCommand}.
 */
export interface DeleteConfigurationCommandOutput extends DeleteConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes an MSK Configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DeleteConfigurationRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   State: "ACTIVE" || "DELETING" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteConfigurationCommandInput - {@link DeleteConfigurationCommandInput}
 * @returns {@link DeleteConfigurationCommandOutput}
 * @see {@link DeleteConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class DeleteConfigurationCommand extends $Command
  .classBuilder<
    DeleteConfigurationCommandInput,
    DeleteConfigurationCommandOutput,
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
  .s("Kafka", "DeleteConfiguration", {})
  .n("KafkaClient", "DeleteConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationCommand)
  .de(de_DeleteConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationRequest;
      output: DeleteConfigurationResponse;
    };
    sdk: {
      input: DeleteConfigurationCommandInput;
      output: DeleteConfigurationCommandOutput;
    };
  };
}
