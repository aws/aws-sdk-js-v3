// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEntityRecognizerRequest, DeleteEntityRecognizerResponse } from "../models/models_0";
import { DeleteEntityRecognizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEntityRecognizerCommand}.
 */
export interface DeleteEntityRecognizerCommandInput extends DeleteEntityRecognizerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntityRecognizerCommand}.
 */
export interface DeleteEntityRecognizerCommandOutput extends DeleteEntityRecognizerResponse, __MetadataBearer {}

/**
 * Deletes an entity recognizer.
 *
 * Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a `ResourceInUseException` will be returned.
 *
 * This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DeleteEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DeleteEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DeleteEntityRecognizerRequest
 *   EntityRecognizerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEntityRecognizerCommandInput - {@link DeleteEntityRecognizerCommandInput}
 * @returns {@link DeleteEntityRecognizerCommandOutput}
 * @see {@link DeleteEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link DeleteEntityRecognizerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource name is already in use. Use a different name and try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource ARN was not found. Check the ARN and try your request again.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The specified resource is not available. Check the resource and try your request again.
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
export class DeleteEntityRecognizerCommand extends command<DeleteEntityRecognizerCommandInput, DeleteEntityRecognizerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEntityRecognizer",
  DeleteEntityRecognizer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEntityRecognizerRequest;
      output: {};
    };
    sdk: {
      input: DeleteEntityRecognizerCommandInput;
      output: DeleteEntityRecognizerCommandOutput;
    };
  };
}
