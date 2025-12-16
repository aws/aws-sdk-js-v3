// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateMemberFromFleetRequest, DisassociateMemberFromFleetResponse } from "../models/models_0";
import { DisassociateMemberFromFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMemberFromFleetCommand}.
 */
export interface DisassociateMemberFromFleetCommandInput extends DisassociateMemberFromFleetRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMemberFromFleetCommand}.
 */
export interface DisassociateMemberFromFleetCommandOutput
  extends DisassociateMemberFromFleetResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a member from a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DisassociateMemberFromFleetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DisassociateMemberFromFleetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DisassociateMemberFromFleetRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMemberFromFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMemberFromFleetCommandInput - {@link DisassociateMemberFromFleetCommandInput}
 * @returns {@link DisassociateMemberFromFleetCommandOutput}
 * @see {@link DisassociateMemberFromFleetCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromFleetCommandOutput} for command's `response` shape.
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
export class DisassociateMemberFromFleetCommand extends $Command
  .classBuilder<
    DisassociateMemberFromFleetCommandInput,
    DisassociateMemberFromFleetCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "DisassociateMemberFromFleet", {})
  .n("DeadlineClient", "DisassociateMemberFromFleetCommand")
  .sc(DisassociateMemberFromFleet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMemberFromFleetRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMemberFromFleetCommandInput;
      output: DisassociateMemberFromFleetCommandOutput;
    };
  };
}
