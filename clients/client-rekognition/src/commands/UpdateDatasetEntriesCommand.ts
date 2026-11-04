// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_0";
import { UpdateDatasetEntries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDatasetEntriesCommand}.
 */
export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetEntriesCommand}.
 */
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {}

/**
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the *Amazon Rekognition Custom Labels Developer Guide*.
 *
 * If the `source-ref` field in the JSON line references an existing image, the existing image in the dataset is updated. If `source-ref` field doesn't reference an existing image, the image is added as a new image to the dataset.
 *
 * You specify the changes that you want to make in the `Changes` input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of `Changes` must be less than 5MB.
 *
 * `UpdateDatasetEntries` returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the current status. The dataset updated successfully if the value of `Status` is `UPDATE_COMPLETE`.
 *
 * To check if any non-terminal errors occured, call ListDatasetEntries and check for the presence of `errors` lists in the JSON Lines.
 *
 * Dataset update fails if a terminal error occurs (`Status` = `UPDATE_FAILED`). Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK.
 *
 * This operation requires permissions to perform the `rekognition:UpdateDatasetEntries` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // UpdateDatasetEntriesRequest
 *   DatasetArn: "STRING_VALUE", // required
 *   Changes: { // DatasetChanges
 *     GroundTruth: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *   },
 * };
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatasetEntriesCommandInput - {@link UpdateDatasetEntriesCommandInput}
 * @returns {@link UpdateDatasetEntriesCommandOutput}
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is already being used.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example To-add dataset entries to an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Adds dataset entries to an Amazon Rekognition Custom Labels dataset.
 * const input = {
 *   Changes: {
 *     GroundTruth: `{"source-ref":"s3://custom-labels-console-us-east-1-111111111/assets/flowers_1_test_dataset/mediterranean_spurge4.jpg","mediterranean_spurge":1,"mediterranean_spurge-metadata":{"confidence":1,"job-name":"labeling-job/mediterranean_spurge","class-name":"mediterranean_spurge","human-annotated":"yes","creation-date":"2021-07-11T03:33:42.025Z","type":"groundtruth/image-classification"},"with_leaves":1,"with_leaves-metadata":{"confidence":1,"job-name":"labeling-job/with_leaves","class-name":"with_leaves","human-annotated":"yes","creation-date":"2021-07-11T03:33:42.025Z","type":"groundtruth/image-classification"}}`
 *   },
 *   DatasetArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/train/1690564858106"
 * };
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDatasetEntriesCommand extends command<UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDatasetEntries",
  UpdateDatasetEntries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasetEntriesRequest;
      output: {};
    };
    sdk: {
      input: UpdateDatasetEntriesCommandInput;
      output: UpdateDatasetEntriesCommandOutput;
    };
  };
}
