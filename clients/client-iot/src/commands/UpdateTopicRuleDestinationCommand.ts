// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateTopicRuleDestinationRequest, UpdateTopicRuleDestinationResponse } from "../models/models_2";
import { de_UpdateTopicRuleDestinationCommand, se_UpdateTopicRuleDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTopicRuleDestinationCommand}.
 */
export interface UpdateTopicRuleDestinationCommandInput extends UpdateTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTopicRuleDestinationCommand}.
 */
export interface UpdateTopicRuleDestinationCommandOutput extends UpdateTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or
 *          confirmation URL of the destination.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateTopicRuleDestinationRequest
 *   arn: "STRING_VALUE", // required
 *   status: "ENABLED" || "IN_PROGRESS" || "DISABLED" || "ERROR" || "DELETING", // required
 * };
 * const command = new UpdateTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTopicRuleDestinationCommandInput - {@link UpdateTopicRuleDestinationCommandInput}
 * @returns {@link UpdateTopicRuleDestinationCommandOutput}
 * @see {@link UpdateTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateTopicRuleDestinationCommand extends $Command
  .classBuilder<
    UpdateTopicRuleDestinationCommandInput,
    UpdateTopicRuleDestinationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateTopicRuleDestination", {})
  .n("IoTClient", "UpdateTopicRuleDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTopicRuleDestinationCommand)
  .de(de_UpdateTopicRuleDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTopicRuleDestinationRequest;
      output: {};
    };
    sdk: {
      input: UpdateTopicRuleDestinationCommandInput;
      output: UpdateTopicRuleDestinationCommandOutput;
    };
  };
}
