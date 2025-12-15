// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { UpdateScriptInput, UpdateScriptOutput } from "../models/models_1";
import { UpdateScript$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScriptCommand}.
 */
export interface UpdateScriptCommandInput extends UpdateScriptInput {}
/**
 * @public
 *
 * The output of {@link UpdateScriptCommand}.
 */
export interface UpdateScriptCommandOutput extends UpdateScriptOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Updates Realtime script metadata and content.</p>
 *          <p>To update script metadata, specify the script ID and provide updated name and/or
 *             version values. </p>
 *          <p>To update script content, provide an updated zip file by pointing to either a local
 *             file or an Amazon S3 bucket location. You can use either method regardless of how the
 *             original script was uploaded. Use the <i>Version</i> parameter to track
 *             updates to the script.</p>
 *          <p>If the call is successful, the updated metadata is stored in the script record and a
 *             revised script is uploaded to the Amazon GameLift Servers service. Once the script is updated and
 *             acquired by a fleet instance, the new version is used for all new game sessions. </p>
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
 * import { GameLiftClient, UpdateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateScriptInput
 *   ScriptId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 *   StorageLocation: { // S3Location
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ObjectVersion: "STRING_VALUE",
 *   },
 *   ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new UpdateScriptCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScriptOutput
 * //   Script: { // Script
 * //     ScriptId: "STRING_VALUE",
 * //     ScriptArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     SizeOnDisk: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     StorageLocation: { // S3Location
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ObjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScriptCommandInput - {@link UpdateScriptCommandInput}
 * @returns {@link UpdateScriptCommandOutput}
 * @see {@link UpdateScriptCommandInput} for command's `input` shape.
 * @see {@link UpdateScriptCommandOutput} for command's `response` shape.
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
export class UpdateScriptCommand extends $Command
  .classBuilder<
    UpdateScriptCommandInput,
    UpdateScriptCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "UpdateScript", {})
  .n("GameLiftClient", "UpdateScriptCommand")
  .sc(UpdateScript$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScriptInput;
      output: UpdateScriptOutput;
    };
    sdk: {
      input: UpdateScriptCommandInput;
      output: UpdateScriptCommandOutput;
    };
  };
}
