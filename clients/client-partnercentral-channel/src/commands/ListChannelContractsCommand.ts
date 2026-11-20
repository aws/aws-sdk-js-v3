// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListChannelContractsRequest, ListChannelContractsResponse } from "../models/models_0";
import { ListChannelContracts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelContractsCommand}.
 */
export interface ListChannelContractsCommandInput extends ListChannelContractsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelContractsCommand}.
 */
export interface ListChannelContractsCommandOutput extends ListChannelContractsResponse, __MetadataBearer {}

/**
 * <p>Lists channel contracts based on specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, ListChannelContractsCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, ListChannelContractsCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // ListChannelContractsRequest
 *   catalog: "STRING_VALUE", // required
 *   contractType: "MANAGED_SERVICES_ATTESTATION", // required
 *   statuses: [ // ChannelContractStatusFilterList
 *     "PENDING" || "ACCEPTED" || "EXPIRED" || "CANCELED" || "INACTIVE",
 *   ],
 *   contractTypeFilters: { // ListChannelContractsTypeFilters Union: only one key present
 *     managedServicesAttestationTypeFilters: { // ManagedServicesAttestationTypeFilters
 *       relationshipIdentifiers: [ // RelationshipIdentifierFilterList
 *         "STRING_VALUE",
 *       ],
 *       legalEntityNames: [ // ChannelContractLegalEntityNameFilterList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   contractTypeSort: { // ListChannelContractsTypeSort Union: only one key present
 *     managedServicesAttestationTypeSort: { // ManagedServicesAttestationTypeSort
 *       sortOrder: "Ascending" || "Descending", // required
 *       sortBy: "UpdatedAt", // required
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelContractsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelContractsResponse
 * //   items: [ // ChannelContractSummaries // required
 * //     { // ChannelContractSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       catalog: "STRING_VALUE", // required
 * //       contractType: "MANAGED_SERVICES_ATTESTATION", // required
 * //       status: "PENDING" || "ACCEPTED" || "EXPIRED" || "CANCELED" || "INACTIVE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       respondedAt: new Date("TIMESTAMP"),
 * //       details: { // ChannelContractSummaryDetails Union: only one key present
 * //         managedServicesAttestationDetails: { // ManagedServicesAttestationSummaryDetails
 * //           legalEntityName: "STRING_VALUE", // required
 * //           relationshipIdentifier: "STRING_VALUE", // required
 * //           programManagementAccountIdentifier: "STRING_VALUE", // required
 * //           memberAccountIds: [ // MemberAccountIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           endDate: new Date("TIMESTAMP"), // required
 * //           supportedServices: [ // ManagedServicesSupportedServiceList // required
 * //             "MONITORING" || "PATCHING" || "SECURITY" || "BACKUP_AND_DISASTER_RECOVERY" || "FINANCIAL_OPERATIONS" || "INFRASTRUCTURE_AS_CODE_AND_AUTOMATION" || "WELL_ARCHITECTED" || "ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_OPERATIONS",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelContractsCommandInput - {@link ListChannelContractsCommandInput}
 * @returns {@link ListChannelContractsCommandOutput}
 * @see {@link ListChannelContractsCommandInput} for command's `input` shape.
 * @see {@link ListChannelContractsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for ListChannelContracts - MANAGED_SERVICES_ATTESTATION
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   contractType: "MANAGED_SERVICES_ATTESTATION",
 *   contractTypeFilters: {
 *     managedServicesAttestationTypeFilters: {
 *       legalEntityNames: [
 *         "Example Partner Corp"
 *       ],
 *       relationshipIdentifiers: [
 *         "rs-abc123def456g"
 *       ]
 *     }
 *   },
 *   contractTypeSort: {
 *     managedServicesAttestationTypeSort: {
 *       sortBy: "UpdatedAt",
 *       sortOrder: "Descending"
 *     }
 *   },
 *   maxResults: 20,
 *   statuses: [
 *     "PENDING"
 *   ]
 * };
 * const command = new ListChannelContractsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-contract/cc-4fj3bd2o3vb91",
 *       catalog: "AWS",
 *       contractType: "MANAGED_SERVICES_ATTESTATION",
 *       createdAt: "2026-09-08T16:18:16.000Z",
 *       details: {
 *         managedServicesAttestationDetails: {
 *           endDate: "2027-03-31T00:00:00Z",
 *           legalEntityName: "Example Partner Corp",
 *           memberAccountIds: [
 *             "111122224444"
 *           ],
 *           programManagementAccountIdentifier: "pma-abcdef123456g",
 *           relationshipIdentifier: "rs-abc123def456g",
 *           supportedServices: [
 *             "MONITORING",
 *             "SECURITY"
 *           ]
 *         }
 *       },
 *       id: "cc-4fj3bd2o3vb91",
 *       status: "PENDING",
 *       updatedAt: "2026-09-08T16:18:16.000Z"
 *     }
 *   ],
 *   nextToken: "nextToken"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChannelContractsCommand extends command<ListChannelContractsCommandInput, ListChannelContractsCommandOutput>(
  _ep0,
  _mw0,
  "ListChannelContracts",
  ListChannelContracts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelContractsRequest;
      output: ListChannelContractsResponse;
    };
    sdk: {
      input: ListChannelContractsCommandInput;
      output: ListChannelContractsCommandOutput;
    };
  };
}
