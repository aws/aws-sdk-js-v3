// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataDeletionJobRequest, CreateDataDeletionJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDataDeletionJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataDeletionJobCommand}.
 */
export interface CreateDataDeletionJobCommandInput extends CreateDataDeletionJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataDeletionJobCommand}.
 */
export interface CreateDataDeletionJobCommandOutput extends CreateDataDeletionJobResponse, __MetadataBearer {}

/**
 * <p>Creates a batch job that deletes all
 *       references to specific users from an Amazon Personalize dataset group in batches. You specify the users to delete in a CSV file of userIds in
 *       an Amazon S3 bucket. After a job completes, Amazon Personalize no longer trains
 *       on the users’ data and no longer considers the users when generating user segments.
 *       For more information about creating a data deletion job, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/delete-records.html">Deleting users</a>.</p>
 *          <ul>
 *             <li>
 *                <p>Your input file must be a CSV file with a single USER_ID column that lists the users IDs. For more information
 *           about preparing the CSV file, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/prepare-deletion-input-file.html">Preparing your data deletion file and uploading it to Amazon S3</a>.</p>
 *             </li>
 *             <li>
 *                <p>To give Amazon Personalize permission to access your input CSV file of userIds, you must specify an IAM service role that has permission to
 *           read from the data source. This role
 *           needs <code>GetObject</code> and <code>ListBucket</code> permissions for the bucket and its content.
 *           These permissions are the same as importing data. For information on granting access to your Amazon S3
 *           bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving
 *             Amazon Personalize Access to Amazon S3 Resources</a>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *       After you create a job, it can take up to a day to delete all references to the users from datasets and models. Until the job completes,
 *       Amazon Personalize continues to use the data when training. And if you use a User Segmentation recipe, the users might appear in user segments.
 *     </p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A data deletion job can have one of the following statuses:</p>
 *          <ul>
 *             <li>
 *                <p>PENDING > IN_PROGRESS > COMPLETED -or- FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the data deletion job, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html">DescribeDataDeletionJob</a> API operation and specify the Amazon Resource Name
 *       (ARN) of the job. If the status is FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job
 *       failed.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDataDeletionJobs.html">ListDataDeletionJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html">DescribeDataDeletionJob</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDataDeletionJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDataDeletionJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateDataDeletionJobRequest
 *   jobName: "STRING_VALUE", // required
 *   datasetGroupArn: "STRING_VALUE", // required
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
 * };
 * const command = new CreateDataDeletionJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataDeletionJobResponse
 * //   dataDeletionJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataDeletionJobCommandInput - {@link CreateDataDeletionJobCommandInput}
 * @returns {@link CreateDataDeletionJobCommandOutput}
 * @see {@link CreateDataDeletionJobCommandInput} for command's `input` shape.
 * @see {@link CreateDataDeletionJobCommandOutput} for command's `response` shape.
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
export class CreateDataDeletionJobCommand extends $Command
  .classBuilder<
    CreateDataDeletionJobCommandInput,
    CreateDataDeletionJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "CreateDataDeletionJob", {})
  .n("PersonalizeClient", "CreateDataDeletionJobCommand")
  .sc(CreateDataDeletionJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataDeletionJobRequest;
      output: CreateDataDeletionJobResponse;
    };
    sdk: {
      input: CreateDataDeletionJobCommandInput;
      output: CreateDataDeletionJobCommandOutput;
    };
  };
}
