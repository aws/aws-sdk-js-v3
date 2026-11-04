// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFraudsterRequest, DescribeFraudsterResponse } from "../models/models_0";
import { DescribeFraudster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeFraudsterCommand}.
 */
export interface DescribeFraudsterCommandInput extends DescribeFraudsterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFraudsterCommand}.
 */
export interface DescribeFraudsterCommandOutput extends DescribeFraudsterResponse, __MetadataBearer {}

/**
 * Describes the specified fraudster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DescribeFraudsterCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DescribeFraudsterCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DescribeFraudsterRequest
 *   DomainId: "STRING_VALUE", // required
 *   FraudsterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeFraudsterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFraudsterResponse
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
 * @param DescribeFraudsterCommandInput - {@link DescribeFraudsterCommandInput}
 * @returns {@link DescribeFraudsterCommandOutput}
 * @see {@link DescribeFraudsterCommandInput} for command's `input` shape.
 * @see {@link DescribeFraudsterCommandOutput} for command's `response` shape.
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
export class DescribeFraudsterCommand extends command<DescribeFraudsterCommandInput, DescribeFraudsterCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFraudster",
  DescribeFraudster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFraudsterRequest;
      output: DescribeFraudsterResponse;
    };
    sdk: {
      input: DescribeFraudsterCommandInput;
      output: DescribeFraudsterCommandOutput;
    };
  };
}
