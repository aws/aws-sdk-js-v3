// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFindingsInput, ListFindingsOutput } from "../models/models_0";
import { ListFindings$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandInput extends ListFindingsInput {}
/**
 * @public
 *
 * The output of {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandOutput extends ListFindingsOutput, __MetadataBearer {}

/**
 * <p>Lists the security findings for a pentest job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListFindingsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListFindingsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListFindingsInput
 *   maxResults: Number("int"),
 *   pentestJobId: "STRING_VALUE",
 *   codeReviewJobId: "STRING_VALUE",
 *   agentSpaceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   riskType: "STRING_VALUE",
 *   riskLevel: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *   status: "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 *   confidence: "FALSE_POSITIVE" || "UNCONFIRMED" || "LOW" || "MEDIUM" || "HIGH",
 *   name: "STRING_VALUE",
 * };
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsOutput
 * //   findingsSummaries: [ // FindingSummaryList
 * //     { // FindingSummary
 * //       findingId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       pentestId: "STRING_VALUE",
 * //       pentestJobId: "STRING_VALUE",
 * //       codeReviewId: "STRING_VALUE",
 * //       codeReviewJobId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 * //       riskType: "STRING_VALUE",
 * //       riskLevel: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       confidence: "FALSE_POSITIVE" || "UNCONFIRMED" || "LOW" || "MEDIUM" || "HIGH",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsCommandInput - {@link ListFindingsCommandInput}
 * @returns {@link ListFindingsCommandOutput}
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListFindingsCommand extends $Command
  .classBuilder<
    ListFindingsCommandInput,
    ListFindingsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListFindings", {})
  .n("SecurityAgentClient", "ListFindingsCommand")
  .sc(ListFindings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFindingsInput;
      output: ListFindingsOutput;
    };
    sdk: {
      input: ListFindingsCommandInput;
      output: ListFindingsCommandOutput;
    };
  };
}
