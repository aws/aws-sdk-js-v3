// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDictionaryRequest, DeleteDictionaryResponse } from "../models/models_0";
import { DeleteDictionary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDictionaryCommand}.
 */
export interface DeleteDictionaryCommandInput extends DeleteDictionaryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDictionaryCommand}.
 */
export interface DeleteDictionaryCommandOutput extends DeleteDictionaryResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified dictionary. You cannot delete a dictionary that is referenced by a feed. You must first remove the dictionary reference from the feed's subtitling configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DeleteDictionaryCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DeleteDictionaryCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DeleteDictionaryRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteDictionaryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDictionaryResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "CREATING" || "AVAILABLE" || "REFERENCED" || "DELETING" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteDictionaryCommandInput - {@link DeleteDictionaryCommandInput}
 * @returns {@link DeleteDictionaryCommandOutput}
 * @see {@link DeleteDictionaryCommandInput} for command's `input` shape.
 * @see {@link DeleteDictionaryCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class DeleteDictionaryCommand extends command<DeleteDictionaryCommandInput, DeleteDictionaryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDictionary",
  DeleteDictionary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDictionaryRequest;
      output: DeleteDictionaryResponse;
    };
    sdk: {
      input: DeleteDictionaryCommandInput;
      output: DeleteDictionaryCommandOutput;
    };
  };
}
