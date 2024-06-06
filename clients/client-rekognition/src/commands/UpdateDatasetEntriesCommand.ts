// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_1";
import { de_UpdateDatasetEntriesCommand, se_UpdateDatasetEntriesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the
 *       information for a single image,  including
 *       the image location, assigned labels, and object location bounding boxes.  For more information,
 *       see Image-Level labels in manifest files and Object localization in manifest files in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *      </p>
 *          <p>If the <code>source-ref</code> field in the JSON line references an existing image, the existing image in the dataset
 *       is updated.
 *       If <code>source-ref</code> field doesn't reference an existing image, the image is added as a new image to the dataset. </p>
 *          <p>You specify the changes that you want to make in the <code>Changes</code> input parameter.
 *     There isn't a limit to the number JSON Lines that you can change, but the size of <code>Changes</code> must be less
 * than 5MB.</p>
 *          <p>
 *             <code>UpdateDatasetEntries</code> returns immediatly, but the dataset update might take a while to complete.
 *       Use <a>DescribeDataset</a> to check the
 *       current status. The dataset updated successfully if the value of <code>Status</code> is
 *       <code>UPDATE_COMPLETE</code>. </p>
 *          <p>To check if any non-terminal errors occured, call <a>ListDatasetEntries</a>
 *       and check for the presence of <code>errors</code> lists in the JSON Lines.</p>
 *          <p>Dataset update fails if a terminal error occurs (<code>Status</code> = <code>UPDATE_FAILED</code>).
 *       Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK.
 *    </p>
 *          <p>This operation requires permissions to perform the <code>rekognition:UpdateDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
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
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs
 *             concurrently, subsequent calls to start operations (ex:
 *             <code>StartLabelDetection</code>) will raise a <code>LimitExceededException</code>
 *             exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *             the Amazon Rekognition service limit. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 * @example To-add dataset entries to an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Adds dataset entries to an Amazon Rekognition Custom Labels dataset.
 * const input = {
 *   "Changes": {
 *     "GroundTruth": "{\"source-ref\":\"s3://custom-labels-console-us-east-1-111111111/assets/flowers_1_test_dataset/mediterranean_spurge4.jpg\",\"mediterranean_spurge\":1,\"mediterranean_spurge-metadata\":{\"confidence\":1,\"job-name\":\"labeling-job/mediterranean_spurge\",\"class-name\":\"mediterranean_spurge\",\"human-annotated\":\"yes\",\"creation-date\":\"2021-07-11T03:33:42.025Z\",\"type\":\"groundtruth/image-classification\"},\"with_leaves\":1,\"with_leaves-metadata\":{\"confidence\":1,\"job-name\":\"labeling-job/with_leaves\",\"class-name\":\"with_leaves\",\"human-annotated\":\"yes\",\"creation-date\":\"2021-07-11T03:33:42.025Z\",\"type\":\"groundtruth/image-classification\"}}"
 *   },
 *   "DatasetArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-proj-2/dataset/train/1690564858106"
 * };
 * const command = new UpdateDatasetEntriesCommand(input);
 * await client.send(command);
 * // example id: to-add-dataset-entries-to-an-amazon-rekognition-custom-labels-dataset-1690816977073
 * ```
 *
 */
export class UpdateDatasetEntriesCommand extends $Command
  .classBuilder<
    UpdateDatasetEntriesCommandInput,
    UpdateDatasetEntriesCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "UpdateDatasetEntries", {})
  .n("RekognitionClient", "UpdateDatasetEntriesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDatasetEntriesCommand)
  .de(de_UpdateDatasetEntriesCommand)
  .build() {}
