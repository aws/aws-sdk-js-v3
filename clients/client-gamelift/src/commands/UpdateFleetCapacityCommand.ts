// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFleetCapacityInput, UpdateFleetCapacityOutput } from "../models/models_1";
import { UpdateFleetCapacity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Container
 *
 * Updates capacity settings for a managed EC2 fleet or managed container fleet. For these fleets, you adjust capacity by changing the number of instances in the fleet. Fleet capacity determines the number of game sessions and players that the fleet can host based on its configuration. For fleets with multiple locations, use this operation to manage capacity settings in each location individually.
 *
 * - Minimum/maximum size: Set hard limits on the number of Amazon EC2 instances allowed. If Amazon GameLift Servers receives a request--either through manual update or automatic scaling--it won't change the capacity to a value outside of this range.
 * - Desired capacity: As an alternative to automatic scaling, manually set the number of Amazon EC2 instances to be maintained. Before changing a fleet's desired capacity, check the maximum capacity of the fleet's Amazon EC2 instance type by calling [DescribeEC2InstanceLimits](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html).
 *
 * To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the `Location` parameter. The fleet must be in `ACTIVE` status.
 *
 * To update capacity for a fleet's remote location, set the `Location` parameter to the location to update. The location must be in `ACTIVE` status.
 *
 * If successful, Amazon GameLift Servers updates the capacity settings and returns the identifiers for the updated fleet and/or location. If a requested change to desired capacity exceeds the instance type's limit, the `LimitExceeded` exception occurs.
 *
 * Updates often prompt an immediate change in fleet capacity, such as when current capacity is different than the new desired capacity or outside the new limits. In this scenario, Amazon GameLift Servers automatically initiates steps to add or remove instances in the fleet location. You can track a fleet's current capacity by calling [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html) or [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html).
 *
 * Use ManagedCapacityConfiguration with the "SCALE_TO_AND_FROM_ZERO" ZeroCapacityStrategy to enable Amazon GameLift Servers to fully manage the MinSize value, switching between 0 and 1 based on game session activity. This is ideal for eliminating compute costs during periods of no game activity. It is particularly beneficial during development when you're away from your desk, iterating on builds for extended periods, in production environments serving low-traffic locations, or for games with long, predictable downtime windows. By automatically managing capacity between 0 and 1 instances, you avoid paying for idle instances while maintaining the ability to serve game sessions when demand arrives. Note that while scale-out is triggered immediately upon receiving a game session request, actual game session availability depends on your server process startup time, so this approach works best with multi-location Fleets where cold-start latency is tolerable. With a "MANUAL" ZeroCapacityStrategy Amazon GameLift Servers will not modify Fleet MinSize values automatically and will not scale out from zero instances in response to game sessions. This is configurable per-location.
 *
 * **Learn more**
 *
 * [Scaling fleet capacity](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html)
 *
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
 *   ManagedCapacityConfiguration: { // ManagedCapacityConfiguration
 *     ZeroCapacityStrategy: "MANUAL" || "SCALE_TO_AND_FROM_ZERO",
 *     ScaleInAfterInactivityMinutes: Number("int"),
 *   },
 * };
 * const command = new UpdateFleetCapacityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetCapacityOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   Location: "STRING_VALUE",
 * //   ManagedCapacityConfiguration: { // ManagedCapacityConfiguration
 * //     ZeroCapacityStrategy: "MANUAL" || "SCALE_TO_AND_FROM_ZERO",
 * //     ScaleInAfterInactivityMinutes: Number("int"),
 * //   },
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
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
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
export class UpdateFleetCapacityCommand extends command<UpdateFleetCapacityCommandInput, UpdateFleetCapacityCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFleetCapacity",
  UpdateFleetCapacity$
) {
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
