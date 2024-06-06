// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  UpdateChannelRequest,
  UpdateChannelResponse,
  UpdateChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateChannelCommand, se_UpdateChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandInput extends UpdateChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandOutput extends UpdateChannelResponse, __MetadataBearer {}

/**
 * <p>Updates a channel's configuration. Live channels cannot be updated. You must stop the
 *       ongoing stream, update the channel, and restart the stream for the changes to take
 *       effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, UpdateChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, UpdateChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // UpdateChannelRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   latencyMode: "STRING_VALUE",
 *   type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 *   authorized: true || false,
 *   recordingConfigurationArn: "STRING_VALUE",
 *   insecureIngest: true || false,
 *   preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 *   playbackRestrictionPolicyArn: "STRING_VALUE",
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateChannelCommandInput - {@link UpdateChannelCommandInput}
 * @returns {@link UpdateChannelCommandOutput}
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 * @public
 */
export class UpdateChannelCommand extends $Command
  .classBuilder<
    UpdateChannelCommandInput,
    UpdateChannelCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "UpdateChannel", {})
  .n("IvsClient", "UpdateChannelCommand")
  .f(void 0, UpdateChannelResponseFilterSensitiveLog)
  .ser(se_UpdateChannelCommand)
  .de(de_UpdateChannelCommand)
  .build() {}
