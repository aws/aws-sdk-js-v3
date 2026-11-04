// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/models_0";
import { CreateDatasetImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see [Giving Amazon Personalize Access to Amazon S3 Resources](https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html).
 *
 * If you already created a recommender or deployed a custom solution version with a campaign, how new bulk records influence recommendations depends on the domain use case or recipe that you use. For more information, see [How new data influences real-time recommendations](https://docs.aws.amazon.com/personalize/latest/dg/how-new-data-influences-recommendations.html).
 *
 * > **Important:** By default, a dataset import job replaces any existing data in the dataset that you imported in bulk. To add new records without replacing existing data, specify INCREMENTAL for the import mode in the CreateDatasetImportJob operation.
 *
 * **Status**
 *
 * A dataset import job can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 *
 * To get the status of the import job, call [DescribeDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html), providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a `failureReason` key, which describes why the job failed.
 *
 * > **Note:** Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.
 *
 * **Related APIs**
 *
 * - [ListDatasetImportJobs](https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html)
 * - [DescribeDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateDatasetImportJobRequest
 *   jobName: "STRING_VALUE", // required
 *   datasetArn: "STRING_VALUE", // required
 *   dataSource: { // DataSource
 *     dataLocation: "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE",
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
export class CreateDatasetImportJobCommand extends command<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateDatasetImportJob",
  CreateDatasetImportJob$
) {
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
