// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopTrainingEntityRecognizerRequest, StopTrainingEntityRecognizerResponse } from "../models/models_0";
import { StopTrainingEntityRecognizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTrainingEntityRecognizerCommand}.
 */
export interface StopTrainingEntityRecognizerCommandInput extends StopTrainingEntityRecognizerRequest {}
/**
 * @public
 *
 * The output of {@link StopTrainingEntityRecognizerCommand}.
 */
export interface StopTrainingEntityRecognizerCommandOutput
  extends StopTrainingEntityRecognizerResponse,
    __MetadataBearer {}

/**
 * <p>Stops an entity recognizer training job while in progress.</p>
 *          <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be
 *       stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and
 *       putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response
 *       with an empty HTTP body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopTrainingEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopTrainingEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StopTrainingEntityRecognizerRequest
 *   EntityRecognizerArn: "STRING_VALUE", // required
 * };
 * const command = new StopTrainingEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTrainingEntityRecognizerCommandInput - {@link StopTrainingEntityRecognizerCommandInput}
 * @returns {@link StopTrainingEntityRecognizerCommandOutput}
 * @see {@link StopTrainingEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link StopTrainingEntityRecognizerCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class StopTrainingEntityRecognizerCommand extends $Command
  .classBuilder<
    StopTrainingEntityRecognizerCommandInput,
    StopTrainingEntityRecognizerCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "StopTrainingEntityRecognizer", {})
  .n("ComprehendClient", "StopTrainingEntityRecognizerCommand")
  .sc(StopTrainingEntityRecognizer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTrainingEntityRecognizerRequest;
      output: {};
    };
    sdk: {
      input: StopTrainingEntityRecognizerCommandInput;
      output: StopTrainingEntityRecognizerCommandOutput;
    };
  };
}
