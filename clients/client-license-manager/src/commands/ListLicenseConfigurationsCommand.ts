// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseConfigurationsRequest, ListLicenseConfigurationsResponse } from "../models/models_0";
import { de_ListLicenseConfigurationsCommand, se_ListLicenseConfigurationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseConfigurationsCommand}.
 */
export interface ListLicenseConfigurationsCommandInput extends ListLicenseConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseConfigurationsCommand}.
 */
export interface ListLicenseConfigurationsCommandOutput extends ListLicenseConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists the license configurations for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConfigurationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConfigurationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseConfigurationsRequest
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
 * const command = new ListLicenseConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseConfigurationsResponse
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseConfigurationsCommandInput - {@link ListLicenseConfigurationsCommandInput}
 * @returns {@link ListLicenseConfigurationsCommandOutput}
 * @see {@link ListLicenseConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseConfigurationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListLicenseConfigurationsCommand extends $Command
  .classBuilder<
    ListLicenseConfigurationsCommandInput,
    ListLicenseConfigurationsCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "ListLicenseConfigurations", {})
  .n("LicenseManagerClient", "ListLicenseConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListLicenseConfigurationsCommand)
  .de(de_ListLicenseConfigurationsCommand)
  .build() {}
