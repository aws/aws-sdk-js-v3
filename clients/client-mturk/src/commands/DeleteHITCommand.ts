// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHITRequest, DeleteHITResponse } from "../models/models_0";
import { DeleteHIT$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHITCommand}.
 */
export interface DeleteHITCommandInput extends DeleteHITRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHITCommand}.
 */
export interface DeleteHITCommandOutput extends DeleteHITResponse, __MetadataBearer {}

/**
 * The `DeleteHIT` operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it.
 *
 * You can only dispose of HITs that are in the `Reviewable` state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the `Reviewable` state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error.
 *
 * > **Note:**
 * >
 * > - HITs are automatically disposed of after 120 days.
 * > - After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
 * > - Disposed HITs are not returned in results for the ListHITs operation.
 * > - Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // DeleteHITRequest
 *   HITId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHITCommandInput - {@link DeleteHITCommandInput}
 * @returns {@link DeleteHITCommandOutput}
 * @see {@link DeleteHITCommandInput} for command's `input` shape.
 * @see {@link DeleteHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *
 * Your request is invalid.
 *
 * @throws {@link ServiceFault} (server fault)
 *
 * Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.
 *
 * @throws {@link MTurkServiceException}
 *
 * Base exception class for all service exceptions from MTurk service.
 *
 * @public
 */
export class DeleteHITCommand extends command<DeleteHITCommandInput, DeleteHITCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHIT",
  DeleteHIT$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHITRequest;
      output: {};
    };
    sdk: {
      input: DeleteHITCommandInput;
      output: DeleteHITCommandOutput;
    };
  };
}
