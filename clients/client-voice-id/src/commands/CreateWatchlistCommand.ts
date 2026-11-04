// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWatchlistRequest, CreateWatchlistResponse } from "../models/models_0";
import { CreateWatchlist$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWatchlistCommand}.
 */
export interface CreateWatchlistCommandInput extends CreateWatchlistRequest {}
/**
 * @public
 *
 * The output of {@link CreateWatchlistCommand}.
 */
export interface CreateWatchlistCommandOutput extends CreateWatchlistResponse, __MetadataBearer {}

/**
 * Creates a watchlist that fraudsters can be a part of.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, CreateWatchlistCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, CreateWatchlistCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // CreateWatchlistRequest
 *   DomainId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateWatchlistCommand(input);
 * const response = await client.send(command);
 * // { // CreateWatchlistResponse
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
 * @param CreateWatchlistCommandInput - {@link CreateWatchlistCommandInput}
 * @returns {@link CreateWatchlistCommandOutput}
 * @see {@link CreateWatchlistCommandInput} for command's `input` shape.
 * @see {@link CreateWatchlistCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded the service quota. Refer to [Voice ID Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#voiceid-quotas) and try your request again.
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
export class CreateWatchlistCommand extends command<CreateWatchlistCommandInput, CreateWatchlistCommandOutput>(
  _ep0,
  _mw0,
  "CreateWatchlist",
  CreateWatchlist$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWatchlistRequest;
      output: CreateWatchlistResponse;
    };
    sdk: {
      input: CreateWatchlistCommandInput;
      output: CreateWatchlistCommandOutput;
    };
  };
}
