// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScalingPolicyInput } from "../models/models_0";
import { DeleteScalingPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Container
 *
 * Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift Servers removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.
 *
 * To temporarily suspend scaling policies, use [StopFleetActions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html). This operation suspends all policies for the fleet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DeleteScalingPolicyCommand extends command<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScalingPolicy",
  DeleteScalingPolicy$
) {
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
