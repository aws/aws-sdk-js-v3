// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectInvitationRequest } from "../models/models_0";
import { RejectInvitation } from "../schemas/schemas_4_Invitation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectInvitationCommand}.
 */
export interface RejectInvitationCommandInput extends RejectInvitationRequest {}
/**
 * @public
 *
 * The output of {@link RejectInvitationCommand}.
 */
export interface RejectInvitationCommandOutput extends __MetadataBearer {}

/**
 * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation
 *          must be called by an invited member account that has the <code>INVITED</code>
 *          status.</p>
 *          <p>
 *             <code>RejectInvitation</code> cannot be called by an organization account in the
 *          organization behavior graph. In the organization behavior graph, organization accounts do
 *          not receive an invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, RejectInvitationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, RejectInvitationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // RejectInvitationRequest
 *   GraphArn: "STRING_VALUE", // required
 * };
 * const command = new RejectInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectInvitationCommandInput - {@link RejectInvitationCommandInput}
 * @returns {@link RejectInvitationCommandOutput}
 * @see {@link RejectInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectInvitationCommandOutput} for command's `response` shape.
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
export class RejectInvitationCommand extends $Command
  .classBuilder<
    RejectInvitationCommandInput,
    RejectInvitationCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "RejectInvitation", {})
  .n("DetectiveClient", "RejectInvitationCommand")
  .sc(RejectInvitation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectInvitationRequest;
      output: {};
    };
    sdk: {
      input: RejectInvitationCommandInput;
      output: RejectInvitationCommandOutput;
    };
  };
}
