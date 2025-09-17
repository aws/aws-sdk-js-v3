// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopTrainingDocumentClassifierRequest, StopTrainingDocumentClassifierResponse } from "../models/models_1";
import {
  de_StopTrainingDocumentClassifierCommand,
  se_StopTrainingDocumentClassifierCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTrainingDocumentClassifierCommand}.
 */
export interface StopTrainingDocumentClassifierCommandInput extends StopTrainingDocumentClassifierRequest {}
/**
 * @public
 *
 * The output of {@link StopTrainingDocumentClassifierCommand}.
 */
export interface StopTrainingDocumentClassifierCommandOutput
  extends StopTrainingDocumentClassifierResponse,
    __MetadataBearer {}

/**
 * <p>Stops a document classifier training job while in progress.</p>
 *          <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be
 *       stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and
 *       put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with
 *       an empty HTTP body. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopTrainingDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopTrainingDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // StopTrainingDocumentClassifierRequest
 *   DocumentClassifierArn: "STRING_VALUE", // required
 * };
 * const command = new StopTrainingDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTrainingDocumentClassifierCommandInput - {@link StopTrainingDocumentClassifierCommandInput}
 * @returns {@link StopTrainingDocumentClassifierCommandOutput}
 * @see {@link StopTrainingDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link StopTrainingDocumentClassifierCommandOutput} for command's `response` shape.
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
export class StopTrainingDocumentClassifierCommand extends $Command
  .classBuilder<
    StopTrainingDocumentClassifierCommandInput,
    StopTrainingDocumentClassifierCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "StopTrainingDocumentClassifier", {})
  .n("ComprehendClient", "StopTrainingDocumentClassifierCommand")
  .f(void 0, void 0)
  .ser(se_StopTrainingDocumentClassifierCommand)
  .de(de_StopTrainingDocumentClassifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTrainingDocumentClassifierRequest;
      output: {};
    };
    sdk: {
      input: StopTrainingDocumentClassifierCommandInput;
      output: StopTrainingDocumentClassifierCommandOutput;
    };
  };
}
