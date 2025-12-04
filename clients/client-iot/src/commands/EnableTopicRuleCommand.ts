// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { EnableTopicRuleRequest } from "../models/models_1";
import { EnableTopicRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableTopicRuleCommand}.
 */
export interface EnableTopicRuleCommandInput extends EnableTopicRuleRequest {}
/**
 * @public
 *
 * The output of {@link EnableTopicRuleCommand}.
 */
export interface EnableTopicRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the rule.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, EnableTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, EnableTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // EnableTopicRuleRequest
 *   ruleName: "STRING_VALUE", // required
 * };
 * const command = new EnableTopicRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableTopicRuleCommandInput - {@link EnableTopicRuleCommandInput}
 * @returns {@link EnableTopicRuleCommandOutput}
 * @see {@link EnableTopicRuleCommandInput} for command's `input` shape.
 * @see {@link EnableTopicRuleCommandOutput} for command's `response` shape.
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
export class EnableTopicRuleCommand extends $Command
  .classBuilder<
    EnableTopicRuleCommandInput,
    EnableTopicRuleCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "EnableTopicRule", {})
  .n("IoTClient", "EnableTopicRuleCommand")
  .sc(EnableTopicRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableTopicRuleRequest;
      output: {};
    };
    sdk: {
      input: EnableTopicRuleCommandInput;
      output: EnableTopicRuleCommandOutput;
    };
  };
}
