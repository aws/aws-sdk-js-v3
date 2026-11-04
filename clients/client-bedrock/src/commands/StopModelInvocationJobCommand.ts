// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopModelInvocationJobRequest, StopModelInvocationJobResponse } from "../models/models_1";
import { StopModelInvocationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopModelInvocationJobCommand}.
 */
export interface StopModelInvocationJobCommandInput extends StopModelInvocationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopModelInvocationJobCommand}.
 */
export interface StopModelInvocationJobCommandOutput extends StopModelInvocationJobResponse, __MetadataBearer {}

/**
 * Stops a batch inference job. You're only charged for tokens that were already processed. For more information, see [Stop a batch inference job](https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-stop.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StopModelInvocationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StopModelInvocationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // StopModelInvocationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopModelInvocationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopModelInvocationJobCommandInput - {@link StopModelInvocationJobCommandInput}
 * @returns {@link StopModelInvocationJobCommandOutput}
 * @see {@link StopModelInvocationJobCommandInput} for command's `input` shape.
 * @see {@link StopModelInvocationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class StopModelInvocationJobCommand extends command<StopModelInvocationJobCommandInput, StopModelInvocationJobCommandOutput>(
  _ep0,
  _mw0,
  "StopModelInvocationJob",
  StopModelInvocationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopModelInvocationJobRequest;
      output: {};
    };
    sdk: {
      input: StopModelInvocationJobCommandInput;
      output: StopModelInvocationJobCommandOutput;
    };
  };
}
