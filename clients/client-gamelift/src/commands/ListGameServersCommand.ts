// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListGameServersInput, ListGameServersOutput } from "../models/models_1";
import { de_ListGameServersCommand, se_ListGameServersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGameServersCommand}.
 */
export interface ListGameServersCommandInput extends ListGameServersInput {}
/**
 * @public
 *
 * The output of {@link ListGameServersCommand}.
 */
export interface ListGameServersCommandOutput extends ListGameServersOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift Servers FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Retrieves information on all game
 *             servers that are currently active in a specified game server group. You can opt to sort
 *             the list by game server age. Use the pagination parameters to retrieve results in a set
 *             of sequential segments. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift Servers FleetIQ
 *                 Guide</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListGameServersCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListGameServersCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // ListGameServersInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGameServersCommand(input);
 * const response = await client.send(command);
 * // { // ListGameServersOutput
 * //   GameServers: [ // GameServers
 * //     { // GameServer
 * //       GameServerGroupName: "STRING_VALUE",
 * //       GameServerGroupArn: "STRING_VALUE",
 * //       GameServerId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       ConnectionInfo: "STRING_VALUE",
 * //       GameServerData: "STRING_VALUE",
 * //       ClaimStatus: "CLAIMED",
 * //       UtilizationStatus: "AVAILABLE" || "UTILIZED",
 * //       RegistrationTime: new Date("TIMESTAMP"),
 * //       LastClaimTime: new Date("TIMESTAMP"),
 * //       LastHealthCheckTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGameServersCommandInput - {@link ListGameServersCommandInput}
 * @returns {@link ListGameServersCommandOutput}
 * @see {@link ListGameServersCommandInput} for command's `input` shape.
 * @see {@link ListGameServersCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class ListGameServersCommand extends $Command
  .classBuilder<
    ListGameServersCommandInput,
    ListGameServersCommandOutput,
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
  .s("GameLift", "ListGameServers", {})
  .n("GameLiftClient", "ListGameServersCommand")
  .f(void 0, void 0)
  .ser(se_ListGameServersCommand)
  .de(de_ListGameServersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGameServersInput;
      output: ListGameServersOutput;
    };
    sdk: {
      input: ListGameServersCommandInput;
      output: ListGameServersCommandOutput;
    };
  };
}
