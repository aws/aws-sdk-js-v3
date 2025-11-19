// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetRemainingFreeTrialDaysRequest, GetRemainingFreeTrialDaysResponse } from "../models/models_0";
import { GetRemainingFreeTrialDays } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRemainingFreeTrialDaysCommand}.
 */
export interface GetRemainingFreeTrialDaysCommandInput extends GetRemainingFreeTrialDaysRequest {}
/**
 * @public
 *
 * The output of {@link GetRemainingFreeTrialDaysCommand}.
 */
export interface GetRemainingFreeTrialDaysCommandOutput extends GetRemainingFreeTrialDaysResponse, __MetadataBearer {}

/**
 * <p>Provides the number of days left for each data source used in the free trial
 *       period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetRemainingFreeTrialDaysCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetRemainingFreeTrialDaysCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetRemainingFreeTrialDaysRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetRemainingFreeTrialDaysCommand(input);
 * const response = await client.send(command);
 * // { // GetRemainingFreeTrialDaysResponse
 * //   Accounts: [ // AccountFreeTrialInfos
 * //     { // AccountFreeTrialInfo
 * //       AccountId: "STRING_VALUE",
 * //       DataSources: { // DataSourcesFreeTrial
 * //         CloudTrail: { // DataSourceFreeTrial
 * //           FreeTrialDaysRemaining: Number("int"),
 * //         },
 * //         DnsLogs: {
 * //           FreeTrialDaysRemaining: Number("int"),
 * //         },
 * //         FlowLogs: {
 * //           FreeTrialDaysRemaining: Number("int"),
 * //         },
 * //         S3Logs: {
 * //           FreeTrialDaysRemaining: Number("int"),
 * //         },
 * //         Kubernetes: { // KubernetesDataSourceFreeTrial
 * //           AuditLogs: {
 * //             FreeTrialDaysRemaining: Number("int"),
 * //           },
 * //         },
 * //         MalwareProtection: { // MalwareProtectionDataSourceFreeTrial
 * //           ScanEc2InstanceWithFindings: "<DataSourceFreeTrial>",
 * //         },
 * //       },
 * //       Features: [ // FreeTrialFeatureConfigurationsResults
 * //         { // FreeTrialFeatureConfigurationResult
 * //           Name: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "FARGATE_RUNTIME_MONITORING" || "EC2_RUNTIME_MONITORING",
 * //           FreeTrialDaysRemaining: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccounts
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRemainingFreeTrialDaysCommandInput - {@link GetRemainingFreeTrialDaysCommandInput}
 * @returns {@link GetRemainingFreeTrialDaysCommandOutput}
 * @see {@link GetRemainingFreeTrialDaysCommandInput} for command's `input` shape.
 * @see {@link GetRemainingFreeTrialDaysCommandOutput} for command's `response` shape.
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
export class GetRemainingFreeTrialDaysCommand extends $Command
  .classBuilder<
    GetRemainingFreeTrialDaysCommandInput,
    GetRemainingFreeTrialDaysCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetRemainingFreeTrialDays", {})
  .n("GuardDutyClient", "GetRemainingFreeTrialDaysCommand")
  .sc(GetRemainingFreeTrialDays)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRemainingFreeTrialDaysRequest;
      output: GetRemainingFreeTrialDaysResponse;
    };
    sdk: {
      input: GetRemainingFreeTrialDaysCommandInput;
      output: GetRemainingFreeTrialDaysCommandOutput;
    };
  };
}
