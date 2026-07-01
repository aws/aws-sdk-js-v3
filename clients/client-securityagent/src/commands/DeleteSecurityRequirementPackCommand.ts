// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSecurityRequirementPackInput, DeleteSecurityRequirementPackOutput } from "../models/models_0";
import { DeleteSecurityRequirementPack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSecurityRequirementPackCommand}.
 */
export interface DeleteSecurityRequirementPackCommandInput extends DeleteSecurityRequirementPackInput {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityRequirementPackCommand}.
 */
export interface DeleteSecurityRequirementPackCommandOutput extends DeleteSecurityRequirementPackOutput, __MetadataBearer {}

/**
 * <p>Deletes a customer managed security requirement pack and all its associated security requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeleteSecurityRequirementPackCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeleteSecurityRequirementPackCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeleteSecurityRequirementPackInput
 *   packId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSecurityRequirementPackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityRequirementPackCommandInput - {@link DeleteSecurityRequirementPackCommandInput}
 * @returns {@link DeleteSecurityRequirementPackCommandOutput}
 * @see {@link DeleteSecurityRequirementPackCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityRequirementPackCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class DeleteSecurityRequirementPackCommand extends command<DeleteSecurityRequirementPackCommandInput, DeleteSecurityRequirementPackCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSecurityRequirementPack",
  DeleteSecurityRequirementPack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityRequirementPackInput;
      output: {};
    };
    sdk: {
      input: DeleteSecurityRequirementPackCommandInput;
      output: DeleteSecurityRequirementPackCommandOutput;
    };
  };
}
