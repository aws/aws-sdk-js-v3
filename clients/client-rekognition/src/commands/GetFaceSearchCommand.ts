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
  GetFaceSearchRequest,
  GetFaceSearchRequestFilterSensitiveLog,
  GetFaceSearchResponse,
  GetFaceSearchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetFaceSearchCommand,
  serializeAws_json1_1GetFaceSearchCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * The input for {@link GetFaceSearchCommand}.
 */
export interface GetFaceSearchCommandInput extends GetFaceSearchRequest {}
/**
 * The output of {@link GetFaceSearchCommand}.
 */
export interface GetFaceSearchCommandOutput extends GetFaceSearchResponse, __MetadataBearer {}

/**
 * <p>Gets the face search results for Amazon Rekognition Video face search started by
 *       <a>StartFaceSearch</a>. The search returns faces in a collection that match the faces
 *     of persons detected in a video. It also includes the time(s) that faces are matched in the video.</p>
 *          <p>Face search in a video is an asynchronous operation. You start face search by calling
 *       to <a>StartFaceSearch</a> which returns a job identifier (<code>JobId</code>).
 *       When the search operation finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service
 *       topic registered in the initial call to <code>StartFaceSearch</code>.
 *       To get the search results, first check that the status value published to the Amazon SNS
 *       topic is <code>SUCCEEDED</code>. If so, call  <code>GetFaceSearch</code> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>.</p>
 *          <p>For more information, see Searching Faces in a Collection in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>The search results are retured in an array, <code>Persons</code>, of
 *     <a>PersonMatch</a> objects. Each<code>PersonMatch</code> element contains
 *     details about the matching faces in the input collection, person information (facial attributes,
 *     bounding boxes, and person identifer)
 *     for the matched person, and the time the person was matched in the video.</p>
 *          <note>
 *             <p>
 *                <code>GetFaceSearch</code> only returns the default
 *         facial attributes (<code>BoundingBox</code>, <code>Confidence</code>,
 *         <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed
 *         in the <code>Face</code> object of the following response syntax are not returned. For more information,
 *         see FaceDetail in the Amazon Rekognition Developer Guide. </p>
 *          </note>
 *          <p>By default, the <code>Persons</code> array is sorted by the time, in milliseconds from the
 *     start of the video, persons are matched.
 *     You can also sort by persons by specifying <code>INDEX</code> for the <code>SORTBY</code> input
 *     parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceSearchCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceSearchCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetFaceSearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFaceSearchCommandInput} for command's `input` shape.
 * @see {@link GetFaceSearchCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class GetFaceSearchCommand extends $Command<
  GetFaceSearchCommandInput,
  GetFaceSearchCommandOutput,
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

  constructor(readonly input: GetFaceSearchCommandInput) {
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
  ): Handler<GetFaceSearchCommandInput, GetFaceSearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFaceSearchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetFaceSearchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFaceSearchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFaceSearchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFaceSearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFaceSearchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFaceSearchCommandOutput> {
    return deserializeAws_json1_1GetFaceSearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
