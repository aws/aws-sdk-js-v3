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

import { SearchUsersByImageRequest, SearchUsersByImageResponse } from "../models/models_0";
import { de_SearchUsersByImageCommand, se_SearchUsersByImageCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchUsersByImageCommand}.
 */
export interface SearchUsersByImageCommandInput extends SearchUsersByImageRequest {}
/**
 * @public
 *
 * The output of {@link SearchUsersByImageCommand}.
 */
export interface SearchUsersByImageCommandOutput extends SearchUsersByImageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for UserIDs using a supplied image. It first detects the largest face in the
 *       image, and then searches a specified collection for matching UserIDs. </p>
 *          <p>The operation returns an array of UserIDs that match the face in the supplied image,
 *       ordered by similarity score with the highest similarity first. It also returns a bounding box
 *       for the face found in the input image. </p>
 *          <p>Information about faces detected in the supplied image, but not used for the search, is
 *       returned in an array of <code>UnsearchedFace</code> objects. If no valid face is detected
 *       in the image, the response will contain an empty <code>UserMatches</code> list and no
 *       <code>SearchedFace</code> object. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, SearchUsersByImageCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, SearchUsersByImageCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // SearchUsersByImageRequest
 *   CollectionId: "STRING_VALUE", // required
 *   Image: { // Image
 *     Bytes: "BLOB_VALUE",
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   UserMatchThreshold: Number("float"),
 *   MaxUsers: Number("int"),
 *   QualityFilter: "NONE" || "AUTO" || "LOW" || "MEDIUM" || "HIGH",
 * };
 * const command = new SearchUsersByImageCommand(input);
 * const response = await client.send(command);
 * // { // SearchUsersByImageResponse
 * //   UserMatches: [ // UserMatchList
 * //     { // UserMatch
 * //       Similarity: Number("float"),
 * //       User: { // MatchedUser
 * //         UserId: "STRING_VALUE",
 * //         UserStatus: "ACTIVE" || "UPDATING" || "CREATING" || "CREATED",
 * //       },
 * //     },
 * //   ],
 * //   FaceModelVersion: "STRING_VALUE",
 * //   SearchedFace: { // SearchedFaceDetails
 * //     FaceDetail: { // FaceDetail
 * //       BoundingBox: { // BoundingBox
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //       AgeRange: { // AgeRange
 * //         Low: Number("int"),
 * //         High: Number("int"),
 * //       },
 * //       Smile: { // Smile
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Eyeglasses: { // Eyeglasses
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Sunglasses: { // Sunglasses
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Gender: { // Gender
 * //         Value: "Male" || "Female",
 * //         Confidence: Number("float"),
 * //       },
 * //       Beard: { // Beard
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Mustache: { // Mustache
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       EyesOpen: { // EyeOpen
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       MouthOpen: { // MouthOpen
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       Emotions: [ // Emotions
 * //         { // Emotion
 * //           Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //           Confidence: Number("float"),
 * //         },
 * //       ],
 * //       Landmarks: [ // Landmarks
 * //         { // Landmark
 * //           Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //           X: Number("float"),
 * //           Y: Number("float"),
 * //         },
 * //       ],
 * //       Pose: { // Pose
 * //         Roll: Number("float"),
 * //         Yaw: Number("float"),
 * //         Pitch: Number("float"),
 * //       },
 * //       Quality: { // ImageQuality
 * //         Brightness: Number("float"),
 * //         Sharpness: Number("float"),
 * //       },
 * //       Confidence: Number("float"),
 * //       FaceOccluded: { // FaceOccluded
 * //         Value: true || false,
 * //         Confidence: Number("float"),
 * //       },
 * //       EyeDirection: { // EyeDirection
 * //         Yaw: Number("float"),
 * //         Pitch: Number("float"),
 * //         Confidence: Number("float"),
 * //       },
 * //     },
 * //   },
 * //   UnsearchedFaces: [ // UnsearchedFacesList
 * //     { // UnsearchedFace
 * //       FaceDetails: {
 * //         BoundingBox: {
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         AgeRange: {
 * //           Low: Number("int"),
 * //           High: Number("int"),
 * //         },
 * //         Smile: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Eyeglasses: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Sunglasses: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Gender: {
 * //           Value: "Male" || "Female",
 * //           Confidence: Number("float"),
 * //         },
 * //         Beard: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Mustache: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         EyesOpen: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         MouthOpen: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         Emotions: [
 * //           {
 * //             Type: "HAPPY" || "SAD" || "ANGRY" || "CONFUSED" || "DISGUSTED" || "SURPRISED" || "CALM" || "UNKNOWN" || "FEAR",
 * //             Confidence: Number("float"),
 * //           },
 * //         ],
 * //         Landmarks: [
 * //           {
 * //             Type: "eyeLeft" || "eyeRight" || "nose" || "mouthLeft" || "mouthRight" || "leftEyeBrowLeft" || "leftEyeBrowRight" || "leftEyeBrowUp" || "rightEyeBrowLeft" || "rightEyeBrowRight" || "rightEyeBrowUp" || "leftEyeLeft" || "leftEyeRight" || "leftEyeUp" || "leftEyeDown" || "rightEyeLeft" || "rightEyeRight" || "rightEyeUp" || "rightEyeDown" || "noseLeft" || "noseRight" || "mouthUp" || "mouthDown" || "leftPupil" || "rightPupil" || "upperJawlineLeft" || "midJawlineLeft" || "chinBottom" || "midJawlineRight" || "upperJawlineRight",
 * //             X: Number("float"),
 * //             Y: Number("float"),
 * //           },
 * //         ],
 * //         Pose: {
 * //           Roll: Number("float"),
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //         },
 * //         Quality: {
 * //           Brightness: Number("float"),
 * //           Sharpness: Number("float"),
 * //         },
 * //         Confidence: Number("float"),
 * //         FaceOccluded: {
 * //           Value: true || false,
 * //           Confidence: Number("float"),
 * //         },
 * //         EyeDirection: {
 * //           Yaw: Number("float"),
 * //           Pitch: Number("float"),
 * //           Confidence: Number("float"),
 * //         },
 * //       },
 * //       Reasons: [ // UnsearchedFaceReasons
 * //         "FACE_NOT_LARGEST" || "EXCEEDS_MAX_FACES" || "EXTREME_POSE" || "LOW_BRIGHTNESS" || "LOW_SHARPNESS" || "LOW_CONFIDENCE" || "SMALL_BOUNDING_BOX" || "LOW_FACE_QUALITY",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchUsersByImageCommandInput - {@link SearchUsersByImageCommandInput}
 * @returns {@link SearchUsersByImageCommandOutput}
 * @see {@link SearchUsersByImageCommandInput} for command's `input` shape.
 * @see {@link SearchUsersByImageCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example SearchUsersByImage
 * ```javascript
 * // Searches for UserIDs using a supplied image.
 * const input = {
 *   "CollectionId": "MyCollection",
 *   "Image": {
 *     "S3Object": {
 *       "Bucket": "bucket",
 *       "Name": "input.jpg"
 *     }
 *   },
 *   "MaxUsers": 2,
 *   "QualityFilter": "MEDIUM",
 *   "UserMatchThreshold": 70
 * };
 * const command = new SearchUsersByImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FaceModelVersion": "6",
 *   "SearchedFace": {
 *     "FaceDetail": {
 *       "BoundingBox": {
 *         "Height": 0.07510016113519669,
 *         "Left": 0.3598678708076477,
 *         "Top": 0.5391526818275452,
 *         "Width": 0.03692837432026863
 *       }
 *     }
 *   },
 *   "UnsearchedFaces": [
 *     {
 *       "FaceDetails": {
 *         "BoundingBox": {
 *           "Height": 0.0682177022099495,
 *           "Left": 0.6102562546730042,
 *           "Top": 0.5593535900115967,
 *           "Width": 0.031677018851041794
 *         }
 *       },
 *       "Reasons": [
 *         "FACE_NOT_LARGEST"
 *       ]
 *     },
 *     {
 *       "FaceDetails": {
 *         "BoundingBox": {
 *           "Height": 0.06347997486591339,
 *           "Left": 0.516062319278717,
 *           "Top": 0.6080358028411865,
 *           "Width": 0.03254449740052223
 *         }
 *       },
 *       "Reasons": [
 *         "FACE_NOT_LARGEST"
 *       ]
 *     }
 *   ],
 *   "UserMatches": [
 *     {
 *       "Similarity": 99.88186645507812,
 *       "User": {
 *         "UserId": "demoUser1",
 *         "UserStatus": "ACTIVE"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: searchusersbyimage-1686183178610
 * ```
 *
 */
export class SearchUsersByImageCommand extends $Command<
  SearchUsersByImageCommandInput,
  SearchUsersByImageCommandOutput,
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
  constructor(readonly input: SearchUsersByImageCommandInput) {
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
  ): Handler<SearchUsersByImageCommandInput, SearchUsersByImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchUsersByImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "SearchUsersByImageCommand";
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
  private serialize(input: SearchUsersByImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchUsersByImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchUsersByImageCommandOutput> {
    return de_SearchUsersByImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
