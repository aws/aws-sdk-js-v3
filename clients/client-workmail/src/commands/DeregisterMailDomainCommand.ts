// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterMailDomainRequest, DeregisterMailDomainResponse } from "../models/models_0";
import { DeregisterMailDomain } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterMailDomainCommand}.
 */
export interface DeregisterMailDomainCommandInput extends DeregisterMailDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterMailDomainCommand}.
 */
export interface DeregisterMailDomainCommandOutput extends DeregisterMailDomainResponse, __MetadataBearer {}

/**
 * <p>Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first
 *          remove any email address used by WorkMail entities before you remove the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeregisterMailDomainCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeregisterMailDomainCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeregisterMailDomainRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeregisterMailDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterMailDomainCommandInput - {@link DeregisterMailDomainCommandInput}
 * @returns {@link DeregisterMailDomainCommandOutput}
 * @see {@link DeregisterMailDomainCommandInput} for command's `input` shape.
 * @see {@link DeregisterMailDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidCustomSesConfigurationException} (client fault)
 *  <p>You SES configuration has customizations that WorkMail cannot save. The error message lists the invalid setting. For examples of invalid settings, refer to
 *          <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html">CreateReceiptRule</a>.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link MailDomainInUseException} (client fault)
 *  <p>The domain you're trying to change is in use by another user or organization in your account. See the error message for details.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DeregisterMailDomainCommand extends $Command
  .classBuilder<
    DeregisterMailDomainCommandInput,
    DeregisterMailDomainCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DeregisterMailDomain", {})
  .n("WorkMailClient", "DeregisterMailDomainCommand")
  .sc(DeregisterMailDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterMailDomainRequest;
      output: {};
    };
    sdk: {
      input: DeregisterMailDomainCommandInput;
      output: DeregisterMailDomainCommandOutput;
    };
  };
}
