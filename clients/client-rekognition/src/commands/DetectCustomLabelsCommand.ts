// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetectCustomLabelsRequest, DetectCustomLabelsResponse } from "../models/models_0";
import { DetectCustomLabels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model.
 *
 * You specify which version of a model version to use by using the `ProjectVersionArn` input parameter.
 *
 * You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file.
 *
 * For each object that the model version detects on an image, the API returns a (`CustomLabel`) object in an array (`CustomLabels`). Each `CustomLabel` object provides the label name (`Name`), the level of confidence that the image contains the object (`Confidence`), and object location information, if it exists, for the label on the image (`Geometry`).
 *
 * To filter labels that are returned, specify a value for `MinConfidence`. `DetectCustomLabelsLabels` only returns labels with a confidence that's higher than the specified value. The value of `MinConfidence` maps to the assumed threshold values created during training. For more information, see *Assumed threshold* in the Amazon Rekognition Custom Labels Developer Guide. Amazon Rekognition Custom Labels metrics expresses an assumed threshold as a floating point value between 0-1. The range of `MinConfidence` normalizes the threshold value to a percentage value (0-100). Confidence responses from `DetectCustomLabels` are also returned as a percentage. You can use `MinConfidence` to change the precision and recall or your model. For more information, see *Analyzing an image* in the Amazon Rekognition Custom Labels Developer Guide.
 *
 * If you don't specify a value for `MinConfidence`, `DetectCustomLabels` returns labels based on the assumed threshold of each label.
 *
 * This is a stateless API operation. That is, the operation does not persist any data.
 *
 * This operation requires permissions to perform the `rekognition:DetectCustomLabels` action.
 *
 * For more information, see *Analyzing an image* in the Amazon Rekognition Custom Labels Developer Guide.
 *
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
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link ImageTooLargeException} (client fault)
 *
 * The input image size exceeds the allowed limit. If you are calling DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidImageFormatException} (client fault)
 *
 * The provided image format is not supported.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *
 * Amazon Rekognition is unable to access the S3 object specified in the request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
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
export class DetectCustomLabelsCommand extends command<DetectCustomLabelsCommandInput, DetectCustomLabelsCommandOutput>(
  _ep0,
  _mw0,
  "DetectCustomLabels",
  DetectCustomLabels$
) {
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
