// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateSecurityRequirementsInput, BatchUpdateSecurityRequirementsOutput } from "../models/models_0";
import { BatchUpdateSecurityRequirements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateSecurityRequirementsCommand}.
 */
export interface BatchUpdateSecurityRequirementsCommandInput extends BatchUpdateSecurityRequirementsInput {}
/**
 * @public
 *
 * The output of {@link BatchUpdateSecurityRequirementsCommand}.
 */
export interface BatchUpdateSecurityRequirementsCommandOutput extends BatchUpdateSecurityRequirementsOutput, __MetadataBearer {}

/**
 * <p>Batch updates security requirements within a customer managed pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchUpdateSecurityRequirementsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchUpdateSecurityRequirementsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchUpdateSecurityRequirementsInput
 *   packId: "STRING_VALUE", // required
 *   securityRequirements: [ // UpdateSecurityRequirementEntryList // required
 *     { // UpdateSecurityRequirementEntry
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       domain: "STRING_VALUE",
 *       evaluation: "STRING_VALUE",
 *       remediation: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateSecurityRequirementsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateSecurityRequirementsOutput
 * //   updatedSecurityRequirementNames: [ // SecurityRequirementNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // BatchSecurityRequirementErrors // required
 * //     { // BatchSecurityRequirementError
 * //       securityRequirementName: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateSecurityRequirementsCommandInput - {@link BatchUpdateSecurityRequirementsCommandInput}
 * @returns {@link BatchUpdateSecurityRequirementsCommandOutput}
 * @see {@link BatchUpdateSecurityRequirementsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateSecurityRequirementsCommandOutput} for command's `response` shape.
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
export class BatchUpdateSecurityRequirementsCommand extends command<BatchUpdateSecurityRequirementsCommandInput, BatchUpdateSecurityRequirementsCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateSecurityRequirements",
  BatchUpdateSecurityRequirements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateSecurityRequirementsInput;
      output: BatchUpdateSecurityRequirementsOutput;
    };
    sdk: {
      input: BatchUpdateSecurityRequirementsCommandInput;
      output: BatchUpdateSecurityRequirementsCommandOutput;
    };
  };
}
