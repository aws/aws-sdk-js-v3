// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput } from "../models/models_0";
import { de_DescribeScalingPoliciesCommand, se_DescribeScalingPoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingPoliciesCommand}.
 */
export interface DescribeScalingPoliciesCommandInput extends DescribeScalingPoliciesInput {}
/**
 * @public
 *
 * The output of {@link DescribeScalingPoliciesCommand}.
 */
export interface DescribeScalingPoliciesCommandOutput extends DescribeScalingPoliciesOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Retrieves all scaling policies applied to a fleet.</p>
 *          <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request
 *             by policy status, such as to retrieve only active scaling policies. Use the pagination
 *             parameters to retrieve results as a set of sequential pages. If successful, set of
 *                 <code>ScalingPolicy</code> objects is returned for the fleet.</p>
 *          <p>A fleet may have all of its scaling policies suspended. This operation does not affect
 *             the status of the scaling policies, which remains ACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeScalingPoliciesInput
 *   FleetId: "STRING_VALUE", // required
 *   StatusFilter: "ACTIVE" || "UPDATE_REQUESTED" || "UPDATING" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "ERROR",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 * };
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingPoliciesOutput
 * //   ScalingPolicies: [ // ScalingPolicyList
 * //     { // ScalingPolicy
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "ACTIVE" || "UPDATE_REQUESTED" || "UPDATING" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "ERROR",
 * //       ScalingAdjustment: Number("int"),
 * //       ScalingAdjustmentType: "ChangeInCapacity" || "ExactCapacity" || "PercentChangeInCapacity",
 * //       ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold",
 * //       Threshold: Number("double"),
 * //       EvaluationPeriods: Number("int"),
 * //       MetricName: "ActivatingGameSessions" || "ActiveGameSessions" || "ActiveInstances" || "AvailableGameSessions" || "AvailablePlayerSessions" || "CurrentPlayerSessions" || "IdleInstances" || "PercentAvailableGameSessions" || "PercentIdleInstances" || "QueueDepth" || "WaitTime" || "ConcurrentActivatableGameSessions",
 * //       PolicyType: "RuleBased" || "TargetBased",
 * //       TargetConfiguration: { // TargetConfiguration
 * //         TargetValue: Number("double"), // required
 * //       },
 * //       UpdateStatus: "PENDING_UPDATE",
 * //       Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingPoliciesCommandInput - {@link DescribeScalingPoliciesCommandInput}
 * @returns {@link DescribeScalingPoliciesCommandOutput}
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DescribeScalingPoliciesCommand extends $Command
  .classBuilder<
    DescribeScalingPoliciesCommandInput,
    DescribeScalingPoliciesCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DescribeScalingPolicies", {})
  .n("GameLiftClient", "DescribeScalingPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScalingPoliciesCommand)
  .de(de_DescribeScalingPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScalingPoliciesInput;
      output: DescribeScalingPoliciesOutput;
    };
    sdk: {
      input: DescribeScalingPoliciesCommandInput;
      output: DescribeScalingPoliciesCommandOutput;
    };
  };
}
