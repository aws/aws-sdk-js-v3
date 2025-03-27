// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSpeakersRequest, ListSpeakersResponse, ListSpeakersResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListSpeakersCommand, se_ListSpeakersCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all speakers in a specified domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListSpeakersCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListSpeakersCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
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
 *  <p>You do not have sufficient permissions to perform this action. Check the error message
 *             and try again.</p>
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
export class ListSpeakersCommand extends $Command
  .classBuilder<
    ListSpeakersCommandInput,
    ListSpeakersCommandOutput,
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
  .s("VoiceID", "ListSpeakers", {})
  .n("VoiceIDClient", "ListSpeakersCommand")
  .f(void 0, ListSpeakersResponseFilterSensitiveLog)
  .ser(se_ListSpeakersCommand)
  .de(de_ListSpeakersCommand)
  .build() {
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
