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

import { GetLabelDetectionRequest, GetLabelDetectionResponse } from "../models/models_0";
import { de_GetLabelDetectionCommand, se_GetLabelDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLabelDetectionCommand}.
 */
export interface GetLabelDetectionCommandInput extends GetLabelDetectionRequest {}
/**
 * @public
 *
 * The output of {@link GetLabelDetectionCommand}.
 */
export interface GetLabelDetectionCommandOutput extends GetLabelDetectionResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // GetLabelDetectionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "NAME" || "TIMESTAMP",
 *   AggregateBy: "TIMESTAMPS" || "SEGMENTS",
 * };
 * const command = new GetLabelDetectionCommand(input);
 * const response = await client.send(command);
 * // { // GetLabelDetectionResponse
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StatusMessage: "STRING_VALUE",
 * //   VideoMetadata: { // VideoMetadata
 * //     Codec: "STRING_VALUE",
 * //     DurationMillis: Number("long"),
 * //     Format: "STRING_VALUE",
 * //     FrameRate: Number("float"),
 * //     FrameHeight: Number("long"),
 * //     FrameWidth: Number("long"),
 * //     ColorRange: "FULL" || "LIMITED",
 * //   },
 * //   NextToken: "STRING_VALUE",
 * //   Labels: [ // LabelDetections
 * //     { // LabelDetection
 * //       Timestamp: Number("long"),
 * //       Label: { // Label
 * //         Name: "STRING_VALUE",
 * //         Confidence: Number("float"),
 * //         Instances: [ // Instances
 * //           { // Instance
 * //             BoundingBox: { // BoundingBox
 * //               Width: Number("float"),
 * //               Height: Number("float"),
 * //               Left: Number("float"),
 * //               Top: Number("float"),
 * //             },
 * //             Confidence: Number("float"),
 * //             DominantColors: [ // DominantColors
 * //               { // DominantColor
 * //                 Red: Number("int"),
 * //                 Blue: Number("int"),
 * //                 Green: Number("int"),
 * //                 HexCode: "STRING_VALUE",
 * //                 CSSColor: "STRING_VALUE",
 * //                 SimplifiedColor: "STRING_VALUE",
 * //                 PixelPercent: Number("float"),
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Parents: [ // Parents
 * //           { // Parent
 * //             Name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Aliases: [ // LabelAliases
 * //           { // LabelAlias
 * //             Name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Categories: [ // LabelCategories
 * //           { // LabelCategory
 * //             Name: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       StartTimestampMillis: Number("long"),
 * //       EndTimestampMillis: Number("long"),
 * //       DurationMillis: Number("long"),
 * //     },
 * //   ],
 * //   LabelModelVersion: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Video: { // Video
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * //   JobTag: "STRING_VALUE",
 * //   GetRequestMetadata: { // GetLabelDetectionRequestMetadata
 * //     SortBy: "NAME" || "TIMESTAMP",
 * //     AggregateBy: "TIMESTAMPS" || "SEGMENTS",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLabelDetectionCommandInput - {@link GetLabelDetectionCommandInput}
 * @returns {@link GetLabelDetectionCommandOutput}
 * @see {@link GetLabelDetectionCommandInput} for command's `input` shape.
 * @see {@link GetLabelDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
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

  /**
   * @public
   */
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
  private serialize(input: GetLabelDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLabelDetectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLabelDetectionCommandOutput> {
    return de_GetLabelDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
