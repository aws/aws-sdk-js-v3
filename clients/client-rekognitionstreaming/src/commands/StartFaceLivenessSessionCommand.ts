// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartFaceLivenessSessionRequest,
  StartFaceLivenessSessionRequestFilterSensitiveLog,
  StartFaceLivenessSessionResponse,
  StartFaceLivenessSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartFaceLivenessSessionCommand, se_StartFaceLivenessSessionCommand } from "../protocols/Aws_restJson1";
import {
  RekognitionStreamingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RekognitionStreamingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartFaceLivenessSessionCommand}.
 */
export interface StartFaceLivenessSessionCommandInput extends StartFaceLivenessSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartFaceLivenessSessionCommand}.
 */
export interface StartFaceLivenessSessionCommandOutput extends StartFaceLivenessSessionResponse, __MetadataBearer {}

/**
 * <p>Starts a Face Liveness video stream and liveness detection process for a given
 *       session.</p>
 *          <p>Requires <code>sessionId</code>, <code>ChallengeVersions</code>, <code>VideoWidth</code>,
 *         <code>VideoHeight</code> and a <code>RequestEventStream</code> as input. The event stream
 *       contains information about different events for the session, including the challenge
 *       information used for verification. </p>
 *          <p>The maximum video size for Face Liveness is 10 MB. Face Liveness throws a
 *         <code>ValidationException</code> if the video does not match the necessary formatting and
 *       size parameters. </p>
 *          <p>StartFaceLivenessSession supports the websockets and <a href="https://aws.amazon.com/sdk-for-javascript/">the AWS SDK
 *        for JavaScript</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionStreamingClient, StartFaceLivenessSessionCommand } from "@aws-sdk/client-rekognitionstreaming"; // ES Modules import
 * // const { RekognitionStreamingClient, StartFaceLivenessSessionCommand } = require("@aws-sdk/client-rekognitionstreaming"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RekognitionStreamingClient(config);
 * const input = { // StartFaceLivenessSessionRequest
 *   SessionId: "STRING_VALUE", // required
 *   VideoWidth: "STRING_VALUE", // required
 *   VideoHeight: "STRING_VALUE", // required
 *   ChallengeVersions: "STRING_VALUE", // required
 *   LivenessRequestStream: { // LivenessRequestStream Union: only one key present
 *     VideoEvent: { // VideoEvent
 *       VideoChunk: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       TimestampMillis: Number("long"),
 *     },
 *     ClientSessionInformationEvent: { // ClientSessionInformationEvent
 *       Challenge: { // ClientChallenge Union: only one key present
 *         FaceMovementAndLightChallenge: { // FaceMovementAndLightClientChallenge
 *           ChallengeId: "STRING_VALUE", // required
 *           VideoStartTimestamp: Number("long"),
 *           VideoEndTimestamp: Number("long"),
 *           InitialFace: { // InitialFace
 *             BoundingBox: { // BoundingBox
 *               Width: Number("float"), // required
 *               Height: Number("float"), // required
 *               Left: Number("float"), // required
 *               Top: Number("float"), // required
 *             },
 *             InitialFaceDetectedTimestamp: Number("long"), // required
 *           },
 *           TargetFace: { // TargetFace
 *             BoundingBox: {
 *               Width: Number("float"), // required
 *               Height: Number("float"), // required
 *               Left: Number("float"), // required
 *               Top: Number("float"), // required
 *             },
 *             FaceDetectedInTargetPositionStartTimestamp: Number("long"), // required
 *             FaceDetectedInTargetPositionEndTimestamp: Number("long"), // required
 *           },
 *           ColorDisplayed: { // ColorDisplayed
 *             CurrentColor: { // FreshnessColor
 *               RGB: [ // ColorComponentList // required
 *                 Number("int"),
 *               ],
 *             },
 *             PreviousColor: {
 *               RGB: [ // required
 *                 Number("int"),
 *               ],
 *             },
 *             SequenceNumber: Number("int"), // required
 *             CurrentColorStartTimestamp: Number("long"), // required
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new StartFaceLivenessSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartFaceLivenessSessionResponse
 * //   SessionId: "STRING_VALUE", // required
 * //   LivenessResponseStream: { // LivenessResponseStream Union: only one key present
 * //     ServerSessionInformationEvent: { // ServerSessionInformationEvent
 * //       SessionInformation: { // SessionInformation
 * //         Challenge: { // ServerChallenge Union: only one key present
 * //           FaceMovementAndLightChallenge: { // FaceMovementAndLightServerChallenge
 * //             OvalParameters: { // OvalParameters
 * //               Width: Number("float"), // required
 * //               Height: Number("float"), // required
 * //               CenterX: Number("float"), // required
 * //               CenterY: Number("float"), // required
 * //             },
 * //             LightChallengeType: "SEQUENTIAL", // required
 * //             ChallengeConfig: { // ChallengeConfig
 * //               BlazeFaceDetectionThreshold: Number("float"),
 * //               FaceDistanceThresholdMin: Number("float"),
 * //               FaceDistanceThreshold: Number("float"),
 * //               FaceDistanceThresholdMax: Number("float"),
 * //               OvalIouThreshold: Number("float"),
 * //               OvalHeightWidthRatio: Number("float"),
 * //               OvalIouWidthThreshold: Number("float"),
 * //               OvalIouHeightThreshold: Number("float"),
 * //               FaceIouWidthThreshold: Number("float"),
 * //               FaceIouHeightThreshold: Number("float"),
 * //               OvalFitTimeout: Number("int"),
 * //             },
 * //             ColorSequences: [ // ColorSequences // required
 * //               { // ColorSequence
 * //                 FreshnessColor: { // FreshnessColor
 * //                   RGB: [ // ColorComponentList // required
 * //                     Number("int"),
 * //                   ],
 * //                 },
 * //                 DownscrollDuration: Number("float"), // required
 * //                 FlatDisplayDuration: Number("float"), // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //     DisconnectionEvent: { // DisconnectionEvent
 * //       TimestampMillis: Number("long"), // required
 * //     },
 * //     ValidationException: { // ValidationException
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //     InternalServerException: { // InternalServerException
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //     ThrottlingException: { // ThrottlingException
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //     ServiceQuotaExceededException: { // ServiceQuotaExceededException
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //     ServiceUnavailableException: { // ServiceUnavailableException
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartFaceLivenessSessionCommandInput - {@link StartFaceLivenessSessionCommandInput}
 * @returns {@link StartFaceLivenessSessionCommandOutput}
 * @see {@link StartFaceLivenessSessionCommandInput} for command's `input` shape.
 * @see {@link StartFaceLivenessSessionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionStreamingClientResolvedConfig | config} for RekognitionStreamingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when the client isn't authorized to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when a request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Service-wide throttling to recover from an operational event or service is not able to scale.</p>
 *
 * @throws {@link SessionNotFoundException} (client fault)
 *  <p>Occurs when the given <code>sessionId</code> is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>A request was denied due to request throttling. Occurs when too many requests were made by a user
 *        (exceeding their service quota), the service isn't able to scale, or a service-wide throttling was done to recover from an operational event.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Potential reasons
 *       inlcude: video quality or size is invalid, video container format not supported, video does
 *       not have enough information - no person detected in video, request couldn't be parsed or is
 *       invalid, session has expired or is invalid, S3 bucket is invalid/in another AWS region, KMS
 *       Key is invalid.</p>
 *
 * @throws {@link RekognitionStreamingServiceException}
 * <p>Base exception class for all service exceptions from RekognitionStreaming service.</p>
 *
 * @public
 */
export class StartFaceLivenessSessionCommand extends $Command
  .classBuilder<
    StartFaceLivenessSessionCommandInput,
    StartFaceLivenessSessionCommandOutput,
    RekognitionStreamingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionStreamingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
      getWebSocketPlugin(config, {
        headerPrefix: "x-amz-rekognition-streaming-liveness-",
      }),
    ];
  })
  .s("RekognitionStreamingService", "StartFaceLivenessSession", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("RekognitionStreamingClient", "StartFaceLivenessSessionCommand")
  .f(StartFaceLivenessSessionRequestFilterSensitiveLog, StartFaceLivenessSessionResponseFilterSensitiveLog)
  .ser(se_StartFaceLivenessSessionCommand)
  .de(de_StartFaceLivenessSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFaceLivenessSessionRequest;
      output: StartFaceLivenessSessionResponse;
    };
    sdk: {
      input: StartFaceLivenessSessionCommandInput;
      output: StartFaceLivenessSessionCommandOutput;
    };
  };
}
