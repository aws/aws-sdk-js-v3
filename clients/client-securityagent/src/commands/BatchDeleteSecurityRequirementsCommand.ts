// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteSecurityRequirementsInput, BatchDeleteSecurityRequirementsOutput } from "../models/models_0";
import { BatchDeleteSecurityRequirements$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Batch deletes security requirements from a customer managed pack.</p>
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
export class BatchDeleteSecurityRequirementsCommand extends $Command
  .classBuilder<
    BatchDeleteSecurityRequirementsCommandInput,
    BatchDeleteSecurityRequirementsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchDeleteSecurityRequirements", {})
  .n("SecurityAgentClient", "BatchDeleteSecurityRequirementsCommand")
  .sc(BatchDeleteSecurityRequirements$)
  .build() {
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
