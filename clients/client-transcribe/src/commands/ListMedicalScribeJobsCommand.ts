// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMedicalScribeJobsRequest, ListMedicalScribeJobsResponse } from "../models/models_0";
import { de_ListMedicalScribeJobsCommand, se_ListMedicalScribeJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMedicalScribeJobsCommand}.
 */
export interface ListMedicalScribeJobsCommandInput extends ListMedicalScribeJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListMedicalScribeJobsCommand}.
 */
export interface ListMedicalScribeJobsCommandOutput extends ListMedicalScribeJobsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of Medical Scribe jobs that match the specified criteria. If no
 *             criteria are specified, all Medical Scribe jobs are returned.</p>
 *          <p>To get detailed information about a specific Medical Scribe job, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListMedicalScribeJobsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListMedicalScribeJobsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TranscribeClient(config);
 * const input = { // ListMedicalScribeJobsRequest
 *   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   JobNameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMedicalScribeJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMedicalScribeJobsResponse
 * //   Status: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //   NextToken: "STRING_VALUE",
 * //   MedicalScribeJobSummaries: [ // MedicalScribeJobSummaries
 * //     { // MedicalScribeJobSummary
 * //       MedicalScribeJobName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "en-US",
 * //       MedicalScribeJobStatus: "QUEUED" || "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMedicalScribeJobsCommandInput - {@link ListMedicalScribeJobsCommandInput}
 * @returns {@link ListMedicalScribeJobsCommandOutput}
 * @see {@link ListMedicalScribeJobsCommandInput} for command's `input` shape.
 * @see {@link ListMedicalScribeJobsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 * @public
 */
export class ListMedicalScribeJobsCommand extends $Command
  .classBuilder<
    ListMedicalScribeJobsCommandInput,
    ListMedicalScribeJobsCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "ListMedicalScribeJobs", {})
  .n("TranscribeClient", "ListMedicalScribeJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListMedicalScribeJobsCommand)
  .de(de_ListMedicalScribeJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMedicalScribeJobsRequest;
      output: ListMedicalScribeJobsResponse;
    };
    sdk: {
      input: ListMedicalScribeJobsCommandInput;
      output: ListMedicalScribeJobsCommandOutput;
    };
  };
}
