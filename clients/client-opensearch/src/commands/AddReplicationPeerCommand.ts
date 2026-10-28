// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddReplicationPeerRequest, AddReplicationPeerResponse } from "../models/models_0";
import { AddReplicationPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddReplicationPeerCommand}.
 */
export interface AddReplicationPeerCommandInput extends AddReplicationPeerRequest {}
/**
 * @public
 *
 * The output of {@link AddReplicationPeerCommand}.
 */
export interface AddReplicationPeerCommandOutput extends AddReplicationPeerResponse, __MetadataBearer {}

/**
 * <p>Starts replicating a domain to a peer domain in another AWS Region. A domain can have one
 *   peer. The domain you call becomes the primary and the peer becomes the secondary, which
 *   receives a copy of the primary's indexes and serves read requests.</p>
 *          <p>Replication is established asynchronously. Use the <code>DescribeDomainReplication</code> operation to check whether the
 *   relationship has reached the <code>ACTIVE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AddReplicationPeerCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AddReplicationPeerCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // AddReplicationPeerRequest
 *   DomainName: "STRING_VALUE", // required
 *   PeerDomainArn: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AddReplicationPeerCommand(input);
 * const response = await client.send(command);
 * // { // AddReplicationPeerResponse
 * //   DomainArn: "STRING_VALUE",
 * //   Status: "PENDING_SETUP" || "ACTIVE" || "SWITCHING_OVER" || "FAILING_OVER" || "PENDING_REMOVAL" || "DETACHED" || "EJECTED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param AddReplicationPeerCommandInput - {@link AddReplicationPeerCommandInput}
 * @returns {@link AddReplicationPeerCommandOutput}
 * @see {@link AddReplicationPeerCommandInput} for command's `input` shape.
 * @see {@link AddReplicationPeerCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class AddReplicationPeerCommand extends command<AddReplicationPeerCommandInput, AddReplicationPeerCommandOutput>(
  _ep0,
  _mw0,
  "AddReplicationPeer",
  AddReplicationPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddReplicationPeerRequest;
      output: AddReplicationPeerResponse;
    };
    sdk: {
      input: AddReplicationPeerCommandInput;
      output: AddReplicationPeerCommandOutput;
    };
  };
}
