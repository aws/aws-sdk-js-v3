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
  GetLabelDetectionRequest,
  GetLabelDetectionRequestFilterSensitiveLog,
  GetLabelDetectionResponse,
  GetLabelDetectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetLabelDetectionCommand,
  serializeAws_json1_1GetLabelDetectionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface GetLabelDetectionCommandInput extends GetLabelDetectionRequest {}
export interface GetLabelDetectionCommandOutput extends GetLabelDetectionResponse, __MetadataBearer {}

/**
 * <p>Gets the label detection results of a Amazon Rekognition Video analysis started by <a>StartLabelDetection</a>.  </p>
 *          <p>The label detection operation is started by a call to <a>StartLabelDetection</a> which returns a job identifier (<code>JobId</code>). When
 *       the label detection operation finishes, Amazon Rekognition publishes a completion status to the
 *       Amazon Simple Notification Service topic registered in the initial call to <code>StartlabelDetection</code>. </p>
 *          <p>To get the results of the label detection operation, first check that the status value
 *       published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetLabelDetection</a> and pass the job identifier (<code>JobId</code>) from the
 *       initial call to <code>StartLabelDetection</code>.</p>
 *          <p>
 *             <code>GetLabelDetection</code> returns an array of detected labels
 *         (<code>Labels</code>) sorted by the time the labels were detected. You can also sort by the
 *       label name by specifying <code>NAME</code> for the <code>SortBy</code> input parameter.  If
 *       there is no <code>NAME</code> specified, the default sort is by
 *       timestamp.</p>
 *          <p>You can select how results are aggregated by using the <code>AggregateBy</code> input
 *       parameter. The default aggregation method is <code>TIMESTAMPS</code>. You can also aggregate
 *       by <code>SEGMENTS</code>, which aggregates all instances of labels detected in a given
 *       segment. </p>
 *          <p>The returned Labels array may include the following attributes:</p>
 *          <ul>
 *             <li>
 *                <p>Name - The name of the detected label.</p>
 *             </li>
 *             <li>
 *                <p>Confidence - The level of confidence in the label assigned to a detected object. </p>
 *             </li>
 *             <li>
 *                <p>Parents - The ancestor labels for a detected label. GetLabelDetection returns a hierarchical
 *           taxonomy of detected labels. For example, a detected car might be assigned the label car.
 *           The label car has two parent labels: Vehicle (its parent) and Transportation (its
 *           grandparent). The response includes the all ancestors for a label, where every ancestor is
 *           a unique label. In the previous example, Car, Vehicle, and Transportation are returned as
 *           unique labels in the response. </p>
 *             </li>
 *             <li>
 *                <p> Aliases - Possible Aliases for the label. </p>
 *             </li>
 *             <li>
 *                <p>Categories - The label categories that the detected label belongs to.</p>
 *             </li>
 *             <li>
 *                <p>BoundingBox — Bounding boxes are described for all instances of detected common object labels,
 *         returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing
 *         the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box.</p>
 *             </li>
 *             <li>
 *                <p>Timestamp - Time, in milliseconds from the start of the video, that the label was detected.
 *           For aggregation by <code>SEGMENTS</code>,  the <code>StartTimestampMillis</code>,
 *             <code>EndTimestampMillis</code>, and <code>DurationMillis</code> structures are what
 *           define a segment. Although the “Timestamp” structure is still returned with each label,
 *           its value is set to be the same as <code>StartTimestampMillis</code>.</p>
 *             </li>
 *          </ul>
 *          <p>Timestamp and Bounding box information are returned for detected Instances, only if
 *       aggregation is done by <code>TIMESTAMPS</code>. If aggregating by <code>SEGMENTS</code>,
 *       information about detected instances isn’t returned. </p>
 *          <p>The version of the label model used for the detection is also returned.</p>
 *          <p>
 *             <b>Note <code>DominantColors</code> isn't returned for <code>Instances</code>,
 *         although it is shown as part of the response in the sample seen below.</b>
 *          </p>
 *          <p>Use <code>MaxResults</code> parameter to limit the number of labels returned. If
 *       there are more results than specified in <code>MaxResults</code>, the value of
 *         <code>NextToken</code> in the operation response contains a pagination token for getting the
 *       next set of results. To get the next page of results, call <code>GetlabelDetection</code> and
 *       populate the <code>NextToken</code> request parameter with the token value returned from the
 *       previous call to <code>GetLabelDetection</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetLabelDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetLabelDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetLabelDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLabelDetectionCommandInput} for command's `input` shape.
 * @see {@link GetLabelDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class GetLabelDetectionCommand extends $Command<
  GetLabelDetectionCommandInput,
  GetLabelDetectionCommandOutput,
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

  constructor(readonly input: GetLabelDetectionCommandInput) {
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
  ): Handler<GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLabelDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetLabelDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLabelDetectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLabelDetectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLabelDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLabelDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLabelDetectionCommandOutput> {
    return deserializeAws_json1_1GetLabelDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
