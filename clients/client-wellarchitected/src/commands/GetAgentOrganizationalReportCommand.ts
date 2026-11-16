// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetAgentOrganizationalReportRequest, GetAgentOrganizationalReportResponse } from "../models/models_0";
import { GetAgentOrganizationalReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentOrganizationalReportCommand}.
 */
export interface GetAgentOrganizationalReportCommandInput extends GetAgentOrganizationalReportRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentOrganizationalReportCommand}.
 */
export interface GetAgentOrganizationalReportCommandOutput extends GetAgentOrganizationalReportResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata and current state for a single Organizational Report. The coverageSummary is populated once the report reaches COMPLETED and is absent for reports still in progress or in a failed state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentOrganizationalReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentOrganizationalReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentOrganizationalReportRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentOrganizationalReportCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentOrganizationalReportResponse
 * //   reportId: "STRING_VALUE", // required
 * //   ownerAccountId: "STRING_VALUE", // required
 * //   organizationId: "STRING_VALUE", // required
 * //   label: "STRING_VALUE",
 * //   state: "DISCOVERING" || "SNAPSHOTTING" || "AGGREGATING" || "COMPRESSING" || "COMPLETED" || "FAILED" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   filters: { // OrganizationalReportFilters
 * //     accountIds: [ // OrganizationalReportAccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     organizationalUnitIds: [ // OrganizationalUnitIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     pillars: [ // PillarList
 * //       "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 * //     ],
 * //     recommendationTypes: [ // RecommendationTypeList
 * //       "RESOURCE" || "ARCHITECTURE" || "APPLICATION",
 * //     ],
 * //     statuses: [ // RecommendationStatusList
 * //       "ACTIVE" || "SUPPRESSED" || "COMPLETED",
 * //     ],
 * //     priorities: [ // PriorityList
 * //       "HIGH" || "MEDIUM" || "LOW",
 * //     ],
 * //     createdAtRange: { // TimeWindow
 * //       from: new Date("TIMESTAMP"),
 * //       to: new Date("TIMESTAMP"),
 * //     },
 * //     updatedAtRange: {
 * //       from: new Date("TIMESTAMP"),
 * //       to: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * //   coverageSummary: { // CoverageSummary
 * //     totalAccountsInScope: Number("long"), // required
 * //     accountsWithProfile: Number("long"), // required
 * //     accountsWithoutProfile: Number("long"), // required
 * //     failedAccountCount: Number("long"), // required
 * //     totalProfiles: Number("long"), // required
 * //     totalRecommendations: Number("long"), // required
 * //     recommendationCountByPillar: [ // PillarCountList
 * //       { // PillarCount
 * //         pillar: "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE", // required
 * //         count: Number("long"), // required
 * //       },
 * //     ],
 * //     recommendationCountByPriority: [ // PriorityCountList
 * //       { // PriorityCount
 * //         priority: "HIGH" || "MEDIUM" || "LOW", // required
 * //         count: Number("long"), // required
 * //       },
 * //     ],
 * //     failedAccounts: [ // FailedAccountList
 * //       { // FailedAccount
 * //         accountId: "STRING_VALUE", // required
 * //         reason: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     failedOrganizationalUnits: [ // FailedOrganizationalUnitList
 * //       { // FailedOrganizationalUnit
 * //         organizationalUnitId: "STRING_VALUE", // required
 * //         reason: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentOrganizationalReportCommandInput - {@link GetAgentOrganizationalReportCommandInput}
 * @returns {@link GetAgentOrganizationalReportCommandOutput}
 * @see {@link GetAgentOrganizationalReportCommandInput} for command's `input` shape.
 * @see {@link GetAgentOrganizationalReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class GetAgentOrganizationalReportCommand extends command<GetAgentOrganizationalReportCommandInput, GetAgentOrganizationalReportCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentOrganizationalReport",
  GetAgentOrganizationalReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentOrganizationalReportRequest;
      output: GetAgentOrganizationalReportResponse;
    };
    sdk: {
      input: GetAgentOrganizationalReportCommandInput;
      output: GetAgentOrganizationalReportCommandOutput;
    };
  };
}
