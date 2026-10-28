// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveReplicationPeerRequest, RemoveReplicationPeerResponse } from "../models/models_1";
import { RemoveReplicationPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveReplicationPeerCommand}.
 */
export interface RemoveReplicationPeerCommandInput extends RemoveReplicationPeerRequest {}
/**
 * @public
 *
 * The output of {@link RemoveReplicationPeerCommand}.
 */
export interface RemoveReplicationPeerCommandOutput extends RemoveReplicationPeerResponse, __MetadataBearer {}

/**
 * <p>Stops replicating a domain to its peer. Replication ends for both domains, and each domain
 *   keeps the data it holds at that point. Neither domain is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RemoveReplicationPeerCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RemoveReplicationPeerCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // RemoveReplicationPeerRequest
 *   DomainName: "STRING_VALUE", // required
 *   PeerDomainArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveReplicationPeerCommand(input);
 * const response = await client.send(command);
 * // { // RemoveReplicationPeerResponse
 * //   DomainArn: "STRING_VALUE",
 * //   Status: "PENDING_SETUP" || "ACTIVE" || "SWITCHING_OVER" || "FAILING_OVER" || "PENDING_REMOVAL" || "DETACHED" || "EJECTED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param RemoveReplicationPeerCommandInput - {@link RemoveReplicationPeerCommandInput}
 * @returns {@link RemoveReplicationPeerCommandOutput}
 * @see {@link RemoveReplicationPeerCommandInput} for command's `input` shape.
 * @see {@link RemoveReplicationPeerCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
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
export class RemoveReplicationPeerCommand extends command<RemoveReplicationPeerCommandInput, RemoveReplicationPeerCommandOutput>(
  _ep0,
  _mw0,
  "RemoveReplicationPeer",
  RemoveReplicationPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveReplicationPeerRequest;
      output: RemoveReplicationPeerResponse;
    };
    sdk: {
      input: RemoveReplicationPeerCommandInput;
      output: RemoveReplicationPeerCommandOutput;
    };
  };
}
