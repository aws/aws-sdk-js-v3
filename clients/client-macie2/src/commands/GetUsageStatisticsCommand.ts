// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetUsageStatisticsRequest, GetUsageStatisticsResponse } from "../models/models_0";
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
 * <p>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetUsageStatisticsRequest
 *   filterBy: [ // __listOfUsageStatisticsFilter
 *     { // UsageStatisticsFilter
 *       comparator: "GT" || "GTE" || "LT" || "LTE" || "EQ" || "NE" || "CONTAINS",
 *       key: "accountId" || "serviceLimit" || "freeTrialStartDate" || "total",
 *       values: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: { // UsageStatisticsSortBy
 *     key: "accountId" || "total" || "serviceLimitValue" || "freeTrialStartDate",
 *     orderBy: "ASC" || "DESC",
 *   },
 *   timeRange: "MONTH_TO_DATE" || "PAST_30_DAYS",
 * };
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageStatisticsResponse
 * //   nextToken: "STRING_VALUE",
 * //   records: [ // __listOfUsageRecord
 * //     { // UsageRecord
 * //       accountId: "STRING_VALUE",
 * //       automatedDiscoveryFreeTrialStartDate: new Date("TIMESTAMP"),
 * //       freeTrialStartDate: new Date("TIMESTAMP"),
 * //       usage: [ // __listOfUsageByAccount
 * //         { // UsageByAccount
 * //           currency: "USD",
 * //           estimatedCost: "STRING_VALUE",
 * //           serviceLimit: { // ServiceLimit
 * //             isServiceLimited: true || false,
 * //             unit: "TERABYTES",
 * //             value: Number("long"),
 * //           },
 * //           type: "DATA_INVENTORY_EVALUATION" || "SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_SENSITIVE_DATA_DISCOVERY" || "AUTOMATED_OBJECT_MONITORING",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   timeRange: "MONTH_TO_DATE" || "PAST_30_DAYS",
 * // };
 *
 * ```
 *
 * @param GetUsageStatisticsCommandInput - {@link GetUsageStatisticsCommandInput}
 * @returns {@link GetUsageStatisticsCommandOutput}
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class GetUsageStatisticsCommand extends $Command
  .classBuilder<
    GetUsageStatisticsCommandInput,
    GetUsageStatisticsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "GetUsageStatistics", {})
  .n("Macie2Client", "GetUsageStatisticsCommand")
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
