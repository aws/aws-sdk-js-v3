// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWatchlistRequest, UpdateWatchlistResponse } from "../models/models_0";
import { UpdateWatchlist$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, UpdateWatchlistCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, UpdateWatchlistCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
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
 *
 * You do not have sufficient permissions to perform this action. Check the error message and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed due to a conflict. Check the `ConflictType` and error message for more details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed due to an unknown error on the server side.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found. Check the `ResourceType` and error message for more details.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. Please slow down your request rate. Refer to [Amazon Connect Voice ID Service API throttling quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html##voiceid-api-quotas) and try your request again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed one or more validations; check the error message for more details.
 *
 * @throws {@link VoiceIDServiceException}
 *
 * Base exception class for all service exceptions from VoiceID service.
 *
 * @public
 */
export class UpdateWatchlistCommand extends command<UpdateWatchlistCommandInput, UpdateWatchlistCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWatchlist",
  UpdateWatchlist$
) {
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
