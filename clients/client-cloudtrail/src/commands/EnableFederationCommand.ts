// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableFederationRequest, EnableFederationResponse } from "../models/models_0";
import { EnableFederation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableFederationCommand}.
 */
export interface EnableFederationCommandInput extends EnableFederationRequest {}
/**
 * @public
 *
 * The output of {@link EnableFederationCommand}.
 */
export interface EnableFederationCommandOutput extends EnableFederationResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Enables Lake query federation on the specified event data store. Federating an event data store lets you view the metadata associated with the event data store in the Glue [Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/components-overview.html#data-catalog-intro) and run SQL queries against your event data using Amazon Athena. The table metadata stored in the Glue Data Catalog lets the Athena query engine know how to find, read, and process the data that you want to query.
 *
 * When you enable Lake query federation, CloudTrail creates a managed database named `aws:cloudtrail` (if the database doesn't already exist) and a managed federated table in the Glue Data Catalog. The event data store ID is used for the table name. CloudTrail registers the role ARN and event data store in [Lake Formation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation-lake-formation.html), the service responsible for allowing fine-grained access control of the federated resources in the Glue Data Catalog.
 *
 * For more information about Lake query federation, see [Federate an event data store](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, EnableFederationCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, EnableFederationCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // EnableFederationRequest
 *   EventDataStore: "STRING_VALUE", // required
 *   FederationRoleArn: "STRING_VALUE", // required
 * };
 * const command = new EnableFederationCommand(input);
 * const response = await client.send(command);
 * // { // EnableFederationResponse
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   FederationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //   FederationRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableFederationCommandInput - {@link EnableFederationCommandInput}
 * @returns {@link EnableFederationCommandOutput}
 * @see {@link EnableFederationCommandInput} for command's `input` shape.
 * @see {@link EnableFederationCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *
 * This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see [How to enable or disable trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access) in the *Organizations User Guide* and [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) in the *CloudTrail User Guide*.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * You are trying to update a resource when another request is in progress. Allow sufficient wait time for the previous request to complete, then retry your request.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreFederationEnabledException} (client fault)
 *
 * You cannot delete the event data store because Lake query federation is enabled. To delete the event data store, run the `DisableFederation` operation to disable Lake query federation on the event data store.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
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
export class EnableFederationCommand extends command<EnableFederationCommandInput, EnableFederationCommandOutput>(
  _ep0,
  _mw0,
  "EnableFederation",
  EnableFederation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableFederationRequest;
      output: EnableFederationResponse;
    };
    sdk: {
      input: EnableFederationCommandInput;
      output: EnableFederationCommandOutput;
    };
  };
}
