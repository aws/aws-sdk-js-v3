// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTextDetectionRequest, GetTextDetectionResponse } from "../models/models_0";
import { GetTextDetection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the text detection results of a Amazon Rekognition Video analysis started by StartTextDetection.
 *
 * Text detection with Amazon Rekognition Video is an asynchronous operation. You start text detection by calling StartTextDetection which returns a job identifier (`JobId`) When the text detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to `StartTextDetection`. To get the results of the text detection operation, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. if so, call `GetTextDetection` and pass the job identifier (`JobId`) from the initial call of `StartLabelDetection`.
 *
 * `GetTextDetection` returns an array of detected text (`TextDetections`) sorted by the time the text was detected, up to 100 words per frame of video.
 *
 * Each element of the array includes the detected text, the precentage confidence in the acuracy of the detected text, the time the text was detected, bounding box information for where the text was located, and unique identifiers for words and their lines.
 *
 * Use MaxResults parameter to limit the number of text detections returned. If there are more results than specified in `MaxResults`, the value of `NextToken` in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call `GetTextDetection` and populate the `NextToken` request parameter with the token value returned from the previous call to `GetTextDetection`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetTextDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetTextDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *
 * Pagination token in the request is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @public
 */
export class GetTextDetectionCommand extends command<GetTextDetectionCommandInput, GetTextDetectionCommandOutput>(
  _ep0,
  _mw0,
  "GetTextDetection",
  GetTextDetection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTextDetectionRequest;
      output: GetTextDetectionResponse;
    };
    sdk: {
      input: GetTextDetectionCommandInput;
      output: GetTextDetectionCommandOutput;
    };
  };
}
