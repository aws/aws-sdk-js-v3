// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportSecurityRequirementsInput, ImportSecurityRequirementsOutput } from "../models/models_0";
import { ImportSecurityRequirements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Imports security requirements from uploaded documents into a customer managed security requirement pack. The import process asynchronously extracts and generates structured security requirements from the provided source files.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota. Review your current usage and request a quota increase if needed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link SecurityAgentServiceException}
 *
 * Base exception class for all service exceptions from SecurityAgent service.
 *
 * @public
 */
export class ImportSecurityRequirementsCommand extends command<ImportSecurityRequirementsCommandInput, ImportSecurityRequirementsCommandOutput>(
  _ep0,
  _mw0,
  "ImportSecurityRequirements",
  ImportSecurityRequirements$
) {
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
