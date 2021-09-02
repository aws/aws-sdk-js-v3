import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>A custom key-value pair associated with a resource such as a CloudTrail trail.</p>
 */
export interface Tag {
  /**
   * <p>The key in a key-value pair. The key must be must be no longer than 128 Unicode characters.
   *          The key must be unique for the resource to which it applies.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the tags to add to a trail.</p>
 */
export interface AddTagsRequest {
  /**
   * <p>Specifies the ARN of the trail to which one or more tags will be added. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Contains a list of tags, up to a limit of 50</p>
   */
  TagsList?: Tag[];
}

export namespace AddTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data if successful. Otherwise, returns an error.</p>
 */
export interface AddTagsResponse {}

export namespace AddTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when an operation is called with a trail ARN that is not valid. The following is the format of a trail ARN.</p>
 *          <p>
 *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 */
export interface CloudTrailARNInvalidException extends __SmithyException, $MetadataBearer {
  name: "CloudTrailARNInvalidException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudTrailARNInvalidException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudTrailARNInvalidException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified tag key or values are not valid.
 *          It can also occur if there are duplicate tags or too many tags on the resource.</p>
 */
export interface InvalidTagParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidTagParameterException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTagParameterException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTagParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code>
 *             and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 */
export interface InvalidTrailNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidTrailNameException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTrailNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTrailNameException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Web Services account making the request to create or update an organization trail is not the management account for an
 *          organization in Organizations. For more information, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface NotOrganizationMasterAccountException extends __SmithyException, $MetadataBearer {
  name: "NotOrganizationMasterAccountException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace NotOrganizationMasterAccountException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotOrganizationMasterAccountException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace OperationNotPermittedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationNotPermittedException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified resource is not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 */
export interface ResourceTypeNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "ResourceTypeNotSupportedException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace ResourceTypeNotSupportedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTypeNotSupportedException): any => ({
    ...obj,
  });
}

/**
 * <p>The number of tags per trail has exceeded the permitted amount. Currently, the limit is 50.</p>
 */
export interface TagsLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "TagsLimitExceededException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TagsLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagsLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the requested operation is not supported.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace UnsupportedOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>A single selector statement in an advanced event selector.</p>
 */
export interface AdvancedFieldSelector {
  /**
   * <p>
   *          A field in an event record on which to filter events to be logged. Supported fields include <code>readOnly</code>, <code>eventCategory</code>,
   *          <code>eventSource</code> (for management events), <code>eventName</code>, <code>resources.type</code>, and <code>resources.ARN</code>.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>readOnly</code>
   *                   </b> - Optional. Can be set to <code>Equals</code> a value of <code>true</code>
   *             or <code>false</code>. A value of <code>false</code> logs both <code>read</code> and
   *             <code>write</code> events.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>eventSource</code>
   *                   </b> - For filtering management events only.
   *             This can be set only to <code>NotEquals</code>
   *                   <code>kms.amazonaws.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>eventName</code>
   *                   </b> - Can use any operator. You can use it to ﬁlter in
   *             or ﬁlter out any data event logged to CloudTrail, such as <code>PutBucket</code> or <code>GetSnapshotBlock</code>. You can have multiple values
   *             for this ﬁeld, separated by commas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>eventCategory</code>
   *                   </b> - This is required. It must be set to <code>Equals</code>, and
   *             the value must be <code>Management</code> or <code>Data</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>resources.type</code>
   *                   </b> - This ﬁeld is required.
   *                   <code>resources.type</code> can only use the <code>Equals</code> operator, and the
   *                value can be one of the following: <code>AWS::S3::Object</code>,
   *                   <code>AWS::S3::AccessPoint</code>,
   *                   <code>AWS::Lambda::Function</code>, <code>AWS::DynamoDB::Table</code>,
   *                   <code>AWS::S3Outposts::Object</code>, <code>AWS::ManagedBlockchain::Node</code>,
   *                   <code>AWS::S3ObjectLambda::AccessPoint</code>, or <code>AWS::EC2::Snapshot</code>.
   *                You can have only one <code>resources.type</code> ﬁeld per selector. To log data
   *                events on more than one resource type, add another selector.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>resources.ARN</code>
   *                   </b> - You can use any operator with
   *                resources.ARN, but if you use <code>Equals</code> or <code>NotEquals</code>, the
   *                value must exactly match the ARN of a valid resource of the type you've speciﬁed in
   *                the template as the value of resources.type. For example, if resources.type equals
   *                   <code>AWS::S3::Object</code>, the ARN must be in one of the following formats. To
   *                log all data events for all objects in a specific S3 bucket, use the
   *                   <code>StartsWith</code> operator, and include only the bucket ARN as the matching value.</p>
   *                <p>The trailing slash is intentional; do not exclude it. Replace the text between
   *                less than and greater than symbols (<>) with resource-specific information. </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3:::<bucket_name>/</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3:::<bucket_name>/<object_path>/</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::S3::AccessPoint</code>, and the
   *                operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in
   *                one of the following formats. To log events on all objects in an S3 access point, we
   *                recommend that you use only the access point ARN, don’t include the object path, and
   *                use the <code>StartsWith</code> or <code>NotStartsWith</code> operators.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3:<region>:<account_ID>:accesspoint/<access_point_name></code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3:<region>:<account_ID>:accesspoint/<access_point_name>/object/<object_path></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::Lambda::Function</code>, and the operator is set
   *             to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:lambda:<region>:<account_ID>:function:<function_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::DynamoDB::Table</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:dynamodb:<region>:<account_ID>:table:<table_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::S3Outposts::Object</code>, and the operator
   *                is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3-outposts:<region>:<account_ID>:<object_path></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::ManagedBlockchain::Node</code>,
   *                and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN
   *                must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:managedblockchain:<region>:<account_ID>:nodes/<node_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals
   *                   <code>AWS::S3ObjectLambda::AccessPoint</code>, and the operator is set to
   *                   <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following
   *                format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3-object-lambda:<region>:<account_ID>:accesspoint/<access_point_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::EC2::Snapshot</code>, and the
   *                operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in
   *                the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:ec2:<region>::snapshot/<snapshot_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Field: string | undefined;

  /**
   * <p> An operator that includes events that match the exact value of the event record field
   *          specified as the value of <code>Field</code>. This is the only valid operator that you can
   *          use with the <code>readOnly</code>, <code>eventCategory</code>, and
   *             <code>resources.type</code> fields.</p>
   */
  Equals?: string[];

