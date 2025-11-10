// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionsStatisticsAggregationRequest, GetSessionsStatisticsAggregationResponse } from "../models/models_1";
import { GetSessionsStatisticsAggregation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionsStatisticsAggregationCommand}.
 */
export interface GetSessionsStatisticsAggregationCommandInput extends GetSessionsStatisticsAggregationRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionsStatisticsAggregationCommand}.
 */
export interface GetSessionsStatisticsAggregationCommandOutput
  extends GetSessionsStatisticsAggregationResponse,
    __MetadataBearer {}

/**
 * <p>Gets a set of statistics for queues or farms. Before you can call the
 *             <code>GetSessionStatisticsAggregation</code> operation, you must first call the
 *             <code>StartSessionsStatisticsAggregation</code> operation. Statistics are available for
 *          1 hour after you call the <code>StartSessionsStatisticsAggregation</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetSessionsStatisticsAggregationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetSessionsStatisticsAggregationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetSessionsStatisticsAggregationRequest
 *   farmId: "STRING_VALUE", // required
 *   aggregationId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetSessionsStatisticsAggregationCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionsStatisticsAggregationResponse
 * //   statistics: [ // StatisticsList
 * //     { // Statistics
 * //       queueId: "STRING_VALUE",
 * //       fleetId: "STRING_VALUE",
 * //       jobId: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       usageType: "COMPUTE" || "LICENSE",
 * //       licenseProduct: "STRING_VALUE",
 * //       instanceType: "STRING_VALUE",
 * //       count: Number("int"), // required
 * //       costInUsd: { // Stats
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         avg: Number("double"),
 * //         sum: Number("double"),
 * //       },
 * //       runtimeInSeconds: {
 * //         min: Number("double"),
 * //         max: Number("double"),
 * //         avg: Number("double"),
 * //         sum: Number("double"),
 * //       },
 * //       aggregationStartTime: new Date("TIMESTAMP"),
 * //       aggregationEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "TIMEOUT" || "FAILED" || "COMPLETED", // required
 * //   statusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSessionsStatisticsAggregationCommandInput - {@link GetSessionsStatisticsAggregationCommandInput}
 * @returns {@link GetSessionsStatisticsAggregationCommandOutput}
 * @see {@link GetSessionsStatisticsAggregationCommandInput} for command's `input` shape.
 * @see {@link GetSessionsStatisticsAggregationCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetSessionsStatisticsAggregationCommand extends $Command
  .classBuilder<
    GetSessionsStatisticsAggregationCommandInput,
    GetSessionsStatisticsAggregationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetSessionsStatisticsAggregation", {})
  .n("DeadlineClient", "GetSessionsStatisticsAggregationCommand")
  .sc(GetSessionsStatisticsAggregation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionsStatisticsAggregationRequest;
      output: GetSessionsStatisticsAggregationResponse;
    };
    sdk: {
      input: GetSessionsStatisticsAggregationCommandInput;
      output: GetSessionsStatisticsAggregationCommandOutput;
    };
  };
}
