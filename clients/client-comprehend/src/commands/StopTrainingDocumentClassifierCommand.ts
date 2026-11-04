// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTrainingDocumentClassifierRequest, StopTrainingDocumentClassifierResponse } from "../models/models_0";
import { StopTrainingDocumentClassifier$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StopTrainingDocumentClassifierCommandOutput extends StopTrainingDocumentClassifierResponse, __MetadataBearer {}

/**
 * Stops a document classifier training job while in progress.
 *
 * If the training job state is `TRAINING`, the job is marked for termination and put into the `STOP_REQUESTED` state. If the training job completes before it can be stopped, it is put into the `TRAINED`; otherwise the training job is stopped and put into the `STOPPED` state and the service sends back an HTTP 200 response with an empty HTTP body.
 *
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
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ComprehendServiceException}
 *
 * Base exception class for all service exceptions from Comprehend service.
 *
 * @public
 */
export class StopTrainingDocumentClassifierCommand extends command<StopTrainingDocumentClassifierCommandInput, StopTrainingDocumentClassifierCommandOutput>(
  _ep0,
  _mw0,
  "StopTrainingDocumentClassifier",
  StopTrainingDocumentClassifier$
) {
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
