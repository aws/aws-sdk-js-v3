// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type {
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
} from "../models/models_0";
import { DescribeOrganizationConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandInput extends DescribeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandOutput
  extends DescribeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the account selected as the delegated administrator for
 *       GuardDuty.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DescribeOrganizationConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DescribeOrganizationConfigurationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConfigurationResponse
 * //   AutoEnable: true || false,
 * //   MemberAccountLimitReached: true || false, // required
 * //   DataSources: { // OrganizationDataSourceConfigurationsResult
 * //     S3Logs: { // OrganizationS3LogsConfigurationResult
 * //       AutoEnable: true || false, // required
 * //     },
 * //     Kubernetes: { // OrganizationKubernetesConfigurationResult
 * //       AuditLogs: { // OrganizationKubernetesAuditLogsConfigurationResult
 * //         AutoEnable: true || false, // required
 * //       },
 * //     },
 * //     MalwareProtection: { // OrganizationMalwareProtectionConfigurationResult
 * //       ScanEc2InstanceWithFindings: { // OrganizationScanEc2InstanceWithFindingsResult
 * //         EbsVolumes: { // OrganizationEbsVolumesResult
 * //           AutoEnable: true || false,
 * //         },
 * //       },
 * //     },
 * //   },
 * //   Features: [ // OrganizationFeaturesConfigurationsResults
 * //     { // OrganizationFeatureConfigurationResult
 * //       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 * //       AutoEnable: "NEW" || "NONE" || "ALL",
 * //       AdditionalConfiguration: [ // OrganizationAdditionalConfigurationResults
 * //         { // OrganizationAdditionalConfigurationResult
 * //           Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //           AutoEnable: "NEW" || "NONE" || "ALL",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   AutoEnableOrganizationMembers: "NEW" || "ALL" || "NONE",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConfigurationCommandInput - {@link DescribeOrganizationConfigurationCommandInput}
 * @returns {@link DescribeOrganizationConfigurationCommandOutput}
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeOrganizationConfigurationCommand extends $Command
  .classBuilder<
    DescribeOrganizationConfigurationCommandInput,
    DescribeOrganizationConfigurationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DescribeOrganizationConfiguration", {})
  .n("GuardDutyClient", "DescribeOrganizationConfigurationCommand")
  .sc(DescribeOrganizationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationConfigurationRequest;
      output: DescribeOrganizationConfigurationResponse;
    };
    sdk: {
      input: DescribeOrganizationConfigurationCommandInput;
      output: DescribeOrganizationConfigurationCommandOutput;
    };
  };
}
