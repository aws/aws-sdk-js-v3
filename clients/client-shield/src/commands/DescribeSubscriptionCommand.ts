// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSubscriptionRequest, DescribeSubscriptionResponse } from "../models/models_0";
import { de_DescribeSubscriptionCommand, se_DescribeSubscriptionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubscriptionCommand}.
 */
export interface DescribeSubscriptionCommandInput extends DescribeSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubscriptionCommand}.
 */
export interface DescribeSubscriptionCommandOutput extends DescribeSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Provides details about the Shield Advanced subscription for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DescribeSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubscriptionResponse
 * //   Subscription: { // Subscription
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     TimeCommitmentInSeconds: Number("long"),
 * //     AutoRenew: "ENABLED" || "DISABLED",
 * //     Limits: [ // Limits
 * //       { // Limit
 * //         Type: "STRING_VALUE",
 * //         Max: Number("long"),
 * //       },
 * //     ],
 * //     ProactiveEngagementStatus: "ENABLED" || "DISABLED" || "PENDING",
 * //     SubscriptionLimits: { // SubscriptionLimits
 * //       ProtectionLimits: { // ProtectionLimits
 * //         ProtectedResourceTypeLimits: [ // required
 * //           {
 * //             Type: "STRING_VALUE",
 * //             Max: Number("long"),
 * //           },
 * //         ],
 * //       },
 * //       ProtectionGroupLimits: { // ProtectionGroupLimits
 * //         MaxProtectionGroups: Number("long"), // required
 * //         PatternTypeLimits: { // ProtectionGroupPatternTypeLimits
 * //           ArbitraryPatternLimits: { // ProtectionGroupArbitraryPatternLimits
 * //             MaxMembers: Number("long"), // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //     SubscriptionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSubscriptionCommandInput - {@link DescribeSubscriptionCommandInput}
 * @returns {@link DescribeSubscriptionCommandOutput}
 * @see {@link DescribeSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class DescribeSubscriptionCommand extends $Command
  .classBuilder<
    DescribeSubscriptionCommandInput,
    DescribeSubscriptionCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "DescribeSubscription", {})
  .n("ShieldClient", "DescribeSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSubscriptionCommand)
  .de(de_DescribeSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeSubscriptionResponse;
    };
    sdk: {
      input: DescribeSubscriptionCommandInput;
      output: DescribeSubscriptionCommandOutput;
    };
  };
}