  /**
   * <p>An operator that includes events that match the first few characters of the event record
   *          field specified as the value of <code>Field</code>.</p>
   */
  StartsWith?: string[];

  /**
   * <p>An operator that includes events that match the last few characters of the event record
   *          field specified as the value of <code>Field</code>.</p>
   */
  EndsWith?: string[];

  /**
   * <p>
   *          An operator that excludes events that match the exact value of the event record field specified as the value of <code>Field</code>.
   *       </p>
   */
  NotEquals?: string[];

  /**
   * <p>
   *          An operator that excludes events that match the first few characters of the event record field specified as the value of <code>Field</code>.
   *       </p>
   */
  NotStartsWith?: string[];

  /**
   * <p>
   *          An operator that excludes events that match the last few characters of the event record field specified as the value of <code>Field</code>.
   *       </p>
   */
  NotEndsWith?: string[];
}

export namespace AdvancedFieldSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedFieldSelector): any => ({
    ...obj,
  });
}

/**
 * <p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail
 *          event record ﬁelds. They help you control costs by logging only those events
 *          that are important to you. For more information about advanced event selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>readOnly</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>eventSource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>eventName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>eventCategory</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>resources.type</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>resources.ARN</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
 */
export interface AdvancedEventSelector {
  /**
   * <p>An optional, descriptive name for an advanced event selector, such as "Log data events
   *          for only two S3 buckets".</p>
   */
  Name?: string;

  /**
   * <p>Contains all selector statements in an advanced event selector.</p>
   */
  FieldSelectors: AdvancedFieldSelector[] | undefined;
}

export namespace AdvancedEventSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedEventSelector): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information,
 *          see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other Amazon Web Services Services</a>
 *          and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
 */
export interface CloudTrailAccessNotEnabledException extends __SmithyException, $MetadataBearer {
  name: "CloudTrailAccessNotEnabledException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudTrailAccessNotEnabledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudTrailAccessNotEnabledException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a call results in the <code>InvalidClientTokenId</code> error code.
 *          This can occur when you are creating or updating a trail to send notifications to an Amazon SNS topic that
 *          is in a suspended Amazon Web Services account.</p>
 */
export interface CloudTrailInvalidClientTokenIdException extends __SmithyException, $MetadataBearer {
  name: "CloudTrailInvalidClientTokenIdException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudTrailInvalidClientTokenIdException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudTrailInvalidClientTokenIdException): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot set a CloudWatch Logs delivery for this region.</p>
 */
export interface CloudWatchLogsDeliveryUnavailableException extends __SmithyException, $MetadataBearer {
  name: "CloudWatchLogsDeliveryUnavailableException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudWatchLogsDeliveryUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogsDeliveryUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the settings for each trail.</p>
 */
export interface CreateTrailRequest {
  /**
   * <p>Specifies the name of the trail. The name must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p>
   *             </li>
   *             <li>
   *                <p>Start with a letter or number, and end with a letter or number</p>
   *             </li>
   *             <li>
   *                <p>Be between 3 and 128 characters</p>
   *             </li>
   *             <li>
   *                <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code>
   *             and <code>my--namespace</code> are not valid.</p>
   *             </li>
   *             <li>
   *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated
   *          for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail is created in the current region or in all regions. The default is false, which creates a trail only in the region where you are signed in. As a best practice, consider
   *       creating trails that log events in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies whether log file integrity validation is enabled. The default is false.</p>
   *          <note>
   *             <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does
   *             not create digest files for log files that were delivered during a period in which log file integrity validation was disabled.
   *             For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable
   *             it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on
   *             January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p>
   *          </note>
   */
  EnableLogFileValidation?: boolean;

