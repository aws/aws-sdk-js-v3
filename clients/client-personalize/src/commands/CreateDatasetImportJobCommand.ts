// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateDatasetImportJobCommand, se_CreateDatasetImportJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetImportJobCommand}.
 */
export interface CreateDatasetImportJobCommandInput extends CreateDatasetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetImportJobCommand}.
 */
export interface CreateDatasetImportJobCommandOutput extends CreateDatasetImportJobResponse, __MetadataBearer {}

/**
 * <p>Creates a job that imports training data from your data source (an
 *       Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the
 *       training data, you must specify an IAM service role that has permission to
 *       read from the data source, as Amazon Personalize makes a copy of your data and
 *       processes it internally. For information on granting access to your Amazon S3
 *       bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving
 *         Amazon Personalize Access to Amazon S3 Resources</a>. </p>
 *          <p>If you already created a recommender or deployed a custom solution version with a campaign, how new bulk records
 *       influence recommendations depends on the domain use case or recipe that you use. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/how-new-data-influences-recommendations.html">How new data influences
 *         real-time recommendations</a>.</p>
 *          <important>
 *             <p>By default, a dataset import job replaces any existing data in the
 *         dataset that you imported in bulk. To add new records without replacing
 *         existing data, specify INCREMENTAL for the import mode in the
 *         CreateDatasetImportJob operation.</p>
 *          </important>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the import job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>, providing the Amazon Resource Name
 *       (ARN) of the dataset import job. The dataset import is complete when the
 *       status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job
 *       failed.</p>
 *          <note>
 *             <p>Importing takes time. You must wait until the status shows as ACTIVE
 *         before training a model using the dataset.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateDatasetImportJobRequest
 *   jobName: "STRING_VALUE", // required
 *   datasetArn: "STRING_VALUE", // required
 *   dataSource: { // DataSource
 *     dataLocation: "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   importMode: "FULL" || "INCREMENTAL",
 *   publishAttributionMetricsToS3: true || false,
 * };
 * const command = new CreateDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetImportJobResponse
 * //   datasetImportJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetImportJobCommandInput - {@link CreateDatasetImportJobCommandInput}
 * @returns {@link CreateDatasetImportJobCommandOutput}
 * @see {@link CreateDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetImportJobCommandOutput} for command's `response` shape.
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
export class CreateDatasetImportJobCommand extends $Command
  .classBuilder<
    CreateDatasetImportJobCommandInput,
    CreateDatasetImportJobCommandOutput,
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
  .s("AmazonPersonalize", "CreateDatasetImportJob", {})
  .n("PersonalizeClient", "CreateDatasetImportJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateDatasetImportJobCommand)
  .de(de_CreateDatasetImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetImportJobRequest;
      output: CreateDatasetImportJobResponse;
    };
    sdk: {
      input: CreateDatasetImportJobCommandInput;
      output: CreateDatasetImportJobCommandOutput;
    };
  };
}
