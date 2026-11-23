// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateClusterPeerRequest, UpdateClusterPeerResponse } from "../models/models_0";
import { UpdateClusterPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateClusterPeerCommand}.
 */
export interface UpdateClusterPeerCommandInput extends UpdateClusterPeerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterPeerCommand}.
 */
export interface UpdateClusterPeerCommandOutput extends UpdateClusterPeerResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon FSx for NetApp ONTAP cluster peer relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateClusterPeerCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateClusterPeerCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // UpdateClusterPeerRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   ClusterPeerId: "STRING_VALUE", // required
 *   PeerClusterName: "STRING_VALUE",
 *   PeerAddresses: [ // PeerAddresses
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateClusterPeerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterPeerResponse
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
 * @param UpdateClusterPeerCommandInput - {@link UpdateClusterPeerCommandInput}
 * @returns {@link UpdateClusterPeerCommandOutput}
 * @see {@link UpdateClusterPeerCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterPeerCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link ClusterPeerNotFound} (client fault)
 *  <p>No Amazon FSx cluster peers were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
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
export class UpdateClusterPeerCommand extends command<UpdateClusterPeerCommandInput, UpdateClusterPeerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClusterPeer",
  UpdateClusterPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClusterPeerRequest;
      output: UpdateClusterPeerResponse;
    };
    sdk: {
      input: UpdateClusterPeerCommandInput;
      output: UpdateClusterPeerCommandOutput;
    };
  };
}
