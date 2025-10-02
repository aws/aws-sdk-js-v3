// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetCoverageStatisticsRequest, GetCoverageStatisticsResponse } from "../models/models_1";
import { de_GetCoverageStatisticsCommand, se_GetCoverageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoverageStatisticsCommand}.
 */
export interface GetCoverageStatisticsCommandInput extends GetCoverageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetCoverageStatisticsCommand}.
 */
export interface GetCoverageStatisticsCommandOutput extends GetCoverageStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you
 *       can retrieve the statistics for all the resources associated with the active member accounts
 *       in your organization who have enabled Runtime Monitoring and have the GuardDuty security agent running
 *       on their resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetCoverageStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetCoverageStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetCoverageStatisticsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterCriteria: { // CoverageFilterCriteria
 *     FilterCriterion: [ // CoverageFilterCriterionList
 *       { // CoverageFilterCriterion
 *         CriterionKey: "ACCOUNT_ID" || "CLUSTER_NAME" || "RESOURCE_TYPE" || "COVERAGE_STATUS" || "ADDON_VERSION" || "MANAGEMENT_TYPE" || "EKS_CLUSTER_NAME" || "ECS_CLUSTER_NAME" || "AGENT_VERSION" || "INSTANCE_ID" || "CLUSTER_ARN",
 *         FilterCondition: { // CoverageFilterCondition
 *           Equals: [ // Equals
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [ // NotEquals
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   StatisticsType: [ // CoverageStatisticsTypeList // required
 *     "COUNT_BY_RESOURCE_TYPE" || "COUNT_BY_COVERAGE_STATUS",
 *   ],
 * };
 * const command = new GetCoverageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetCoverageStatisticsResponse
 * //   CoverageStatistics: { // CoverageStatistics
 * //     CountByResourceType: { // CountByResourceType
 * //       "<keys>": Number("long"),
 * //     },
 * //     CountByCoverageStatus: { // CountByCoverageStatus
 * //       "<keys>": Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCoverageStatisticsCommandInput - {@link GetCoverageStatisticsCommandInput}
 * @returns {@link GetCoverageStatisticsCommandOutput}
 * @see {@link GetCoverageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetCoverageStatisticsCommandOutput} for command's `response` shape.
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
export class GetCoverageStatisticsCommand extends $Command
  .classBuilder<
    GetCoverageStatisticsCommandInput,
    GetCoverageStatisticsCommandOutput,
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
  .s("GuardDutyAPIService", "GetCoverageStatistics", {})
  .n("GuardDutyClient", "GetCoverageStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetCoverageStatisticsCommand)
  .de(de_GetCoverageStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoverageStatisticsRequest;
      output: GetCoverageStatisticsResponse;
    };
    sdk: {
      input: GetCoverageStatisticsCommandInput;
      output: GetCoverageStatisticsCommandOutput;
    };
  };
}
