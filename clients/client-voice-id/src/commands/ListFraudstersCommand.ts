// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFraudstersRequest, ListFraudstersResponse } from "../models/models_0";
import { ListFraudsters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFraudstersCommand}.
 */
export interface ListFraudstersCommandInput extends ListFraudstersRequest {}
/**
 * @public
 *
 * The output of {@link ListFraudstersCommand}.
 */
export interface ListFraudstersCommandOutput extends ListFraudstersResponse, __MetadataBearer {}

/**
 * Lists all fraudsters in a specified watchlist or domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListFraudstersCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListFraudstersCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // ListFraudstersRequest
 *   DomainId: "STRING_VALUE", // required
 *   WatchlistId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFraudstersCommand(input);
 * const response = await client.send(command);
 * // { // ListFraudstersResponse
 * //   FraudsterSummaries: [ // FraudsterSummaries
 * //     { // FraudsterSummary
 * //       DomainId: "STRING_VALUE",
 * //       GeneratedFraudsterId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       WatchlistIds: [ // ResponseWatchlistIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFraudstersCommandInput - {@link ListFraudstersCommandInput}
 * @returns {@link ListFraudstersCommandOutput}
 * @see {@link ListFraudstersCommandInput} for command's `input` shape.
 * @see {@link ListFraudstersCommandOutput} for command's `response` shape.
 * @see {@link VoiceIDClientResolvedConfig | config} for VoiceIDClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action. Check the error message and try again.
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
export class ListFraudstersCommand extends command<ListFraudstersCommandInput, ListFraudstersCommandOutput>(
  _ep0,
  _mw0,
  "ListFraudsters",
  ListFraudsters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFraudstersRequest;
      output: ListFraudstersResponse;
    };
    sdk: {
      input: ListFraudstersCommandInput;
      output: ListFraudstersCommandOutput;
    };
  };
}
