// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeStorageVirtualMachinePeersRequest,
  DescribeStorageVirtualMachinePeersResponse,
} from "../models/models_0";
import { DescribeStorageVirtualMachinePeers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeStorageVirtualMachinePeersCommand}.
 */
export interface DescribeStorageVirtualMachinePeersCommandInput extends DescribeStorageVirtualMachinePeersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageVirtualMachinePeersCommand}.
 */
export interface DescribeStorageVirtualMachinePeersCommandOutput extends DescribeStorageVirtualMachinePeersResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for NetApp ONTAP storage virtual machine
 *             (SVM) peers, if a <code>StorageVirtualMachinePeerIds</code> value is provided. Otherwise,
 *             this operation returns all SVM peers owned by your Amazon Web Services account in the
 *             Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all SVM peers, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of SVM peers in a response. If more SVM peers remain,
 *             Amazon FSx returns a <code>NextToken</code> value in the response. In this case,
 *             send a later request with the <code>NextToken</code> request parameter set to the value
 *             of <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeStorageVirtualMachinePeersCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeStorageVirtualMachinePeersCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeStorageVirtualMachinePeersRequest
 *   StorageVirtualMachinePeerIds: [ // StorageVirtualMachinePeerIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // StorageVirtualMachinePeerFilters
 *     { // StorageVirtualMachinePeerFilter
 *       Name: "file-system-id" || "storage-virtual-machine-id",
 *       Values: [ // StorageVirtualMachinePeerFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageVirtualMachinePeersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageVirtualMachinePeersResponse
 * //   StorageVirtualMachinePeers: [ // StorageVirtualMachinePeers
 * //     { // StorageVirtualMachinePeer
 * //       ResourceARN: "STRING_VALUE",
 * //       StorageVirtualMachinePeerId: "STRING_VALUE",
 * //       StorageVirtualMachineId: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //       LifecycleTransitionReason: { // LifecycleTransitionReason
 * //         Message: "STRING_VALUE",
 * //         OntapError: { // OntapError
 * //           Message: "STRING_VALUE",
 * //           Code: "STRING_VALUE",
 * //         },
 * //       },
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       PeerSvmName: "STRING_VALUE",
 * //       PeerSvmAlias: "STRING_VALUE",
 * //       PeerClusterName: "STRING_VALUE",
 * //       Applications: [ // StorageVirtualMachinePeerApplications
 * //         "SNAPMIRROR" || "FILE_COPY" || "LUN_COPY" || "FLEXCACHE",
 * //       ],
 * //       State: "PEERED" || "REJECTED" || "SUSPENDED" || "INITIATED" || "PENDING" || "INITIALIZING",
 * //       UUID: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageVirtualMachinePeersCommandInput - {@link DescribeStorageVirtualMachinePeersCommandInput}
 * @returns {@link DescribeStorageVirtualMachinePeersCommandOutput}
 * @see {@link DescribeStorageVirtualMachinePeersCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageVirtualMachinePeersCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
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
export class DescribeStorageVirtualMachinePeersCommand extends command<DescribeStorageVirtualMachinePeersCommandInput, DescribeStorageVirtualMachinePeersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStorageVirtualMachinePeers",
  DescribeStorageVirtualMachinePeers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStorageVirtualMachinePeersRequest;
      output: DescribeStorageVirtualMachinePeersResponse;
    };
    sdk: {
      input: DescribeStorageVirtualMachinePeersCommandInput;
      output: DescribeStorageVirtualMachinePeersCommandOutput;
    };
  };
}
