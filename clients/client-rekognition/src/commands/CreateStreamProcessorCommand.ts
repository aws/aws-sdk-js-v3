// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamProcessorRequest, CreateStreamProcessorResponse } from "../models/models_0";
import { CreateStreamProcessor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamProcessorCommand}.
 */
export interface CreateStreamProcessorCommandInput extends CreateStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamProcessorCommand}.
 */
export interface CreateStreamProcessorCommandOutput extends CreateStreamProcessorResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > Service availability notice: Streaming Video and Bulk Image Analysis is no longer available to new customers. For more information, see [Rekognition feature availability changes](https://docs.aws.amazon.com/rekognition/latest/dg/rekognition-availability-changes.html).
 * >
 * > **This change does not impact the availability of other Amazon Rekognition features.**
 *
 * Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video.
 *
 * Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels.
 *
 * - If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (`Input`) and a Kinesis data stream (`Output`) stream for receiving the output. You must use the `FaceSearch` option in `Settings`, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop processing.
 * - If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (`Input`), Amazon S3 bucket information (`Output`), and an Amazon SNS topic ARN (`NotificationChannel`). You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want to detect by using the `ConnectedHome` option in settings, and selecting one of the following: `PERSON`, `PET`, `PACKAGE`, `ALL` You can also specify where in the frame you want Amazon Rekognition to monitor with `RegionsOfInterest`. When you run the StartStreamProcessor operation on a label detection stream processor, you input start and stop information to determine the length of the processing time.
 *
 * Use `Name` to assign an identifier for the stream processor. You use `Name` to manage the stream processor. For example, you can start processing the source video by calling StartStreamProcessor with the `Name` field.
 *
 * This operation requires permissions to perform the `rekognition:CreateStreamProcessor` action. If you want to tag your stream processor, you also require permission to perform the `rekognition:TagResource` operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // CreateStreamProcessorRequest
 *   Input: { // StreamProcessorInput
 *     KinesisVideoStream: { // KinesisVideoStream
 *       Arn: "STRING_VALUE",
 *     },
 *   },
 *   Output: { // StreamProcessorOutput
 *     KinesisDataStream: { // KinesisDataStream
 *       Arn: "STRING_VALUE",
 *     },
 *     S3Destination: { // S3Destination
 *       Bucket: "STRING_VALUE",
 *       KeyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   Name: "STRING_VALUE", // required
 *   Settings: { // StreamProcessorSettings
 *     FaceSearch: { // FaceSearchSettings
 *       CollectionId: "STRING_VALUE",
 *       FaceMatchThreshold: Number("float"),
 *     },
 *     ConnectedHome: { // ConnectedHomeSettings
 *       Labels: [ // ConnectedHomeLabels // required
 *         "STRING_VALUE",
 *       ],
 *       MinConfidence: Number("float"),
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NotificationChannel: { // StreamProcessorNotificationChannel
 *     SNSTopicArn: "STRING_VALUE", // required
 *   },
 *   KmsKeyId: "STRING_VALUE",
 *   RegionsOfInterest: [ // RegionsOfInterest
 *     { // RegionOfInterest
 *       BoundingBox: { // BoundingBox
 *         Width: Number("float"),
 *         Height: Number("float"),
 *         Left: Number("float"),
 *         Top: Number("float"),
 *       },
 *       Polygon: [ // Polygon
 *         { // Point
 *           X: Number("float"),
 *           Y: Number("float"),
 *         },
 *       ],
 *     },
 *   ],
 *   DataSharingPreference: { // StreamProcessorDataSharingPreference
 *     OptIn: true || false, // required
 *   },
 * };
 * const command = new CreateStreamProcessorCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamProcessorResponse
 * //   StreamProcessorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStreamProcessorCommandInput - {@link CreateStreamProcessorCommandInput}
 * @returns {@link CreateStreamProcessorCommandOutput}
 * @see {@link CreateStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link CreateStreamProcessorCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is already being used.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The size of the collection exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
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
export class CreateStreamProcessorCommand extends command<CreateStreamProcessorCommandInput, CreateStreamProcessorCommandOutput>(
  _ep0,
  _mw0,
  "CreateStreamProcessor",
  CreateStreamProcessor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamProcessorRequest;
      output: CreateStreamProcessorResponse;
    };
    sdk: {
      input: CreateStreamProcessorCommandInput;
      output: CreateStreamProcessorCommandOutput;
    };
  };
}
