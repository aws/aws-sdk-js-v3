// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInvestigationRequest, GetInvestigationResponse } from "../models/models_1";
import { GetInvestigation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandInput extends GetInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandOutput extends GetInvestigationResponse, __MetadataBearer {}

/**
 * <p>This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).</p> <p>Retrieves the results and status of a specific GuardDuty investigation.</p> <p>GuardDuty returns the results, including the summary and the scope of the investigation, only when the investigation status is <code>COMPLETED</code>. By default, GuardDuty returns the summary as text in <code>Summary</code>. To return a typed summary in <code>SummaryData</code> instead, set <code>SummaryFormat</code> to <code>STRUCTURED</code>.</p> <p>An administrator account can retrieve any investigation within the organization. Member accounts can only retrieve investigations that belong to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetInvestigationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetInvestigationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetInvestigationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 *   SummaryFormat: "STRING" || "STRUCTURED",
 * };
 * const command = new GetInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvestigationResponse
 * //   Investigation: { // Investigation
 * //     InvestigationId: "STRING_VALUE", // required
 * //     Status: "RUNNING" || "COMPLETED" || "FAILED", // required
 * //     TriggerPrompt: "STRING_VALUE", // required
 * //     TriggeredBy: "STRING_VALUE", // required
 * //     Metadata: { // InvestigationMetadata
 * //       Version: "STRING_VALUE", // required
 * //       Product: { // Product
 * //         Name: "STRING_VALUE", // required
 * //         Feature: "STRING_VALUE",
 * //       },
 * //     },
 * //     Cloud: { // CloudDetails
 * //       Provider: "AWS", // required
 * //       Region: "STRING_VALUE", // required
 * //       Account: "STRING_VALUE", // required
 * //     },
 * //     RiskLevel: "Info" || "Low" || "Medium" || "High" || "Critical",
 * //     Risk: "STRING_VALUE",
 * //     Confidence: "Unknown" || "Low" || "Medium" || "High",
 * //     Summary: "STRING_VALUE",
 * //     SummaryData: { // InvestigationSummaryData
 * //       FindingType: "STRING_VALUE",
 * //       ThreatAssessment: { // ThreatAssessment
 * //         AttackProgression: [ // AttackPhases
 * //           { // AttackPhase
 * //             Phase: "Reconnaissance" || "Resource Development" || "Initial Access" || "Execution" || "Persistence" || "Privilege Escalation" || "Defense Evasion" || "Credential Access" || "Discovery" || "Lateral Movement" || "Collection" || "Command and Control" || "Exfiltration" || "Impact",
 * //             Description: "STRING_VALUE",
 * //             Attacks: [ // Attacks
 * //               { // Attack
 * //                 Tactic: { // ThreatReference
 * //                   Name: "STRING_VALUE",
 * //                   Uid: "STRING_VALUE",
 * //                 },
 * //                 Technique: {
 * //                   Name: "STRING_VALUE",
 * //                   Uid: "STRING_VALUE",
 * //                 },
 * //                 Findings: [ // FindingReferences
 * //                   { // FindingReference
 * //                     FindingType: "STRING_VALUE",
 * //                     Uid: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 Version: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         ThreatActorProfile: "STRING_VALUE",
 * //       },
 * //       Countermeasures: [ // Countermeasures
 * //         { // Countermeasure
 * //           DefenseTactic: "Isolate" || "Evict" || "Restore" || "Harden" || "Detect",
 * //           Actions: [ // CountermeasureActions
 * //             { // CountermeasureAction
 * //               Title: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               Priority: "IMMEDIATE" || "SHORT_TERM" || "STRATEGIC",
 * //               DefenseTechnique: "STRING_VALUE",
 * //               Mitigates: [ // MitreTechniqueIds
 * //                 "STRING_VALUE",
 * //               ],
 * //               CliCommands: [ // CliCommands
 * //                 "STRING_VALUE",
 * //               ],
 * //               DispositionId: Number("int"),
 * //               Disposition: "Isolated" || "Blocked" || "Deleted" || "Access Revoked" || "Logged",
 * //               AffectedResources: [ // RemediationAffectedResources
 * //                 { // AffectedResource
 * //                   Identifier: "STRING_VALUE",
 * //                   Type: "EC2_INSTANCE" || "EBS_VOLUME" || "S3_BUCKET" || "IAM_ROLE" || "IAM_USER" || "IAM_ACCESS_KEY" || "LAMBDA_FUNCTION" || "EKS_CLUSTER" || "ECS_CLUSTER" || "KUBERNETES_WORKLOAD" || "RDS_INSTANCE" || "RDS_DB_USER" || "EC2_SECURITY_GROUP",
 * //                   Arn: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AccountAnalysis: { // AccountAnalysis
 * //         FindingsSummary: { // FindingsSummary
 * //           TotalFindings: Number("int"),
 * //           SeverityBreakdown: { // SeverityBreakdown
 * //             Critical: Number("int"),
 * //             High: Number("int"),
 * //             Medium: Number("int"),
 * //             Low: Number("int"),
 * //             Info: Number("int"),
 * //           },
 * //           TopFindingTypes: [ // FindingTypeCounts
 * //             { // FindingTypeCount
 * //               FindingType: "STRING_VALUE",
 * //               Count: Number("int"),
 * //             },
 * //           ],
 * //           ByTimeWindow: [ // TimeWindowGroups
 * //             { // TimeWindowGroup
 * //               StartTime: new Date("TIMESTAMP"),
 * //               EndTime: new Date("TIMESTAMP"),
 * //               FindingCount: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         TacticCoverage: [ // TacticCoverages
 * //           { // TacticCoverage
 * //             Phase: "Reconnaissance" || "Resource Development" || "Initial Access" || "Execution" || "Persistence" || "Privilege Escalation" || "Defense Evasion" || "Credential Access" || "Discovery" || "Lateral Movement" || "Collection" || "Command and Control" || "Exfiltration" || "Impact",
 * //             FindingCount: Number("int"),
 * //             FindingTypes: [ // FindingTypeNames
 * //               "STRING_VALUE",
 * //             ],
 * //             Techniques: [ // TechniqueCoverages
 * //               { // TechniqueCoverage
 * //                 Technique: {
 * //                   Name: "STRING_VALUE",
 * //                   Uid: "STRING_VALUE",
 * //                 },
 * //                 FindingCount: Number("int"),
 * //                 FindingTypes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         AffectedResources: [ // AccountAffectedResources
 * //           { // AccountAffectedResource
 * //             Identifier: "STRING_VALUE",
 * //             Type: "EC2_INSTANCE" || "EBS_VOLUME" || "S3_BUCKET" || "IAM_ROLE" || "IAM_USER" || "IAM_ACCESS_KEY" || "LAMBDA_FUNCTION" || "EKS_CLUSTER" || "ECS_CLUSTER" || "KUBERNETES_WORKLOAD" || "RDS_INSTANCE" || "RDS_DB_USER" || "EC2_SECURITY_GROUP",
 * //             FindingCount: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       OrganizationAnalysis: { // OrganizationAnalysis
 * //         FindingsSummary: { // OrganizationFindingsSummary
 * //           TotalFindings: Number("int"),
 * //           SeverityBreakdown: {
 * //             Critical: Number("int"),
 * //             High: Number("int"),
 * //             Medium: Number("int"),
 * //             Low: Number("int"),
 * //             Info: Number("int"),
 * //           },
 * //           TopFindingTypes: [
 * //             {
 * //               FindingType: "STRING_VALUE",
 * //               Count: Number("int"),
 * //             },
 * //           ],
 * //           ByTimeWindow: [
 * //             {
 * //               StartTime: new Date("TIMESTAMP"),
 * //               EndTime: new Date("TIMESTAMP"),
 * //               FindingCount: Number("int"),
 * //             },
 * //           ],
 * //           TotalAccountCount: Number("int"),
 * //           AffectedAccountCount: Number("int"),
 * //         },
 * //         AccountBreakdown: [ // AccountSummaries
 * //           { // AccountSummary
 * //             AccountId: "STRING_VALUE",
 * //             FindingCount: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       KeyObservations: { // KeyObservations
 * //         Title: "STRING_VALUE",
 * //         Narrative: "STRING_VALUE",
 * //         Observations: [ // InvestigationObservations
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Recommendations: [ // Recommendations
 * //         { // Recommendation
 * //           Title: "STRING_VALUE",
 * //           Rationale: "STRING_VALUE",
 * //           Category: "ENABLE_PROTECTION" || "FURTHER_INVESTIGATION" || "SUPPRESSION_RULE" || "HARDENING" || "MONITORING",
 * //           Priority: "IMMEDIATE" || "SHORT_TERM" || "STRATEGIC",
 * //           CliCommands: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     Scope: { // InvestigationScope
 * //       InvestigationType: "FINDING" || "ACCOUNT" || "ORGANIZATION",
 * //       FindingId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       AdminAccountId: "STRING_VALUE",
 * //       QueryTimeWindow: { // QueryTimeWindow
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Error: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInvestigationCommandInput - {@link GetInvestigationCommandInput}
 * @returns {@link GetInvestigationCommandOutput}
 * @see {@link GetInvestigationCommandInput} for command's `input` shape.
 * @see {@link GetInvestigationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class GetInvestigationCommand extends command<GetInvestigationCommandInput, GetInvestigationCommandOutput>(
  _ep0,
  _mw0,
  "GetInvestigation",
  GetInvestigation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvestigationRequest;
      output: GetInvestigationResponse;
    };
    sdk: {
      input: GetInvestigationCommandInput;
      output: GetInvestigationCommandOutput;
    };
  };
}
