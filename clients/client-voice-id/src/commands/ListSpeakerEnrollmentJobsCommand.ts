// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListSpeakerEnrollmentJobsRequest,
  ListSpeakerEnrollmentJobsResponse,
  ListSpeakerEnrollmentJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListSpeakerEnrollmentJobsCommand, se_ListSpeakerEnrollmentJobsCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSpeakerEnrollmentJobsCommand}.
 */
export interface ListSpeakerEnrollmentJobsCommandInput extends ListSpeakerEnrollmentJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSpeakerEnrollmentJobsCommand}.
 */
export interface ListSpeakerEnrollmentJobsCommandOutput extends ListSpeakerEnrollmentJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all the speaker enrollment jobs in the domain with the specified
 *                 <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all
 *             jobs with all possible speaker enrollment job statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListSpeakerEnrollmentJobsCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListSpeakerEnrollmentJobsCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new VoiceIDClient(config);
 * const input = { // ListSpeakerEnrollmentJobsRequest
 *   DomainId: "STRING_VALUE", // required
 *   JobStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSpeakerEnrollmentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSpeakerEnrollmentJobsResponse
 * //   JobSummaries: [ // SpeakerEnrollmentJobSummaries
 * //     { // SpeakerEnrollmentJobSummary
 * //       JobName: "STRING_VALUE",
 * //       JobId: "STRING_VALUE",
 * //       JobStatus: "STRING_VALUE",
 * //       DomainId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       EndedAt: new Date("TIMESTAMP"),
 * //       FailureDetails: { // FailureDetails
 * //         StatusCode: Number("int"),
 * //         Message: "STRING_VALUE",
 * //       },
 * //       JobProgress: { // JobProgress
 * //         PercentComplete: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpeakerEnrollmentJobsCommandInput - {@link ListSpeakerEnrollmentJobsCommandInput}
 * @returns {@link ListSpeakerEnrollmentJobsCommandOutput}
 * @see {@link ListSpeakerEnrollmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListSpeakerEnrollmentJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListSpeakerEnrollmentJobsCommand extends $Command
  .classBuilder<
    ListSpeakerEnrollmentJobsCommandInput,
    ListSpeakerEnrollmentJobsCommandOutput,
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
  .s("VoiceID", "ListSpeakerEnrollmentJobs", {})
  .n("VoiceIDClient", "ListSpeakerEnrollmentJobsCommand")
  .f(void 0, ListSpeakerEnrollmentJobsResponseFilterSensitiveLog)
  .ser(se_ListSpeakerEnrollmentJobsCommand)
  .de(de_ListSpeakerEnrollmentJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSpeakerEnrollmentJobsRequest;
      output: ListSpeakerEnrollmentJobsResponse;
    };
    sdk: {
      input: ListSpeakerEnrollmentJobsCommandInput;
      output: ListSpeakerEnrollmentJobsCommandOutput;
    };
  };
}
