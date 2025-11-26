// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { UpdateFleetCapacityInput, UpdateFleetCapacityOutput } from "../models/models_0";
import { UpdateFleetCapacity } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFleetCapacityCommand}.
 */
export interface UpdateFleetCapacityCommandInput extends UpdateFleetCapacityInput {}
/**
 * @public
 *
 * The output of {@link UpdateFleetCapacityCommand}.
 */
export interface UpdateFleetCapacityCommandOutput extends UpdateFleetCapacityOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Container</p>
 *          <p>Updates capacity settings for a managed EC2 fleet or managed container fleet. For these
 *             fleets, you adjust capacity by changing the number of instances in the fleet. Fleet
 *             capacity determines the number of game sessions and players that the fleet can host
 *             based on its configuration. For fleets with multiple locations, use this operation to
 *             manage capacity settings in each location individually.</p>
 *          <p>Use this operation to set these fleet capacity properties: </p>
 *          <ul>
 *             <li>
 *                <p>Minimum/maximum size: Set hard limits on the number of Amazon EC2 instances allowed. If Amazon GameLift Servers receives a
 *                     request--either through manual update or automatic scaling--it won't change the capacity
 *                     to a value outside of this range.</p>
 *             </li>
 *             <li>
 *                <p>Desired capacity: As an alternative to automatic scaling, manually set the number of Amazon EC2
 *                     instances to be maintained.
 *                     Before changing a fleet's desired capacity, check the maximum capacity of the
 *                     fleet's Amazon EC2 instance type by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a>.</p>
 *             </li>
 *          </ul>
 *          <p>To update capacity for a fleet's home Region, or if the fleet has no remote
 *             locations, omit the <code>Location</code> parameter. The fleet must be in
 *             <code>ACTIVE</code> status. </p>
 *          <p>To update capacity for a fleet's remote location, set the
 *             <code>Location</code> parameter to the location to update. The location must be in
 *             <code>ACTIVE</code> status.</p>
 *          <p>If successful, Amazon GameLift Servers updates the capacity settings and returns the identifiers for
 *             the updated fleet and/or location. If a requested change to desired capacity exceeds the
 *             instance type's limit, the <code>LimitExceeded</code> exception occurs. </p>
 *          <p>Updates often prompt an immediate change in fleet capacity, such as when current
 *             capacity is different than the new desired capacity or outside the new limits. In this
 *             scenario, Amazon GameLift Servers automatically initiates steps to add or remove instances in the fleet
 *             location. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet
 *                         capacity</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetCapacityCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetCapacityCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateFleetCapacityInput
 *   FleetId: "STRING_VALUE", // required
 *   DesiredInstances: Number("int"),
 *   MinSize: Number("int"),
 *   MaxSize: Number("int"),
 *   Location: "STRING_VALUE",
 * };
 * const command = new UpdateFleetCapacityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetCapacityOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFleetCapacityCommandInput - {@link UpdateFleetCapacityCommandInput}
 * @returns {@link UpdateFleetCapacityCommandOutput}
 * @see {@link UpdateFleetCapacityCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCapacityCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
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
export class UpdateFleetCapacityCommand extends $Command
  .classBuilder<
    UpdateFleetCapacityCommandInput,
    UpdateFleetCapacityCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "UpdateFleetCapacity", {})
  .n("GameLiftClient", "UpdateFleetCapacityCommand")
  .sc(UpdateFleetCapacity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFleetCapacityInput;
      output: UpdateFleetCapacityOutput;
    };
    sdk: {
      input: UpdateFleetCapacityCommandInput;
      output: UpdateFleetCapacityCommandOutput;
    };
  };
}
