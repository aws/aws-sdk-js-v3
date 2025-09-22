// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterMailDomainRequest, RegisterMailDomainResponse } from "../models/models_0";
import { RegisterMailDomain } from "../schemas/schemas_9_Create";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterMailDomainCommand}.
 */
export interface RegisterMailDomainCommandInput extends RegisterMailDomainRequest {}
/**
 * @public
 *
 * The output of {@link RegisterMailDomainCommand}.
 */
export interface RegisterMailDomainCommandOutput extends RegisterMailDomainResponse, __MetadataBearer {}

/**
 * <p>Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has
 *          permanent permission to use the specified domain for sending your users' emails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, RegisterMailDomainCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, RegisterMailDomainCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // RegisterMailDomainRequest
 *   ClientToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new RegisterMailDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterMailDomainCommandInput - {@link RegisterMailDomainCommandInput}
 * @returns {@link RegisterMailDomainCommandOutput}
 * @see {@link RegisterMailDomainCommandInput} for command's `input` shape.
 * @see {@link RegisterMailDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
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
export class RegisterMailDomainCommand extends $Command
  .classBuilder<
    RegisterMailDomainCommandInput,
    RegisterMailDomainCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "RegisterMailDomain", {})
  .n("WorkMailClient", "RegisterMailDomainCommand")
  .sc(RegisterMailDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterMailDomainRequest;
      output: {};
    };
    sdk: {
      input: RegisterMailDomainCommandInput;
      output: RegisterMailDomainCommandOutput;
    };
  };
}
