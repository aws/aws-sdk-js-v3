// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListDataQualityResultsRequest, ListDataQualityResultsResponse } from "../models/models_2";
import { de_ListDataQualityResultsCommand, se_ListDataQualityResultsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityResultsCommand}.
 */
export interface ListDataQualityResultsCommandInput extends ListDataQualityResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityResultsCommand}.
 */
export interface ListDataQualityResultsCommandOutput extends ListDataQualityResultsResponse, __MetadataBearer {}

/**
 * <p>Returns all data quality execution results for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityResultsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityResultsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityResultsRequest
 *   Filter: { // DataQualityResultFilterCriteria
 *     DataSource: { // DataSource
 *       GlueTable: { // GlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: { // GlueTableAdditionalOptions
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     JobName: "STRING_VALUE",
 *     JobRunId: "STRING_VALUE",
 *     StartedAfter: new Date("TIMESTAMP"),
 *     StartedBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataQualityResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityResultsResponse
 * //   Results: [ // DataQualityResultDescriptionList // required
 * //     { // DataQualityResultDescription
 * //       ResultId: "STRING_VALUE",
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
 * //       },
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityResultsCommandInput - {@link ListDataQualityResultsCommandInput}
 * @returns {@link ListDataQualityResultsCommandOutput}
 * @see {@link ListDataQualityResultsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityResultsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListDataQualityResultsCommand extends $Command
  .classBuilder<
    ListDataQualityResultsCommandInput,
    ListDataQualityResultsCommandOutput,
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
  .s("AWSGlue", "ListDataQualityResults", {})
  .n("GlueClient", "ListDataQualityResultsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataQualityResultsCommand)
  .de(de_ListDataQualityResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataQualityResultsRequest;
      output: ListDataQualityResultsResponse;
    };
    sdk: {
      input: ListDataQualityResultsCommandInput;
      output: ListDataQualityResultsCommandOutput;
    };
  };
}
