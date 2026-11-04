// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventDataStoreRequest, UpdateEventDataStoreResponse } from "../models/models_0";
import { UpdateEventDataStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventDataStoreCommand}.
 */
export interface UpdateEventDataStoreCommandInput extends UpdateEventDataStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventDataStoreCommand}.
 */
export interface UpdateEventDataStoreCommandOutput extends UpdateEventDataStoreResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Updates an event data store. The required `EventDataStore` value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. `RetentionPeriod` is in days, and valid values are integers between 7 and 3653 if the `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING`, or between 7 and 2557 if `BillingMode` is set to `FIXED_RETENTION_PRICING`. By default, `TerminationProtection` is enabled.
 *
 * For event data stores for CloudTrail events, `AdvancedEventSelectors` includes or excludes management, data, or network activity events in your event data store. For more information about `AdvancedEventSelectors`, see [AdvancedEventSelectors](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html).
 *
 * For event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, `AdvancedEventSelectors` includes events of that type in your event data store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // UpdateEventDataStoreRequest
 *   EventDataStore: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   AdvancedEventSelectors: [ // AdvancedEventSelectors
 *     { // AdvancedEventSelector
 *       Name: "STRING_VALUE",
 *       FieldSelectors: [ // AdvancedFieldSelectors // required
 *         { // AdvancedFieldSelector
 *           Field: "STRING_VALUE", // required
 *           Equals: [ // Operator
 *             "STRING_VALUE",
 *           ],
 *           StartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           EndsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [
 *             "STRING_VALUE",
 *           ],
 *           NotStartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEndsWith: "<Operator>",
 *         },
 *       ],
 *     },
 *   ],
 *   MultiRegionEnabled: true || false,
 *   OrganizationEnabled: true || false,
 *   RetentionPeriod: Number("int"),
 *   TerminationProtectionEnabled: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   BillingMode: "EXTENDABLE_RETENTION_PRICING" || "FIXED_RETENTION_PRICING",
 * };
 * const command = new UpdateEventDataStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventDataStoreResponse
 * //   EventDataStoreArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "CREATED" || "ENABLED" || "PENDING_DELETION" || "STARTING_INGESTION" || "STOPPING_INGESTION" || "STOPPED_INGESTION",
 * //   AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //     { // AdvancedEventSelector
 * //       Name: "STRING_VALUE",
 * //       FieldSelectors: [ // AdvancedFieldSelectors // required
 * //         { // AdvancedFieldSelector
 * //           Field: "STRING_VALUE", // required
 * //           Equals: [ // Operator
 * //             "STRING_VALUE",
 * //           ],
 * //           StartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EndsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEquals: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotStartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEndsWith: "<Operator>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MultiRegionEnabled: true || false,
 * //   OrganizationEnabled: true || false,
 * //   RetentionPeriod: Number("int"),
 * //   TerminationProtectionEnabled: true || false,
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   KmsKeyId: "STRING_VALUE",
 * //   BillingMode: "EXTENDABLE_RETENTION_PRICING" || "FIXED_RETENTION_PRICING",
 * //   FederationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED",
 * //   FederationRoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEventDataStoreCommandInput - {@link UpdateEventDataStoreCommandInput}
 * @returns {@link UpdateEventDataStoreCommandOutput}
 * @see {@link UpdateEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *
 * This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see [How to enable or disable trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access) in the *Organizations User Guide* and [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) in the *CloudTrail User Guide*.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
 *
 * @throws {@link EventDataStoreAlreadyExistsException} (client fault)
 *
 * An event data store with that name already exists.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreHasOngoingImportException} (client fault)
 *
 * This exception is thrown when you try to update or delete an event data store that currently has an import in progress.
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
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *
 * For the `CreateTrail` `PutInsightSelectors`, `UpdateTrail`, `StartQuery`, and `StartImport` operations, this exception is thrown when the policy on the S3 bucket or KMS key does not have sufficient permissions for the operation.
 *
 * For all other operations, this exception is thrown when the policy for the KMS key does not have sufficient permissions for the operation.
 *
 * @throws {@link InvalidEventSelectorsException} (client fault)
 *
 * This exception is thrown when the `PutEventSelectors` operation is called with a number of event selectors, advanced event selectors, or data resources that is not valid. The combination of event selectors or advanced event selectors and data resources is not valid. A trail can have up to 5 event selectors. If a trail uses advanced event selectors, a maximum of 500 total values for all conditions in all advanced event selectors is allowed. A trail is limited to 250 data resources. These data resources can be distributed across event selectors, but the overall total cannot exceed 250.
 *
 * You can:
 *
 * - Specify a valid number of event selectors (1 to 5) for a trail.
 * - Specify a valid number of data resources (1 to 250) for an event selector. The limit of number of resources on an individual event selector is configurable up to 250. However, this upper limit is allowed only if the total number of data resources does not exceed 250 across all event selectors for a trail.
 * - Specify up to 500 values for all conditions in all advanced event selectors for a trail.
 * - Specify a valid value for a parameter. For example, specifying the `ReadWriteType` parameter with a value of `read-only` is not valid.
 *
 * @throws {@link InvalidInsightSelectorsException} (client fault)
 *
 * For `PutInsightSelectors`, this exception is thrown when the formatting or syntax of the `InsightSelectors` JSON statement is not valid, or the specified `InsightType` in the `InsightSelectors` statement is not valid. Valid values for `InsightType` are `ApiCallRateInsight` and `ApiErrorRateInsight`. To enable Insights on an event data store, the destination event data store specified by the `InsightsDestination` parameter must log Insights events and the source event data store specified by the `EventDataStore` parameter must log management events.
 *
 * For `UpdateEventDataStore`, this exception is thrown if Insights are enabled on the event data store and the updated advanced event selectors are not compatible with the configured `InsightSelectors`. If the `InsightSelectors` includes an `InsightType` of `ApiCallRateInsight`, the source event data store must log `write` management events. If the `InsightSelectors` includes an `InsightType` of `ApiErrorRateInsight`, the source event data store must log management events.
 *
 * @throws {@link InvalidKmsKeyIdException} (client fault)
 *
 * This exception is thrown when the KMS key ARN is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link KmsException} (client fault)
 *
 * This exception is thrown when there is an issue with the specified KMS key and the trail or event data store can't be updated.
 *
 * @throws {@link KmsKeyNotFoundException} (client fault)
 *
 * This exception is thrown when the KMS key does not exist, when the S3 bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is not in the same Region.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the request rate exceeds the limit.
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
export class UpdateEventDataStoreCommand extends command<UpdateEventDataStoreCommandInput, UpdateEventDataStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventDataStore",
  UpdateEventDataStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventDataStoreRequest;
      output: UpdateEventDataStoreResponse;
    };
    sdk: {
      input: UpdateEventDataStoreCommandInput;
      output: UpdateEventDataStoreCommandOutput;
    };
  };
}
