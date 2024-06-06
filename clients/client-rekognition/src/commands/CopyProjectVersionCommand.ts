// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyProjectVersionRequest, CopyProjectVersionResponse } from "../models/models_0";
import { de_CopyProjectVersionCommand, se_CopyProjectVersionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyProjectVersionCommand}.
 */
export interface CopyProjectVersionCommandInput extends CopyProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link CopyProjectVersionCommand}.
 */
export interface CopyProjectVersionCommandOutput extends CopyProjectVersionResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and
 *          destination projects can be in different AWS accounts but must be in the same AWS Region.
 *          You can't copy a model to another AWS service.
 *
 *       </p>
 *          <p>To copy a model version to a different AWS account, you need to create a resource-based policy known as a
 *          <i>project policy</i>. You attach the project policy to the
 *          source project by calling <a>PutProjectPolicy</a>. The project policy
 *       gives permission to copy the model version from a trusting AWS account to a trusted account.</p>
 *          <p>For more information creating and attaching a project policy, see Attaching a project policy (SDK)
 *          in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *       </p>
 *          <p>If you are copying a model version to a project in the same AWS account, you don't need to create a project policy.</p>
 *          <note>
 *             <p>Copying project versions is supported only for Custom Labels models. </p>
 *             <p>To copy a model, the destination project, source project, and source model version
 *             must already exist.</p>
 *          </note>
 *          <p>Copying a model version takes a while to complete. To get the current status, call <a>DescribeProjectVersions</a> and check the value of <code>Status</code> in the
 *             <a>ProjectVersionDescription</a> object. The copy operation has finished when
 *          the value of <code>Status</code> is <code>COPYING_COMPLETED</code>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:CopyProjectVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CopyProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CopyProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // CopyProjectVersionRequest
 *   SourceProjectArn: "STRING_VALUE", // required
 *   SourceProjectVersionArn: "STRING_VALUE", // required
 *   DestinationProjectArn: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE", // required
 *   OutputConfig: { // OutputConfig
 *     S3Bucket: "STRING_VALUE",
 *     S3KeyPrefix: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KmsKeyId: "STRING_VALUE",
 * };
 * const command = new CopyProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // CopyProjectVersionResponse
 * //   ProjectVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyProjectVersionCommandInput - {@link CopyProjectVersionCommandInput}
 * @returns {@link CopyProjectVersionCommandOutput}
 * @see {@link CopyProjectVersionCommandInput} for command's `input` shape.
 * @see {@link CopyProjectVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 * @example CopyProjectVersion
 * ```javascript
 * // Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project.
 * const input = {
 *   "DestinationProjectArn": "arn:aws:rekognition:us-east-1:555555555555:project/DestinationProject/1656705098765",
 *   "KmsKeyId": "arn:1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "OutputConfig": {
 *     "S3Bucket": "bucket-name",
 *     "S3KeyPrefix": "path_to_folder"
 *   },
 *   "SourceProjectArn": "arn:aws:rekognition:us-east-1:111122223333:project/SourceProject/16565123456",
 *   "SourceProjectVersionArn": "arn:aws:rekognition:us-east-1:111122223333:project/SourceProject/version/model_1/1656611123456",
 *   "Tags": {
 *     "key1": "val1"
 *   },
 *   "VersionName": "DestinationVersionName_cross_account"
 * };
 * const command = new CopyProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProjectVersionArn": "arn:aws:rekognition:us-east-1:555555555555:project/DestinationProject/version/DestinationVersionName_cross_account/16567050987651"
 * }
 * *\/
 * // example id: copyprojectversion-1658203943815
 * ```
 *
 */
export class CopyProjectVersionCommand extends $Command
  .classBuilder<
    CopyProjectVersionCommandInput,
    CopyProjectVersionCommandOutput,
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
  .s("RekognitionService", "CopyProjectVersion", {})
  .n("RekognitionClient", "CopyProjectVersionCommand")
  .f(void 0, void 0)
  .ser(se_CopyProjectVersionCommand)
  .de(de_CopyProjectVersionCommand)
  .build() {}
