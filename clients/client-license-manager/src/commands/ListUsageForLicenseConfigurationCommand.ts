// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerClient";
import type {
  ListUsageForLicenseConfigurationRequest,
  ListUsageForLicenseConfigurationResponse,
} from "../models/models_0";
import { ListUsageForLicenseConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsageForLicenseConfigurationCommand}.
 */
export interface ListUsageForLicenseConfigurationCommandInput extends ListUsageForLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ListUsageForLicenseConfigurationCommand}.
 */
export interface ListUsageForLicenseConfigurationCommandOutput
  extends ListUsageForLicenseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Lists all license usage records for a license configuration, displaying license
 *          consumption details by resource at a selected point in time. Use this action to audit the
 *          current license consumption for any license inventory and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListUsageForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListUsageForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListUsageForLicenseConfigurationRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListUsageForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ListUsageForLicenseConfigurationResponse
 * //   LicenseConfigurationUsageList: [ // LicenseConfigurationUsageList
 * //     { // LicenseConfigurationUsage
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //       ResourceStatus: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       AssociationTime: new Date("TIMESTAMP"),
 * //       ConsumedLicenses: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsageForLicenseConfigurationCommandInput - {@link ListUsageForLicenseConfigurationCommandInput}
 * @returns {@link ListUsageForLicenseConfigurationCommandOutput}
 * @see {@link ListUsageForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListUsageForLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link FilterLimitExceededException} (client fault)
 *  <p>The request uses too many filters or too many filter values.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class ListUsageForLicenseConfigurationCommand extends $Command
  .classBuilder<
    ListUsageForLicenseConfigurationCommandInput,
    ListUsageForLicenseConfigurationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListUsageForLicenseConfiguration", {})
  .n("LicenseManagerClient", "ListUsageForLicenseConfigurationCommand")
  .sc(ListUsageForLicenseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsageForLicenseConfigurationRequest;
      output: ListUsageForLicenseConfigurationResponse;
    };
    sdk: {
      input: ListUsageForLicenseConfigurationCommandInput;
      output: ListUsageForLicenseConfigurationCommandOutput;
    };
  };
}
