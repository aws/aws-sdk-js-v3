// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportSecurityRequirementsInput, ImportSecurityRequirementsOutput } from "../models/models_0";
import { ImportSecurityRequirements$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportSecurityRequirementsCommand}.
 */
export interface ImportSecurityRequirementsCommandInput extends ImportSecurityRequirementsInput {}
/**
 * @public
 *
 * The output of {@link ImportSecurityRequirementsCommand}.
 */
export interface ImportSecurityRequirementsCommandOutput extends ImportSecurityRequirementsOutput, __MetadataBearer {}

/**
 * <p>Imports security requirements from uploaded documents into a customer managed security requirement pack. The import process asynchronously extracts and generates structured security requirements from the provided source files.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ImportSecurityRequirementsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ImportSecurityRequirementsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ImportSecurityRequirementsInput
 *   packId: "STRING_VALUE", // required
 *   input: { // ImportSource Union: only one key present
 *     documents: [ // SecurityRequirementArtifactList
 *       { // SecurityRequirementArtifact
 *         name: "STRING_VALUE", // required
 *         format: "MD" || "PDF" || "TXT" || "DOCX" || "DOC", // required
 *         content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")         // required
 *       },
 *     ],
 *   },
 * };
 * const command = new ImportSecurityRequirementsCommand(input);
 * const response = await client.send(command);
 * // { // ImportSecurityRequirementsOutput
 * //   packId: "STRING_VALUE", // required
 * //   importStatus: "PENDING" || "IN_PROGRESS" || "FAILED" || "COMPLETED", // required
 * // };
 *
 * ```
 *
 * @param ImportSecurityRequirementsCommandInput - {@link ImportSecurityRequirementsCommandInput}
 * @returns {@link ImportSecurityRequirementsCommandOutput}
 * @see {@link ImportSecurityRequirementsCommandInput} for command's `input` shape.
 * @see {@link ImportSecurityRequirementsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota. Review your current usage and request a quota increase if needed.</p>
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
export class ImportSecurityRequirementsCommand extends $Command
  .classBuilder<
    ImportSecurityRequirementsCommandInput,
    ImportSecurityRequirementsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ImportSecurityRequirements", {})
  .n("SecurityAgentClient", "ImportSecurityRequirementsCommand")
  .sc(ImportSecurityRequirements$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportSecurityRequirementsInput;
      output: ImportSecurityRequirementsOutput;
    };
    sdk: {
      input: ImportSecurityRequirementsCommandInput;
      output: ImportSecurityRequirementsCommandOutput;
    };
  };
}
