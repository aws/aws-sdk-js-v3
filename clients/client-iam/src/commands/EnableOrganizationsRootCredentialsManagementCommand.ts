// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  EnableOrganizationsRootCredentialsManagementRequest,
  EnableOrganizationsRootCredentialsManagementResponse,
} from "../models/models_0";
import {
  de_EnableOrganizationsRootCredentialsManagementCommand,
  se_EnableOrganizationsRootCredentialsManagementCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableOrganizationsRootCredentialsManagementCommand}.
 */
export interface EnableOrganizationsRootCredentialsManagementCommandInput
  extends EnableOrganizationsRootCredentialsManagementRequest {}
/**
 * @public
 *
 * The output of {@link EnableOrganizationsRootCredentialsManagementCommand}.
 */
export interface EnableOrganizationsRootCredentialsManagementCommandOutput
  extends EnableOrganizationsRootCredentialsManagementResponse,
    __MetadataBearer {}

/**
 * <p>Enables the management of privileged root user credentials across member accounts in your
 *             organization. When you enable root credentials management for <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management">centralized root access</a>, the management account and the delegated
 *             administrator for IAM can manage root user credentials for member accounts in your
 *             organization.</p>
 *          <p>Before you enable centralized root access, you must have an account configured with
 *             the following settings:</p>
 *          <ul>
 *             <li>
 *                <p>You must manage your Amazon Web Services accounts in <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations</a>.</p>
 *             </li>
 *             <li>
 *                <p>Enable trusted access for Identity and Access Management in Organizations. For details, see
 *                         <a href="https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-iam.html">IAM and Organizations</a> in the <i>Organizations User
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableOrganizationsRootCredentialsManagementCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableOrganizationsRootCredentialsManagementCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new EnableOrganizationsRootCredentialsManagementCommand(input);
 * const response = await client.send(command);
 * // { // EnableOrganizationsRootCredentialsManagementResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   EnabledFeatures: [ // FeaturesListType
 * //     "RootCredentialsManagement" || "RootSessions",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableOrganizationsRootCredentialsManagementCommandInput - {@link EnableOrganizationsRootCredentialsManagementCommandInput}
 * @returns {@link EnableOrganizationsRootCredentialsManagementCommandOutput}
 * @see {@link EnableOrganizationsRootCredentialsManagementCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationsRootCredentialsManagementCommandOutput} for command's `response` shape.
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
 *       Guide</i>.</p>
 *
 * @throws {@link ServiceAccessNotEnabledException} (client fault)
 *  <p>The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the <i>Organizations User Guide</i>.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To enable the RootCredentialsManagement feature in your organization
 * ```javascript
 * // The following command enables the management of privileged root user credentials across member accounts in your organization.
 * const input = { /* empty *\/ };
 * const command = new EnableOrganizationsRootCredentialsManagementCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EnabledFeatures: [
 *     "RootCredentialsManagement"
 *   ],
 *   OrganizationId: "o-aa111bb222"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class EnableOrganizationsRootCredentialsManagementCommand extends $Command
  .classBuilder<
    EnableOrganizationsRootCredentialsManagementCommandInput,
    EnableOrganizationsRootCredentialsManagementCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "EnableOrganizationsRootCredentialsManagement", {})
  .n("IAMClient", "EnableOrganizationsRootCredentialsManagementCommand")
  .f(void 0, void 0)
  .ser(se_EnableOrganizationsRootCredentialsManagementCommand)
  .de(de_EnableOrganizationsRootCredentialsManagementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: EnableOrganizationsRootCredentialsManagementResponse;
    };
    sdk: {
      input: EnableOrganizationsRootCredentialsManagementCommandInput;
      output: EnableOrganizationsRootCredentialsManagementCommandOutput;
    };
  };
}
