// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput } from "../models/models_0";
import { GetGameSessionLogUrl } from "../schemas/schemas_34_GetGameSessionLogUrl";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGameSessionLogUrlCommand}.
 */
export interface GetGameSessionLogUrlCommandInput extends GetGameSessionLogUrlInput {}
/**
 * @public
 *
 * The output of {@link GetGameSessionLogUrlCommand}.
 */
export interface GetGameSessionLogUrlCommandOutput extends GetGameSessionLogUrlOutput, __MetadataBearer {}

/**
 * <p>Retrieves the location of stored game session logs for a specified game session on
 *             Amazon GameLift Servers managed fleets. When a game session is terminated, Amazon GameLift Servers automatically stores
 *             the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p>
 *          <note>
 *             <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service
 *                     Limits</a> page for maximum log file sizes. Log files that exceed this limit
 *                 are not saved.</p>
 *          </note>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetGameSessionLogUrlCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetGameSessionLogUrlCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // GetGameSessionLogUrlInput
 *   GameSessionId: "STRING_VALUE", // required
 * };
 * const command = new GetGameSessionLogUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetGameSessionLogUrlOutput
 * //   PreSignedUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGameSessionLogUrlCommandInput - {@link GetGameSessionLogUrlCommandInput}
 * @returns {@link GetGameSessionLogUrlCommandOutput}
 * @see {@link GetGameSessionLogUrlCommandInput} for command's `input` shape.
 * @see {@link GetGameSessionLogUrlCommandOutput} for command's `response` shape.
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
export class GetGameSessionLogUrlCommand extends $Command
  .classBuilder<
    GetGameSessionLogUrlCommandInput,
    GetGameSessionLogUrlCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "GetGameSessionLogUrl", {})
  .n("GameLiftClient", "GetGameSessionLogUrlCommand")
  .sc(GetGameSessionLogUrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGameSessionLogUrlInput;
      output: GetGameSessionLogUrlOutput;
    };
    sdk: {
      input: GetGameSessionLogUrlCommandInput;
      output: GetGameSessionLogUrlCommandOutput;
    };
  };
}
