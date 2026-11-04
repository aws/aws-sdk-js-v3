// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopTrainingEntityRecognizerRequest, StopTrainingEntityRecognizerResponse } from "../models/models_0";
import { StopTrainingEntityRecognizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StopTrainingEntityRecognizerCommandOutput extends StopTrainingEntityRecognizerResponse, __MetadataBearer {}

/**
 * Stops an entity recognizer training job while in progress.
 *
 * If the training job state is `TRAINING`, the job is marked for termination and put into the `STOP_REQUESTED` state. If the training job completes before it can be stopped, it is put into the `TRAINED`; otherwise the training job is stopped and putted into the `STOPPED` state and the service sends back an HTTP 200 response with an empty HTTP body.
 *
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
export class StopTrainingEntityRecognizerCommand extends command<StopTrainingEntityRecognizerCommandInput, StopTrainingEntityRecognizerCommandOutput>(
  _ep0,
  _mw0,
  "StopTrainingEntityRecognizer",
  StopTrainingEntityRecognizer$
) {
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
