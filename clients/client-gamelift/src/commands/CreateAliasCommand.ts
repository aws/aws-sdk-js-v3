// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateAliasInput, CreateAliasOutput } from "../models/models_0";
import { de_CreateAliasCommand, se_CreateAliasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandInput extends CreateAliasInput {}
/**
 * @public
 *
 * The output of {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandOutput extends CreateAliasOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of
 *             a fleet ID. An alias provides a level of abstraction for a fleet that is useful when
 *             redirecting player traffic from one fleet to another, such as when updating your game
 *             build. </p>
 *          <p>Amazon GameLift Servers supports two types of routing strategies for aliases: simple and terminal. A
 *             simple alias points to an active fleet. A terminal alias is used to display messaging or
 *             link to a URL instead of routing players to an active fleet. For example, you might use
 *             a terminal alias when a game version is no longer supported and you want to direct
 *             players to an upgrade site. </p>
 *          <p>To create a fleet alias, specify an alias name, routing strategy, and optional
 *             description. Each simple alias can point to only one fleet, but a fleet can have
 *             multiple aliases. If successful, a new alias record is returned, including an alias ID
 *             and an ARN. You can reassign an alias to another fleet by calling
 *                 <code>UpdateAlias</code>.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateAliasInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RoutingStrategy: { // RoutingStrategy
 *     Type: "SIMPLE" || "TERMINAL",
 *     FleetId: "STRING_VALUE",
 *     Message: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateAliasOutput
 * //   Alias: { // Alias
 * //     AliasId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     AliasArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     RoutingStrategy: { // RoutingStrategy
 * //       Type: "SIMPLE" || "TERMINAL",
 * //       FleetId: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAliasCommandInput - {@link CreateAliasCommandInput}
 * @returns {@link CreateAliasCommandOutput}
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
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
export class CreateAliasCommand extends $Command
  .classBuilder<
    CreateAliasCommandInput,
    CreateAliasCommandOutput,
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
  .s("GameLift", "CreateAlias", {})
  .n("GameLiftClient", "CreateAliasCommand")
  .f(void 0, void 0)
  .ser(se_CreateAliasCommand)
  .de(de_CreateAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAliasInput;
      output: CreateAliasOutput;
    };
    sdk: {
      input: CreateAliasCommandInput;
      output: CreateAliasCommandOutput;
    };
  };
}
