// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContentModerationRequest, GetContentModerationResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetContentModeration } from "../schemas/schemas_1_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContentModerationCommand}.
 */
export interface GetContentModerationCommandInput extends GetContentModerationRequest {}
/**
 * @public
 *
 * The output of {@link GetContentModerationCommand}.
 */
export interface GetContentModerationCommandOutput extends GetContentModerationResponse, __MetadataBearer {}

/**
 * <p>Gets the inappropriate, unwanted, or offensive content analysis results for a Amazon Rekognition Video analysis started by
 *        <a>StartContentModeration</a>. For a list of moderation labels in Amazon Rekognition, see
 *        <a href="https://docs.aws.amazon.com/rekognition/latest/dg/moderation.html#moderation-api">Using the image and video moderation APIs</a>.</p>
 *          <p>Amazon Rekognition Video inappropriate or offensive content detection in a stored video is an asynchronous operation. You start analysis by calling
 *        <a>StartContentModeration</a> which returns a job identifier (<code>JobId</code>).
 *        When analysis finishes, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service
 *        topic registered in the initial call to <code>StartContentModeration</code>.
 *        To get the results of the content analysis, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. If so, call  <code>GetContentModeration</code> and pass the job identifier
 *        (<code>JobId</code>) from the initial call to <code>StartContentModeration</code>. </p>
 *          <p>For more information, see Working with Stored Videos in the
 *      Amazon Rekognition Devlopers Guide.</p>
 *          <p>
 *             <code>GetContentModeration</code> returns detected inappropriate, unwanted, or offensive content moderation labels,
 *       and the time they are detected, in an array, <code>ModerationLabels</code>, of
 *       <a>ContentModerationDetection</a> objects.
 *      </p>
 *          <p>By default, the moderated labels are returned sorted by time, in milliseconds from the start of the
 *        video. You can also sort them by moderated label by specifying <code>NAME</code> for the <code>SortBy</code>
 *        input parameter. </p>
 *          <p>Since video analysis can return a large number of results, use the <code>MaxResults</code> parameter to limit
 *       the number of labels returned in a single call to <code>GetContentModeration</code>. If there are more results than
 *        specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a
 *        pagination token for getting the next set of results. To get the next page of results, call <code>GetContentModeration</code>
 *        and populate the <code>NextToken</code> request parameter with the value of <code>NextToken</code>
 *        returned from the previous call to <code>GetContentModeration</code>.</p>
 *          <p>For more information, see moderating content in the Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetContentModerationCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetContentModerationCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // GetContentModerationRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "NAME" || "TIMESTAMP",
 *   AggregateBy: "TIMESTAMPS" || "SEGMENTS",
 * };
 * const command = new GetContentModerationCommand(input);
 * const response = await client.send(command);
 * // { // GetContentModerationResponse
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
 * //   ModerationLabels: [ // ContentModerationDetections
 * //     { // ContentModerationDetection
 * //       Timestamp: Number("long"),
 * //       ModerationLabel: { // ModerationLabel
 * //         Confidence: Number("float"),
 * //         Name: "STRING_VALUE",
 * //         ParentName: "STRING_VALUE",
 * //         TaxonomyLevel: Number("int"),
 * //       },
 * //       StartTimestampMillis: Number("long"),
 * //       EndTimestampMillis: Number("long"),
 * //       DurationMillis: Number("long"),
 * //       ContentTypes: [ // ContentTypes
 * //         { // ContentType
 * //           Confidence: Number("float"),
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ModerationModelVersion: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Video: { // Video
 * //     S3Object: { // S3Object
 * //       Bucket: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   },
 * //   JobTag: "STRING_VALUE",
 * //   GetRequestMetadata: { // GetContentModerationRequestMetadata
 * //     SortBy: "NAME" || "TIMESTAMP",
 * //     AggregateBy: "TIMESTAMPS" || "SEGMENTS",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContentModerationCommandInput - {@link GetContentModerationCommandInput}
 * @returns {@link GetContentModerationCommandOutput}
 * @see {@link GetContentModerationCommandInput} for command's `input` shape.
 * @see {@link GetContentModerationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetContentModerationCommand extends $Command
  .classBuilder<
    GetContentModerationCommandInput,
    GetContentModerationCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "GetContentModeration", {})
  .n("RekognitionClient", "GetContentModerationCommand")
  .sc(GetContentModeration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContentModerationRequest;
      output: GetContentModerationResponse;
    };
    sdk: {
      input: GetContentModerationCommandInput;
      output: GetContentModerationCommandOutput;
    };
  };
}
