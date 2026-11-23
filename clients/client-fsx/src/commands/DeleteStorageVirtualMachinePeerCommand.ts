// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteStorageVirtualMachinePeerRequest,
  DeleteStorageVirtualMachinePeerResponse,
} from "../models/models_0";
import { DeleteStorageVirtualMachinePeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStorageVirtualMachinePeerCommand}.
 */
export interface DeleteStorageVirtualMachinePeerCommandInput extends DeleteStorageVirtualMachinePeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageVirtualMachinePeerCommand}.
 */
export interface DeleteStorageVirtualMachinePeerCommandOutput extends DeleteStorageVirtualMachinePeerResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for NetApp ONTAP storage virtual machine (SVM) peer
 *             relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteStorageVirtualMachinePeerCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteStorageVirtualMachinePeerCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteStorageVirtualMachinePeerRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   StorageVirtualMachinePeerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStorageVirtualMachinePeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStorageVirtualMachinePeerResponse
 * //   StorageVirtualMachinePeerId: "STRING_VALUE",
 * //   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteStorageVirtualMachinePeerCommandInput - {@link DeleteStorageVirtualMachinePeerCommandInput}
 * @returns {@link DeleteStorageVirtualMachinePeerCommandOutput}
 * @see {@link DeleteStorageVirtualMachinePeerCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageVirtualMachinePeerCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link StorageVirtualMachinePeerNotFound} (client fault)
 *  <p>No Amazon FSx storage virtual machine (SVM) peers were found based on the
 *             supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DeleteStorageVirtualMachinePeerCommand extends command<DeleteStorageVirtualMachinePeerCommandInput, DeleteStorageVirtualMachinePeerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStorageVirtualMachinePeer",
  DeleteStorageVirtualMachinePeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageVirtualMachinePeerRequest;
      output: DeleteStorageVirtualMachinePeerResponse;
    };
    sdk: {
      input: DeleteStorageVirtualMachinePeerCommandInput;
      output: DeleteStorageVirtualMachinePeerCommandOutput;
    };
  };
}
