// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DistributeDatasetEntriesRequest, DistributeDatasetEntriesResponse } from "../models/models_0";
import { DistributeDatasetEntries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DistributeDatasetEntriesCommand}.
 */
export interface DistributeDatasetEntriesCommandInput extends DistributeDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link DistributeDatasetEntriesCommand}.
 */
export interface DistributeDatasetEntriesCommandOutput extends DistributeDatasetEntriesResponse, __MetadataBearer {}

/**
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. `DistributeDatasetEntries` moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image.
 *
 * You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call CreateDataset.
 *
 * Distributing a dataset takes a while to complete. To check the status call `DescribeDataset`. The operation is complete when the `Status` field for the training dataset and the test dataset is `UPDATE_COMPLETE`. If the dataset split fails, the value of `Status` is `UPDATE_FAILED`.
 *
 * This operation requires permissions to perform the `rekognition:DistributeDatasetEntries` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DistributeDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DistributeDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DistributeDatasetEntriesRequest
 *   Datasets: [ // DistributeDatasetMetadataList // required
 *     { // DistributeDataset
 *       Arn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DistributeDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DistributeDatasetEntriesCommandInput - {@link DistributeDatasetEntriesCommandInput}
 * @returns {@link DistributeDatasetEntriesCommandOutput}
 * @see {@link DistributeDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link DistributeDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *
 * The requested resource isn't ready. For example, this exception occurs when you call `DetectCustomLabels` with a model version that isn't deployed.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example To distribute an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Distributes an Amazon Rekognition Custom Labels training dataset to a test dataset.
 * const input = {
 *   Datasets: [
 *     {
 *       Arn: "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/train/1690564858106"
 *     },
 *     {
 *       Arn: "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/test/1690564858106"
 *     }
 *   ]
 * };
 * const command = new DistributeDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DistributeDatasetEntriesCommand extends command<DistributeDatasetEntriesCommandInput, DistributeDatasetEntriesCommandOutput>(
  _ep0,
  _mw0,
  "DistributeDatasetEntries",
  DistributeDatasetEntries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DistributeDatasetEntriesRequest;
      output: {};
    };
    sdk: {
      input: DistributeDatasetEntriesCommandInput;
      output: DistributeDatasetEntriesCommandOutput;
    };
  };
}
