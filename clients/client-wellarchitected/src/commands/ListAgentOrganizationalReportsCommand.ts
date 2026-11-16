// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListAgentOrganizationalReportsRequest, ListAgentOrganizationalReportsResponse } from "../models/models_0";
import { ListAgentOrganizationalReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentOrganizationalReportsCommand}.
 */
export interface ListAgentOrganizationalReportsCommandInput extends ListAgentOrganizationalReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentOrganizationalReportsCommand}.
 */
export interface ListAgentOrganizationalReportsCommandOutput extends ListAgentOrganizationalReportsResponse, __MetadataBearer {}

/**
 * <p>Lists Organizational Reports owned by the caller's account within the caller's AWS Organization, ordered by most recently created first. Supports pagination and an optional state filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAgentOrganizationalReportsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAgentOrganizationalReportsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAgentOrganizationalReportsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   state: "DISCOVERING" || "SNAPSHOTTING" || "AGGREGATING" || "COMPRESSING" || "COMPLETED" || "FAILED" || "DELETING",
 * };
 * const command = new ListAgentOrganizationalReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentOrganizationalReportsResponse
 * //   items: [ // OrganizationalReportSummaryList // required
 * //     { // OrganizationalReportSummary
 * //       reportId: "STRING_VALUE", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //       organizationId: "STRING_VALUE", // required
 * //       label: "STRING_VALUE",
 * //       state: "DISCOVERING" || "SNAPSHOTTING" || "AGGREGATING" || "COMPRESSING" || "COMPLETED" || "FAILED" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentOrganizationalReportsCommandInput - {@link ListAgentOrganizationalReportsCommandInput}
 * @returns {@link ListAgentOrganizationalReportsCommandOutput}
 * @see {@link ListAgentOrganizationalReportsCommandInput} for command's `input` shape.
 * @see {@link ListAgentOrganizationalReportsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
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
export class ListAgentOrganizationalReportsCommand extends command<ListAgentOrganizationalReportsCommandInput, ListAgentOrganizationalReportsCommandOutput>(
  _ep1,
  _mw0,
  "ListAgentOrganizationalReports",
  ListAgentOrganizationalReports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentOrganizationalReportsRequest;
      output: ListAgentOrganizationalReportsResponse;
    };
    sdk: {
      input: ListAgentOrganizationalReportsCommandInput;
      output: ListAgentOrganizationalReportsCommandOutput;
    };
  };
}
