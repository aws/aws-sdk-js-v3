// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { ListScriptsInput, ListScriptsOutput } from "../models/models_0";
import { ListScripts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScriptsCommand}.
 */
export interface ListScriptsCommandInput extends ListScriptsInput {}
/**
 * @public
 *
 * The output of {@link ListScriptsCommand}.
 */
export interface ListScriptsCommandOutput extends ListScriptsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services
 *             account in use. </p>
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
 * import { GameLiftClient, ListScriptsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListScriptsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // ListScriptsInput
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScriptsCommand(input);
 * const response = await client.send(command);
 * // { // ListScriptsOutput
 * //   Scripts: [ // ScriptList
 * //     { // Script
 * //       ScriptId: "STRING_VALUE",
 * //       ScriptArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //       SizeOnDisk: Number("long"),
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       StorageLocation: { // S3Location
 * //         Bucket: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE",
 * //         ObjectVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScriptsCommandInput - {@link ListScriptsCommandInput}
 * @returns {@link ListScriptsCommandOutput}
 * @see {@link ListScriptsCommandInput} for command's `input` shape.
 * @see {@link ListScriptsCommandOutput} for command's `response` shape.
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
export class ListScriptsCommand extends $Command
  .classBuilder<
    ListScriptsCommandInput,
    ListScriptsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "ListScripts", {})
  .n("GameLiftClient", "ListScriptsCommand")
  .sc(ListScripts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScriptsInput;
      output: ListScriptsOutput;
    };
    sdk: {
      input: ListScriptsCommandInput;
      output: ListScriptsCommandOutput;
    };
  };
}
