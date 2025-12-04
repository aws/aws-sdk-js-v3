// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInvestigationsRequest, ListInvestigationsResponse } from "../models/models_0";
import { ListInvestigations } from "../schemas/schemas_0";
import type { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Investigation performed by an agent for a security incident...</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, ListInvestigationsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, ListInvestigationsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // ListInvestigationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new ListInvestigationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvestigationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   investigationActions: [ // InvestigationActionList // required
 * //     { // InvestigationAction
 * //       investigationId: "STRING_VALUE", // required
 * //       actionType: "Evidence" || "Investigation" || "Summarization", // required
 * //       title: "STRING_VALUE", // required
 * //       content: "STRING_VALUE", // required
 * //       status: "Pending" || "InProgress" || "Waiting" || "Completed" || "Failed" || "Cancelled", // required
 * //       lastUpdated: new Date("TIMESTAMP"), // required
 * //       feedback: { // InvestigationFeedback
 * //         usefulness: "USEFUL" || "NOT_USEFUL",
 * //         comment: "STRING_VALUE",
 * //         submittedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListInvestigationsCommandInput - {@link ListInvestigationsCommandInput}
 * @returns {@link ListInvestigationsCommandOutput}
 * @see {@link ListInvestigationsCommandInput} for command's `input` shape.
 * @see {@link ListInvestigationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Invoke ListInvestigations with feedback examples
 * ```javascript
 * //
 * const input = {
 *   caseId: "8403556009",
 *   maxResults: 10
 * };
 * const command = new ListInvestigationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   investigationActions: [
 *     {
 *       actionType: "Evidence",
 *       content: "## Evidence Collection Results
 *
 * Analyzed CloudTrail logs from 2024-01-15 to 2024-01-16 and found:
 *
 * - 15 failed login attempts from IP 192.168.1.100
 * - Unusual API calls to S3 buckets
 * - Privilege escalation attempts detected
 *
 * ### Recommendations
 *
 * 1. Block the suspicious IP address
 * 2. Review S3 bucket permissions
 * 3. Audit user privileges",
 *       feedback: {
 *         comment: "The CloudTrail analysis was very helpful in identifying the root cause of the security incident. The recommendations were actionable and led to immediate remediation.",
 *         submittedAt: "2024-01-16T11:15:00Z",
 *         usefulness: "USEFUL"
 *       },
 *       investigationId: "inv-hgyuiuytrt",
 *       lastUpdated: "2024-01-16T10:30:00Z",
 *       status: "Completed",
 *       title: "Collected CloudTrail logs for suspicious activity"
 *     }
 *   ],
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5Ijp7InBhcnRpdGlvbktleSI6eyJTIjoiQ0FTRV8xMjM0NTY3ODkwIn0sInNvcnRLZXkiOnsiUyI6IjIwMjQtMDEtMTZUMTA6MzA6MDBaIn19fQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListInvestigationsCommand extends $Command
  .classBuilder<
    ListInvestigationsCommandInput,
    ListInvestigationsCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "ListInvestigations", {})
  .n("SecurityIRClient", "ListInvestigationsCommand")
  .sc(ListInvestigations)
  .build() {
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
