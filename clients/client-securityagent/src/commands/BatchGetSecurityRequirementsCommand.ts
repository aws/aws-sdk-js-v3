// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetSecurityRequirementsInput, BatchGetSecurityRequirementsOutput } from "../models/models_0";
import { BatchGetSecurityRequirements$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSecurityRequirementsCommand}.
 */
export interface BatchGetSecurityRequirementsCommandInput extends BatchGetSecurityRequirementsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetSecurityRequirementsCommand}.
 */
export interface BatchGetSecurityRequirementsCommandOutput extends BatchGetSecurityRequirementsOutput, __MetadataBearer {}

/**
 * <p>Batch retrieves security requirements from a pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetSecurityRequirementsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetSecurityRequirementsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetSecurityRequirementsInput
 *   packId: "STRING_VALUE", // required
 *   securityRequirementNames: [ // SecurityRequirementNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSecurityRequirementsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSecurityRequirementsOutput
 * //   securityRequirements: [ // BatchGetSecurityRequirementResultList // required
 * //     { // BatchGetSecurityRequirementResult
 * //       packId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       domain: "STRING_VALUE", // required
 * //       evaluation: "STRING_VALUE", // required
 * //       remediation: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
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
 * @param BatchGetSecurityRequirementsCommandInput - {@link BatchGetSecurityRequirementsCommandInput}
 * @returns {@link BatchGetSecurityRequirementsCommandOutput}
 * @see {@link BatchGetSecurityRequirementsCommandInput} for command's `input` shape.
 * @see {@link BatchGetSecurityRequirementsCommandOutput} for command's `response` shape.
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
export class BatchGetSecurityRequirementsCommand extends $Command
  .classBuilder<
    BatchGetSecurityRequirementsCommandInput,
    BatchGetSecurityRequirementsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetSecurityRequirements", {})
  .n("SecurityAgentClient", "BatchGetSecurityRequirementsCommand")
  .sc(BatchGetSecurityRequirements$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSecurityRequirementsInput;
      output: BatchGetSecurityRequirementsOutput;
    };
    sdk: {
      input: BatchGetSecurityRequirementsCommandInput;
      output: BatchGetSecurityRequirementsCommandOutput;
    };
  };
}
