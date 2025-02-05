// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { EnableOrganizationsRootSessionsRequest, EnableOrganizationsRootSessionsResponse } from "../models/models_0";
import {
  de_EnableOrganizationsRootSessionsCommand,
  se_EnableOrganizationsRootSessionsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableOrganizationsRootSessionsCommand}.
 */
export interface EnableOrganizationsRootSessionsCommandInput extends EnableOrganizationsRootSessionsRequest {}
/**
 * @public
 *
 * The output of {@link EnableOrganizationsRootSessionsCommand}.
 */
export interface EnableOrganizationsRootSessionsCommandOutput
  extends EnableOrganizationsRootSessionsResponse,
    __MetadataBearer {}

/**
 * <p>Allows the management account or delegated administrator to perform privileged tasks
 *             on member accounts in your organization. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">Centrally manage root access for member accounts</a> in the <i>Identity and Access Management
 *                 User Guide</i>.</p>
 *          <p>Before you enable this feature, you must have an account configured with the following
 *             settings:</p>
 *          <ul>
 *             <li>
 *                <p>You must manage your Amazon Web Services accounts in <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations</a>.</p>
 *             </li>
 *             <li>
 *                <p>Enable trusted access for Identity and Access Management in Organizations. For details, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-ra.html">IAM and Organizations</a> in the <i>Organizations User
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableOrganizationsRootSessionsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableOrganizationsRootSessionsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new EnableOrganizationsRootSessionsCommand(input);
 * const response = await client.send(command);
 * // { // EnableOrganizationsRootSessionsResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   EnabledFeatures: [ // FeaturesListType
 * //     "RootCredentialsManagement" || "RootSessions",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableOrganizationsRootSessionsCommandInput - {@link EnableOrganizationsRootSessionsCommandInput}
 * @returns {@link EnableOrganizationsRootSessionsCommandOutput}
 * @see {@link EnableOrganizationsRootSessionsCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationsRootSessionsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link AccountNotManagementOrDelegatedAdministratorException} (client fault)
 *  <p>The request was rejected because the account making the request is not the management
 *       account or delegated administrator account for <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">centralized root
 *         access</a>.</p>
 *
 * @throws {@link CallerIsNotManagementAccountException} (client fault)
 *  <p>The request was rejected because the account making the request is not the management
 *       account for the organization.</p>
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
 * @example To enable the RootSessions feature in your organization
 * ```javascript
 * // The following command allows the management account or delegated administrator to perform privileged tasks on member accounts in your organization.
 * const input = {};
 * const command = new EnableOrganizationsRootSessionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnabledFeatures": [
 *     "RootCredentialsManagement",
 *     "RootSessions"
 *   ],
 *   "OrganizationId": "o-aa111bb222"
 * }
 * *\/
 * // example id: to-enable-the-rootsessions-feature-in-your-organization-1730908736611
 * ```
 *
 */
export class EnableOrganizationsRootSessionsCommand extends $Command
  .classBuilder<
    EnableOrganizationsRootSessionsCommandInput,
    EnableOrganizationsRootSessionsCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "EnableOrganizationsRootSessions", {})
  .n("IAMClient", "EnableOrganizationsRootSessionsCommand")
  .f(void 0, void 0)
  .ser(se_EnableOrganizationsRootSessionsCommand)
  .de(de_EnableOrganizationsRootSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: EnableOrganizationsRootSessionsResponse;
    };
    sdk: {
      input: EnableOrganizationsRootSessionsCommandInput;
      output: EnableOrganizationsRootSessionsCommandOutput;
    };
  };
}
