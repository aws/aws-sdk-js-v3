// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEventDataStoreRequest, UpdateEventDataStoreResponse } from "../models/models_0";
import { de_UpdateEventDataStoreCommand, se_UpdateEventDataStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or
 *          the ID portion of the ARN. Other parameters are optional, but at least one optional
 *          parameter must be specified, or CloudTrail throws an error.
 *             <code>RetentionPeriod</code> is in days, and valid values are integers between 7 and
 *          3653 if the <code>BillingMode</code> is set to <code>EXTENDABLE_RETENTION_PRICING</code>, or between 7 and 2557 if <code>BillingMode</code> is set to <code>FIXED_RETENTION_PRICING</code>. By default, <code>TerminationProtection</code> is enabled.</p>
 *          <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code>
 *          includes or excludes management, data, or network activity events in your event data store. For more
 *          information about <code>AdvancedEventSelectors</code>, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html">AdvancedEventSelectors</a>.</p>
 *          <p> For event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or non-Amazon Web Services events,
 *             <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
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
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access">How to enable or disable trusted access</a> in the <i>Organizations User Guide</i> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> in the <i>CloudTrail User Guide</i>.</p>
 *
 * @throws {@link EventDataStoreAlreadyExistsException} (client fault)
 *  <p>An event data store with that name already exists.</p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreHasOngoingImportException} (client fault)
 *  <p> This exception is thrown when you try to update or delete an event data store that
 *          currently has an import in progress. </p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InvalidEventSelectorsException} (client fault)
 *  <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called
 *          with a number of event selectors, advanced event selectors, or data resources that is not
 *          valid. The combination of event selectors or advanced event selectors and data resources is
 *          not valid. A trail can have up to 5 event selectors. If a trail uses advanced event
 *          selectors, a maximum of 500 total values for all conditions in all advanced event selectors
 *          is allowed. A trail is limited to 250 data resources. These data resources can be
 *          distributed across event selectors, but the overall total cannot exceed 250.</p>
 *          <p>You can:</p>
 *          <ul>
 *             <li>
 *                <p>Specify a valid number of event selectors (1 to 5) for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid number of data resources (1 to 250) for an event selector. The
 *                limit of number of resources on an individual event selector is configurable up to
 *                250. However, this upper limit is allowed only if the total number of data resources
 *                does not exceed 250 across all event selectors for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify up to 500 values for all conditions in all advanced event selectors for a
 *                trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid value for a parameter. For example, specifying the
 *                   <code>ReadWriteType</code> parameter with a value of <code>read-only</code> is not
 *                valid.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInsightSelectorsException} (client fault)
 *  <p>For <code>PutInsightSelectors</code>, this exception is thrown when the formatting or syntax of the <code>InsightSelectors</code> JSON statement is not
 *          valid, or the specified <code>InsightType</code> in the <code>InsightSelectors</code> statement is not
 *          valid. Valid values for <code>InsightType</code> are <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code>. To enable Insights on an event data store, the destination event data store specified by the
 *          <code>InsightsDestination</code> parameter must log Insights events and the source event data
 *          store specified by the <code>EventDataStore</code> parameter must log management events.</p>
 *          <p>For <code>UpdateEventDataStore</code>, this exception is thrown if Insights are enabled on the event data store and the updated
 *          advanced event selectors are not compatible with the configured <code>InsightSelectors</code>.
 *          If the <code>InsightSelectors</code> includes an <code>InsightType</code> of <code>ApiCallRateInsight</code>, the source event data store must log <code>write</code> management events.
 *          If the <code>InsightSelectors</code> includes an <code>InsightType</code> of <code>ApiErrorRateInsight</code>, the source event data store must log management events.</p>
 *
 * @throws {@link InvalidKmsKeyIdException} (client fault)
 *  <p>This exception is thrown when the KMS key ARN is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 *
 * @throws {@link KmsKeyNotFoundException} (client fault)
 *  <p>This exception is thrown when the KMS key does not exist, when the S3
 *          bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is
 *          not in the same Region.</p>
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
export class UpdateEventDataStoreCommand extends $Command
  .classBuilder<
    UpdateEventDataStoreCommandInput,
    UpdateEventDataStoreCommandOutput,
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
  .s("CloudTrail_20131101", "UpdateEventDataStore", {})
  .n("CloudTrailClient", "UpdateEventDataStoreCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventDataStoreCommand)
  .de(de_UpdateEventDataStoreCommand)
  .build() {
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
