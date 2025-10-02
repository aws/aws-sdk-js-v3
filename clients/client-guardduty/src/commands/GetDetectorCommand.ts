// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetDetectorRequest, GetDetectorResponse } from "../models/models_1";
import { de_GetDetectorCommand, se_GetDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDetectorCommand}.
 */
export interface GetDetectorCommandInput extends GetDetectorRequest {}
/**
 * @public
 *
 * The output of {@link GetDetectorCommand}.
 */
export interface GetDetectorCommandOutput extends GetDetectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves a GuardDuty detector specified by the detectorId.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetDetectorRequest
 *   DetectorId: "STRING_VALUE", // required
 * };
 * const command = new GetDetectorCommand(input);
 * const response = await client.send(command);
 * // { // GetDetectorResponse
 * //   CreatedAt: "STRING_VALUE",
 * //   FindingPublishingFrequency: "FIFTEEN_MINUTES" || "ONE_HOUR" || "SIX_HOURS",
 * //   ServiceRole: "STRING_VALUE", // required
 * //   Status: "ENABLED" || "DISABLED", // required
 * //   UpdatedAt: "STRING_VALUE",
 * //   DataSources: { // DataSourceConfigurationsResult
 * //     CloudTrail: { // CloudTrailConfigurationResult
 * //       Status: "ENABLED" || "DISABLED", // required
 * //     },
 * //     DNSLogs: { // DNSLogsConfigurationResult
 * //       Status: "ENABLED" || "DISABLED", // required
 * //     },
 * //     FlowLogs: { // FlowLogsConfigurationResult
 * //       Status: "ENABLED" || "DISABLED", // required
 * //     },
 * //     S3Logs: { // S3LogsConfigurationResult
 * //       Status: "ENABLED" || "DISABLED", // required
 * //     },
 * //     Kubernetes: { // KubernetesConfigurationResult
 * //       AuditLogs: { // KubernetesAuditLogsConfigurationResult
 * //         Status: "ENABLED" || "DISABLED", // required
 * //       },
 * //     },
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
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Features: [ // DetectorFeatureConfigurationsResults
 * //     { // DetectorFeatureConfigurationResult
 * //       Name: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 * //       Status: "ENABLED" || "DISABLED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       AdditionalConfiguration: [ // DetectorAdditionalConfigurationResults
 * //         { // DetectorAdditionalConfigurationResult
 * //           Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //           Status: "ENABLED" || "DISABLED",
 * //           UpdatedAt: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDetectorCommandInput - {@link GetDetectorCommandInput}
 * @returns {@link GetDetectorCommandOutput}
 * @see {@link GetDetectorCommandInput} for command's `input` shape.
 * @see {@link GetDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
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
export class GetDetectorCommand extends $Command
  .classBuilder<
    GetDetectorCommandInput,
    GetDetectorCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "GetDetector", {})
  .n("GuardDutyClient", "GetDetectorCommand")
  .f(void 0, void 0)
  .ser(se_GetDetectorCommand)
  .de(de_GetDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDetectorRequest;
      output: GetDetectorResponse;
    };
    sdk: {
      input: GetDetectorCommandInput;
      output: GetDetectorCommandOutput;
    };
  };
}
