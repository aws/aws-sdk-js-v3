// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeregisterOrganizationDelegatedAdminRequest,
  DeregisterOrganizationDelegatedAdminResponse,
} from "../models/models_0";
import {
  de_DeregisterOrganizationDelegatedAdminCommand,
  se_DeregisterOrganizationDelegatedAdminCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeregisterOrganizationDelegatedAdminCommandOutput
  extends DeregisterOrganizationDelegatedAdminResponse,
    __MetadataBearer {}

/**
 * <p>Removes CloudTrail delegated administrator permissions from a member account in
 *          an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeregisterOrganizationDelegatedAdminCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeregisterOrganizationDelegatedAdminCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>This exception is thrown when the specified account is not found or not part of an
 *          organization.</p>
 *
 * @throws {@link AccountNotRegisteredException} (client fault)
 *  <p>This exception is thrown when the specified account is not registered as the CloudTrail delegated administrator.</p>
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
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
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
 * @public
 */
export class DeregisterOrganizationDelegatedAdminCommand extends $Command
  .classBuilder<
    DeregisterOrganizationDelegatedAdminCommandInput,
    DeregisterOrganizationDelegatedAdminCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "DeregisterOrganizationDelegatedAdmin", {})
  .n("CloudTrailClient", "DeregisterOrganizationDelegatedAdminCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterOrganizationDelegatedAdminCommand)
  .de(de_DeregisterOrganizationDelegatedAdminCommand)
  .build() {
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
