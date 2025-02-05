// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetDataSourceInput, GetDataSourceOutput } from "../models/models_0";
import { de_GetDataSourceCommand, se_GetDataSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandInput extends GetDataSourceInput {}
/**
 * @public
 *
 * The output of {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandOutput extends GetDataSourceOutput, __MetadataBearer {}

/**
 * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p>
 *         <p>
 *             <code>GetDataSource</code> provides results in normal or verbose format. The verbose format
 *             adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MachineLearningClient(config);
 * const input = { // GetDataSourceInput
 *   DataSourceId: "STRING_VALUE", // required
 *   Verbose: true || false,
 * };
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceOutput
 * //   DataSourceId: "STRING_VALUE",
 * //   DataLocationS3: "STRING_VALUE",
 * //   DataRearrangement: "STRING_VALUE",
 * //   CreatedByIamUser: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   DataSizeInBytes: Number("long"),
 * //   NumberOfFiles: Number("long"),
 * //   Name: "STRING_VALUE",
 * //   Status: "PENDING" || "INPROGRESS" || "FAILED" || "COMPLETED" || "DELETED",
 * //   LogUri: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   RedshiftMetadata: { // RedshiftMetadata
 * //     RedshiftDatabase: { // RedshiftDatabase
 * //       DatabaseName: "STRING_VALUE", // required
 * //       ClusterIdentifier: "STRING_VALUE", // required
 * //     },
 * //     DatabaseUserName: "STRING_VALUE",
 * //     SelectSqlQuery: "STRING_VALUE",
 * //   },
 * //   RDSMetadata: { // RDSMetadata
 * //     Database: { // RDSDatabase
 * //       InstanceIdentifier: "STRING_VALUE", // required
 * //       DatabaseName: "STRING_VALUE", // required
 * //     },
 * //     DatabaseUserName: "STRING_VALUE",
 * //     SelectSqlQuery: "STRING_VALUE",
 * //     ResourceRole: "STRING_VALUE",
 * //     ServiceRole: "STRING_VALUE",
 * //     DataPipelineId: "STRING_VALUE",
 * //   },
 * //   RoleARN: "STRING_VALUE",
 * //   ComputeStatistics: true || false,
 * //   ComputeTime: Number("long"),
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   DataSourceSchema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataSourceCommandInput - {@link GetDataSourceCommandInput}
 * @returns {@link GetDataSourceCommandOutput}
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 * @public
 */
export class GetDataSourceCommand extends $Command
  .classBuilder<
    GetDataSourceCommandInput,
    GetDataSourceCommandOutput,
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
  .s("AmazonML_20141212", "GetDataSource", {})
  .n("MachineLearningClient", "GetDataSourceCommand")
  .f(void 0, void 0)
  .ser(se_GetDataSourceCommand)
  .de(de_GetDataSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSourceInput;
      output: GetDataSourceOutput;
    };
    sdk: {
      input: GetDataSourceCommandInput;
      output: GetDataSourceCommandOutput;
    };
  };
}
