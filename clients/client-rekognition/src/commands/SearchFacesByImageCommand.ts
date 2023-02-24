// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  SearchFacesByImageRequest,
  SearchFacesByImageRequestFilterSensitiveLog,
  SearchFacesByImageResponse,
  SearchFacesByImageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SearchFacesByImageCommand,
  serializeAws_json1_1SearchFacesByImageCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface SearchFacesByImageCommandInput extends SearchFacesByImageRequest {}
export interface SearchFacesByImageCommandOutput extends SearchFacesByImageResponse, __MetadataBearer {}

/**
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
 * const command = new SearchFacesByImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFacesByImageCommandInput} for command's `input` shape.
 * @see {@link SearchFacesByImageCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
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
      inputFilterSensitiveLog: SearchFacesByImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchFacesByImageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchFacesByImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchFacesByImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchFacesByImageCommandOutput> {
    return deserializeAws_json1_1SearchFacesByImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
