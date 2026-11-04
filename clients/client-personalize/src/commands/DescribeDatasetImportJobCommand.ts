// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/models_0";
import { DescribeDatasetImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the dataset import job created by [CreateDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html), including the import job status.
 *
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
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class DescribeDatasetImportJobCommand extends command<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDatasetImportJob",
  DescribeDatasetImportJob$
) {
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
