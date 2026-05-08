// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AddArtifactInput, AddArtifactOutput } from "../models/models_0";
import { AddArtifact$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddArtifactCommand}.
 */
export interface AddArtifactCommandInput extends AddArtifactInput {}
/**
 * @public
 *
 * The output of {@link AddArtifactCommand}.
 */
export interface AddArtifactCommandOutput extends AddArtifactOutput, __MetadataBearer {}

/**
 * <p>Uploads an artifact to an agent space. Artifacts provide additional context for security testing, such as architecture diagrams, API specifications, or configuration files.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, AddArtifactCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, AddArtifactCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // AddArtifactInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   artifactContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   artifactType: "TXT" || "PNG" || "JPEG" || "MD" || "PDF" || "DOCX" || "DOC" || "JSON" || "YAML", // required
 *   fileName: "STRING_VALUE", // required
 * };
 * const command = new AddArtifactCommand(input);
 * const response = await client.send(command);
 * // { // AddArtifactOutput
 * //   artifactId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AddArtifactCommandInput - {@link AddArtifactCommandInput}
 * @returns {@link AddArtifactCommandOutput}
 * @see {@link AddArtifactCommandInput} for command's `input` shape.
 * @see {@link AddArtifactCommandOutput} for command's `response` shape.
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
export class AddArtifactCommand extends $Command
  .classBuilder<
    AddArtifactCommandInput,
    AddArtifactCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "AddArtifact", {})
  .n("SecurityAgentClient", "AddArtifactCommand")
  .sc(AddArtifact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddArtifactInput;
      output: AddArtifactOutput;
    };
    sdk: {
      input: AddArtifactCommandInput;
      output: AddArtifactCommandOutput;
    };
  };
}
