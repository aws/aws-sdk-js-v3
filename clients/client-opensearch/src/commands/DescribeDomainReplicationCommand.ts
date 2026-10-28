// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDomainReplicationRequest, DescribeDomainReplicationResponse } from "../models/models_0";
import { DescribeDomainReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDomainReplicationCommand}.
 */
export interface DescribeDomainReplicationCommandInput extends DescribeDomainReplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainReplicationCommand}.
 */
export interface DescribeDomainReplicationCommandOutput extends DescribeDomainReplicationResponse, __MetadataBearer {}

/**
 * <p>Describes the replication arrangement that a domain participates in, including the domain's
 *   role and the state of its relationship with each peer.</p>
 *          <p>A domain that is not replicating is returned with an empty <code>Peers</code> list and no
 *   <code>Role</code>. Returns <code>ResourceNotFoundException</code> if the domain does not
 *   exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainReplicationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainReplicationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainReplicationRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainReplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainReplicationResponse
 * //   DomainArn: "STRING_VALUE",
 * //   Role: "PRIMARY" || "SECONDARY",
 * //   Peers: [ // ReplicationPeerList
 * //     { // ReplicationPeer
 * //       PeerDomainArn: "STRING_VALUE",
 * //       PeerRole: "PRIMARY" || "SECONDARY",
 * //       Status: "PENDING_SETUP" || "ACTIVE" || "SWITCHING_OVER" || "FAILING_OVER" || "PENDING_REMOVAL" || "DETACHED" || "EJECTED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDomainReplicationCommandInput - {@link DescribeDomainReplicationCommandInput}
 * @returns {@link DescribeDomainReplicationCommandOutput}
 * @see {@link DescribeDomainReplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainReplicationCommandOutput} for command's `response` shape.
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
export class DescribeDomainReplicationCommand extends command<DescribeDomainReplicationCommandInput, DescribeDomainReplicationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDomainReplication",
  DescribeDomainReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainReplicationRequest;
      output: DescribeDomainReplicationResponse;
    };
    sdk: {
      input: DescribeDomainReplicationCommandInput;
      output: DescribeDomainReplicationCommandOutput;
    };
  };
}
