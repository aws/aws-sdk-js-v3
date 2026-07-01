// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMembershipRequest, DeleteMembershipResponse } from "../models/models_0";
import { DeleteMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandInput extends DeleteMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandOutput extends DeleteMembershipResponse, __MetadataBearer {}

/**
 * <p>Deletes a membership, revoking a user's access to an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeleteMembershipCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeleteMembershipCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeleteMembershipRequest
 *   applicationId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   membershipId: "STRING_VALUE", // required
 *   memberType: "USER",
 * };
 * const command = new DeleteMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMembershipCommandInput - {@link DeleteMembershipCommandInput}
 * @returns {@link DeleteMembershipCommandOutput}
 * @see {@link DeleteMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteMembershipCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class DeleteMembershipCommand extends command<DeleteMembershipCommandInput, DeleteMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMembership",
  DeleteMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMembershipRequest;
      output: {};
    };
    sdk: {
      input: DeleteMembershipCommandInput;
      output: DeleteMembershipCommandOutput;
    };
  };
}
