// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetEventsInput, DescribeFleetEventsOutput } from "../models/models_0";
import { de_DescribeFleetEventsCommand, se_DescribeFleetEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetEventsCommand}.
 */
export interface DescribeFleetEventsCommandInput extends DescribeFleetEventsInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetEventsCommand}.
 */
export interface DescribeFleetEventsCommandOutput extends DescribeFleetEventsOutput, __MetadataBearer {}

/**
 * <p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in
 *             status, such as during fleet creation and termination, changes in capacity, etc. If a
 *             fleet has multiple locations, events are also initiated by changes to status and
 *             capacity in remote locations. </p>
 *          <p>You can specify a time range to limit the result set. Use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a collection of event log entries matching the request are
 *             returned.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetEventsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetEventsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetEventsInput
 *   FleetId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetEventsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetEventsOutput
 * //   Events: [ // EventList
 * //     { // Event
 * //       EventId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       EventCode: "GENERIC_EVENT" || "FLEET_CREATED" || "FLEET_DELETED" || "FLEET_SCALING_EVENT" || "FLEET_STATE_DOWNLOADING" || "FLEET_STATE_VALIDATING" || "FLEET_STATE_BUILDING" || "FLEET_STATE_ACTIVATING" || "FLEET_STATE_ACTIVE" || "FLEET_STATE_ERROR" || "FLEET_STATE_PENDING" || "FLEET_STATE_CREATING" || "FLEET_STATE_CREATED" || "FLEET_STATE_UPDATING" || "FLEET_INITIALIZATION_FAILED" || "FLEET_BINARY_DOWNLOAD_FAILED" || "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND" || "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE" || "FLEET_VALIDATION_TIMED_OUT" || "FLEET_ACTIVATION_FAILED" || "FLEET_ACTIVATION_FAILED_NO_INSTANCES" || "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED" || "SERVER_PROCESS_INVALID_PATH" || "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT" || "SERVER_PROCESS_PROCESS_READY_TIMEOUT" || "SERVER_PROCESS_CRASHED" || "SERVER_PROCESS_TERMINATED_UNHEALTHY" || "SERVER_PROCESS_FORCE_TERMINATED" || "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT" || "SERVER_PROCESS_SDK_INITIALIZATION_FAILED" || "SERVER_PROCESS_MISCONFIGURED_CONTAINER_PORT" || "GAME_SESSION_ACTIVATION_TIMEOUT" || "FLEET_CREATION_EXTRACTING_BUILD" || "FLEET_CREATION_RUNNING_INSTALLER" || "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG" || "FLEET_VPC_PEERING_SUCCEEDED" || "FLEET_VPC_PEERING_FAILED" || "FLEET_VPC_PEERING_DELETED" || "INSTANCE_INTERRUPTED" || "INSTANCE_RECYCLED" || "INSTANCE_REPLACED_UNHEALTHY" || "FLEET_CREATION_COMPLETED_INSTALLER" || "FLEET_CREATION_FAILED_INSTALLER" || "COMPUTE_LOG_UPLOAD_FAILED" || "GAME_SERVER_CONTAINER_GROUP_CRASHED" || "PER_INSTANCE_CONTAINER_GROUP_CRASHED" || "GAME_SERVER_CONTAINER_GROUP_REPLACED_UNHEALTHY" || "LOCATION_STATE_PENDING" || "LOCATION_STATE_CREATING" || "LOCATION_STATE_CREATED" || "LOCATION_STATE_ACTIVATING" || "LOCATION_STATE_ACTIVE" || "LOCATION_STATE_UPDATING" || "LOCATION_STATE_ERROR" || "LOCATION_STATE_DELETING" || "LOCATION_STATE_DELETED",
 * //       Message: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       PreSignedLogUrl: "STRING_VALUE",
 * //       Count: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetEventsCommandInput - {@link DescribeFleetEventsCommandInput}
 * @returns {@link DescribeFleetEventsCommandOutput}
 * @see {@link DescribeFleetEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetEventsCommandOutput} for command's `response` shape.
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
export class DescribeFleetEventsCommand extends $Command
  .classBuilder<
    DescribeFleetEventsCommandInput,
    DescribeFleetEventsCommandOutput,
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
  .s("GameLift", "DescribeFleetEvents", {})
  .n("GameLiftClient", "DescribeFleetEventsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetEventsCommand)
  .de(de_DescribeFleetEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetEventsInput;
      output: DescribeFleetEventsOutput;
    };
    sdk: {
      input: DescribeFleetEventsCommandInput;
      output: DescribeFleetEventsCommandOutput;
    };
  };
}
