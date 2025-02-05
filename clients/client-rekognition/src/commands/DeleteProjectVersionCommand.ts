// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProjectVersionRequest, DeleteProjectVersionResponse } from "../models/models_0";
import { de_DeleteProjectVersionCommand, se_DeleteProjectVersionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProjectVersionCommand}.
 */
export interface DeleteProjectVersionCommandInput extends DeleteProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectVersionCommand}.
 */
export interface DeleteProjectVersionCommandOutput extends DeleteProjectVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a custom
 *          adapter.</p>
 *          <p>You can't delete a project version if it is running or if it is training. To check
 *          the status of a project version, use the Status field returned from <a>DescribeProjectVersions</a>. To stop a project version call <a>StopProjectVersion</a>. If the project version is training, wait until it
 *          finishes.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:DeleteProjectVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RekognitionClient(config);
 * const input = { // DeleteProjectVersionRequest
 *   ProjectVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProjectVersionResponse
 * //   Status: "TRAINING_IN_PROGRESS" || "TRAINING_COMPLETED" || "TRAINING_FAILED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING" || "COPYING_IN_PROGRESS" || "COPYING_COMPLETED" || "COPYING_FAILED" || "DEPRECATED" || "EXPIRED",
 * // };
 *
 * ```
 *
 * @param DeleteProjectVersionCommandInput - {@link DeleteProjectVersionCommandInput}
 * @returns {@link DeleteProjectVersionCommandOutput}
 * @see {@link DeleteProjectVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectVersionCommandOutput} for command's `response` shape.
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
 * @example To delete an Amazon Rekognition Custom Labels model
 * ```javascript
 * // Deletes a version of an Amazon Rekognition Custom Labels model.
 * const input = {
 *   "ProjectVersionArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958"
 * };
 * const command = new DeleteProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Status": "DELETING"
 * }
 * *\/
 * // example id: to-delete-an-amazon-rekognition-custom-labels-model-1690827562055
 * ```
 *
 */
export class DeleteProjectVersionCommand extends $Command
  .classBuilder<
    DeleteProjectVersionCommandInput,
    DeleteProjectVersionCommandOutput,
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
  .s("RekognitionService", "DeleteProjectVersion", {})
  .n("RekognitionClient", "DeleteProjectVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProjectVersionCommand)
  .de(de_DeleteProjectVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectVersionRequest;
      output: DeleteProjectVersionResponse;
    };
    sdk: {
      input: DeleteProjectVersionCommandInput;
      output: DeleteProjectVersionCommandOutput;
    };
  };
}
