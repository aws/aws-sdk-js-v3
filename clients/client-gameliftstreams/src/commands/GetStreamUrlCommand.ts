// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStreamUrlInput, GetStreamUrlOutput } from "../models/models_0";
import { GetStreamUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStreamUrlCommand}.
 */
export interface GetStreamUrlCommandInput extends GetStreamUrlInput {}
/**
 * @public
 *
 * The output of {@link GetStreamUrlCommand}.
 */
export interface GetStreamUrlCommandOutput extends GetStreamUrlOutput, __MetadataBearer {}

/**
 * <p>Retrieves properties for a stream URL, including its current status, usage, and the stream sessions started through it.</p> <p>If you delete the stream group or application that backs the stream URL, this operation updates the status of the stream URL to <code>REVOKED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, GetStreamUrlCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, GetStreamUrlCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // GetStreamUrlInput
 *   Identifier: "STRING_VALUE", // required
 *   StreamUrlIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetStreamUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamUrlOutput
 * //   Arn: "STRING_VALUE", // required
 * //   StreamUrlId: "STRING_VALUE",
 * //   StreamUrl: "STRING_VALUE",
 * //   Status: "ACTIVE" || "EXPIRED" || "REVOKED" || "LIMIT_REACHED",
 * //   StatusReason: "userRevoked" || "revokedAndTerminatingSessions" || "revokedAndSessionsTerminated" || "streamGroupDeleted" || "applicationDeleted",
 * //   ExpiresAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UsageLimit: Number("int"),
 * //   RemainingUses: Number("int"),
 * //   StreamGroupArn: "STRING_VALUE",
 * //   ApplicationArn: "STRING_VALUE",
 * //   Protocol: "WebRTC",
 * //   Locations: [ // LocationList
 * //     "STRING_VALUE",
 * //   ],
 * //   SessionLengthSeconds: Number("int"),
 * //   Description: "STRING_VALUE",
 * //   AdditionalLaunchArgs: [ // GameLaunchArgList
 * //     "STRING_VALUE",
 * //   ],
 * //   AdditionalEnvironmentVariables: { // EnvironmentVariables
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   DisplayConfiguration: { // DisplayConfiguration
 * //     Resolution: { // Resolution
 * //       Width: Number("int"), // required
 * //       Height: Number("int"), // required
 * //     },
 * //   },
 * //   StreamSessions: [ // StreamSessionSummaryList
 * //     { // StreamSessionSummary
 * //       Arn: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Status: "ACTIVATING" || "ACTIVE" || "CONNECTED" || "PENDING_CLIENT_RECONNECTION" || "RECONNECTING" || "TERMINATING" || "TERMINATED" || "ERROR",
 * //       StatusReason: "internalError" || "invalidSignalRequest" || "placementTimeout" || "applicationLogS3DestinationError" || "assumeRoleFailed" || "applicationExit" || "connectionTimeout" || "reconnectionTimeout" || "maxSessionLengthTimeout" || "idleTimeout" || "apiTerminated",
 * //       Protocol: "WebRTC",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ApplicationArn: "STRING_VALUE",
 * //       ExportFilesMetadata: { // ExportFilesMetadata
 * //         Status: "SUCCEEDED" || "FAILED" || "PENDING",
 * //         StatusReason: "STRING_VALUE",
 * //         OutputUri: "STRING_VALUE",
 * //       },
 * //       Location: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetStreamUrlCommandInput - {@link GetStreamUrlCommandInput}
 * @returns {@link GetStreamUrlCommandOutput}
 * @see {@link GetStreamUrlCommandInput} for command's `input` shape.
 * @see {@link GetStreamUrlCommandOutput} for command's `response` shape.
 * @see {@link GameLiftStreamsClientResolvedConfig | config} for GameLiftStreamsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the required permissions to access this Amazon GameLift Streams resource. Correct the permissions before you try again.</p>
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
export class GetStreamUrlCommand extends command<GetStreamUrlCommandInput, GetStreamUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetStreamUrl",
  GetStreamUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamUrlInput;
      output: GetStreamUrlOutput;
    };
    sdk: {
      input: GetStreamUrlCommandInput;
      output: GetStreamUrlCommandOutput;
    };
  };
}
