// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateStorageVirtualMachinePeerRequest,
  CreateStorageVirtualMachinePeerResponse,
} from "../models/models_0";
import { CreateStorageVirtualMachinePeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStorageVirtualMachinePeerCommand}.
 */
export interface CreateStorageVirtualMachinePeerCommandInput extends CreateStorageVirtualMachinePeerRequest {}
/**
 * @public
 *
 * The output of {@link CreateStorageVirtualMachinePeerCommand}.
 */
export interface CreateStorageVirtualMachinePeerCommandOutput extends CreateStorageVirtualMachinePeerResponse, __MetadataBearer {}

/**
 * <p>Creates a storage virtual machine (SVM) peer relationship between an SVM on an
 *             Amazon FSx for NetApp ONTAP file system and another SVM.</p>
 *          <p>The <code>CreateStorageVirtualMachinePeer</code> operation returns while the SVM peer's
 *             lifecycle state is still <code>CREATING</code>. You can check the SVM peer creation
 *             status by calling the DescribeStorageVirtualMachinePeers operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateStorageVirtualMachinePeerCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateStorageVirtualMachinePeerCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateStorageVirtualMachinePeerRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   StorageVirtualMachineId: "STRING_VALUE", // required
 *   PeerSvmName: "STRING_VALUE", // required
 *   PeerClusterName: "STRING_VALUE",
 *   Applications: [ // StorageVirtualMachinePeerApplications // required
 *     "SNAPMIRROR" || "FILE_COPY" || "LUN_COPY" || "FLEXCACHE",
 *   ],
 *   PeerSvmAlias: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateStorageVirtualMachinePeerCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorageVirtualMachinePeerResponse
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
 * @param CreateStorageVirtualMachinePeerCommandInput - {@link CreateStorageVirtualMachinePeerCommandInput}
 * @returns {@link CreateStorageVirtualMachinePeerCommandOutput}
 * @see {@link CreateStorageVirtualMachinePeerCommandInput} for command's `input` shape.
 * @see {@link CreateStorageVirtualMachinePeerCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class CreateStorageVirtualMachinePeerCommand extends command<CreateStorageVirtualMachinePeerCommandInput, CreateStorageVirtualMachinePeerCommandOutput>(
  _ep0,
  _mw0,
  "CreateStorageVirtualMachinePeer",
  CreateStorageVirtualMachinePeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStorageVirtualMachinePeerRequest;
      output: CreateStorageVirtualMachinePeerResponse;
    };
    sdk: {
      input: CreateStorageVirtualMachinePeerCommandInput;
      output: CreateStorageVirtualMachinePeerCommandOutput;
    };
  };
}
