// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResolveAliasInput, ResolveAliasOutput } from "../models/models_0";
import { ResolveAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Attempts to retrieve a fleet ID that is associated with an alias. Specify a unique alias identifier.
 *
 * If the alias has a `SIMPLE` routing strategy, Amazon GameLift Servers returns a fleet ID. If the alias has a `TERMINAL` routing strategy, the result is a `TerminalRoutingStrategyException`.
 *
 * **Related actions**
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
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
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *
 * The service is unable to resolve the routing for a particular alias because it has a terminal `RoutingStrategy` associated with it. The message returned in this exception is the message defined in the routing strategy itself. Such requests should only be retried if the routing strategy for the specified alias is modified.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class ResolveAliasCommand extends command<ResolveAliasCommandInput, ResolveAliasCommandOutput>(
  _ep0,
  _mw0,
  "ResolveAlias",
  ResolveAlias$
) {
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
