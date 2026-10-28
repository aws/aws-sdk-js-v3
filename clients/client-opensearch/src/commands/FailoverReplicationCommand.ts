// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FailoverReplicationRequest, FailoverReplicationResponse } from "../models/models_0";
import { FailoverReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link FailoverReplicationCommand}.
 */
export interface FailoverReplicationCommandInput extends FailoverReplicationRequest {}
/**
 * @public
 *
 * The output of {@link FailoverReplicationCommand}.
 */
export interface FailoverReplicationCommandOutput extends FailoverReplicationResponse, __MetadataBearer {}

/**
 * <p>Promotes a secondary domain to primary without coordinating with the current primary. Use
 *   this operation when the primary is unreachable and you cannot wait for it to recover.</p>
 *          <p>Writes that had not yet replicated when the primary became unreachable are lost. You must
 *   set <code>AllowDataLoss</code> to acknowledge this. To promote a domain without losing writes,
 *   use the <code>SwitchoverReplication</code> operation instead.</p>
 *          <p>Call this operation in the Region of the domain you want to promote.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, FailoverReplicationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, FailoverReplicationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // FailoverReplicationRequest
 *   DomainName: "STRING_VALUE", // required
 *   PeerDomainArn: "STRING_VALUE", // required
 *   AllowDataLoss: true || false, // required
 * };
 * const command = new FailoverReplicationCommand(input);
 * const response = await client.send(command);
 * // { // FailoverReplicationResponse
 * //   DomainArn: "STRING_VALUE",
 * //   Status: "PENDING_SETUP" || "ACTIVE" || "SWITCHING_OVER" || "FAILING_OVER" || "PENDING_REMOVAL" || "DETACHED" || "EJECTED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param FailoverReplicationCommandInput - {@link FailoverReplicationCommandInput}
 * @returns {@link FailoverReplicationCommandOutput}
 * @see {@link FailoverReplicationCommandInput} for command's `input` shape.
 * @see {@link FailoverReplicationCommandOutput} for command's `response` shape.
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
export class FailoverReplicationCommand extends command<FailoverReplicationCommandInput, FailoverReplicationCommandOutput>(
  _ep0,
  _mw0,
  "FailoverReplication",
  FailoverReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FailoverReplicationRequest;
      output: FailoverReplicationResponse;
    };
    sdk: {
      input: FailoverReplicationCommandInput;
      output: FailoverReplicationCommandOutput;
    };
  };
}
