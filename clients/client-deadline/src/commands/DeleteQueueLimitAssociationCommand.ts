// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueueLimitAssociationRequest, DeleteQueueLimitAssociationResponse } from "../models/models_0";
import {
  de_DeleteQueueLimitAssociationCommand,
  se_DeleteQueueLimitAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueueLimitAssociationCommand}.
 */
export interface DeleteQueueLimitAssociationCommandInput extends DeleteQueueLimitAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueueLimitAssociationCommand}.
 */
export interface DeleteQueueLimitAssociationCommandOutput
  extends DeleteQueueLimitAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Removes the association between a queue and a limit. You must use the
 *             <code>UpdateQueueLimitAssociation</code> operation to set the status to
 *             <code>STOP_LIMIT_USAGE_AND_COMPLETE_TASKS</code> or
 *             <code>STOP_LIMIT_USAGE_AND_CANCEL_TASKS</code>. The status does not change immediately.
 *          Use the <code>GetQueueLimitAssociation</code> operation to see if the status changed to
 *             <code>STOPPED</code> before deleting the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteQueueLimitAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteQueueLimitAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteQueueLimitAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueueLimitAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueueLimitAssociationCommandInput - {@link DeleteQueueLimitAssociationCommandInput}
 * @returns {@link DeleteQueueLimitAssociationCommandOutput}
 * @see {@link DeleteQueueLimitAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueLimitAssociationCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than one operation on the same resource at the same time.</p>
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
export class DeleteQueueLimitAssociationCommand extends $Command
  .classBuilder<
    DeleteQueueLimitAssociationCommandInput,
    DeleteQueueLimitAssociationCommandOutput,
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
  .s("Deadline", "DeleteQueueLimitAssociation", {})
  .n("DeadlineClient", "DeleteQueueLimitAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueueLimitAssociationCommand)
  .de(de_DeleteQueueLimitAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueueLimitAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueueLimitAssociationCommandInput;
      output: DeleteQueueLimitAssociationCommandOutput;
    };
  };
}
