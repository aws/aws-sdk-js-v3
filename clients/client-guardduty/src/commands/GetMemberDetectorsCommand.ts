// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetMemberDetectorsRequest, GetMemberDetectorsResponse } from "../models/models_1";
import { GetMemberDetectors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMemberDetectorsCommand}.
 */
export interface GetMemberDetectorsCommandInput extends GetMemberDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetMemberDetectorsCommand}.
 */
export interface GetMemberDetectorsCommandOutput extends GetMemberDetectorsResponse, __MetadataBearer {}

/**
 * <p>Describes which data sources are enabled for the member account's detector.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetMemberDetectorsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetMemberDetectorsResponse
 * //   MemberDataSourceConfigurations: [ // MemberDataSourceConfigurations // required
 * //     { // MemberDataSourceConfiguration
 * //       AccountId: "STRING_VALUE", // required
 * //       DataSources: { // DataSourceConfigurationsResult
 * //         CloudTrail: { // CloudTrailConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         DNSLogs: { // DNSLogsConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         FlowLogs: { // FlowLogsConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         S3Logs: { // S3LogsConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         Kubernetes: { // KubernetesConfigurationResult
 * //           AuditLogs: { // KubernetesAuditLogsConfigurationResult
 * //             Status: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //         MalwareProtection: { // MalwareProtectionConfigurationResult
 * //           ScanEc2InstanceWithFindings: { // ScanEc2InstanceWithFindingsResult
 * //             EbsVolumes: { // EbsVolumesResult
 * //               Status: "ENABLED" || "DISABLED",
 * //               Reason: "STRING_VALUE",
 * //             },
 * //           },
 * //           ServiceRole: "STRING_VALUE",
 * //         },
 * //       },
 * //       Features: [ // MemberFeaturesConfigurationsResults
 * //         { // MemberFeaturesConfigurationResult
 * //           Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 * //           Status: "ENABLED" || "DISABLED",
 * //           UpdatedAt: new Date("TIMESTAMP"),
 * //           AdditionalConfiguration: [ // MemberAdditionalConfigurationResults
 * //             { // MemberAdditionalConfigurationResult
 * //               Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //               Status: "ENABLED" || "DISABLED",
 * //               UpdatedAt: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMemberDetectorsCommandInput - {@link GetMemberDetectorsCommandInput}
 * @returns {@link GetMemberDetectorsCommandOutput}
 * @see {@link GetMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetMemberDetectorsCommandOutput} for command's `response` shape.
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
export class GetMemberDetectorsCommand extends $Command
  .classBuilder<
    GetMemberDetectorsCommandInput,
    GetMemberDetectorsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetMemberDetectors", {})
  .n("GuardDutyClient", "GetMemberDetectorsCommand")
  .sc(GetMemberDetectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMemberDetectorsRequest;
      output: GetMemberDetectorsResponse;
    };
    sdk: {
      input: GetMemberDetectorsCommandInput;
      output: GetMemberDetectorsCommandOutput;
    };
  };
}
