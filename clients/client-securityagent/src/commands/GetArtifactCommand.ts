// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetArtifactInput, GetArtifactOutput } from "../models/models_0";
import { GetArtifact$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArtifactCommand}.
 */
export interface GetArtifactCommandInput extends GetArtifactInput {}
/**
 * @public
 *
 * The output of {@link GetArtifactCommand}.
 */
export interface GetArtifactCommandOutput extends GetArtifactOutput, __MetadataBearer {}

/**
 * <p>Retrieves an artifact from an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, GetArtifactCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, GetArtifactCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // GetArtifactInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   artifactId: "STRING_VALUE", // required
 * };
 * const command = new GetArtifactCommand(input);
 * const response = await client.send(command);
 * // { // GetArtifactOutput
 * //   agentSpaceId: "STRING_VALUE", // required
 * //   artifactId: "STRING_VALUE", // required
 * //   artifact: { // Artifact
 * //     contents: "STRING_VALUE", // required
 * //     type: "TXT" || "PNG" || "JPEG" || "MD" || "PDF" || "DOCX" || "DOC" || "JSON" || "YAML", // required
 * //   },
 * //   fileName: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetArtifactCommandInput - {@link GetArtifactCommandInput}
 * @returns {@link GetArtifactCommandOutput}
 * @see {@link GetArtifactCommandInput} for command's `input` shape.
 * @see {@link GetArtifactCommandOutput} for command's `response` shape.
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
export class GetArtifactCommand extends $Command
  .classBuilder<
    GetArtifactCommandInput,
    GetArtifactCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "GetArtifact", {})
  .n("SecurityAgentClient", "GetArtifactCommand")
  .sc(GetArtifact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArtifactInput;
      output: GetArtifactOutput;
    };
    sdk: {
      input: GetArtifactCommandInput;
      output: GetArtifactCommandOutput;
    };
  };
}
