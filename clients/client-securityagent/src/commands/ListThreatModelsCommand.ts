// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListThreatModelsInput, ListThreatModelsOutput } from "../models/models_0";
import { ListThreatModels$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThreatModelsCommand}.
 */
export interface ListThreatModelsCommandInput extends ListThreatModelsInput {}
/**
 * @public
 *
 * The output of {@link ListThreatModelsCommand}.
 */
export interface ListThreatModelsCommandOutput extends ListThreatModelsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of threat model summaries for the specified agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListThreatModelsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListThreatModelsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListThreatModelsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new ListThreatModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatModelsOutput
 * //   threatModelSummaries: [ // ThreatModelSummaryList
 * //     { // ThreatModelSummary
 * //       threatModelId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatModelsCommandInput - {@link ListThreatModelsCommandInput}
 * @returns {@link ListThreatModelsCommandOutput}
 * @see {@link ListThreatModelsCommandInput} for command's `input` shape.
 * @see {@link ListThreatModelsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListThreatModelsCommand extends $Command
  .classBuilder<
    ListThreatModelsCommandInput,
    ListThreatModelsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListThreatModels", {})
  .n("SecurityAgentClient", "ListThreatModelsCommand")
  .sc(ListThreatModels$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatModelsInput;
      output: ListThreatModelsOutput;
    };
    sdk: {
      input: ListThreatModelsCommandInput;
      output: ListThreatModelsCommandOutput;
    };
  };
}
