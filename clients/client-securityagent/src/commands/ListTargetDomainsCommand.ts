// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTargetDomainsInput, ListTargetDomainsOutput } from "../models/models_0";
import { ListTargetDomains$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetDomainsCommand}.
 */
export interface ListTargetDomainsCommandInput extends ListTargetDomainsInput {}
/**
 * @public
 *
 * The output of {@link ListTargetDomainsCommand}.
 */
export interface ListTargetDomainsCommandOutput extends ListTargetDomainsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of target domain summaries in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListTargetDomainsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListTargetDomainsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListTargetDomainsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTargetDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetDomainsOutput
 * //   targetDomainSummaries: [ // TargetDomainSummaryList
 * //     { // TargetDomainSummary
 * //       targetDomainId: "STRING_VALUE", // required
 * //       domainName: "STRING_VALUE", // required
 * //       verificationStatus: "PENDING" || "VERIFIED" || "FAILED" || "UNREACHABLE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetDomainsCommandInput - {@link ListTargetDomainsCommandInput}
 * @returns {@link ListTargetDomainsCommandOutput}
 * @see {@link ListTargetDomainsCommandInput} for command's `input` shape.
 * @see {@link ListTargetDomainsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListTargetDomainsCommand extends $Command
  .classBuilder<
    ListTargetDomainsCommandInput,
    ListTargetDomainsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListTargetDomains", {})
  .n("SecurityAgentClient", "ListTargetDomainsCommand")
  .sc(ListTargetDomains$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTargetDomainsInput;
      output: ListTargetDomainsOutput;
    };
    sdk: {
      input: ListTargetDomainsCommandInput;
      output: ListTargetDomainsCommandOutput;
    };
  };
}
