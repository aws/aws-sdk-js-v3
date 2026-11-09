// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDataQualityEvaluationConfigRequest,
  UpdateDataQualityEvaluationConfigResponse,
} from "../models/models_3";
import { UpdateDataQualityEvaluationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataQualityEvaluationConfigCommand}.
 */
export interface UpdateDataQualityEvaluationConfigCommandInput extends UpdateDataQualityEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataQualityEvaluationConfigCommand}.
 */
export interface UpdateDataQualityEvaluationConfigCommandOutput extends UpdateDataQualityEvaluationConfigResponse, __MetadataBearer {}

/**
 * <p>Updates a data quality evaluation configuration. Fields that you don't specify keep their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDataQualityEvaluationConfigCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDataQualityEvaluationConfigCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateDataQualityEvaluationConfigRequest
 *   Name: "STRING_VALUE", // required
 *   DataSource: { // DataQualityEvaluationConfigDataSource
 *     GlueTables: { // DataQualityEvaluationConfigGlueTables
 *       CatalogId: "STRING_VALUE", // required
 *       DatabaseName: "STRING_VALUE",
 *       TableNamePattern: "STRING_VALUE",
 *       PreProcessingQuery: "STRING_VALUE",
 *       ConnectionName: "STRING_VALUE",
 *       AdditionalOptions: { // GlueTableAdditionalOptions
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   RulesetName: "STRING_VALUE",
 *   ManagedRulesetName: "SIMPLE" || "ADVANCED",
 *   Triggers: [ // DataQualityEvaluationConfigTriggers
 *     "ONCE" || "SCHEDULE" || "METADATA_CHANGE",
 *   ],
 *   ScheduleExpression: "STRING_VALUE",
 *   StartAt: new Date("TIMESTAMP"),
 *   EndAt: new Date("TIMESTAMP"),
 *   PauseRuns: true || false,
 *   Role: "STRING_VALUE",
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   AdditionalRunOptions: { // DataQualityEvaluationConfigAdditionalRunOptions
 *     CloudWatchMetricsEnabled: true || false,
 *     ResultsS3Prefix: "STRING_VALUE",
 *     CompositeRuleEvaluationMethod: "COLUMN" || "ROW",
 *     RowLevelResults: { // RowLevelResultsOptions
 *       MaxRowsToWrite: Number("int"),
 *       ResultType: "ALL" || "PASSED_ONLY" || "FAILED_ONLY",
 *       CatalogTableConfig: { // CatalogTableConfigOptions
 *         DatabaseName: "STRING_VALUE",
 *         TableName: "STRING_VALUE",
 *         S3Location: "STRING_VALUE",
 *         CatalogId: "STRING_VALUE",
 *       },
 *     },
 *     ProfilingResults: { // ProfilingResultsOptions
 *       WriteProfilingResultsEnabled: true || false,
 *       CatalogTableConfig: {
 *         DatabaseName: "STRING_VALUE",
 *         TableName: "STRING_VALUE",
 *         S3Location: "STRING_VALUE",
 *         CatalogId: "STRING_VALUE",
 *       },
 *       DistributionResults: { // DistributionResultsOptions
 *         WriteDistributionResultsEnabled: true || false,
 *         CatalogTableConfig: {
 *           DatabaseName: "STRING_VALUE",
 *           TableName: "STRING_VALUE",
 *           S3Location: "STRING_VALUE",
 *           CatalogId: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     ObservationScope: "ALL" || "NONE",
 *     ObservationMode: "SCHEDULED" || "FIXED",
 *     DataQualityRuleResults: { // DataQualityRuleResultsOptions
 *       WriteDataQualityRuleResultsEnabled: true || false,
 *       CatalogTableConfig: {
 *         DatabaseName: "STRING_VALUE",
 *         TableName: "STRING_VALUE",
 *         S3Location: "STRING_VALUE",
 *         CatalogId: "STRING_VALUE",
 *       },
 *     },
 *     ObservationResults: { // ObservationResultsOptions
 *       WriteObservationResultsEnabled: true || false,
 *       CatalogTableConfig: {
 *         DatabaseName: "STRING_VALUE",
 *         TableName: "STRING_VALUE",
 *         S3Location: "STRING_VALUE",
 *         CatalogId: "STRING_VALUE",
 *       },
 *     },
 *     CustomLogGroupPrefix: "STRING_VALUE",
 *   },
 *   AdditionalDataSources: { // DataSourceMap
 *     "<keys>": { // DataSource
 *       GlueTable: { // GlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       DataQualityGlueTable: { // DataQualityGlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         PreProcessingQuery: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateDataQualityEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataQualityEvaluationConfigResponse
 * //   Name: "STRING_VALUE",
 * //   EvaluationRunMode: "ON_DEMAND" || "EVALUATION_CONFIG",
 * //   CreatedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   Level: "CATALOG" || "DATABASE" || "TABLE",
 * //   DataSource: { // DataQualityEvaluationConfigDataSource
 * //     GlueTables: { // DataQualityEvaluationConfigGlueTables
 * //       CatalogId: "STRING_VALUE", // required
 * //       DatabaseName: "STRING_VALUE",
 * //       TableNamePattern: "STRING_VALUE",
 * //       PreProcessingQuery: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: { // GlueTableAdditionalOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   RulesetName: "STRING_VALUE",
 * //   ManagedRulesetName: "SIMPLE" || "ADVANCED",
 * //   Triggers: [ // DataQualityEvaluationConfigTriggers
 * //     "ONCE" || "SCHEDULE" || "METADATA_CHANGE",
 * //   ],
 * //   ScheduleExpression: "STRING_VALUE",
 * //   StartAt: new Date("TIMESTAMP"),
 * //   EndAt: new Date("TIMESTAMP"),
 * //   PauseRuns: true || false,
 * //   Role: "STRING_VALUE",
 * //   NumberOfWorkers: Number("int"),
 * //   Timeout: Number("int"),
 * //   AdditionalRunOptions: { // DataQualityEvaluationConfigAdditionalRunOptions
 * //     CloudWatchMetricsEnabled: true || false,
 * //     ResultsS3Prefix: "STRING_VALUE",
 * //     CompositeRuleEvaluationMethod: "COLUMN" || "ROW",
 * //     RowLevelResults: { // RowLevelResultsOptions
 * //       MaxRowsToWrite: Number("int"),
 * //       ResultType: "ALL" || "PASSED_ONLY" || "FAILED_ONLY",
 * //       CatalogTableConfig: { // CatalogTableConfigOptions
 * //         DatabaseName: "STRING_VALUE",
 * //         TableName: "STRING_VALUE",
 * //         S3Location: "STRING_VALUE",
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //     },
 * //     ProfilingResults: { // ProfilingResultsOptions
 * //       WriteProfilingResultsEnabled: true || false,
 * //       CatalogTableConfig: {
 * //         DatabaseName: "STRING_VALUE",
 * //         TableName: "STRING_VALUE",
 * //         S3Location: "STRING_VALUE",
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //       DistributionResults: { // DistributionResultsOptions
 * //         WriteDistributionResultsEnabled: true || false,
 * //         CatalogTableConfig: {
 * //           DatabaseName: "STRING_VALUE",
 * //           TableName: "STRING_VALUE",
 * //           S3Location: "STRING_VALUE",
 * //           CatalogId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     ObservationScope: "ALL" || "NONE",
 * //     ObservationMode: "SCHEDULED" || "FIXED",
 * //     DataQualityRuleResults: { // DataQualityRuleResultsOptions
 * //       WriteDataQualityRuleResultsEnabled: true || false,
 * //       CatalogTableConfig: {
 * //         DatabaseName: "STRING_VALUE",
 * //         TableName: "STRING_VALUE",
 * //         S3Location: "STRING_VALUE",
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //     },
 * //     ObservationResults: { // ObservationResultsOptions
 * //       WriteObservationResultsEnabled: true || false,
 * //       CatalogTableConfig: {
 * //         DatabaseName: "STRING_VALUE",
 * //         TableName: "STRING_VALUE",
 * //         S3Location: "STRING_VALUE",
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //     },
 * //     CustomLogGroupPrefix: "STRING_VALUE",
 * //   },
 * //   AdditionalDataSources: { // DataSourceMap
 * //     "<keys>": { // DataSource
 * //       GlueTable: { // GlueTable
 * //         DatabaseName: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         CatalogId: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //         AdditionalOptions: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       DataQualityGlueTable: { // DataQualityGlueTable
 * //         DatabaseName: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         CatalogId: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //         AdditionalOptions: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         PreProcessingQuery: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDataQualityEvaluationConfigCommandInput - {@link UpdateDataQualityEvaluationConfigCommandInput}
 * @returns {@link UpdateDataQualityEvaluationConfigCommandOutput}
 * @see {@link UpdateDataQualityEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDataQualityEvaluationConfigCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class UpdateDataQualityEvaluationConfigCommand extends command<UpdateDataQualityEvaluationConfigCommandInput, UpdateDataQualityEvaluationConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataQualityEvaluationConfig",
  UpdateDataQualityEvaluationConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataQualityEvaluationConfigRequest;
      output: UpdateDataQualityEvaluationConfigResponse;
    };
    sdk: {
      input: UpdateDataQualityEvaluationConfigCommandInput;
      output: UpdateDataQualityEvaluationConfigCommandOutput;
    };
  };
}
