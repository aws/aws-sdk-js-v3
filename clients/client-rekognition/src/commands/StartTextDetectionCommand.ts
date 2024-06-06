// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartTextDetectionRequest, StartTextDetectionResponse } from "../models/models_1";
import { de_StartTextDetectionCommand, se_StartTextDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTextDetectionCommand}.
 */
export interface StartTextDetectionCommandInput extends StartTextDetectionRequest {}
/**
 * @public
 *
 * The output of {@link StartTextDetectionCommand}.
 */
export interface StartTextDetectionCommandOutput extends StartTextDetectionResponse, __MetadataBearer {}

/**
 * <p>Starts asynchronous detection of text in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and
 *        the filename of the video. <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) which you use to get
 *        the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic
 *        that you specify in <code>NotificationChannel</code>.</p>
 *          <p>To get the results of the text detection operation, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. if so, call <a>GetTextDetection</a> and pass the job identifier (<code>JobId</code>)
 *        from the initial call to <code>StartTextDetection</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartTextDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartTextDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // StartTextDetectionRequest
 *   Video: { // Video
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   NotificationChannel: { // NotificationChannel
 *     SNSTopicArn: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 *   JobTag: "STRING_VALUE",
 *   Filters: { // StartTextDetectionFilters
 *     WordFilter: { // DetectionFilter
 *       MinConfidence: Number("float"),
 *       MinBoundingBoxHeight: Number("float"),
 *       MinBoundingBoxWidth: Number("float"),
 *     },
 *     RegionsOfInterest: [ // RegionsOfInterest
 *       { // RegionOfInterest
 *         BoundingBox: { // BoundingBox
 *           Width: Number("float"),
 *           Height: Number("float"),
 *           Left: Number("float"),
 *           Top: Number("float"),
 *         },
 *         Polygon: [ // Polygon
 *           { // Point
 *             X: Number("float"),
 *             Y: Number("float"),
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new StartTextDetectionCommand(input);
 * const response = await client.send(command);
 * // { // StartTextDetectionResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartTextDetectionCommandInput - {@link StartTextDetectionCommandInput}
 * @returns {@link StartTextDetectionCommandOutput}
 * @see {@link StartTextDetectionCommandInput} for command's `input` shape.
 * @see {@link StartTextDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs
 *             concurrently, subsequent calls to start operations (ex:
 *             <code>StartLabelDetection</code>) will raise a <code>LimitExceededException</code>
 *             exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *             the Amazon Rekognition service limit. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link VideoTooLargeException} (client fault)
 *  <p>The file size or duration of the supplied media is too large. The maximum file size is 10GB.
 *         The maximum duration is 6 hours. </p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 */
export class StartTextDetectionCommand extends $Command
  .classBuilder<
    StartTextDetectionCommandInput,
    StartTextDetectionCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "StartTextDetection", {})
  .n("RekognitionClient", "StartTextDetectionCommand")
  .f(void 0, void 0)
  .ser(se_StartTextDetectionCommand)
  .de(de_StartTextDetectionCommand)
  .build() {}
