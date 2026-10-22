// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCodeFindingInput, GetCodeFindingOutput } from "../models/models_0";
import { GetCodeFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCodeFindingCommand}.
 */
export interface GetCodeFindingCommandInput extends GetCodeFindingInput {}
/**
 * @public
 *
 * The output of {@link GetCodeFindingCommand}.
 */
export interface GetCodeFindingCommandOutput extends GetCodeFindingOutput, __MetadataBearer {}

/**
 * Retrieves the current state and details of a finding.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetCodeFindingCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetCodeFindingCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetCodeFindingInput
 *   environmentId: "STRING_VALUE", // required
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeFindingCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeFindingOutput
 * //   type: "CONTINUUM_CODE_VULN" || "CUSTOMER_CODE_VULN", // required
 * //   title: "STRING_VALUE", // required
 * //   severity: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL" || "FATAL" || "OTHER", // required
 * //   summary: "STRING_VALUE",
 * //   detailedDescription: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * //   subCategory: "STRING_VALUE",
 * //   cweIds: [ // CweIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   owaspCategory: "STRING_VALUE",
 * //   mitigation: "STRING_VALUE",
 * //   filePath: "STRING_VALUE",
 * //   lineNumber: Number("int"),
 * //   cveId: "STRING_VALUE",
 * //   cvssBaseScore: Number("double"),
 * //   affectedPackages: [ // AffectedPackageList
 * //     { // AffectedPackage
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE",
 * //       fixedInVersion: "STRING_VALUE",
 * //       packageManager: "STRING_VALUE",
 * //     },
 * //   ],
 * //   vulnerableCode: "STRING_VALUE",
 * //   relevantInputs: [ // FindingStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   stepsToReproduce: [
 * //     "STRING_VALUE",
 * //   ],
 * //   validation: { // FindingValidation
 * //     verdict: "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_TRUE_POSITIVE" || "NEEDS_REVIEW", // required
 * //     blockingReason: "UNREACHABLE" || "PROTECTED" || "MISCLASSIFIED" || "EXCLUDED" || "NOT_FEASIBLE" || "RISK_MITIGATED" || "NONE",
 * //     confidence: Number("double"),
 * //     rationale: "STRING_VALUE",
 * //     severityAdjustment: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNCHANGED",
 * //     mitigatingControls: [
 * //       "STRING_VALUE",
 * //     ],
 * //     preconditions: [
 * //       "STRING_VALUE",
 * //     ],
 * //     evidence: [ // FindingEvidenceList
 * //       { // FindingEvidence
 * //         file: "STRING_VALUE",
 * //         line: Number("int"),
 * //         snippet: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   endLine: Number("int"),
 * //   mitreTechniques: [
 * //     "STRING_VALUE",
 * //   ],
 * //   remediationReferences: "<FindingStringList>",
 * //   ocsfClass: "VULNERABILITY_FINDING" || "APPLICATION_SECURITY_POSTURE_FINDING",
 * //   ocsfSchemaVersion: "STRING_VALUE",
 * //   productName: "STRING_VALUE",
 * //   productVendorName: "STRING_VALUE",
 * //   productVersion: "STRING_VALUE",
 * //   sourceStatus: "STRING_VALUE",
 * //   sourceStatusId: Number("int"),
 * //   firstSeenAt: new Date("TIMESTAMP"),
 * //   findingTypes: "<FindingStringList>",
 * //   vulnerabilities: [ // FindingVulnerabilityList
 * //     { // FindingVulnerability
 * //       title: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       cweId: "STRING_VALUE",
 * //       cweCaption: "STRING_VALUE",
 * //       additionalCweIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       cveId: "STRING_VALUE",
 * //       cvssBaseScore: Number("double"),
 * //       fixCoverage: "STRING_VALUE",
 * //       fixCoverageId: Number("int"),
 * //       locations: [ // FindingLocationList
 * //         { // FindingLocation
 * //           filePath: "STRING_VALUE",
 * //           startLine: Number("int"),
 * //           endLine: Number("int"),
 * //         },
 * //       ],
 * //       remediation: "STRING_VALUE",
 * //       remediationReferences: "<FindingStringList>",
 * //       code: "STRING_VALUE",
 * //       details: "STRING_VALUE",
 * //       affectedPackages: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE",
 * //           fixedInVersion: "STRING_VALUE",
 * //           packageManager: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   resources: [ // FindingResourceList
 * //     { // FindingResource
 * //       uid: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //   ],
 * //   posture: { // FindingPosture
 * //     application: "STRING_VALUE",
 * //     applicationUid: "STRING_VALUE",
 * //     applicationVersion: "STRING_VALUE",
 * //     control: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     standards: "<FindingStringList>",
 * //     requirements: "<FindingStringList>",
 * //     checks: [ // FindingComplianceCheckList
 * //       { // FindingComplianceCheck
 * //         uid: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     status: "STRING_VALUE",
 * //     statusId: Number("int"),
 * //     remediation: "STRING_VALUE",
 * //     remediationReferences: "<FindingStringList>",
 * //   },
 * //   findingId: "STRING_VALUE", // required
 * //   findingArn: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   source: "STRING_VALUE", // required
 * //   sourceFindingId: "STRING_VALUE", // required
 * //   reportedAt: new Date("TIMESTAMP"), // required
 * //   status: "SUBMITTED" || "VALIDATING" || "CONFIRMED" || "DISCARDED", // required
 * //   statusUpdatedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   scanRunId: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   discardReason: "SCANNER_VALIDATED_FALSE_POSITIVE" || "SCANNER_NEEDS_REVIEW" || "FALSE_POSITIVE_VALIDATED_AGAINST_CONTEXT" || "DUPLICATE_OF_OPEN_ISSUE" || "DUPLICATE_OF_CLOSED_ISSUE" || "COMPENSATING_CONTROL_PRESENT" || "OUT_OF_SCOPE" || "INSUFFICIENT_EVIDENCE" || "PROCESSING_FAILED" || "SOURCE_REPO_NOT_FOUND",
 * //   discardReasoning: "STRING_VALUE",
 * //   duplicateOfIssueId: "STRING_VALUE",
 * //   createdIssueId: "STRING_VALUE",
 * //   completedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCodeFindingCommandInput - {@link GetCodeFindingCommandInput}
 * @returns {@link GetCodeFindingCommandOutput}
 * @see {@link GetCodeFindingCommandInput} for command's `input` shape.
 * @see {@link GetCodeFindingCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class GetCodeFindingCommand extends command<GetCodeFindingCommandInput, GetCodeFindingCommandOutput>(
  _ep0,
  _mw0,
  "GetCodeFinding",
  GetCodeFinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeFindingInput;
      output: GetCodeFindingOutput;
    };
    sdk: {
      input: GetCodeFindingCommandInput;
      output: GetCodeFindingCommandOutput;
    };
  };
}
