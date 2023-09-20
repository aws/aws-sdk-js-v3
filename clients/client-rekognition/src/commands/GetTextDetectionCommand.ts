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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetTextDetectionRequest, GetTextDetectionResponse } from "../models/models_0";
import { de_GetTextDetectionCommand, se_GetTextDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTextDetectionCommand}.
 */
export interface GetTextDetectionCommandInput extends GetTextDetectionRequest {}
/**
 * @public
 *
 * The output of {@link GetTextDetectionCommand}.
 */
export interface GetTextDetectionCommandOutput extends GetTextDetectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the text detection results of a Amazon Rekognition Video analysis started by <a>StartTextDetection</a>.</p>
 *          <p>Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by
 *      calling <a>StartTextDetection</a> which returns a job identifier (<code>JobId</code>)
 *      When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service
 *      topic registered in the initial call to <code>StartTextDetection</code>. To get the results
 *      of the text detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      if so, call <code>GetTextDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call
 *      of <code>StartLabelDetection</code>.</p>
 *          <p>
 *             <code>GetTextDetection</code> returns an array of detected text (<code>TextDetections</code>) sorted by
 *        the time the text was detected, up to 100 words per frame of video.</p>
 *          <p>Each element of the array includes the detected text, the precentage confidence in the acuracy
 *        of the detected text, the time the text was detected, bounding box information for where the text
 *        was located, and unique identifiers for words and their lines.</p>
 *          <p>Use MaxResults parameter to limit the number of text detections returned. If there are more results than
 *      specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains
 *      a pagination token for getting the next set of results. To get the next page of results, call <code>GetTextDetection</code>
 *      and populate the <code>NextToken</code> request parameter with the token value returned from the previous
 *      call to <code>GetTextDetection</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetTextDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetTextDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetTextDetectionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTextDetectionCommand(input);
 * const response = await client.send(command);
 * // { // GetTextDetectionResponse
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
 * //   TextDetections: [ // TextDetectionResults
 * //     { // TextDetectionResult
 * //       Timestamp: Number("long"),
 * //       TextDetection: { // TextDetection
 * //         DetectedText: "STRING_VALUE",
 * //         Type: "LINE" || "WORD",
 * //         Id: Number("int"),
 * //         ParentId: Number("int"),
 * //         Confidence: Number("float"),
 * //         Geometry: { // Geometry
 * //           BoundingBox: { // BoundingBox
 * //             Width: Number("float"),
 * //             Height: Number("float"),
 * //             Left: Number("float"),
 * //             Top: Number("float"),
 * //           },
 * //           Polygon: [ // Polygon
 * //             { // Point
 * //               X: Number("float"),
 * //               Y: Number("float"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TextModelVersion: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Video: { // Video
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * //   JobTag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTextDetectionCommandInput - {@link GetTextDetectionCommandInput}
 * @returns {@link GetTextDetectionCommandOutput}
 * @see {@link GetTextDetectionCommandInput} for command's `input` shape.
 * @see {@link GetTextDetectionCommandOutput} for command's `response` shape.
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
export class GetTextDetectionCommand extends $Command<
  GetTextDetectionCommandInput,
  GetTextDetectionCommandOutput,
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
  constructor(readonly input: GetTextDetectionCommandInput) {
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
  ): Handler<GetTextDetectionCommandInput, GetTextDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTextDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetTextDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "GetTextDetection",
      },
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
  private serialize(input: GetTextDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTextDetectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTextDetectionCommandOutput> {
    return de_GetTextDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
