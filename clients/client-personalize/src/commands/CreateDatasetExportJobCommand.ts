// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDatasetExportJobRequest, CreateDatasetExportJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetExportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetExportJobCommand}.
 */
export interface CreateDatasetExportJobCommandInput extends CreateDatasetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetExportJobCommand}.
 */
export interface CreateDatasetExportJobCommandOutput extends CreateDatasetExportJobResponse, __MetadataBearer {}

/**
 * <p> Creates a job that exports data from your dataset to an Amazon S3 bucket.
 *       To allow Amazon Personalize to export the training data, you must specify an
 *       service-linked IAM role that gives Amazon Personalize <code>PutObject</code>
 *       permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset export job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *          </ul>
 *          <p> To get the status of the export job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html">DescribeDatasetExportJob</a>, and specify the Amazon Resource Name
 *       (ARN) of the dataset export job. The dataset export is complete when the
 *       status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job
 *       failed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateDatasetExportJobRequest
 *   jobName: "STRING_VALUE", // required
 *   datasetArn: "STRING_VALUE", // required
 *   ingestionMode: "BULK" || "PUT" || "ALL",
 *   roleArn: "STRING_VALUE", // required
 *   jobOutput: { // DatasetExportJobOutput
 *     s3DataDestination: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetExportJobResponse
 * //   datasetExportJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetExportJobCommandInput - {@link CreateDatasetExportJobCommandInput}
 * @returns {@link CreateDatasetExportJobCommandOutput}
 * @see {@link CreateDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class CreateDatasetExportJobCommand extends $Command
  .classBuilder<
    CreateDatasetExportJobCommandInput,
    CreateDatasetExportJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "CreateDatasetExportJob", {})
  .n("PersonalizeClient", "CreateDatasetExportJobCommand")
  .sc(CreateDatasetExportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetExportJobRequest;
      output: CreateDatasetExportJobResponse;
    };
    sdk: {
      input: CreateDatasetExportJobCommandInput;
      output: CreateDatasetExportJobCommandOutput;
    };
  };
}
