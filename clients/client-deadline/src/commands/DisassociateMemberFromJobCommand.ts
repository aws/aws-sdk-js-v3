// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateMemberFromJobRequest, DisassociateMemberFromJobResponse } from "../models/models_0";
import { DisassociateMemberFromJob } from "../schemas/schemas_45_DisassociateMemberFromJob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMemberFromJobCommand}.
 */
export interface DisassociateMemberFromJobCommandInput extends DisassociateMemberFromJobRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMemberFromJobCommand}.
 */
export interface DisassociateMemberFromJobCommandOutput extends DisassociateMemberFromJobResponse, __MetadataBearer {}

/**
 * <p>Disassociates a member from a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DisassociateMemberFromJobCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DisassociateMemberFromJobCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DisassociateMemberFromJobRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMemberFromJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMemberFromJobCommandInput - {@link DisassociateMemberFromJobCommandInput}
 * @returns {@link DisassociateMemberFromJobCommandOutput}
 * @see {@link DisassociateMemberFromJobCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromJobCommandOutput} for command's `response` shape.
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
export class DisassociateMemberFromJobCommand extends $Command
  .classBuilder<
    DisassociateMemberFromJobCommandInput,
    DisassociateMemberFromJobCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "DisassociateMemberFromJob", {})
  .n("DeadlineClient", "DisassociateMemberFromJobCommand")
  .sc(DisassociateMemberFromJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMemberFromJobRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMemberFromJobCommandInput;
      output: DisassociateMemberFromJobCommandOutput;
    };
  };
}
