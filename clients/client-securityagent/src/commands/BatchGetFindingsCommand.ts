// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetFindingsInput, BatchGetFindingsOutput } from "../models/models_0";
import { BatchGetFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * //       codeReviewId: "STRING_VALUE",
 * //       codeReviewJobId: "STRING_VALUE",
 * //       taskId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 * //       riskType: "STRING_VALUE",
 * //       riskLevel: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       riskScore: "STRING_VALUE",
 * //       reasoning: "STRING_VALUE",
 * //       confidence: "FALSE_POSITIVE" || "UNCONFIRMED" || "LOW" || "MEDIUM" || "HIGH",
 * //       validationStatus: "CONFIRMED" || "NOT_REPRODUCED" || "VALIDATION_FAILED" || "VALIDATING" || "NOT_VALIDATED",
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
 * //       customerNote: "STRING_VALUE",
 * //       codeLocations: [ // CodeLocationList
 * //         { // CodeLocation
 * //           filePath: "STRING_VALUE", // required
 * //           lineStart: Number("int"),
 * //           lineEnd: Number("int"),
 * //           label: "STRING_VALUE",
 * //         },
 * //       ],
 * //       verificationScript: { // VerificationScript
 * //         scriptType: "STRING_VALUE",
 * //         scriptUrl: "STRING_VALUE",
 * //         instructions: "STRING_VALUE",
 * //         envVars: [ // VerificationScriptEnvVarList
 * //           { // VerificationScriptEnvVar
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       alignmentRationale: "STRING_VALUE",
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
export class BatchGetFindingsCommand extends command<BatchGetFindingsCommandInput, BatchGetFindingsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetFindings",
  BatchGetFindings$
) {
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
