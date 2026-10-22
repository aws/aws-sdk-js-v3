// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCodeIssueArtifactInput, GetCodeIssueArtifactOutput } from "../models/models_0";
import { GetCodeIssueArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCodeIssueArtifactCommand}.
 */
export interface GetCodeIssueArtifactCommandInput extends GetCodeIssueArtifactInput {}
/**
 * @public
 *
 * The output of {@link GetCodeIssueArtifactCommand}.
 */
export interface GetCodeIssueArtifactCommandOutput extends GetCodeIssueArtifactOutput, __MetadataBearer {}

/**
 * Retrieves one immutable artifact attached to an issue, including its content.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetCodeIssueArtifactCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetCodeIssueArtifactCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetCodeIssueArtifactInput
 *   environmentId: "STRING_VALUE", // required
 *   issueId: "STRING_VALUE", // required
 *   artifactId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeIssueArtifactCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeIssueArtifactOutput
 * //   artifactId: "STRING_VALUE", // required
 * //   artifactType: "EVIDENCE" || "AGENT_COMMUNICATION" || "VALIDATION_EVIDENCE" || "REMEDIATION_PROPOSAL" || "DECISION" || "PATCH", // required
 * //   mediaType: "STRING_VALUE", // required
 * //   body: { // IssueArtifactBody Union: only one key present
 * //     validationEvidence: { // ValidationEvidenceBody
 * //       exploitable: "EXPLOITABLE" || "NOT_EXPLOITABLE" || "UNCERTAIN", // required
 * //       terminalStatus: "COMPLETED" || "FAILED" || "NO_SOURCE_AVAILABLE" || "PARTIAL",
 * //       flowVerdicts: [ // FlowVerdicts
 * //         { // FlowVerdict
 * //           flowId: "STRING_VALUE", // required
 * //           verdict: "CONFIRMED" || "DENIED" || "INCONCLUSIVE", // required
 * //           confidence: Number("double"),
 * //           evidence: [ // ArtifactCitations
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       attackFlowsConfirmed: [ // AttackFlowIds
 * //         "STRING_VALUE",
 * //       ],
 * //       exploitArtifact: { // ValidationExploitArtifact
 * //         payload: "STRING_VALUE", // required
 * //         targetUrl: "STRING_VALUE", // required
 * //         httpMethod: "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "DELETE" || "OPTIONS", // required
 * //         headers: { // ArtifactHeaders
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         responseStatus: Number("int"),
 * //         responseSnippet: "STRING_VALUE",
 * //         effect: "DATA_LEAKED" || "ERROR_REVEALED" || "BEHAVIOR_CHANGED" || "NO_EFFECT", // required
 * //       },
 * //       executedProof: { // ValidationExecutedProof
 * //         code: { // ValidationProofCode
 * //           proofCode: [ // ValidationProofMaterials // required
 * //             { // ValidationProofMaterial
 * //               content: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         output: { // ValidationProofOutput
 * //           consoleOutput: "STRING_VALUE", // required
 * //         },
 * //         observedEffect: "DATA_LEAKED" || "ERROR_REVEALED" || "BEHAVIOR_CHANGED" || "NO_EFFECT",
 * //       },
 * //       sourceAnalysis: { // ValidationSourceAnalysis
 * //         summary: "STRING_VALUE", // required
 * //         inferredEffect: "DATA_LEAKED" || "ERROR_REVEALED" || "BEHAVIOR_CHANGED" || "NO_EFFECT",
 * //       },
 * //       perFindingResults: [ // PerFindingResults
 * //         { // PerFindingResult
 * //           findingId: "STRING_VALUE", // required
 * //           exploitable: "EXPLOITABLE" || "NOT_EXPLOITABLE" || "UNCERTAIN", // required
 * //           confidence: Number("double"),
 * //           flowVerdicts: [
 * //             {
 * //               flowId: "STRING_VALUE", // required
 * //               verdict: "CONFIRMED" || "DENIED" || "INCONCLUSIVE", // required
 * //               confidence: Number("double"),
 * //               evidence: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           reasoningChain: [ // ReasoningSteps
 * //             { // ReasoningStep
 * //               step: Number("int"), // required
 * //               claim: "STRING_VALUE", // required
 * //               source: "STRING_VALUE", // required
 * //               confidence: Number("double"),
 * //             },
 * //           ],
 * //           exploitArtifact: {
 * //             payload: "STRING_VALUE", // required
 * //             targetUrl: "STRING_VALUE", // required
 * //             httpMethod: "GET" || "HEAD" || "POST" || "PUT" || "PATCH" || "DELETE" || "OPTIONS", // required
 * //             headers: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             responseStatus: Number("int"),
 * //             responseSnippet: "STRING_VALUE",
 * //             effect: "DATA_LEAKED" || "ERROR_REVEALED" || "BEHAVIOR_CHANGED" || "NO_EFFECT", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     prevalidationSignals: { // PrevalidationSignalsBody
 * //       producedBy: "STRING_VALUE",
 * //       signals: [ // PrevalidationSignals
 * //         { // PrevalidationSignal
 * //           subjectRef: "STRING_VALUE",
 * //           dimension: "EXPLOITABILITY" || "BLAST_RADIUS" || "NETWORK_EXPOSURE" || "PRECONDITION" || "CODE_CONTEXT" || "LIKELIHOOD_ASSESSMENT" || "IMPACT_ASSESSMENT",
 * //           signalStrength: "NONE" || "WEAK" || "MODERATE" || "STRONG",
 * //           conclusion: "STRING_VALUE",
 * //           producerId: "STRING_VALUE",
 * //           producerVersion: "STRING_VALUE",
 * //           confidence: Number("double"),
 * //           confidenceReasoning: { // SignalConfidenceReasoning
 * //             summary: "STRING_VALUE", // required
 * //             factors: "<ArtifactCitations>",
 * //           },
 * //           computed: { // SignalComputation
 * //             likelihoodBand: "VERY_LOW" || "LOW" || "MODERATE" || "HIGH",
 * //             impactBand: "VERY_LOW" || "LOW" || "MODERATE" || "HIGH",
 * //             barriers: Number("int"),
 * //           },
 * //           preconditions: { // SignalPreconditions
 * //             reachableFromAttacker: { // SignalPrecondition
 * //               value: true || false,
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //             configurationNeeded: {
 * //               value: true || false,
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //             accessLevel: { // SignalAccessPrecondition
 * //               value: "NONE" || "ANY_AUTHENTICATED" || "PRIVILEGED",
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //             userInteractionRequired: {
 * //               value: true || false,
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //           },
 * //           impactDimensions: { // SignalImpactDimensions
 * //             attackerGains: { // SignalAttackerGainsDimension
 * //               value: "EXECUTE" || "MODIFY_PRIVILEGED" || "MODIFY_DATA" || "MODIFY_COSMETIC" || "READ" || "NEITHER",
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //             blastRadius: { // SignalBlastRadiusDimension
 * //               value: "CROSS_TENANT" || "OTHER_USERS_IN_TENANT" || "OWN_SCOPE",
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //             targetValue: { // SignalTargetValueDimension
 * //               value: "HIGH" || "MEDIUM" || "LOW",
 * //               basis: "CODE" || "GRAPH" || "FINDING" || "INFERRED" || "NO_EVIDENCE_DEFAULT",
 * //               reason: "STRING_VALUE",
 * //               missingInfo: "STRING_VALUE",
 * //             },
 * //           },
 * //           exploitability: { // SignalExploitability
 * //             verdict: "EXPLOITABLE" || "NOT_EXPLOITABLE" || "UNCERTAIN",
 * //             reachedCrownJewels: true || false,
 * //             highestLayerReached: Number("int"),
 * //             confidenceTier: "SOURCE_READ" || "STATIC_PROVEN" || "BUILD_PROVEN" || "RUNTIME_PROVEN",
 * //             scriptable: true || false,
 * //             sourceValidationArtifactId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     remediationProposal: { // RemediationProposalBody
 * //       patch: "STRING_VALUE", // required
 * //       format: "GIT_MAILBOX_PATCH" || "GIT_BINARY_DIFF" || "GIT_DIFF",
 * //       filename: "STRING_VALUE",
 * //       patchSha256: "STRING_VALUE",
 * //     },
 * //     patch: { // PatchBody
 * //       patch: "STRING_VALUE", // required
 * //       format: "GIT_MAILBOX_PATCH" || "GIT_BINARY_DIFF" || "GIT_DIFF",
 * //       repositoryName: "STRING_VALUE",
 * //       patchSha256: "STRING_VALUE", // required
 * //       sizeBytes: Number("long"), // required
 * //       delivery: { // PatchDelivery
 * //         status: "PENDING" || "SUCCEEDED" || "FAILED" || "SKIPPED" || "ABANDONED", // required
 * //         target: { // DestinationTarget Union: only one key present
 * //           s3: { // S3Target
 * //             bucket: "STRING_VALUE", // required
 * //             key: "STRING_VALUE", // required
 * //             version: "STRING_VALUE",
 * //           },
 * //           github: { // GitHubTarget
 * //             owner: "STRING_VALUE", // required
 * //             repository: "STRING_VALUE", // required
 * //             pullRequestNumber: Number("long"),
 * //             headSha: "STRING_VALUE",
 * //           },
 * //         },
 * //         updatedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     raw: "STRING_VALUE",
 * //   },
 * //   metadata: "DOCUMENT_VALUE",
 * //   producer: { // IssueArtifactProducerSummary
 * //     agent: "STRING_VALUE", // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetCodeIssueArtifactCommandInput - {@link GetCodeIssueArtifactCommandInput}
 * @returns {@link GetCodeIssueArtifactCommandOutput}
 * @see {@link GetCodeIssueArtifactCommandInput} for command's `input` shape.
 * @see {@link GetCodeIssueArtifactCommandOutput} for command's `response` shape.
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
export class GetCodeIssueArtifactCommand extends command<GetCodeIssueArtifactCommandInput, GetCodeIssueArtifactCommandOutput>(
  _ep0,
  _mw0,
  "GetCodeIssueArtifact",
  GetCodeIssueArtifact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeIssueArtifactInput;
      output: GetCodeIssueArtifactOutput;
    };
    sdk: {
      input: GetCodeIssueArtifactCommandInput;
      output: GetCodeIssueArtifactCommandOutput;
    };
  };
}
