// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDatasetExportJobRequest, DescribeDatasetExportJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeDatasetExportJobCommand, se_DescribeDatasetExportJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetExportJobCommand}.
 */
export interface DescribeDatasetExportJobCommandInput extends DescribeDatasetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetExportJobCommand}.
 */
export interface DescribeDatasetExportJobCommandOutput extends DescribeDatasetExportJobResponse, __MetadataBearer {}

/**
 * <p>Describes the dataset export job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>, including the export job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeDatasetExportJobRequest
 *   datasetExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetExportJobResponse
 * //   datasetExportJob: { // DatasetExportJob
 * //     jobName: "STRING_VALUE",
 * //     datasetExportJobArn: "STRING_VALUE",
 * //     datasetArn: "STRING_VALUE",
 * //     ingestionMode: "BULK" || "PUT" || "ALL",
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     jobOutput: { // DatasetExportJobOutput
 * //       s3DataDestination: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     failureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetExportJobCommandInput - {@link DescribeDatasetExportJobCommandInput}
 * @returns {@link DescribeDatasetExportJobCommandOutput}
 * @see {@link DescribeDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class DescribeDatasetExportJobCommand extends $Command
  .classBuilder<
    DescribeDatasetExportJobCommandInput,
    DescribeDatasetExportJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeDatasetExportJob", {})
  .n("PersonalizeClient", "DescribeDatasetExportJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDatasetExportJobCommand)
  .de(de_DescribeDatasetExportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetExportJobRequest;
      output: DescribeDatasetExportJobResponse;
    };
    sdk: {
      input: DescribeDatasetExportJobCommandInput;
      output: DescribeDatasetExportJobCommandOutput;
    };
  };
}
