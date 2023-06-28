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

import { SearchFacesByImageRequest, SearchFacesByImageResponse } from "../models/models_0";
import { de_SearchFacesByImageCommand, se_SearchFacesByImageCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchFacesByImageCommand}.
 */
export interface SearchFacesByImageCommandInput extends SearchFacesByImageRequest {}
/**
 * @public
 *
 * The output of {@link SearchFacesByImageCommand}.
 */
export interface SearchFacesByImageCommandOutput extends SearchFacesByImageResponse, __MetadataBearer {}

/**
 * @public
 * <p>For a given input image, first detects the largest face in the image, and then searches
 *       the specified collection for matching faces. The operation compares the features of the input
 *       face with faces in the specified collection. </p>
 *          <note>
 *             <p>To search for all faces in an input image, you might first call the <a>IndexFaces</a> operation, and then use the face IDs returned in subsequent calls
 *         to the <a>SearchFaces</a> operation. </p>
 *             <p> You can also call the <code>DetectFaces</code> operation and use the bounding boxes
 *         in the response to make face crops, which then you can pass in to the
 *           <code>SearchFacesByImage</code> operation. </p>
 *          </note>
 *          <p>You pass the input image either as base64-encoded image bytes or as a reference to an
 *       image in an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p> The response returns an array of faces that match, ordered by similarity score with
 *       the highest similarity first. More specifically, it is an array of metadata for each face
 *       match found. Along with the metadata, the response also includes a <code>similarity</code>
 *       indicating how similar the face is to the input face. In the response, the operation also
 *       returns the bounding box (and a confidence level that the bounding box contains a face) of the
 *       face that Amazon Rekognition used for the input image. </p>
 *          <p>If no faces are detected in the input image, <code>SearchFacesByImage</code> returns an
 *         <code>InvalidParameterException</code> error. </p>
 *          <p>For an example, Searching for a Face Using an Image in the Amazon Rekognition
 *       Developer Guide.</p>
 *          <p>The <code>QualityFilter</code> input parameter allows you to filter out detected faces
 *       that don’t meet a required quality bar. The quality bar is based on a variety of common use
 *       cases. Use <code>QualityFilter</code> to set the quality bar for filtering by specifying
 *         <code>LOW</code>, <code>MEDIUM</code>, or <code>HIGH</code>. If you do not want to filter
 *       detected faces, specify <code>NONE</code>. The default value is <code>NONE</code>.</p>
 *          <note>
 *             <p>To use quality filtering, you need a collection associated with version 3 of the face
 *         model or higher. To get the version of the face model associated with a collection, call
 *           <a>DescribeCollection</a>. </p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:SearchFacesByImage</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, SearchFacesByImageCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, SearchFacesByImageCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // SearchFacesByImageRequest
 *   CollectionId: "STRING_VALUE", // required
 *   Image: { // Image
 *     Bytes: "BLOB_VALUE",
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   MaxFaces: Number("int"),
 *   FaceMatchThreshold: Number("float"),
 *   QualityFilter: "NONE" || "AUTO" || "LOW" || "MEDIUM" || "HIGH",
 * };
 * const command = new SearchFacesByImageCommand(input);
 * const response = await client.send(command);
 * // { // SearchFacesByImageResponse
 * //   SearchedFaceBoundingBox: { // BoundingBox
 * //     Width: Number("float"),
 * //     Height: Number("float"),
 * //     Left: Number("float"),
 * //     Top: Number("float"),
 * //   },
 * //   SearchedFaceConfidence: Number("float"),
 * //   FaceMatches: [ // FaceMatchList
 * //     { // FaceMatch
 * //       Similarity: Number("float"),
 * //       Face: { // Face
 * //         FaceId: "STRING_VALUE",
 * //         BoundingBox: {
 * //           Width: Number("float"),
 * //           Height: Number("float"),
 * //           Left: Number("float"),
 * //           Top: Number("float"),
 * //         },
 * //         ImageId: "STRING_VALUE",
 * //         ExternalImageId: "STRING_VALUE",
 * //         Confidence: Number("float"),
 * //         IndexFacesModelVersion: "STRING_VALUE",
 * //         UserId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   FaceModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchFacesByImageCommandInput - {@link SearchFacesByImageCommandInput}
 * @returns {@link SearchFacesByImageCommandOutput}
 * @see {@link SearchFacesByImageCommandInput} for command's `input` shape.
 * @see {@link SearchFacesByImageCommandOutput} for command's `response` shape.
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
 * @example To search for faces matching a supplied image
 * ```javascript
 * // This operation searches for faces in a Rekognition collection that match the largest face in an S3 bucket stored image.
 * const input = {
 *   "CollectionId": "myphotos",
 *   "FaceMatchThreshold": 95,
 *   "Image": {
 *     "S3Object": {
 *       "Bucket": "mybucket",
 *       "Name": "myphoto"
 *     }
 *   },
 *   "MaxFaces": 5
 * };
 * const command = new SearchFacesByImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FaceMatches": [
 *     {
 *       "Face": {
 *         "BoundingBox": {
 *           "Height": 0.3234420120716095,
 *           "Left": 0.3233329951763153,
 *           "Top": 0.5,
 *           "Width": 0.24222199618816376
 *         },
 *         "Confidence": 99.99829864501953,
 *         "FaceId": "38271d79-7bc2-5efb-b752-398a8d575b85",
 *         "ImageId": "d5631190-d039-54e4-b267-abd22c8647c5"
 *       },
 *       "Similarity": 99.97036743164062
 *     }
 *   ],
 *   "SearchedFaceBoundingBox": {
 *     "Height": 0.33481481671333313,
 *     "Left": 0.31888890266418457,
 *     "Top": 0.4933333396911621,
 *     "Width": 0.25
 *   },
 *   "SearchedFaceConfidence": 99.9991226196289
 * }
 * *\/
 * // example id: to-search-for-faces-matching-a-supplied-image-1482175994491
 * ```
 *
 */
export class SearchFacesByImageCommand extends $Command<
  SearchFacesByImageCommandInput,
  SearchFacesByImageCommandOutput,
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
  constructor(readonly input: SearchFacesByImageCommandInput) {
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
  ): Handler<SearchFacesByImageCommandInput, SearchFacesByImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchFacesByImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "SearchFacesByImageCommand";
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
  private serialize(input: SearchFacesByImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchFacesByImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchFacesByImageCommandOutput> {
    return de_SearchFacesByImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
