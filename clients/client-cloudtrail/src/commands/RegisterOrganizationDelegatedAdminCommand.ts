// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterOrganizationDelegatedAdminRequest,
  RegisterOrganizationDelegatedAdminResponse,
} from "../models/models_0";
import { RegisterOrganizationDelegatedAdmin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterOrganizationDelegatedAdminCommand}.
 */
export interface RegisterOrganizationDelegatedAdminCommandInput extends RegisterOrganizationDelegatedAdminRequest {}
/**
 * @public
 *
 * The output of {@link RegisterOrganizationDelegatedAdminCommand}.
 */
export interface RegisterOrganizationDelegatedAdminCommandOutput extends RegisterOrganizationDelegatedAdminResponse, __MetadataBearer {}

/**
 * Registers an organization’s member account as the CloudTrail [delegated administrator](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-delegated-administrator.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, RegisterOrganizationDelegatedAdminCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, RegisterOrganizationDelegatedAdminCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // RegisterOrganizationDelegatedAdminRequest
 *   MemberAccountId: "STRING_VALUE", // required
 * };
 * const command = new RegisterOrganizationDelegatedAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterOrganizationDelegatedAdminCommandInput - {@link RegisterOrganizationDelegatedAdminCommandInput}
 * @returns {@link RegisterOrganizationDelegatedAdminCommandOutput}
 * @see {@link RegisterOrganizationDelegatedAdminCommandInput} for command's `input` shape.
 * @see {@link RegisterOrganizationDelegatedAdminCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *
 * This exception is thrown when the specified account is not found or not part of an organization.
 *
 * @throws {@link AccountRegisteredException} (client fault)
 *
 * This exception is thrown when the account is already registered as the CloudTrail delegated administrator.
 *
 * @throws {@link CannotDelegateManagementAccountException} (client fault)
 *
 * This exception is thrown when the management account of an organization is registered as the CloudTrail delegated administrator.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *
 * This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see [How to enable or disable trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access) in the *Organizations User Guide* and [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) in the *CloudTrail User Guide*.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
 *
 * @throws {@link DelegatedAdminAccountLimitExceededException} (client fault)
 *
 * This exception is thrown when the maximum number of CloudTrail delegated administrators is reached.
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *
 * This exception is thrown when the IAM identity that is used to create the organization resource lacks one or more required permissions for creating an organization resource in a required service.
 *
 * @throws {@link InsufficientIAMAccessPermissionException} (client fault)
 *
 * The task can't be completed because you are signed in with an account that lacks permissions to view or create a service-linked role. Sign in with an account that has the required permissions and then try again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link NotOrganizationManagementAccountException} (client fault)
 *
 * This exception is thrown when the account making the request is not the organization's management account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *
 * This exception is thrown when Organizations is not configured to support all features. All features must be enabled in Organizations to support creating an organization trail or event data store.
 *
 * @throws {@link OrganizationsNotInUseException} (client fault)
 *
 * This exception is thrown when the request is made from an Amazon Web Services account that is not a member of an organization. To make this request, sign in using the credentials of an account that belongs to an organization.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class RegisterOrganizationDelegatedAdminCommand extends command<RegisterOrganizationDelegatedAdminCommandInput, RegisterOrganizationDelegatedAdminCommandOutput>(
  _ep0,
  _mw0,
  "RegisterOrganizationDelegatedAdmin",
  RegisterOrganizationDelegatedAdmin$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOrganizationDelegatedAdminRequest;
      output: {};
    };
    sdk: {
      input: RegisterOrganizationDelegatedAdminCommandInput;
      output: RegisterOrganizationDelegatedAdminCommandOutput;
    };
  };
}
