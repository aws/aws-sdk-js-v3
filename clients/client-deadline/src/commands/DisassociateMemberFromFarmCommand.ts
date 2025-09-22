// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateMemberFromFarmRequest, DisassociateMemberFromFarmResponse } from "../models/models_0";
import { DisassociateMemberFromFarm } from "../schemas/schemas_29_DisassociateMemberFromFarm";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMemberFromFarmCommand}.
 */
export interface DisassociateMemberFromFarmCommandInput extends DisassociateMemberFromFarmRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMemberFromFarmCommand}.
 */
export interface DisassociateMemberFromFarmCommandOutput extends DisassociateMemberFromFarmResponse, __MetadataBearer {}

/**
 * <p>Disassociates a member from a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DisassociateMemberFromFarmCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DisassociateMemberFromFarmCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DisassociateMemberFromFarmRequest
 *   farmId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMemberFromFarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMemberFromFarmCommandInput - {@link DisassociateMemberFromFarmCommandInput}
 * @returns {@link DisassociateMemberFromFarmCommandOutput}
 * @see {@link DisassociateMemberFromFarmCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromFarmCommandOutput} for command's `response` shape.
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
export class DisassociateMemberFromFarmCommand extends $Command
  .classBuilder<
    DisassociateMemberFromFarmCommandInput,
    DisassociateMemberFromFarmCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "DisassociateMemberFromFarm", {})
  .n("DeadlineClient", "DisassociateMemberFromFarmCommand")
  .sc(DisassociateMemberFromFarm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMemberFromFarmRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMemberFromFarmCommandInput;
      output: DisassociateMemberFromFarmCommandOutput;
    };
  };
}
