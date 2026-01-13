// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EnableSecurityHubRequest, EnableSecurityHubResponse } from "../models/models_2";
import { EnableSecurityHub$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSecurityHubCommand}.
 */
export interface EnableSecurityHubCommandInput extends EnableSecurityHubRequest {}
/**
 * @public
 *
 * The output of {@link EnableSecurityHubCommand}.
 */
export interface EnableSecurityHubCommandOutput extends EnableSecurityHubResponse, __MetadataBearer {}

/**
 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
 *          request.</p>
 *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
 *          from other services that are integrated with Security Hub.</p>
 *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
 *          automatically enable the following standards:</p>
 *          <ul>
 *             <li>
 *                <p>Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Foundational Security Best Practices</p>
 *             </li>
 *          </ul>
 *          <p>Other standards are not automatically enabled. </p>
 *          <p>To opt out of automatically enabled standards, set
 *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
 *          <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the
 *                <code>BatchDisableStandards</code> operation.</p>
 *          <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // EnableSecurityHubRequest
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   EnableDefaultStandards: true || false,
 *   ControlFindingGenerator: "STANDARD_CONTROL" || "SECURITY_CONTROL",
 * };
 * const command = new EnableSecurityHubCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableSecurityHubCommandInput - {@link EnableSecurityHubCommandInput}
 * @returns {@link EnableSecurityHubCommandOutput}
 * @see {@link EnableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link EnableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To activate Security Hub
 * ```javascript
 * // The following example activates the Security Hub service in the requesting AWS account. The service is activated in the current AWS Region or the Region that you specify in the request. Some standards are automatically turned on in your account unless you opt out. To determine which standards are automatically turned on, see the Security Hub documentation.
 * const input = {
 *   EnableDefaultStandards: true,
 *   Tags: {
 *     Department: "Security"
 *   }
 * };
 * const command = new EnableSecurityHubCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class EnableSecurityHubCommand extends $Command
  .classBuilder<
    EnableSecurityHubCommandInput,
    EnableSecurityHubCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "EnableSecurityHub", {})
  .n("SecurityHubClient", "EnableSecurityHubCommand")
  .sc(EnableSecurityHub$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableSecurityHubRequest;
      output: {};
    };
    sdk: {
      input: EnableSecurityHubCommandInput;
      output: EnableSecurityHubCommandOutput;
    };
  };
}
