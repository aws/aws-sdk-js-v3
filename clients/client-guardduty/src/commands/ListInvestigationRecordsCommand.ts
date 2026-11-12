// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInvestigationRecordsRequest, ListInvestigationRecordsResponse } from "../models/models_1";
import { ListInvestigationRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInvestigationRecordsCommand}.
 */
export interface ListInvestigationRecordsCommandInput extends ListInvestigationRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvestigationRecordsCommand}.
 */
export interface ListInvestigationRecordsCommandOutput extends ListInvestigationRecordsResponse, __MetadataBearer {}

/**
 * <p>This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).</p> <p>Returns the records for a specific GuardDuty investigation. Each record is one step in the reasoning that GuardDuty followed to reach the results of the investigation.</p> <p>An administrator account can list the records of any investigation within the organization. Member accounts can only list the records of investigations that belong to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListInvestigationRecordsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListInvestigationRecordsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListInvestigationRecordsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 *   RecordTypes: [ // RecordTypes
 *     "OBSERVATION" || "ANALYSIS" || "UPDATE" || "FETCH" || "METADATA",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInvestigationRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvestigationRecordsResponse
 * //   InvestigationId: "STRING_VALUE", // required
 * //   Status: "RUNNING" || "COMPLETED" || "FAILED", // required
 * //   Records: [ // Records // required
 * //     { // InvestigationRecord
 * //       RecordId: "STRING_VALUE", // required
 * //       Type: "OBSERVATION" || "ANALYSIS" || "UPDATE" || "FETCH" || "METADATA", // required
 * //       Title: "STRING_VALUE", // required
 * //       Narrative: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       SupportingData: { // SupportingData Union: only one key present
 * //         Fetch: { // FetchRecord
 * //           FetchType: "FINDINGS" || "DETECTOR" || "REPUTATION" || "FINDING_TYPE_DOCUMENTATION" || "CLOUD_TRAIL_RAW_EVENTS" || "RUNTIME_SIGNALS" || "MEMBER_ACCOUNTS", // required
 * //           Query: { // FetchQuery
 * //             Criteria: [ // FetchCriteria
 * //               { // FetchCriterion
 * //                 Field: "STRING_VALUE", // required
 * //                 Condition: "EQUALS" || "NOT_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUAL" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 * //                 Values: [ // FetchFieldValues
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //             TimeWindow: { // FetchTimeWindow
 * //               StartedAt: new Date("TIMESTAMP"),
 * //               DurationInMinutes: Number("int"),
 * //             },
 * //             RowLimit: Number("int"),
 * //             AccountId: "STRING_VALUE",
 * //             Indicator: "STRING_VALUE",
 * //             IndicatorType: "IP" || "DOMAIN" || "FILE",
 * //             FindingType: "STRING_VALUE",
 * //             FindingId: "STRING_VALUE",
 * //           },
 * //           Result: { // FetchResult
 * //             ItemIds: [ // FetchItemIds
 * //               "STRING_VALUE",
 * //             ],
 * //             TotalCount: Number("long"),
 * //             Features: [ // FetchDetectorFeatures
 * //               { // InvestigationDetectorFeatureConfiguration
 * //                 Name: "CLOUD_TRAIL" || "DNS_LOGS" || "FLOW_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "EKS_ADDON_MANAGEMENT" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //                 Status: "ENABLED" || "DISABLED",
 * //                 UpdatedAt: new Date("TIMESTAMP"),
 * //               },
 * //             ],
 * //             Verdict: "THREAT" || "BENIGN" || "NEUTRAL",
 * //             Documentation: { // FindingTypeDocumentation
 * //               Description: "STRING_VALUE",
 * //               Severity: "STRING_VALUE",
 * //               Feature: "STRING_VALUE",
 * //               FullDescription: "STRING_VALUE",
 * //               Remediation: "STRING_VALUE",
 * //               LearnMoreLinks: [ // FetchLearnMoreLinks
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //         Analysis: { // AnalysisRecord
 * //           AnalysisType: "REPUTATION" || "THREAT_ASSESSMENT" || "RDS_THREAT_ASSESSMENT" || "KUBERNETES_POLICY_VIOLATION" || "S3_EXPOSURE" || "S3_ACTOR_CONTEXT" || "S3_PEN_TEST" || "PROCESS_LINEAGE" || "TREND" || "BASELINE", // required
 * //           ThreatAssessment: { // InvestigationThreatAssessment
 * //             Reputation: { // Reputation
 * //               FindingTimeDisposition: "STRING_VALUE",
 * //               CurrentDisposition: "STRING_VALUE",
 * //               ReputationComparison: "STRING_VALUE",
 * //             },
 * //             ThreatConfidence: "VERY_HIGH" || "HIGH" || "MEDIUM" || "LOW",
 * //             Classification: "STRING_VALUE",
 * //             Assessment: "STRING_VALUE",
 * //             AuthenticationContext: "STRING_VALUE",
 * //             RdsControlPlaneActivity: "STRING_VALUE",
 * //             IpAccountActivity: "STRING_VALUE",
 * //             CredentialCompromise: "STRING_VALUE",
 * //           },
 * //           KubernetesPolicyViolation: { // KubernetesPolicyViolation
 * //             ViolationType: "STRING_VALUE",
 * //             AffectedResource: "STRING_VALUE",
 * //             Subject: "STRING_VALUE",
 * //             GrantedAccess: "STRING_VALUE",
 * //             ExposureVector: "STRING_VALUE",
 * //             MisconfigurationImpact: "STRING_VALUE",
 * //           },
 * //           S3Analysis: { // S3Analysis
 * //             FindingSubtype: "STRING_VALUE",
 * //             EffectivePermission: "STRING_VALUE",
 * //             BlockPublicAccessSettings: "STRING_VALUE",
 * //             Exposure: "STRING_VALUE",
 * //             UserAgent: "STRING_VALUE",
 * //             UserAgentClassification: "STRING_VALUE",
 * //             SourceIp: "STRING_VALUE",
 * //             IpReputation: "STRING_VALUE",
 * //             ActorAssessment: "STRING_VALUE",
 * //             S3ApiActivity: "STRING_VALUE",
 * //             SourceContext: "STRING_VALUE",
 * //             AuthorizationAssessment: "STRING_VALUE",
 * //           },
 * //           Processes: [ // Processes
 * //             { // Process
 * //               Uuid: "STRING_VALUE", // required
 * //               Name: "STRING_VALUE",
 * //               Path: "STRING_VALUE",
 * //               ParentUuid: "STRING_VALUE",
 * //               Findings: [ // FindingReferences
 * //                 { // FindingReference
 * //                   FindingType: "STRING_VALUE",
 * //                   Uid: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           AccountAnalysis: { // InvestigationAccountAnalysis
 * //             Trend: { // Trend
 * //               Granularity: "DAY" || "WEEK" || "MONTH",
 * //               StartedAt: new Date("TIMESTAMP"),
 * //               EndedAt: new Date("TIMESTAMP"),
 * //               TotalFindings: Number("long"),
 * //               ByTimeWindow: [ // TimeWindowGroups
 * //                 { // TimeWindowGroup
 * //                   StartTime: new Date("TIMESTAMP"),
 * //                   EndTime: new Date("TIMESTAMP"),
 * //                   FindingCount: Number("int"),
 * //                 },
 * //               ],
 * //             },
 * //             Baseline: { // Baseline
 * //               TotalFindings: Number("long"),
 * //               BaselineFindings: [ // FindingTypeClassifications
 * //                 { // FindingTypeClassification
 * //                   FindingType: "STRING_VALUE",
 * //                   Classification: "STRING_VALUE",
 * //                   Count: Number("long"),
 * //                   Percentage: Number("double"),
 * //                   Description: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               AnomalousFindings: [
 * //                 {
 * //                   FindingType: "STRING_VALUE",
 * //                   Classification: "STRING_VALUE",
 * //                   Count: Number("long"),
 * //                   Percentage: Number("double"),
 * //                   Description: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           Indicators: [ // InvestigationIndicators
 * //             { // InvestigationIndicator
 * //               Value: "STRING_VALUE", // required
 * //               Type: "IP" || "DOMAIN" || "FILE",
 * //             },
 * //           ],
 * //         },
 * //         Observation: { // ObservationRecord
 * //           ObservationType: "FINDING_DETAIL" || "RESOURCE" || "NETWORK_ACTIVITY" || "RDS_LOGIN_ACTIVITY" || "S3_ACTIVITY" || "KUBERNETES_ACTIVITY" || "MALWARE_SCAN" || "RELATED_FINDINGS" || "DETECTION_COVERAGE" || "ACCOUNT_OVERVIEW" || "RECOMMENDATION" || "RUNTIME_SIGNALS" || "DISTRIBUTION" || "REPRESENTATIVE_RESOURCE", // required
 * //           FindingDetail: { // FindingDetail
 * //             FindingId: "STRING_VALUE",
 * //             FindingType: "STRING_VALUE",
 * //             Severity: "STRING_VALUE",
 * //             AccountId: "STRING_VALUE",
 * //             Region: "STRING_VALUE",
 * //             ActivityWindow: { // ActivityWindow
 * //               FirstSeenAt: new Date("TIMESTAMP"),
 * //               LastSeenAt: new Date("TIMESTAMP"),
 * //             },
 * //           },
 * //           Resource: { // InvestigationResource
 * //             Uid: "STRING_VALUE", // required
 * //             Name: "STRING_VALUE",
 * //             ResourceType: "EC2_INSTANCE" || "EBS_VOLUME" || "S3_BUCKET" || "IAM_ROLE" || "IAM_USER" || "IAM_ACCESS_KEY" || "LAMBDA_FUNCTION" || "EKS_CLUSTER" || "ECS_CLUSTER" || "KUBERNETES_WORKLOAD" || "RDS_INSTANCE" || "RDS_DB_USER" || "EC2_SECURITY_GROUP", // required
 * //             Data: { // InvestigationResourceData
 * //               Ec2Instance: { // InvestigationEc2Instance
 * //                 InstanceId: "STRING_VALUE",
 * //                 InstanceType: "STRING_VALUE",
 * //                 InstanceState: "STRING_VALUE",
 * //                 AvailabilityZone: "STRING_VALUE",
 * //                 PrivateIpAddress: "STRING_VALUE",
 * //                 PublicIp: "STRING_VALUE",
 * //                 VpcId: "STRING_VALUE",
 * //                 SubnetId: "STRING_VALUE",
 * //                 ImageId: "STRING_VALUE",
 * //                 LaunchedAt: new Date("TIMESTAMP"),
 * //               },
 * //               LambdaFunction: { // LambdaFunction
 * //                 FunctionName: "STRING_VALUE",
 * //                 FunctionArn: "STRING_VALUE",
 * //                 FunctionVersion: "STRING_VALUE",
 * //                 Role: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //                 RevisionId: "STRING_VALUE",
 * //                 UpdatedAt: new Date("TIMESTAMP"),
 * //                 VpcConfigurationSummary: "STRING_VALUE",
 * //               },
 * //               RdsDbInstance: { // RdsDbInstance
 * //                 DbInstanceIdentifier: "STRING_VALUE",
 * //                 DbClusterIdentifier: "STRING_VALUE",
 * //                 DbInstanceArn: "STRING_VALUE",
 * //                 DbiResourceId: "STRING_VALUE",
 * //                 Engine: "STRING_VALUE",
 * //                 EngineVersion: "STRING_VALUE",
 * //               },
 * //               RdsDbUser: { // RdsDbUser
 * //                 User: "STRING_VALUE",
 * //                 Application: "STRING_VALUE",
 * //                 Database: "STRING_VALUE",
 * //                 AuthMethod: "STRING_VALUE",
 * //                 Ssl: "STRING_VALUE",
 * //               },
 * //               EksCluster: { // InvestigationEksCluster
 * //                 Name: "STRING_VALUE",
 * //                 Arn: "STRING_VALUE",
 * //                 Status: "STRING_VALUE",
 * //                 VpcId: "STRING_VALUE",
 * //               },
 * //               EcsCluster: { // InvestigationEcsCluster
 * //                 Name: "STRING_VALUE",
 * //                 Arn: "STRING_VALUE",
 * //                 Status: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           NetworkActivity: { // NetworkActivity
 * //             Protocol: "STRING_VALUE",
 * //             Direction: "STRING_VALUE",
 * //             Method: "STRING_VALUE",
 * //             Blocked: "STRING_VALUE",
 * //             Platform: "STRING_VALUE",
 * //             Ports: { // NetworkPorts
 * //               TargetPort: "STRING_VALUE",
 * //               RemotePort: "STRING_VALUE",
 * //               ResolverPort: "STRING_VALUE",
 * //               Ports: "STRING_VALUE",
 * //               PortsUsed: "STRING_VALUE",
 * //               PortCount: Number("long"),
 * //             },
 * //             Traffic: { // NetworkTraffic
 * //               BytesSent: Number("long"),
 * //               BytesReceived: Number("long"),
 * //             },
 * //             Anomaly: { // NetworkAnomaly
 * //               BaselineBytes: "STRING_VALUE",
 * //               Deviation: "STRING_VALUE",
 * //               ProfileAgeDays: Number("int"),
 * //               RemoteService: "STRING_VALUE",
 * //               RemoteRegion: "STRING_VALUE",
 * //               Duration: "STRING_VALUE",
 * //               ResetRatio: "STRING_VALUE",
 * //               TargetHostCount: Number("long"),
 * //             },
 * //             Dns: { // DnsContext
 * //               DomainSuffix: "STRING_VALUE",
 * //               OtherDomains: "STRING_VALUE",
 * //               ResolverHistory: "STRING_VALUE",
 * //             },
 * //             Counts: { // NetworkCounts
 * //               RequestCount: Number("long"),
 * //               TotalAttempts: Number("long"),
 * //               SuspiciousAttempts: Number("long"),
 * //               ResetAttempts: Number("long"),
 * //             },
 * //             Enrichment: { // Enrichment
 * //               CountryName: "STRING_VALUE",
 * //               AsnOrg: "STRING_VALUE",
 * //               ThreatListName: "STRING_VALUE",
 * //               ThreatName: "STRING_VALUE",
 * //             },
 * //           },
 * //           RdsLoginActivity: { // RdsLoginActivity
 * //             Outcome: "STRING_VALUE",
 * //             Rate: "STRING_VALUE",
 * //             AnomalyContext: "STRING_VALUE",
 * //             LoginCount: Number("long"),
 * //             ActivityWindow: {
 * //               FirstSeenAt: new Date("TIMESTAMP"),
 * //               LastSeenAt: new Date("TIMESTAMP"),
 * //             },
 * //             Enrichment: {
 * //               CountryName: "STRING_VALUE",
 * //               AsnOrg: "STRING_VALUE",
 * //               ThreatListName: "STRING_VALUE",
 * //               ThreatName: "STRING_VALUE",
 * //             },
 * //           },
 * //           S3Activity: { // S3Activity
 * //             Api: "STRING_VALUE",
 * //             AffectedBucket: "STRING_VALUE",
 * //             OtherS3Activity: "STRING_VALUE",
 * //             NonS3Activity: "STRING_VALUE",
 * //             SessionAssessment: "STRING_VALUE",
 * //             EventCount: Number("long"),
 * //             Actor: { // InvestigationActor
 * //               AccessKeyId: "STRING_VALUE",
 * //               PrincipalId: "STRING_VALUE",
 * //               UserName: "STRING_VALUE",
 * //               UserType: "STRING_VALUE",
 * //               UserAgent: "STRING_VALUE",
 * //             },
 * //             SourceIp: "STRING_VALUE",
 * //             Enrichment: {
 * //               CountryName: "STRING_VALUE",
 * //               AsnOrg: "STRING_VALUE",
 * //               ThreatListName: "STRING_VALUE",
 * //               ThreatName: "STRING_VALUE",
 * //             },
 * //             ActivityWindow: {
 * //               FirstSeenAt: new Date("TIMESTAMP"),
 * //               LastSeenAt: new Date("TIMESTAMP"),
 * //             },
 * //           },
 * //           KubernetesActivity: { // KubernetesActivity
 * //             ApiCall: { // KubernetesApiCall
 * //               ClusterName: "STRING_VALUE",
 * //               Username: "STRING_VALUE",
 * //               UserGroups: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               Verb: "STRING_VALUE",
 * //               ResourceType: "STRING_VALUE",
 * //               ResourceName: "STRING_VALUE",
 * //               Namespace: "STRING_VALUE",
 * //               RequestUri: "STRING_VALUE",
 * //               StatusCode: Number("int"),
 * //               SourceIps: "STRING_VALUE",
 * //               UserAgent: "STRING_VALUE",
 * //               EventCount: Number("long"),
 * //             },
 * //             Anomaly: { // KubernetesAnomaly
 * //               UnusualBehavior: "STRING_VALUE",
 * //               BaselineContext: "STRING_VALUE",
 * //               AnomalyScore: "STRING_VALUE",
 * //               TrainingPeriod: "STRING_VALUE",
 * //             },
 * //             Workload: { // InvestigationKubernetesWorkload
 * //               WorkloadType: "STRING_VALUE",
 * //               WorkloadName: "STRING_VALUE",
 * //               Containers: "STRING_VALUE",
 * //               Volumes: "STRING_VALUE",
 * //               SecurityContext: "STRING_VALUE",
 * //             },
 * //             Enrichment: {
 * //               CountryName: "STRING_VALUE",
 * //               AsnOrg: "STRING_VALUE",
 * //               ThreatListName: "STRING_VALUE",
 * //               ThreatName: "STRING_VALUE",
 * //             },
 * //           },
 * //           MalwareScan: { // InvestigationMalwareScan
 * //             ScanId: "STRING_VALUE",
 * //             ScanType: "BACKUP_INITIATED" || "ON_DEMAND" || "GUARDDUTY_INITIATED",
 * //             ScanCategory: "FULL_SCAN" || "INCREMENTAL_SCAN",
 * //             TriggerFindingId: "STRING_VALUE",
 * //             EngineSources: "STRING_VALUE",
 * //             ScanStartedAt: new Date("TIMESTAMP"),
 * //             ScanCompletedAt: new Date("TIMESTAMP"),
 * //             FilesScanned: Number("long"),
 * //             GigabytesScanned: Number("double"),
 * //             VolumesScanned: Number("long"),
 * //             InfectedFileCount: Number("long"),
 * //             ResourceType: "STRING_VALUE",
 * //             ResourceIdentifier: "STRING_VALUE",
 * //             HighestSeverity: "STRING_VALUE",
 * //             HighestSeverityThreatName: "STRING_VALUE",
 * //             UniqueThreatCount: Number("long"),
 * //             TotalInfectedItems: Number("long"),
 * //             Threats: [ // MalwareThreats
 * //               { // MalwareThreat
 * //                 Name: "STRING_VALUE",
 * //                 Severity: "STRING_VALUE",
 * //                 InfectedFileCount: Number("long"),
 * //                 SampleFiles: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           RelatedFindings: { // RelatedFindings
 * //             Correlated: [ // CorrelatedFindings
 * //               { // CorrelatedFinding
 * //                 FindingType: "STRING_VALUE",
 * //                 Count: Number("long"),
 * //                 SeverityMax: Number("double"),
 * //                 CorrelationReasons: [ // CorrelationReasons
 * //                   "HIGH_SEVERITY" || "SAME_RESOURCE" || "SAME_BEHAVIOR",
 * //                 ],
 * //                 FindingIds: [ // RelatedFindingIds
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 SharedResources: [ // SharedResources
 * //                   { // SharedResource
 * //                     ResourceType: "STRING_VALUE",
 * //                     Identifier: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 SharedBehaviors: [ // SharedBehaviors
 * //                   { // SharedBehavior
 * //                     Path: "STRING_VALUE",
 * //                     Value: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             Observed: [ // ObservedFindingTypes
 * //               { // ObservedFindingType
 * //                 FindingType: "STRING_VALUE",
 * //                 Count: Number("long"),
 * //                 SeverityMax: Number("double"),
 * //                 SharedResources: [
 * //                   {
 * //                     ResourceType: "STRING_VALUE",
 * //                     Identifier: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           DetectionCoverage: { // DetectionCoverage
 * //             ProtectionPlans: [ // ProtectionPlans
 * //               { // ProtectionPlan
 * //                 Name: "CLOUD_TRAIL" || "DNS_LOGS" || "FLOW_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "EKS_ADDON_MANAGEMENT" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //                 Status: "ENABLED" || "DISABLED",
 * //               },
 * //             ],
 * //             FoundationalDataSources: [ // FoundationalDataSources
 * //               "CLOUD_TRAIL" || "DNS_LOGS" || "FLOW_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "EKS_ADDON_MANAGEMENT" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //             ],
 * //             CoverageGaps: "STRING_VALUE",
 * //             KeyObservation: "STRING_VALUE",
 * //           },
 * //           AccountOverview: { // AccountOverview
 * //             AccountId: "STRING_VALUE",
 * //             AccountStatus: "STRING_VALUE",
 * //             DetectorId: "STRING_VALUE",
 * //             Region: "STRING_VALUE",
 * //             DelegatedAdminAccountId: "STRING_VALUE",
 * //             TotalMemberAccounts: Number("long"),
 * //             TotalFindings: Number("long"),
 * //             AffectedAccountCount: Number("long"),
 * //             AccountRankings: [ // MemberAccountRankings
 * //               { // MemberAccountRanking
 * //                 Rank: Number("int"),
 * //                 AccountId: "STRING_VALUE",
 * //                 FindingCount: Number("long"),
 * //                 RiskLevel: "Info" || "Low" || "Medium" || "High" || "Critical",
 * //                 RiskRationale: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           Recommendations: [ // Recommendations
 * //             { // Recommendation
 * //               Title: "STRING_VALUE",
 * //               Rationale: "STRING_VALUE",
 * //               Category: "ENABLE_PROTECTION" || "FURTHER_INVESTIGATION" || "SUPPRESSION_RULE" || "HARDENING" || "MONITORING",
 * //               Priority: "IMMEDIATE" || "SHORT_TERM" || "STRATEGIC",
 * //               CliCommands: [ // CliCommands
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           RuntimeSignals: { // RuntimeSignals
 * //             SignalGroups: [ // SignalGroups
 * //               { // SignalGroup
 * //                 FindingType: "STRING_VALUE",
 * //                 Severity: Number("double"),
 * //                 Count: Number("long"),
 * //               },
 * //             ],
 * //             KeyObservation: "STRING_VALUE",
 * //           },
 * //           Distribution: { // Distribution
 * //             Dimension: "SEVERITY" || "TYPE" || "RESOURCE" || "ATTACK_VECTOR" || "ARCHIVE", // required
 * //             TotalFindings: Number("long"),
 * //             SeverityBreakdown: { // SeverityBreakdown
 * //               Critical: Number("int"),
 * //               High: Number("int"),
 * //               Medium: Number("int"),
 * //               Low: Number("int"),
 * //               Info: Number("int"),
 * //             },
 * //             FindingTypes: [ // TypeDistributions
 * //               { // TypeDistribution
 * //                 FindingType: "STRING_VALUE",
 * //                 Count: Number("long"),
 * //                 Percentage: Number("double"),
 * //                 DominantSeverity: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TopFindingTypes: [ // FindingTypeCounts
 * //               { // FindingTypeCount
 * //                 FindingType: "STRING_VALUE",
 * //                 Count: Number("int"),
 * //               },
 * //             ],
 * //             Resources: [ // ResourceDistributions
 * //               { // ResourceDistribution
 * //                 ResourceType: "STRING_VALUE",
 * //                 Identifier: "STRING_VALUE",
 * //                 Count: Number("long"),
 * //               },
 * //             ],
 * //             AttackVectors: [ // TacticCoverages
 * //               { // TacticCoverage
 * //                 Phase: "Reconnaissance" || "Resource Development" || "Initial Access" || "Execution" || "Persistence" || "Privilege Escalation" || "Defense Evasion" || "Credential Access" || "Discovery" || "Lateral Movement" || "Collection" || "Command and Control" || "Exfiltration" || "Impact",
 * //                 FindingCount: Number("int"),
 * //                 FindingTypes: [ // FindingTypeNames
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Techniques: [ // TechniqueCoverages
 * //                   { // TechniqueCoverage
 * //                     Technique: { // ThreatReference
 * //                       Name: "STRING_VALUE",
 * //                       Uid: "STRING_VALUE",
 * //                     },
 * //                     FindingCount: Number("int"),
 * //                     FindingTypes: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //             Archive: { // ArchiveDistribution
 * //               ArchivedCount: Number("long"),
 * //               UnarchivedCount: Number("long"),
 * //               ArchivedPercentage: Number("double"),
 * //               UnarchivedPercentage: Number("double"),
 * //             },
 * //           },
 * //           RepresentativeResources: [ // RepresentativeFindings
 * //             { // RepresentativeFinding
 * //               ResourceType: "STRING_VALUE",
 * //               Identifier: "STRING_VALUE",
 * //               FindingId: "STRING_VALUE",
 * //               FindingCount: Number("long"),
 * //               RiskLevel: "Info" || "Low" || "Medium" || "High" || "Critical",
 * //               RiskRationale: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Indicators: [
 * //             {
 * //               Value: "STRING_VALUE", // required
 * //               Type: "IP" || "DOMAIN" || "FILE",
 * //             },
 * //           ],
 * //         },
 * //         Metadata: { // MetadataRecord
 * //           TotalTimeMilliseconds: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInvestigationRecordsCommandInput - {@link ListInvestigationRecordsCommandInput}
 * @returns {@link ListInvestigationRecordsCommandOutput}
 * @see {@link ListInvestigationRecordsCommandInput} for command's `input` shape.
 * @see {@link ListInvestigationRecordsCommandOutput} for command's `response` shape.
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
export class ListInvestigationRecordsCommand extends command<ListInvestigationRecordsCommandInput, ListInvestigationRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListInvestigationRecords",
  ListInvestigationRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvestigationRecordsRequest;
      output: ListInvestigationRecordsResponse;
    };
    sdk: {
      input: ListInvestigationRecordsCommandInput;
      output: ListInvestigationRecordsCommandOutput;
    };
  };
}
