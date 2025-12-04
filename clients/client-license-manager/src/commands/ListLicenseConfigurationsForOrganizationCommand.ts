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
  ListLicenseConfigurationsForOrganizationRequest,
  ListLicenseConfigurationsForOrganizationResponse,
} from "../models/models_0";
import { ListLicenseConfigurationsForOrganization } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseConfigurationsForOrganizationCommand}.
 */
export interface ListLicenseConfigurationsForOrganizationCommandInput
  extends ListLicenseConfigurationsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseConfigurationsForOrganizationCommand}.
 */
export interface ListLicenseConfigurationsForOrganizationCommandOutput
  extends ListLicenseConfigurationsForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Lists license configurations for an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConfigurationsForOrganizationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConfigurationsForOrganizationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseConfigurationsForOrganizationRequest
 *   LicenseConfigurationArns: [ // StringList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new ListLicenseConfigurationsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseConfigurationsForOrganizationResponse
 * //   LicenseConfigurations: [ // LicenseConfigurations
 * //     { // LicenseConfiguration
 * //       LicenseConfigurationId: "STRING_VALUE",
 * //       LicenseConfigurationArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LicenseCountingType: "vCPU" || "Instance" || "Core" || "Socket",
 * //       LicenseRules: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       LicenseCount: Number("long"),
 * //       LicenseCountHardLimit: true || false,
 * //       DisassociateWhenNotFound: true || false,
 * //       ConsumedLicenses: Number("long"),
 * //       Status: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       ConsumedLicenseSummaryList: [ // ConsumedLicenseSummaryList
 * //         { // ConsumedLicenseSummary
 * //           ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //           ConsumedLicenses: Number("long"),
 * //         },
 * //       ],
 * //       ManagedResourceSummaryList: [ // ManagedResourceSummaryList
 * //         { // ManagedResourceSummary
 * //           ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //           AssociationCount: Number("long"),
 * //         },
 * //       ],
 * //       ProductInformationList: [ // ProductInformationList
 * //         { // ProductInformation
 * //           ResourceType: "STRING_VALUE", // required
 * //           ProductInformationFilterList: [ // ProductInformationFilterList // required
 * //             { // ProductInformationFilter
 * //               ProductInformationFilterName: "STRING_VALUE", // required
 * //               ProductInformationFilterValue: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               ProductInformationFilterComparator: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       AutomatedDiscoveryInformation: { // AutomatedDiscoveryInformation
 * //         LastRunTime: new Date("TIMESTAMP"),
 * //       },
 * //       LicenseExpiry: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseConfigurationsForOrganizationCommandInput - {@link ListLicenseConfigurationsForOrganizationCommandInput}
 * @returns {@link ListLicenseConfigurationsForOrganizationCommandOutput}
 * @see {@link ListLicenseConfigurationsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListLicenseConfigurationsForOrganizationCommandOutput} for command's `response` shape.
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
export class ListLicenseConfigurationsForOrganizationCommand extends $Command
  .classBuilder<
    ListLicenseConfigurationsForOrganizationCommandInput,
    ListLicenseConfigurationsForOrganizationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListLicenseConfigurationsForOrganization", {})
  .n("LicenseManagerClient", "ListLicenseConfigurationsForOrganizationCommand")
  .sc(ListLicenseConfigurationsForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseConfigurationsForOrganizationRequest;
      output: ListLicenseConfigurationsForOrganizationResponse;
    };
    sdk: {
      input: ListLicenseConfigurationsForOrganizationCommandInput;
      output: ListLicenseConfigurationsForOrganizationCommandOutput;
    };
  };
}
