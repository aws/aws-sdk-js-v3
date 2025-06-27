// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListTopicRulesRequest, ListTopicRulesResponse } from "../models/models_2";
import { de_ListTopicRulesCommand, se_ListTopicRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTopicRulesCommand}.
 */
export interface ListTopicRulesCommandInput extends ListTopicRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicRulesCommand}.
 */
export interface ListTopicRulesCommandOutput extends ListTopicRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the rules for the specific topic.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRulesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRulesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListTopicRulesRequest
 *   topic: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   ruleDisabled: true || false,
 * };
 * const command = new ListTopicRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicRulesResponse
 * //   rules: [ // TopicRuleList
 * //     { // TopicRuleListItem
 * //       ruleArn: "STRING_VALUE",
 * //       ruleName: "STRING_VALUE",
 * //       topicPattern: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       ruleDisabled: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicRulesCommandInput - {@link ListTopicRulesCommandInput}
 * @returns {@link ListTopicRulesCommandOutput}
 * @see {@link ListTopicRulesCommandInput} for command's `input` shape.
 * @see {@link ListTopicRulesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListTopicRulesCommand extends $Command
  .classBuilder<
    ListTopicRulesCommandInput,
    ListTopicRulesCommandOutput,
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
  .s("AWSIotService", "ListTopicRules", {})
  .n("IoTClient", "ListTopicRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListTopicRulesCommand)
  .de(de_ListTopicRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicRulesRequest;
      output: ListTopicRulesResponse;
    };
    sdk: {
      input: ListTopicRulesCommandInput;
      output: ListTopicRulesCommandOutput;
    };
  };
}
