// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
import { CreateChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * <p>Creates a new channel and an associated stream key to start streaming.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // CreateChannelRequest
 *   name: "STRING_VALUE",
 *   latencyMode: "STRING_VALUE",
 *   type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 *   authorized: true || false,
 *   recordingConfigurationArn: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   insecureIngest: true || false,
 *   preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 *   playbackRestrictionPolicyArn: "STRING_VALUE",
 *   multitrackInputConfiguration: { // MultitrackInputConfiguration
 *     enabled: true || false,
 *     policy: "ALLOW" || "REQUIRE",
 *     maximumResolution: "SD" || "HD" || "FULL_HD",
 *   },
 *   containerFormat: "STRING_VALUE",
 *   adConfigurationArn: "STRING_VALUE",
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelResponse
 * //   channel: { // Channel
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     latencyMode: "STRING_VALUE",
 * //     type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 * //     recordingConfigurationArn: "STRING_VALUE",
 * //     ingestEndpoint: "STRING_VALUE",
 * //     playbackUrl: "STRING_VALUE",
 * //     authorized: true || false,
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     insecureIngest: true || false,
 * //     preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 * //     srt: { // Srt
 * //       endpoint: "STRING_VALUE",
 * //       passphrase: "STRING_VALUE",
 * //     },
 * //     playbackRestrictionPolicyArn: "STRING_VALUE",
 * //     multitrackInputConfiguration: { // MultitrackInputConfiguration
 * //       enabled: true || false,
 * //       policy: "ALLOW" || "REQUIRE",
 * //       maximumResolution: "SD" || "HD" || "FULL_HD",
 * //     },
 * //     containerFormat: "STRING_VALUE",
 * //     adConfigurationArn: "STRING_VALUE",
 * //   },
 * //   streamKey: { // StreamKey
 * //     arn: "STRING_VALUE",
 * //     value: "STRING_VALUE",
 * //     channelArn: "STRING_VALUE",
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p>Your account is pending verification.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class CreateChannelCommand extends command<CreateChannelCommandInput, CreateChannelCommandOutput>(
  _ep0,
  _mw0,
  "CreateChannel",
  CreateChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelRequest;
      output: CreateChannelResponse;
    };
    sdk: {
      input: CreateChannelCommandInput;
      output: CreateChannelCommandOutput;
    };
  };
}