  /**
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group
   *          to which CloudTrail logs will be delivered. Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The
   *          value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully
   *          specified ARN to a key, or a globally unique identifier.</p>
   *          <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys,
   *          see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>alias/MyAliasName</p>
   *             </li>
   *             <li>
   *                <p>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</p>
   *             </li>
   *             <li>
   *                <p>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</p>
   *             </li>
   *             <li>
   *                <p>12345678-1234-1234-1234-123456789012</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account.
   *          The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account for an organization in
   *          Organizations.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>A list of tags.</p>
   */
  TagsList?: Tag[];
}

export namespace CreateTrailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrailRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface CreateTrailResponse {
  /**
   * <p>Specifies the name of the trail.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated
   *          for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @deprecated
   *
   * <p>This field is no longer in use. Use SnsTopicARN.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists in one region or in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies the ARN of the trail that was created. The format of a trail ARN
   *          is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail.
   *          The value is a fully specified ARN to a KMS key in the following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}

export namespace CreateTrailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTrailResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for
 *          creating an organization trail in a required service. For more information, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface InsufficientDependencyServiceAccessPermissionException extends __SmithyException, $MetadataBearer {
  name: "InsufficientDependencyServiceAccessPermissionException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientDependencyServiceAccessPermissionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientDependencyServiceAccessPermissionException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.</p>
 */
export interface InsufficientEncryptionPolicyException extends __SmithyException, $MetadataBearer {
  name: "InsufficientEncryptionPolicyException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientEncryptionPolicyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientEncryptionPolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 */
export interface InsufficientS3BucketPolicyException extends __SmithyException, $MetadataBearer {
  name: "InsufficientS3BucketPolicyException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientS3BucketPolicyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientS3BucketPolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the policy on the Amazon SNS topic is not sufficient.</p>
 */
export interface InsufficientSnsTopicPolicyException extends __SmithyException, $MetadataBearer {
  name: "InsufficientSnsTopicPolicyException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientSnsTopicPolicyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientSnsTopicPolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provided CloudWatch Logs log group is not valid.</p>
 */
export interface InvalidCloudWatchLogsLogGroupArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidCloudWatchLogsLogGroupArnException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidCloudWatchLogsLogGroupArnException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCloudWatchLogsLogGroupArnException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provided role is not valid.</p>
 */
export interface InvalidCloudWatchLogsRoleArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidCloudWatchLogsRoleArnException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidCloudWatchLogsRoleArnException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCloudWatchLogsRoleArnException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the KMS key ARN is not valid.</p>
 */
export interface InvalidKmsKeyIdException extends __SmithyException, $MetadataBearer {
  name: "InvalidKmsKeyIdException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidKmsKeyIdException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidKmsKeyIdException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the combination of parameters provided is not valid.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidParameterCombinationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterCombinationException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 */
export interface InvalidS3BucketNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3BucketNameException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidS3BucketNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidS3BucketNameException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 */
export interface InvalidS3PrefixException extends __SmithyException, $MetadataBearer {
  name: "InvalidS3PrefixException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidS3PrefixException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidS3PrefixException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provided SNS topic name is not valid.</p>
 */
export interface InvalidSnsTopicNameException extends __SmithyException, $MetadataBearer {
  name: "InvalidSnsTopicNameException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidSnsTopicNameException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSnsTopicNameException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when there is an issue with the specified KMS key and the trail can’t be updated.</p>
 */
export interface KmsException extends __SmithyException, $MetadataBearer {
  name: "KmsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace KmsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsException): any => ({
    ...obj,
  });
}

/**
 * @deprecated
 *
 * <p>This exception is no longer in use.</p>
 */
export interface KmsKeyDisabledException extends __SmithyException, $MetadataBearer {
  name: "KmsKeyDisabledException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace KmsKeyDisabledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsKeyDisabledException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the KMS key does not exist, when the S3 bucket and the
 *          KMS key are not in the same region, or when the KMS key associated with the Amazon SNS
 *          topic either does not exist or is not in the same region.</p>
 */
export interface KmsKeyNotFoundException extends __SmithyException, $MetadataBearer {
  name: "KmsKeyNotFoundException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace KmsKeyNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsKeyNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the maximum number of trails is reached.</p>
 */
export interface MaximumNumberOfTrailsExceededException extends __SmithyException, $MetadataBearer {
  name: "MaximumNumberOfTrailsExceededException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace MaximumNumberOfTrailsExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MaximumNumberOfTrailsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when Organizations is not configured to support all features. All features must be enabled in Organizations to support
 *          creating an organization trail. For more information, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface OrganizationNotInAllFeaturesModeException extends __SmithyException, $MetadataBearer {
  name: "OrganizationNotInAllFeaturesModeException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace OrganizationNotInAllFeaturesModeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationNotInAllFeaturesModeException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the request is made from an Amazon Web Services account that is not a member of an organization.
 *          To make this request, sign in using the credentials of an account that belongs to an organization.</p>
 */
export interface OrganizationsNotInUseException extends __SmithyException, $MetadataBearer {
  name: "OrganizationsNotInUseException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace OrganizationsNotInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrganizationsNotInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 */
export interface S3BucketDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "S3BucketDoesNotExistException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace S3BucketDoesNotExistException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified trail already exists.</p>
 */
export interface TrailAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "TrailAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TrailAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrailAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is no longer in use.</p>
 */
export interface TrailNotProvidedException extends __SmithyException, $MetadataBearer {
  name: "TrailNotProvidedException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TrailNotProvidedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrailNotProvidedException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified resource is not ready for an operation.
 *          This can occur when you try to run an operation on a trail before CloudTrail has time to fully load the trail.
 *          If this exception occurs, wait a few minutes, and then try the operation again.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The request that specifies the name of a trail to delete.</p>
 */
export interface DeleteTrailRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail to be deleted. The following is the format of a
   *          trail ARN.
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace DeleteTrailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrailRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface DeleteTrailResponse {}

export namespace DeleteTrailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTrailResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
 */
export interface InvalidHomeRegionException extends __SmithyException, $MetadataBearer {
  name: "InvalidHomeRegionException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidHomeRegionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidHomeRegionException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the trail with the given name is not found.</p>
 */
export interface TrailNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TrailNotFoundException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TrailNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrailNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the trail.</p>
 */
export interface DescribeTrailsRequest {
  /**
   * <p>Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *
   *          <p>If an empty list is specified, information for the trail in the current region is returned.</p>
   *          <ul>
   *             <li>
   *                <p>If an empty list is specified and <code>IncludeShadowTrails</code> is false, then
   *             information for all trails in the current region is returned.</p>
   *             </li>
   *             <li>
   *                <p>If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current region and any associated shadow trails in other regions is returned.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current region. To return information about a trail in another region, you must specify its trail ARN.</p>
   *          </note>
   */
  trailNameList?: string[];

  /**
   * <p>Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region,
   *          or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account
   *          and region replication trails will not be returned. The default is true.</p>
   */
  includeShadowTrails?: boolean;
}

export namespace DescribeTrailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The settings for a trail.</p>
 */
export interface Trail {
  /**
   * <p>Name of the trail set by calling <a>CreateTrail</a>. The maximum length is 128
   *          characters.</p>
   */
  Name?: string;

  /**
   * <p>Name of the Amazon S3 bucket into which CloudTrail delivers your trail files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated
   *          for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.
   *          The maximum length is 200 characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @deprecated
   *
   * <p>This field is no longer in use. Use SnsTopicARN.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications
   *          when log files are delivered. The following is the format of a topic ARN.</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>Set to <b>True</b> to include Amazon Web Services API calls from Amazon Web Services global services such as IAM.
   *          Otherwise, <b>False</b>.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists only in one region or exists in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>The region in which the trail was created.</p>
   */
  HomeRegion?: string;

  /**
   * <p>Specifies the ARN of the trail. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies whether log file validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * <p>Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail.
   *          The value is a fully specified ARN to a KMS key in the following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies if the trail has custom event selectors.</p>
   */
  HasCustomEventSelectors?: boolean;

  /**
   * <p>Specifies whether a trail has insight types specified in an <code>InsightSelector</code> list.</p>
   */
  HasInsightSelectors?: boolean;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}

export namespace Trail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trail): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface DescribeTrailsResponse {
  /**
   * <p>The list of trail objects. Trail objects with string values are only returned if values for the objects exist in a trail's configuration.
   *          For example, <code>SNSTopicName</code> and <code>SNSTopicARN</code> are only returned in results if a trail is configured to send SNS notifications. Similarly,
   *          <code>KMSKeyId</code> only appears in results if a trail's log files are encrypted with KMS customer managed keys.</p>
   */
  trailList?: Trail[];
}

export namespace DescribeTrailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTrailsResponse): any => ({
    ...obj,
  });
}

export interface GetEventSelectorsRequest {
  /**
   * <p>Specifies the name of the trail or trail ARN. If you specify a trail name, the
   *          string must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p>
   *             </li>
   *             <li>
   *                <p>Start with a letter or number, and end with a letter or number</p>
   *             </li>
   *             <li>
   *                <p>Be between 3 and 128 characters</p>
   *             </li>
   *             <li>
   *                <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code>
   *                   and <code>my--namespace</code> are not valid.</p>
   *             </li>
   *             <li>
   *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
   *             </li>
   *          </ul>
   *          <p>If you specify a trail ARN, it must be in the format:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailName: string | undefined;
}

export namespace GetEventSelectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventSelectorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon S3 buckets, Lambda functions, or Amazon DynamoDB tables that you specify
 *          in your event selectors for your trail to log data events. Data events provide information
 *          about the resource operations performed on or within a resource itself. These are also
 *          known as data plane operations. You can specify up to 250 data resources for a
 *          trail.</p>
 *          <note>
 *             <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors,
 *       but the total cannot exceed 250 across all selectors.</p>
 *             <p>If you are using advanced event selectors, the maximum total number of values for
 *             all conditions, across all advanced event selectors for the trail, is 500.</p>
 *          </note>
 *          <p>The following example demonstrates how logging works when you configure logging of all data events
 *          for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix,
 *       and the option to log both <code>Read</code> and <code>Write</code> data events.</p>
 *          <ol>
 *             <li>
 *                <p>A user uploads an image file to <code>bucket-1</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API.
 *             It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket
 *             with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the
 *                event.</p>
 *             </li>
 *             <li>
 *                <p>A user uploads an object to an Amazon S3 bucket named
 *                   <code>arn:aws:s3:::bucket-2</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail
 *             user didn't specify for the trail. The trail doesn’t log the event.</p>
 *             </li>
 *          </ol>
 *          <p>The following example demonstrates how logging works when you configure logging of Lambda data events for a
 *          Lambda function named <i>MyLambdaFunction</i>, but not for all Lambda functions.</p>
 *          <ol>
 *             <li>
 *                <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the
 *                <i>MyOtherLambdaFunction</i> function.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an Lambda API.
 *                It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for
 *                <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an Lambda API.
 *                Because the CloudTrail user did not specify logging data events for all Lambda functions,
 *                the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail.
 *                The trail doesn’t log the event. </p>
 *             </li>
 *          </ol>
 */
export interface DataResource {
  /**
   * <p>The resource type in which you want to log data events. You can specify
   *             <code>AWS::S3::Object</code>, <code>AWS::Lambda::Function</code>, or
   *             <code>AWS::DynamoDB::Table</code> resources.</p>
   *          <p>The <code>AWS::S3Outposts::Object</code>, <code>AWS::ManagedBlockchain::Node</code>,
   *             <code>AWS::S3ObjectLambda::AccessPoint</code>, and <code>AWS::EC2::Snapshot</code> resource types are not valid in basic
   *          event selectors. To log data events on these resource types, use advanced event
   *          selectors.</p>
   */
  Type?: string;

  /**
   * <p>An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.</p>
   *          <ul>
   *             <li>
   *                <p>To log data events for all objects in all S3 buckets in your Amazon Web Services account, specify the
   *          prefix as <code>arn:aws:s3:::</code>.</p>
   *                <note>
   *                   <p>This also enables logging of data event activity performed by any user or role in your Amazon Web Services account,
   *          even if that activity is performed on a bucket that belongs to another Amazon Web Services account.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>To log data events for all objects in an S3 bucket, specify the bucket and an empty
   *          object prefix such as <code>arn:aws:s3:::bucket-1/</code>. The trail logs data events for
   *          all objects in this S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>To log data events for specific objects, specify the S3 bucket and object prefix such
   *          as <code>arn:aws:s3:::bucket-1/example-images</code>. The trail logs data events for
   *          objects in this S3 bucket that match the prefix.</p>
   *             </li>
   *             <li>
   *                <p>To log data events for all Lambda functions in your Amazon Web Services account, specify the prefix as
   *                   <code>arn:aws:lambda</code>.</p>
   *                <note>
   *                   <p>This also enables logging of <code>Invoke</code> activity performed by any user or role in your Amazon Web Services account,
   *          even if that activity is performed on a function that belongs to another Amazon Web Services account. </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>To log data events for a specific Lambda function, specify the function ARN.</p>
   *                <note>
   *                   <p>Lambda function ARNs are exact. For example, if you specify a
   *             function ARN <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld</i>, data events will
   *             only be logged for <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld</i>. They will
   *             not be logged for <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld2</i>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>To log data events for all DynamoDB tables in your Amazon Web Services account, specify the prefix
   *                as <code>arn:aws:dynamodb</code>.</p>
   *             </li>
   *          </ul>
   */
  Values?: string[];
}

export namespace DataResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataResource): any => ({
    ...obj,
  });
}

export enum ReadWriteType {
  All = "All",
  ReadOnly = "ReadOnly",
  WriteOnly = "WriteOnly",
}

/**
 * <p>Use event selectors to further specify the management and data event settings for your trail. By
 *          default, trails created without specific event selectors will be configured to log all read and
 *          write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector
 *          for all trails. For each trail, if the event matches any event selector, the trail
 *          processes and logs the event. If the event doesn't match any event selector, the trail
 *          doesn't log the event.</p>
 *          <p>You can configure up to five event selectors for a trail.</p>
 *          <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
 */
export interface EventSelector {
  /**
   * <p>Specify if you want your trail to log read-only events, write-only events, or all. For example,
   *          the EC2 <code>GetConsoleOutput</code> is a read-only API operation and
   *             <code>RunInstances</code> is a write-only API operation.</p>
   *          <p> By default, the value is <code>All</code>.</p>
   */
  ReadWriteType?: ReadWriteType | string;

