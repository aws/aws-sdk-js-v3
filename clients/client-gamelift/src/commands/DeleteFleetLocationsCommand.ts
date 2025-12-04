// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { DeleteFleetLocationsInput, DeleteFleetLocationsOutput } from "../models/models_0";
import { DeleteFleetLocations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetLocationsCommand}.
 */
export interface DeleteFleetLocationsCommandInput extends DeleteFleetLocationsInput {}
/**
 * @public
 *
 * The output of {@link DeleteFleetLocationsCommand}.
 */
export interface DeleteFleetLocationsCommandOutput extends DeleteFleetLocationsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Container</p>
 *          <p>Removes locations from a multi-location fleet. When deleting a location, all game
 *             server process and all instances that are still active in the location are shut down. </p>
 *          <p>To delete fleet locations, identify the fleet ID and provide a list of the locations
 *             to be deleted. </p>
 *          <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins
 *             to shut down existing server processes and terminate instances in each location being
 *             deleted. When completed, the location status changes to <code>TERMINATED</code>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Servers
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteFleetLocationsInput
 *   FleetId: "STRING_VALUE", // required
 *   Locations: [ // LocationList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteFleetLocationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetLocationsOutput
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
 * @param DeleteFleetLocationsCommandInput - {@link DeleteFleetLocationsCommandInput}
 * @returns {@link DeleteFleetLocationsCommandOutput}
 * @see {@link DeleteFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetLocationsCommandOutput} for command's `response` shape.
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
export class DeleteFleetLocationsCommand extends $Command
  .classBuilder<
    DeleteFleetLocationsCommandInput,
    DeleteFleetLocationsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DeleteFleetLocations", {})
  .n("GameLiftClient", "DeleteFleetLocationsCommand")
  .sc(DeleteFleetLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFleetLocationsInput;
      output: DeleteFleetLocationsOutput;
    };
    sdk: {
      input: DeleteFleetLocationsCommandInput;
      output: DeleteFleetLocationsCommandOutput;
    };
  };
}
