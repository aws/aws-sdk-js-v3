// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOrganizationsFeaturesRequest, ListOrganizationsFeaturesResponse } from "../models/models_0";
import { ListOrganizationsFeatures$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the centralized root access features enabled for your organization. For more information, see [Centrally manage root access for member accounts](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOrganizationsFeaturesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOrganizationsFeaturesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
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
 *
 * The request was rejected because the account making the request is not the management account or delegated administrator account for [centralized root access](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user-access-management).
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
 * @example To list the centralized root access features enabled for your organization
 * ```javascript
 * // he following command lists the centralized root access features enabled for your organization.
 * const input = { /* empty *\/ };
 * const command = new ListOrganizationsFeaturesCommand(input);
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
export class ListOrganizationsFeaturesCommand extends command<ListOrganizationsFeaturesCommandInput, ListOrganizationsFeaturesCommandOutput>(
  _ep0,
  _mw0,
  "ListOrganizationsFeatures",
  ListOrganizationsFeatures$
) {
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
