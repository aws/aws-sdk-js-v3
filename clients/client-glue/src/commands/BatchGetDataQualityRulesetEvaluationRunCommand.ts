// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchGetDataQualityRulesetEvaluationRunRequest,
  BatchGetDataQualityRulesetEvaluationRunResponse,
} from "../models/models_0";
import { BatchGetDataQualityRulesetEvaluationRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetDataQualityRulesetEvaluationRunCommand}.
 */
export interface BatchGetDataQualityRulesetEvaluationRunCommandInput extends BatchGetDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDataQualityRulesetEvaluationRunCommand}.
 */
export interface BatchGetDataQualityRulesetEvaluationRunCommandOutput extends BatchGetDataQualityRulesetEvaluationRunResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of multiple evaluation runs in a single request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetDataQualityRulesetEvaluationRunRequest
 *   RunIds: [ // DataQualityRulesetEvaluationRunIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDataQualityRulesetEvaluationRunResponse
 * //   Runs: [ // DataQualityRulesetEvaluationRunsList
 * //     { // DataQualityRulesetEvaluationRun
 * //       RunId: "STRING_VALUE",
 * //       DataSource: { // DataSource
 * //         GlueTable: { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         DataQualityGlueTable: { // DataQualityGlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           PreProcessingQuery: "STRING_VALUE",
 * //         },
 * //       },
 * //       Role: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       Timeout: Number("int"),
 * //       AdditionalRunOptions: { // DataQualityEvaluationRunAdditionalRunOptions
 * //         CloudWatchMetricsEnabled: true || false,
 * //         ResultsS3Prefix: "STRING_VALUE",
 * //         CompositeRuleEvaluationMethod: "COLUMN" || "ROW",
 * //         CustomLogGroupPrefix: "STRING_VALUE",
 * //         RowLevelResults: { // RowLevelResultsOptions
 * //           MaxRowsToWrite: Number("int"),
 * //           ResultType: "ALL" || "PASSED_ONLY" || "FAILED_ONLY",
 * //           CatalogTableConfig: { // CatalogTableConfigOptions
 * //             DatabaseName: "STRING_VALUE",
 * //             TableName: "STRING_VALUE",
 * //             S3Location: "STRING_VALUE",
 * //             CatalogId: "STRING_VALUE",
 * //           },
 * //         },
 * //         ProfilingResults: { // ProfilingResultsOptions
 * //           WriteProfilingResultsEnabled: true || false,
 * //           CatalogTableConfig: {
 * //             DatabaseName: "STRING_VALUE",
 * //             TableName: "STRING_VALUE",
 * //             S3Location: "STRING_VALUE",
 * //             CatalogId: "STRING_VALUE",
 * //           },
 * //           DistributionResults: { // DistributionResultsOptions
 * //             WriteDistributionResultsEnabled: true || false,
 * //             CatalogTableConfig: {
 * //               DatabaseName: "STRING_VALUE",
 * //               TableName: "STRING_VALUE",
 * //               S3Location: "STRING_VALUE",
 * //               CatalogId: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         ObservationScope: "ALL" || "NONE",
 * //         ObservationMode: "SCHEDULED" || "FIXED",
 * //         DataQualityRuleResults: { // DataQualityRuleResultsOptions
 * //           WriteDataQualityRuleResultsEnabled: true || false,
 * //           CatalogTableConfig: {
 * //             DatabaseName: "STRING_VALUE",
 * //             TableName: "STRING_VALUE",
 * //             S3Location: "STRING_VALUE",
 * //             CatalogId: "STRING_VALUE",
 * //           },
 * //         },
 * //         ObservationResults: { // ObservationResultsOptions
 * //           WriteObservationResultsEnabled: true || false,
 * //           CatalogTableConfig: {
 * //             DatabaseName: "STRING_VALUE",
 * //             TableName: "STRING_VALUE",
 * //             S3Location: "STRING_VALUE",
 * //             CatalogId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //       ErrorString: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       ExecutionTime: Number("int"),
 * //       RulesetNames: [ // RulesetNames
 * //         "STRING_VALUE",
 * //       ],
 * //       ResultIds: [ // DataQualityResultIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AdditionalDataSources: { // DataSourceMap
 * //         "<keys>": {
 * //           GlueTable: {
 * //             DatabaseName: "STRING_VALUE", // required
 * //             TableName: "STRING_VALUE", // required
 * //             CatalogId: "STRING_VALUE",
 * //             ConnectionName: "STRING_VALUE",
 * //             AdditionalOptions: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           DataQualityGlueTable: {
 * //             DatabaseName: "STRING_VALUE", // required
 * //             TableName: "STRING_VALUE", // required
 * //             CatalogId: "STRING_VALUE",
 * //             ConnectionName: "STRING_VALUE",
 * //             AdditionalOptions: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             PreProcessingQuery: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   RunsNotFound: [ // DataQualityRulesetEvaluationRunIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDataQualityRulesetEvaluationRunCommandInput - {@link BatchGetDataQualityRulesetEvaluationRunCommandInput}
 * @returns {@link BatchGetDataQualityRulesetEvaluationRunCommandOutput}
 * @see {@link BatchGetDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link BatchGetDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchGetDataQualityRulesetEvaluationRunCommand extends command<BatchGetDataQualityRulesetEvaluationRunCommandInput, BatchGetDataQualityRulesetEvaluationRunCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetDataQualityRulesetEvaluationRun",
  BatchGetDataQualityRulesetEvaluationRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDataQualityRulesetEvaluationRunRequest;
      output: BatchGetDataQualityRulesetEvaluationRunResponse;
    };
    sdk: {
      input: BatchGetDataQualityRulesetEvaluationRunCommandInput;
      output: BatchGetDataQualityRulesetEvaluationRunCommandOutput;
    };
  };
}
