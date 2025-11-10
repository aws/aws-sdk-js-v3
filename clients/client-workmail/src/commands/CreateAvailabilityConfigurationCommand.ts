// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAvailabilityConfigurationRequest, CreateAvailabilityConfigurationResponse } from "../models/models_0";
import { CreateAvailabilityConfiguration } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAvailabilityConfigurationCommand}.
 */
export interface CreateAvailabilityConfigurationCommandInput extends CreateAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAvailabilityConfigurationCommand}.
 */
export interface CreateAvailabilityConfigurationCommandOutput
  extends CreateAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CreateAvailabilityConfigurationRequest
 *   ClientToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   EwsProvider: { // EwsAvailabilityProvider
 *     EwsEndpoint: "STRING_VALUE", // required
 *     EwsUsername: "STRING_VALUE", // required
 *     EwsPassword: "STRING_VALUE", // required
 *   },
 *   LambdaProvider: { // LambdaAvailabilityProvider
 *     LambdaArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAvailabilityConfigurationCommandInput - {@link CreateAvailabilityConfigurationCommandInput}
 * @returns {@link CreateAvailabilityConfigurationCommandOutput}
 * @see {@link CreateAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *  <p>The user, group, or resource name isn't unique in WorkMail.</p>
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
export class CreateAvailabilityConfigurationCommand extends $Command
  .classBuilder<
    CreateAvailabilityConfigurationCommandInput,
    CreateAvailabilityConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "CreateAvailabilityConfiguration", {})
  .n("WorkMailClient", "CreateAvailabilityConfigurationCommand")
  .sc(CreateAvailabilityConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAvailabilityConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateAvailabilityConfigurationCommandInput;
      output: CreateAvailabilityConfigurationCommandOutput;
    };
  };
}
