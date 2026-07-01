// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTapeArchiveInput, DeleteTapeArchiveOutput } from "../models/models_0";
import { DeleteTapeArchive$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTapeArchiveCommand}.
 */
export interface DeleteTapeArchiveCommandInput extends DeleteTapeArchiveInput {}
/**
 * @public
 *
 * The output of {@link DeleteTapeArchiveCommand}.
 */
export interface DeleteTapeArchiveCommandOutput extends DeleteTapeArchiveOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is
 *          only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteTapeArchiveInput
 *   TapeARN: "STRING_VALUE", // required
 *   BypassGovernanceRetention: true || false,
 * };
 * const command = new DeleteTapeArchiveCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTapeArchiveOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTapeArchiveCommandInput - {@link DeleteTapeArchiveCommandInput}
 * @returns {@link DeleteTapeArchiveCommandOutput}
 * @see {@link DeleteTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link DeleteTapeArchiveCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To delete a virtual tape from the shelf (VTS)
 * ```javascript
 * // Deletes the specified virtual tape from the virtual tape shelf (VTS).
 * const input = {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
 * };
 * const command = new DeleteTapeArchiveCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTapeArchiveCommand extends command<DeleteTapeArchiveCommandInput, DeleteTapeArchiveCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTapeArchive",
  DeleteTapeArchive$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTapeArchiveInput;
      output: DeleteTapeArchiveOutput;
    };
    sdk: {
      input: DeleteTapeArchiveCommandInput;
      output: DeleteTapeArchiveCommandOutput;
    };
  };
}
