// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
} from "../models/models_2";
import { DescribeOrganizationConfiguration } from "../schemas/schemas_44_Organization";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandInput extends DescribeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandOutput
  extends DescribeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the way your organization is configured in Security Hub. Only the
 *          Security Hub administrator account can invoke this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeOrganizationConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConfigurationResponse
 * //   AutoEnable: true || false,
 * //   MemberAccountLimitReached: true || false,
 * //   AutoEnableStandards: "NONE" || "DEFAULT",
 * //   OrganizationConfiguration: { // OrganizationConfiguration
 * //     ConfigurationType: "CENTRAL" || "LOCAL",
 * //     Status: "PENDING" || "ENABLED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConfigurationCommandInput - {@link DescribeOrganizationConfigurationCommandInput}
 * @returns {@link DescribeOrganizationConfigurationCommandOutput}
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To get information about organization configuration
 * ```javascript
 * // This operation provides information about the way your organization is configured in Security Hub. Only a Security Hub administrator account can invoke this operation.
 * const input = { /* empty *\/ };
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AutoEnable: false,
 *   AutoEnableStandards: "NONE",
 *   MemberAccountLimitReached: false,
 *   OrganizationConfiguration: {
 *     ConfigurationType: "CENTRAL",
 *     Status: "ENABLED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeOrganizationConfigurationCommand extends $Command
  .classBuilder<
    DescribeOrganizationConfigurationCommandInput,
    DescribeOrganizationConfigurationCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DescribeOrganizationConfiguration", {})
  .n("SecurityHubClient", "DescribeOrganizationConfigurationCommand")
  .sc(DescribeOrganizationConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeOrganizationConfigurationResponse;
    };
    sdk: {
      input: DescribeOrganizationConfigurationCommandInput;
      output: DescribeOrganizationConfigurationCommandOutput;
    };
  };
}
