// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetFindingsStatisticsRequest, GetFindingsStatisticsResponse } from "../models/models_0";
import { de_GetFindingsStatisticsCommand, se_GetFindingsStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsStatisticsCommand}.
 */
export interface GetFindingsStatisticsCommandInput extends GetFindingsStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsStatisticsCommand}.
 */
export interface GetFindingsStatisticsCommandOutput extends GetFindingsStatisticsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon GuardDuty findings statistics for the specified detector ID.</p>
 *          <p>There might be regional differences because some flags might not be available in all the Regions where GuardDuty
 *       is currently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFindingsStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFindingsStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetFindingsStatisticsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingStatisticTypes: [ // FindingStatisticTypes // required
 *     "COUNT_BY_SEVERITY",
 *   ],
 *   FindingCriteria: { // FindingCriteria
 *     Criterion: { // Criterion
 *       "<keys>": { // Condition
 *         Eq: [ // Eq
 *           "STRING_VALUE",
 *         ],
 *         Neq: [ // Neq
 *           "STRING_VALUE",
 *         ],
 *         Gt: Number("int"),
 *         Gte: Number("int"),
 *         Lt: Number("int"),
 *         Lte: Number("int"),
 *         Equals: [ // Equals
 *           "STRING_VALUE",
 *         ],
 *         NotEquals: [ // NotEquals
 *           "STRING_VALUE",
 *         ],
 *         GreaterThan: Number("long"),
 *         GreaterThanOrEqual: Number("long"),
 *         LessThan: Number("long"),
 *         LessThanOrEqual: Number("long"),
 *       },
 *     },
 *   },
 * };
 * const command = new GetFindingsStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsStatisticsResponse
 * //   FindingStatistics: { // FindingStatistics
 * //     CountBySeverity: { // CountBySeverity
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingsStatisticsCommandInput - {@link GetFindingsStatisticsCommandInput}
 * @returns {@link GetFindingsStatisticsCommandOutput}
 * @see {@link GetFindingsStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingsStatisticsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetFindingsStatisticsCommand extends $Command
  .classBuilder<
    GetFindingsStatisticsCommandInput,
    GetFindingsStatisticsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "GetFindingsStatistics", {})
  .n("GuardDutyClient", "GetFindingsStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingsStatisticsCommand)
  .de(de_GetFindingsStatisticsCommand)
  .build() {}
