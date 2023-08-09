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

import { SearchFacesRequest, SearchFacesResponse } from "../models/models_0";
import { de_SearchFacesCommand, se_SearchFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchFacesCommand}.
 */
export interface SearchFacesCommandInput extends SearchFacesRequest {}
/**
 * @public
 *
 * The output of {@link SearchFacesCommand}.
 */
export interface SearchFacesCommandOutput extends SearchFacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>For a given input face ID, searches for matching faces in the collection the face
 *       belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with
 *       faces in the specified collection. </p>
 *          <note>
 *             <p>You can also search faces without indexing faces by using the
 *           <code>SearchFacesByImage</code> operation.</p>
 *          </note>
 *          <p> The operation response returns an array of faces that match, ordered by similarity
 *       score with the highest similarity first. More specifically, it is an array of metadata for
 *       each face match that is found. Along with the metadata, the response also includes a
 *         <code>confidence</code> value for each face match, indicating the confidence that the
 *       specific face matches the input face. </p>
 *          <p>For an example, see Searching for a face using its face ID in the Amazon Rekognition
 *       Developer Guide.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, SearchFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, SearchFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // SearchFacesRequest
 *   CollectionId: "STRING_VALUE", // required
 *   FaceId: "STRING_VALUE", // required
 *   MaxFaces: Number("int"),
 *   FaceMatchThreshold: Number("float"),
 * };
 * const command = new SearchFacesCommand(input);
 * const response = await client.send(command);
 * // { // SearchFacesResponse
 * //   SearchedFaceId: "STRING_VALUE",
 * //   FaceMatches: [ // FaceMatchList
 * //     { // FaceMatch
 * //       Similarity: Number("float"),
 * //       Face: { // Face
 * //         FaceId: "STRING_VALUE",
 * //         BoundingBox: { // BoundingBox
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
 * @param SearchFacesCommandInput - {@link SearchFacesCommandInput}
 * @returns {@link SearchFacesCommandOutput}
 * @see {@link SearchFacesCommandInput} for command's `input` shape.
 * @see {@link SearchFacesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example To delete a face
 * ```javascript
 * // This operation searches for matching faces in the collection the supplied face belongs to.
 * const input = {
 *   "CollectionId": "myphotos",
 *   "FaceId": "70008e50-75e4-55d0-8e80-363fb73b3a14",
 *   "FaceMatchThreshold": 90,
 *   "MaxFaces": 10
 * };
 * const command = new SearchFacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FaceMatches": [
 *     {
 *       "Face": {
 *         "BoundingBox": {
 *           "Height": 0.3259260058403015,
 *           "Left": 0.5144439935684204,
 *           "Top": 0.15111100673675537,
 *           "Width": 0.24444399774074554
 *         },
 *         "Confidence": 99.99949645996094,
 *         "FaceId": "8be04dba-4e58-520d-850e-9eae4af70eb2",
 *         "ImageId": "465f4e93-763e-51d0-b030-b9667a2d94b1"
 *       },
 *       "Similarity": 99.97222137451172
 *     },
 *     {
 *       "Face": {
 *         "BoundingBox": {
 *           "Height": 0.16555599868297577,
 *           "Left": 0.30963000655174255,
 *           "Top": 0.7066670060157776,
 *           "Width": 0.22074100375175476
 *         },
 *         "Confidence": 100,
 *         "FaceId": "29a75abe-397b-5101-ba4f-706783b2246c",
 *         "ImageId": "147fdf82-7a71-52cf-819b-e786c7b9746e"
 *       },
 *       "Similarity": 97.04154968261719
 *     },
 *     {
 *       "Face": {
 *         "BoundingBox": {
 *           "Height": 0.18888899683952332,
 *           "Left": 0.3783380091190338,
 *           "Top": 0.2355560064315796,
 *           "Width": 0.25222599506378174
 *         },
 *         "Confidence": 99.9999008178711,
 *         "FaceId": "908544ad-edc3-59df-8faf-6a87cc256cf5",
 *         "ImageId": "3c731605-d772-541a-a5e7-0375dbc68a07"
 *       },
 *       "Similarity": 95.94520568847656
 *     }
 *   ],
 *   "SearchedFaceId": "70008e50-75e4-55d0-8e80-363fb73b3a14"
 * }
 * *\/
 * // example id: to-delete-a-face-1482182799377
 * ```
 *
 */
export class SearchFacesCommand extends $Command<
  SearchFacesCommandInput,
  SearchFacesCommandOutput,
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
  constructor(readonly input: SearchFacesCommandInput) {
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
  ): Handler<SearchFacesCommandInput, SearchFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchFacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "SearchFacesCommand";
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
  private serialize(input: SearchFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchFacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchFacesCommandOutput> {
    return de_SearchFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
