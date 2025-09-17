// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateMemberFromQueueRequest, DisassociateMemberFromQueueResponse } from "../models/models_0";
import {
  de_DisassociateMemberFromQueueCommand,
  se_DisassociateMemberFromQueueCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMemberFromQueueCommand}.
 */
export interface DisassociateMemberFromQueueCommandInput extends DisassociateMemberFromQueueRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMemberFromQueueCommand}.
 */
export interface DisassociateMemberFromQueueCommandOutput
  extends DisassociateMemberFromQueueResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a member from a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DisassociateMemberFromQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DisassociateMemberFromQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DisassociateMemberFromQueueRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMemberFromQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMemberFromQueueCommandInput - {@link DisassociateMemberFromQueueCommandInput}
 * @returns {@link DisassociateMemberFromQueueCommandOutput}
 * @see {@link DisassociateMemberFromQueueCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromQueueCommandOutput} for command's `response` shape.
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
export class DisassociateMemberFromQueueCommand extends $Command
  .classBuilder<
    DisassociateMemberFromQueueCommandInput,
    DisassociateMemberFromQueueCommandOutput,
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
  .s("Deadline", "DisassociateMemberFromQueue", {})
  .n("DeadlineClient", "DisassociateMemberFromQueueCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateMemberFromQueueCommand)
  .de(de_DisassociateMemberFromQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMemberFromQueueRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMemberFromQueueCommandInput;
      output: DisassociateMemberFromQueueCommandOutput;
    };
  };
}
