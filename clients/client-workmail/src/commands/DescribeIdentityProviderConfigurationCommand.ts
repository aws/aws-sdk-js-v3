// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeIdentityProviderConfigurationRequest,
  DescribeIdentityProviderConfigurationResponse,
} from "../models/models_0";
import { DescribeIdentityProviderConfiguration } from "../schemas/schemas_1_Identity";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityProviderConfigurationCommand}.
 */
export interface DescribeIdentityProviderConfigurationCommandInput
  extends DescribeIdentityProviderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityProviderConfigurationCommand}.
 */
export interface DescribeIdentityProviderConfigurationCommandOutput
  extends DescribeIdentityProviderConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Returns detailed information on the current IdC setup for the WorkMail organization.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeIdentityProviderConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeIdentityProviderConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeIdentityProviderConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityProviderConfigurationResponse
 * //   AuthenticationMode: "IDENTITY_PROVIDER_ONLY" || "IDENTITY_PROVIDER_AND_DIRECTORY",
 * //   IdentityCenterConfiguration: { // IdentityCenterConfiguration
 * //     InstanceArn: "STRING_VALUE", // required
 * //     ApplicationArn: "STRING_VALUE", // required
 * //   },
 * //   PersonalAccessTokenConfiguration: { // PersonalAccessTokenConfiguration
 * //     Status: "ACTIVE" || "INACTIVE", // required
 * //     LifetimeInDays: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIdentityProviderConfigurationCommandInput - {@link DescribeIdentityProviderConfigurationCommandInput}
 * @returns {@link DescribeIdentityProviderConfigurationCommandOutput}
 * @see {@link DescribeIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeIdentityProviderConfigurationCommand extends $Command
  .classBuilder<
    DescribeIdentityProviderConfigurationCommandInput,
    DescribeIdentityProviderConfigurationCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DescribeIdentityProviderConfiguration", {})
  .n("WorkMailClient", "DescribeIdentityProviderConfigurationCommand")
  .sc(DescribeIdentityProviderConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdentityProviderConfigurationRequest;
      output: DescribeIdentityProviderConfigurationResponse;
    };
    sdk: {
      input: DescribeIdentityProviderConfigurationCommandInput;
      output: DescribeIdentityProviderConfigurationCommandOutput;
    };
  };
}
