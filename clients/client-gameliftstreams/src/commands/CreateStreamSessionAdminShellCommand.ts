// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamSessionAdminShellInput, CreateStreamSessionAdminShellOutput } from "../models/models_0";
import { CreateStreamSessionAdminShell$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamSessionAdminShellCommand}.
 */
export interface CreateStreamSessionAdminShellCommandInput extends CreateStreamSessionAdminShellInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamSessionAdminShellCommand}.
 */
export interface CreateStreamSessionAdminShellCommandOutput extends CreateStreamSessionAdminShellOutput, __MetadataBearer {}

/**
 * <p>Creates an administrative terminal session with full access to the live runtime environment of the Amazon GameLift Streams stream session. Use the returned credentials (<code>SessionId</code>, <code>StreamUrl</code> and <code>TokenValue</code>) with the Amazon Web Services Systems Manager <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html">Session Manager plugin</a> for the CLI to access the terminal session.</p> <p>The stream session must be in one of the following statuses: <code>ACTIVE</code>, <code>CONNECTED</code>, <code>PENDING_CLIENT_RECONNECTION</code>, or <code>RECONNECTING</code>.</p> <p>The <code>StreamUrl</code> is valid for 60 seconds. After it expires, call this operation again to get a new URL.</p> <important> <p>The returned credentials grant full access to the live runtime environment of the Amazon GameLift Streams stream session. The operator who connects to the terminal session has the same level of access that your Amazon GameLift Streams applications have, including potentially user input, screen images, and application data files. Grant permissions to call this operation only to trusted IAM identities that require live runtime environment access.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, CreateStreamSessionAdminShellCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, CreateStreamSessionAdminShellCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // CreateStreamSessionAdminShellInput
 *   Identifier: "STRING_VALUE", // required
 *   StreamSessionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateStreamSessionAdminShellCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamSessionAdminShellOutput
 * //   SessionId: "STRING_VALUE",
 * //   StreamUrl: "STRING_VALUE",
 * //   TokenValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStreamSessionAdminShellCommandInput - {@link CreateStreamSessionAdminShellCommandInput}
 * @returns {@link CreateStreamSessionAdminShellCommandOutput}
 * @see {@link CreateStreamSessionAdminShellCommandInput} for command's `input` shape.
 * @see {@link CreateStreamSessionAdminShellCommandOutput} for command's `response` shape.
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
 * @throws {@link StreamSessionAccessNotReadyException} (client fault)
 *  <p>The terminal connection to the stream session is not yet available. Wait before retrying the request.</p>
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
export class CreateStreamSessionAdminShellCommand extends command<CreateStreamSessionAdminShellCommandInput, CreateStreamSessionAdminShellCommandOutput>(
  _ep0,
  _mw0,
  "CreateStreamSessionAdminShell",
  CreateStreamSessionAdminShell$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamSessionAdminShellInput;
      output: CreateStreamSessionAdminShellOutput;
    };
    sdk: {
      input: CreateStreamSessionAdminShellCommandInput;
      output: CreateStreamSessionAdminShellCommandOutput;
    };
  };
}
