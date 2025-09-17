// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartFaceDetectionRequest, StartFaceDetectionResponse } from "../models/models_1";
import { de_StartFaceDetectionCommand, se_StartFaceDetectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFaceDetectionCommand}.
 */
export interface StartFaceDetectionCommandInput extends StartFaceDetectionRequest {}
/**
 * @public
 *
 * The output of {@link StartFaceDetectionCommand}.
 */
export interface StartFaceDetectionCommandOutput extends StartFaceDetectionResponse, __MetadataBearer {}

/**
 * <p>Starts asynchronous detection of faces in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket.
 *        Use <a>Video</a> to specify the bucket name and the filename of the video.
 *        <code>StartFaceDetection</code> returns a job identifier (<code>JobId</code>) that you
 *        use to get the results of the operation.
 *        When face detection is finished, Amazon Rekognition Video publishes a completion status
 *        to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.
 *        To get the results of the face detection operation, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. If so, call  <a>GetFaceDetection</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p>
 *          <p>For more information, see Detecting faces in a stored video in the
 *      Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartFaceDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartFaceDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StartFaceDetectionRequest
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
 *   FaceAttributes: "DEFAULT" || "ALL",
 *   JobTag: "STRING_VALUE",
 * };
 * const command = new StartFaceDetectionCommand(input);
 * const response = await client.send(command);
 * // { // StartFaceDetectionResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFaceDetectionCommandInput - {@link StartFaceDetectionCommandInput}
 * @returns {@link StartFaceDetectionCommandOutput}
 * @see {@link StartFaceDetectionCommandInput} for command's `input` shape.
 * @see {@link StartFaceDetectionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartFaceDetectionCommand extends $Command
  .classBuilder<
    StartFaceDetectionCommandInput,
    StartFaceDetectionCommandOutput,
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
  .s("RekognitionService", "StartFaceDetection", {})
  .n("RekognitionClient", "StartFaceDetectionCommand")
  .f(void 0, void 0)
  .ser(se_StartFaceDetectionCommand)
  .de(de_StartFaceDetectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFaceDetectionRequest;
      output: StartFaceDetectionResponse;
    };
    sdk: {
      input: StartFaceDetectionCommandInput;
      output: StartFaceDetectionCommandOutput;
    };
  };
}
