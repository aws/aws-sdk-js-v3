// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  UpdateGameSessionInput,
  UpdateGameSessionOutput,
  UpdateGameSessionOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_UpdateGameSessionCommand, se_UpdateGameSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGameSessionCommand}.
 */
export interface UpdateGameSessionCommandInput extends UpdateGameSessionInput {}
/**
 * @public
 *
 * The output of {@link UpdateGameSessionCommand}.
 */
export interface UpdateGameSessionCommandOutput extends UpdateGameSessionOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Updates the mutable properties of a game session. </p>
 *          <p>To update a game session, specify the game session ID and the values you want to
 *             change. </p>
 *          <p>If successful, the updated <code>GameSession</code> object is returned. </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateGameSessionInput
 *   GameSessionId: "STRING_VALUE", // required
 *   MaximumPlayerSessionCount: Number("int"),
 *   Name: "STRING_VALUE",
 *   PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 *   ProtectionPolicy: "NoProtection" || "FullProtection",
 *   GameProperties: [ // GamePropertyList
 *     { // GameProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateGameSessionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGameSessionOutput
 * //   GameSession: { // GameSession
 * //     GameSessionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationTime: new Date("TIMESTAMP"),
 * //     CurrentPlayerSessionCount: Number("int"),
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     Status: "ACTIVE" || "ACTIVATING" || "TERMINATED" || "TERMINATING" || "ERROR",
 * //     StatusReason: "INTERRUPTED" || "TRIGGERED_ON_PROCESS_TERMINATE" || "FORCE_TERMINATED",
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 * //     CreatorId: "STRING_VALUE",
 * //     GameSessionData: "STRING_VALUE",
 * //     MatchmakerData: "STRING_VALUE",
 * //     Location: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGameSessionCommandInput - {@link UpdateGameSessionCommandInput}
 * @returns {@link UpdateGameSessionCommandOutput}
 * @see {@link UpdateGameSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateGameSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidGameSessionStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
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
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class UpdateGameSessionCommand extends $Command
  .classBuilder<
    UpdateGameSessionCommandInput,
    UpdateGameSessionCommandOutput,
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
  .s("GameLift", "UpdateGameSession", {})
  .n("GameLiftClient", "UpdateGameSessionCommand")
  .f(void 0, UpdateGameSessionOutputFilterSensitiveLog)
  .ser(se_UpdateGameSessionCommand)
  .de(de_UpdateGameSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGameSessionInput;
      output: UpdateGameSessionOutput;
    };
    sdk: {
      input: UpdateGameSessionCommandInput;
      output: UpdateGameSessionCommandOutput;
    };
  };
}
