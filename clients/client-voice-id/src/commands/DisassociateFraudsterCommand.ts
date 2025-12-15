// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateFraudsterRequest, DisassociateFraudsterResponse } from "../models/models_0";
import { DisassociateFraudster$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFraudsterCommand}.
 */
export interface DisassociateFraudsterCommandInput extends DisassociateFraudsterRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFraudsterCommand}.
 */
export interface DisassociateFraudsterCommandOutput extends DisassociateFraudsterResponse, __MetadataBearer {}

/**
 * <p>Disassociates the fraudsters from the watchlist specified. Voice ID always expects a
 *             fraudster to be a part of at least one watchlist. If
 *             you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DisassociateFraudsterCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DisassociateFraudsterCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DisassociateFraudsterRequest
 *   DomainId: "STRING_VALUE", // required
 *   WatchlistId: "STRING_VALUE", // required
 *   FraudsterId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateFraudsterCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFraudsterResponse
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
 * @param DisassociateFraudsterCommandInput - {@link DisassociateFraudsterCommandInput}
 * @returns {@link DisassociateFraudsterCommandOutput}
 * @see {@link DisassociateFraudsterCommandInput} for command's `input` shape.
 * @see {@link DisassociateFraudsterCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DisassociateFraudsterCommand extends $Command
  .classBuilder<
    DisassociateFraudsterCommandInput,
    DisassociateFraudsterCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VoiceID", "DisassociateFraudster", {})
  .n("VoiceIDClient", "DisassociateFraudsterCommand")
  .sc(DisassociateFraudster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFraudsterRequest;
      output: DisassociateFraudsterResponse;
    };
    sdk: {
      input: DisassociateFraudsterCommandInput;
      output: DisassociateFraudsterCommandOutput;
    };
  };
}
