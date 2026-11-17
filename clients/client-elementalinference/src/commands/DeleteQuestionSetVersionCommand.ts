// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQuestionSetVersionRequest, DeleteQuestionSetVersionResponse } from "../models/models_0";
import { DeleteQuestionSetVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQuestionSetVersionCommand}.
 */
export interface DeleteQuestionSetVersionCommandInput extends DeleteQuestionSetVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuestionSetVersionCommand}.
 */
export interface DeleteQuestionSetVersionCommandOutput extends DeleteQuestionSetVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a published version of the specified question set. You can't delete a version while a feed references it, including an archived feed. You can't restore a deleted version, and Elemental Inference doesn't reuse its number. </p> <p>You can't delete the DRAFT version on its own. To delete DRAFT, delete the question set by using DeleteQuestionSet. </p> <p>Deleting a version doesn't change the latestVersion of the question set, even if you delete the highest version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DeleteQuestionSetVersionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DeleteQuestionSetVersionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DeleteQuestionSetVersionRequest
 *   id: "STRING_VALUE", // required
 *   questionSetVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuestionSetVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuestionSetVersionCommandInput - {@link DeleteQuestionSetVersionCommandInput}
 * @returns {@link DeleteQuestionSetVersionCommandOutput}
 * @see {@link DeleteQuestionSetVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteQuestionSetVersionCommandOutput} for command's `response` shape.
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
export class DeleteQuestionSetVersionCommand extends command<DeleteQuestionSetVersionCommandInput, DeleteQuestionSetVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQuestionSetVersion",
  DeleteQuestionSetVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuestionSetVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteQuestionSetVersionCommandInput;
      output: DeleteQuestionSetVersionCommandOutput;
    };
  };
}
