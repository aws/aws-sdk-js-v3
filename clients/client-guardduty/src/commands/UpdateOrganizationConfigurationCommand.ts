// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
} from "../models/models_1";
import { UpdateOrganizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandInput extends UpdateOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandOutput extends UpdateOrganizationConfigurationResponse, __MetadataBearer {}

/**
 * Configures the delegated administrator account with the provided values. You must provide a value for either `autoEnableOrganizationMembers` or `autoEnable`, but not both.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see [Runtime Monitoring](https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html).
 *
 * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see [Regions and endpoints](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateOrganizationConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateOrganizationConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateOrganizationConfigurationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AutoEnable: true || false,
 *   DataSources: { // OrganizationDataSourceConfigurations
 *     S3Logs: { // OrganizationS3LogsConfiguration
 *       AutoEnable: true || false, // required
 *     },
 *     Kubernetes: { // OrganizationKubernetesConfiguration
 *       AuditLogs: { // OrganizationKubernetesAuditLogsConfiguration
 *         AutoEnable: true || false, // required
 *       },
 *     },
 *     MalwareProtection: { // OrganizationMalwareProtectionConfiguration
 *       ScanEc2InstanceWithFindings: { // OrganizationScanEc2InstanceWithFindings
 *         EbsVolumes: { // OrganizationEbsVolumes
 *           AutoEnable: true || false,
 *         },
 *       },
 *     },
 *   },
 *   Features: [ // OrganizationFeaturesConfigurations
 *     { // OrganizationFeatureConfiguration
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING" || "RUNTIME_MONITORING" || "AI_PROTECTION",
 *       AutoEnable: "NEW" || "NONE" || "ALL",
 *       AdditionalConfiguration: [ // OrganizationAdditionalConfigurations
 *         { // OrganizationAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT" || "RDS_DATA_RISK",
 *           AutoEnable: "NEW" || "NONE" || "ALL",
 *         },
 *       ],
 *     },
 *   ],
 *   AutoEnableOrganizationMembers: "NEW" || "ALL" || "NONE",
 * };
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOrganizationConfigurationCommandInput - {@link UpdateOrganizationConfigurationCommandInput}
 * @returns {@link UpdateOrganizationConfigurationCommandOutput}
 * @see {@link UpdateOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateOrganizationConfigurationCommand extends command<UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOrganizationConfiguration",
  UpdateOrganizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOrganizationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateOrganizationConfigurationCommandInput;
      output: UpdateOrganizationConfigurationCommandOutput;
    };
  };
}
