// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTrailRequest, UpdateTrailResponse } from "../models/models_0";
import { UpdateTrail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTrailCommand}.
 */
export interface UpdateTrailCommandInput extends UpdateTrailRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrailCommand}.
 */
export interface UpdateTrailCommandOutput extends UpdateTrailResponse, __MetadataBearer {}

/**
 * Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. `UpdateTrail` must be called from the Region in which the trail was created; otherwise, an `InvalidHomeRegionException` is thrown.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // UpdateTrailRequest
 *   Name: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE",
 *   S3KeyPrefix: "STRING_VALUE",
 *   SnsTopicName: "STRING_VALUE",
 *   IncludeGlobalServiceEvents: true || false,
 *   IsMultiRegionTrail: true || false,
 *   EnableLogFileValidation: true || false,
 *   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 *   CloudWatchLogsRoleArn: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   IsOrganizationTrail: true || false,
 *   RecursiveLogging: true || false,
 * };
 * const command = new UpdateTrailCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrailResponse
 * //   Name: "STRING_VALUE",
 * //   S3BucketName: "STRING_VALUE",
 * //   S3KeyPrefix: "STRING_VALUE",
 * //   SnsTopicName: "STRING_VALUE",
 * //   SnsTopicARN: "STRING_VALUE",
 * //   IncludeGlobalServiceEvents: true || false,
 * //   IsMultiRegionTrail: true || false,
 * //   TrailARN: "STRING_VALUE",
 * //   LogFileValidationEnabled: true || false,
 * //   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //   CloudWatchLogsRoleArn: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   IsOrganizationTrail: true || false,
 * //   RecursiveLogging: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateTrailCommandInput - {@link UpdateTrailCommandInput}
 * @returns {@link UpdateTrailCommandOutput}
 * @see {@link UpdateTrailCommandInput} for command's `input` shape.
 * @see {@link UpdateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *
 * This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see [How to enable or disable trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access) in the *Organizations User Guide* and [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) in the *CloudTrail User Guide*.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *
 * This exception is thrown when an operation is called with an ARN that is not valid.
 *
 * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
 *
 * The following is the format of an event data store ARN: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
 *
 * The following is the format of a dashboard ARN: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
 *
 * The following is the format of a channel ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
 *
 * @throws {@link CloudTrailInvalidClientTokenIdException} (client fault)
 *
 * This exception is thrown when a call results in the `InvalidClientTokenId` error code. This can occur when you are creating or updating a trail to send notifications to an Amazon SNS topic that is in a suspended Amazon Web Services account.
 *
 * @throws {@link CloudWatchLogsDeliveryUnavailableException} (client fault)
 *
 * Cannot set a CloudWatch Logs delivery for this Region.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
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
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *
 * This exception is thrown when the policy on the S3 bucket is not sufficient.
 *
 * @throws {@link InsufficientSnsTopicPolicyException} (client fault)
 *
 * This exception is thrown when the policy on the Amazon SNS topic is not sufficient.
 *
 * @throws {@link InvalidCloudWatchLogsLogGroupArnException} (client fault)
 *
 * This exception is thrown when the provided CloudWatch Logs log group is not valid.
 *
 * @throws {@link InvalidCloudWatchLogsRoleArnException} (client fault)
 *
 * This exception is thrown when the provided role is not valid.
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
 * @throws {@link InvalidHomeRegionException} (client fault)
 *
 * This exception is thrown when an operation is called on a trail from a Region other than the Region in which the trail was created.
 *
 * @throws {@link InvalidKmsKeyIdException} (client fault)
 *
 * This exception is thrown when the KMS key ARN is not valid.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * This exception is thrown when the combination of parameters provided is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link InvalidS3BucketNameException} (client fault)
 *
 * This exception is thrown when the provided S3 bucket name is not valid.
 *
 * @throws {@link InvalidS3PrefixException} (client fault)
 *
 * This exception is thrown when the provided S3 prefix is not valid.
 *
 * @throws {@link InvalidSnsTopicNameException} (client fault)
 *
 * This exception is thrown when the provided SNS topic name is not valid.
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link KmsException} (client fault)
 *
 * This exception is thrown when there is an issue with the specified KMS key and the trail or event data store can't be updated.
 *
 * @throws {@link KmsKeyDisabledException} (client fault)
 *
 * This exception is no longer in use.
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
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *
 * This exception is thrown when the specified S3 bucket does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the request rate exceeds the limit.
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *
 * This exception is thrown when the trail with the given name is not found.
 *
 * @throws {@link TrailNotProvidedException} (client fault)
 *
 * This exception is no longer in use.
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
export class UpdateTrailCommand extends command<UpdateTrailCommandInput, UpdateTrailCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTrail",
  UpdateTrail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrailRequest;
      output: UpdateTrailResponse;
    };
    sdk: {
      input: UpdateTrailCommandInput;
      output: UpdateTrailCommandOutput;
    };
  };
}