  /**
   * <p>Specify if you want your event selector to include management events for your trail.</p>
   *          <p>
   *          For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-management-events">Management Events</a> in the <i>CloudTrail User Guide</i>.</p>
   *
   *          <p>By default, the value is <code>true</code>.</p>
   *          <p>The first copy of management events is free. You are charged for additional copies of management
   *          events that you are logging on any subsequent trail in the same region. For more information about
   *          CloudTrail pricing, see <a href="http://aws.amazon.com/cloudtrail/pricing/">CloudTrail Pricing</a>.</p>
   */
  IncludeManagementEvents?: boolean;

  /**
   * <p>CloudTrail supports data event logging for Amazon S3 objects, Lambda functions,
   *          and Amazon DynamoDB tables
   *          with basic event selectors. You can specify up to 250 resources for an individual event
   *          selector, but the total number of data resources cannot exceed 250 across all event
   *          selectors in a trail. This limit does not apply if you configure resource logging for all
   *          data events.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-data-events">Data Events</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in CloudTrail</a>
   *          in the <i>CloudTrail User Guide</i>.</p>
   */
  DataResources?: DataResource[];

  /**
   * <p>An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter),
   *          or it can filter out Key Management Service or Amazon RDS Data API events by
   *          containing <code>kms.amazonaws.com</code> or <code>rdsdata.amazonaws.com</code>. By default, <code>ExcludeManagementEventSources</code> is empty, and KMS and
   *          Amazon RDS Data API events are logged to your trail.</p>
   */
  ExcludeManagementEventSources?: string[];
}

export namespace EventSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSelector): any => ({
    ...obj,
  });
}

export interface GetEventSelectorsResponse {
  /**
   * <p>The specified trail ARN that has the event selectors.</p>
   */
  TrailARN?: string;

