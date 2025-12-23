// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateQueueLimitAssociationRequest, CreateQueueLimitAssociationResponse } from "../models/models_0";
import { CreateQueueLimitAssociation$ } from "../schemas/schemas_0";

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
export interface CreateQueueLimitAssociationCommandOutput extends CreateQueueLimitAssociationResponse, __MetadataBearer {}

/**
 * <p>Associates a limit with a particular queue. After the limit is associated, all workers
 *          for jobs that specify the limit associated with the queue are subject to the limit. You
 *          can't associate two limits with the same <code>amountRequirementName</code> to the same
 *          queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateQueueLimitAssociationCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateQueueLimitAssociationCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "CreateQueueLimitAssociation", {})
  .n("DeadlineClient", "CreateQueueLimitAssociationCommand")
  .sc(CreateQueueLimitAssociation$)
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
