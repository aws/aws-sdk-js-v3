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

import { GetSegmentDetectionRequest, GetSegmentDetectionResponse } from "../models/models_0";
import { de_GetSegmentDetectionCommand, se_GetSegmentDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSegmentDetectionCommand}.
 */
export interface GetSegmentDetectionCommandInput extends GetSegmentDetectionRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentDetectionCommand}.
 */
export interface GetSegmentDetectionCommandOutput extends GetSegmentDetectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the segment detection results of a Amazon Rekognition Video analysis started by <a>StartSegmentDetection</a>.</p>
 *          <p>Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by
 *       calling <a>StartSegmentDetection</a> which returns a job identifier (<code>JobId</code>).
 *       When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service
 *       topic registered in the initial call to <code>StartSegmentDetection</code>. To get the results
 *       of the segment detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *       if so, call <code>GetSegmentDetection</code> and pass the job identifier (<code>JobId</code>) from the initial call
 *       of <code>StartSegmentDetection</code>.</p>
 *          <p>
 *             <code>GetSegmentDetection</code> returns detected segments in an array (<code>Segments</code>)
 *       of <a>SegmentDetection</a> objects. <code>Segments</code> is sorted by the segment types
 *       specified in the <code>SegmentTypes</code> input parameter of <code>StartSegmentDetection</code>.
 *     Each element of the array includes the detected segment, the precentage confidence in the acuracy
 *       of the detected segment, the type of the segment, and the frame in which the segment was detected.</p>
 *          <p>Use <code>SelectedSegmentTypes</code> to find out the type of segment detection requested in the
 *     call to <code>StartSegmentDetection</code>.</p>
 *          <p>Use the <code>MaxResults</code> parameter to limit the number of segment detections returned. If there are more results than
 *       specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains
 *       a pagination token for getting the next set of results. To get the next page of results, call <code>GetSegmentDetection</code>
 *       and populate the <code>NextToken</code> request parameter with the token value returned from the previous
 *       call to <code>GetSegmentDetection</code>.</p>
 *          <p>For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetSegmentDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetSegmentDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetSegmentDetectionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSegmentDetectionCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentDetectionResponse
 * //   JobStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //   StatusMessage: "STRING_VALUE",
 * //   VideoMetadata: [ // VideoMetadataList
 * //     { // VideoMetadata
 * //       Codec: "STRING_VALUE",
 * //       DurationMillis: Number("long"),
 * //       Format: "STRING_VALUE",
 * //       FrameRate: Number("float"),
 * //       FrameHeight: Number("long"),
 * //       FrameWidth: Number("long"),
 * //       ColorRange: "FULL" || "LIMITED",
 * //     },
 * //   ],
 * //   AudioMetadata: [ // AudioMetadataList
 * //     { // AudioMetadata
 * //       Codec: "STRING_VALUE",
 * //       DurationMillis: Number("long"),
 * //       SampleRate: Number("long"),
 * //       NumberOfChannels: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Segments: [ // SegmentDetections
 * //     { // SegmentDetection
 * //       Type: "TECHNICAL_CUE" || "SHOT",
 * //       StartTimestampMillis: Number("long"),
 * //       EndTimestampMillis: Number("long"),
 * //       DurationMillis: Number("long"),
 * //       StartTimecodeSMPTE: "STRING_VALUE",
 * //       EndTimecodeSMPTE: "STRING_VALUE",
 * //       DurationSMPTE: "STRING_VALUE",
 * //       TechnicalCueSegment: { // TechnicalCueSegment
 * //         Type: "ColorBars" || "EndCredits" || "BlackFrames" || "OpeningCredits" || "StudioLogo" || "Slate" || "Content",
 * //         Confidence: Number("float"),
 * //       },
 * //       ShotSegment: { // ShotSegment
 * //         Index: Number("long"),
 * //         Confidence: Number("float"),
 * //       },
 * //       StartFrameNumber: Number("long"),
 * //       EndFrameNumber: Number("long"),
 * //       DurationFrames: Number("long"),
 * //     },
 * //   ],
 * //   SelectedSegmentTypes: [ // SegmentTypesInfo
 * //     { // SegmentTypeInfo
 * //       Type: "TECHNICAL_CUE" || "SHOT",
 * //       ModelVersion: "STRING_VALUE",
 * //     },
 * //   ],
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
 * @param GetSegmentDetectionCommandInput - {@link GetSegmentDetectionCommandInput}
 * @returns {@link GetSegmentDetectionCommandOutput}
 * @see {@link GetSegmentDetectionCommandInput} for command's `input` shape.
 * @see {@link GetSegmentDetectionCommandOutput} for command's `response` shape.
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
export class GetSegmentDetectionCommand extends $Command<
  GetSegmentDetectionCommandInput,
  GetSegmentDetectionCommandOutput,
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
  constructor(readonly input: GetSegmentDetectionCommandInput) {
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
  ): Handler<GetSegmentDetectionCommandInput, GetSegmentDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSegmentDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetSegmentDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "GetSegmentDetection",
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
  private serialize(input: GetSegmentDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSegmentDetectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSegmentDetectionCommandOutput> {
    return de_GetSegmentDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