  /**
   * <p>The event selectors that are configured for the trail.</p>
   */
  EventSelectors?: EventSelector[];

  /**
   * <p>
   *          The advanced event selectors that are configured for the trail.
   *       </p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

export namespace GetEventSelectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventSelectorsResponse): any => ({
    ...obj,
  });
}

export interface GetInsightSelectorsRequest {
  /**
   * <p>Specifies the name of the trail or trail ARN. If you specify a trail name, the
   *          string must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p>
   *             </li>
   *             <li>
   *                <p>Start with a letter or number, and end with a letter or number</p>
   *             </li>
   *             <li>
   *                <p>Be between 3 and 128 characters</p>
   *             </li>
   *             <li>
   *                <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code>
   *                and <code>my--namespace</code> are not valid.</p>
   *             </li>
   *             <li>
   *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
   *             </li>
   *          </ul>
   *          <p>If you specify a trail ARN, it must be in the format:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailName: string | undefined;
}

export namespace GetInsightSelectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightSelectorsRequest): any => ({
    ...obj,
  });
}

export enum InsightType {
  ApiCallRateInsight = "ApiCallRateInsight",
}

/**
 * <p>A JSON string that contains a list of insight types that are logged on a trail.</p>
 */
export interface InsightSelector {
  /**
   * <p>The type of Insights events to log on a trail. The valid Insights type in this release is <code>ApiCallRateInsight</code>.</p>
   */
  InsightType?: InsightType | string;
}

export namespace InsightSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightSelector): any => ({
    ...obj,
  });
}

export interface GetInsightSelectorsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to get Insights selectors.</p>
   */
  TrailARN?: string;

