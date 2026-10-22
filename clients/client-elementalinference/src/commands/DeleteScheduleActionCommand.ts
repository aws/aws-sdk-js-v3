// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduleActionRequest, DeleteScheduleActionResponse } from "../models/models_0";
import { DeleteScheduleAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScheduleActionCommand}.
 */
export interface DeleteScheduleActionCommandInput extends DeleteScheduleActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScheduleActionCommand}.
 */
export interface DeleteScheduleActionCommandOutput extends DeleteScheduleActionResponse, __MetadataBearer {}

/**
 * <p>Deletes a schedule action from a feed. A deleted action never runs.</p> <p>You can delete only an action whose status is PENDING. Deleting an action doesn't reverse changes that the action already made to the feed. When you delete or archive a feed, Elemental Inference deletes all the schedule actions on that feed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, DeleteScheduleActionCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, DeleteScheduleActionCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // DeleteScheduleActionRequest
 *   id: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduleActionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteScheduleActionResponse
 * //   actionName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteScheduleActionCommandInput - {@link DeleteScheduleActionCommandInput}
 * @returns {@link DeleteScheduleActionCommandOutput}
 * @see {@link DeleteScheduleActionCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduleActionCommandOutput} for command's `response` shape.
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
export class DeleteScheduleActionCommand extends command<DeleteScheduleActionCommandInput, DeleteScheduleActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScheduleAction",
  DeleteScheduleAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduleActionRequest;
      output: DeleteScheduleActionResponse;
    };
    sdk: {
      input: DeleteScheduleActionCommandInput;
      output: DeleteScheduleActionCommandOutput;
    };
  };
}
