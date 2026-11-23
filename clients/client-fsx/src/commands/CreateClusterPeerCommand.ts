// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterPeerRequest, CreateClusterPeerResponse } from "../models/models_0";
import { CreateClusterPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClusterPeerCommand}.
 */
export interface CreateClusterPeerCommandInput extends CreateClusterPeerRequest {}
/**
 * @public
 *
 * The output of {@link CreateClusterPeerCommand}.
 */
export interface CreateClusterPeerCommandOutput extends CreateClusterPeerResponse, __MetadataBearer {}

/**
 * <p>Creates a cluster peer relationship between an Amazon FSx for NetApp ONTAP file system
 *             and another ONTAP cluster.</p>
 *          <p>The <code>CreateClusterPeer</code> operation returns while the cluster peer's
 *             lifecycle state is still <code>CREATING</code>. You can check the cluster peer creation
 *             status by calling the DescribeClusterPeers operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateClusterPeerCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateClusterPeerCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateClusterPeerRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   PeerAddresses: [ // PeerAddresses // required
 *     "STRING_VALUE",
 *   ],
 *   PassphraseSecretArn: "STRING_VALUE", // required
 *   PeerClusterName: "STRING_VALUE",
 *   AllowedSvmMode: "ALL" || "NONE" || "SPECIFIED", // required
 *   AllowedSvmIds: [ // AllowedSvmIds
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateClusterPeerCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterPeerResponse
 * //   ClusterPeer: { // ClusterPeer
 * //     ResourceARN: "STRING_VALUE",
 * //     ClusterPeerId: "STRING_VALUE",
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
 * //     PeerAddresses: [ // PeerAddresses
 * //       "STRING_VALUE",
 * //     ],
 * //     PeerClusterName: "STRING_VALUE",
 * //     PassphraseSecretArn: "STRING_VALUE",
 * //     AllowedSvmMode: "ALL" || "NONE" || "SPECIFIED",
 * //     AllowedSvmIds: [ // AllowedSvmIds
 * //       "STRING_VALUE",
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     UUID: "STRING_VALUE",
 * //     AuthenticationStatus: { // ClusterPeerAuthenticationStatus
 * //       State: "STRING_VALUE",
 * //       InUse: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterPeerCommandInput - {@link CreateClusterPeerCommandInput}
 * @returns {@link CreateClusterPeerCommandOutput}
 * @see {@link CreateClusterPeerCommandInput} for command's `input` shape.
 * @see {@link CreateClusterPeerCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
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
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class CreateClusterPeerCommand extends command<CreateClusterPeerCommandInput, CreateClusterPeerCommandOutput>(
  _ep0,
  _mw0,
  "CreateClusterPeer",
  CreateClusterPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterPeerRequest;
      output: CreateClusterPeerResponse;
    };
    sdk: {
      input: CreateClusterPeerCommandInput;
      output: CreateClusterPeerCommandOutput;
    };
  };
}
