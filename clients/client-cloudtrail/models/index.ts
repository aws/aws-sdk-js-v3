import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Specifies the tags to add to a trail.</p>
 */
export interface AddTagsRequest {
  __type?: "AddTagsRequest";
  /**
   * <p>Specifies the ARN of the trail to which one or more tags will be added. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Contains a list of CloudTrail tags, up to a limit of 50</p>
   */
  TagsList?: Array<Tag>;
}

export namespace AddTagsRequest {
  export function isa(o: any): o is AddTagsRequest {
    return __isa(o, "AddTagsRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface AddTagsResponse {
  __type?: "AddTagsResponse";
}

export namespace AddTagsResponse {
  export function isa(o: any): o is AddTagsResponse {
    return __isa(o, "AddTagsResponse");
  }
}

/**
 * <p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p>
 *          <p>
 *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 */
export interface CloudTrailARNInvalidException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudTrailARNInvalidException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudTrailARNInvalidException {
  export function isa(o: any): o is CloudTrailARNInvalidException {
    return __isa(o, "CloudTrailARNInvalidException");
  }
}

/**
 * <p>This exception is thrown when trusted access has not been enabled between AWS CloudTrail and AWS Organizations. For more information,
 *          see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other AWS Services</a>
 *          and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
 */
export interface CloudTrailAccessNotEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudTrailAccessNotEnabledException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudTrailAccessNotEnabledException {
  export function isa(o: any): o is CloudTrailAccessNotEnabledException {
    return __isa(o, "CloudTrailAccessNotEnabledException");
  }
}

/**
 * <p>Cannot set a CloudWatch Logs delivery for this region.</p>
 */
export interface CloudWatchLogsDeliveryUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "CloudWatchLogsDeliveryUnavailableException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace CloudWatchLogsDeliveryUnavailableException {
  export function isa(o: any): o is CloudWatchLogsDeliveryUnavailableException {
    return __isa(o, "CloudWatchLogsDeliveryUnavailableException");
  }
}

/**
 * <p>Specifies the settings for each trail.</p>
 */
export interface CreateTrailRequest {
  __type?: "CreateTrailRequest";
  /**
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group
   *          to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies whether log file integrity validation is enabled. The default is false.</p>
   *          <note>
   *             <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p>
   *          </note>
   */
  EnableLogFileValidation?: boolean;

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
   * <p>Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.
   *       The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in
   *       AWS Organizations.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The
   *          value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully
   *          specified ARN to a key, or a globally unique identifier.</p>
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
   *             and <code>my--namespace</code> are invalid.</p>
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
   * <p>A list of tags.</p>
   */
  TagsList?: Array<Tag>;
}

export namespace CreateTrailRequest {
  export function isa(o: any): o is CreateTrailRequest {
    return __isa(o, "CreateTrailRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface CreateTrailResponse {
  __type?: "CreateTrailResponse";
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists in one region or in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

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
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>This field is no longer in use. Use SnsTopicARN.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the trail that was created. The format of a trail ARN
   *          is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;
}

export namespace CreateTrailResponse {
  export function isa(o: any): o is CreateTrailResponse {
    return __isa(o, "CreateTrailResponse");
  }
}

/**
 * <p>The Amazon S3 buckets or AWS Lambda functions that you specify in your event selectors for your trail to
 *          log data events. Data events provide information about the resource operations performed on or within a resource itself.
 *          These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p>
 *          <note>
 *             <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors,
 *       but the total cannot exceed 250 across all selectors.</p>
 *          </note>
 *          <p>The following example demonstrates how logging works when you configure logging of all data events
 *       for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix,
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
 *          <p>The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a
 *          Lambda function named <i>MyLambdaFunction</i>, but not for all AWS Lambda functions.</p>
 *          <ol>
 *             <li>
 *                <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the
 *                <i>MyOtherLambdaFunction</i> function.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an AWS Lambda API.
 *                It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for
 *                <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event. </p>
 *             </li>
 *             <li>
 *                <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an AWS Lambda API.
 *                Because the CloudTrail user did not specify logging data events for all Lambda functions,
 *                the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail.
 *                The trail doesn’t log the event. </p>
 *             </li>
 *          </ol>
 */
export interface DataResource {
  __type?: "DataResource";
  /**
   * <p>The resource type in which you want to log data events. You can specify <code>AWS::S3::Object</code> or
   *          <code>AWS::Lambda::Function</code> resources.</p>
   */
  Type?: string;

  /**
   * <p>An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.</p>
   *          <ul>
   *             <li>
   *                <p>To log data events for all objects in all S3 buckets in your AWS account, specify the
   *          prefix as <code>arn:aws:s3:::</code>. </p>
   *                <note>
   *                   <p>This will also enable logging of data event activity performed by any user or role in your AWS account,
   *          even if that activity is performed on a bucket that belongs to another AWS account. </p>
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
   *                <p>To log data events for all functions in your AWS account, specify the prefix as
   *       <code>arn:aws:lambda</code>.</p>
   *                <note>
   *                   <p>This will also enable logging of <code>Invoke</code> activity performed by any user or role in your AWS account,
   *             even if that activity is performed on a function that belongs to another AWS account. </p>
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
   *          </ul>
   */
  Values?: Array<string>;
}

export namespace DataResource {
  export function isa(o: any): o is DataResource {
    return __isa(o, "DataResource");
  }
}

/**
 * <p>The request that specifies the name of a trail to delete.</p>
 */
export interface DeleteTrailRequest {
  __type?: "DeleteTrailRequest";
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail to be deleted. The format of a
   *          trail ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace DeleteTrailRequest {
  export function isa(o: any): o is DeleteTrailRequest {
    return __isa(o, "DeleteTrailRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface DeleteTrailResponse {
  __type?: "DeleteTrailResponse";
}

export namespace DeleteTrailResponse {
  export function isa(o: any): o is DeleteTrailResponse {
    return __isa(o, "DeleteTrailResponse");
  }
}

/**
 * <p>Returns information about the trail.</p>
 */
export interface DescribeTrailsRequest {
  __type?: "DescribeTrailsRequest";
  /**
   * <p>Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region,
   *          or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account
   *          and region replication trails will not be returned. The default is true.</p>
   */
  includeShadowTrails?: boolean;

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
  trailNameList?: Array<string>;
}

export namespace DescribeTrailsRequest {
  export function isa(o: any): o is DescribeTrailsRequest {
    return __isa(o, "DescribeTrailsRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface DescribeTrailsResponse {
  __type?: "DescribeTrailsResponse";
  /**
   * <p>The list of trail objects. Trail objects with string values are only returned if values for the objects exist in a trail's configuration.
   *          For example, <code>SNSTopicName</code> and <code>SNSTopicARN</code> are only returned in results if a trail is configured to send SNS notifications. Similarly,
   *       <code>KMSKeyId</code> only appears in results if a trail's log files are encrypted with AWS KMS-managed keys.</p>
   */
  trailList?: Array<Trail>;
}

export namespace DescribeTrailsResponse {
  export function isa(o: any): o is DescribeTrailsResponse {
    return __isa(o, "DescribeTrailsResponse");
  }
}

/**
 * <p>Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The AWS access key ID that was used to sign the request. If the request was made
   *          with temporary security credentials, this is the access key ID of the temporary credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>A JSON string that contains a representation of the event returned.</p>
   */
  CloudTrailEvent?: string;

  /**
   * <p>The CloudTrail ID of the event returned.</p>
   */
  EventId?: string;

  /**
   * <p>The name of the event returned.</p>
   */
  EventName?: string;

  /**
   * <p>The AWS service that the request was made to.</p>
   */
  EventSource?: string;

  /**
   * <p>The date and time of the event returned.</p>
   */
  EventTime?: Date;

  /**
   * <p>Information about whether the event is a write event or a read event. </p>
   */
  ReadOnly?: string;

  /**
   * <p>A list of resources referenced by the event returned.</p>
   */
  Resources?: Array<Resource>;

  /**
   * <p>A user name or role name of the requester that called the API in the event returned.</p>
   */
  Username?: string;
}

export namespace Event {
  export function isa(o: any): o is Event {
    return __isa(o, "Event");
  }
}

export enum EventCategory {
  Insight = "insight"
}

/**
 * <p>Use event selectors to further specify the management and data event settings for your trail. By
 *          default, trails created without specific event selectors will be configured to log all read and
 *          write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector
 *          for all trails. For each trail, if the event matches any event selector, the trail
 *          processes and logs the event. If the event doesn't match any event selector, the trail
 *          doesn't log the event.</p>
 *          <p>You can configure up to five event selectors for a trail.</p>
 */
export interface EventSelector {
  __type?: "EventSelector";
  /**
   * <p>CloudTrail supports data event logging for Amazon S3 objects and AWS Lambda functions. You can specify
   *          up to 250 resources for an individual event selector, but the total number of data resources cannot exceed
   *          250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-data-events">Data Events</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in AWS CloudTrail</a>
   *          in the <i>AWS CloudTrail User Guide</i>.</p>
   */
  DataResources?: Array<DataResource>;

  /**
   * <p>An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by
   *          containing <code>"kms.amazonaws.com"</code>. By default, <code>ExcludeManagementEventSources</code> is empty, and AWS KMS events are included in events that are logged to your trail. </p>
   */
  ExcludeManagementEventSources?: Array<string>;

  /**
   * <p>Specify if you want your event selector to include management events for your trail.</p>
   *          <p>
   *          For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-management-events">Management Events</a> in the <i>AWS CloudTrail User Guide</i>.</p>
   *
   *          <p>By default, the value is <code>true</code>.</p>
   */
  IncludeManagementEvents?: boolean;

  /**
   * <p>Specify if you want your trail to log read-only events, write-only events, or all. For example,
   *          the EC2 <code>GetConsoleOutput</code> is a read-only API operation and
   *             <code>RunInstances</code> is a write-only API operation.</p>
   *          <p> By default, the value is <code>All</code>.</p>
   */
  ReadWriteType?: ReadWriteType | string;
}

export namespace EventSelector {
  export function isa(o: any): o is EventSelector {
    return __isa(o, "EventSelector");
  }
}

export interface GetEventSelectorsRequest {
  __type?: "GetEventSelectorsRequest";
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
  export function isa(o: any): o is GetEventSelectorsRequest {
    return __isa(o, "GetEventSelectorsRequest");
  }
}

export interface GetEventSelectorsResponse {
  __type?: "GetEventSelectorsResponse";
  /**
   * <p>The event selectors that are configured for the trail.</p>
   */
  EventSelectors?: Array<EventSelector>;

  /**
   * <p>The specified trail ARN that has the event selectors.</p>
   */
  TrailARN?: string;
}

export namespace GetEventSelectorsResponse {
  export function isa(o: any): o is GetEventSelectorsResponse {
    return __isa(o, "GetEventSelectorsResponse");
  }
}

export interface GetInsightSelectorsRequest {
  __type?: "GetInsightSelectorsRequest";
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
  export function isa(o: any): o is GetInsightSelectorsRequest {
    return __isa(o, "GetInsightSelectorsRequest");
  }
}

export interface GetInsightSelectorsResponse {
  __type?: "GetInsightSelectorsResponse";
  /**
   * <p>A JSON string that contains the insight types you want to log on a trail. In this release, only <code>ApiCallRateInsight</code> is supported as an insight type.</p>
   */
  InsightSelectors?: Array<InsightSelector>;

  /**
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to get Insights selectors.</p>
   */
  TrailARN?: string;
}

export namespace GetInsightSelectorsResponse {
  export function isa(o: any): o is GetInsightSelectorsResponse {
    return __isa(o, "GetInsightSelectorsResponse");
  }
}

export interface GetTrailRequest {
  __type?: "GetTrailRequest";
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve settings information.</p>
   */
  Name: string | undefined;
}

export namespace GetTrailRequest {
  export function isa(o: any): o is GetTrailRequest {
    return __isa(o, "GetTrailRequest");
  }
}

export interface GetTrailResponse {
  __type?: "GetTrailResponse";
  /**
   * <p>The settings for a trail.</p>
   */
  Trail?: Trail;
}

export namespace GetTrailResponse {
  export function isa(o: any): o is GetTrailResponse {
    return __isa(o, "GetTrailResponse");
  }
}

/**
 * <p>The name of a trail about which you want the current status.</p>
 */
export interface GetTrailStatusRequest {
  __type?: "GetTrailStatusRequest";
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another region), you must specify its ARN. The format of a trail ARN is:</p>
   *           <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace GetTrailStatusRequest {
  export function isa(o: any): o is GetTrailStatusRequest {
    return __isa(o, "GetTrailStatusRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface GetTrailStatusResponse {
  __type?: "GetTrailStatusResponse";
  /**
   * <p>Whether the CloudTrail is currently logging AWS API calls.</p>
   */
  IsLogging?: boolean;

  /**
   * <p>Displays any CloudWatch Logs error that CloudTrail encountered when attempting to deliver logs to CloudWatch Logs.</p>
   */
  LatestCloudWatchLogsDeliveryError?: string;

  /**
   * <p>Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.</p>
   */
  LatestCloudWatchLogsDeliveryTime?: Date;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestDeliveryAttemptSucceeded?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestDeliveryAttemptTime?: string;

  /**
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver log files
   *          to the designated bucket. For more information see the topic <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket and will
   *          not occur for timeouts. To resolve the issue, create a new bucket and call
   *             <code>UpdateTrail</code> to specify the new bucket, or fix the existing objects so that
   *          CloudTrail can again write to the bucket.</p>
   *          </note>
   */
  LatestDeliveryError?: string;

  /**
   * <p>Specifies the date and time that CloudTrail last delivered log files to an account's Amazon S3 bucket.</p>
   */
  LatestDeliveryTime?: Date;

  /**
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting to deliver a digest
   *          file to the designated bucket. For more information see the topic <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket and will
   *          not occur for timeouts. To resolve the issue, create a new bucket and call
   *             <code>UpdateTrail</code> to specify the new bucket, or fix the existing objects so that
   *          CloudTrail can again write to the bucket.</p>
   *          </note>
   */
  LatestDigestDeliveryError?: string;

  /**
   * <p>Specifies the date and time that CloudTrail last delivered a digest file to an account's Amazon S3 bucket.</p>
   */
  LatestDigestDeliveryTime?: Date;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestNotificationAttemptSucceeded?: string;

  /**
   * <p>This field is no longer in use.</p>
   */
  LatestNotificationAttemptTime?: string;

  /**
   * <p>Displays any Amazon SNS error that CloudTrail encountered when attempting to send a
   *          notification. For more information about Amazon SNS errors, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon SNS Developer Guide</a>.
   *       </p>
   */
  LatestNotificationError?: string;

  /**
   * <p>Specifies the date and time of the most recent Amazon SNS notification that CloudTrail has written a new log file to an account's Amazon S3 bucket.</p>
   */
  LatestNotificationTime?: Date;

  /**
   * <p>Specifies the most recent date and time when CloudTrail started recording API calls for an AWS account.</p>
   */
  StartLoggingTime?: Date;

  /**
   * <p>Specifies the most recent date and time when CloudTrail stopped recording API calls for an AWS account.</p>
   */
  StopLoggingTime?: Date;

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
  export function isa(o: any): o is GetTrailStatusResponse {
    return __isa(o, "GetTrailStatusResponse");
  }
}

/**
 * <p>If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code>.</p>
 */
export interface InsightNotEnabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsightNotEnabledException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsightNotEnabledException {
  export function isa(o: any): o is InsightNotEnabledException {
    return __isa(o, "InsightNotEnabledException");
  }
}

/**
 * <p>A JSON string that contains a list of insight types that are logged on a trail.</p>
 */
export interface InsightSelector {
  __type?: "InsightSelector";
  /**
   * <p>The type of insights to log on a trail. In this release, only <code>ApiCallRateInsight</code> is supported as an insight type.</p>
   */
  InsightType?: InsightType | string;
}

export namespace InsightSelector {
  export function isa(o: any): o is InsightSelector {
    return __isa(o, "InsightSelector");
  }
}

export enum InsightType {
  ApiCallRateInsight = "ApiCallRateInsight"
}

/**
 * <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for
 *          creating an organization trail in a required service. For more information, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface InsufficientDependencyServiceAccessPermissionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDependencyServiceAccessPermissionException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientDependencyServiceAccessPermissionException {
  export function isa(
    o: any
  ): o is InsufficientDependencyServiceAccessPermissionException {
    return __isa(o, "InsufficientDependencyServiceAccessPermissionException");
  }
}

/**
 * <p>This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.</p>
 */
export interface InsufficientEncryptionPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientEncryptionPolicyException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientEncryptionPolicyException {
  export function isa(o: any): o is InsufficientEncryptionPolicyException {
    return __isa(o, "InsufficientEncryptionPolicyException");
  }
}

/**
 * <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 */
export interface InsufficientS3BucketPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientS3BucketPolicyException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientS3BucketPolicyException {
  export function isa(o: any): o is InsufficientS3BucketPolicyException {
    return __isa(o, "InsufficientS3BucketPolicyException");
  }
}

/**
 * <p>This exception is thrown when the policy on the SNS topic is not sufficient.</p>
 */
export interface InsufficientSnsTopicPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientSnsTopicPolicyException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InsufficientSnsTopicPolicyException {
  export function isa(o: any): o is InsufficientSnsTopicPolicyException {
    return __isa(o, "InsufficientSnsTopicPolicyException");
  }
}

/**
 * <p>This exception is thrown when the provided CloudWatch log group is not valid.</p>
 */
export interface InvalidCloudWatchLogsLogGroupArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCloudWatchLogsLogGroupArnException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidCloudWatchLogsLogGroupArnException {
  export function isa(o: any): o is InvalidCloudWatchLogsLogGroupArnException {
    return __isa(o, "InvalidCloudWatchLogsLogGroupArnException");
  }
}

/**
 * <p>This exception is thrown when the provided role is not valid.</p>
 */
export interface InvalidCloudWatchLogsRoleArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCloudWatchLogsRoleArnException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidCloudWatchLogsRoleArnException {
  export function isa(o: any): o is InvalidCloudWatchLogsRoleArnException {
    return __isa(o, "InvalidCloudWatchLogsRoleArnException");
  }
}

/**
 * <p>Occurs if an event category that is not valid is specified as a value of <code>EventCategory</code>.</p>
 */
export interface InvalidEventCategoryException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEventCategoryException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidEventCategoryException {
  export function isa(o: any): o is InvalidEventCategoryException {
    return __isa(o, "InvalidEventCategoryException");
  }
}

/**
 * <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called with a number of event selectors or data resources
 *          that is not valid. The combination of event selectors and data resources is not valid. A trail can have up to 5 event selectors. A trail
 *          is limited to 250 data resources. These data resources can be distributed across event selectors, but the overall total cannot exceed 250.</p>
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
 *                <p>Specify a valid value for a parameter. For example, specifying the <code>ReadWriteType</code>
 *                parameter with a value of <code>read-only</code> is invalid.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidEventSelectorsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEventSelectorsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidEventSelectorsException {
  export function isa(o: any): o is InvalidEventSelectorsException {
    return __isa(o, "InvalidEventSelectorsException");
  }
}

/**
 * <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
 */
export interface InvalidHomeRegionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidHomeRegionException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidHomeRegionException {
  export function isa(o: any): o is InvalidHomeRegionException {
    return __isa(o, "InvalidHomeRegionException");
  }
}

/**
 * <p>The formatting or syntax of the <code>InsightSelectors</code> JSON statement in your <code>PutInsightSelectors</code> or <code>GetInsightSelectors</code> request
 *          is not valid, or the specified insight type in the <code>InsightSelectors</code> statement is not a valid insight type.</p>
 */
export interface InvalidInsightSelectorsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInsightSelectorsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidInsightSelectorsException {
  export function isa(o: any): o is InvalidInsightSelectorsException {
    return __isa(o, "InvalidInsightSelectorsException");
  }
}

/**
 * <p>This exception is thrown when the KMS key ARN is invalid.</p>
 */
export interface InvalidKmsKeyIdException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidKmsKeyIdException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidKmsKeyIdException {
  export function isa(o: any): o is InvalidKmsKeyIdException {
    return __isa(o, "InvalidKmsKeyIdException");
  }
}

/**
 * <p>Occurs when an invalid lookup attribute is specified.</p>
 */
export interface InvalidLookupAttributesException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidLookupAttributesException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidLookupAttributesException {
  export function isa(o: any): o is InvalidLookupAttributesException {
    return __isa(o, "InvalidLookupAttributesException");
  }
}

/**
 * <p>This exception is thrown if the limit specified is invalid.</p>
 */
export interface InvalidMaxResultsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidMaxResultsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidMaxResultsException {
  export function isa(o: any): o is InvalidMaxResultsException {
    return __isa(o, "InvalidMaxResultsException");
  }
}

/**
 * <p>Invalid token or token that was previously used in a request with different parameters. This exception is thrown if the token is invalid.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>This exception is thrown when the combination of parameters provided is not valid.</p>
 */
export interface InvalidParameterCombinationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterCombinationException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidParameterCombinationException {
  export function isa(o: any): o is InvalidParameterCombinationException {
    return __isa(o, "InvalidParameterCombinationException");
  }
}

/**
 * <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 */
export interface InvalidS3BucketNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3BucketNameException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidS3BucketNameException {
  export function isa(o: any): o is InvalidS3BucketNameException {
    return __isa(o, "InvalidS3BucketNameException");
  }
}

/**
 * <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 */
export interface InvalidS3PrefixException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3PrefixException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidS3PrefixException {
  export function isa(o: any): o is InvalidS3PrefixException {
    return __isa(o, "InvalidS3PrefixException");
  }
}

/**
 * <p>This exception is thrown when the provided SNS topic name is not valid.</p>
 */
export interface InvalidSnsTopicNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidSnsTopicNameException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidSnsTopicNameException {
  export function isa(o: any): o is InvalidSnsTopicNameException {
    return __isa(o, "InvalidSnsTopicNameException");
  }
}

/**
 * <p>This exception is thrown when the specified tag key or values are not valid.
 *          It can also occur if there are duplicate tags or too many tags on the resource.</p>
 */
export interface InvalidTagParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTagParameterException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTagParameterException {
  export function isa(o: any): o is InvalidTagParameterException {
    return __isa(o, "InvalidTagParameterException");
  }
}

/**
 * <p>Occurs if the timestamp values are invalid. Either the start time occurs after the end time or the time range is outside the range of possible values.</p>
 */
export interface InvalidTimeRangeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTimeRangeException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTimeRangeException {
  export function isa(o: any): o is InvalidTimeRangeException {
    return __isa(o, "InvalidTimeRangeException");
  }
}

/**
 * <p>Reserved for future use.</p>
 */
export interface InvalidTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTokenException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTokenException {
  export function isa(o: any): o is InvalidTokenException {
    return __isa(o, "InvalidTokenException");
  }
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
 *             and <code>my--namespace</code> are invalid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 */
export interface InvalidTrailNameException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTrailNameException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace InvalidTrailNameException {
  export function isa(o: any): o is InvalidTrailNameException {
    return __isa(o, "InvalidTrailNameException");
  }
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
  export function isa(o: any): o is KmsException {
    return __isa(o, "KmsException");
  }
}

/**
 * <p>This exception is no longer in use.</p>
 */
export interface KmsKeyDisabledException
  extends __SmithyException,
    $MetadataBearer {
  name: "KmsKeyDisabledException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace KmsKeyDisabledException {
  export function isa(o: any): o is KmsKeyDisabledException {
    return __isa(o, "KmsKeyDisabledException");
  }
}

/**
 * <p>This exception is thrown when the KMS key does not exist, or when the S3 bucket and the KMS key are not in the same region.</p>
 */
export interface KmsKeyNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "KmsKeyNotFoundException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace KmsKeyNotFoundException {
  export function isa(o: any): o is KmsKeyNotFoundException {
    return __isa(o, "KmsKeyNotFoundException");
  }
}

/**
 * <p>Requests the public keys for a specified time range.</p>
 */
export interface ListPublicKeysRequest {
  __type?: "ListPublicKeysRequest";
  /**
   * <p>Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used.</p>
   */
  EndTime?: Date;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used, and the current public key is returned.</p>
   */
  StartTime?: Date;
}

export namespace ListPublicKeysRequest {
  export function isa(o: any): o is ListPublicKeysRequest {
    return __isa(o, "ListPublicKeysRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface ListPublicKeysResponse {
  __type?: "ListPublicKeysResponse";
  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>Contains an array of PublicKey objects.</p>
   *          <note>
   *             <p>The returned public keys may have validity time ranges that overlap.</p>
   *          </note>
   */
  PublicKeyList?: Array<PublicKey>;
}

export namespace ListPublicKeysResponse {
  export function isa(o: any): o is ListPublicKeysResponse {
    return __isa(o, "ListPublicKeysResponse");
  }
}

/**
 * <p>Specifies a list of trail tags to return.</p>
 */
export interface ListTagsRequest {
  __type?: "ListTagsRequest";
  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies a list of trail ARNs whose tags will be listed. The list has a limit of 20 ARNs. The format of a trail ARN is:</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  ResourceIdList: Array<string> | undefined;
}

export namespace ListTagsRequest {
  export function isa(o: any): o is ListTagsRequest {
    return __isa(o, "ListTagsRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface ListTagsResponse {
  __type?: "ListTagsResponse";
  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of resource tags.</p>
   */
  ResourceTagList?: Array<ResourceTag>;
}

export namespace ListTagsResponse {
  export function isa(o: any): o is ListTagsResponse {
    return __isa(o, "ListTagsResponse");
  }
}

export interface ListTrailsRequest {
  __type?: "ListTrailsRequest";
  /**
   * <p>The token to use to get the next page of results after a previous API call. This token must be passed
   *          in with the same parameters that were specified in the the original call. For example, if the original
   *          call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should
   *          include those same parameters.</p>
   */
  NextToken?: string;
}

export namespace ListTrailsRequest {
  export function isa(o: any): o is ListTrailsRequest {
    return __isa(o, "ListTrailsRequest");
  }
}

export interface ListTrailsResponse {
  __type?: "ListTrailsResponse";
  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token does not appear,
   *          there are no more results to return. The token must be passed in with the same parameters as the previous call.
   *          For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with
   *          NextToken should include those same parameters.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns the name, ARN, and home region of trails in the current account.</p>
   */
  Trails?: Array<TrailInfo>;
}

export namespace ListTrailsResponse {
  export function isa(o: any): o is ListTrailsResponse {
    return __isa(o, "ListTrailsResponse");
  }
}

/**
 * <p>Specifies an attribute and value that filter the events returned.</p>
 */
export interface LookupAttribute {
  __type?: "LookupAttribute";
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
  export function isa(o: any): o is LookupAttribute {
    return __isa(o, "LookupAttribute");
  }
}

export enum LookupAttributeKey {
  ACCESS_KEY_ID = "AccessKeyId",
  EVENT_ID = "EventId",
  EVENT_NAME = "EventName",
  EVENT_SOURCE = "EventSource",
  READ_ONLY = "ReadOnly",
  RESOURCE_NAME = "ResourceName",
  RESOURCE_TYPE = "ResourceType",
  USERNAME = "Username"
}

/**
 * <p>Contains a request for LookupEvents.</p>
 */
export interface LookupEventsRequest {
  __type?: "LookupEventsRequest";
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
   * <p>Contains a list of lookup attributes. Currently the list can contain only one item.</p>
   */
  LookupAttributes?: Array<LookupAttribute>;

  /**
   * <p>The number of events to return. Possible values are 1 through 50. The default is 50.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the the original call.
   *          For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.</p>
   */
  StartTime?: Date;
}

export namespace LookupEventsRequest {
  export function isa(o: any): o is LookupEventsRequest {
    return __isa(o, "LookupEventsRequest");
  }
}

/**
 * <p>Contains a response to a LookupEvents action.</p>
 */
export interface LookupEventsResponse {
  __type?: "LookupEventsResponse";
  /**
   * <p>A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed first.</p>
   */
  Events?: Array<Event>;

  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token does not appear,
   *          there are no more results to return. The token must be passed in with the same parameters as the previous call.
   *          For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with
   *          NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

export namespace LookupEventsResponse {
  export function isa(o: any): o is LookupEventsResponse {
    return __isa(o, "LookupEventsResponse");
  }
}

/**
 * <p>This exception is thrown when the maximum number of trails is reached.</p>
 */
export interface MaximumNumberOfTrailsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "MaximumNumberOfTrailsExceededException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace MaximumNumberOfTrailsExceededException {
  export function isa(o: any): o is MaximumNumberOfTrailsExceededException {
    return __isa(o, "MaximumNumberOfTrailsExceededException");
  }
}

/**
 * <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an
 *          organization in AWS Organizations. For more information, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface NotOrganizationMasterAccountException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotOrganizationMasterAccountException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace NotOrganizationMasterAccountException {
  export function isa(o: any): o is NotOrganizationMasterAccountException {
    return __isa(o, "NotOrganizationMasterAccountException");
  }
}

/**
 * <p>This exception is thrown when the requested operation is not permitted.</p>
 */
export interface OperationNotPermittedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotPermittedException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace OperationNotPermittedException {
  export function isa(o: any): o is OperationNotPermittedException {
    return __isa(o, "OperationNotPermittedException");
  }
}

/**
 * <p>This exception is thrown when AWS Organizations is not configured to support all features. All features must be enabled in AWS Organization to support
 *          creating an organization trail. For more information, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
 */
export interface OrganizationNotInAllFeaturesModeException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationNotInAllFeaturesModeException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace OrganizationNotInAllFeaturesModeException {
  export function isa(o: any): o is OrganizationNotInAllFeaturesModeException {
    return __isa(o, "OrganizationNotInAllFeaturesModeException");
  }
}

/**
 * <p>This exception is thrown when the request is made from an AWS account that is not a member of an organization.
 *          To make this request, sign in using the credentials of an account that belongs to an organization.</p>
 */
export interface OrganizationsNotInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "OrganizationsNotInUseException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace OrganizationsNotInUseException {
  export function isa(o: any): o is OrganizationsNotInUseException {
    return __isa(o, "OrganizationsNotInUseException");
  }
}

/**
 * <p>Contains information about a returned public key.</p>
 */
export interface PublicKey {
  __type?: "PublicKey";
  /**
   * <p>The fingerprint of the public key.</p>
   */
  Fingerprint?: string;

  /**
   * <p>The ending time of validity of the public key.</p>
   */
  ValidityEndTime?: Date;

  /**
   * <p>The starting time of validity of the public key.</p>
   */
  ValidityStartTime?: Date;

  /**
   * <p>The DER encoded public key value in PKCS#1 format.</p>
   */
  Value?: Uint8Array;
}

export namespace PublicKey {
  export function isa(o: any): o is PublicKey {
    return __isa(o, "PublicKey");
  }
}

export interface PutEventSelectorsRequest {
  __type?: "PutEventSelectorsRequest";
  /**
   * <p>Specifies the settings for your event selectors. You can configure up to five event selectors for a trail.</p>
   */
  EventSelectors: Array<EventSelector> | undefined;

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
   *                and <code>my--namespace</code> are invalid.</p>
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

export namespace PutEventSelectorsRequest {
  export function isa(o: any): o is PutEventSelectorsRequest {
    return __isa(o, "PutEventSelectorsRequest");
  }
}

export interface PutEventSelectorsResponse {
  __type?: "PutEventSelectorsResponse";
  /**
   * <p>Specifies the event selectors configured for your trail.</p>
   */
  EventSelectors?: Array<EventSelector>;

  /**
   * <p>Specifies the ARN of the trail that was updated with event selectors. The format of a trail ARN
   *          is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;
}

export namespace PutEventSelectorsResponse {
  export function isa(o: any): o is PutEventSelectorsResponse {
    return __isa(o, "PutEventSelectorsResponse");
  }
}

export interface PutInsightSelectorsRequest {
  __type?: "PutInsightSelectorsRequest";
  /**
   * <p>A JSON string that contains the insight types you want to log on a trail. In this release, only <code>ApiCallRateInsight</code> is supported as an insight type.</p>
   */
  InsightSelectors: Array<InsightSelector> | undefined;

  /**
   * <p>The name of the CloudTrail trail for which you want to change or add Insights selectors.</p>
   */
  TrailName: string | undefined;
}

export namespace PutInsightSelectorsRequest {
  export function isa(o: any): o is PutInsightSelectorsRequest {
    return __isa(o, "PutInsightSelectorsRequest");
  }
}

export interface PutInsightSelectorsResponse {
  __type?: "PutInsightSelectorsResponse";
  /**
   * <p>A JSON string that contains the insight types you want to log on a trail. In this release, only <code>ApiCallRateInsight</code> is supported as an insight type.</p>
   */
  InsightSelectors?: Array<InsightSelector>;

  /**
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to change or add Insights selectors.</p>
   */
  TrailARN?: string;
}

export namespace PutInsightSelectorsResponse {
  export function isa(o: any): o is PutInsightSelectorsResponse {
    return __isa(o, "PutInsightSelectorsResponse");
  }
}

export enum ReadWriteType {
  All = "All",
  ReadOnly = "ReadOnly",
  WriteOnly = "WriteOnly"
}

/**
 * <p>Specifies the tags to remove from a trail.</p>
 */
export interface RemoveTagsRequest {
  __type?: "RemoveTagsRequest";
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
  TagsList?: Array<Tag>;
}

export namespace RemoveTagsRequest {
  export function isa(o: any): o is RemoveTagsRequest {
    return __isa(o, "RemoveTagsRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface RemoveTagsResponse {
  __type?: "RemoveTagsResponse";
}

export namespace RemoveTagsResponse {
  export function isa(o: any): o is RemoveTagsResponse {
    return __isa(o, "RemoveTagsResponse");
  }
}

/**
 * <p>Specifies the type and name of a resource referenced by an event.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The name of the resource referenced by the event returned. These are user-created names whose values will depend on the environment. For example, the resource name might be "auto-scaling-test-group" for an Auto Scaling Group or "i-1234567" for an EC2 Instance.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of a resource referenced by the event returned. When the resource type cannot be
   *          determined, null is returned. Some examples of resource types are: <b>Instance</b> for EC2,
   *             <b>Trail</b> for CloudTrail, <b>DBInstance</b> for RDS, and <b>AccessKey</b> for IAM.
   *          To learn more about how to look up and filter events by the resource types supported for a service, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html#filtering-cloudtrail-events">Filtering CloudTrail Events</a>.</p>
   */
  ResourceType?: string;
}

export namespace Resource {
  export function isa(o: any): o is Resource {
    return __isa(o, "Resource");
  }
}

/**
 * <p>This exception is thrown when the specified resource is not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>A resource tag.</p>
 */
export interface ResourceTag {
  __type?: "ResourceTag";
  /**
   * <p>Specifies the ARN of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>A list of tags.</p>
   */
  TagsList?: Array<Tag>;
}

export namespace ResourceTag {
  export function isa(o: any): o is ResourceTag {
    return __isa(o, "ResourceTag");
  }
}

/**
 * <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 */
export interface ResourceTypeNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceTypeNotSupportedException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace ResourceTypeNotSupportedException {
  export function isa(o: any): o is ResourceTypeNotSupportedException {
    return __isa(o, "ResourceTypeNotSupportedException");
  }
}

/**
 * <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 */
export interface S3BucketDoesNotExistException
  extends __SmithyException,
    $MetadataBearer {
  name: "S3BucketDoesNotExistException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace S3BucketDoesNotExistException {
  export function isa(o: any): o is S3BucketDoesNotExistException {
    return __isa(o, "S3BucketDoesNotExistException");
  }
}

/**
 * <p>The request to CloudTrail to start logging AWS API calls for an account.</p>
 */
export interface StartLoggingRequest {
  __type?: "StartLoggingRequest";
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs AWS API calls. The format of a trail ARN is:</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace StartLoggingRequest {
  export function isa(o: any): o is StartLoggingRequest {
    return __isa(o, "StartLoggingRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface StartLoggingResponse {
  __type?: "StartLoggingResponse";
}

export namespace StartLoggingResponse {
  export function isa(o: any): o is StartLoggingResponse {
    return __isa(o, "StartLoggingResponse");
  }
}

/**
 * <p>Passes the request to CloudTrail to stop logging AWS API calls for the specified account.</p>
 */
export interface StopLoggingRequest {
  __type?: "StopLoggingRequest";
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging AWS API calls. The format of a trail ARN is:</p>
   *             <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

export namespace StopLoggingRequest {
  export function isa(o: any): o is StopLoggingRequest {
    return __isa(o, "StopLoggingRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface StopLoggingResponse {
  __type?: "StopLoggingResponse";
}

export namespace StopLoggingResponse {
  export function isa(o: any): o is StopLoggingResponse {
    return __isa(o, "StopLoggingResponse");
  }
}

/**
 * <p>A custom key-value pair associated with a resource such as a CloudTrail trail.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>The number of tags per trail has exceeded the permitted amount. Currently, the limit is 50.</p>
 */
export interface TagsLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagsLimitExceededException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TagsLimitExceededException {
  export function isa(o: any): o is TagsLimitExceededException {
    return __isa(o, "TagsLimitExceededException");
  }
}

/**
 * <p>The settings for a trail.</p>
 */
export interface Trail {
  __type?: "Trail";
  /**
   * <p>Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies if the trail has custom event selectors.</p>
   */
  HasCustomEventSelectors?: boolean;

  /**
   * <p>Specifies whether a trail has insight types specified in an <code>InsightSelector</code> list.</p>
   */
  HasInsightSelectors?: boolean;

  /**
   * <p>The region in which the trail was created.</p>
   */
  HomeRegion?: string;

  /**
   * <p>Set to <b>True</b> to include AWS API calls from AWS global services such as IAM.
   *          Otherwise, <b>False</b>.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists only in one region or exists in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether log file validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

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
   *          for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.The maximum length is 200 characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications
   *          when log files are delivered. The format of a topic ARN is:</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>This field is no longer in use. Use SnsTopicARN.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the trail. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;
}

export namespace Trail {
  export function isa(o: any): o is Trail {
    return __isa(o, "Trail");
  }
}

/**
 * <p>This exception is thrown when the specified trail already exists.</p>
 */
export interface TrailAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TrailAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TrailAlreadyExistsException {
  export function isa(o: any): o is TrailAlreadyExistsException {
    return __isa(o, "TrailAlreadyExistsException");
  }
}

/**
 * <p>Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).</p>
 */
export interface TrailInfo {
  __type?: "TrailInfo";
  /**
   * <p>The AWS region in which a trail was created.</p>
   */
  HomeRegion?: string;

  /**
   * <p>The name of a trail.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of a trail.</p>
   */
  TrailARN?: string;
}

export namespace TrailInfo {
  export function isa(o: any): o is TrailInfo {
    return __isa(o, "TrailInfo");
  }
}

/**
 * <p>This exception is thrown when the trail with the given name is not found.</p>
 */
export interface TrailNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "TrailNotFoundException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TrailNotFoundException {
  export function isa(o: any): o is TrailNotFoundException {
    return __isa(o, "TrailNotFoundException");
  }
}

/**
 * <p>This exception is no longer in use.</p>
 */
export interface TrailNotProvidedException
  extends __SmithyException,
    $MetadataBearer {
  name: "TrailNotProvidedException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace TrailNotProvidedException {
  export function isa(o: any): o is TrailNotProvidedException {
    return __isa(o, "TrailNotProvidedException");
  }
}

/**
 * <p>This exception is thrown when the requested operation is not supported.</p>
 */
export interface UnsupportedOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
}

export namespace UnsupportedOperationException {
  export function isa(o: any): o is UnsupportedOperationException {
    return __isa(o, "UnsupportedOperationException");
  }
}

/**
 * <p>Specifies settings to update for the trail.</p>
 */
export interface UpdateTrailRequest {
  __type?: "UpdateTrailRequest";
  /**
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies whether log file validation is enabled. The default is false.</p>
   *          <note>
   *             <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail will not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p>
   *          </note>
   */
  EnableLogFileValidation?: boolean;

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
   * <p>Specifies whether the trail is applied to all accounts in an organization in AWS Organizations, or only for the current AWS account.
   *          The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in
   *          AWS Organizations. If the trail is not an organization trail and this is set to true, the trail will be created in all AWS accounts that belong
   *          to the organization. If the trail is an organization trail and this is set to false, the trail will remain in the current AWS account but be
   *          deleted from all member accounts in the organization.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The
   *          value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully
   *          specified ARN to a key, or a globally unique identifier.</p>
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
   *             and <code>my--namespace</code> are invalid.</p>
   *             </li>
   *             <li>
   *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
   *             </li>
   *          </ul>
   *          <p>If <code>Name</code> is a trail ARN, it must be in the format:</p>
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
}

export namespace UpdateTrailRequest {
  export function isa(o: any): o is UpdateTrailRequest {
    return __isa(o, "UpdateTrailRequest");
  }
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface UpdateTrailResponse {
  __type?: "UpdateTrailResponse";
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists in one region or in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p>
   *
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

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
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications
   *          when log files are delivered. The format of a topic ARN is:</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>This field is no longer in use. Use SnsTopicARN.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the trail that was updated. The format of a trail ARN
   *          is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;
}

export namespace UpdateTrailResponse {
  export function isa(o: any): o is UpdateTrailResponse {
    return __isa(o, "UpdateTrailResponse");
  }
}
