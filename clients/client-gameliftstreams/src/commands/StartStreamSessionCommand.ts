// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartStreamSessionInput, StartStreamSessionOutput } from "../models/models_0";
import { StartStreamSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This action initiates a new stream session and outputs connection information that clients can use to access the stream. A stream session refers to an instance of a stream that Amazon GameLift Streams transmits from the server to the end-user. A stream session runs on a compute resource that a stream group has allocated. The start stream session process works as follows:
 *
 * 1. Prerequisites:
 *
 *    - You must have a stream group in `ACTIVE` status
 *    - You must have idle or on-demand capacity in a stream group in the location you want to stream from
 *    - You must have at least one application associated to the stream group (use [AssociateApplications](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AssociateApplications.html) if needed)
 * 2. Start stream request:
 *
 *    - Your backend server calls **StartStreamSession** to initiate connection
 *    - Amazon GameLift Streams creates the stream session resource, assigns an Amazon Resource Name (ARN) value, and begins searching for available stream capacity to run the stream
 *    - Session transitions to `ACTIVATING` status
 * 3. Placement completion:
 *
 *    - If Amazon GameLift Streams is successful in finding capacity for the stream, the stream session status changes to `ACTIVE` status and **StartStreamSession** returns stream connection information
 *    - If Amazon GameLift Streams was not successful in finding capacity within the placement timeout period (defined according to the capacity type and platform type), the stream session status changes to `ERROR` status and **StartStreamSession** returns a `StatusReason` of `placementTimeout`
 * 4. Connection completion:
 *
 *    - Provide the new connection information to the requesting client
 *    - Client must establish connection within `ConnectionTimeoutSeconds` (specified in **StartStreamSession** parameters)
 *    - Session terminates automatically if client fails to connect in time
 *
 * For more information about the stream session lifecycle, see [Stream sessions](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/stream-sessions.html) in the *Amazon GameLift Streams Developer Guide*.
 *
 * Timeouts to be aware of that affect a stream session:
 *
 * - **Placement timeout**: The amount of time that Amazon GameLift Streams has to find capacity for a stream request. Placement timeout varies based on the capacity type used to fulfill your stream request:
 *
 *   - **Always-on capacity**: 75 seconds
 *   - **On-demand capacity**:
 *
 *     - Linux/Proton runtimes: 90 seconds
 *     - Windows runtime: 10 minutes
 * - **Connection timeout**: The amount of time that Amazon GameLift Streams waits for a client to connect to a stream session in `ACTIVE` status, or reconnect to a stream session in `PENDING_CLIENT_RECONNECTION` status, the latter of which occurs when a client disconnects or loses connection from a stream session. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. This value is specified by `ConnectionTimeoutSeconds` in the `StartStreamSession` parameters.
 * - **Maximum session length**: A stream session will be terminated after this amount of time has elapsed since it started, regardless of any existing client connections. This value is specified by `SessionLengthSeconds` in the `StartStreamSession` parameters.
 *
 * To start a new stream session, specify a stream group ID and application ID, along with the transport protocol and signal request to use with the stream session.
 *
 * For stream groups that have multiple locations, provide a set of locations ordered by priority using a `Locations` parameter. Amazon GameLift Streams will start a single stream session in the next available location. An application must be finished replicating to a remote location before the remote location can host a stream.
 *
 * To reconnect to a stream session after a client disconnects or loses connection, use [CreateStreamSessionConnection](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_CreateStreamSessionConnection.html).
 *
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
 *   PerformanceStatsConfiguration: { // PerformanceStatsConfiguration
 *     SharedWithClient: true || false,
 *   },
 *   RoleArn: "STRING_VALUE",
 *   DisplayConfiguration: { // DisplayConfiguration
 *     Resolution: { // Resolution
 *       Width: Number("int"), // required
 *       Height: Number("int"), // required
 *     },
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
 * //   StatusReason: "internalError" || "invalidSignalRequest" || "placementTimeout" || "applicationLogS3DestinationError" || "assumeRoleFailed" || "applicationExit" || "connectionTimeout" || "reconnectionTimeout" || "maxSessionLengthTimeout" || "idleTimeout" || "apiTerminated",
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
 * //   PerformanceStatsConfiguration: { // PerformanceStatsConfiguration
 * //     SharedWithClient: true || false,
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
 * //   RoleArn: "STRING_VALUE",
 * //   DisplayConfiguration: { // DisplayConfiguration
 * //     Resolution: { // Resolution
 * //       Width: Number("int"), // required
 * //       Height: Number("int"), // required
 * //     },
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
 *
 * You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Correct the request before you try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Retry the request after the suggested wait time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameter values in the request fail to satisfy the specified constraints. Correct the invalid parameter values before retrying the request.
 *
 * @throws {@link GameLiftStreamsServiceException}
 *
 * Base exception class for all service exceptions from GameLiftStreams service.
 *
 * @public
 */
export class StartStreamSessionCommand extends command<StartStreamSessionCommandInput, StartStreamSessionCommandOutput>(
  _ep0,
  _mw0,
  "StartStreamSession",
  StartStreamSession$
) {
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
