// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { GetOrganizationStatisticsResponse } from "../models/models_1";
import { GetOrganizationStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationStatisticsCommand}.
 */
export interface GetOrganizationStatisticsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetOrganizationStatisticsCommand}.
 */
export interface GetOrganizationStatisticsCommandOutput extends GetOrganizationStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves how many active member accounts have
 *       each feature enabled within GuardDuty. Only a delegated GuardDuty administrator of an organization can run this API.</p>
 *          <p>When you create a new organization, it might take up to 24
 *       hours to generate the statistics for the entire organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetOrganizationStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetOrganizationStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = {};
 * const command = new GetOrganizationStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationStatisticsResponse
 * //   OrganizationDetails: { // OrganizationDetails
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     OrganizationStatistics: { // OrganizationStatistics
 * //       TotalAccountsCount: Number("int"),
 * //       MemberAccountsCount: Number("int"),
 * //       ActiveAccountsCount: Number("int"),
 * //       EnabledAccountsCount: Number("int"),
 * //       CountByFeature: [ // OrganizationFeatureStatisticsResults
 * //         { // OrganizationFeatureStatistics
 * //           Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 * //           EnabledAccountsCount: Number("int"),
 * //           AdditionalConfiguration: [ // OrganizationFeatureStatisticsAdditionalConfigurations
 * //             { // OrganizationFeatureStatisticsAdditionalConfiguration
 * //               Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT" || "EC2_AGENT_MANAGEMENT",
 * //               EnabledAccountsCount: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrganizationStatisticsCommandInput - {@link GetOrganizationStatisticsCommandInput}
 * @returns {@link GetOrganizationStatisticsCommandOutput}
 * @see {@link GetOrganizationStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationStatisticsCommandOutput} for command's `response` shape.
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
export class GetOrganizationStatisticsCommand extends $Command
  .classBuilder<
    GetOrganizationStatisticsCommandInput,
    GetOrganizationStatisticsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetOrganizationStatistics", {})
  .n("GuardDutyClient", "GetOrganizationStatisticsCommand")
  .sc(GetOrganizationStatistics$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetOrganizationStatisticsResponse;
    };
    sdk: {
      input: GetOrganizationStatisticsCommandInput;
      output: GetOrganizationStatisticsCommandOutput;
    };
  };
}
