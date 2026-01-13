// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { GetQueryStatisticsRequest, GetQueryStatisticsResponse } from "../models/models_0";
import { GetQueryStatistics$ } from "../schemas/schemas_0";

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
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetQueryStatistics", {})
  .n("LakeFormationClient", "GetQueryStatisticsCommand")
  .sc(GetQueryStatistics$)
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
