// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getWebSocketPlugin } from "@aws-sdk/middleware-websocket";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
 * @public
 * <p>Starts a Face Liveness video stream and liveness detection process for a given
 *       session.</p>
 *          <p>Requires <code>sessionId</code>, <code>ChallengeVersions</code>, <code>VideoWidth</code>,
 *         <code>VideoHeight</code> and a <code>RequestEventStream</code> as input. The event stream
 *       contains information about different events for the session, including the challenge
 *       information used for verification. </p>
 *          <p>The maximum video size for Face Liveness is 10 MB. Face Liveness throws a
 *         <code>ValidationException</code> if the video does not match the necessary formatting and
 *       size parameters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionStreamingClient, StartFaceLivenessSessionCommand } from "@aws-sdk/client-rekognitionstreaming"; // ES Modules import
 * // const { RekognitionStreamingClient, StartFaceLivenessSessionCommand } = require("@aws-sdk/client-rekognitionstreaming"); // CommonJS import
 * const client = new RekognitionStreamingClient(config);
 * const input = { // StartFaceLivenessSessionRequest
 *   SessionId: "STRING_VALUE", // required
 *   VideoWidth: "STRING_VALUE", // required
 *   VideoHeight: "STRING_VALUE", // required
 *   ChallengeVersions: "STRING_VALUE", // required
 *   LivenessRequestStream: { // LivenessRequestStream Union: only one key present
 *     VideoEvent: { // VideoEvent
 *       VideoChunk: "BLOB_VALUE",
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
 *
 */
export class StartFaceLivenessSessionCommand extends $Command<
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
  RekognitionStreamingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartFaceLivenessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionStreamingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFaceLivenessSessionCommandInput, StartFaceLivenessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFaceLivenessSessionCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getEventStreamPlugin(configuration));
    this.middlewareStack.use(
      getWebSocketPlugin(configuration, { headerPrefix: "x-amz-rekognition-streaming-liveness-" })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionStreamingClient";
    const commandName = "StartFaceLivenessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFaceLivenessSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFaceLivenessSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: StartFaceLivenessSessionCommandInput,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<__HttpRequest> {
    return se_StartFaceLivenessSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<StartFaceLivenessSessionCommandOutput> {
    return de_StartFaceLivenessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
