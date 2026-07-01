// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateFileSystemInput, DisassociateFileSystemOutput } from "../models/models_0";
import { DisassociateFileSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateFileSystemCommand}.
 */
export interface DisassociateFileSystemCommandInput extends DisassociateFileSystemInput {}
/**
 * @public
 *
 * The output of {@link DisassociateFileSystemCommand}.
 */
export interface DisassociateFileSystemCommandOutput extends DisassociateFileSystemOutput, __MetadataBearer {}

/**
 * <p>Disassociates an Amazon FSx file system from the specified gateway. After the
 *          disassociation process finishes, the gateway can no longer access the Amazon FSx
 *          file system. This operation is only supported in the FSx File Gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisassociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisassociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DisassociateFileSystemInput
 *   FileSystemAssociationARN: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DisassociateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFileSystemOutput
 * //   FileSystemAssociationARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateFileSystemCommandInput - {@link DisassociateFileSystemCommandInput}
 * @returns {@link DisassociateFileSystemCommandOutput}
 * @see {@link DisassociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateFileSystemCommand extends command<DisassociateFileSystemCommandInput, DisassociateFileSystemCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateFileSystem",
  DisassociateFileSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFileSystemInput;
      output: DisassociateFileSystemOutput;
    };
    sdk: {
      input: DisassociateFileSystemCommandInput;
      output: DisassociateFileSystemCommandOutput;
    };
  };
}
