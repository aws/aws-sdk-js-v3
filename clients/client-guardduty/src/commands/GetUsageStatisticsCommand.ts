// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetUsageStatisticsRequest, GetUsageStatisticsResponse } from "../models/models_1";
import { de_GetUsageStatisticsCommand, se_GetUsageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUsageStatisticsCommand}.
 */
export interface GetUsageStatisticsCommandInput extends GetUsageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageStatisticsCommand}.
 */
export interface GetUsageStatisticsCommandOutput extends GetUsageStatisticsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector
 *       ID. For newly enabled detectors or data sources, the cost returned will include only the usage
 *       so far under 30 days. This may differ from the cost metrics in the console, which project
 *       usage over 30 days to provide a monthly cost estimate. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetUsageStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetUsageStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetUsageStatisticsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   UsageStatisticType: "SUM_BY_ACCOUNT" || "SUM_BY_DATA_SOURCE" || "SUM_BY_RESOURCE" || "TOP_RESOURCES" || "SUM_BY_FEATURES" || "TOP_ACCOUNTS_BY_FEATURE", // required
 *   UsageCriteria: { // UsageCriteria
 *     AccountIds: [ // AccountIds
 *       "STRING_VALUE",
 *     ],
 *     DataSources: [ // DataSourceList
 *       "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_LOGS" || "KUBERNETES_AUDIT_LOGS" || "EC2_MALWARE_SCAN",
 *     ],
 *     Resources: [ // ResourceList
 *       "STRING_VALUE",
 *     ],
 *     Features: [ // UsageFeatureList
 *       "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING" || "FARGATE_RUNTIME_MONITORING" || "EC2_RUNTIME_MONITORING" || "RDS_DBI_PROTECTION_PROVISIONED" || "RDS_DBI_PROTECTION_SERVERLESS",
 *     ],
 *   },
 *   Unit: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageStatisticsResponse
 * //   UsageStatistics: { // UsageStatistics
 * //     SumByAccount: [ // UsageAccountResultList
 * //       { // UsageAccountResult
 * //         AccountId: "STRING_VALUE",
 * //         Total: { // Total
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     TopAccountsByFeature: [ // UsageTopAccountsResultList
 * //       { // UsageTopAccountsResult
 * //         Feature: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING" || "FARGATE_RUNTIME_MONITORING" || "EC2_RUNTIME_MONITORING" || "RDS_DBI_PROTECTION_PROVISIONED" || "RDS_DBI_PROTECTION_SERVERLESS",
 * //         Accounts: [ // UsageTopAccountsByFeatureList
 * //           { // UsageTopAccountResult
 * //             AccountId: "STRING_VALUE",
 * //             Total: {
 * //               Amount: "STRING_VALUE",
 * //               Unit: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     SumByDataSource: [ // UsageDataSourceResultList
 * //       { // UsageDataSourceResult
 * //         DataSource: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_LOGS" || "KUBERNETES_AUDIT_LOGS" || "EC2_MALWARE_SCAN",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     SumByResource: [ // UsageResourceResultList
 * //       { // UsageResourceResult
 * //         Resource: "STRING_VALUE",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     TopResources: [
 * //       {
 * //         Resource: "STRING_VALUE",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     SumByFeature: [ // UsageFeatureResultList
 * //       { // UsageFeatureResult
 * //         Feature: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING" || "FARGATE_RUNTIME_MONITORING" || "EC2_RUNTIME_MONITORING" || "RDS_DBI_PROTECTION_PROVISIONED" || "RDS_DBI_PROTECTION_SERVERLESS",
 * //         Total: "<Total>",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUsageStatisticsCommandInput - {@link GetUsageStatisticsCommandInput}
 * @returns {@link GetUsageStatisticsCommandOutput}
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
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
export class GetUsageStatisticsCommand extends $Command
  .classBuilder<
    GetUsageStatisticsCommandInput,
    GetUsageStatisticsCommandOutput,
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
  .s("GuardDutyAPIService", "GetUsageStatistics", {})
  .n("GuardDutyClient", "GetUsageStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetUsageStatisticsCommand)
  .de(de_GetUsageStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUsageStatisticsRequest;
      output: GetUsageStatisticsResponse;
    };
    sdk: {
      input: GetUsageStatisticsCommandInput;
      output: GetUsageStatisticsCommandOutput;
    };
  };
}
