// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutomationRulesV2Request, ListAutomationRulesV2Response } from "../models/models_3";
import { de_ListAutomationRulesV2Command, se_ListAutomationRulesV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationRulesV2Command}.
 */
export interface ListAutomationRulesV2CommandInput extends ListAutomationRulesV2Request {}
/**
 * @public
 *
 * The output of {@link ListAutomationRulesV2Command}.
 */
export interface ListAutomationRulesV2CommandOutput extends ListAutomationRulesV2Response, __MetadataBearer {}

/**
 * <p>Returns a list of automation rules and metadata for the calling account. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListAutomationRulesV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListAutomationRulesV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListAutomationRulesV2Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAutomationRulesV2Command(input);
 * const response = await client.send(command);
 * // { // ListAutomationRulesV2Response
 * //   Rules: [ // AutomationRulesMetadataListV2
 * //     { // AutomationRulesMetadataV2
 * //       RuleArn: "STRING_VALUE",
 * //       RuleId: "STRING_VALUE",
 * //       RuleOrder: Number("float"),
 * //       RuleName: "STRING_VALUE",
 * //       RuleStatus: "ENABLED" || "DISABLED",
 * //       Description: "STRING_VALUE",
 * //       Actions: [ // AutomationRulesActionTypeListV2
 * //         { // AutomationRulesActionTypeObjectV2
 * //           Type: "FINDING_FIELDS_UPDATE" || "EXTERNAL_INTEGRATION",
 * //         },
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomationRulesV2CommandInput - {@link ListAutomationRulesV2CommandInput}
 * @returns {@link ListAutomationRulesV2CommandOutput}
 * @see {@link ListAutomationRulesV2CommandInput} for command's `input` shape.
 * @see {@link ListAutomationRulesV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class ListAutomationRulesV2Command extends $Command
  .classBuilder<
    ListAutomationRulesV2CommandInput,
    ListAutomationRulesV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListAutomationRulesV2", {})
  .n("SecurityHubClient", "ListAutomationRulesV2Command")
  .f(void 0, void 0)
  .ser(se_ListAutomationRulesV2Command)
  .de(de_ListAutomationRulesV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomationRulesV2Request;
      output: ListAutomationRulesV2Response;
    };
    sdk: {
      input: ListAutomationRulesV2CommandInput;
      output: ListAutomationRulesV2CommandOutput;
    };
  };
}
