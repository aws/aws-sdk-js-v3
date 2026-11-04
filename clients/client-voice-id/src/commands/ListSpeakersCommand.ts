// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSpeakersRequest, ListSpeakersResponse } from "../models/models_0";
import { ListSpeakers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSpeakersCommand}.
 */
export interface ListSpeakersCommandInput extends ListSpeakersRequest {}
/**
 * @public
 *
 * The output of {@link ListSpeakersCommand}.
 */
export interface ListSpeakersCommandOutput extends ListSpeakersResponse, __MetadataBearer {}

/**
 * Lists all speakers in a specified domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListSpeakersCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListSpeakersCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // ListSpeakersRequest
 *   DomainId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSpeakersCommand(input);
 * const response = await client.send(command);
 * // { // ListSpeakersResponse
 * //   SpeakerSummaries: [ // SpeakerSummaries
 * //     { // SpeakerSummary
 * //       DomainId: "STRING_VALUE",
 * //       CustomerSpeakerId: "STRING_VALUE",
 * //       GeneratedSpeakerId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       LastAccessedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpeakersCommandInput - {@link ListSpeakersCommandInput}
 * @returns {@link ListSpeakersCommandOutput}
 * @see {@link ListSpeakersCommandInput} for command's `input` shape.
 * @see {@link ListSpeakersCommandOutput} for command's `response` shape.
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
export class ListSpeakersCommand extends command<ListSpeakersCommandInput, ListSpeakersCommandOutput>(
  _ep0,
  _mw0,
  "ListSpeakers",
  ListSpeakers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpeakersRequest;
      output: ListSpeakersResponse;
    };
    sdk: {
      input: ListSpeakersCommandInput;
      output: ListSpeakersCommandOutput;
    };
  };
}
