// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterMailDomainRequest, DeregisterMailDomainResponse } from "../models/models_0";
import { DeregisterMailDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
 *
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
 *
 * You SES configuration has customizations that WorkMail cannot save. The error message lists the invalid setting. For examples of invalid settings, refer to [CreateReceiptRule](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html).
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link MailDomainInUseException} (client fault)
 *
 * The domain you're trying to change is in use by another user or organization in your account. See the error message for details.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class DeregisterMailDomainCommand extends command<DeregisterMailDomainCommandInput, DeregisterMailDomainCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterMailDomain",
  DeregisterMailDomain$
) {
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
