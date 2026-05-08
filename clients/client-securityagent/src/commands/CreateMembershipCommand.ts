// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMembershipRequest, CreateMembershipResponse } from "../models/models_0";
import { CreateMembership$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandInput extends CreateMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandOutput extends CreateMembershipResponse, __MetadataBearer {}

/**
 * <p>Creates a new membership, granting a user access to an agent space within an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateMembershipCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateMembershipCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateMembershipRequest
 *   applicationId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   membershipId: "STRING_VALUE", // required
 *   memberType: "USER", // required
 *   config: { // MembershipConfig Union: only one key present
 *     user: { // UserConfig
 *       role: "MEMBER",
 *     },
 *   },
 * };
 * const command = new CreateMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateMembershipCommandInput - {@link CreateMembershipCommandInput}
 * @returns {@link CreateMembershipCommandOutput}
 * @see {@link CreateMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateMembershipCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreateMembershipCommand extends $Command
  .classBuilder<
    CreateMembershipCommandInput,
    CreateMembershipCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "CreateMembership", {})
  .n("SecurityAgentClient", "CreateMembershipCommand")
  .sc(CreateMembership$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMembershipRequest;
      output: {};
    };
    sdk: {
      input: CreateMembershipCommandInput;
      output: CreateMembershipCommandOutput;
    };
  };
}
