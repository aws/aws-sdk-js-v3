// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWatchlistRequest } from "../models/models_0";
import { DeleteWatchlist$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWatchlistCommand}.
 */
export interface DeleteWatchlistCommandInput extends DeleteWatchlistRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWatchlistCommand}.
 */
export interface DeleteWatchlistCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DeleteWatchlistCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DeleteWatchlistCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DeleteWatchlistRequest
 *   DomainId: "STRING_VALUE", // required
 *   WatchlistId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWatchlistCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWatchlistCommandInput - {@link DeleteWatchlistCommandInput}
 * @returns {@link DeleteWatchlistCommandOutput}
 * @see {@link DeleteWatchlistCommandInput} for command's `input` shape.
 * @see {@link DeleteWatchlistCommandOutput} for command's `response` shape.
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
export class DeleteWatchlistCommand extends command<DeleteWatchlistCommandInput, DeleteWatchlistCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWatchlist",
  DeleteWatchlist$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWatchlistRequest;
      output: {};
    };
    sdk: {
      input: DeleteWatchlistCommandInput;
      output: DeleteWatchlistCommandOutput;
    };
  };
}
