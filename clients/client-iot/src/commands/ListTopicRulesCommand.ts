// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTopicRulesRequest, ListTopicRulesResponse } from "../models/models_2";
import { ListTopicRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the rules for the specific topic.
 *
 * Requires permission to access the [ListTopicRules](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRulesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRulesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListTopicRulesCommand extends command<ListTopicRulesCommandInput, ListTopicRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListTopicRules",
  ListTopicRules$
) {
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
