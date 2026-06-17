// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityRequirementPacksInput, ListSecurityRequirementPacksOutput } from "../models/models_0";
import { ListSecurityRequirementPacks$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityRequirementPacksCommand}.
 */
export interface ListSecurityRequirementPacksCommandInput extends ListSecurityRequirementPacksInput {}
/**
 * @public
 *
 * The output of {@link ListSecurityRequirementPacksCommand}.
 */
export interface ListSecurityRequirementPacksCommandOutput extends ListSecurityRequirementPacksOutput, __MetadataBearer {}

/**
 * <p>Lists all security requirement packs in the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListSecurityRequirementPacksCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListSecurityRequirementPacksCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListSecurityRequirementPacksInput
 *   filter: { // ListSecurityRequirementPackFilter
 *     managementType: "AWS_MANAGED" || "CUSTOMER_MANAGED",
 *     status: "ENABLED" || "DISABLED",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSecurityRequirementPacksCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityRequirementPacksOutput
 * //   securityRequirementPackSummaries: [ // SecurityRequirementPackSummaryList // required
 * //     { // SecurityRequirementPackSummary
 * //       packId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       vendorName: "STRING_VALUE",
 * //       managementType: "AWS_MANAGED" || "CUSTOMER_MANAGED", // required
 * //       status: "ENABLED" || "DISABLED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityRequirementPacksCommandInput - {@link ListSecurityRequirementPacksCommandInput}
 * @returns {@link ListSecurityRequirementPacksCommandOutput}
 * @see {@link ListSecurityRequirementPacksCommandInput} for command's `input` shape.
 * @see {@link ListSecurityRequirementPacksCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
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
export class ListSecurityRequirementPacksCommand extends $Command
  .classBuilder<
    ListSecurityRequirementPacksCommandInput,
    ListSecurityRequirementPacksCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListSecurityRequirementPacks", {})
  .n("SecurityAgentClient", "ListSecurityRequirementPacksCommand")
  .sc(ListSecurityRequirementPacks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityRequirementPacksInput;
      output: ListSecurityRequirementPacksOutput;
    };
    sdk: {
      input: ListSecurityRequirementPacksCommandInput;
      output: ListSecurityRequirementPacksCommandOutput;
    };
  };
}
