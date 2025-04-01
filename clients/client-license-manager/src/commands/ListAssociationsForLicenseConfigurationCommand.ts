// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
} from "../models/models_0";
import {
  de_ListAssociationsForLicenseConfigurationCommand,
  se_ListAssociationsForLicenseConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociationsForLicenseConfigurationCommand}.
 */
export interface ListAssociationsForLicenseConfigurationCommandInput
  extends ListAssociationsForLicenseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociationsForLicenseConfigurationCommand}.
 */
export interface ListAssociationsForLicenseConfigurationCommandOutput
  extends ListAssociationsForLicenseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resource associations for the specified license configuration.</p>
 *          <p>Resource associations need not consume licenses from a license configuration.
 *          For example, an AMI or a stopped instance might not consume a license (depending on
 *          the license rules).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListAssociationsForLicenseConfigurationRequest
 *   LicenseConfigurationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociationsForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociationsForLicenseConfigurationResponse
 * //   LicenseConfigurationAssociations: [ // LicenseConfigurationAssociations
 * //     { // LicenseConfigurationAssociation
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "EC2_INSTANCE" || "EC2_HOST" || "EC2_AMI" || "RDS" || "SYSTEMS_MANAGER_MANAGED_INSTANCE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       AssociationTime: new Date("TIMESTAMP"),
 * //       AmiAssociationScope: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociationsForLicenseConfigurationCommandInput - {@link ListAssociationsForLicenseConfigurationCommandInput}
 * @returns {@link ListAssociationsForLicenseConfigurationCommandOutput}
 * @see {@link ListAssociationsForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsForLicenseConfigurationCommandOutput} for command's `response` shape.
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
export class ListAssociationsForLicenseConfigurationCommand extends $Command
  .classBuilder<
    ListAssociationsForLicenseConfigurationCommandInput,
    ListAssociationsForLicenseConfigurationCommandOutput,
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
  .s("AWSLicenseManager", "ListAssociationsForLicenseConfiguration", {})
  .n("LicenseManagerClient", "ListAssociationsForLicenseConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociationsForLicenseConfigurationCommand)
  .de(de_ListAssociationsForLicenseConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociationsForLicenseConfigurationRequest;
      output: ListAssociationsForLicenseConfigurationResponse;
    };
    sdk: {
      input: ListAssociationsForLicenseConfigurationCommandInput;
      output: ListAssociationsForLicenseConfigurationCommandOutput;
    };
  };
}
