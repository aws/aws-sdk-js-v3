// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReportDefinitionsRequest, ListReportDefinitionsResult } from "../models/models_0";
import { ListReportDefinitions } from "../schemas/schemas_1_Report";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReportDefinitionsCommand}.
 */
export interface ListReportDefinitionsCommandInput extends ListReportDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListReportDefinitionsCommand}.
 */
export interface ListReportDefinitionsCommandOutput extends ListReportDefinitionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of all reports and their configurations for your AWS account.</p>
 *          <p>The maximum number of reports is one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ListReportDefinitionsCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ListReportDefinitionsCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * // import type { ApplicationCostProfilerClientConfig } from "@aws-sdk/client-applicationcostprofiler";
 * const config = {}; // type is ApplicationCostProfilerClientConfig
 * const client = new ApplicationCostProfilerClient(config);
 * const input = { // ListReportDefinitionsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportDefinitionsResult
 * //   reportDefinitions: [ // ReportDefinitionList
 * //     { // ReportDefinition
 * //       reportId: "STRING_VALUE",
 * //       reportDescription: "STRING_VALUE",
 * //       reportFrequency: "MONTHLY" || "DAILY" || "ALL",
 * //       format: "CSV" || "PARQUET",
 * //       destinationS3Location: { // S3Location
 * //         bucket: "STRING_VALUE", // required
 * //         prefix: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportDefinitionsCommandInput - {@link ListReportDefinitionsCommandInput}
 * @returns {@link ListReportDefinitionsCommandOutput}
 * @see {@link ListReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to AWS Application Cost Profiler API are throttled. The request was denied.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints for the API.</p>
 *
 * @throws {@link ApplicationCostProfilerServiceException}
 * <p>Base exception class for all service exceptions from ApplicationCostProfiler service.</p>
 *
 *
 * @public
 */
export class ListReportDefinitionsCommand extends $Command
  .classBuilder<
    ListReportDefinitionsCommandInput,
    ListReportDefinitionsCommandOutput,
    ApplicationCostProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationCostProfilerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSApplicationCostProfiler", "ListReportDefinitions", {})
  .n("ApplicationCostProfilerClient", "ListReportDefinitionsCommand")
  .sc(ListReportDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReportDefinitionsRequest;
      output: ListReportDefinitionsResult;
    };
    sdk: {
      input: ListReportDefinitionsCommandInput;
      output: ListReportDefinitionsCommandOutput;
    };
  };
}
