// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteQuestionSetRequest, DeleteQuestionSetResponse } from "../models/models_0";
import { DeleteQuestionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQuestionSetCommand}.
 */
export interface DeleteQuestionSetCommandInput extends DeleteQuestionSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuestionSetCommand}.
 */
export interface DeleteQuestionSetCommandOutput extends DeleteQuestionSetResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified question set, including its DRAFT version and all its published versions. You can't delete a question set while any feed references any of its versions, including an archived feed. You must first remove the question set from the customQuestions configuration of each feed output that references it, or delete those feeds. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DeleteQuestionSetCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DeleteQuestionSetCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DeleteQuestionSetRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuestionSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteQuestionSetResponse
 * //   arn: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteQuestionSetCommandInput - {@link DeleteQuestionSetCommandInput}
 * @returns {@link DeleteQuestionSetCommandOutput}
 * @see {@link DeleteQuestionSetCommandInput} for command's `input` shape.
 * @see {@link DeleteQuestionSetCommandOutput} for command's `response` shape.
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
export class DeleteQuestionSetCommand extends command<DeleteQuestionSetCommandInput, DeleteQuestionSetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteQuestionSet",
  DeleteQuestionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuestionSetRequest;
      output: DeleteQuestionSetResponse;
    };
    sdk: {
      input: DeleteQuestionSetCommandInput;
      output: DeleteQuestionSetCommandOutput;
    };
  };
}
