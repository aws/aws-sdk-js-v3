// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDetectorRequest, CreateDetectorResponse } from "../models/models_0";
import { CreateDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDetectorCommand}.
 */
export interface CreateDetectorCommandInput extends CreateDetectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateDetectorCommand}.
 */
export interface CreateDetectorCommandOutput extends CreateDetectorResponse, __MetadataBearer {}

/**
 * Creates a single GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region. All data sources are enabled in a new detector by default.
 *
 * - When you don't specify any `features`, with an exception to `RUNTIME_MONITORING`, all the optional features are enabled by default.
 * - When you specify some of the `features`, any feature that is not specified in the API call gets enabled by default, with an exception to `RUNTIME_MONITORING`.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see [Runtime Monitoring](https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html).
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see [Regions and endpoints](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateDetectorRequest
 *   Enable: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   FindingPublishingFrequency: "FIFTEEN_MINUTES" || "ONE_HOUR" || "SIX_HOURS",
 *   DataSources: { // DataSourceConfigurations
 *     S3Logs: { // S3LogsConfiguration
 *       Enable: true || false, // required
 *     },
 *     Kubernetes: { // KubernetesConfiguration
 *       AuditLogs: { // KubernetesAuditLogsConfiguration
 *         Enable: true || false, // required
 *       },
 *     },
 *     MalwareProtection: { // MalwareProtectionConfiguration
 *       ScanEc2InstanceWithFindings: { // ScanEc2InstanceWithFindings
 *         EbsVolumes: true || false,
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Features: [ // DetectorFeatureConfigurations
 *     { // DetectorFeatureConfiguration
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING" || "RUNTIME_MONITORING" || "AI_PROTECTION" || "AI_ANALYST",
 *       Status: "ENABLED" || "DISABLED",
 *       AdditionalConfiguration: [ // DetectorAdditionalConfigurations
 *         { // DetectorAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT" || "RDS_DATA_RISK",
 *           Status: "ENABLED" || "DISABLED",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateDetectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateDetectorResponse
 * //   DetectorId: "STRING_VALUE",
 * //   UnprocessedDataSources: { // UnprocessedDataSourcesResult
 * //     MalwareProtection: { // MalwareProtectionConfigurationResult
 * //       ScanEc2InstanceWithFindings: { // ScanEc2InstanceWithFindingsResult
 * //         EbsVolumes: { // EbsVolumesResult
 * //           Status: "ENABLED" || "DISABLED",
 * //           Reason: "STRING_VALUE",
 * //         },
 * //       },
 * //       ServiceRole: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDetectorCommandInput - {@link CreateDetectorCommandInput}
 * @returns {@link CreateDetectorCommandOutput}
 * @see {@link CreateDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
 *
 * @public
 */
export class CreateDetectorCommand extends command<CreateDetectorCommandInput, CreateDetectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateDetector",
  CreateDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDetectorRequest;
      output: CreateDetectorResponse;
    };
    sdk: {
      input: CreateDetectorCommandInput;
      output: CreateDetectorCommandOutput;
    };
  };
}
