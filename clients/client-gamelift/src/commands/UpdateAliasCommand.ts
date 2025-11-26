// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { UpdateAliasInput, UpdateAliasOutput } from "../models/models_0";
import { UpdateAlias } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandInput extends UpdateAliasInput {}
/**
 * @public
 *
 * The output of {@link UpdateAliasCommand}.
 */
export interface UpdateAliasCommandOutput extends UpdateAliasOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Updates properties for an alias. Specify the unique identifier of the alias to be
 *             updated and the new property values.</p>
 *          <p>When reassigning an alias to a new fleet, provide
 *             an updated routing strategy. If successful, the updated alias record is returned.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateAliasInput
 *   AliasId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RoutingStrategy: { // RoutingStrategy
 *     Type: "SIMPLE" || "TERMINAL",
 *     FleetId: "STRING_VALUE",
 *     Message: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAliasOutput
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
 * @param UpdateAliasCommandInput - {@link UpdateAliasCommandInput}
 * @returns {@link UpdateAliasCommandOutput}
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class UpdateAliasCommand extends $Command
  .classBuilder<
    UpdateAliasCommandInput,
    UpdateAliasCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "UpdateAlias", {})
  .n("GameLiftClient", "UpdateAliasCommand")
  .sc(UpdateAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAliasInput;
      output: UpdateAliasOutput;
    };
    sdk: {
      input: UpdateAliasCommandInput;
      output: UpdateAliasCommandOutput;
    };
  };
}
