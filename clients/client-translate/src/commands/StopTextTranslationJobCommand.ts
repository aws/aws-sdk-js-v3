// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopTextTranslationJobRequest, StopTextTranslationJobResponse } from "../models/models_0";
import { StopTextTranslationJob } from "../schemas/schemas_5_Translation";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Stops an asynchronous batch translation job that is in progress.</p>
 *          <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped,
 *       it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the
 *         <code>STOPPED</code> state.</p>
 *          <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a>
 *       operations to get a batch translation job's <code>JobId</code>.</p>
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
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class StopTextTranslationJobCommand extends $Command
  .classBuilder<
    StopTextTranslationJobCommandInput,
    StopTextTranslationJobCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "StopTextTranslationJob", {})
  .n("TranslateClient", "StopTextTranslationJobCommand")
  .sc(StopTextTranslationJob)
  .build() {
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
