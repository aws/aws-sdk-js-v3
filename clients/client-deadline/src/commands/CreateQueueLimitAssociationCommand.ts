// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQueueLimitAssociationRequest, CreateQueueLimitAssociationResponse } from "../models/models_0";
import {
  de_CreateQueueLimitAssociationCommand,
  se_CreateQueueLimitAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueLimitAssociationCommand}.
 */
export interface CreateQueueLimitAssociationCommandInput extends CreateQueueLimitAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueLimitAssociationCommand}.
 */
export interface CreateQueueLimitAssociationCommandOutput
  extends CreateQueueLimitAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Associates a limit with a particular queue. After the limit is associated, all workers for jobs that specify the limit associated with the queue are subject to the limit. You can't associate two limits with the same <code>amountRequirementName</code> to the same queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateQueueLimitAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateQueueLimitAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CreateQueueLimitAssociationRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 * };
 * const command = new CreateQueueLimitAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateQueueLimitAssociationCommandInput - {@link CreateQueueLimitAssociationCommandInput}
 * @returns {@link CreateQueueLimitAssociationCommandOutput}
 * @see {@link CreateQueueLimitAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateQueueLimitAssociationCommandOutput} for command's `response` shape.
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class CreateQueueLimitAssociationCommand extends $Command
  .classBuilder<
    CreateQueueLimitAssociationCommandInput,
    CreateQueueLimitAssociationCommandOutput,
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
  .s("Deadline", "CreateQueueLimitAssociation", {})
  .n("DeadlineClient", "CreateQueueLimitAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateQueueLimitAssociationCommand)
  .de(de_CreateQueueLimitAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueLimitAssociationRequest;
      output: {};
    };
    sdk: {
      input: CreateQueueLimitAssociationCommandInput;
      output: CreateQueueLimitAssociationCommandOutput;
    };
  };
}