  /**
   * <p>A JSON string that contains the insight types you want to log on a trail. In this release, only <code>ApiCallRateInsight</code> is supported as an insight type.</p>
   */
  InsightSelectors?: InsightSelector[];
}

export namespace GetInsightSelectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightSelectorsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code>.</p>
 */
export interface InsightNotEnabledException extends __SmithyException, $MetadataBearer {
  name: "InsightNotEnabledException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsightNotEnabledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightNotEnabledException): any => ({
    ...obj,
  });
}

export interface GetTrailRequest {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve settings information.</p>
   */
  Name: string | undefined;
}

export namespace GetTrailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrailRequest): any => ({
    ...obj,
  });
}

export interface GetTrailResponse {
  /**
   * <p>The settings for a trail.</p>
   */
  Trail?: Trail;
}

export namespace GetTrailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrailResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The name of a trail about which you want the current status.</p>
 */
export interface GetTrailStatusRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a
   *          shadow trail (a replication of the trail in another region), you must specify its ARN. The following is the format of a trail ARN.</p>
   *           <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace GetTrailStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrailStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface GetTrailStatusResponse {
  /**
   * <p>Whether the CloudTrail trail is currently logging Amazon Web Services API calls.</p>
   */
  IsLogging?: boolean;

  /**
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver log files
   *          to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket, and does
   *          not occur for requests that time out. To resolve the issue, create a new bucket, and then call
   *             <code>UpdateTrail</code> to specify the new bucket; or fix the existing objects so that
   *          CloudTrail can again write to the bucket.</p>
   *          </note>
   */
  LatestDeliveryError?: string;

  /**
   * <p>Displays any Amazon SNS error that CloudTrail encountered when attempting to send a
   *          notification. For more information about Amazon SNS errors, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon SNS Developer Guide</a>.
   *       </p>
   */
  LatestNotificationError?: string;

  /**
   * <p>Specifies the date and time that CloudTrail last delivered log files to an account's Amazon S3 bucket.</p>
   */
  LatestDeliveryTime?: Date;

  /**
   * <p>Specifies the date and time of the most recent Amazon SNS notification that CloudTrail has written a new log file to an account's Amazon S3 bucket.</p>
   */
  LatestNotificationTime?: Date;

  /**
   * <p>Specifies the most recent date and time when CloudTrail started recording API calls for an Amazon Web Services account.</p>
   */
  StartLoggingTime?: Date;

  /**
   * <p>Specifies the most recent date and time when CloudTrail stopped recording API calls for an Amazon Web Services account.</p>
   */
  StopLoggingTime?: Date;

  /**
   * <p>Displays any CloudWatch Logs error that CloudTrail encountered when attempting to deliver logs to CloudWatch Logs.</p>
   */
  LatestCloudWatchLogsDeliveryError?: string;

  /**
   * <p>Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.</p>
   */
  LatestCloudWatchLogsDeliveryTime?: Date;

  /**
   * <p>Specifies the date and time that CloudTrail last delivered a digest file to an account's Amazon S3 bucket.</p>
   */
  LatestDigestDeliveryTime?: Date;

  /**
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver a digest
   *          file to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket, and does
   *          not occur for requests that time out. To resolve the issue, create a new bucket, and then call
   *             <code>UpdateTrail</code> to specify the new bucket; or fix the existing objects so that
   *             CloudTrail can again write to the bucket.</p>
   *          </note>
   */
  LatestDigestDeliveryError?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestDeliveryAttemptTime?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestNotificationAttemptTime?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestNotificationAttemptSucceeded?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestDeliveryAttemptSucceeded?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  TimeLoggingStarted?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  TimeLoggingStopped?: string;
}

export namespace GetTrailStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTrailStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end time, or the time range is outside the range of possible values.</p>
 */
export interface InvalidTimeRangeException extends __SmithyException, $MetadataBearer {
  name: "InvalidTimeRangeException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTimeRangeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTimeRangeException): any => ({
    ...obj,
  });
}

/**
 * <p>Reserved for future use.</p>
 */
export interface InvalidTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidTokenException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>Requests the public keys for a specified time range.</p>
 */
export interface ListPublicKeysRequest {
  /**
   * <p>Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files.
   *          If not specified, the current time is used, and the current public key is returned.</p>
   */
  StartTime?: Date;

  /**
   * <p>Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not
   *          specified, the current time is used.</p>
   */
  EndTime?: Date;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

export namespace ListPublicKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPublicKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a returned public key.</p>
 */
export interface PublicKey {
  /**
   * <p>The DER encoded public key value in PKCS#1 format.</p>
   */
  Value?: Uint8Array;

  /**
   * <p>The starting time of validity of the public key.</p>
   */
  ValidityStartTime?: Date;

  /**
   * <p>The ending time of validity of the public key.</p>
   */
  ValidityEndTime?: Date;

  /**
   * <p>The fingerprint of the public key.</p>
   */
  Fingerprint?: string;
}

export namespace PublicKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublicKey): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface ListPublicKeysResponse {
  /**
   * <p>Contains an array of PublicKey objects.</p>
   *          <note>
   *             <p>The returned public keys may have validity time ranges that overlap.</p>
   *          </note>
   */
  PublicKeyList?: PublicKey[];

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

export namespace ListPublicKeysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPublicKeysResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a list of trail tags to return.</p>
 */
export interface ListTagsRequest {
  /**
   * <p>Specifies a list of trail ARNs whose tags will be listed. The list has a limit of 20 ARNs. The following is the format of
   *          a trail ARN.</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  ResourceIdList: string[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

export namespace ListTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A resource tag.</p>
 */
export interface ResourceTag {
  /**
   * <p>Specifies the ARN of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>A list of tags.</p>
   */
  TagsList?: Tag[];
}

export namespace ResourceTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTag): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface ListTagsResponse {
  /**
   * <p>A list of resource tags.</p>
   */
  ResourceTagList?: ResourceTag[];

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

export namespace ListTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface ListTrailsRequest {
  /**
   * <p>The token to use to get the next page of results after a previous API call. This token must be passed
   *          in with the same parameters that were specified in the the original call. For example, if the original
   *          call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should
   *          include those same parameters.</p>
   */
  NextToken?: string;
}

export namespace ListTrailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).</p>
 */
export interface TrailInfo {
  /**
   * <p>The ARN of a trail.</p>
   */
  TrailARN?: string;

  /**
   * <p>The name of a trail.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Web Services Region in which a trail was created.</p>
   */
  HomeRegion?: string;
}

export namespace TrailInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrailInfo): any => ({
    ...obj,
  });
}

export interface ListTrailsResponse {
  /**
   * <p>Returns the name, ARN, and home region of trails in the current account.</p>
   */
  Trails?: TrailInfo[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token does not appear,
   *          there are no more results to return. The token must be passed in with the same parameters as the previous call.
   *          For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with
   *          NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

export namespace ListTrailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTrailsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Occurs if an event category that is not valid is specified as a value of <code>EventCategory</code>.</p>
 */
export interface InvalidEventCategoryException extends __SmithyException, $MetadataBearer {
  name: "InvalidEventCategoryException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidEventCategoryException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidEventCategoryException): any => ({
    ...obj,
  });
}

/**
 * <p>Occurs when a lookup attribute is specified that is not valid.</p>
 */
