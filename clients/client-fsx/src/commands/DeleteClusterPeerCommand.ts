// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteClusterPeerRequest, DeleteClusterPeerResponse } from "../models/models_0";
import { DeleteClusterPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteClusterPeerCommand}.
 */
export interface DeleteClusterPeerCommandInput extends DeleteClusterPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterPeerCommand}.
 */
export interface DeleteClusterPeerCommandOutput extends DeleteClusterPeerResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for NetApp ONTAP cluster peer relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteClusterPeerCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteClusterPeerCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteClusterPeerRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   ClusterPeerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterPeerResponse
 * //   ClusterPeerId: "STRING_VALUE",
 * //   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DeleteClusterPeerCommandInput - {@link DeleteClusterPeerCommandInput}
 * @returns {@link DeleteClusterPeerCommandOutput}
 * @see {@link DeleteClusterPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterPeerCommandOutput} for command's `response` shape.
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
export class DeleteClusterPeerCommand extends command<DeleteClusterPeerCommandInput, DeleteClusterPeerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteClusterPeer",
  DeleteClusterPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterPeerRequest;
      output: DeleteClusterPeerResponse;
    };
    sdk: {
      input: DeleteClusterPeerCommandInput;
      output: DeleteClusterPeerCommandOutput;
    };
  };
}
