// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteScalingPolicyInput } from "../models/models_0";
import { de_DeleteScalingPolicyCommand, se_DeleteScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScalingPolicyCommand}.
 */
export interface DeleteScalingPolicyCommandInput extends DeleteScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteScalingPolicyCommand}.
 */
export interface DeleteScalingPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and
 *             Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling
 *             policy name and the fleet ID it is associated with.</p>
 *          <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the
 *             fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DeleteScalingPolicyInput
 *   Name: "STRING_VALUE", // required
 *   FleetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScalingPolicyCommandInput - {@link DeleteScalingPolicyCommandInput}
 * @returns {@link DeleteScalingPolicyCommandOutput}
 * @see {@link DeleteScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPolicyCommandOutput} for command's `response` shape.
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
export class DeleteScalingPolicyCommand extends $Command
  .classBuilder<
    DeleteScalingPolicyCommandInput,
    DeleteScalingPolicyCommandOutput,
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
  .s("GameLift", "DeleteScalingPolicy", {})
  .n("GameLiftClient", "DeleteScalingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteScalingPolicyCommand)
  .de(de_DeleteScalingPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScalingPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteScalingPolicyCommandInput;
      output: DeleteScalingPolicyCommandOutput;
    };
  };
}
