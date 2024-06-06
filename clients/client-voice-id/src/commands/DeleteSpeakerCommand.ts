// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSpeakerRequest, DeleteSpeakerRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteSpeakerCommand, se_DeleteSpeakerCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSpeakerCommand}.
 */
export interface DeleteSpeakerCommandInput extends DeleteSpeakerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSpeakerCommand}.
 */
export interface DeleteSpeakerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified speaker from Voice ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DeleteSpeakerCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DeleteSpeakerCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // DeleteSpeakerRequest
 *   DomainId: "STRING_VALUE", // required
 *   SpeakerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSpeakerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSpeakerCommandInput - {@link DeleteSpeakerCommandInput}
 * @returns {@link DeleteSpeakerCommandOutput}
 * @see {@link DeleteSpeakerCommandInput} for command's `input` shape.
 * @see {@link DeleteSpeakerCommandOutput} for command's `response` shape.
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
export class DeleteSpeakerCommand extends $Command
  .classBuilder<
    DeleteSpeakerCommandInput,
    DeleteSpeakerCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "DeleteSpeaker", {})
  .n("VoiceIDClient", "DeleteSpeakerCommand")
  .f(DeleteSpeakerRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteSpeakerCommand)
  .de(de_DeleteSpeakerCommand)
  .build() {}
