// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetDataQualityRulesetEvaluationRunRequest,
  GetDataQualityRulesetEvaluationRunResponse,
} from "../models/models_1";
import { GetDataQualityRulesetEvaluationRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityRulesetEvaluationRunCommand}.
 */
export interface GetDataQualityRulesetEvaluationRunCommandInput extends GetDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityRulesetEvaluationRunCommand}.
 */
export interface GetDataQualityRulesetEvaluationRunCommandOutput
  extends GetDataQualityRulesetEvaluationRunResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a specific run where a ruleset is evaluated against a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityRulesetEvaluationRunRequest
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityRulesetEvaluationRunResponse
 * //   RunId: "STRING_VALUE",
 * //   DataSource: { // DataSource
 * //     GlueTable: { // GlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: { // GlueTableAdditionalOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     DataQualityGlueTable: { // DataQualityGlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PreProcessingQuery: "STRING_VALUE",
 * //     },
 * //   },
 * //   Role: "STRING_VALUE",
 * //   NumberOfWorkers: Number("int"),
 * //   Timeout: Number("int"),
 * //   AdditionalRunOptions: { // DataQualityEvaluationRunAdditionalRunOptions
 * //     CloudWatchMetricsEnabled: true || false,
 * //     ResultsS3Prefix: "STRING_VALUE",
 * //     CompositeRuleEvaluationMethod: "COLUMN" || "ROW",
 * //   },
 * //   Status: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //   ErrorString: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   ExecutionTime: Number("int"),
 * //   RulesetNames: [ // RulesetNames
 * //     "STRING_VALUE",
 * //   ],
 * //   ResultIds: [ // DataQualityResultIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   AdditionalDataSources: { // DataSourceMap
 * //     "<keys>": {
 * //       GlueTable: {
 * //         DatabaseName: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         CatalogId: "STRING_VALUE",
 * //         ConnectionName: "STRING_VALUE",
 * //         AdditionalOptions: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       DataQualityGlueTable: {
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
 * @param GetDataQualityRulesetEvaluationRunCommandInput - {@link GetDataQualityRulesetEvaluationRunCommandInput}
 * @returns {@link GetDataQualityRulesetEvaluationRunCommandOutput}
 * @see {@link GetDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class GetDataQualityRulesetEvaluationRunCommand extends $Command
  .classBuilder<
    GetDataQualityRulesetEvaluationRunCommandInput,
    GetDataQualityRulesetEvaluationRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetDataQualityRulesetEvaluationRun", {})
  .n("GlueClient", "GetDataQualityRulesetEvaluationRunCommand")
  .sc(GetDataQualityRulesetEvaluationRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityRulesetEvaluationRunRequest;
      output: GetDataQualityRulesetEvaluationRunResponse;
    };
    sdk: {
      input: GetDataQualityRulesetEvaluationRunCommandInput;
      output: GetDataQualityRulesetEvaluationRunCommandOutput;
    };
  };
}
