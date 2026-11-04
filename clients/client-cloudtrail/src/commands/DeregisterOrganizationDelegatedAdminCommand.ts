// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeregisterOrganizationDelegatedAdminRequest,
  DeregisterOrganizationDelegatedAdminResponse,
} from "../models/models_0";
import { DeregisterOrganizationDelegatedAdmin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterOrganizationDelegatedAdminCommand}.
 */
export interface DeregisterOrganizationDelegatedAdminCommandInput extends DeregisterOrganizationDelegatedAdminRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterOrganizationDelegatedAdminCommand}.
 */
export interface DeregisterOrganizationDelegatedAdminCommandOutput extends DeregisterOrganizationDelegatedAdminResponse, __MetadataBearer {}

/**
 * Removes CloudTrail delegated administrator permissions from a member account in an organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeregisterOrganizationDelegatedAdminCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeregisterOrganizationDelegatedAdminCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // DeregisterOrganizationDelegatedAdminRequest
 *   DelegatedAdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterOrganizationDelegatedAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterOrganizationDelegatedAdminCommandInput - {@link DeregisterOrganizationDelegatedAdminCommandInput}
 * @returns {@link DeregisterOrganizationDelegatedAdminCommandOutput}
 * @see {@link DeregisterOrganizationDelegatedAdminCommandInput} for command's `input` shape.
 * @see {@link DeregisterOrganizationDelegatedAdminCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *
 * This exception is thrown when the specified account is not found or not part of an organization.
 *
 * @throws {@link AccountNotRegisteredException} (client fault)
 *
 * This exception is thrown when the specified account is not registered as the CloudTrail delegated administrator.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *
 * This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see [How to enable or disable trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access) in the *Organizations User Guide* and [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) in the *CloudTrail User Guide*.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *
 * This exception is thrown when the IAM identity that is used to create the organization resource lacks one or more required permissions for creating an organization resource in a required service.
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
export class DeregisterOrganizationDelegatedAdminCommand extends command<DeregisterOrganizationDelegatedAdminCommandInput, DeregisterOrganizationDelegatedAdminCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterOrganizationDelegatedAdmin",
  DeregisterOrganizationDelegatedAdmin$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterOrganizationDelegatedAdminRequest;
      output: {};
    };
    sdk: {
      input: DeregisterOrganizationDelegatedAdminCommandInput;
      output: DeregisterOrganizationDelegatedAdminCommandOutput;
    };
  };
}
