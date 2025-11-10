// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import { ExportStreamSessionFilesInput, ExportStreamSessionFilesOutput } from "../models/models_0";
import { ExportStreamSessionFiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportStreamSessionFilesCommand}.
 */
export interface ExportStreamSessionFilesCommandInput extends ExportStreamSessionFilesInput {}
/**
 * @public
 *
 * The output of {@link ExportStreamSessionFilesCommand}.
 */
export interface ExportStreamSessionFilesCommandOutput extends ExportStreamSessionFilesOutput, __MetadataBearer {}

/**
 * <p> Export the files that your application modifies or generates in a stream session, which can help you debug or verify your application. When your application runs, it generates output files such as logs, diagnostic information, crash dumps, save files, user data, screenshots, and so on. The files can be defined by the engine or frameworks that your application uses, or information that you've programmed your application to output. </p> <p> You can only call this action on a stream session that is in progress, specifically in one of the following statuses <code>ACTIVE</code>, <code>CONNECTED</code>, <code>PENDING_CLIENT_RECONNECTION</code>, and <code>RECONNECTING</code>. You must provide an Amazon Simple Storage Service (Amazon S3) bucket to store the files in. When the session ends, Amazon GameLift Streams produces a compressed folder that contains all of the files and directories that were modified or created by the application during the stream session. AWS uses your security credentials to authenticate and authorize access to your Amazon S3 bucket. </p> <p>Amazon GameLift Streams collects the following generated and modified files. Find them in the corresponding folders in the <code>.zip</code> archive.</p> <ul> <li> <p> <code>application/</code>: The folder where your application or game is stored. </p> </li> </ul> <ul> <li> <p> <code>profile/</code>: The user profile folder.</p> </li> <li> <p> <code>temp/</code>: The system temp folder.</p> </li> </ul> <p/> <p>To verify the status of the exported files, use GetStreamSession. </p> <p>To delete the files, delete the object in the S3 bucket. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, ExportStreamSessionFilesCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, ExportStreamSessionFilesCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // ExportStreamSessionFilesInput
 *   Identifier: "STRING_VALUE", // required
 *   StreamSessionIdentifier: "STRING_VALUE", // required
 *   OutputUri: "STRING_VALUE", // required
 * };
 * const command = new ExportStreamSessionFilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExportStreamSessionFilesCommandInput - {@link ExportStreamSessionFilesCommandInput}
 * @returns {@link ExportStreamSessionFilesCommandOutput}
 * @see {@link ExportStreamSessionFilesCommandInput} for command's `input` shape.
 * @see {@link ExportStreamSessionFilesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 *
 * @public
 */
export class ExportStreamSessionFilesCommand extends $Command
  .classBuilder<
    ExportStreamSessionFilesCommandInput,
    ExportStreamSessionFilesCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLiftStreams", "ExportStreamSessionFiles", {})
  .n("GameLiftStreamsClient", "ExportStreamSessionFilesCommand")
  .sc(ExportStreamSessionFiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportStreamSessionFilesInput;
      output: {};
    };
    sdk: {
      input: ExportStreamSessionFilesCommandInput;
      output: ExportStreamSessionFilesCommandOutput;
    };
  };
}
