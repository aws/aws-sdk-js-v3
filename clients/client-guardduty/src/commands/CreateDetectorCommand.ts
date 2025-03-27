// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateDetectorRequest, CreateDetectorResponse } from "../models/models_0";
import { de_CreateDetectorCommand, se_CreateDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a single GuardDuty detector. A detector is a resource that represents the
 *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 *       you enable the service. You can have only one detector per account per Region. All data
 *       sources are enabled in a new detector by default.</p>
 *          <ul>
 *             <li>
 *                <p>When you don't specify any <code>features</code>, with an
 *           exception to <code>RUNTIME_MONITORING</code>, all the optional features are
 *           enabled by default.</p>
 *             </li>
 *             <li>
 *                <p>When you specify some of the <code>features</code>, any feature that is not specified in the
 *           API call gets enabled by default, with an exception to <code>RUNTIME_MONITORING</code>. </p>
 *             </li>
 *          </ul>
 *          <p>Specifying both EKS Runtime Monitoring (<code>EKS_RUNTIME_MONITORING</code>)
 *       and Runtime Monitoring (<code>RUNTIME_MONITORING</code>) will cause an error.
 *       You can add only one of these two features because Runtime Monitoring already includes the
 *       threat detection for Amazon EKS resources. For more information, see
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html">Runtime Monitoring</a>.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
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
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 *       Status: "ENABLED" || "DISABLED",
 *       AdditionalConfiguration: [ // DetectorAdditionalConfigurations
 *         { // DetectorAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
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
export class CreateDetectorCommand extends $Command
  .classBuilder<
    CreateDetectorCommandInput,
    CreateDetectorCommandOutput,
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
  .s("GuardDutyAPIService", "CreateDetector", {})
  .n("GuardDutyClient", "CreateDetectorCommand")
  .f(void 0, void 0)
  .ser(se_CreateDetectorCommand)
  .de(de_CreateDetectorCommand)
  .build() {
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
