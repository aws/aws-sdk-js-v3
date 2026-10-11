// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateRuleConfigurationRequest, GenerateRuleConfigurationResponse } from "../models/models_0";
import { GenerateRuleConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateRuleConfigurationCommand}.
 */
export interface GenerateRuleConfigurationCommandInput extends GenerateRuleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GenerateRuleConfigurationCommand}.
 */
export interface GenerateRuleConfigurationCommandOutput extends GenerateRuleConfigurationResponse, __MetadataBearer {}

/**
 * <p>Generates a rule configuration from a natural-language description. Provide a prompt along with the rule's firewall type and rule type. The service returns a configuration that you can use when you create or update a rule. If you also provide an existing configuration, the service edits that configuration instead of generating a new one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, GenerateRuleConfigurationCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, GenerateRuleConfigurationCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // GenerateRuleConfigurationRequest
 *   prompt: "STRING_VALUE", // required
 *   ruleFirewallType: "WAF", // required
 *   ruleType: "CONFIGURATION" || "INSPECTION", // required
 *   wafConfigDataType: "DefaultAction" || "VisibilityConfig" || "CaptchaConfig" || "ChallengeConfig" || "CustomResponseBodies" || "LoggingConfiguration" || "DataProtectionConfig" || "AssociationConfig" || "OnSourceDDoSProtectionConfig" || "TokenDomains",
 *   currentConfiguration: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new GenerateRuleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GenerateRuleConfigurationResponse
 * //   configuration: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateRuleConfigurationCommandInput - {@link GenerateRuleConfigurationCommandInput}
 * @returns {@link GenerateRuleConfigurationCommandOutput}
 * @see {@link GenerateRuleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GenerateRuleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example Generate a rule configuration from a description
 * ```javascript
 * // Generates a firewall rule configuration from a natural language description. The response contains the generated configuration as a JSON string, ready to use as the configuration of a rule.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440015",
 *   prompt: "Create a rate limiting rule that blocks IP addresses sending more than 2000 requests in 5 minutes",
 *   ruleFirewallType: "WAF",
 *   ruleType: "INSPECTION"
 * };
 * const command = new GenerateRuleConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration: `{"name":"rate-limit-rule","priority":1,"statement":{"rateBasedStatement":{"limit":2000,"evaluationWindowSec":300,"aggregateKeyType":"IP"}},"action":{"block":{}}}`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateRuleConfigurationCommand extends command<GenerateRuleConfigurationCommandInput, GenerateRuleConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GenerateRuleConfiguration",
  GenerateRuleConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateRuleConfigurationRequest;
      output: GenerateRuleConfigurationResponse;
    };
    sdk: {
      input: GenerateRuleConfigurationCommandInput;
      output: GenerateRuleConfigurationCommandOutput;
    };
  };
}
