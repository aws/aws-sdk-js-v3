// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ValidatePublisherRequest, ValidatePublisherResponse } from "../models/models_0";
import { ValidatePublisher$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ValidatePublisherCommand}.
 */
export interface ValidatePublisherCommandInput extends ValidatePublisherRequest {}
/**
 * @public
 *
 * The output of {@link ValidatePublisherCommand}.
 */
export interface ValidatePublisherCommandOutput extends ValidatePublisherResponse, __MetadataBearer {}

/**
 * Restart domain verification for a publisher in FAILED or SUSPENDED. The publisher returns to
 * ACTION_REQUIRED with a new domainChallenge, which the response includes. Update the DNS TXT record
 * with the new recordValue; the previous value no longer verifies the domain. The request fails with
 * ConflictException when the publisher is ACTIVE, verification is already in progress
 * (ACTION_REQUIRED), or the publisher is being deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, ValidatePublisherCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, ValidatePublisherCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // ValidatePublisherRequest
 *   publisherArn: "STRING_VALUE", // required
 * };
 * const command = new ValidatePublisherCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePublisherResponse
 * //   value: { // Identifier Union: only one key present
 * //     domain: "STRING_VALUE",
 * //   },
 * //   identifierType: "DOMAIN",
 * //   status: "ACTION_REQUIRED" || "ACTIVE" || "FAILED" || "SUSPENDED" || "DELETING", // required
 * //   statusReason: "STRING_VALUE",
 * //   domainChallenge: { // DomainChallenge
 * //     recordName: "STRING_VALUE", // required
 * //     recordValue: "STRING_VALUE", // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   publisherArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ValidatePublisherCommandInput - {@link ValidatePublisherCommandInput}
 * @returns {@link ValidatePublisherCommandOutput}
 * @see {@link ValidatePublisherCommandInput} for command's `input` shape.
 * @see {@link ValidatePublisherCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
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
export class ValidatePublisherCommand extends command<ValidatePublisherCommandInput, ValidatePublisherCommandOutput>(
  _ep0,
  _mw0,
  "ValidatePublisher",
  ValidatePublisher$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidatePublisherRequest;
      output: ValidatePublisherResponse;
    };
    sdk: {
      input: ValidatePublisherCommandInput;
      output: ValidatePublisherCommandOutput;
    };
  };
}
