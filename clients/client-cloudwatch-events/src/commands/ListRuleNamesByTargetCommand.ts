// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListRuleNamesByTargetCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListRuleNamesByTargetCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
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
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class ListRuleNamesByTargetCommand extends $Command
  .classBuilder<
    ListRuleNamesByTargetCommandInput,
    ListRuleNamesByTargetCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListRuleNamesByTarget", {})
  .n("CloudWatchEventsClient", "ListRuleNamesByTargetCommand")
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
