// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CompareFacesRequest, CompareFacesResponse } from "../models/models_0";
import { de_CompareFacesCommand, se_CompareFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CompareFacesCommand}.
 */
export interface CompareFacesCommandInput extends CompareFacesRequest {}
/**
 * @public
 *
 * The output of {@link CompareFacesCommand}.
 */
export interface CompareFacesCommandOutput extends CompareFacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Compares a face in the <i>source</i> input image with each of the 100
 *       largest faces detected in the <i>target</i> input image. </p>
 *          <p> If the source image contains multiple faces, the service detects the largest face and
 *       compares it with each face detected in the target image. </p>
 *          <note>
 *             <p>CompareFaces uses machine learning algorithms, which are probabilistic. A false negative
 *         is an incorrect prediction that a face in the target image has a low similarity confidence
 *         score when compared to the face in the source image. To reduce the probability of false
 *         negatives, we recommend that you compare the target image against multiple source images. If
 *         you plan to use <code>CompareFaces</code> to make a decision that impacts an individual's
 *         rights, privacy, or access to services, we recommend that you pass the result to a human for
 *         review and further validation before taking action.</p>
 *          </note>
 *          <p>You pass the input and target images either as base64-encoded image bytes or as
 *       references to images in an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes isn't
 *       supported. The image must be formatted as a PNG or JPEG file. </p>
 *          <p>In response, the operation returns an array of face matches ordered by similarity score
 *       in descending order. For each face match, the response provides a bounding box of the face,
 *       facial landmarks, pose details (pitch, roll, and yaw), quality (brightness and sharpness), and
 *       confidence value (indicating the level of confidence that the bounding box contains a face).
 *       The response also provides a similarity score, which indicates how closely the faces match. </p>
 *          <note>
 *             <p>By default, only faces with a similarity score of greater than or equal to 80% are
 *         returned in the response. You can change this value by specifying the
 *           <code>SimilarityThreshold</code> parameter.</p>
 *          </note>
 *          <p>
 *             <code>CompareFaces</code> also returns an array of faces that don't match the source
 *       image. For each face, it returns a bounding box, confidence value, landmarks, pose details,
 *       and quality. The response also returns information about the face in the source image,
 *       including the bounding box of the face and confidence value.</p>
 *          <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces
 *       that don’t meet a required quality bar. The quality bar is based on a variety of common use
 *       cases. Use <code>QualityFilter</code> to set the quality bar by specifying <code>LOW</code>,
 *         <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter detected faces,
 *       specify <code>NONE</code>. The default value is <code>NONE</code>. </p>
 *          <p>If the image doesn't contain Exif metadata, <code>CompareFaces</code> returns
 *       orientation information for the source and target images. Use these values to display the
 *       images with the correct image orientation.</p>
 *          <p>If no faces are detected in the source or target images, <code>CompareFaces</code>
 *       returns an <code>InvalidParameterException</code> error. </p>
 *          <note>
 *             <p> This is a stateless API operation. That is, data returned by this operation doesn't
 *         persist.</p>
 *          </note>
 *          <p>For an example, see Comparing Faces in Images in the Amazon Rekognition Developer
 *       Guide.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:CompareFaces</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CompareFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CompareFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // CompareFacesRequest
 *   SourceImage: { // Image
 *     Bytes: "BLOB_VALUE",
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   TargetImage: {
 *     Bytes: "BLOB_VALUE",
 *     S3Object: {
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   SimilarityThreshold: Number("float"),
 *   QualityFilter: "NONE" || "AUTO" || "LOW" || "MEDIUM" || "HIGH",
 * };
 * const command = new CompareFacesCommand(input);
 * const response = await client.send(command);
 * // { // CompareFacesResponse
 * //   SourceImageFace: { // ComparedSourceImageFace
 * //     BoundingBox: { // BoundingBox
 * //       Width: Number("float"),
 * //       Height: Number("float"),
 * //       Left: Number("float"),
 * //       Top: Number("float"),
 * //     },
 * //     Confidence: Number("float"),
 * //   },
 * //   FaceMatches: [ // CompareFacesMatchList
 * //     { // CompareFacesMatch
 * //       Similarity: Number("float"),
 * //       Face: { // ComparedFace
 * //         BoundingBox: {
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         Confidence: Number("float"),
 * //         Landmarks: [ // Landmarks
 * //           { // Landmark
 * //             Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //         Pose: { // Pose
 * //           Roll: Number("float"),
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //         },
 * //         Quality: { // ImageQuality
 * //           Brightness: Number("float"),
 * //           Sharpness: Number("float"),
 * //         },
 * //         Emotions: [ // Emotions
 * //           { // Emotion
 * //             Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //         Smile: { // Smile
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   UnmatchedFaces: [ // CompareFacesUnmatchList
 * //     {
 * //       BoundingBox: "<BoundingBox>",
 * //       Confidence: Number("float"),
 * //       Landmarks: [
 * //         {
 * //           Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //           X: Number("float"),
 * //           Y: Number("float"),
 * //         },
 * //       ],
 * //       Pose: {
 * //         Roll: Number("float"),
 * //         Yaw: Number("float"),
 * //         Pitch: Number("float"),
 * //       },
 * //       Quality: {
 * //         Brightness: Number("float"),
 * //         Sharpness: Number("float"),
 * //       },
 * //       Emotions: [
 * //         {
 * //           Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //           Confidence: Number("float"),
 * //         },
 * //       ],
 * //       Smile: {
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   SourceImageOrientationCorrection: "ROTATE_0" || "ROTATE_90" || "ROTATE_180" || "ROTATE_270",
 * //   TargetImageOrientationCorrection: "ROTATE_0" || "ROTATE_90" || "ROTATE_180" || "ROTATE_270",
 * // };
 *
 * ```
 *
 * @param CompareFacesCommandInput - {@link CompareFacesCommandInput}
 * @returns {@link CompareFacesCommandOutput}
 * @see {@link CompareFacesCommandInput} for command's `input` shape.
 * @see {@link CompareFacesCommandOutput} for command's `response` shape.
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
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example To compare two images
 * ```javascript
 * // This operation compares the largest face detected in the source image with each face detected in the target image.
 * const input = {
 *   "SimilarityThreshold": 90,
 *   "SourceImage": {
 *     "S3Object": {
 *       "Bucket": "mybucket",
 *       "Name": "mysourceimage"
 *     }
 *   },
 *   "TargetImage": {
 *     "S3Object": {
 *       "Bucket": "mybucket",
 *       "Name": "mytargetimage"
 *     }
 *   }
 * };
 * const command = new CompareFacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FaceMatches": [
 *     {
 *       "Face": {
 *         "BoundingBox": {
 *           "Height": 0.33481481671333313,
 *           "Left": 0.31888890266418457,
 *           "Top": 0.4933333396911621,
 *           "Width": 0.25
 *         },
 *         "Confidence": 99.9991226196289
 *       },
 *       "Similarity": 100
 *     }
 *   ],
 *   "SourceImageFace": {
 *     "BoundingBox": {
 *       "Height": 0.33481481671333313,
 *       "Left": 0.31888890266418457,
 *       "Top": 0.4933333396911621,
 *       "Width": 0.25
 *     },
 *     "Confidence": 99.9991226196289
 *   }
 * }
 * *\/
 * // example id: to-compare-two-images-1482181985581
 * ```
 *
 */
export class CompareFacesCommand extends $Command<
  CompareFacesCommandInput,
  CompareFacesCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CompareFacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CompareFacesCommandInput, CompareFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CompareFacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CompareFacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CompareFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CompareFacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompareFacesCommandOutput> {
    return de_CompareFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
