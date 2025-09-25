// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteScriptInput } from "../models/models_0";
import { DeleteScript } from "../schemas/schemas_45_Script";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScriptCommand}.
 */
export interface DeleteScriptCommandInput extends DeleteScriptInput {}
/**
 * @public
 *
 * The output of {@link DeleteScriptCommand}.
 */
export interface DeleteScriptCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Realtime script. This operation permanently deletes the script record. If
 *             script files were uploaded, they are also deleted (files stored in an S3 bucket are not
 *             deleted). </p>
 *          <p>To delete a script, specify the script ID. Before deleting a script, be sure to
 *             terminate all fleets that are deployed with the script being deleted. Fleet instances
 *             periodically check for script updates, and if the script record no longer exists, the
 *             instance will go into an error state and be unable to host game sessions.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Servers Amazon GameLift Servers Realtime</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteScriptInput
 *   ScriptId: "STRING_VALUE", // required
 * };
 * const command = new DeleteScriptCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScriptCommandInput - {@link DeleteScriptCommandInput}
 * @returns {@link DeleteScriptCommandOutput}
 * @see {@link DeleteScriptCommandInput} for command's `input` shape.
 * @see {@link DeleteScriptCommandOutput} for command's `response` shape.
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
export class DeleteScriptCommand extends $Command
  .classBuilder<
    DeleteScriptCommandInput,
    DeleteScriptCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DeleteScript", {})
  .n("GameLiftClient", "DeleteScriptCommand")
  .sc(DeleteScript)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScriptInput;
      output: {};
    };
    sdk: {
      input: DeleteScriptCommandInput;
      output: DeleteScriptCommandOutput;
    };
  };
}
