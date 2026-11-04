// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateFraudsterRequest, AssociateFraudsterResponse } from "../models/models_0";
import { AssociateFraudster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateFraudsterCommand}.
 */
export interface AssociateFraudsterCommandInput extends AssociateFraudsterRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFraudsterCommand}.
 */
export interface AssociateFraudsterCommandOutput extends AssociateFraudsterResponse, __MetadataBearer {}

/**
 * Associates the fraudsters with the watchlist specified in the same domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, AssociateFraudsterCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, AssociateFraudsterCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // AssociateFraudsterRequest
 *   DomainId: "STRING_VALUE", // required
 *   WatchlistId: "STRING_VALUE", // required
 *   FraudsterId: "STRING_VALUE", // required
 * };
 * const command = new AssociateFraudsterCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFraudsterResponse
 * //   Fraudster: { // Fraudster
 * //     DomainId: "STRING_VALUE",
 * //     GeneratedFraudsterId: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     WatchlistIds: [ // ResponseWatchlistIds
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateFraudsterCommandInput - {@link AssociateFraudsterCommandInput}
 * @returns {@link AssociateFraudsterCommandOutput}
 * @see {@link AssociateFraudsterCommandInput} for command's `input` shape.
 * @see {@link AssociateFraudsterCommandOutput} for command's `response` shape.
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
export class AssociateFraudsterCommand extends command<AssociateFraudsterCommandInput, AssociateFraudsterCommandOutput>(
  _ep0,
  _mw0,
  "AssociateFraudster",
  AssociateFraudster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFraudsterRequest;
      output: AssociateFraudsterResponse;
    };
    sdk: {
      input: AssociateFraudsterCommandInput;
      output: AssociateFraudsterCommandOutput;
    };
  };
}
