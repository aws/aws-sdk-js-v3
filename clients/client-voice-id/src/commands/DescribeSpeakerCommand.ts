// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSpeakerRequest, DescribeSpeakerResponse } from "../models/models_0";
import { DescribeSpeaker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSpeakerCommand}.
 */
export interface DescribeSpeakerCommandInput extends DescribeSpeakerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpeakerCommand}.
 */
export interface DescribeSpeakerCommandOutput extends DescribeSpeakerResponse, __MetadataBearer {}

/**
 * Describes the specified speaker.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, DescribeSpeakerCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, DescribeSpeakerCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // DescribeSpeakerRequest
 *   DomainId: "STRING_VALUE", // required
 *   SpeakerId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSpeakerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpeakerResponse
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
 * @param DescribeSpeakerCommandInput - {@link DescribeSpeakerCommandInput}
 * @returns {@link DescribeSpeakerCommandOutput}
 * @see {@link DescribeSpeakerCommandInput} for command's `input` shape.
 * @see {@link DescribeSpeakerCommandOutput} for command's `response` shape.
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
export class DescribeSpeakerCommand extends command<DescribeSpeakerCommandInput, DescribeSpeakerCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSpeaker",
  DescribeSpeaker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpeakerRequest;
      output: DescribeSpeakerResponse;
    };
    sdk: {
      input: DescribeSpeakerCommandInput;
      output: DescribeSpeakerCommandOutput;
    };
  };
}
