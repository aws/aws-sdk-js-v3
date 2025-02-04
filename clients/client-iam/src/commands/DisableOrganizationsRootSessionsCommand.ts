// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DisableOrganizationsRootSessionsRequest, DisableOrganizationsRootSessionsResponse } from "../models/models_0";
import {
  de_DisableOrganizationsRootSessionsCommand,
  se_DisableOrganizationsRootSessionsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOrganizationsRootSessionsCommand}.
 */
export interface DisableOrganizationsRootSessionsCommandInput extends DisableOrganizationsRootSessionsRequest {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationsRootSessionsCommand}.
 */
export interface DisableOrganizationsRootSessionsCommandOutput
  extends DisableOrganizationsRootSessionsResponse,
    __MetadataBearer {}

/**
 * <p>Disables root user sessions for privileged tasks across member accounts in your
 *             organization. When you disable this feature, the management account and the delegated
 *             administrator for IAM can no longer perform privileged tasks on member accounts in
 *             your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DisableOrganizationsRootSessionsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DisableOrganizationsRootSessionsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new DisableOrganizationsRootSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DisableOrganizationsRootSessionsResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   EnabledFeatures: [ // FeaturesListType
 * //     "RootCredentialsManagement" || "RootSessions",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableOrganizationsRootSessionsCommandInput - {@link DisableOrganizationsRootSessionsCommandInput}
 * @returns {@link DisableOrganizationsRootSessionsCommandOutput}
 * @see {@link DisableOrganizationsRootSessionsCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationsRootSessionsCommandOutput} for command's `response` shape.
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
 * @example To disable the RootSessions feature in your organization
 * ```javascript
 * // The following command disables root user sessions for privileged tasks across member accounts in your organization.
 * const input = {};
 * const command = new DisableOrganizationsRootSessionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnabledFeatures": [
 *     "RootCredentialsManagement"
 *   ],
 *   "OrganizationId": "o-aa111bb222"
 * }
 * *\/
 * // example id: to-disable-the-rootsessions-feature-in-your-organization-1730908495962
 * ```
 *
 */
export class DisableOrganizationsRootSessionsCommand extends $Command
  .classBuilder<
    DisableOrganizationsRootSessionsCommandInput,
    DisableOrganizationsRootSessionsCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DisableOrganizationsRootSessions", {})
  .n("IAMClient", "DisableOrganizationsRootSessionsCommand")
  .f(void 0, void 0)
  .ser(se_DisableOrganizationsRootSessionsCommand)
  .de(de_DisableOrganizationsRootSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DisableOrganizationsRootSessionsResponse;
    };
    sdk: {
      input: DisableOrganizationsRootSessionsCommandInput;
      output: DisableOrganizationsRootSessionsCommandOutput;
    };
  };
}
