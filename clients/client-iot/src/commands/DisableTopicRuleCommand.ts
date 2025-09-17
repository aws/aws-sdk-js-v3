// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DisableTopicRuleRequest } from "../models/models_1";
import { de_DisableTopicRuleCommand, se_DisableTopicRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableTopicRuleCommand}.
 */
export interface DisableTopicRuleCommandInput extends DisableTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link DisableTopicRuleCommand}.
 */
export interface DisableTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the rule.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DisableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DisableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DisableTopicRuleRequest
 *   ruleName: "STRING_VALUE", // required
 * };
 * const command = new DisableTopicRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableTopicRuleCommandInput - {@link DisableTopicRuleCommandInput}
 * @returns {@link DisableTopicRuleCommandOutput}
 * @see {@link DisableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DisableTopicRuleCommandOutput} for command's `response` shape.
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
export class DisableTopicRuleCommand extends $Command
  .classBuilder<
    DisableTopicRuleCommandInput,
    DisableTopicRuleCommandOutput,
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
  .s("AWSIotService", "DisableTopicRule", {})
  .n("IoTClient", "DisableTopicRuleCommand")
  .f(void 0, void 0)
  .ser(se_DisableTopicRuleCommand)
  .de(de_DisableTopicRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableTopicRuleRequest;
      output: {};
    };
    sdk: {
      input: DisableTopicRuleCommandInput;
      output: DisableTopicRuleCommandOutput;
    };
  };
}
