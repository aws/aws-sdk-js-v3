// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamUrlInput, CreateStreamUrlOutput } from "../models/models_0";
import { CreateStreamUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamUrlCommand}.
 */
export interface CreateStreamUrlCommandInput extends CreateStreamUrlInput {}
/**
 * @public
 *
 * The output of {@link CreateStreamUrlCommand}.
 */
export interface CreateStreamUrlCommandOutput extends CreateStreamUrlOutput, __MetadataBearer {}

/**
 * <p>Creates a stream URL that grants temporary access to a stream session in a web browser without requiring an Amazon Web Services account or client integration.</p> <p>You can use the stream URL to start a stream session up to the number of times set by <code>UsageLimit</code>, until it expires after <code>UrlExpiresAfterMinutes</code>. Each successful use starts a new stream session.</p> <p>To make the request idempotent, provide a <code>ClientToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftStreamsClient, CreateStreamUrlCommand } from "@aws-sdk/client-gameliftstreams"; // ES Modules import
 * // const { GameLiftStreamsClient, CreateStreamUrlCommand } = require("@aws-sdk/client-gameliftstreams"); // CommonJS import
 * // import type { GameLiftStreamsClientConfig } from "@aws-sdk/client-gameliftstreams";
 * const config = {}; // type is GameLiftStreamsClientConfig
 * const client = new GameLiftStreamsClient(config);
 * const input = { // CreateStreamUrlInput
 *   Identifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   Protocol: "WebRTC", // required
 *   UrlExpiresAfterMinutes: Number("int"), // required
 *   UsageLimit: Number("int"),
 *   Description: "STRING_VALUE",
 *   Locations: [ // LocationList // required
 *     "STRING_VALUE",
 *   ],
 *   SessionLengthSeconds: Number("int"),
 *   AdditionalLaunchArgs: [ // GameLaunchArgList
 *     "STRING_VALUE",
 *   ],
 *   AdditionalEnvironmentVariables: { // EnvironmentVariables
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE",
 *   DisplayConfiguration: { // DisplayConfiguration
 *     Resolution: { // Resolution
 *       Width: Number("int"), // required
 *       Height: Number("int"), // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateStreamUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamUrlOutput
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
 * // };
 *
 * ```
 *
 * @param CreateStreamUrlCommandInput - {@link CreateStreamUrlCommandInput}
 * @returns {@link CreateStreamUrlCommandOutput}
 * @see {@link CreateStreamUrlCommandInput} for command's `input` shape.
 * @see {@link CreateStreamUrlCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause the resource to exceed an allowed service quota. Resolve the issue before you try again.</p>
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
export class CreateStreamUrlCommand extends command<CreateStreamUrlCommandInput, CreateStreamUrlCommandOutput>(
  _ep0,
  _mw0,
  "CreateStreamUrl",
  CreateStreamUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamUrlInput;
      output: CreateStreamUrlOutput;
    };
    sdk: {
      input: CreateStreamUrlCommandInput;
      output: CreateStreamUrlCommandOutput;
    };
  };
}
