// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterOrganizationDelegatedAdminRequest,
  RegisterOrganizationDelegatedAdminResponse,
} from "../models/models_0";
import { RegisterOrganizationDelegatedAdmin } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface RegisterOrganizationDelegatedAdminCommandOutput
  extends RegisterOrganizationDelegatedAdminResponse,
    __MetadataBearer {}

/**
 * <p>Registers an organization’s member account as the CloudTrail <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-delegated-administrator.html">delegated administrator</a>.</p>
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
 *  <p>This exception is thrown when the specified account is not found or not part of an
 *          organization.</p>
 *
 * @throws {@link AccountRegisteredException} (client fault)
 *  <p>This exception is thrown when the account is already registered as the CloudTrail
 *          delegated administrator.</p>
 *
 * @throws {@link CannotDelegateManagementAccountException} (client fault)
 *  <p>This exception is thrown when the management account of an organization is registered as
 *          the CloudTrail delegated administrator.</p>
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access">How to enable or disable trusted access</a> in the <i>Organizations User Guide</i> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> in the <i>CloudTrail User Guide</i>.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 *
 * @throws {@link DelegatedAdminAccountLimitExceededException} (client fault)
 *  <p>This exception is thrown when the maximum number of CloudTrail delegated
 *          administrators is reached.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 *
 * @throws {@link InsufficientIAMAccessPermissionException} (client fault)
 *  <p>The task can't be completed because you are signed in with an account that lacks permissions to view or create a service-linked role. Sign in with an account that has the required permissions and then try again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NotOrganizationManagementAccountException} (client fault)
 *  <p> This exception is thrown when the account making the request is not the organization's
 *          management account. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *  <p>This exception is thrown when Organizations is not configured to support all
 *          features. All features must be enabled in Organizations to support creating an
 *          organization trail or event data store.</p>
 *
 * @throws {@link OrganizationsNotInUseException} (client fault)
 *  <p>This exception is thrown when the request is made from an Amazon Web Services account
 *          that is not a member of an organization. To make this request, sign in using the
 *          credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class RegisterOrganizationDelegatedAdminCommand extends $Command
  .classBuilder<
    RegisterOrganizationDelegatedAdminCommandInput,
    RegisterOrganizationDelegatedAdminCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "RegisterOrganizationDelegatedAdmin", {})
  .n("CloudTrailClient", "RegisterOrganizationDelegatedAdminCommand")
  .sc(RegisterOrganizationDelegatedAdmin)
  .build() {
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
