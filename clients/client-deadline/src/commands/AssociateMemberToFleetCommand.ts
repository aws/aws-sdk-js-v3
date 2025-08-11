// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateMemberToFleetRequest, AssociateMemberToFleetResponse } from "../models/models_0";
import { de_AssociateMemberToFleetCommand, se_AssociateMemberToFleetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateMemberToFleetCommand}.
 */
export interface AssociateMemberToFleetCommandInput extends AssociateMemberToFleetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMemberToFleetCommand}.
 */
export interface AssociateMemberToFleetCommandOutput extends AssociateMemberToFleetResponse, __MetadataBearer {}

/**
 * <p>Assigns a fleet membership level to a member.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, AssociateMemberToFleetCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, AssociateMemberToFleetCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // AssociateMemberToFleetRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   principalId: "STRING_VALUE", // required
 *   principalType: "USER" || "GROUP", // required
 *   identityStoreId: "STRING_VALUE", // required
 *   membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * };
 * const command = new AssociateMemberToFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateMemberToFleetCommandInput - {@link AssociateMemberToFleetCommandInput}
 * @returns {@link AssociateMemberToFleetCommandOutput}
 * @see {@link AssociateMemberToFleetCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberToFleetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account.</p>
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
export class AssociateMemberToFleetCommand extends $Command
  .classBuilder<
    AssociateMemberToFleetCommandInput,
    AssociateMemberToFleetCommandOutput,
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
  .s("Deadline", "AssociateMemberToFleet", {})
  .n("DeadlineClient", "AssociateMemberToFleetCommand")
  .f(void 0, void 0)
  .ser(se_AssociateMemberToFleetCommand)
  .de(de_AssociateMemberToFleetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateMemberToFleetRequest;
      output: {};
    };
    sdk: {
      input: AssociateMemberToFleetCommandInput;
      output: AssociateMemberToFleetCommandOutput;
    };
  };
}
