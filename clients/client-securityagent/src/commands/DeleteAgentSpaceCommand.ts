// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAgentSpaceInput, DeleteAgentSpaceOutput } from "../models/models_0";
import { DeleteAgentSpace$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentSpaceCommand}.
 */
export interface DeleteAgentSpaceCommandInput extends DeleteAgentSpaceInput {}
/**
 * @public
 *
 * The output of {@link DeleteAgentSpaceCommand}.
 */
export interface DeleteAgentSpaceCommandOutput extends DeleteAgentSpaceOutput, __MetadataBearer {}

/**
 * <p>Deletes an agent space and all of its associated resources, including pentests, findings, and artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeleteAgentSpaceCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeleteAgentSpaceCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeleteAgentSpaceInput
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentSpaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAgentSpaceOutput
 * //   agentSpaceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAgentSpaceCommandInput - {@link DeleteAgentSpaceCommandInput}
 * @returns {@link DeleteAgentSpaceCommandOutput}
 * @see {@link DeleteAgentSpaceCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentSpaceCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class DeleteAgentSpaceCommand extends $Command
  .classBuilder<
    DeleteAgentSpaceCommandInput,
    DeleteAgentSpaceCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "DeleteAgentSpace", {})
  .n("SecurityAgentClient", "DeleteAgentSpaceCommand")
  .sc(DeleteAgentSpace$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentSpaceInput;
      output: DeleteAgentSpaceOutput;
    };
    sdk: {
      input: DeleteAgentSpaceCommandInput;
      output: DeleteAgentSpaceCommandOutput;
    };
  };
}
