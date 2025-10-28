// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftStreamsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftStreamsClient";
import {
  StartStreamSessionInput,
  StartStreamSessionInputFilterSensitiveLog,
  StartStreamSessionOutput,
  StartStreamSessionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_StartStreamSessionCommand, se_StartStreamSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartStreamSessionCommand}.
 */
export interface StartStreamSessionCommandInput extends StartStreamSessionInput {}
/**
 * @public
 *
 * The output of {@link StartStreamSessionCommand}.
 */
export interface StartStreamSessionCommandOutput extends StartStreamSessionOutput, __MetadataBearer {}

/**
 * <p> This action initiates a new stream session and outputs connection information that clients can use to access the stream. A stream session refers to an instance of a stream that Amazon GameLift Streams transmits from the server to the end-user. A stream session runs on a compute resource that a stream group has allocated. The start stream session process works as follows: </p> <ol> <li> <p>Prerequisites:</p> <ul> <li> <p>You must have a stream group in <code>ACTIVE</code> status</p> </li> <li> <p>You must have idle or on-demand capacity in a stream group in the location you want to stream from</p> </li> <li> <p>You must have at least one application associated to the stream group (use <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AssociateApplications.html">AssociateApplications</a> if needed)</p> </li> </ul> </li> <li> <p>Start stream request:</p> <ul> <li> <p>Your backend server calls <b>StartStreamSession</b> to initiate connection</p> </li> <li> <p>Amazon GameLift Streams creates the stream session resource, assigns an Amazon Resource Name (ARN) value, and begins searching for available stream capacity to run the stream</p> </li> <li> <p>Session transitions to <code>ACTIVATING</code> status</p> </li> </ul> </li> <li> <p>Placement completion:</p> <ul> <li> <p>If Amazon GameLift Streams is successful in finding capacity for the stream, the stream session status changes to <code>ACTIVE</code> status and <b>StartStreamSession</b> returns stream connection information</p> </li> <li> <p>If Amazon GameLift Streams was not successful in finding capacity within the placement timeout period (defined according to the capacity type and platform type), the stream session status changes to <code>ERROR</code> status and <b>StartStreamSession</b> returns a <code>StatusReason</code> of <code>placementTimeout</code> </p> </li> </ul> </li> <li> <p>Connection completion:</p> <ul> <li> <p>Provide the new connection information to the requesting client</p> </li> <li> <p>Client must establish connection within <code>ConnectionTimeoutSeconds</code> (specified in <b>StartStreamSession</b> parameters)</p> </li> <li> <p>Session terminates automatically if client fails to connect in time</p> </li> </ul> </li> </ol> <p>For more information about the stream session lifecycle, see <a href="https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/stream-sessions.html">Stream sessions</a> in the <i>Amazon GameLift Streams Developer Guide</i>.</p> <p>Timeouts to be aware of that affect a stream session:</p> <ul> <li> <p> <b>Placement timeout</b>: The amount of time that Amazon GameLift Streams has to find capacity for a stream request. Placement timeout varies based on the capacity type used to fulfill your stream request:</p> <ul> <li> <p> <b>Always-on capacity</b>: 75 seconds</p> </li> <li> <p> <b>On-demand capacity</b>:</p> <ul> <li> <p>Linux/Proton runtimes: 90 seconds</p> </li> <li> <p>Windows runtime: 10 minutes</p> </li> </ul> </li> </ul> </li> <li> <p> <b>Connection timeout</b>: The amount of time that Amazon GameLift Streams waits for a client to connect to a stream session in <code>ACTIVE</code> status, or reconnect to a stream session in <code>PENDING_CLIENT_RECONNECTION</code> status, the latter of which occurs when a client disconnects or loses connection from a stream session. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. This value is specified by <code>ConnectionTimeoutSeconds</code> in the <code>StartStreamSession</code> parameters.</p> </li> <li> <p> <b>Idle timeout</b>: A stream session will be terminated if no user input has been received for 60 minutes.</p> </li> <li> <p> <b>Maximum session length</b>: A stream session will be terminated after this amount of time has elapsed since it started, regardless of any existing client connections. This value is specified by <code>SessionLengthSeconds</code> in the <code>StartStreamSession</code> parameters.</p> </li> </ul> <p>To start a new stream session, specify a stream group ID and application ID, along with the transport protocol and signal request to use with the stream session.</p> <p>For stream groups that have multiple locations, provide a set of locations ordered by priority using a <code>Locations</code> parameter. Amazon GameLift Streams will start a single stream session in the next available location. An application must be finished replicating to a remote location before the remote location can host a stream.</p> <p>To reconnect to a stream session after a client disconnects or loses connection, use <a href="https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_CreateStreamSessionConnection.html">CreateStreamSessionConnection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, StartStreamSessionCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, StartStreamSessionCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // StartStreamSessionInput
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 *   Protocol: "WebRTC", // required
 *   SignalRequest: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   Locations: [ // LocationList
 *     "STRING_VALUE",
 *   ],
 *   ConnectionTimeoutSeconds: Number("int"),
 *   SessionLengthSeconds: Number("int"),
 *   AdditionalLaunchArgs: [ // GameLaunchArgList
 *     "STRING_VALUE",
 *   ],
 *   AdditionalEnvironmentVariables: { // EnvironmentVariables
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartStreamSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartStreamSessionOutput
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   StreamGroupId: "STRING_VALUE",
 * //   UserId: "STRING_VALUE",
 * //   Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 * //   StatusReason: "internalError" || "invalidSignalRequest" || "placementTimeout" || "applicationLogS3DestinationError" || "applicationExit" || "connectionTimeout" || "reconnectionTimeout" || "maxSessionLengthTimeout" || "idleTimeout" || "apiTerminated",
 * //   Protocol: "WebRTC",
 * //   Location: "STRING_VALUE",
 * //   SignalRequest: "STRING_VALUE",
 * //   SignalResponse: "STRING_VALUE",
 * //   ConnectionTimeoutSeconds: Number("int"),
 * //   SessionLengthSeconds: Number("int"),
 * //   AdditionalLaunchArgs: [ // GameLaunchArgList
 * //     "STRING_VALUE",
 * //   ],
 * //   AdditionalEnvironmentVariables: { // EnvironmentVariables
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LogFileLocationUri: "STRING_VALUE",
 * //   WebSdkProtocolUrl: "STRING_VALUE",
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ApplicationArn: "STRING_VALUE",
 * //   ExportFilesMetadata: { // ExportFilesMetadata
 * //     Status: "SUCCEEDED" || "FAILED" || "PENDING",
 * //     StatusReason: "STRING_VALUE",
 * //     OutputUri: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartStreamSessionCommandInput - {@link StartStreamSessionCommandInput}
 * @returns {@link StartStreamSessionCommandOutput}
 * @see {@link StartStreamSessionCommandInput} for command's `input` shape.
 * @see {@link StartStreamSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Correct the request before you try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
 *
 *
 * @public
 */
export class StartStreamSessionCommand extends $Command
  .classBuilder<
    StartStreamSessionCommandInput,
    StartStreamSessionCommandOutput,
    GameLiftStreamsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftStreamsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLiftStreams", "StartStreamSession", {})
  .n("GameLiftStreamsClient", "StartStreamSessionCommand")
  .f(StartStreamSessionInputFilterSensitiveLog, StartStreamSessionOutputFilterSensitiveLog)
  .ser(se_StartStreamSessionCommand)
  .de(de_StartStreamSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartStreamSessionInput;
      output: StartStreamSessionOutput;
    };
    sdk: {
      input: StartStreamSessionCommandInput;
      output: StartStreamSessionCommandOutput;
    };
  };
}
