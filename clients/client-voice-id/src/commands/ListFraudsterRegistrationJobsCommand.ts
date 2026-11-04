// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFraudsterRegistrationJobsRequest, ListFraudsterRegistrationJobsResponse } from "../models/models_0";
import { ListFraudsterRegistrationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFraudsterRegistrationJobsCommand}.
 */
export interface ListFraudsterRegistrationJobsCommandInput extends ListFraudsterRegistrationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListFraudsterRegistrationJobsCommand}.
 */
export interface ListFraudsterRegistrationJobsCommandOutput extends ListFraudsterRegistrationJobsResponse, __MetadataBearer {}

/**
 * Lists all the fraudster registration jobs in the domain with the given `JobStatus`. If `JobStatus` is not provided, this lists all fraudster registration jobs in the given domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VoiceIDClient, ListFraudsterRegistrationJobsCommand } from "@aws-sdk/client-voice-id"; // ES Modules import
 * // const { VoiceIDClient, ListFraudsterRegistrationJobsCommand } = require("@aws-sdk/client-voice-id"); // CommonJS import
 * // import type { VoiceIDClientConfig } from "@aws-sdk/client-voice-id";
 * const config = {}; // type is VoiceIDClientConfig
 * const client = new VoiceIDClient(config);
 * const input = { // ListFraudsterRegistrationJobsRequest
 *   DomainId: "STRING_VALUE", // required
 *   JobStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFraudsterRegistrationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListFraudsterRegistrationJobsResponse
 * //   JobSummaries: [ // FraudsterRegistrationJobSummaries
 * //     { // FraudsterRegistrationJobSummary
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
 * @param ListFraudsterRegistrationJobsCommandInput - {@link ListFraudsterRegistrationJobsCommandInput}
 * @returns {@link ListFraudsterRegistrationJobsCommandOutput}
 * @see {@link ListFraudsterRegistrationJobsCommandInput} for command's `input` shape.
 * @see {@link ListFraudsterRegistrationJobsCommandOutput} for command's `response` shape.
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
export class ListFraudsterRegistrationJobsCommand extends command<ListFraudsterRegistrationJobsCommandInput, ListFraudsterRegistrationJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListFraudsterRegistrationJobs",
  ListFraudsterRegistrationJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFraudsterRegistrationJobsRequest;
      output: ListFraudsterRegistrationJobsResponse;
    };
    sdk: {
      input: ListFraudsterRegistrationJobsCommandInput;
      output: ListFraudsterRegistrationJobsCommandOutput;
    };
  };
}
