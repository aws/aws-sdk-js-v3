// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDataSourceRunsInput, ListDataSourceRunsOutput } from "../models/models_1";
import { ListDataSourceRuns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSourceRunsCommand}.
 */
export interface ListDataSourceRunsCommandInput extends ListDataSourceRunsInput {}
/**
 * @public
 *
 * The output of {@link ListDataSourceRunsCommand}.
 */
export interface ListDataSourceRunsCommandOutput extends ListDataSourceRunsOutput, __MetadataBearer {}

/**
 * <p>Lists data source runs in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDataSourceRunsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDataSourceRunsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListDataSourceRunsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   dataSourceIdentifier: "STRING_VALUE", // required
 *   status: "REQUESTED" || "RUNNING" || "FAILED" || "PARTIALLY_SUCCEEDED" || "SUCCESS",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataSourceRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourceRunsOutput
 * //   items: [ // DataSourceRunSummaries // required
 * //     { // DataSourceRunSummary
 * //       id: "STRING_VALUE", // required
 * //       dataSourceId: "STRING_VALUE", // required
 * //       type: "PRIORITIZED" || "SCHEDULED", // required
 * //       status: "REQUESTED" || "RUNNING" || "FAILED" || "PARTIALLY_SUCCEEDED" || "SUCCESS", // required
 * //       projectId: "STRING_VALUE", // required
 * //       runStatisticsForAssets: { // RunStatisticsForAssets
 * //         added: Number("int"),
 * //         updated: Number("int"),
 * //         unchanged: Number("int"),
 * //         skipped: Number("int"),
 * //         failed: Number("int"),
 * //       },
 * //       errorMessage: { // DataSourceErrorMessage
 * //         errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //         errorDetail: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       stoppedAt: new Date("TIMESTAMP"),
 * //       lineageSummary: { // DataSourceRunLineageSummary
 * //         importStatus: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "PARTIALLY_SUCCEEDED",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourceRunsCommandInput - {@link ListDataSourceRunsCommandInput}
 * @returns {@link ListDataSourceRunsCommandOutput}
 * @see {@link ListDataSourceRunsCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceRunsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListDataSourceRunsCommand extends $Command
  .classBuilder<
    ListDataSourceRunsCommandInput,
    ListDataSourceRunsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListDataSourceRuns", {})
  .n("DataZoneClient", "ListDataSourceRunsCommand")
  .sc(ListDataSourceRuns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSourceRunsInput;
      output: ListDataSourceRunsOutput;
    };
    sdk: {
      input: ListDataSourceRunsCommandInput;
      output: ListDataSourceRunsCommandOutput;
    };
  };
}
