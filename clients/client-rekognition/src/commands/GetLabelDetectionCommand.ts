// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLabelDetectionRequest, GetLabelDetectionResponse } from "../models/models_0";
import { GetLabelDetection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection.
 *
 * The label detection operation is started by a call to StartLabelDetection which returns a job identifier (`JobId`). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to `StartlabelDetection`.
 *
 * To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call GetLabelDetection and pass the job identifier (`JobId`) from the initial call to `StartLabelDetection`.
 *
 * `GetLabelDetection` returns an array of detected labels (`Labels`) sorted by the time the labels were detected. You can also sort by the label name by specifying `NAME` for the `SortBy` input parameter. If there is no `NAME` specified, the default sort is by timestamp.
 *
 * You can select how results are aggregated by using the `AggregateBy` input parameter. The default aggregation method is `TIMESTAMPS`. You can also aggregate by `SEGMENTS`, which aggregates all instances of labels detected in a given segment.
 *
 * The returned Labels array may include the following attributes:
 *
 * - Name - The name of the detected label.
 * - Confidence - The level of confidence in the label assigned to a detected object.
 * - Parents - The ancestor labels for a detected label. GetLabelDetection returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response.
 * - Aliases - Possible Aliases for the label.
 * - Categories - The label categories that the detected label belongs to.
 * - BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box.
 * - Timestamp - Time, in milliseconds from the start of the video, that the label was detected. For aggregation by `SEGMENTS`, the `StartTimestampMillis`, `EndTimestampMillis`, and `DurationMillis` structures are what define a segment. Although the “Timestamp” structure is still returned with each label, its value is set to be the same as `StartTimestampMillis`.
 *
 * Timestamp and Bounding box information are returned for detected Instances, only if aggregation is done by `TIMESTAMPS`. If aggregating by `SEGMENTS`, information about detected instances isn’t returned.
 *
 * The version of the label model used for the detection is also returned.
 *
 * **Note `DominantColors` isn't returned for `Instances`, although it is shown as part of the response in the sample seen below.**
 *
 * Use `MaxResults` parameter to limit the number of labels returned. If there are more results than specified in `MaxResults`, the value of `NextToken` in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call `GetlabelDetection` and populate the `NextToken` request parameter with the token value returned from the previous call to `GetLabelDetection`.
 *
 * If you are retrieving results while using the Amazon Simple Notification Service, note that you will receive an "ERROR" notification if the job encounters an issue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetLabelDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetLabelDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
export class GetLabelDetectionCommand extends command<GetLabelDetectionCommandInput, GetLabelDetectionCommandOutput>(
  _ep0,
  _mw0,
  "GetLabelDetection",
  GetLabelDetection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLabelDetectionRequest;
      output: GetLabelDetectionResponse;
    };
    sdk: {
      input: GetLabelDetectionCommandInput;
      output: GetLabelDetectionCommandOutput;
    };
  };
}
