// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  CreateAgentOrganizationalReportRequest,
  CreateAgentOrganizationalReportResponse,
} from "../models/models_0";
import { CreateAgentOrganizationalReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentOrganizationalReportCommand}.
 */
export interface CreateAgentOrganizationalReportCommandInput extends CreateAgentOrganizationalReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentOrganizationalReportCommand}.
 */
export interface CreateAgentOrganizationalReportCommandOutput extends CreateAgentOrganizationalReportResponse, __MetadataBearer {}

/**
 * <p>Creates an Organizational Report, which is an asynchronously-materialized, point-in-time snapshot of recommendations across all Agent Profiles within the caller's AWS Organization. You can optionally narrow the scope with filters. The operation is idempotent on the caller-supplied clientToken. The AWS Organization the report belongs to is inferred from the caller's authorization context. Reports are retained for 90 days from creation, after which they are automatically deleted. Use DeleteAgentOrganizationalReport to delete a report earlier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateAgentOrganizationalReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateAgentOrganizationalReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateAgentOrganizationalReportRequest
 *   clientToken: "STRING_VALUE",
 *   label: "STRING_VALUE",
 *   filters: { // OrganizationalReportFilters
 *     accountIds: [ // OrganizationalReportAccountIdList
 *       "STRING_VALUE",
 *     ],
 *     organizationalUnitIds: [ // OrganizationalUnitIdList
 *       "STRING_VALUE",
 *     ],
 *     pillars: [ // PillarList
 *       "COST_OPTIMIZATION" || "SECURITY" || "RESILIENCE" || "PERFORMANCE" || "OPERATIONAL_EXCELLENCE",
 *     ],
 *     recommendationTypes: [ // RecommendationTypeList
 *       "RESOURCE" || "ARCHITECTURE" || "APPLICATION",
 *     ],
 *     statuses: [ // RecommendationStatusList
 *       "ACTIVE" || "SUPPRESSED" || "COMPLETED",
 *     ],
 *     priorities: [ // PriorityList
 *       "HIGH" || "MEDIUM" || "LOW",
 *     ],
 *     createdAtRange: { // TimeWindow
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     updatedAtRange: {
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *   },
 * };
 * const command = new CreateAgentOrganizationalReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentOrganizationalReportResponse
 * //   reportId: "STRING_VALUE", // required
 * //   state: "DISCOVERING" || "SNAPSHOTTING" || "AGGREGATING" || "COMPRESSING" || "COMPLETED" || "FAILED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateAgentOrganizationalReportCommandInput - {@link CreateAgentOrganizationalReportCommandInput}
 * @returns {@link CreateAgentOrganizationalReportCommandOutput}
 * @see {@link CreateAgentOrganizationalReportCommandInput} for command's `input` shape.
 * @see {@link CreateAgentOrganizationalReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
export class CreateAgentOrganizationalReportCommand extends command<CreateAgentOrganizationalReportCommandInput, CreateAgentOrganizationalReportCommandOutput>(
  _ep1,
  _mw0,
  "CreateAgentOrganizationalReport",
  CreateAgentOrganizationalReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentOrganizationalReportRequest;
      output: CreateAgentOrganizationalReportResponse;
    };
    sdk: {
      input: CreateAgentOrganizationalReportCommandInput;
      output: CreateAgentOrganizationalReportCommandOutput;
    };
  };
}