export interface InvalidLookupAttributesException extends __SmithyException, $MetadataBearer {
  name: "InvalidLookupAttributesException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidLookupAttributesException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidLookupAttributesException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown if the limit specified is not valid.</p>
 */
export interface InvalidMaxResultsException extends __SmithyException, $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidMaxResultsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidMaxResultsException): any => ({
    ...obj,
  });
}

/**
 * <p>A token that is not valid, or a token that was previously used in a request with different parameters. This exception is thrown if the token is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export enum EventCategory {
  Insight = "insight",
}

export enum LookupAttributeKey {
  ACCESS_KEY_ID = "AccessKeyId",
  EVENT_ID = "EventId",
  EVENT_NAME = "EventName",
  EVENT_SOURCE = "EventSource",
  READ_ONLY = "ReadOnly",
  RESOURCE_NAME = "ResourceName",
  RESOURCE_TYPE = "ResourceType",
  USERNAME = "Username",
}

/**
 * <p>Specifies an attribute and value that filter the events returned.</p>
 */
export interface LookupAttribute {
  /**
   * <p>Specifies an attribute on which to filter the events returned.</p>
   */
  AttributeKey: LookupAttributeKey | string | undefined;

  /**
   * <p>Specifies a value for the specified AttributeKey.</p>
   */
  AttributeValue: string | undefined;
}

export namespace LookupAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LookupAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a request for LookupEvents.</p>
 */
export interface LookupEventsRequest {
  /**
   * <p>Contains a list of lookup attributes. Currently the list can contain only one item.</p>
   */
  LookupAttributes?: LookupAttribute[];

  /**
   * <p>Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.</p>
   */
  StartTime?: Date;

  /**
   * <p>Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned.</p>
   */
  EndTime?: Date;

  /**
   * <p>Specifies the event category. If you do not specify an event category, events of the category are not returned in the response. For example,
   *          if you do not specify <code>insight</code> as the value of <code>EventCategory</code>, no Insights events are returned.</p>
   */
  EventCategory?: EventCategory | string;

  /**
   * <p>The number of events to return. Possible values are 1 through 50. The default is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the the original call.
   *          For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

export namespace LookupEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LookupEventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the type and name of a resource referenced by an event.</p>
 */
export interface Resource {
  /**
   * <p>The type of a resource referenced by the event returned. When the resource type cannot be
   *          determined, null is returned. Some examples of resource types are: <b>Instance</b> for EC2,
   *          <b>Trail</b> for CloudTrail, <b>DBInstance</b> for Amazon RDS, and <b>AccessKey</b> for IAM.
   *          To learn more about how to look up and filter events by the resource types supported for a service, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html#filtering-cloudtrail-events">Filtering CloudTrail Events</a>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The name of the resource referenced by the event returned. These are user-created names whose values will depend on the environment. For example, the resource name might be "auto-scaling-test-group" for an Auto Scaling Group or "i-1234567" for an EC2 Instance.</p>
   */
  ResourceName?: string;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.</p>
 */
export interface Event {
  /**
   * <p>The CloudTrail ID of the event returned.</p>
   */
  EventId?: string;

  /**
   * <p>The name of the event returned.</p>
   */
  EventName?: string;

  /**
   * <p>Information about whether the event is a write event or a read event. </p>
   */
  ReadOnly?: string;

  /**
   * <p>The Amazon Web Services access key ID that was used to sign the request. If the request was made
   *          with temporary security credentials, this is the access key ID of the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The date and time of the event returned.</p>
   */
  EventTime?: Date;

  /**
   * <p>The Amazon Web Services service to which the request was made.</p>
   */
  EventSource?: string;

  /**
   * <p>A user name or role name of the requester that called the API in the event returned.</p>
   */
  Username?: string;

  /**
   * <p>A list of resources referenced by the event returned.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A JSON string that contains a representation of the event returned.</p>
   */
  CloudTrailEvent?: string;
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a response to a LookupEvents action.</p>
 */
export interface LookupEventsResponse {
  /**
   * <p>A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed first.</p>
   */
  Events?: Event[];

  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token does not appear,
   *          there are no more results to return. The token must be passed in with the same parameters as the previous call.
   *          For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with
   *          NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

export namespace LookupEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LookupEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called with a number of event
 *          selectors, advanced event selectors, or data resources that is not valid. The combination of event selectors or advanced event selectors and
 *          data resources is not valid. A trail can have up to 5 event selectors. If a trail uses advanced event selectors, a maximum
 *          of 500 total values for all conditions in all advanced event selectors is allowed. A trail is limited to 250 data resources. These data resources can be distributed across event selectors, but the overall total cannot exceed 250.</p>
 *          <p>You can:</p>
 *          <ul>
 *             <li>
 *                <p>Specify a valid number of event selectors (1 to 5) for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid number of data resources (1 to 250) for an event selector.
 *                The limit of number of resources on an individual event selector is configurable up to 250.
 *                However, this upper limit is allowed only if the total number of data resources does not
 *                exceed 250 across all event selectors for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify up to 500 values for all conditions in all advanced event selectors for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid value for a parameter. For example, specifying the <code>ReadWriteType</code>
 *                parameter with a value of <code>read-only</code> is not valid.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidEventSelectorsException extends __SmithyException, $MetadataBearer {
  name: "InvalidEventSelectorsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidEventSelectorsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidEventSelectorsException): any => ({
    ...obj,
  });
}

export interface PutEventSelectorsRequest {
  /**
   * <p>Specifies the name of the trail or trail ARN. If you specify a trail name, the
   *          string must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p>
   *             </li>
   *             <li>
   *                <p>Start with a letter or number, and end with a letter or number</p>
   *             </li>
   *             <li>
   *                <p>Be between 3 and 128 characters</p>
   *             </li>
   *             <li>
   *                <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code>
   *                and <code>my--namespace</code> are not valid.</p>
   *             </li>
   *             <li>
   *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
   *             </li>
   *          </ul>
   *          <p>If you specify a trail ARN, it must be in the following format.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailName: string | undefined;

  /**
   * <p>Specifies the settings for your event selectors. You can configure up to five event selectors for a trail.
   *          You can use either <code>EventSelectors</code> or <code>AdvancedEventSelectors</code> in a <code>PutEventSelectors</code> request, but not both.
   *          If you apply <code>EventSelectors</code> to a trail, any existing <code>AdvancedEventSelectors</code> are overwritten.</p>
   */
  EventSelectors?: EventSelector[];

