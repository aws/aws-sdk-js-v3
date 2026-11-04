// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { OptOutSpeakerRequest, OptOutSpeakerResponse } from "../models/models_0";
import { OptOutSpeaker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, OptOutSpeakerCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, OptOutSpeakerCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
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
export class OptOutSpeakerCommand extends command<OptOutSpeakerCommandInput, OptOutSpeakerCommandOutput>(
  _ep0,
  _mw0,
  "OptOutSpeaker",
  OptOutSpeaker$
) {
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
