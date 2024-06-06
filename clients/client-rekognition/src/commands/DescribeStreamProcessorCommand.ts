// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStreamProcessorRequest, DescribeStreamProcessorResponse } from "../models/models_0";
import { de_DescribeStreamProcessorCommand, se_DescribeStreamProcessorCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStreamProcessorCommand}.
 */
export interface DescribeStreamProcessorCommandInput extends DescribeStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStreamProcessorCommand}.
 */
export interface DescribeStreamProcessorCommandOutput extends DescribeStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Provides information about a stream processor created by <a>CreateStreamProcessor</a>. You can get information about the input and output streams, the input parameters for the face recognition being performed,
 *             and the current status of the stream processor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DescribeStreamProcessorRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeStreamProcessorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamProcessorResponse
 * //   Name: "STRING_VALUE",
 * //   StreamProcessorArn: "STRING_VALUE",
 * //   Status: "STOPPED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "UPDATING",
 * //   StatusMessage: "STRING_VALUE",
 * //   CreationTimestamp: new Date("TIMESTAMP"),
 * //   LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //   Input: { // StreamProcessorInput
 * //     KinesisVideoStream: { // KinesisVideoStream
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Output: { // StreamProcessorOutput
 * //     KinesisDataStream: { // KinesisDataStream
 * //       Arn: "STRING_VALUE",
 * //     },
 * //     S3Destination: { // S3Destination
 * //       Bucket: "STRING_VALUE",
 * //       KeyPrefix: "STRING_VALUE",
 * //     },
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   Settings: { // StreamProcessorSettings
 * //     FaceSearch: { // FaceSearchSettings
 * //       CollectionId: "STRING_VALUE",
 * //       FaceMatchThreshold: Number("float"),
 * //     },
 * //     ConnectedHome: { // ConnectedHomeSettings
 * //       Labels: [ // ConnectedHomeLabels // required
 * //         "STRING_VALUE",
 * //       ],
 * //       MinConfidence: Number("float"),
 * //     },
 * //   },
 * //   NotificationChannel: { // StreamProcessorNotificationChannel
 * //     SNSTopicArn: "STRING_VALUE", // required
 * //   },
 * //   KmsKeyId: "STRING_VALUE",
 * //   RegionsOfInterest: [ // RegionsOfInterest
 * //     { // RegionOfInterest
 * //       BoundingBox: { // BoundingBox
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //       Polygon: [ // Polygon
 * //         { // Point
 * //           X: Number("float"),
 * //           Y: Number("float"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   DataSharingPreference: { // StreamProcessorDataSharingPreference
 * //     OptIn: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamProcessorCommandInput - {@link DescribeStreamProcessorCommandInput}
 * @returns {@link DescribeStreamProcessorCommandOutput}
 * @see {@link DescribeStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamProcessorCommandOutput} for command's `response` shape.
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
export class DescribeStreamProcessorCommand extends $Command
  .classBuilder<
    DescribeStreamProcessorCommandInput,
    DescribeStreamProcessorCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "DescribeStreamProcessor", {})
  .n("RekognitionClient", "DescribeStreamProcessorCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStreamProcessorCommand)
  .de(de_DescribeStreamProcessorCommand)
  .build() {}
