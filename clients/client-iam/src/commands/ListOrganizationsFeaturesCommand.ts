// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListOrganizationsFeaturesRequest, ListOrganizationsFeaturesResponse } from "../models/models_0";
import { de_ListOrganizationsFeaturesCommand, se_ListOrganizationsFeaturesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationsFeaturesCommand}.
 */
export interface ListOrganizationsFeaturesCommandInput extends ListOrganizationsFeaturesRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationsFeaturesCommand}.
 */
export interface ListOrganizationsFeaturesCommandOutput extends ListOrganizationsFeaturesResponse, __MetadataBearer {}

/**
 * <p>Lists the centralized root access features enabled for your organization. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">Centrally manage root access for member accounts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOrganizationsFeaturesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOrganizationsFeaturesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new ListOrganizationsFeaturesCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationsFeaturesResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   EnabledFeatures: [ // FeaturesListType
 * //     "RootCredentialsManagement" || "RootSessions",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOrganizationsFeaturesCommandInput - {@link ListOrganizationsFeaturesCommandInput}
 * @returns {@link ListOrganizationsFeaturesCommandOutput}
 * @see {@link ListOrganizationsFeaturesCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationsFeaturesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link AccountNotManagementOrDelegatedAdministratorException} (client fault)
 *  <p>The request was rejected because the account making the request is not the management
 *       account or delegated administrator account for <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">centralized root
 *         access</a>.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>The request was rejected because no organization is associated with your account.</p>
 *
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *  <p>The request was rejected because your organization does not have All features enabled. For
 *       more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set">Available feature sets</a> in the <i>Organizations User
 *           Guide</i>.</p>
 *
 * @throws {@link ServiceAccessNotEnabledException} (client fault)
 *  <p>The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the <i>Organizations User Guide</i>.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To list the centralized root access features enabled for your organization
 * ```javascript
 * // he following command lists the centralized root access features enabled for your organization.
 * const input = {};
 * const command = new ListOrganizationsFeaturesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnabledFeatures": [
 *     "RootCredentialsManagement"
 *   ],
 *   "OrganizationId": "o-aa111bb222"
 * }
 * *\/
 * // example id: to-list-the-centralized-root-access-features-enabled-for-your-organization-1730908832557
 * ```
 *
 */
export class ListOrganizationsFeaturesCommand extends $Command
  .classBuilder<
    ListOrganizationsFeaturesCommandInput,
    ListOrganizationsFeaturesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListOrganizationsFeatures", {})
  .n("IAMClient", "ListOrganizationsFeaturesCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationsFeaturesCommand)
  .de(de_ListOrganizationsFeaturesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListOrganizationsFeaturesResponse;
    };
    sdk: {
      input: ListOrganizationsFeaturesCommandInput;
      output: ListOrganizationsFeaturesCommandOutput;
    };
  };
}
