// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchPublicRecordsRequest, SearchPublicRecordsResponse } from "../models/models_0";
import { SearchPublicRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchPublicRecordsCommand}.
 */
export interface SearchPublicRecordsCommandInput extends SearchPublicRecordsRequest {}
/**
 * @public
 *
 * The output of {@link SearchPublicRecordsCommand}.
 */
export interface SearchPublicRecordsCommandOutput extends SearchPublicRecordsResponse, __MetadataBearer {}

/**
 * Search public agent records across the authoritative + crawler indexes. Hybrid keyword +
 * neural ranking, merged and fused (weighted RRF), with filters, org governance policy, and
 * descriptor-visibility enforcement applied server-side. Public, authenticated (D-1).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentDiscoveryClient, SearchPublicRecordsCommand } from "@aws-sdk/client-agent-discovery"; // ES Modules import
 * // const { AgentDiscoveryClient, SearchPublicRecordsCommand } = require("@aws-sdk/client-agent-discovery"); // CommonJS import
 * // import type { AgentDiscoveryClientConfig } from "@aws-sdk/client-agent-discovery";
 * const config = {}; // type is AgentDiscoveryClientConfig
 * const client = new AgentDiscoveryClient(config);
 * const input = { // SearchPublicRecordsRequest
 *   searchQuery: "STRING_VALUE",
 *   filters: "DOCUMENT_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchPublicRecordsCommand(input);
 * const response = await client.send(command);
 * // { // SearchPublicRecordsResponse
 * //   records: [ // PublicRecordList // required
 * //     { // PublicRecord
 * //       identifier: { // Identifier Union: only one key present
 * //         domain: "STRING_VALUE",
 * //         uri: "STRING_VALUE",
 * //       },
 * //       displayName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       recordType: "AGENT" || "TOOL" || "SKILL" || "CUSTOM" || "GATEWAY" || "WEB_BOT", // required
 * //       domain: "STRING_VALUE",
 * //       descriptors: { // DescriptorMap
 * //         "<keys>": { // DescriptorEntry
 * //           data: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //           source: { // DescriptorSource
 * //             fromUrl: { // DescriptorSourceUrl
 * //               url: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           additionalData: {
 * //             "<keys>": {
 * //               data: "STRING_VALUE",
 * //               version: "STRING_VALUE",
 * //               source: {
 * //                 fromUrl: {
 * //                   url: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               additionalData: "<DescriptorMap>",
 * //             },
 * //           },
 * //         },
 * //       },
 * //       trustManifests: [ // TrustManifestList
 * //         { // TrustManifest
 * //           contributor: "STRING_VALUE", // required
 * //           provenance: [ // ProvenanceLinkList
 * //             { // ProvenanceLink
 * //               relation: "publishedFrom" || "discoveredFrom" || "federatedFrom", // required
 * //               sourceId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       recordVersion: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchPublicRecordsCommandInput - {@link SearchPublicRecordsCommandInput}
 * @returns {@link SearchPublicRecordsCommandOutput}
 * @see {@link SearchPublicRecordsCommandInput} for command's `input` shape.
 * @see {@link SearchPublicRecordsCommandOutput} for command's `response` shape.
 * @see {@link AgentDiscoveryClientResolvedConfig | config} for AgentDiscoveryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Thrown on an internal defect — a bug or malformed state, not a failed dependency.
 *
 * <p>⚠️ Deliberately a **permanent** failure. Repeating a request that failed to serialize will fail
 * identically, so treating a 500 as retryable would spin a poison message through redelivery forever
 * instead of letting it reach a dead-letter queue. Dependency failures that *are* worth retrying use
 * `ServiceUnavailableException` and its 503 instead.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Thrown when the caller exceeds a rate/burst limit (D-9). ARD's code for it is `RATE_LIMIT_EXCEEDED`.
 *
 * @throws {@link ValidationException} (client fault)
 *  Thrown when a request fails input validation.
 *
 * <p>`errorCode` carries ARD's Appendix B code, `INVALID_ARGUMENT`, which ARD's OpenAPI makes a required
 * member of every error body on the ARD surface. The Amazon-shaped and internal surfaces leave it unset.
 *
 * @throws {@link AgentDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from AgentDiscovery service.</p>
 *
 *
 * @example To search for agents by keyword
 * ```javascript
 * // The following example searches public records for flight booking agents and returns the first match.
 * const input = {
 *   filters: {
 *     recordType: {
 *       $eq: "AGENT"
 *     }
 *   },
 *   maxResults: 1,
 *   searchQuery: "book a flight"
 * };
 * const command = new SearchPublicRecordsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "MQ",
 *   records: [
 *     {
 *       createdAt: 1767225600,
 *       description: "Searches and books flights for a traveler.",
 *       descriptors: {
 *         a2aAgentCard: {
 *           source: {
 *             fromUrl: {
 *               url: "https://example.com/.well-known/agent-card.json"
 *             }
 *           },
 *           version: "0.3.0"
 *         }
 *       },
 *       displayName: "Flight Booking Agent",
 *       domain: "example.com",
 *       identifier: {
 *         uri: "urn:air:example.com:flight-booking:agent"
 *       },
 *       recordType: "AGENT",
 *       recordVersion: "1.0.0",
 *       trustManifests: [
 *         {
 *           contributor: "did:web:agent-registry.global.api.aws",
 *           provenance: [
 *             {
 *               relation: "publishedFrom",
 *               sourceId: "urn:air:example.com:flight-booking:agent"
 *             }
 *           ]
 *         }
 *       ],
 *       updatedAt: 1767225600
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchPublicRecordsCommand extends command<SearchPublicRecordsCommandInput, SearchPublicRecordsCommandOutput>(
  _ep0,
  _mw0,
  "SearchPublicRecords",
  SearchPublicRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchPublicRecordsRequest;
      output: SearchPublicRecordsResponse;
    };
    sdk: {
      input: SearchPublicRecordsCommandInput;
      output: SearchPublicRecordsCommandOutput;
    };
  };
}
