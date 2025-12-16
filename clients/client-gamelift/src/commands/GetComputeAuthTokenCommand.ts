// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { GetComputeAuthTokenInput, GetComputeAuthTokenOutput } from "../models/models_0";
import { GetComputeAuthToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComputeAuthTokenCommand}.
 */
export interface GetComputeAuthTokenCommandInput extends GetComputeAuthTokenInput {}
/**
 * @public
 *
 * The output of {@link GetComputeAuthTokenCommand}.
 */
export interface GetComputeAuthTokenCommandOutput extends GetComputeAuthTokenOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Requests an authentication token from Amazon GameLift Servers for a compute resource in an Amazon GameLift Servers
 *             fleet. Game servers that are running on the compute use this token to communicate
 *             with the Amazon GameLift Servers service, such as when calling the Amazon GameLift Servers server SDK action
 *                 <code>InitSDK()</code>. Authentication tokens are valid for a limited time span, so
 *             you need to request a fresh token before the current token expires.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>For managed EC2 fleets (compute type <code>EC2</code>), auth token retrieval
 *                     and refresh is handled automatically. All game servers that are running on all
 *                     fleet instances have access to a valid auth token.</p>
 *             </li>
 *             <li>
 *                <p>For Anywhere fleets (compute type <code>ANYWHERE</code>), if you're using the
 *                     Amazon GameLift Servers Agent, auth token retrieval and refresh is handled automatically for any
 *                     compute where the Agent is running. If you're not using
 *                     the Agent, create a mechanism to retrieve and refresh auth tokens for computes
 *                     that are running game server processes.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an
 *                         Anywhere fleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your
 *                         integration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Server SDK
 *                         reference guides</a> (for version 5.x)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAuthTokenCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAuthTokenCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // GetComputeAuthTokenInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 * };
 * const command = new GetComputeAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetComputeAuthTokenOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   ComputeName: "STRING_VALUE",
 * //   ComputeArn: "STRING_VALUE",
 * //   AuthToken: "STRING_VALUE",
 * //   ExpirationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetComputeAuthTokenCommandInput - {@link GetComputeAuthTokenCommandInput}
 * @returns {@link GetComputeAuthTokenCommandOutput}
 * @see {@link GetComputeAuthTokenCommandInput} for command's `input` shape.
 * @see {@link GetComputeAuthTokenCommandOutput} for command's `response` shape.
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
export class GetComputeAuthTokenCommand extends $Command
  .classBuilder<
    GetComputeAuthTokenCommandInput,
    GetComputeAuthTokenCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "GetComputeAuthToken", {})
  .n("GameLiftClient", "GetComputeAuthTokenCommand")
  .sc(GetComputeAuthToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComputeAuthTokenInput;
      output: GetComputeAuthTokenOutput;
    };
    sdk: {
      input: GetComputeAuthTokenCommandInput;
      output: GetComputeAuthTokenCommandOutput;
    };
  };
}
