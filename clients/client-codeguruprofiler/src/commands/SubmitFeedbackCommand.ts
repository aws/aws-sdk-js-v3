// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitFeedbackRequest, SubmitFeedbackResponse } from "../models/models_0";
import { de_SubmitFeedbackCommand, se_SubmitFeedbackCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is
 *             useful or not.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, SubmitFeedbackCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, SubmitFeedbackCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
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
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 * @public
 */
export class SubmitFeedbackCommand extends $Command
  .classBuilder<
    SubmitFeedbackCommandInput,
    SubmitFeedbackCommandOutput,
    CodeGuruProfilerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeGuruProfilerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeGuruProfiler", "SubmitFeedback", {})
  .n("CodeGuruProfilerClient", "SubmitFeedbackCommand")
  .f(void 0, void 0)
  .ser(se_SubmitFeedbackCommand)
  .de(de_SubmitFeedbackCommand)
  .build() {}
