// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DetectCustomLabelsRequest, DetectCustomLabelsResponse } from "../models/models_0";
import { de_DetectCustomLabelsCommand, se_DetectCustomLabelsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectCustomLabelsCommand}.
 */
export interface DetectCustomLabelsCommandInput extends DetectCustomLabelsRequest {}
/**
 * @public
 *
 * The output of {@link DetectCustomLabelsCommand}.
 */
export interface DetectCustomLabelsCommandOutput extends DetectCustomLabelsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. </p>
 *          <p>You specify which version of a model version to use by using the <code>ProjectVersionArn</code> input
 *       parameter. </p>
 *          <p>You pass the input image as base64-encoded image bytes or as a reference to an image in
 *          an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing
 *          image bytes is not supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p> For each object that the model version detects on an image, the API returns a
 *          (<code>CustomLabel</code>) object in an array (<code>CustomLabels</code>).
 *          Each <code>CustomLabel</code> object provides the label name (<code>Name</code>), the level
 *          of confidence that the image contains the object (<code>Confidence</code>), and
 *          object location information, if it exists,  for the label on the image (<code>Geometry</code>). </p>
 *          <p>To filter labels that are returned, specify a value for <code>MinConfidence</code>.
 *          <code>DetectCustomLabelsLabels</code> only returns labels with a confidence that's higher than
 *          the specified value.
 *
 *          The value of <code>MinConfidence</code> maps to the assumed threshold values
 *          created during training. For more information, see <i>Assumed threshold</i>
 *          in the Amazon Rekognition Custom Labels Developer Guide.
 *          Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of
 *          <code>MinConfidence</code> normalizes the threshold value to a percentage value (0-100). Confidence
 *          responses from <code>DetectCustomLabels</code> are also returned as a percentage.
 *          You can use <code>MinConfidence</code> to change the precision and recall or your model.
 *          For more information, see
 *          <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p>
 *          <p>If you don't specify a value for <code>MinConfidence</code>,  <code>DetectCustomLabels</code>
 *       returns labels based on the assumed threshold of each label.</p>
 *          <p>This is a stateless API operation. That is, the operation does not persist any
 *          data.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:DetectCustomLabels</code> action. </p>
 *          <p>For more information, see
 *       <i>Analyzing an image</i> in the Amazon Rekognition Custom Labels Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectCustomLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectCustomLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DetectCustomLabelsRequest
 *   ProjectVersionArn: "STRING_VALUE", // required
 *   Image: { // Image
 *     Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   MinConfidence: Number("float"),
 * };
 * const command = new DetectCustomLabelsCommand(input);
 * const response = await client.send(command);
 * // { // DetectCustomLabelsResponse
 * //   CustomLabels: [ // CustomLabels
 * //     { // CustomLabel
 * //       Name: "STRING_VALUE",
 * //       Confidence: Number("float"),
 * //       Geometry: { // Geometry
 * //         BoundingBox: { // BoundingBox
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         Polygon: [ // Polygon
 * //           { // Point
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectCustomLabelsCommandInput - {@link DetectCustomLabelsCommandInput}
 * @returns {@link DetectCustomLabelsCommandOutput}
 * @see {@link DetectCustomLabelsCommandInput} for command's `input` shape.
 * @see {@link DetectCustomLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ImageTooLargeException} (client fault)
 *  <p>The input image size exceeds the allowed limit. If you are calling
 *       DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more
 *       information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *     </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidImageFormatException} (client fault)
 *  <p>The provided image format is not supported. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @example To detect custom labels in an image with an Amazon Rekognition Custom Labels model
 * ```javascript
 * // Detects custom labels in an image with an Amazon Rekognition Custom Labels model
 * const input = {
 *   Image: {
 *     S3Object: {
 *       Bucket: "custom-labels-console-us-east-1-1111111111",
 *       Name: "assets/flowers_1_test_dataset/camellia4.jpg"
 *     }
 *   },
 *   MaxResults: 100,
 *   MinConfidence: 50,
 *   ProjectVersionArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/my-project.2023-07-31T11.49.37/1690829378219"
 * };
 * const command = new DetectCustomLabelsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomLabels: [
 *     {
 *       Confidence: 67.56399536132812,
 *       Name: "with_leaves"
 *     },
 *     {
 *       Confidence: 50.65699768066406,
 *       Name: "without_leaves"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DetectCustomLabelsCommand extends $Command
  .classBuilder<
    DetectCustomLabelsCommandInput,
    DetectCustomLabelsCommandOutput,
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
  .s("RekognitionService", "DetectCustomLabels", {})
  .n("RekognitionClient", "DetectCustomLabelsCommand")
  .f(void 0, void 0)
  .ser(se_DetectCustomLabelsCommand)
  .de(de_DetectCustomLabelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectCustomLabelsRequest;
      output: DetectCustomLabelsResponse;
    };
    sdk: {
      input: DetectCustomLabelsCommandInput;
      output: DetectCustomLabelsCommandOutput;
    };
  };
}
