// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListRuleNamesByTargetRequest, ListRuleNamesByTargetResponse } from "../models/models_0";
import { de_ListRuleNamesByTargetCommand, se_ListRuleNamesByTargetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleNamesByTargetCommand}.
 */
export interface ListRuleNamesByTargetCommandInput extends ListRuleNamesByTargetRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleNamesByTargetCommand}.
 */
export interface ListRuleNamesByTargetCommandOutput extends ListRuleNamesByTargetResponse, __MetadataBearer {}

/**
 * <p>Lists the rules for the specified target. You can see which of the rules in Amazon
 *       EventBridge can invoke a specific target in your account.</p>
 *          <p>The maximum number of results per page for requests is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListRuleNamesByTargetCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListRuleNamesByTargetCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EventBridgeClient(config);
 * const input = { // ListRuleNamesByTargetRequest
 *   TargetArn: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListRuleNamesByTargetCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleNamesByTargetResponse
 * //   RuleNames: [ // RuleNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleNamesByTargetCommandInput - {@link ListRuleNamesByTargetCommandInput}
 * @returns {@link ListRuleNamesByTargetCommandOutput}
 * @see {@link ListRuleNamesByTargetCommandInput} for command's `input` shape.
 * @see {@link ListRuleNamesByTargetCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export class ListRuleNamesByTargetCommand extends $Command
  .classBuilder<
    ListRuleNamesByTargetCommandInput,
    ListRuleNamesByTargetCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListRuleNamesByTarget", {})
  .n("EventBridgeClient", "ListRuleNamesByTargetCommand")
  .f(void 0, void 0)
  .ser(se_ListRuleNamesByTargetCommand)
  .de(de_ListRuleNamesByTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleNamesByTargetRequest;
      output: ListRuleNamesByTargetResponse;
    };
    sdk: {
      input: ListRuleNamesByTargetCommandInput;
      output: ListRuleNamesByTargetCommandOutput;
    };
  };
}
