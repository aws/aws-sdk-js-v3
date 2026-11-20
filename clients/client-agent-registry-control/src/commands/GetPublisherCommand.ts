// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPublisherRequest, Publisher } from "../models/models_0";
import { GetPublisher$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPublisherCommand}.
 */
export interface GetPublisherCommandInput extends GetPublisherRequest {}
/**
 * @public
 *
 * The output of {@link GetPublisherCommand}.
 */
export interface GetPublisherCommandOutput extends Publisher, __MetadataBearer {}

/**
 * Get a publisher, including its verification status and the DNS challenge for its domain. If the
 * publisher ARN names your account and the publisher doesn't exist, the request fails with
 * ResourceNotFoundException.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, GetPublisherCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, GetPublisherCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // GetPublisherRequest
 *   publisherArn: "STRING_VALUE", // required
 * };
 * const command = new GetPublisherCommand(input);
 * const response = await client.send(command);
 * // { // Publisher
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
 * @param GetPublisherCommandInput - {@link GetPublisherCommandInput}
 * @returns {@link GetPublisherCommandOutput}
 * @see {@link GetPublisherCommandInput} for command's `input` shape.
 * @see {@link GetPublisherCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
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
export class GetPublisherCommand extends command<GetPublisherCommandInput, GetPublisherCommandOutput>(
  _ep0,
  _mw0,
  "GetPublisher",
  GetPublisher$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublisherRequest;
      output: Publisher;
    };
    sdk: {
      input: GetPublisherCommandInput;
      output: GetPublisherCommandOutput;
    };
  };
}
