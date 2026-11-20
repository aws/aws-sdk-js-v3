// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociatePublisherRequest, AssociatePublisherResponse } from "../models/models_0";
import { AssociatePublisher$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociatePublisherCommand}.
 */
export interface AssociatePublisherCommandInput extends AssociatePublisherRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePublisherCommand}.
 */
export interface AssociatePublisherCommandOutput extends AssociatePublisherResponse, __MetadataBearer {}

/**
 * Associate a registry record with a publisher and assign the record a public identifier under the
 * publisher's domain. The registry record must be APPROVED and the publisher must be ACTIVE. A
 * registry record can have only one publisher association. The new association starts in
 * PENDING_APPROVAL until a curator approves or rejects it.
 * A ConflictException (HTTP 409) means the publisher is not ACTIVE yet, the registry record already
 * has an association, or another registry record already holds the public identifier. To retry
 * safely, repeat the request with the same clientToken; a retry returns the original association.
 * If the publisher has reached its association quota, the request fails with
 * ServiceQuotaExceededException (HTTP 402). Remove an unused association or request a quota increase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, AssociatePublisherCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, AssociatePublisherCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // AssociatePublisherRequest
 *   recordArn: "STRING_VALUE", // required
 *   publisherArn: "STRING_VALUE", // required
 *   subdomain: "STRING_VALUE",
 *   categories: [ // CategoryList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociatePublisherCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePublisherResponse
 * //   recordArn: "STRING_VALUE", // required
 * //   publicIdentifier: "STRING_VALUE", // required
 * //   publisher: "STRING_VALUE", // required
 * //   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "SUSPENDED", // required
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociatePublisherCommandInput - {@link AssociatePublisherCommandInput}
 * @returns {@link AssociatePublisherCommandOutput}
 * @see {@link AssociatePublisherCommandInput} for command's `input` shape.
 * @see {@link AssociatePublisherCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link DependencyException} (server fault)
 *  This exception is thrown on a database (or other dependency) error. Modeled as a
 * server error so SDKs retry it (5xx) and it feeds server-error alarming. Marked
 * @retryable because it represents a transient downstream failure that is safe to retry
 * (matches the forwarder's own retry-on-DependencyException behavior).
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryControlServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistryControl service.</p>
 *
 *
 * @public
 */
export class AssociatePublisherCommand extends command<AssociatePublisherCommandInput, AssociatePublisherCommandOutput>(
  _ep0,
  _mw0,
  "AssociatePublisher",
  AssociatePublisher$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePublisherRequest;
      output: AssociatePublisherResponse;
    };
    sdk: {
      input: AssociatePublisherCommandInput;
      output: AssociatePublisherCommandOutput;
    };
  };
}
