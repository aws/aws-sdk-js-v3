// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ResolveAliasInput, ResolveAliasOutput } from "../models/models_1";
import { de_ResolveAliasCommand, se_ResolveAliasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResolveAliasCommand}.
 */
export interface ResolveAliasCommandInput extends ResolveAliasInput {}
/**
 * @public
 *
 * The output of {@link ResolveAliasCommand}.
 */
export interface ResolveAliasCommandOutput extends ResolveAliasOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Attempts to retrieve a fleet ID that is associated with an alias. Specify a unique
 *             alias identifier.</p>
 *          <p>If the alias has a <code>SIMPLE</code> routing strategy, Amazon GameLift Servers returns a fleet ID.
 *             If the alias has a <code>TERMINAL</code> routing strategy, the result is a
 *                 <code>TerminalRoutingStrategyException</code>.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ResolveAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResolveAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ResolveAliasInput
 *   AliasId: "STRING_VALUE", // required
 * };
 * const command = new ResolveAliasCommand(input);
 * const response = await client.send(command);
 * // { // ResolveAliasOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResolveAliasCommandInput - {@link ResolveAliasCommandInput}
 * @returns {@link ResolveAliasCommandOutput}
 * @see {@link ResolveAliasCommandInput} for command's `input` shape.
 * @see {@link ResolveAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *  <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
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
export class ResolveAliasCommand extends $Command
  .classBuilder<
    ResolveAliasCommandInput,
    ResolveAliasCommandOutput,
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
  .s("GameLift", "ResolveAlias", {})
  .n("GameLiftClient", "ResolveAliasCommand")
  .f(void 0, void 0)
  .ser(se_ResolveAliasCommand)
  .de(de_ResolveAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResolveAliasInput;
      output: ResolveAliasOutput;
    };
    sdk: {
      input: ResolveAliasCommandInput;
      output: ResolveAliasCommandOutput;
    };
  };
}
