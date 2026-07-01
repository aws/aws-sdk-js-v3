// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTargetDomainInput, DeleteTargetDomainOutput } from "../models/models_0";
import { DeleteTargetDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTargetDomainCommand}.
 */
export interface DeleteTargetDomainCommandInput extends DeleteTargetDomainInput {}
/**
 * @public
 *
 * The output of {@link DeleteTargetDomainCommand}.
 */
export interface DeleteTargetDomainCommandOutput extends DeleteTargetDomainOutput, __MetadataBearer {}

/**
 * <p>Deletes a target domain registration. After deletion, the domain can no longer be used for penetration testing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeleteTargetDomainCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeleteTargetDomainCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeleteTargetDomainInput
 *   targetDomainId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTargetDomainCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTargetDomainOutput
 * //   targetDomainId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTargetDomainCommandInput - {@link DeleteTargetDomainCommandInput}
 * @returns {@link DeleteTargetDomainCommandOutput}
 * @see {@link DeleteTargetDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetDomainCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class DeleteTargetDomainCommand extends command<DeleteTargetDomainCommandInput, DeleteTargetDomainCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTargetDomain",
  DeleteTargetDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTargetDomainInput;
      output: DeleteTargetDomainOutput;
    };
    sdk: {
      input: DeleteTargetDomainCommandInput;
      output: DeleteTargetDomainCommandOutput;
    };
  };
}
