// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInferenceProfileRequest, DeleteInferenceProfileResponse } from "../models/models_1";
import { DeleteInferenceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInferenceProfileCommand}.
 */
export interface DeleteInferenceProfileCommandInput extends DeleteInferenceProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInferenceProfileCommand}.
 */
export interface DeleteInferenceProfileCommandOutput extends DeleteInferenceProfileResponse, __MetadataBearer {}

/**
 * Deletes an application inference profile. For more information, see [Increase throughput and resilience with cross-region inference in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html). in the Amazon Bedrock User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteInferenceProfileCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteInferenceProfileCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteInferenceProfileRequest
 *   inferenceProfileIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteInferenceProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInferenceProfileCommandInput - {@link DeleteInferenceProfileCommandInput}
 * @returns {@link DeleteInferenceProfileCommandOutput}
 * @see {@link DeleteInferenceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInferenceProfileCommandOutput} for command's `response` shape.
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
export class DeleteInferenceProfileCommand extends command<DeleteInferenceProfileCommandInput, DeleteInferenceProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInferenceProfile",
  DeleteInferenceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInferenceProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteInferenceProfileCommandInput;
      output: DeleteInferenceProfileCommandOutput;
    };
  };
}
