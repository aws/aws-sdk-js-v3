// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStreamProcessorRequest, CreateStreamProcessorResponse } from "../models/models_0";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateStreamProcessor } from "../schemas/schemas_13_Start";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video.</p>
 *          <p>Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels.</p>
 *          <ul>
 *             <li>
 *                <p>If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream
 *                         (<code>Input</code>) and a Kinesis data stream (<code>Output</code>) stream for receiving
 *                     the output. You must use the <code>FaceSearch</code> option in
 *                         <code>Settings</code>, specifying the collection that contains the faces you
 *                     want to recognize. After you have finished analyzing a streaming video, use
 *                         <a>StopStreamProcessor</a> to stop processing.</p>
 *             </li>
 *             <li>
 *                <p>If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream
 *                         (<code>Input</code>), Amazon S3 bucket information (<code>Output</code>), and an
 *                     Amazon SNS topic ARN (<code>NotificationChannel</code>). You can also provide a KMS
 *                     key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want
 *                     to detect by using the <code>ConnectedHome</code> option in settings, and
 *                     selecting one of the following: <code>PERSON</code>, <code>PET</code>,
 *                         <code>PACKAGE</code>, <code>ALL</code> You can also specify where in the
 *                     frame you want Amazon Rekognition to monitor with <code>RegionsOfInterest</code>. When
 *                     you run the <a>StartStreamProcessor</a> operation on a label
 *                     detection stream processor, you input start and stop information to determine
 *                     the length of the processing time.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             Use <code>Name</code> to assign an identifier for the stream processor. You use <code>Name</code>
 *             to manage the stream processor. For example, you can start processing the source video by calling <a>StartStreamProcessor</a> with
 *             the <code>Name</code> field. </p>
 *          <p>This operation requires permissions to perform the
 *             <code>rekognition:CreateStreamProcessor</code> action. If you want to tag your stream processor, you also require permission to perform the <code>rekognition:TagResource</code> operation.</p>
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
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
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
export class CreateStreamProcessorCommand extends $Command
  .classBuilder<
    CreateStreamProcessorCommandInput,
    CreateStreamProcessorCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "CreateStreamProcessor", {})
  .n("RekognitionClient", "CreateStreamProcessorCommand")
  .sc(CreateStreamProcessor)
  .build() {
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
