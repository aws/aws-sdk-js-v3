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
 * <p> This action initiates a new stream session and outputs connection information that clients can use to access the stream. A stream
 *             session refers to an instance of a stream that Amazon GameLift Streams transmits from the server to the end-user. A stream session runs on a compute
 *             resource, or stream capacity, that a stream group has allocated. </p>
 *          <p>To start a new stream session, specify a stream group and application ID, along with the transport protocol and signal request settings
 *             to use with the stream. You must have associated at least one application to the stream group before starting a stream session, either when
 *             creating the stream group, or by using <a>AssociateApplications</a>.</p>
 *          <p> For stream groups that have multiple locations, provide a set of locations ordered by priority by setting <code>Locations</code>.
 *             Amazon GameLift Streams will start a single stream session in the next available location. An application must be finished replicating in a remote
 *             location before the remote location can host a stream. </p>
 *          <p> If the request is successful, Amazon GameLift Streams begins to prepare the stream. Amazon GameLift Streams assigns an Amazon Resource Name (ARN) value to the stream
 *             session resource and sets the status to <code>ACTIVATING</code>. During the stream preparation process, Amazon GameLift Streams queues the request and
 *             searches for available stream capacity to run the stream. This can result to one of the following: </p>
 *          <ul>
 *             <li>
 *                <p> Amazon GameLift Streams identifies an available compute resource to run the application content and start the stream. When the stream is ready,
 *                     the stream session's status changes to <code>ACTIVE</code> and includes stream connection information. Provide the connection
 *                     information to the requesting client to join the stream session.</p>
 *             </li>
 *             <li>
 *                <p> Amazon GameLift Streams doesn't identify an available resource within a certain time, set by <code>ClientToken</code>. In this case, Amazon GameLift Streams
 *                     stops processing the request, and the stream session object status changes to <code>ERROR</code> with status reason
 *                         <code>placementTimeout</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, StartStreamSessionCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, StartStreamSessionCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
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
 * //   StatusReason: "internalError" || "invalidSignalRequest" || "placementTimeout" || "applicationLogS3DestinationError",
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
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the
 *          permissions before you try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request after the
 *          suggested wait time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter values in the request fail to satisfy the specified constraints.
 *          Correct the invalid parameter values before retrying the request.</p>
 *
 * @throws {@link GameLiftStreamsServiceException}
 * <p>Base exception class for all service exceptions from GameLiftStreams service.</p>
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
