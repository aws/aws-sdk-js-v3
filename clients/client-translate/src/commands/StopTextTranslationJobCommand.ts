// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTextTranslationJobRequest, StopTextTranslationJobResponse } from "../models/models_0";
import { StopTextTranslationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopTextTranslationJobCommand}.
 */
export interface StopTextTranslationJobCommandInput extends StopTextTranslationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopTextTranslationJobCommand}.
 */
export interface StopTextTranslationJobCommandOutput extends StopTextTranslationJobResponse, __MetadataBearer {}

/**
 * Stops an asynchronous batch translation job that is in progress.
 *
 * If the job's state is `IN_PROGRESS`, the job will be marked for termination and put into the `STOP_REQUESTED` state. If the job completes before it can be stopped, it is put into the `COMPLETED` state. Otherwise, the job is put into the `STOPPED` state.
 *
 * Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs operations to get a batch translation job's `JobId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, StopTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, StopTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // StopTextTranslationJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * // { // StopTextTranslationJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopTextTranslationJobCommandInput - {@link StopTextTranslationJobCommandInput}
 * @returns {@link StopTextTranslationJobCommandOutput}
 * @see {@link StopTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link StopTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are looking for has not been found. Review the resource you're looking for and see if a different resource will accomplish your needs before retrying the revised request.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You have made too many requests within a short period of time. Wait for a short time and then try your request again.
 *
 * @throws {@link TranslateServiceException}
 *
 * Base exception class for all service exceptions from Translate service.
 *
 * @public
 */
export class StopTextTranslationJobCommand extends command<StopTextTranslationJobCommandInput, StopTextTranslationJobCommandOutput>(
  _ep0,
  _mw0,
  "StopTextTranslationJob",
  StopTextTranslationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTextTranslationJobRequest;
      output: StopTextTranslationJobResponse;
    };
    sdk: {
      input: StopTextTranslationJobCommandInput;
      output: StopTextTranslationJobCommandOutput;
    };
  };
}
