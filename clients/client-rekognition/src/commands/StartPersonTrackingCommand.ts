// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPersonTrackingRequest, StartPersonTrackingResponse } from "../models/models_0";
import { StartPersonTracking$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartPersonTrackingCommand}.
 */
export interface StartPersonTrackingCommandInput extends StartPersonTrackingRequest {}
/**
 * @public
 *
 * The output of {@link StartPersonTrackingCommand}.
 */
export interface StartPersonTrackingCommandOutput extends StartPersonTrackingResponse, __MetadataBearer {}

/**
 * > **Note:** *End of support notice:* On October 31, 2025, AWS will discontinue support for Amazon Rekognition People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition People Pathing capability. For more information, visit this [blog post](https://aws.amazon.com/blogs/machine-learning/transitioning-from-amazon-rekognition-people-pathing-exploring-other-alternatives/).
 *
 * Starts the asynchronous tracking of a person's path in a stored video.
 *
 * Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. `StartPersonTracking` returns a job identifier (`JobId`) which you use to get the results of the operation. When label detection is finished, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic that you specify in `NotificationChannel`.
 *
 * To get the results of the person detection operation, first check that the status value published to the Amazon SNS topic is `SUCCEEDED`. If so, call GetPersonTracking and pass the job identifier (`JobId`) from the initial call to `StartPersonTracking`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartPersonTrackingCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartPersonTrackingCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StartPersonTrackingRequest
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
 * const command = new StartPersonTrackingCommand(input);
 * const response = await client.send(command);
 * // { // StartPersonTrackingResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPersonTrackingCommandInput - {@link StartPersonTrackingCommandInput}
 * @returns {@link StartPersonTrackingCommandOutput}
 * @see {@link StartPersonTrackingCommandInput} for command's `input` shape.
 * @see {@link StartPersonTrackingCommandOutput} for command's `response` shape.
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
export class StartPersonTrackingCommand extends command<StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput>(
  _ep0,
  _mw0,
  "StartPersonTracking",
  StartPersonTracking$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPersonTrackingRequest;
      output: StartPersonTrackingResponse;
    };
    sdk: {
      input: StartPersonTrackingCommandInput;
      output: StartPersonTrackingCommandOutput;
    };
  };
}
