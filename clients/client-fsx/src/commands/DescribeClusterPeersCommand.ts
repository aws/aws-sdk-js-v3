// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeClusterPeersRequest, DescribeClusterPeersResponse } from "../models/models_0";
import { DescribeClusterPeers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeClusterPeersCommand}.
 */
export interface DescribeClusterPeersCommandInput extends DescribeClusterPeersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterPeersCommand}.
 */
export interface DescribeClusterPeersCommandOutput extends DescribeClusterPeersResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for NetApp ONTAP cluster peers, if a
 *             <code>ClusterPeerIds</code> value is provided. Otherwise, this operation returns all
 *             cluster peers owned by your Amazon Web Services account in the
 *             Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all cluster peers, you can optionally specify the
 *             <code>MaxResults</code> parameter to limit the number of cluster peers in a response.
 *             If more cluster peers remain, Amazon FSx returns a <code>NextToken</code> value
 *             in the response. In this case, send a later request with the <code>NextToken</code>
 *             request parameter set to the value of <code>NextToken</code> from the last
 *             response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeClusterPeersCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeClusterPeersCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeClusterPeersRequest
 *   ClusterPeerIds: [ // ClusterPeerIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // ClusterPeerFilters
 *     { // ClusterPeerFilter
 *       Name: "file-system-id",
 *       Values: [ // ClusterPeerFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeClusterPeersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterPeersResponse
 * //   ClusterPeers: [ // ClusterPeers
 * //     { // ClusterPeer
 * //       ResourceARN: "STRING_VALUE",
 * //       ClusterPeerId: "STRING_VALUE",
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
 * //       PeerAddresses: [ // PeerAddresses
 * //         "STRING_VALUE",
 * //       ],
 * //       PeerClusterName: "STRING_VALUE",
 * //       PassphraseSecretArn: "STRING_VALUE",
 * //       AllowedSvmMode: "ALL" || "NONE" || "SPECIFIED",
 * //       AllowedSvmIds: [ // AllowedSvmIds
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       UUID: "STRING_VALUE",
 * //       AuthenticationStatus: { // ClusterPeerAuthenticationStatus
 * //         State: "STRING_VALUE",
 * //         InUse: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClusterPeersCommandInput - {@link DescribeClusterPeersCommandInput}
 * @returns {@link DescribeClusterPeersCommandOutput}
 * @see {@link DescribeClusterPeersCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterPeersCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link ClusterPeerNotFound} (client fault)
 *  <p>No Amazon FSx cluster peers were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DescribeClusterPeersCommand extends command<DescribeClusterPeersCommandInput, DescribeClusterPeersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeClusterPeers",
  DescribeClusterPeers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterPeersRequest;
      output: DescribeClusterPeersResponse;
    };
    sdk: {
      input: DescribeClusterPeersCommandInput;
      output: DescribeClusterPeersCommandOutput;
    };
  };
}
