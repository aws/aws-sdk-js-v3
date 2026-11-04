// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCelebrityRecognitionRequest, StartCelebrityRecognitionResponse } from "../models/models_0";
import { StartCelebrityRecognition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCelebrityRecognitionCommand}.
 */
export interface StartCelebrityRecognitionCommandInput extends StartCelebrityRecognitionRequest {}
/**
 * @public
 *
 * The output of {@link StartCelebrityRecognitionCommand}.
 */
export interface StartCelebrityRecognitionCommandOutput extends StartCelebrityRecognitionResponse, __MetadataBearer {}

/**
 * Starts asynchronous recognition of celebrities in a stored video.
 *
 * Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. `StartCelebrityRecognition` returns a job identifier (`JobId`) which you use to get the results of the analysis. When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in `NotificationChannel`. To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call GetCelebrityRecognition and pass the job identifier (`JobId`) from the initial call to `StartCelebrityRecognition`.
 *
 * For more information, see Recognizing celebrities in the Amazon Rekognition Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartCelebrityRecognitionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartCelebrityRecognitionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StartCelebrityRecognitionRequest
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
 * };
 * const command = new StartCelebrityRecognitionCommand(input);
 * const response = await client.send(command);
 * // { // StartCelebrityRecognitionResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartCelebrityRecognitionCommandInput - {@link StartCelebrityRecognitionCommandInput}
 * @returns {@link StartCelebrityRecognitionCommandOutput}
 * @see {@link StartCelebrityRecognitionCommandInput} for command's `input` shape.
 * @see {@link StartCelebrityRecognitionCommandOutput} for command's `response` shape.
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
export class StartCelebrityRecognitionCommand extends command<StartCelebrityRecognitionCommandInput, StartCelebrityRecognitionCommandOutput>(
  _ep0,
  _mw0,
  "StartCelebrityRecognition",
  StartCelebrityRecognition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCelebrityRecognitionRequest;
      output: StartCelebrityRecognitionResponse;
    };
    sdk: {
      input: StartCelebrityRecognitionCommandInput;
      output: StartCelebrityRecognitionCommandOutput;
    };
  };
}
