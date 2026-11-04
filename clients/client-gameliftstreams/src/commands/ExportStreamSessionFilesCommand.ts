// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportStreamSessionFilesInput, ExportStreamSessionFilesOutput } from "../models/models_0";
import { ExportStreamSessionFiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Export the files that your application modifies or generates in a stream session, which can help you debug or verify your application. When your application runs, it generates output files such as logs, diagnostic information, crash dumps, save files, user data, screenshots, and so on. The files can be defined by the engine or frameworks that your application uses, or information that you've programmed your application to output.
 *
 * You can only call this action on a stream session that is in progress, specifically in one of the following statuses `ACTIVE`, `CONNECTED`, `PENDING_CLIENT_RECONNECTION`, and `RECONNECTING`. You must provide an Amazon Simple Storage Service (Amazon S3) bucket to store the files in. When the session ends, Amazon GameLift Streams produces a compressed folder that contains all of the files and directories that were modified or created by the application during the stream session. AWS uses your security credentials to authenticate and authorize access to your Amazon S3 bucket.
 *
 * Amazon GameLift Streams collects the following generated and modified files. Find them in the corresponding folders in the `.zip` archive.
 *
 * - `application/`: The folder where your application or game is stored.
 *
 * - `profile/`: The user profile folder.
 * - `temp/`: The system temp folder.
 *
 * To verify the status of the exported files, use GetStreamSession.
 *
 * To delete the files, delete the object in the S3 bucket.
 *
 * @example Use a bare-bones client and the command you need to make an API call.```javascript
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
 *
 * You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Correct the request before you try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request after the suggested wait time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.
 *
 * @throws {@link GameLiftStreamsServiceException}
 *
 * Base exception class for all service exceptions from GameLiftStreams service.
 *
 * @public
 */
export class ExportStreamSessionFilesCommand extends command<ExportStreamSessionFilesCommandInput, ExportStreamSessionFilesCommandOutput>(
  _ep0,
  _mw0,
  "ExportStreamSessionFiles",
  ExportStreamSessionFiles$
) {
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
