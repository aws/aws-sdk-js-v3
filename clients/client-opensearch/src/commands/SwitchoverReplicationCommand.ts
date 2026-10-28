// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SwitchoverReplicationRequest, SwitchoverReplicationResponse } from "../models/models_1";
import { SwitchoverReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SwitchoverReplicationCommand}.
 */
export interface SwitchoverReplicationCommandInput extends SwitchoverReplicationRequest {}
/**
 * @public
 *
 * The output of {@link SwitchoverReplicationCommand}.
 */
export interface SwitchoverReplicationCommandOutput extends SwitchoverReplicationResponse, __MetadataBearer {}

/**
 * <p>Promotes a secondary domain to primary, coordinating with the current primary so that no
 *   writes are lost. Use this operation for planned role changes, such as testing your recovery
 *   procedure or moving write traffic to another Region.</p>
 *          <p>Call this operation in the Region of the domain you want to promote. If the current primary
 *   is unreachable, use the <code>FailoverReplication</code> operation
 *   instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, SwitchoverReplicationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, SwitchoverReplicationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // SwitchoverReplicationRequest
 *   DomainName: "STRING_VALUE", // required
 *   PeerDomainArn: "STRING_VALUE", // required
 * };
 * const command = new SwitchoverReplicationCommand(input);
 * const response = await client.send(command);
 * // { // SwitchoverReplicationResponse
 * //   DomainArn: "STRING_VALUE",
 * //   Status: "PENDING_SETUP" || "ACTIVE" || "SWITCHING_OVER" || "FAILING_OVER" || "PENDING_REMOVAL" || "DETACHED" || "EJECTED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param SwitchoverReplicationCommandInput - {@link SwitchoverReplicationCommandInput}
 * @returns {@link SwitchoverReplicationCommandOutput}
 * @see {@link SwitchoverReplicationCommandInput} for command's `input` shape.
 * @see {@link SwitchoverReplicationCommandOutput} for command's `response` shape.
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
export class SwitchoverReplicationCommand extends command<SwitchoverReplicationCommandInput, SwitchoverReplicationCommandOutput>(
  _ep0,
  _mw0,
  "SwitchoverReplication",
  SwitchoverReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SwitchoverReplicationRequest;
      output: SwitchoverReplicationResponse;
    };
    sdk: {
      input: SwitchoverReplicationCommandInput;
      output: SwitchoverReplicationCommandOutput;
    };
  };
}
