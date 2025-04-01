// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  OptOutSpeakerRequest,
  OptOutSpeakerRequestFilterSensitiveLog,
  OptOutSpeakerResponse,
  OptOutSpeakerResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_OptOutSpeakerCommand, se_OptOutSpeakerCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OptOutSpeakerCommand}.
 */
export interface OptOutSpeakerCommandInput extends OptOutSpeakerRequest {}
/**
 * @public
 *
 * The output of {@link OptOutSpeakerCommand}.
 */
export interface OptOutSpeakerCommandOutput extends OptOutSpeakerResponse, __MetadataBearer {}

/**
 * <p>Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or
 *             not they already exist in Voice ID. If they don't yet exist, a new speaker is created
 *             in an opted out state. If they already exist, their existing status is overridden and
 *             they are opted out. Enrollment and evaluation authentication requests are rejected for
 *             opted out speakers, and opted out speakers have no voice embeddings stored in
 *             Voice ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, OptOutSpeakerCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, OptOutSpeakerCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * const client = new VoiceIDClient(config);
 * const input = { // OptOutSpeakerRequest
 *   DomainId: "STRING_VALUE", // required
 *   SpeakerId: "STRING_VALUE", // required
 * };
 * const command = new OptOutSpeakerCommand(input);
 * const response = await client.send(command);
 * // { // OptOutSpeakerResponse
 * //   Speaker: { // Speaker
 * //     DomainId: "STRING_VALUE",
 * //     CustomerSpeakerId: "STRING_VALUE",
 * //     GeneratedSpeakerId: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     LastAccessedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param OptOutSpeakerCommandInput - {@link OptOutSpeakerCommandInput}
 * @returns {@link OptOutSpeakerCommandOutput}
 * @see {@link OptOutSpeakerCommandInput} for command's `input` shape.
 * @see {@link OptOutSpeakerCommandOutput} for command's `response` shape.
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
export class OptOutSpeakerCommand extends $Command
  .classBuilder<
    OptOutSpeakerCommandInput,
    OptOutSpeakerCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VoiceID", "OptOutSpeaker", {})
  .n("VoiceIDClient", "OptOutSpeakerCommand")
  .f(OptOutSpeakerRequestFilterSensitiveLog, OptOutSpeakerResponseFilterSensitiveLog)
  .ser(se_OptOutSpeakerCommand)
  .de(de_OptOutSpeakerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OptOutSpeakerRequest;
      output: OptOutSpeakerResponse;
    };
    sdk: {
      input: OptOutSpeakerCommandInput;
      output: OptOutSpeakerCommandOutput;
    };
  };
}
