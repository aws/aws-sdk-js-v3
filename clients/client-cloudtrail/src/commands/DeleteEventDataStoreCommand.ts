// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEventDataStoreRequest, DeleteEventDataStoreResponse } from "../models/models_0";
import { DeleteEventDataStore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventDataStoreCommand}.
 */
export interface DeleteEventDataStoreCommandInput extends DeleteEventDataStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventDataStoreCommand}.
 */
export interface DeleteEventDataStoreCommandOutput extends DeleteEventDataStoreResponse, __MetadataBearer {}

/**
 * <p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an
 *          event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store
 *          enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait
 *          period of seven days. <code>TerminationProtectionEnabled</code> must be set to
 *             <code>False</code> on the event data store and the <code>FederationStatus</code> must be <code>DISABLED</code>.
 *          You cannot delete an event data store if <code>TerminationProtectionEnabled</code>
 *          is <code>True</code> or the <code>FederationStatus</code> is <code>ENABLED</code>.</p>
 *          <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run
 *             <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on
 *          queries that are using an event data store in a <code>PENDING_DELETION</code> state. An
 *          event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeleteEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeleteEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // DeleteEventDataStoreRequest
 *   EventDataStore: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventDataStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventDataStoreCommandInput - {@link DeleteEventDataStoreCommandInput}
 * @returns {@link DeleteEventDataStoreCommandOutput}
 * @see {@link DeleteEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ChannelExistsForEDSException} (client fault)
 *  <p>This exception is thrown when the specified event data store cannot yet be deleted because it
 *          is in use by a channel.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreFederationEnabledException} (client fault)
 *  <p>
 *         You cannot delete the event data store because Lake query federation is enabled. To delete the event data store, run the <code>DisableFederation</code> operation to
 *          disable Lake query federation on the event data store.
 *       </p>
 *
 * @throws {@link EventDataStoreHasOngoingImportException} (client fault)
 *  <p> This exception is thrown when you try to update or delete an event data store that
 *          currently has an import in progress. </p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link EventDataStoreTerminationProtectedException} (client fault)
 *  <p>The event data store cannot be deleted because termination protection is enabled for
 *          it.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *  <p>This exception is thrown when the Amazon Web Services account making the request to
 *          create or update an organization trail or event data store is not the management account
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html">Organization event data stores</a>.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
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
export class DeleteEventDataStoreCommand extends $Command
  .classBuilder<
    DeleteEventDataStoreCommandInput,
    DeleteEventDataStoreCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "DeleteEventDataStore", {})
  .n("CloudTrailClient", "DeleteEventDataStoreCommand")
  .sc(DeleteEventDataStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventDataStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventDataStoreCommandInput;
      output: DeleteEventDataStoreCommandOutput;
    };
  };
}
