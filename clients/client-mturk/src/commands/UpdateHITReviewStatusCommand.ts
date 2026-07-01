// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHITReviewStatusRequest, UpdateHITReviewStatusResponse } from "../models/models_0";
import { UpdateHITReviewStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateHITReviewStatusCommand}.
 */
export interface UpdateHITReviewStatusCommandInput extends UpdateHITReviewStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHITReviewStatusCommand}.
 */
export interface UpdateHITReviewStatusCommandOutput extends UpdateHITReviewStatusResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT.
 *             If the status is Reviewable, this operation can update the status to Reviewing,
 *             or it can revert a Reviewing HIT back to the Reviewable status.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateHITReviewStatusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateHITReviewStatusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // UpdateHITReviewStatusRequest
 *   HITId: "STRING_VALUE", // required
 *   Revert: true || false,
 * };
 * const command = new UpdateHITReviewStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHITReviewStatusCommandInput - {@link UpdateHITReviewStatusCommandInput}
 * @returns {@link UpdateHITReviewStatusCommandOutput}
 * @see {@link UpdateHITReviewStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateHITReviewStatusCommandOutput} for command's `response` shape.
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
export class UpdateHITReviewStatusCommand extends command<UpdateHITReviewStatusCommandInput, UpdateHITReviewStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHITReviewStatus",
  UpdateHITReviewStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHITReviewStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateHITReviewStatusCommandInput;
      output: UpdateHITReviewStatusCommandOutput;
    };
  };
}
