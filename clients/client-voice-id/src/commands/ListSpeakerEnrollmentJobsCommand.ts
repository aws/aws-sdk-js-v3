// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSpeakerEnrollmentJobsRequest, ListSpeakerEnrollmentJobsResponse } from "../models/models_0";
import { ListSpeakerEnrollmentJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all the speaker enrollment jobs in the domain with the specified `JobStatus`. If `JobStatus` is not provided, this lists all jobs with all possible speaker enrollment job statuses.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListSpeakerEnrollmentJobsCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListSpeakerEnrollmentJobsCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
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
export class ListSpeakerEnrollmentJobsCommand extends command<ListSpeakerEnrollmentJobsCommandInput, ListSpeakerEnrollmentJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListSpeakerEnrollmentJobs",
  ListSpeakerEnrollmentJobs$
) {
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
