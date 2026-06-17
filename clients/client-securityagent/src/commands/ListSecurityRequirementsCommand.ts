// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityRequirementsInput, ListSecurityRequirementsOutput } from "../models/models_0";
import { ListSecurityRequirements$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityRequirementsCommand}.
 */
export interface ListSecurityRequirementsCommandInput extends ListSecurityRequirementsInput {}
/**
 * @public
 *
 * The output of {@link ListSecurityRequirementsCommand}.
 */
export interface ListSecurityRequirementsCommandOutput extends ListSecurityRequirementsOutput, __MetadataBearer {}

/**
 * <p>Lists security requirements within a pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListSecurityRequirementsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListSecurityRequirementsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListSecurityRequirementsInput
 *   packId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSecurityRequirementsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityRequirementsOutput
 * //   securityRequirementSummaries: [ // SecurityRequirementSummaryList // required
 * //     { // SecurityRequirementSummary
 * //       packId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityRequirementsCommandInput - {@link ListSecurityRequirementsCommandInput}
 * @returns {@link ListSecurityRequirementsCommandOutput}
 * @see {@link ListSecurityRequirementsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityRequirementsCommandOutput} for command's `response` shape.
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
export class ListSecurityRequirementsCommand extends $Command
  .classBuilder<
    ListSecurityRequirementsCommandInput,
    ListSecurityRequirementsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListSecurityRequirements", {})
  .n("SecurityAgentClient", "ListSecurityRequirementsCommand")
  .sc(ListSecurityRequirements$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityRequirementsInput;
      output: ListSecurityRequirementsOutput;
    };
    sdk: {
      input: ListSecurityRequirementsCommandInput;
      output: ListSecurityRequirementsCommandOutput;
    };
  };
}
