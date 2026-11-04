// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataDeletionJobRequest, CreateDataDeletionJobResponse } from "../models/models_0";
import { CreateDataDeletionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a batch job that deletes all references to specific users from an Amazon Personalize dataset group in batches. You specify the users to delete in a CSV file of userIds in an Amazon S3 bucket. After a job completes, Amazon Personalize no longer trains on the users’ data and no longer considers the users when generating user segments. For more information about creating a data deletion job, see [Deleting users](https://docs.aws.amazon.com/personalize/latest/dg/delete-records.html).
 *
 * - Your input file must be a CSV file with a single USER_ID column that lists the users IDs. For more information about preparing the CSV file, see [Preparing your data deletion file and uploading it to Amazon S3](https://docs.aws.amazon.com/personalize/latest/dg/prepare-deletion-input-file.html).
 * - To give Amazon Personalize permission to access your input CSV file of userIds, you must specify an IAM service role that has permission to read from the data source. This role needs `GetObject` and `ListBucket` permissions for the bucket and its content. These permissions are the same as importing data. For information on granting access to your Amazon S3 bucket, see [Giving Amazon Personalize Access to Amazon S3 Resources](https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html).
 *
 * After you create a job, it can take up to a day to delete all references to the users from datasets and models. Until the job completes, Amazon Personalize continues to use the data when training. And if you use a User Segmentation recipe, the users might appear in user segments.
 *
 * **Status**
 *
 * A data deletion job can have one of the following statuses:
 *
 * - PENDING > IN_PROGRESS > COMPLETED -or- FAILED
 *
 * To get the status of the data deletion job, call [DescribeDataDeletionJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html) API operation and specify the Amazon Resource Name (ARN) of the job. If the status is FAILED, the response includes a `failureReason` key, which describes why the job failed.
 *
 * **Related APIs**
 *
 * - [ListDataDeletionJobs](https://docs.aws.amazon.com/personalize/latest/dg/API_ListDataDeletionJobs.html)
 * - [DescribeDataDeletionJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataDeletionJob.html)
 *
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class CreateDataDeletionJobCommand extends command<CreateDataDeletionJobCommandInput, CreateDataDeletionJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataDeletionJob",
  CreateDataDeletionJob$
) {
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
