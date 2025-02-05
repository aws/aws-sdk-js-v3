// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLabelDetectionRequest, GetLabelDetectionResponse } from "../models/models_0";
import { de_GetLabelDetectionCommand, se_GetLabelDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *          <p>If you are retrieving results while using the Amazon Simple Notification Service, note that you will receive an
 *       "ERROR" notification if the job encounters an issue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetLabelDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetLabelDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class GetLabelDetectionCommand extends $Command
  .classBuilder<
    GetLabelDetectionCommandInput,
    GetLabelDetectionCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "GetLabelDetection", {})
  .n("RekognitionClient", "GetLabelDetectionCommand")
  .f(void 0, void 0)
  .ser(se_GetLabelDetectionCommand)
  .de(de_GetLabelDetectionCommand)
  .build() {
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
