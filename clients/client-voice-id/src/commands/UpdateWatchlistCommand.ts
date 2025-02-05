// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateWatchlistRequest,
  UpdateWatchlistRequestFilterSensitiveLog,
  UpdateWatchlistResponse,
  UpdateWatchlistResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateWatchlistCommand, se_UpdateWatchlistCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWatchlistCommand}.
 */
export interface UpdateWatchlistCommandInput extends UpdateWatchlistRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWatchlistCommand}.
 */
export interface UpdateWatchlistCommandOutput extends UpdateWatchlistResponse, __MetadataBearer {}

/**
 * <p>Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, UpdateWatchlistCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, UpdateWatchlistCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VoiceIDClient(config);
 * const input = { // UpdateWatchlistRequest
 *   DomainId: "STRING_VALUE", // required
 *   WatchlistId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateWatchlistCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWatchlistResponse
 * //   Watchlist: { // Watchlist
 * //     DomainId: "STRING_VALUE",
 * //     WatchlistId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DefaultWatchlist: true || false,
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWatchlistCommandInput - {@link UpdateWatchlistCommandInput}
 * @returns {@link UpdateWatchlistCommandOutput}
 * @see {@link UpdateWatchlistCommandInput} for command's `input` shape.
 * @see {@link UpdateWatchlistCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed due to a conflict. Check the <code>ConflictType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unknown error on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the <code>ResourceType</code> and error
 *             message for more details.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please slow down your request rate.
 *             Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas">
 *                 Amazon Connect Voice ID Service API throttling quotas </a> and try your
 *             request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed one or more validations; check the error message for more
 *             details.</p>
 *
 * @throws {@link VoiceIDServiceException}
 * <p>Base exception class for all service exceptions from VoiceID service.</p>
 *
 * @public
 */
export class UpdateWatchlistCommand extends $Command
  .classBuilder<
    UpdateWatchlistCommandInput,
    UpdateWatchlistCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "UpdateWatchlist", {})
  .n("VoiceIDClient", "UpdateWatchlistCommand")
  .f(UpdateWatchlistRequestFilterSensitiveLog, UpdateWatchlistResponseFilterSensitiveLog)
  .ser(se_UpdateWatchlistCommand)
  .de(de_UpdateWatchlistCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWatchlistRequest;
      output: UpdateWatchlistResponse;
    };
    sdk: {
      input: UpdateWatchlistCommandInput;
      output: UpdateWatchlistCommandOutput;
    };
  };
}
