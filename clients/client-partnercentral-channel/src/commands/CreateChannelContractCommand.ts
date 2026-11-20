// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChannelContractRequest, CreateChannelContractResponse } from "../models/models_0";
import { CreateChannelContract$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateChannelContractCommand}.
 */
export interface CreateChannelContractCommandInput extends CreateChannelContractRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelContractCommand}.
 */
export interface CreateChannelContractCommandOutput extends CreateChannelContractResponse, __MetadataBearer {}

/**
 * <p>Creates a new channel contract and sends it to the signatory for signature. In the Sandbox catalog, the channel contract is accepted automatically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, CreateChannelContractCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, CreateChannelContractCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // CreateChannelContractRequest
 *   contractType: "MANAGED_SERVICES_ATTESTATION", // required
 *   catalog: "STRING_VALUE", // required
 *   payload: { // ChannelContractPayload Union: only one key present
 *     managedServicesAttestationPayload: { // ManagedServicesAttestationPayload
 *       legalEntityName: "STRING_VALUE", // required
 *       relationshipIdentifier: "STRING_VALUE", // required
 *       programManagementAccountIdentifier: "STRING_VALUE", // required
 *       memberAccountIds: [ // MemberAccountIdList
 *         "STRING_VALUE",
 *       ],
 *       endDate: new Date("TIMESTAMP"), // required
 *       supportedServices: [ // ManagedServicesSupportedServiceList // required
 *         "MONITORING" || "PATCHING" || "SECURITY" || "BACKUP_AND_DISASTER_RECOVERY" || "FINANCIAL_OPERATIONS" || "INFRASTRUCTURE_AS_CODE_AND_AUTOMATION" || "WELL_ARCHITECTED" || "ARTIFICIAL_INTELLIGENCE_AND_MACHINE_LEARNING_OPERATIONS",
 *       ],
 *       legalEntityAddress: { // Address
 *         city: "STRING_VALUE", // required
 *         stateOrRegion: "STRING_VALUE", // required
 *         postalCode: "STRING_VALUE", // required
 *         countryCode: "STRING_VALUE", // required
 *         addressLine: "STRING_VALUE", // required
 *         addressLine2: "STRING_VALUE",
 *       },
 *       signatoryName: "STRING_VALUE", // required
 *       signatoryEmail: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateChannelContractCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelContractResponse
 * //   channelContractDetail: { // CreateChannelContractDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelContractCommandInput - {@link CreateChannelContractCommandInput}
 * @returns {@link CreateChannelContractCommandOutput}
 * @see {@link CreateChannelContractCommandInput} for command's `input` shape.
 * @see {@link CreateChannelContractCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
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
 * @example Example for CreateChannelContract - MANAGED_SERVICES_ATTESTATION
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   contractType: "MANAGED_SERVICES_ATTESTATION",
 *   payload: {
 *     managedServicesAttestationPayload: {
 *       endDate: "2027-03-31T00:00:00Z",
 *       legalEntityAddress: {
 *         addressLine: "123 Any Street",
 *         addressLine2: "Suite 100",
 *         city: "Anytown",
 *         countryCode: "US",
 *         postalCode: "98101",
 *         stateOrRegion: "WA"
 *       },
 *       legalEntityName: "Example Partner Corp",
 *       memberAccountIds: [
 *         "111122224444"
 *       ],
 *       programManagementAccountIdentifier: "pma-abcdef123456g",
 *       relationshipIdentifier: "rs-abc123def456g",
 *       signatoryEmail: "mary.major@example.com",
 *       signatoryName: "Mary Major",
 *       supportedServices: [
 *         "MONITORING",
 *         "SECURITY"
 *       ]
 *     }
 *   }
 * };
 * const command = new CreateChannelContractCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   channelContractDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:111122223333:catalog/AWS/channel-contract/cc-4fj3bd2o3vb91",
 *     id: "cc-4fj3bd2o3vb91"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateChannelContractCommand extends command<CreateChannelContractCommandInput, CreateChannelContractCommandOutput>(
  _ep0,
  _mw0,
  "CreateChannelContract",
  CreateChannelContract$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelContractRequest;
      output: CreateChannelContractResponse;
    };
    sdk: {
      input: CreateChannelContractCommandInput;
      output: CreateChannelContractCommandOutput;
    };
  };
}