  /**
   * <p>
   *          Specifies the settings for advanced event selectors. You can add advanced event selectors, and conditions for your advanced
   *          event selectors, up to a maximum of 500 values for all conditions and selectors on a trail.
   *          You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code>
   *          to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about
   *          advanced event selectors, see
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging
   *             data events for trails</a> in the <i>CloudTrail User Guide</i>.
   *       </p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

export namespace PutEventSelectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventSelectorsRequest): any => ({
    ...obj,
  });
}

export interface PutEventSelectorsResponse {
  /**
   * <p>Specifies the ARN of the trail that was updated with event selectors. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies the event selectors configured for your trail.</p>
   */
  EventSelectors?: EventSelector[];

  /**
   * <p>Specifies the advanced event selectors configured for your trail.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

export namespace PutEventSelectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventSelectorsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The formatting or syntax of the <code>InsightSelectors</code> JSON statement in your <code>PutInsightSelectors</code> or <code>GetInsightSelectors</code> request
 *          is not valid, or the specified insight type in the <code>InsightSelectors</code> statement is not a valid insight type.</p>
 */
export interface InvalidInsightSelectorsException extends __SmithyException, $MetadataBearer {
  name: "InvalidInsightSelectorsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidInsightSelectorsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInsightSelectorsException): any => ({
    ...obj,
  });
}

export interface PutInsightSelectorsRequest {
  /**
   * <p>The name of the CloudTrail trail for which you want to change or add Insights selectors.</p>
   */
  TrailName: string | undefined;

  /**
   * <p>A JSON string that contains the Insights types that you want to log on a trail. The valid Insights type in this release is <code>ApiCallRateInsight</code>.</p>
   */
  InsightSelectors: InsightSelector[] | undefined;
}

export namespace PutInsightSelectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutInsightSelectorsRequest): any => ({
    ...obj,
  });
}

export interface PutInsightSelectorsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to change or add Insights selectors.</p>
   */
  TrailARN?: string;

  /**
   * <p>A JSON string that contains the Insights event types that you want to log on a trail. The valid Insights type in this release is <code>ApiCallRateInsight</code>.</p>
   */
  InsightSelectors?: InsightSelector[];
}

export namespace PutInsightSelectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutInsightSelectorsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the tags to remove from a trail.</p>
 */
export interface RemoveTagsRequest {
  /**
   * <p>Specifies the ARN of the trail from which tags should be removed. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Specifies a list of tags to be removed.</p>
   */
  TagsList?: Tag[];
}

export namespace RemoveTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface RemoveTagsResponse {}

export namespace RemoveTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request to CloudTrail to start logging Amazon Web Services API calls for an account.</p>
 */
export interface StartLoggingRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs Amazon Web Services API calls.
   *          The following is the format of a trail ARN.</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace StartLoggingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartLoggingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface StartLoggingResponse {}

export namespace StartLoggingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartLoggingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.</p>
 */
export interface StopLoggingRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging Amazon Web Services
   *          API calls. The following is the format of a trail ARN.</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace StopLoggingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopLoggingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface StopLoggingResponse {}

export namespace StopLoggingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopLoggingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies settings to update for the trail.</p>
 */
export interface UpdateTrailRequest {
  /**
   * <p>Specifies the name of the trail or trail ARN. If <code>Name</code> is a trail name, the
   *          string must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p>
   *             </li>
   *             <li>
   *                <p>Start with a letter or number, and end with a letter or number</p>
   *             </li>
   *             <li>
   *                <p>Be between 3 and 128 characters</p>
   *             </li>
   *             <li>
   *                <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code>
   *             and <code>my--namespace</code> are not valid.</p>
   *             </li>
   *             <li>
   *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
   *             </li>
   *          </ul>
   *          <p>If <code>Name</code> is a trail ARN, it must be in the following format.</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated
   *          for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true,
   *          shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region
   *          where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider
   *          using trails that log events in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies whether log file validation is enabled. The default is false.</p>
   *          <note>
   *             <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail
   *             does not create digest files for log files that were delivered during a period in which log file integrity validation
   *             was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on
   *             January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon
   *             on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p>
   *          </note>
   */
  EnableLogFileValidation?: boolean;

  /**
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The
   *          value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully
   *          specified ARN to a key, or a globally unique identifier.</p>
   *          <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys,
   *          see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>alias/MyAliasName</p>
   *             </li>
   *             <li>
   *                <p>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</p>
   *             </li>
   *             <li>
   *                <p>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</p>
   *             </li>
   *             <li>
   *                <p>12345678-1234-1234-1234-123456789012</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account.
   *          The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account for an organization in
   *          Organizations. If the trail is not an organization trail and this is set to <code>true</code>, the trail will be created in all Amazon Web Services accounts that belong
   *          to the organization. If the trail is an organization trail and this is set to <code>false</code>, the trail will remain in the current Amazon Web Services account but be
   *          deleted from all member accounts in the organization.</p>
   */
  IsOrganizationTrail?: boolean;
}

export namespace UpdateTrailRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrailRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface UpdateTrailResponse {
  /**
   * <p>Specifies the name of the trail.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated
   *          for log file delivery.
   *          For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your IAM Log Files</a>.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @deprecated
   *
   * <p>This field is no longer in use. Use <a>UpdateTrailResponse$SnsTopicARN</a>.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications
   *          when log files are delivered. The following is the format of a topic ARN.</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists in one region or in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies the ARN of the trail that was updated. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs are delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format.</p>
   *
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}

export namespace UpdateTrailResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTrailResponse): any => ({
    ...obj,
  });
}
