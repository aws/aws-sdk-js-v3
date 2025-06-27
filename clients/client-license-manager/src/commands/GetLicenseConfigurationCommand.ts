// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseConfigurationRequest, GetLicenseConfigurationResponse } from "../models/models_0";
import { de_GetLicenseConfigurationCommand, se_GetLicenseConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLicenseConfigurationCommand}.
 */
export interface GetLicenseConfigurationCommandInput extends GetLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseConfigurationCommand}.
 */
export interface GetLicenseConfigurationCommandOutput extends GetLicenseConfigurationResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information about the specified license configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseConfigurationRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseConfigurationResponse
 * //   LicenseConfigurationId: "STRING_VALUE",
 * //   LicenseConfigurationArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LicenseCountingType: "vCPU" || "Instance" || "Core" || "Socket",
 * //   LicenseRules: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   LicenseCount: Number("long"),
 * //   LicenseCountHardLimit: true || false,
 * //   ConsumedLicenses: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   ConsumedLicenseSummaryList: [ // ConsumedLicenseSummaryList
 * //     { // ConsumedLicenseSummary
 * //       ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //       ConsumedLicenses: Number("long"),
 * //     },
 * //   ],
 * //   ManagedResourceSummaryList: [ // ManagedResourceSummaryList
 * //     { // ManagedResourceSummary
 * //       ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //       AssociationCount: Number("long"),
 * //     },
 * //   ],
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProductInformationList: [ // ProductInformationList
 * //     { // ProductInformation
 * //       ResourceType: "STRING_VALUE", // required
 * //       ProductInformationFilterList: [ // ProductInformationFilterList // required
 * //         { // ProductInformationFilter
 * //           ProductInformationFilterName: "STRING_VALUE", // required
 * //           ProductInformationFilterValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //           ProductInformationFilterComparator: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   AutomatedDiscoveryInformation: { // AutomatedDiscoveryInformation
 * //     LastRunTime: new Date("TIMESTAMP"),
 * //   },
 * //   DisassociateWhenNotFound: true || false,
 * // };
 *
 * ```
 *
 * @param GetLicenseConfigurationCommandInput - {@link GetLicenseConfigurationCommandInput}
 * @returns {@link GetLicenseConfigurationCommandOutput}
 * @see {@link GetLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
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
export class GetLicenseConfigurationCommand extends $Command
  .classBuilder<
    GetLicenseConfigurationCommandInput,
    GetLicenseConfigurationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "GetLicenseConfiguration", {})
  .n("LicenseManagerClient", "GetLicenseConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetLicenseConfigurationCommand)
  .de(de_GetLicenseConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseConfigurationRequest;
      output: GetLicenseConfigurationResponse;
    };
    sdk: {
      input: GetLicenseConfigurationCommandInput;
      output: GetLicenseConfigurationCommandOutput;
    };
  };
}
