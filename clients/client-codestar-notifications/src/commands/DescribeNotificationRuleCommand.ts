// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeNotificationRuleRequest,
  DescribeNotificationRuleResult,
  DescribeNotificationRuleResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeNotificationRuleCommand, se_DescribeNotificationRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationRuleCommand}.
 */
export interface DescribeNotificationRuleCommandInput extends DescribeNotificationRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationRuleCommand}.
 */
export interface DescribeNotificationRuleCommandOutput extends DescribeNotificationRuleResult, __MetadataBearer {}

/**
 * <p>Returns information about a specified notification rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DescribeNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DescribeNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodestarNotificationsClient(config);
 * const input = { // DescribeNotificationRuleRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DescribeNotificationRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationRuleResult
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE",
 * //   EventTypes: [ // EventTypeBatch
 * //     { // EventTypeSummary
 * //       EventTypeId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       EventTypeName: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Resource: "STRING_VALUE",
 * //   Targets: [ // TargetsBatch
 * //     { // TargetSummary
 * //       TargetAddress: "STRING_VALUE",
 * //       TargetType: "STRING_VALUE",
 * //       TargetStatus: "PENDING" || "ACTIVE" || "UNREACHABLE" || "INACTIVE" || "DEACTIVATED",
 * //     },
 * //   ],
 * //   DetailType: "BASIC" || "FULL",
 * //   CreatedBy: "STRING_VALUE",
 * //   Status: "ENABLED" || "DISABLED",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNotificationRuleCommandInput - {@link DescribeNotificationRuleCommandInput}
 * @returns {@link DescribeNotificationRuleCommandOutput}
 * @see {@link DescribeNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>AWS CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link CodestarNotificationsServiceException}
 * <p>Base exception class for all service exceptions from CodestarNotifications service.</p>
 *
 * @public
 */
export class DescribeNotificationRuleCommand extends $Command
  .classBuilder<
    DescribeNotificationRuleCommandInput,
    DescribeNotificationRuleCommandOutput,
    CodestarNotificationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodestarNotificationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStarNotifications_20191015", "DescribeNotificationRule", {})
  .n("CodestarNotificationsClient", "DescribeNotificationRuleCommand")
  .f(void 0, DescribeNotificationRuleResultFilterSensitiveLog)
  .ser(se_DescribeNotificationRuleCommand)
  .de(de_DescribeNotificationRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotificationRuleRequest;
      output: DescribeNotificationRuleResult;
    };
    sdk: {
      input: DescribeNotificationRuleCommandInput;
      output: DescribeNotificationRuleCommandOutput;
    };
  };
}
