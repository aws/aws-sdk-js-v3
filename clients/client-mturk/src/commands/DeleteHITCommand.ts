// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHITRequest, DeleteHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteHIT } from "../schemas/schemas_6_DeleteHIT";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *             The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed.
 *             Only the Requester who created the HIT can delete it.
 *         </p>
 *         <p>
 *             You can only dispose of HITs that are in the <code>Reviewable</code> state,
 *             with all of their submitted assignments already either approved or rejected.
 *             If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state
 *             (for example, that has not expired, or still has active assignments),
 *             or on a HIT that is Reviewable but without all of its submitted assignments
 *             already approved or rejected, the service will return an error.
 *         </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>
 *                         HITs are automatically disposed of after 120 days.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposed HITs are not returned in results for the ListHITs operation.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
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
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class DeleteHITCommand extends $Command
  .classBuilder<
    DeleteHITCommandInput,
    DeleteHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "DeleteHIT", {})
  .n("MTurkClient", "DeleteHITCommand")
  .sc(DeleteHIT)
  .build() {
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
