// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateFleetLocationsInput, CreateFleetLocationsOutput } from "../models/models_0";
import { CreateFleetLocations } from "../schemas/schemas_23_Fleet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetLocationsCommand}.
 */
export interface CreateFleetLocationsCommandInput extends CreateFleetLocationsInput {}
/**
 * @public
 *
 * The output of {@link CreateFleetLocationsCommand}.
 */
export interface CreateFleetLocationsCommandOutput extends CreateFleetLocationsOutput, __MetadataBearer {}

/**
 * <p>Adds remote locations to an EC2 and begins populating the new locations with
 *             instances. The new instances conform to the fleet's instance type, auto-scaling, and
 *             other configuration settings.</p>
 *          <note>
 *             <p>You can't add remote locations to a fleet that resides in an Amazon Web Services Region that
 *                 doesn't support multiple locations. Fleets created prior to March 2021 can't support
 *                 multiple locations.</p>
 *          </note>
 *          <p>To add fleet locations, specify the fleet to be updated and provide a list of one or
 *             more locations. </p>
 *          <p>If successful, this operation returns the list of added locations with their status
 *             set to <code>NEW</code>. Amazon GameLift Servers initiates the process of starting an instance in each
 *             added location. You can track the status of each new location by monitoring location
 *             creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up
 *             fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-editing.html#fleets-update-locations">Update fleet locations</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html">
 *                 Amazon GameLift Servers service locations</a> for managed hosting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateFleetLocationsInput
 *   FleetId: "STRING_VALUE", // required
 *   Locations: [ // LocationConfigurationList // required
 *     { // LocationConfiguration
 *       Location: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFleetLocationsCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetLocationsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   LocationStates: [ // LocationStateList
 * //     { // LocationState
 * //       Location: "STRING_VALUE",
 * //       Status: "NEW" || "DOWNLOADING" || "VALIDATING" || "BUILDING" || "ACTIVATING" || "ACTIVE" || "DELETING" || "ERROR" || "TERMINATED" || "NOT_FOUND",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateFleetLocationsCommandInput - {@link CreateFleetLocationsCommandInput}
 * @returns {@link CreateFleetLocationsCommandOutput}
 * @see {@link CreateFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link CreateFleetLocationsCommandOutput} for command's `response` shape.
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
 * @throws {@link NotReadyException} (client fault)
 *  <p> The operation failed because Amazon GameLift Servers has not yet finished validating this compute. We
 *             recommend attempting 8 to 10 retries over 3 to 5 minutes with <a href="http://aws.amazon.com/blogs/https:/aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/">exponential
 *                 backoffs and jitter</a>. </p>
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
export class CreateFleetLocationsCommand extends $Command
  .classBuilder<
    CreateFleetLocationsCommandInput,
    CreateFleetLocationsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "CreateFleetLocations", {})
  .n("GameLiftClient", "CreateFleetLocationsCommand")
  .sc(CreateFleetLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetLocationsInput;
      output: CreateFleetLocationsOutput;
    };
    sdk: {
      input: CreateFleetLocationsCommandInput;
      output: CreateFleetLocationsCommandOutput;
    };
  };
}
