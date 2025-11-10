// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFraudsterRegistrationJobsRequest, ListFraudsterRegistrationJobsResponse } from "../models/models_0";
import { ListFraudsterRegistrationJobs } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, VoiceIDClientResolvedConfig } from "../VoiceIDClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListFraudsterRegistrationJobsCommandOutput
  extends ListFraudsterRegistrationJobsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the fraudster registration jobs in the domain with the given
 *                 <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all
 *             fraudster registration jobs in the given domain. </p>
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
export class ListFraudsterRegistrationJobsCommand extends $Command
  .classBuilder<
    ListFraudsterRegistrationJobsCommandInput,
    ListFraudsterRegistrationJobsCommandOutput,
    VoiceIDClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VoiceIDClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VoiceID", "ListFraudsterRegistrationJobs", {})
  .n("VoiceIDClient", "ListFraudsterRegistrationJobsCommand")
  .sc(ListFraudsterRegistrationJobs)
  .build() {
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
