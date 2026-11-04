// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTrailRequest, CreateTrailResponse } from "../models/models_0";
import { CreateTrail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTrailCommand}.
 */
export interface CreateTrailCommandInput extends CreateTrailRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrailCommand}.
 */
export interface CreateTrailCommandOutput extends CreateTrailResponse, __MetadataBearer {}

/**
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, CreateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, CreateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // CreateTrailRequest
 *   Name: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 *   S3KeyPrefix: "STRING_VALUE",
 *   SnsTopicName: "STRING_VALUE",
 *   IncludeGlobalServiceEvents: true || false,
 *   IsMultiRegionTrail: true || false,
 *   EnableLogFileValidation: true || false,
 *   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 *   CloudWatchLogsRoleArn: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   IsOrganizationTrail: true || false,
 *   TagsList: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   RecursiveLogging: true || false,
 * };
 * const command = new CreateTrailCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrailResponse
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
 * @param CreateTrailCommandInput - {@link CreateTrailCommandInput}
 * @returns {@link CreateTrailCommandOutput}
 * @see {@link CreateTrailCommandInput} for command's `input` shape.
 * @see {@link CreateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *
 * This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see [How to enable or disable trusted access](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access) in the *Organizations User Guide* and [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) in the *CloudTrail User Guide*.
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
 * @throws {@link InvalidTagParameterException} (client fault)
 *
 * This exception is thrown when the specified tag key or values are not valid. It can also occur if there are duplicate tags or too many tags on the resource.
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
 * @throws {@link MaximumNumberOfTrailsExceededException} (client fault)
 *
 * This exception is thrown when the maximum number of trails is reached.
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
 * @throws {@link TagsLimitExceededException} (client fault)
 *
 * The number of tags per trail, event data store, dashboard, or channel has exceeded the permitted amount. Currently, the limit is 50.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the request rate exceeds the limit.
 *
 * @throws {@link TrailAlreadyExistsException} (client fault)
 *
 * This exception is thrown when the specified trail already exists.
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
export class CreateTrailCommand extends command<CreateTrailCommandInput, CreateTrailCommandOutput>(
  _ep0,
  _mw0,
  "CreateTrail",
  CreateTrail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrailRequest;
      output: CreateTrailResponse;
    };
    sdk: {
      input: CreateTrailCommandInput;
      output: CreateTrailCommandOutput;
    };
  };
}
