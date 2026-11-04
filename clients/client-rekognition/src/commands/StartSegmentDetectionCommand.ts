// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSegmentDetectionRequest, StartSegmentDetectionResponse } from "../models/models_0";
import { StartSegmentDetection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSegmentDetectionCommand}.
 */
export interface StartSegmentDetectionCommandInput extends StartSegmentDetectionRequest {}
/**
 * @public
 *
 * The output of {@link StartSegmentDetectionCommand}.
 */
export interface StartSegmentDetectionCommandOutput extends StartSegmentDetectionResponse, __MetadataBearer {}

/**
 * Starts asynchronous detection of segment detection in a stored video.
 *
 * Amazon Rekognition Video can detect segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. `StartSegmentDetection` returns a job identifier (`JobId`) which you use to get the results of the operation. When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in `NotificationChannel`.
 *
 * You can use the `Filters` (StartSegmentDetectionFilters) input parameter to specify the minimum detection confidence returned in the response. Within `Filters`, use `ShotFilter` (StartShotDetectionFilter) to filter detected shots. Use `TechnicalCueFilter` (StartTechnicalCueDetectionFilter) to filter technical cues.
 *
 * To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. if so, call GetSegmentDetection and pass the job identifier (`JobId`) from the initial call to `StartSegmentDetection`.
 *
 * For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartSegmentDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartSegmentDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StartSegmentDetectionRequest
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
 *   Filters: { // StartSegmentDetectionFilters
 *     TechnicalCueFilter: { // StartTechnicalCueDetectionFilter
 *       MinSegmentConfidence: Number("float"),
 *       BlackFrame: { // BlackFrame
 *         MaxPixelThreshold: Number("float"),
 *         MinCoveragePercentage: Number("float"),
 *       },
 *     },
 *     ShotFilter: { // StartShotDetectionFilter
 *       MinSegmentConfidence: Number("float"),
 *     },
 *   },
 *   SegmentTypes: [ // SegmentTypes // required
 *     "TECHNICAL_CUE" || "SHOT",
 *   ],
 * };
 * const command = new StartSegmentDetectionCommand(input);
 * const response = await client.send(command);
 * // { // StartSegmentDetectionResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSegmentDetectionCommandInput - {@link StartSegmentDetectionCommandInput}
 * @returns {@link StartSegmentDetectionCommandOutput}
 * @see {@link StartSegmentDetectionCommandInput} for command's `input` shape.
 * @see {@link StartSegmentDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * A `ClientRequestToken` input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *
 * Amazon Rekognition is unable to access the S3 object specified in the request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link VideoTooLargeException} (client fault)
 *
 * The file size or duration of the supplied media is too large. The maximum file size is 10GB. The maximum duration is 6 hours.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @public
 */
export class StartSegmentDetectionCommand extends command<StartSegmentDetectionCommandInput, StartSegmentDetectionCommandOutput>(
  _ep0,
  _mw0,
  "StartSegmentDetection",
  StartSegmentDetection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSegmentDetectionRequest;
      output: StartSegmentDetectionResponse;
    };
    sdk: {
      input: StartSegmentDetectionCommandInput;
      output: StartSegmentDetectionCommandOutput;
    };
  };
}
