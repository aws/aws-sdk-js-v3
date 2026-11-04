// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  EnableOrganizationsRootCredentialsManagementRequest,
  EnableOrganizationsRootCredentialsManagementResponse,
} from "../models/models_0";
import { EnableOrganizationsRootCredentialsManagement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableOrganizationsRootCredentialsManagementCommand}.
 */
export interface EnableOrganizationsRootCredentialsManagementCommandInput extends EnableOrganizationsRootCredentialsManagementRequest {}
/**
 * @public
 *
 * The output of {@link EnableOrganizationsRootCredentialsManagementCommand}.
 */
export interface EnableOrganizationsRootCredentialsManagementCommandOutput extends EnableOrganizationsRootCredentialsManagementResponse, __MetadataBearer {}

/**
 * Enables the management of privileged root user credentials across member accounts in your organization. When you enable root credentials management for [centralized root access](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management), the management account and the delegated administrator for IAM can manage root user credentials for member accounts in your organization.
 *
 * Before you enable centralized root access, you must have an account configured with the following settings:
 *
 * - You must manage your Amazon Web Services accounts in [Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html).
 * - Enable trusted access for Identity and Access Management in Organizations. For details, see [IAM and Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-iam.html) in the *Organizations User Guide*.
 *
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
 *
 * The request was rejected because the account making the request is not the management account or delegated administrator account for [centralized root access](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management).
 *
 * @throws {@link CallerIsNotManagementAccountException} (client fault)
 *
 * The request was rejected because the account making the request is not the management account for the organization.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * The request was rejected because no organization is associated with your account.
 *
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *
 * The request was rejected because your organization does not have All features enabled. For more information, see [Available feature sets](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set) in the *Organizations User Guide*.
 *
 * @throws {@link ServiceAccessNotEnabledException} (client fault)
 *
 * The request was rejected because trusted access is not enabled for IAM in Organizations. For details, see IAM and Organizations in the *Organizations User Guide*.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
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
export class EnableOrganizationsRootCredentialsManagementCommand extends command<EnableOrganizationsRootCredentialsManagementCommandInput, EnableOrganizationsRootCredentialsManagementCommandOutput>(
  _ep0,
  _mw0,
  "EnableOrganizationsRootCredentialsManagement",
  EnableOrganizationsRootCredentialsManagement$
) {
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
