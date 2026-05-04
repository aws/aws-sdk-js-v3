// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetFindingsInput, BatchGetFindingsOutput } from "../models/models_0";
import { BatchGetFindings$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFindingsCommand}.
 */
export interface BatchGetFindingsCommandInput extends BatchGetFindingsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetFindingsCommand}.
 */
export interface BatchGetFindingsCommandOutput extends BatchGetFindingsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more security findings in an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetFindingsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetFindingsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetFindingsInput
 *   findingIds: [ // FindingIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchGetFindingsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFindingsOutput
 * //   findings: [ // FindingList
 * //     { // Finding
 * //       findingId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       pentestId: "STRING_VALUE",
 * //       pentestJobId: "STRING_VALUE",
 * //       taskId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 * //       riskType: "STRING_VALUE",
 * //       riskLevel: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       riskScore: "STRING_VALUE",
 * //       reasoning: "STRING_VALUE",
 * //       confidence: "FALSE_POSITIVE" || "UNCONFIRMED" || "LOW" || "MEDIUM" || "HIGH",
 * //       attackScript: "STRING_VALUE",
 * //       codeRemediationTask: { // CodeRemediationTask
 * //         status: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //         statusReason: "STRING_VALUE",
 * //         taskDetails: [ // CodeRemediationTaskDetailsList
 * //           { // CodeRemediationTaskDetails
 * //             repoName: "STRING_VALUE",
 * //             codeDiffLink: "STRING_VALUE",
 * //             pullRequestLink: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       lastUpdatedBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // FindingIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFindingsCommandInput - {@link BatchGetFindingsCommandInput}
 * @returns {@link BatchGetFindingsCommandOutput}
 * @see {@link BatchGetFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchGetFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetFindingsCommand extends $Command
  .classBuilder<
    BatchGetFindingsCommandInput,
    BatchGetFindingsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetFindings", {})
  .n("SecurityAgentClient", "BatchGetFindingsCommand")
  .sc(BatchGetFindings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFindingsInput;
      output: BatchGetFindingsOutput;
    };
    sdk: {
      input: BatchGetFindingsCommandInput;
      output: BatchGetFindingsCommandOutput;
    };
  };
}
