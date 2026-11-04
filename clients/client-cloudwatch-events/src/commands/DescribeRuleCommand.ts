// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRuleRequest, DescribeRuleResponse } from "../models/models_0";
import { DescribeRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the specified rule.
 *
 * DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use [ListTargetsByRule](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
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
 * //   State: "ENABLED" || "DISABLED",
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
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link CloudWatchEventsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchEvents service.
 *
 * @public
 */
export class DescribeRuleCommand extends command<DescribeRuleCommandInput, DescribeRuleCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRule",
  DescribeRule$
) {
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
