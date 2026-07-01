// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInvestigationsRequest, ListInvestigationsResponse } from "../models/models_1";
import { ListInvestigations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInvestigationsCommand}.
 */
export interface ListInvestigationsCommandInput extends ListInvestigationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvestigationsCommand}.
 */
export interface ListInvestigationsCommandOutput extends ListInvestigationsResponse, __MetadataBearer {}

/**
 * <p>This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).</p> <p>Returns a list of investigations associated with the specified GuardDuty detector.</p> <p>An administrator account sees all investigations across the organization. Member accounts see only the investigations that belong to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListInvestigationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListInvestigationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListInvestigationsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   SortCriteria: { // InvestigationSortCriteria
 *     AttributeName: "START_TIME" || "END_TIME" || "STATUS" || "RISK_LEVEL" || "CONFIDENCE",
 *     OrderBy: "ASC" || "DESC",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInvestigationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvestigationsResponse
 * //   Investigations: [ // InvestigationSummaries // required
 * //     { // InvestigationSummary
 * //       InvestigationId: "STRING_VALUE",
 * //       Status: "RUNNING" || "COMPLETED" || "FAILED",
 * //       TriggerPrompt: "STRING_VALUE",
 * //       RiskLevel: "Info" || "Low" || "Medium" || "High" || "Critical",
 * //       Confidence: "Unknown" || "Low" || "Medium" || "High",
 * //       Title: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvestigationsCommandInput - {@link ListInvestigationsCommandInput}
 * @returns {@link ListInvestigationsCommandOutput}
 * @see {@link ListInvestigationsCommandInput} for command's `input` shape.
 * @see {@link ListInvestigationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An access denied exception object.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class ListInvestigationsCommand extends command<ListInvestigationsCommandInput, ListInvestigationsCommandOutput>(
  _ep0,
  _mw0,
  "ListInvestigations",
  ListInvestigations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvestigationsRequest;
      output: ListInvestigationsResponse;
    };
    sdk: {
      input: ListInvestigationsCommandInput;
      output: ListInvestigationsCommandOutput;
    };
  };
}
