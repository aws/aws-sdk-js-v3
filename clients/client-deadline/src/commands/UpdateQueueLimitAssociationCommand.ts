// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueLimitAssociationRequest, UpdateQueueLimitAssociationResponse } from "../models/models_1";
import {
  de_UpdateQueueLimitAssociationCommand,
  se_UpdateQueueLimitAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueLimitAssociationCommand}.
 */
export interface UpdateQueueLimitAssociationCommandInput extends UpdateQueueLimitAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueLimitAssociationCommand}.
 */
export interface UpdateQueueLimitAssociationCommandOutput
  extends UpdateQueueLimitAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the status of the queue. If you set the status to one of the
 *             <code>STOP_LIMIT_USAGE*</code> values, there will be a delay before the status
 *          transitions to the <code>STOPPED</code> state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateQueueLimitAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateQueueLimitAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateQueueLimitAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS" || "STOP_LIMIT_USAGE_AND_CANCEL_TASKS", // required
 * };
 * const command = new UpdateQueueLimitAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueLimitAssociationCommandInput - {@link UpdateQueueLimitAssociationCommandInput}
 * @returns {@link UpdateQueueLimitAssociationCommandOutput}
 * @see {@link UpdateQueueLimitAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueLimitAssociationCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class UpdateQueueLimitAssociationCommand extends $Command
  .classBuilder<
    UpdateQueueLimitAssociationCommandInput,
    UpdateQueueLimitAssociationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "UpdateQueueLimitAssociation", {})
  .n("DeadlineClient", "UpdateQueueLimitAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateQueueLimitAssociationCommand)
  .de(de_UpdateQueueLimitAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueLimitAssociationRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueLimitAssociationCommandInput;
      output: UpdateQueueLimitAssociationCommandOutput;
    };
  };
}
