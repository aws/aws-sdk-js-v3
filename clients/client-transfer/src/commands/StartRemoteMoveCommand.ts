// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRemoteMoveRequest, StartRemoteMoveResponse } from "../models/models_0";
import { StartRemoteMove$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRemoteMoveCommand}.
 */
export interface StartRemoteMoveCommandInput extends StartRemoteMoveRequest {}
/**
 * @public
 *
 * The output of {@link StartRemoteMoveCommand}.
 */
export interface StartRemoteMoveCommandOutput extends StartRemoteMoveResponse, __MetadataBearer {}

/**
 * <p>Moves or renames a file or directory on the remote SFTP server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartRemoteMoveCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartRemoteMoveCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // StartRemoteMoveRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   SourcePath: "STRING_VALUE", // required
 *   TargetPath: "STRING_VALUE", // required
 * };
 * const command = new StartRemoteMoveCommand(input);
 * const response = await client.send(command);
 * // { // StartRemoteMoveResponse
 * //   MoveId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartRemoteMoveCommandInput - {@link StartRemoteMoveCommandInput}
 * @returns {@link StartRemoteMoveCommandOutput}
 * @see {@link StartRemoteMoveCommandInput} for command's `input` shape.
 * @see {@link StartRemoteMoveCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class StartRemoteMoveCommand extends command<StartRemoteMoveCommandInput, StartRemoteMoveCommandOutput>(
  _ep0,
  _mw0,
  "StartRemoteMove",
  StartRemoteMove$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRemoteMoveRequest;
      output: StartRemoteMoveResponse;
    };
    sdk: {
      input: StartRemoteMoveCommandInput;
      output: StartRemoteMoveCommandOutput;
    };
  };
}
