// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  ListDataQualityStatisticsRequest,
  ListDataQualityStatisticsResponse,
  ListDataQualityStatisticsResponseFilterSensitiveLog,
} from "../models/models_2";
import { de_ListDataQualityStatisticsCommand, se_ListDataQualityStatisticsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityStatisticsCommand}.
 */
export interface ListDataQualityStatisticsCommandInput extends ListDataQualityStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityStatisticsCommand}.
 */
export interface ListDataQualityStatisticsCommandOutput extends ListDataQualityStatisticsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of data quality statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityStatisticsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityStatisticsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityStatisticsRequest
 *   StatisticId: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE",
 *   TimestampFilter: { // TimestampFilter
 *     RecordedBefore: new Date("TIMESTAMP"),
 *     RecordedAfter: new Date("TIMESTAMP"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataQualityStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityStatisticsResponse
 * //   Statistics: [ // StatisticSummaryList
 * //     { // StatisticSummary
 * //       StatisticId: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       RunIdentifier: { // RunIdentifier
 * //         RunId: "STRING_VALUE",
 * //         JobRunId: "STRING_VALUE",
 * //       },
 * //       StatisticName: "STRING_VALUE",
 * //       DoubleValue: Number("double"),
 * //       EvaluationLevel: "Dataset" || "Column" || "Multicolumn",
 * //       ColumnsReferenced: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReferencedDatasets: [ // ReferenceDatasetsList
 * //         "STRING_VALUE",
 * //       ],
 * //       StatisticProperties: { // StatisticPropertiesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RecordedOn: new Date("TIMESTAMP"),
 * //       InclusionAnnotation: { // TimestampedInclusionAnnotation
 * //         Value: "INCLUDE" || "EXCLUDE",
 * //         LastModifiedOn: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityStatisticsCommandInput - {@link ListDataQualityStatisticsCommandInput}
 * @returns {@link ListDataQualityStatisticsCommandOutput}
 * @see {@link ListDataQualityStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityStatisticsCommandOutput} for command's `response` shape.
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListDataQualityStatisticsCommand extends $Command
  .classBuilder<
    ListDataQualityStatisticsCommandInput,
    ListDataQualityStatisticsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListDataQualityStatistics", {})
  .n("GlueClient", "ListDataQualityStatisticsCommand")
  .f(void 0, ListDataQualityStatisticsResponseFilterSensitiveLog)
  .ser(se_ListDataQualityStatisticsCommand)
  .de(de_ListDataQualityStatisticsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityStatisticsRequest;
      output: ListDataQualityStatisticsResponse;
    };
    sdk: {
      input: ListDataQualityStatisticsCommandInput;
      output: ListDataQualityStatisticsCommandOutput;
    };
  };
}
