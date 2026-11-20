// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePublisherRequest, CreatePublisherResponse } from "../models/models_0";
import { CreatePublisher$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePublisherCommand}.
 */
export interface CreatePublisherCommandInput extends CreatePublisherRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublisherCommand}.
 */
export interface CreatePublisherCommandOutput extends CreatePublisherResponse, __MetadataBearer {}

/**
 * Create a publisher for a domain you control. The publisher starts in ACTION_REQUIRED, and the
 * response includes a domainChallenge. To verify the domain, create a DNS TXT record with the
 * challenge's recordName and recordValue. When the registry finds the record, the publisher becomes
 * ACTIVE and you can associate registry records with it.
 * Your account can have one publisher per domain. Creating a second publisher for the same domain
 * fails with ConflictException unless the request repeats the original clientToken, which returns the
 * existing publisher. The request also fails with ConflictException when another account has already
 * verified the domain.
 * If your account has reached its Publisher quota, the request fails with
 * ServiceQuotaExceededException (HTTP 402). Delete an unused Publisher or request a quota increase.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, CreatePublisherCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, CreatePublisherCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // CreatePublisherRequest
 *   value: { // Identifier Union: only one key present
 *     domain: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePublisherCommand(input);
 * const response = await client.send(command);
 * // { // CreatePublisherResponse
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
 * @param CreatePublisherCommandInput - {@link CreatePublisherCommandInput}
 * @returns {@link CreatePublisherCommandOutput}
 * @see {@link CreatePublisherCommandInput} for command's `input` shape.
 * @see {@link CreatePublisherCommandOutput} for command's `response` shape.
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
export class CreatePublisherCommand extends command<CreatePublisherCommandInput, CreatePublisherCommandOutput>(
  _ep0,
  _mw0,
  "CreatePublisher",
  CreatePublisher$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePublisherRequest;
      output: CreatePublisherResponse;
    };
    sdk: {
      input: CreatePublisherCommandInput;
      output: CreatePublisherCommandOutput;
    };
  };
}
