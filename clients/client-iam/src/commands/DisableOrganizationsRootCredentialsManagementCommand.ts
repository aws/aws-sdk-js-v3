// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type {
  DisableOrganizationsRootCredentialsManagementRequest,
  DisableOrganizationsRootCredentialsManagementResponse,
} from "../models/models_0";
import { DisableOrganizationsRootCredentialsManagement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOrganizationsRootCredentialsManagementCommand}.
 */
export interface DisableOrganizationsRootCredentialsManagementCommandInput
  extends DisableOrganizationsRootCredentialsManagementRequest {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationsRootCredentialsManagementCommand}.
 */
export interface DisableOrganizationsRootCredentialsManagementCommandOutput
  extends DisableOrganizationsRootCredentialsManagementResponse,
    __MetadataBearer {}

/**
 * <p>Disables the management of privileged root user credentials across member accounts in
 *             your organization. When you disable this feature, the management account and the
 *             delegated administrator for IAM can no longer manage root user credentials for member
 *             accounts in your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DisableOrganizationsRootCredentialsManagementCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DisableOrganizationsRootCredentialsManagementCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new DisableOrganizationsRootCredentialsManagementCommand(input);
 * const response = await client.send(command);
 * // { // DisableOrganizationsRootCredentialsManagementResponse
 * //   OrganizationId: "STRING_VALUE",
 * //   EnabledFeatures: [ // FeaturesListType
 * //     "RootCredentialsManagement" || "RootSessions",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableOrganizationsRootCredentialsManagementCommandInput - {@link DisableOrganizationsRootCredentialsManagementCommandInput}
 * @returns {@link DisableOrganizationsRootCredentialsManagementCommandOutput}
 * @see {@link DisableOrganizationsRootCredentialsManagementCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationsRootCredentialsManagementCommandOutput} for command's `response` shape.
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
 *       Guide</i>.</p>
 *
 * @throws {@link ServiceAccessNotEnabledException} (client fault)
 *  <p>The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the <i>Organizations User Guide</i>.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To disable the RootCredentialsManagement feature in your organization
 * ```javascript
 * // The following command disables the management of privileged root user credentials across member accounts in your organization.
 * const input = { /* empty *\/ };
 * const command = new DisableOrganizationsRootCredentialsManagementCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EnabledFeatures: [
 *     "RootSessions"
 *   ],
 *   OrganizationId: "o-aa111bb222"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisableOrganizationsRootCredentialsManagementCommand extends $Command
  .classBuilder<
    DisableOrganizationsRootCredentialsManagementCommandInput,
    DisableOrganizationsRootCredentialsManagementCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DisableOrganizationsRootCredentialsManagement", {})
  .n("IAMClient", "DisableOrganizationsRootCredentialsManagementCommand")
  .sc(DisableOrganizationsRootCredentialsManagement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DisableOrganizationsRootCredentialsManagementResponse;
    };
    sdk: {
      input: DisableOrganizationsRootCredentialsManagementCommandInput;
      output: DisableOrganizationsRootCredentialsManagementCommandOutput;
    };
  };
}
