// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDefaultMailDomainRequest, UpdateDefaultMailDomainResponse } from "../models/models_0";
import { UpdateDefaultMailDomain } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDefaultMailDomainCommand}.
 */
export interface UpdateDefaultMailDomainCommandInput extends UpdateDefaultMailDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDefaultMailDomainCommand}.
 */
export interface UpdateDefaultMailDomainCommandOutput extends UpdateDefaultMailDomainResponse, __MetadataBearer {}

/**
 * <p>Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateDefaultMailDomainCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateDefaultMailDomainCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // UpdateDefaultMailDomainRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new UpdateDefaultMailDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDefaultMailDomainCommandInput - {@link UpdateDefaultMailDomainCommandInput}
 * @returns {@link UpdateDefaultMailDomainCommandOutput}
 * @see {@link UpdateDefaultMailDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultMailDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link MailDomainNotFoundException} (client fault)
 *  <p>The domain specified is not found in your organization.</p>
 *
 * @throws {@link MailDomainStateException} (client fault)
 *  <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
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
export class UpdateDefaultMailDomainCommand extends $Command
  .classBuilder<
    UpdateDefaultMailDomainCommandInput,
    UpdateDefaultMailDomainCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "UpdateDefaultMailDomain", {})
  .n("WorkMailClient", "UpdateDefaultMailDomainCommand")
  .sc(UpdateDefaultMailDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDefaultMailDomainRequest;
      output: {};
    };
    sdk: {
      input: UpdateDefaultMailDomainCommandInput;
      output: UpdateDefaultMailDomainCommandOutput;
    };
  };
}
