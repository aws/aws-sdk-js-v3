// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeDataSourcesInput, DescribeDataSourcesOutput } from "../models/models_0";
import { de_DescribeDataSourcesCommand, se_DescribeDataSourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSourcesCommand}.
 */
export interface DescribeDataSourcesCommandInput extends DescribeDataSourcesInput {}
/**
 * @public
 *
 * The output of {@link DescribeDataSourcesCommand}.
 */
export interface DescribeDataSourcesCommandOutput extends DescribeDataSourcesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeDataSourcesCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeDataSourcesCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DescribeDataSourcesInput
 *   FilterVariable: "CreatedAt" || "LastUpdatedAt" || "Status" || "Name" || "DataLocationS3" || "IAMUser",
 *   EQ: "STRING_VALUE",
 *   GT: "STRING_VALUE",
 *   LT: "STRING_VALUE",
 *   GE: "STRING_VALUE",
 *   LE: "STRING_VALUE",
 *   NE: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   SortOrder: "asc" || "dsc",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeDataSourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSourcesOutput
 * //   Results: [ // DataSources
 * //     { // DataSource
 * //       DataSourceId: "STRING_VALUE",
 * //       DataLocationS3: "STRING_VALUE",
 * //       DataRearrangement: "STRING_VALUE",
 * //       CreatedByIamUser: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       DataSizeInBytes: Number("long"),
 * //       NumberOfFiles: Number("long"),
 * //       Name: "STRING_VALUE",
 * //       Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //       Message: "STRING_VALUE",
 * //       RedshiftMetadata: { // RedshiftMetadata
 * //         RedshiftDatabase: { // RedshiftDatabase
 * //           DatabaseName: "STRING_VALUE", // required
 * //           ClusterIdentifier: "STRING_VALUE", // required
 * //         },
 * //         DatabaseUserName: "STRING_VALUE",
 * //         SelectSqlQuery: "STRING_VALUE",
 * //       },
 * //       RDSMetadata: { // RDSMetadata
 * //         Database: { // RDSDatabase
 * //           InstanceIdentifier: "STRING_VALUE", // required
 * //           DatabaseName: "STRING_VALUE", // required
 * //         },
 * //         DatabaseUserName: "STRING_VALUE",
 * //         SelectSqlQuery: "STRING_VALUE",
 * //         ResourceRole: "STRING_VALUE",
 * //         ServiceRole: "STRING_VALUE",
 * //         DataPipelineId: "STRING_VALUE",
 * //       },
 * //       RoleARN: "STRING_VALUE",
 * //       ComputeStatistics: true || false,
 * //       ComputeTime: Number("long"),
 * //       FinishedAt: new Date("TIMESTAMP"),
 * //       StartedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataSourcesCommandInput - {@link DescribeDataSourcesCommandInput}
 * @returns {@link DescribeDataSourcesCommandOutput}
 * @see {@link DescribeDataSourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class DescribeDataSourcesCommand extends $Command
  .classBuilder<
    DescribeDataSourcesCommandInput,
    DescribeDataSourcesCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonML_20141212", "DescribeDataSources", {})
  .n("MachineLearningClient", "DescribeDataSourcesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSourcesCommand)
  .de(de_DescribeDataSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSourcesInput;
      output: DescribeDataSourcesOutput;
    };
    sdk: {
      input: DescribeDataSourcesCommandInput;
      output: DescribeDataSourcesCommandOutput;
    };
  };
}
