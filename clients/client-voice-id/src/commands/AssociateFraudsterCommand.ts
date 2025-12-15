// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateFraudsterRequest, AssociateFraudsterResponse } from "../models/models_0";
import { AssociateFraudster$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Associates the fraudsters with the watchlist specified in the same domain. </p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service quota. Refer to <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#voiceid-quotas">Voice ID Service Quotas</a> and try your request again.</p>
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
 *
 * @public
 */
export class AssociateFraudsterCommand extends $Command
  .classBuilder<
    AssociateFraudsterCommandInput,
    AssociateFraudsterCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VoiceID", "AssociateFraudster", {})
  .n("VoiceIDClient", "AssociateFraudsterCommand")
  .sc(AssociateFraudster$)
  .build() {
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
