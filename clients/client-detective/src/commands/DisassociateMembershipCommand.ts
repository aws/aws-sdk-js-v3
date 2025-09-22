// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateMembershipRequest } from "../models/models_0";
import { DisassociateMembership } from "../schemas/schemas_4_Invitation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMembershipCommand}.
 */
export interface DisassociateMembershipCommandInput extends DisassociateMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMembershipCommand}.
 */
export interface DisassociateMembershipCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the member account from the specified behavior graph. This operation can only be
 *          called by an invited member account that has the <code>ENABLED</code> status.</p>
 *          <p>
 *             <code>DisassociateMembership</code> cannot be called by an organization account in the
 *          organization behavior graph. For the organization behavior graph, the Detective
 *          administrator account determines which organization accounts to enable or disable as member
 *          accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisassociateMembershipCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisassociateMembershipCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // DisassociateMembershipRequest
 *   GraphArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMembershipCommandInput - {@link DisassociateMembershipCommandInput}
 * @returns {@link DisassociateMembershipCommandOutput}
 * @see {@link DisassociateMembershipCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembershipCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request attempted an invalid action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class DisassociateMembershipCommand extends $Command
  .classBuilder<
    DisassociateMembershipCommandInput,
    DisassociateMembershipCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "DisassociateMembership", {})
  .n("DetectiveClient", "DisassociateMembershipCommand")
  .sc(DisassociateMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateMembershipRequest;
      output: {};
    };
    sdk: {
      input: DisassociateMembershipCommandInput;
      output: DisassociateMembershipCommandOutput;
    };
  };
}
