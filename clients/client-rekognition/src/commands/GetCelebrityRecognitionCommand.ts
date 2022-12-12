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
  GetCelebrityRecognitionRequest,
  GetCelebrityRecognitionRequestFilterSensitiveLog,
  GetCelebrityRecognitionResponse,
  GetCelebrityRecognitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCelebrityRecognitionCommand,
  serializeAws_json1_1GetCelebrityRecognitionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface GetCelebrityRecognitionCommandInput extends GetCelebrityRecognitionRequest {}
export interface GetCelebrityRecognitionCommandOutput extends GetCelebrityRecognitionResponse, __MetadataBearer {}

/**
 * <p>Gets the celebrity recognition results for a Amazon Rekognition Video analysis started by
 *      <a>StartCelebrityRecognition</a>.</p>
 *          <p>Celebrity recognition in a video is an asynchronous operation. Analysis is started by a
 *       call to <a>StartCelebrityRecognition</a> which returns a job identifier
 *         (<code>JobId</code>). </p>
 *          <p>When the celebrity recognition operation finishes, Amazon Rekognition Video publishes a completion
 *       status to the Amazon Simple Notification Service topic registered in the initial call to
 *         <code>StartCelebrityRecognition</code>. To get the results of the celebrity recognition
 *       analysis, first check that the status value published to the Amazon SNS topic is
 *         <code>SUCCEEDED</code>. If so, call <code>GetCelebrityDetection</code> and pass the job
 *       identifier (<code>JobId</code>) from the initial call to <code>StartCelebrityDetection</code>. </p>
 *          <p>For more information, see Working With Stored Videos in the Amazon Rekognition Developer Guide.</p>
 *          <p>
 *             <code>GetCelebrityRecognition</code> returns detected celebrities and the time(s) they
 *       are detected in an array (<code>Celebrities</code>) of <a>CelebrityRecognition</a>
 *        objects. Each <code>CelebrityRecognition</code>
 *       contains information about the celebrity in a <a>CelebrityDetail</a> object and the
 *       time, <code>Timestamp</code>, the celebrity was detected.  This <a>CelebrityDetail</a> object stores information about the detected celebrity's face
 *       attributes, a face bounding box, known gender, the celebrity's name, and a confidence
 *       estimate.</p>
 *          <note>
 *             <p>
 *                <code>GetCelebrityRecognition</code> only returns the default facial
 *         attributes (<code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>,
 *           <code>Pose</code>, and <code>Quality</code>). The <code>BoundingBox</code> field only
 *         applies to the detected face instance. The other facial attributes listed in the
 *           <code>Face</code> object of the following response syntax are not returned. For more
 *         information, see FaceDetail in the Amazon Rekognition Developer Guide. </p>
 *          </note>
 *          <p>By default, the <code>Celebrities</code> array is sorted by time (milliseconds from the start of the video).
 *       You can also sort the array by celebrity by specifying the value <code>ID</code> in the <code>SortBy</code> input parameter.</p>
 *          <p>The <code>CelebrityDetail</code> object includes the celebrity identifer and additional information urls. If you don't store
 *       the additional information urls, you can get them later by calling <a>GetCelebrityInfo</a> with the celebrity identifer.</p>
 *          <p>No information is returned for faces not recognized as celebrities.</p>
 *          <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than
 *       specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a
 *       pagination token for getting the next set of results. To get the next page of results, call <code>GetCelebrityDetection</code>
 *       and populate the <code>NextToken</code> request parameter with the token
 *       value returned from the previous call to <code>GetCelebrityRecognition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetCelebrityRecognitionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetCelebrityRecognitionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetCelebrityRecognitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCelebrityRecognitionCommandInput} for command's `input` shape.
 * @see {@link GetCelebrityRecognitionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class GetCelebrityRecognitionCommand extends $Command<
  GetCelebrityRecognitionCommandInput,
  GetCelebrityRecognitionCommandOutput,
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

  constructor(readonly input: GetCelebrityRecognitionCommandInput) {
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
  ): Handler<GetCelebrityRecognitionCommandInput, GetCelebrityRecognitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCelebrityRecognitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetCelebrityRecognitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCelebrityRecognitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCelebrityRecognitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCelebrityRecognitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCelebrityRecognitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCelebrityRecognitionCommandOutput> {
    return deserializeAws_json1_1GetCelebrityRecognitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
