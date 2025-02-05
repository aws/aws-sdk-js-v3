// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetFindingStatisticsRequest, GetFindingStatisticsResponse } from "../models/models_0";
import { de_GetFindingStatisticsCommand, se_GetFindingStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingStatisticsCommand}.
 */
export interface GetFindingStatisticsCommandInput extends GetFindingStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingStatisticsCommand}.
 */
export interface GetFindingStatisticsCommandOutput extends GetFindingStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) aggregated statistical data about findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Macie2Client(config);
 * const input = { // GetFindingStatisticsRequest
 *   findingCriteria: { // FindingCriteria
 *     criterion: { // Criterion
 *       "<keys>": { // CriterionAdditionalProperties
 *         eq: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         eqExactMatch: [
 *           "STRING_VALUE",
 *         ],
 *         gt: Number("long"),
 *         gte: Number("long"),
 *         lt: Number("long"),
 *         lte: Number("long"),
 *         neq: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   groupBy: "resourcesAffected.s3Bucket.name" || "type" || "classificationDetails.jobId" || "severity.description", // required
 *   size: Number("int"),
 *   sortCriteria: { // FindingStatisticsSortCriteria
 *     attributeName: "groupKey" || "count",
 *     orderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new GetFindingStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingStatisticsResponse
 * //   countsByGroup: [ // __listOfGroupCount
 * //     { // GroupCount
 * //       count: Number("long"),
 * //       groupKey: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFindingStatisticsCommandInput - {@link GetFindingStatisticsCommandInput}
 * @returns {@link GetFindingStatisticsCommandOutput}
 * @see {@link GetFindingStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingStatisticsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetFindingStatisticsCommand extends $Command
  .classBuilder<
    GetFindingStatisticsCommandInput,
    GetFindingStatisticsCommandOutput,
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
  .s("Macie2", "GetFindingStatistics", {})
  .n("Macie2Client", "GetFindingStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingStatisticsCommand)
  .de(de_GetFindingStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingStatisticsRequest;
      output: GetFindingStatisticsResponse;
    };
    sdk: {
      input: GetFindingStatisticsCommandInput;
      output: GetFindingStatisticsCommandOutput;
    };
  };
}
