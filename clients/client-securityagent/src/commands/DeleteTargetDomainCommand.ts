// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTargetDomainInput, DeleteTargetDomainOutput } from "../models/models_0";
import { DeleteTargetDomain$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DeleteTargetDomainCommand extends $Command
  .classBuilder<
    DeleteTargetDomainCommandInput,
    DeleteTargetDomainCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "DeleteTargetDomain", {})
  .n("SecurityAgentClient", "DeleteTargetDomainCommand")
  .sc(DeleteTargetDomain$)
  .build() {
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
