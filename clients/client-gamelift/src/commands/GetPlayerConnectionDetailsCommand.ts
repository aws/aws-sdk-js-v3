// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { GetPlayerConnectionDetailsInput, GetPlayerConnectionDetailsOutput } from "../models/models_0";
import { GetPlayerConnectionDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlayerConnectionDetailsCommand}.
 */
export interface GetPlayerConnectionDetailsCommandInput extends GetPlayerConnectionDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetPlayerConnectionDetailsCommand}.
 */
export interface GetPlayerConnectionDetailsCommandOutput extends GetPlayerConnectionDetailsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2 (server SDK 5.x or later), Container</p>
 *          <p>Retrieves connection details for game clients to connect to game sessions. </p>
 *          <p>
 *             <b>Player gateway benefits:</b> DDoS protection with negligible impact to latency. </p>
 *          <p>To enable player gateway on your fleet, set <code>PlayerGatewayMode</code> to <code>ENABLED</code> or <code>REQUIRED</code> when calling
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html">CreateFleet</a> or
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerFleet.html">CreateContainerFleet</a>.</p>
 *          <p>
 *             <b>How to use:</b> After creating a game session and adding players, call this operation with the game session ID and player IDs. When player gateway is enabled, the response includes connection endpoints and player gateway tokens that your game clients can use to connect to the game session through player gateway. To learn more about player gateway integration,  see <a href="https://docs.aws.amazon.com/gameliftservers/latest/developerguide/ddos-protection-intro.html">DDoS protection with Amazon GameLift Servers player gateway</a>.</p>
 *          <p>When player gateway is disabled or in locations where player gateway is not supported, this operation returns game server connection information without player gateway tokens, so that your game clients directly connect to the game server endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetPlayerConnectionDetailsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetPlayerConnectionDetailsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // GetPlayerConnectionDetailsInput
 *   GameSessionId: "STRING_VALUE", // required
 *   PlayerIds: [ // PlayerIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetPlayerConnectionDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetPlayerConnectionDetailsOutput
 * //   GameSessionId: "STRING_VALUE",
 * //   PlayerConnectionDetails: [ // PlayerConnectionDetailList
 * //     { // PlayerConnectionDetail
 * //       PlayerId: "STRING_VALUE",
 * //       Endpoints: [ // PlayerConnectionEndpointList
 * //         { // PlayerConnectionEndpoint
 * //           IpAddress: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //       ],
 * //       PlayerGatewayToken: "STRING_VALUE",
 * //       Expiration: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlayerConnectionDetailsCommandInput - {@link GetPlayerConnectionDetailsCommandInput}
 * @returns {@link GetPlayerConnectionDetailsCommandOutput}
 * @see {@link GetPlayerConnectionDetailsCommandInput} for command's `input` shape.
 * @see {@link GetPlayerConnectionDetailsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidGameSessionStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
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
export class GetPlayerConnectionDetailsCommand extends $Command
  .classBuilder<
    GetPlayerConnectionDetailsCommandInput,
    GetPlayerConnectionDetailsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "GetPlayerConnectionDetails", {})
  .n("GameLiftClient", "GetPlayerConnectionDetailsCommand")
  .sc(GetPlayerConnectionDetails$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlayerConnectionDetailsInput;
      output: GetPlayerConnectionDetailsOutput;
    };
    sdk: {
      input: GetPlayerConnectionDetailsCommandInput;
      output: GetPlayerConnectionDetailsCommandOutput;
    };
  };
}
