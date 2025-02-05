// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetQueryStatisticsRequest, GetQueryStatisticsResponse } from "../models/models_0";
import { de_GetQueryStatisticsCommand, se_GetQueryStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryStatisticsCommand}.
 */
export interface GetQueryStatisticsCommandInput extends GetQueryStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryStatisticsCommand}.
 */
export interface GetQueryStatisticsCommandOutput extends GetQueryStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves statistics on the planning and execution of a query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetQueryStatisticsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetQueryStatisticsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // GetQueryStatisticsRequest
 *   QueryId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryStatisticsResponse
 * //   ExecutionStatistics: { // ExecutionStatistics
 * //     AverageExecutionTimeMillis: Number("long"),
 * //     DataScannedBytes: Number("long"),
 * //     WorkUnitsExecutedCount: Number("long"),
 * //   },
 * //   PlanningStatistics: { // PlanningStatistics
 * //     EstimatedDataToScanBytes: Number("long"),
 * //     PlanningTimeMillis: Number("long"),
 * //     QueueTimeMillis: Number("long"),
 * //     WorkUnitsGeneratedCount: Number("long"),
 * //   },
 * //   QuerySubmissionTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetQueryStatisticsCommandInput - {@link GetQueryStatisticsCommandInput}
 * @returns {@link GetQueryStatisticsCommandOutput}
 * @see {@link GetQueryStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetQueryStatisticsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ExpiredException} (client fault)
 *  <p>Contains details about an error where the query request expired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link StatisticsNotReadyYetException} (client fault)
 *  <p>Contains details about an error related to statistics not being ready.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Contains details about an error where the query request was throttled.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class GetQueryStatisticsCommand extends $Command
  .classBuilder<
    GetQueryStatisticsCommandInput,
    GetQueryStatisticsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "GetQueryStatistics", {})
  .n("LakeFormationClient", "GetQueryStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_GetQueryStatisticsCommand)
  .de(de_GetQueryStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryStatisticsRequest;
      output: GetQueryStatisticsResponse;
    };
    sdk: {
      input: GetQueryStatisticsCommandInput;
      output: GetQueryStatisticsCommandOutput;
    };
  };
}
