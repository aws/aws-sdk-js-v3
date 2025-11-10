// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrailRequest, CreateTrailResponse } from "../models/models_0";
import { CreateTrail } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 *          </p>
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
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access">How to enable or disable trusted access</a> in the <i>Organizations User Guide</i> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> in the <i>CloudTrail User Guide</i>.</p>
 *
 * @throws {@link CloudTrailInvalidClientTokenIdException} (client fault)
 *  <p>This exception is thrown when a call results in the <code>InvalidClientTokenId</code>
 *          error code. This can occur when you are creating or updating a trail to send notifications
 *          to an Amazon SNS topic that is in a suspended Amazon Web Services account.</p>
 *
 * @throws {@link CloudWatchLogsDeliveryUnavailableException} (client fault)
 *  <p>Cannot set a CloudWatch Logs delivery for this Region.</p>
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
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 *
 * @throws {@link InsufficientSnsTopicPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the Amazon SNS topic is not
 *          sufficient.</p>
 *
 * @throws {@link InvalidCloudWatchLogsLogGroupArnException} (client fault)
 *  <p>This exception is thrown when the provided CloudWatch Logs log group is not
 *          valid.</p>
 *
 * @throws {@link InvalidCloudWatchLogsRoleArnException} (client fault)
 *  <p>This exception is thrown when the provided role is not valid.</p>
 *
 * @throws {@link InvalidKmsKeyIdException} (client fault)
 *  <p>This exception is thrown when the KMS key ARN is not valid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>This exception is thrown when the combination of parameters provided is not
 *          valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link InvalidS3BucketNameException} (client fault)
 *  <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 *
 * @throws {@link InvalidS3PrefixException} (client fault)
 *  <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 *
 * @throws {@link InvalidSnsTopicNameException} (client fault)
 *  <p>This exception is thrown when the provided SNS topic name is not valid.</p>
 *
 * @throws {@link InvalidTagParameterException} (client fault)
 *  <p>This exception is thrown when the specified tag key or values are not valid. It can also
 *          occur if there are duplicate tags or too many tags on the resource.</p>
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link KmsException} (client fault)
 *  <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 *
 * @throws {@link KmsKeyDisabledException} (client fault)
 *  <p>This exception is no longer in use.</p>
 *
 * @throws {@link KmsKeyNotFoundException} (client fault)
 *  <p>This exception is thrown when the KMS key does not exist, when the S3
 *          bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is
 *          not in the same Region.</p>
 *
 * @throws {@link MaximumNumberOfTrailsExceededException} (client fault)
 *  <p>This exception is thrown when the maximum number of trails is reached.</p>
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
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *  <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 *
 * @throws {@link TagsLimitExceededException} (client fault)
 *  <p>The number of tags per trail, event data store, dashboard, or channel has exceeded the permitted amount. Currently, the limit is
 *          50.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          This exception is thrown when the request rate exceeds the limit.
 *       </p>
 *
 * @throws {@link TrailAlreadyExistsException} (client fault)
 *  <p>This exception is thrown when the specified trail already exists.</p>
 *
 * @throws {@link TrailNotProvidedException} (client fault)
 *  <p>This exception is no longer in use.</p>
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
export class CreateTrailCommand extends $Command
  .classBuilder<
    CreateTrailCommandInput,
    CreateTrailCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "CreateTrail", {})
  .n("CloudTrailClient", "CreateTrailCommand")
  .sc(CreateTrail)
  .build() {
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
