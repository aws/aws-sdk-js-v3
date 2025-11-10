// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateMemberDetectorsRequest, UpdateMemberDetectorsResponse } from "../models/models_1";
import { UpdateMemberDetectors } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMemberDetectorsCommand}.
 */
export interface UpdateMemberDetectorsCommandInput extends UpdateMemberDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMemberDetectorsCommand}.
 */
export interface UpdateMemberDetectorsCommandOutput extends UpdateMemberDetectorsResponse, __MetadataBearer {}

/**
 * <p>Contains information on member accounts to be updated.</p>
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
 * import { GuardDutyClient, UpdateMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateMemberDetectorsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
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
 *   Features: [ // MemberFeaturesConfigurations
 *     { // MemberFeaturesConfiguration
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 *       Status: "ENABLED" || "DISABLED",
 *       AdditionalConfiguration: [ // MemberAdditionalConfigurations
 *         { // MemberAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 *           Status: "ENABLED" || "DISABLED",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMemberDetectorsResponse
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
 * @param UpdateMemberDetectorsCommandInput - {@link UpdateMemberDetectorsCommandInput}
 * @returns {@link UpdateMemberDetectorsCommandOutput}
 * @see {@link UpdateMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberDetectorsCommandOutput} for command's `response` shape.
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
export class UpdateMemberDetectorsCommand extends $Command
  .classBuilder<
    UpdateMemberDetectorsCommandInput,
    UpdateMemberDetectorsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "UpdateMemberDetectors", {})
  .n("GuardDutyClient", "UpdateMemberDetectorsCommand")
  .sc(UpdateMemberDetectors)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMemberDetectorsRequest;
      output: UpdateMemberDetectorsResponse;
    };
    sdk: {
      input: UpdateMemberDetectorsCommandInput;
      output: UpdateMemberDetectorsCommandOutput;
    };
  };
}
