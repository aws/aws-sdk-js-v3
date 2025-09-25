// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFraudsterRequest } from "../models/models_0";
import { DeleteFraudster } from "../schemas/schemas_5_Fraudster";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFraudsterCommand}.
 */
export interface DeleteFraudsterCommandInput extends DeleteFraudsterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFraudsterCommand}.
 */
export interface DeleteFraudsterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DeleteFraudsterCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DeleteFraudsterCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DeleteFraudsterRequest
 *   DomainId: "STRING_VALUE", // required
 *   FraudsterId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFraudsterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFraudsterCommandInput - {@link DeleteFraudsterCommandInput}
 * @returns {@link DeleteFraudsterCommandOutput}
 * @see {@link DeleteFraudsterCommandInput} for command's `input` shape.
 * @see {@link DeleteFraudsterCommandOutput} for command's `response` shape.
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
export class DeleteFraudsterCommand extends $Command
  .classBuilder<
    DeleteFraudsterCommandInput,
    DeleteFraudsterCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VoiceID", "DeleteFraudster", {})
  .n("VoiceIDClient", "DeleteFraudsterCommand")
  .sc(DeleteFraudster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFraudsterRequest;
      output: {};
    };
    sdk: {
      input: DeleteFraudsterCommandInput;
      output: DeleteFraudsterCommandOutput;
    };
  };
}
