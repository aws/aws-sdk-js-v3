// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateDataQualityEvaluationConfigRequest,
  CreateDataQualityEvaluationConfigResponse,
} from "../models/models_1";
import { CreateDataQualityEvaluationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataQualityEvaluationConfigCommand}.
 */
export interface CreateDataQualityEvaluationConfigCommandInput extends CreateDataQualityEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataQualityEvaluationConfigCommand}.
 */
export interface CreateDataQualityEvaluationConfigCommandOutput extends CreateDataQualityEvaluationConfigResponse, __MetadataBearer {}

/**
 * <p>Creates a data quality evaluation configuration, which evaluates the data quality of a collection of tables in the Glue Data Catalog once, on a schedule, or when table metadata changes. A configuration applies to a catalog, a database, or a single table, and evaluates every table in scope, including tables added later, without per-table setup.</p>
 *          <p>When configurations at more than one level apply to the same table, the most specific configuration applies. Each table is evaluated at most once an hour, whichever triggers you choose.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDataQualityEvaluationConfigCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDataQualityEvaluationConfigCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateDataQualityEvaluationConfigRequest
 *   Name: "STRING_VALUE", // required
 *   Level: "CATALOG" || "DATABASE" || "TABLE", // required
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
 *   Role: "STRING_VALUE", // required
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
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataQualityEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataQualityEvaluationConfigResponse
 * //   Name: "STRING_VALUE",
 * //   EvaluationRunMode: "ON_DEMAND" || "EVALUATION_CONFIG",
 * // };
 *
 * ```
 *
 * @param CreateDataQualityEvaluationConfigCommandInput - {@link CreateDataQualityEvaluationConfigCommandInput}
 * @returns {@link CreateDataQualityEvaluationConfigCommandOutput}
 * @see {@link CreateDataQualityEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDataQualityEvaluationConfigCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateDataQualityEvaluationConfigCommand extends command<CreateDataQualityEvaluationConfigCommandInput, CreateDataQualityEvaluationConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataQualityEvaluationConfig",
  CreateDataQualityEvaluationConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataQualityEvaluationConfigRequest;
      output: CreateDataQualityEvaluationConfigResponse;
    };
    sdk: {
      input: CreateDataQualityEvaluationConfigCommandInput;
      output: CreateDataQualityEvaluationConfigCommandOutput;
    };
  };
}
