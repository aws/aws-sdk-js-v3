// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReportDefinitionsRequest, ListReportDefinitionsResult } from "../models/models_0";
import { ListReportDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of all reports and their configurations for your AWS account.
 *
 * The maximum number of reports is one.
 *
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
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The calls to AWS Application Cost Profiler API are throttled. The request was denied.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints for the API.
 *
 * @throws {@link ApplicationCostProfilerServiceException}
 *
 * Base exception class for all service exceptions from ApplicationCostProfiler service.
 *
 * @public
 */
export class ListReportDefinitionsCommand extends command<ListReportDefinitionsCommandInput, ListReportDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListReportDefinitions",
  ListReportDefinitions$
) {
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
