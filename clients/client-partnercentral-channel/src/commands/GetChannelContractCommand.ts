// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChannelContractRequest, GetChannelContractResponse } from "../models/models_0";
import { GetChannelContract$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChannelContractCommand}.
 */
export interface GetChannelContractCommandInput extends GetChannelContractRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelContractCommand}.
 */
export interface GetChannelContractCommandOutput extends GetChannelContractResponse, __MetadataBearer {}

/**
 * <p>Retrieves details of a specific channel contract.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, GetChannelContractCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, GetChannelContractCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // GetChannelContractRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetChannelContractCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelContractResponse
 * //   channelContractDetail: { // ChannelContractDetail
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     catalog: "STRING_VALUE", // required
 * //     contractType: "MANAGED_SERVICES_ATTESTATION", // required
 * //     status: "PENDING" || "ACCEPTED" || "EXPIRED" || "CANCELED" || "INACTIVE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     respondedAt: new Date("TIMESTAMP"),
 * //     cancellationReason: "STRING_VALUE",
 * //     details: { // ChannelContractDetails Union: only one key present
 * //       managedServicesAttestationDetails: { // ManagedServicesAttestationDetails
 * //         legalEntityName: "STRING_VALUE", // required
 * //         relationshipIdentifier: "STRING_VALUE", // required
 * //         programManagementAccountIdentifier: "STRING_VALUE", // required
 * //         memberAccountIds: [ // MemberAccountIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         endDate: new Date("TIMESTAMP"), // required
 * //         supportedServices: [ // ManagedServicesSupportedServiceList // required
 * //           "MONITORING" || "PATCHING" || "SECURITY" || "BACKUP_AND_DISASTER_RECOVERY" || "FINANCIAL_OPERATIONS" || "INFRASTRUCTURE_AS_CODE_AND_AUTOMATION" || "WELL_ARCHITECTED" || "ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_OPERATIONS",
 * //         ],
 * //         signatoryName: "STRING_VALUE", // required
 * //         signatoryEmail: "STRING_VALUE", // required
 * //         legalEntityAddress: { // Address
 * //           city: "STRING_VALUE", // required
 * //           stateOrRegion: "STRING_VALUE", // required
 * //           postalCode: "STRING_VALUE", // required
 * //           countryCode: "STRING_VALUE", // required
 * //           addressLine: "STRING_VALUE", // required
 * //           addressLine2: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelContractCommandInput - {@link GetChannelContractCommandInput}
 * @returns {@link GetChannelContractCommandOutput}
 * @see {@link GetChannelContractCommandInput} for command's `input` shape.
 * @see {@link GetChannelContractCommandOutput} for command's `response` shape.
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
 * @example Example for GetChannelContract - MANAGED_SERVICES_ATTESTATION
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   identifier: "cc-4fj3bd2o3vb91"
 * };
 * const command = new GetChannelContractCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelContractDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-contract/cc-4fj3bd2o3vb91",
 *     catalog: "AWS",
 *     contractType: "MANAGED_SERVICES_ATTESTATION",
 *     createdAt: "2026-09-08T16:18:16.000Z",
 *     details: {
 *       managedServicesAttestationDetails: {
 *         endDate: "2027-03-31T00:00:00Z",
 *         legalEntityAddress: {
 *           addressLine: "123 Any Street",
 *           addressLine2: "Suite 100",
 *           city: "Anytown",
 *           countryCode: "US",
 *           postalCode: "98101",
 *           stateOrRegion: "WA"
 *         },
 *         legalEntityName: "Example Partner Corp",
 *         memberAccountIds: [
 *           "111122224444"
 *         ],
 *         programManagementAccountIdentifier: "pma-abcdef123456g",
 *         relationshipIdentifier: "rs-abc123def456g",
 *         signatoryEmail: "mary.major@example.com",
 *         signatoryName: "Mary Major",
 *         supportedServices: [
 *           "MONITORING",
 *           "SECURITY"
 *         ]
 *       }
 *     },
 *     id: "cc-4fj3bd2o3vb91",
 *     status: "PENDING",
 *     updatedAt: "2026-09-08T16:18:16.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Example for GetChannelContract - CANCELED
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   identifier: "cc-9xq4rt6w2zp81"
 * };
 * const command = new GetChannelContractCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelContractDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-contract/cc-9xq4rt6w2zp81",
 *     cancellationReason: "No longer providing managed services for this customer",
 *     catalog: "AWS",
 *     contractType: "MANAGED_SERVICES_ATTESTATION",
 *     createdAt: "2026-09-08T16:18:16.000Z",
 *     details: {
 *       managedServicesAttestationDetails: {
 *         endDate: "2027-03-31T00:00:00Z",
 *         legalEntityAddress: {
 *           addressLine: "123 Any Street",
 *           addressLine2: "Suite 100",
 *           city: "Anytown",
 *           countryCode: "US",
 *           postalCode: "98101",
 *           stateOrRegion: "WA"
 *         },
 *         legalEntityName: "Example Partner Corp",
 *         memberAccountIds: [
 *           "111122224444"
 *         ],
 *         programManagementAccountIdentifier: "pma-abcdef123456g",
 *         relationshipIdentifier: "rs-abc123def456g",
 *         signatoryEmail: "mary.major@example.com",
 *         signatoryName: "Mary Major",
 *         supportedServices: [
 *           "MONITORING",
 *           "SECURITY"
 *         ]
 *       }
 *     },
 *     id: "cc-9xq4rt6w2zp81",
 *     status: "CANCELED",
 *     updatedAt: "2026-09-10T09:30:00.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetChannelContractCommand extends command<GetChannelContractCommandInput, GetChannelContractCommandOutput>(
  _ep0,
  _mw0,
  "GetChannelContract",
  GetChannelContract$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelContractRequest;
      output: GetChannelContractResponse;
    };
    sdk: {
      input: GetChannelContractCommandInput;
      output: GetChannelContractCommandOutput;
    };
  };
}
