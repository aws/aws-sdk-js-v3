// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventDataStoreRequest, DeleteEventDataStoreResponse } from "../models/models_0";
import { DeleteEventDataStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Disables the event data store specified by `EventDataStore`, which accepts an event data store ARN. After you run `DeleteEventDataStore`, the event data store enters a `PENDING_DELETION` state, and is automatically deleted after a wait period of seven days. `TerminationProtectionEnabled` must be set to `False` on the event data store and the `FederationStatus` must be `DISABLED`. You cannot delete an event data store if `TerminationProtectionEnabled` is `True` or the `FederationStatus` is `ENABLED`.
 *
 * After you run `DeleteEventDataStore` on an event data store, you cannot run `ListQueries`, `DescribeQuery`, or `GetQueryResults` on queries that are using an event data store in a `PENDING_DELETION` state. An event data store in the `PENDING_DELETION` state does not incur costs.
 *
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
 *
 * This exception is thrown when the specified event data store cannot yet be deleted because it is in use by a channel.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreFederationEnabledException} (client fault)
 *
 * You cannot delete the event data store because Lake query federation is enabled. To delete the event data store, run the `DisableFederation` operation to disable Lake query federation on the event data store.
 *
 * @throws {@link EventDataStoreHasOngoingImportException} (client fault)
 *
 * This exception is thrown when you try to update or delete an event data store that currently has an import in progress.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
 *
 * @throws {@link EventDataStoreTerminationProtectedException} (client fault)
 *
 * The event data store cannot be deleted because termination protection is enabled for it.
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *
 * The event data store is inactive.
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *
 * This exception is thrown when the IAM identity that is used to create the organization resource lacks one or more required permissions for creating an organization resource in a required service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *
 * This exception is thrown when the Amazon Web Services account making the request to create or update an organization trail or event data store is not the management account for an organization in Organizations. For more information, see [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) or [Organization event data stores](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html).
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
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
export class DeleteEventDataStoreCommand extends command<DeleteEventDataStoreCommandInput, DeleteEventDataStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventDataStore",
  DeleteEventDataStore$
) {
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
