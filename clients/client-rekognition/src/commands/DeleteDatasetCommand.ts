// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import { de_DeleteDatasetCommand, se_DeleteDatasetCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandOutput extends DeleteDatasetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Deletes an existing Amazon Rekognition Custom Labels dataset.
 *    Deleting a dataset might take while. Use <a>DescribeDataset</a> to check the
 *    current status. The dataset is still deleting if the value of <code>Status</code> is
 *    <code>DELETE_IN_PROGRESS</code>. If you try to access the dataset after it is deleted, you get
 *    a <code>ResourceNotFoundException</code> exception.
 *
 * </p>
 *          <p>You can't delete a dataset while it is creating (<code>Status</code> =  <code>CREATE_IN_PROGRESS</code>)
 *       or if the dataset is updating (<code>Status</code> =  <code>UPDATE_IN_PROGRESS</code>).</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DeleteDataset</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteDatasetCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteDatasetCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DeleteDatasetRequest
 *   DatasetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetCommandInput - {@link DeleteDatasetCommandInput}
 * @returns {@link DeleteDatasetCommandOutput}
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
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
 *
 * @example To delete an Amazon Rekognition Custom Labels dataset
 * ```javascript
 * // Deletes an Amazon Rekognition Custom Labels dataset.
 * const input = {
 *   DatasetArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-project/dataset/test/1690556733321"
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDatasetCommand extends $Command
  .classBuilder<
    DeleteDatasetCommandInput,
    DeleteDatasetCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "DeleteDataset", {})
  .n("RekognitionClient", "DeleteDatasetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDatasetCommand)
  .de(de_DeleteDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetCommandInput;
      output: DeleteDatasetCommandOutput;
    };
  };
}
