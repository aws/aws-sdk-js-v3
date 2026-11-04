// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteSecurityRequirementsInput, BatchDeleteSecurityRequirementsOutput } from "../models/models_0";
import { BatchDeleteSecurityRequirements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteSecurityRequirementsCommand}.
 */
export interface BatchDeleteSecurityRequirementsCommandInput extends BatchDeleteSecurityRequirementsInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteSecurityRequirementsCommand}.
 */
export interface BatchDeleteSecurityRequirementsCommandOutput extends BatchDeleteSecurityRequirementsOutput, __MetadataBearer {}

/**
 * Batch deletes security requirements from a customer managed pack.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchDeleteSecurityRequirementsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchDeleteSecurityRequirementsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchDeleteSecurityRequirementsInput
 *   packId: "STRING_VALUE", // required
 *   securityRequirementNames: [ // SecurityRequirementNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteSecurityRequirementsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteSecurityRequirementsOutput
 * //   deletedSecurityRequirementNames: [ // SecurityRequirementNameList // required
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
 * @param BatchDeleteSecurityRequirementsCommandInput - {@link BatchDeleteSecurityRequirementsCommandInput}
 * @returns {@link BatchDeleteSecurityRequirementsCommandOutput}
 * @see {@link BatchDeleteSecurityRequirementsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteSecurityRequirementsCommandOutput} for command's `response` shape.
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
export class BatchDeleteSecurityRequirementsCommand extends command<BatchDeleteSecurityRequirementsCommandInput, BatchDeleteSecurityRequirementsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteSecurityRequirements",
  BatchDeleteSecurityRequirements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteSecurityRequirementsInput;
      output: BatchDeleteSecurityRequirementsOutput;
    };
    sdk: {
      input: BatchDeleteSecurityRequirementsCommandInput;
      output: BatchDeleteSecurityRequirementsCommandOutput;
    };
  };
}
