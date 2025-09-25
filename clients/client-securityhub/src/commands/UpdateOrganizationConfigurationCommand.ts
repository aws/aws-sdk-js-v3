// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateOrganizationConfigurationRequest, UpdateOrganizationConfigurationResponse } from "../models/models_3";
import { UpdateOrganizationConfiguration } from "../schemas/schemas_23_Configuration";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandInput extends UpdateOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandOutput
  extends UpdateOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration of your organization in Security Hub. Only the
 *          Security Hub administrator account can invoke this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateOrganizationConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateOrganizationConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateOrganizationConfigurationRequest
 *   AutoEnable: true || false, // required
 *   AutoEnableStandards: "NONE" || "DEFAULT",
 *   OrganizationConfiguration: { // OrganizationConfiguration
 *     ConfigurationType: "CENTRAL" || "LOCAL",
 *     Status: "PENDING" || "ENABLED" || "FAILED",
 *     StatusMessage: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOrganizationConfigurationCommandInput - {@link UpdateOrganizationConfigurationCommandInput}
 * @returns {@link UpdateOrganizationConfigurationCommandOutput}
 * @see {@link UpdateOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To update organization configuration
 * ```javascript
 * // This operation updates the way your organization is configured in Security Hub. Only a Security Hub administrator account can invoke this operation.
 * const input = {
 *   AutoEnable: false,
 *   AutoEnableStandards: "NONE",
 *   OrganizationConfiguration: {
 *     ConfigurationType: "CENTRAL"
 *   }
 * };
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateOrganizationConfigurationCommand extends $Command
  .classBuilder<
    UpdateOrganizationConfigurationCommandInput,
    UpdateOrganizationConfigurationCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "UpdateOrganizationConfiguration", {})
  .n("SecurityHubClient", "UpdateOrganizationConfigurationCommand")
  .sc(UpdateOrganizationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOrganizationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateOrganizationConfigurationCommandInput;
      output: UpdateOrganizationConfigurationCommandOutput;
    };
  };
}
