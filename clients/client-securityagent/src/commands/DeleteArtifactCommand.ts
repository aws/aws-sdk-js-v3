// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteArtifactInput, DeleteArtifactOutput } from "../models/models_0";
import { DeleteArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteArtifactCommand}.
 */
export interface DeleteArtifactCommandInput extends DeleteArtifactInput {}
/**
 * @public
 *
 * The output of {@link DeleteArtifactCommand}.
 */
export interface DeleteArtifactCommandOutput extends DeleteArtifactOutput, __MetadataBearer {}

/**
 * <p>Deletes an artifact from an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeleteArtifactCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeleteArtifactCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeleteArtifactInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   artifactId: "STRING_VALUE", // required
 * };
 * const command = new DeleteArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteArtifactCommandInput - {@link DeleteArtifactCommandInput}
 * @returns {@link DeleteArtifactCommandOutput}
 * @see {@link DeleteArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteArtifactCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DeleteArtifactCommand extends command<DeleteArtifactCommandInput, DeleteArtifactCommandOutput>(
  _ep0,
  _mw0,
  "DeleteArtifact",
  DeleteArtifact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteArtifactInput;
      output: {};
    };
    sdk: {
      input: DeleteArtifactCommandInput;
      output: DeleteArtifactCommandOutput;
    };
  };
}
