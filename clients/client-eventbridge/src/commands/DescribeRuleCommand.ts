// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeRuleRequest, DescribeRuleResponse } from "../models/models_0";
import { DescribeRule } from "../schemas/schemas_7_Rule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleCommand}.
 */
export interface DescribeRuleCommandInput extends DescribeRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleCommand}.
 */
export interface DescribeRuleCommandOutput extends DescribeRuleResponse, __MetadataBearer {}

/**
 * <p>Describes the specified rule.</p>
 *          <p>DescribeRule does not list the targets of a rule. To see the targets associated with a
 *       rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeRuleCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeRuleCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // DescribeRuleRequest
 *   Name: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 * };
 * const command = new DescribeRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   EventPattern: "STRING_VALUE",
 * //   ScheduleExpression: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS",
 * //   Description: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   ManagedBy: "STRING_VALUE",
 * //   EventBusName: "STRING_VALUE",
 * //   CreatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRuleCommandInput - {@link DescribeRuleCommandInput}
 * @returns {@link DescribeRuleCommandOutput}
 * @see {@link DescribeRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeRuleCommand extends $Command
  .classBuilder<
    DescribeRuleCommandInput,
    DescribeRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DescribeRule", {})
  .n("EventBridgeClient", "DescribeRuleCommand")
  .sc(DescribeRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleRequest;
      output: DescribeRuleResponse;
    };
    sdk: {
      input: DescribeRuleCommandInput;
      output: DescribeRuleCommandOutput;
    };
  };
}
