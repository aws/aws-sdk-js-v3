// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateQueueFleetAssociationRequest, UpdateQueueFleetAssociationResponse } from "../models/models_1";
import { UpdateQueueFleetAssociation } from "../schemas/schemas_23_UpdateQueueFleetAssociation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueueFleetAssociationCommand}.
 */
export interface UpdateQueueFleetAssociationCommandInput extends UpdateQueueFleetAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueueFleetAssociationCommand}.
 */
export interface UpdateQueueFleetAssociationCommandOutput
  extends UpdateQueueFleetAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a queue-fleet association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateQueueFleetAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateQueueFleetAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateQueueFleetAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   status: "ACTIVE" || "STOP_SCHEDULING_AND_COMPLETE_TASKS" || "STOP_SCHEDULING_AND_CANCEL_TASKS", // required
 * };
 * const command = new UpdateQueueFleetAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQueueFleetAssociationCommandInput - {@link UpdateQueueFleetAssociationCommandInput}
 * @returns {@link UpdateQueueFleetAssociationCommandOutput}
 * @see {@link UpdateQueueFleetAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueFleetAssociationCommandOutput} for command's `response` shape.
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
export class UpdateQueueFleetAssociationCommand extends $Command
  .classBuilder<
    UpdateQueueFleetAssociationCommandInput,
    UpdateQueueFleetAssociationCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "UpdateQueueFleetAssociation", {})
  .n("DeadlineClient", "UpdateQueueFleetAssociationCommand")
  .sc(UpdateQueueFleetAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueueFleetAssociationRequest;
      output: {};
    };
    sdk: {
      input: UpdateQueueFleetAssociationCommandInput;
      output: UpdateQueueFleetAssociationCommandOutput;
    };
  };
}
