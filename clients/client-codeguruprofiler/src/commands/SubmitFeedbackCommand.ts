// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SubmitFeedbackRequest, SubmitFeedbackResponse } from "../models/models_0";
import { SubmitFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SubmitFeedbackCommand}.
 */
export interface SubmitFeedbackCommandInput extends SubmitFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link SubmitFeedbackCommand}.
 */
export interface SubmitFeedbackCommandOutput extends SubmitFeedbackResponse, __MetadataBearer {}

/**
 * Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, SubmitFeedbackCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, SubmitFeedbackCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * // import type { CodeGuruProfilerClientConfig } from "@aws-sdk/client-codeguruprofiler";
 * const config = {}; // type is CodeGuruProfilerClientConfig
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // SubmitFeedbackRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   anomalyInstanceId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new SubmitFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SubmitFeedbackCommandInput - {@link SubmitFeedbackCommandInput}
 * @returns {@link SubmitFeedbackCommandOutput}
 * @see {@link SubmitFeedbackCommandInput} for command's `input` shape.
 * @see {@link SubmitFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The parameter is not valid.
 *
 * @throws {@link CodeGuruProfilerServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruProfiler service.
 *
 * @public
 */
export class SubmitFeedbackCommand extends command<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "SubmitFeedback",
  SubmitFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitFeedbackRequest;
      output: {};
    };
    sdk: {
      input: SubmitFeedbackCommandInput;
      output: SubmitFeedbackCommandOutput;
    };
  };
}
