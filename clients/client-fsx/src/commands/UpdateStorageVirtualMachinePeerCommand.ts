// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateStorageVirtualMachinePeerRequest,
  UpdateStorageVirtualMachinePeerResponse,
} from "../models/models_0";
import { UpdateStorageVirtualMachinePeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStorageVirtualMachinePeerCommand}.
 */
export interface UpdateStorageVirtualMachinePeerCommandInput extends UpdateStorageVirtualMachinePeerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStorageVirtualMachinePeerCommand}.
 */
export interface UpdateStorageVirtualMachinePeerCommandOutput extends UpdateStorageVirtualMachinePeerResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon FSx for NetApp ONTAP storage virtual machine (SVM) peer relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateStorageVirtualMachinePeerCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateStorageVirtualMachinePeerCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // UpdateStorageVirtualMachinePeerRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   StorageVirtualMachinePeerId: "STRING_VALUE", // required
 *   Applications: [ // StorageVirtualMachinePeerApplications
 *     "SNAPMIRROR" || "FILE_COPY" || "LUN_COPY" || "FLEXCACHE",
 *   ],
 *   PeerSvmAlias: "STRING_VALUE",
 *   State: "PEERED" || "REJECTED" || "SUSPENDED",
 * };
 * const command = new UpdateStorageVirtualMachinePeerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStorageVirtualMachinePeerResponse
 * //   StorageVirtualMachinePeer: { // StorageVirtualMachinePeer
 * //     ResourceARN: "STRING_VALUE",
 * //     StorageVirtualMachinePeerId: "STRING_VALUE",
 * //     StorageVirtualMachineId: "STRING_VALUE",
 * //     FileSystemId: "STRING_VALUE",
 * //     Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //       OntapError: { // OntapError
 * //         Message: "STRING_VALUE",
 * //         Code: "STRING_VALUE",
 * //       },
 * //     },
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     PeerSvmName: "STRING_VALUE",
 * //     PeerSvmAlias: "STRING_VALUE",
 * //     PeerClusterName: "STRING_VALUE",
 * //     Applications: [ // StorageVirtualMachinePeerApplications
 * //       "SNAPMIRROR" || "FILE_COPY" || "LUN_COPY" || "FLEXCACHE",
 * //     ],
 * //     State: "PEERED" || "REJECTED" || "SUSPENDED" || "INITIATED" || "PENDING" || "INITIALIZING",
 * //     UUID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateStorageVirtualMachinePeerCommandInput - {@link UpdateStorageVirtualMachinePeerCommandInput}
 * @returns {@link UpdateStorageVirtualMachinePeerCommandOutput}
 * @see {@link UpdateStorageVirtualMachinePeerCommandInput} for command's `input` shape.
 * @see {@link UpdateStorageVirtualMachinePeerCommandOutput} for command's `response` shape.
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
export class UpdateStorageVirtualMachinePeerCommand extends command<UpdateStorageVirtualMachinePeerCommandInput, UpdateStorageVirtualMachinePeerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStorageVirtualMachinePeer",
  UpdateStorageVirtualMachinePeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStorageVirtualMachinePeerRequest;
      output: UpdateStorageVirtualMachinePeerResponse;
    };
    sdk: {
      input: UpdateStorageVirtualMachinePeerCommandInput;
      output: UpdateStorageVirtualMachinePeerCommandOutput;
    };
  };
}
