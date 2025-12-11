// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDatasetImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetImportJobCommand}.
 */
export interface DescribeDatasetImportJobCommandInput extends DescribeDatasetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetImportJobCommand}.
 */
export interface DescribeDatasetImportJobCommandOutput extends DescribeDatasetImportJobResponse, __MetadataBearer {}

/**
 * <p>Describes the dataset import job created by <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>, including the import job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeDatasetImportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeDatasetImportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeDatasetImportJobRequest
 *   datasetImportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetImportJobResponse
 * //   datasetImportJob: { // DatasetImportJob
 * //     jobName: "STRING_VALUE",
 * //     datasetImportJobArn: "STRING_VALUE",
 * //     datasetArn: "STRING_VALUE",
 * //     dataSource: { // DataSource
 * //       dataLocation: "STRING_VALUE",
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     failureReason: "STRING_VALUE",
 * //     importMode: "FULL" || "INCREMENTAL",
 * //     publishAttributionMetricsToS3: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetImportJobCommandInput - {@link DescribeDatasetImportJobCommandInput}
 * @returns {@link DescribeDatasetImportJobCommandOutput}
 * @see {@link DescribeDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetImportJobCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeDatasetImportJobCommand extends $Command
  .classBuilder<
    DescribeDatasetImportJobCommandInput,
    DescribeDatasetImportJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DescribeDatasetImportJob", {})
  .n("PersonalizeClient", "DescribeDatasetImportJobCommand")
  .sc(DescribeDatasetImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetImportJobRequest;
      output: DescribeDatasetImportJobResponse;
    };
    sdk: {
      input: DescribeDatasetImportJobCommandInput;
      output: DescribeDatasetImportJobCommandOutput;
    };
  };
}
