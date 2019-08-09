import { CloudTrailClient } from "./CloudTrailClient";
import { AddTagsInput } from "./types/AddTagsInput";
import { AddTagsOutput } from "./types/AddTagsOutput";
import { CloudTrailARNInvalidException } from "./types/CloudTrailARNInvalidException";
import { CloudTrailAccessNotEnabledException } from "./types/CloudTrailAccessNotEnabledException";
import { CloudWatchLogsDeliveryUnavailableException } from "./types/CloudWatchLogsDeliveryUnavailableException";
import { CreateTrailInput } from "./types/CreateTrailInput";
import { CreateTrailOutput } from "./types/CreateTrailOutput";
import { DeleteTrailInput } from "./types/DeleteTrailInput";
import { DeleteTrailOutput } from "./types/DeleteTrailOutput";
import { DescribeTrailsInput } from "./types/DescribeTrailsInput";
import { DescribeTrailsOutput } from "./types/DescribeTrailsOutput";
import { GetEventSelectorsInput } from "./types/GetEventSelectorsInput";
import { GetEventSelectorsOutput } from "./types/GetEventSelectorsOutput";
import { GetTrailStatusInput } from "./types/GetTrailStatusInput";
import { GetTrailStatusOutput } from "./types/GetTrailStatusOutput";
import { InsufficientDependencyServiceAccessPermissionException } from "./types/InsufficientDependencyServiceAccessPermissionException";
import { InsufficientEncryptionPolicyException } from "./types/InsufficientEncryptionPolicyException";
import { InsufficientS3BucketPolicyException } from "./types/InsufficientS3BucketPolicyException";
import { InsufficientSnsTopicPolicyException } from "./types/InsufficientSnsTopicPolicyException";
import { InvalidCloudWatchLogsLogGroupArnException } from "./types/InvalidCloudWatchLogsLogGroupArnException";
import { InvalidCloudWatchLogsRoleArnException } from "./types/InvalidCloudWatchLogsRoleArnException";
import { InvalidEventSelectorsException } from "./types/InvalidEventSelectorsException";
import { InvalidHomeRegionException } from "./types/InvalidHomeRegionException";
import { InvalidKmsKeyIdException } from "./types/InvalidKmsKeyIdException";
import { InvalidLookupAttributesException } from "./types/InvalidLookupAttributesException";
import { InvalidMaxResultsException } from "./types/InvalidMaxResultsException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterCombinationException } from "./types/InvalidParameterCombinationException";
import { InvalidS3BucketNameException } from "./types/InvalidS3BucketNameException";
import { InvalidS3PrefixException } from "./types/InvalidS3PrefixException";
import { InvalidSnsTopicNameException } from "./types/InvalidSnsTopicNameException";
import { InvalidTagParameterException } from "./types/InvalidTagParameterException";
import { InvalidTimeRangeException } from "./types/InvalidTimeRangeException";
import { InvalidTokenException } from "./types/InvalidTokenException";
import { InvalidTrailNameException } from "./types/InvalidTrailNameException";
import { KmsException } from "./types/KmsException";
import { KmsKeyDisabledException } from "./types/KmsKeyDisabledException";
import { KmsKeyNotFoundException } from "./types/KmsKeyNotFoundException";
import { ListPublicKeysInput } from "./types/ListPublicKeysInput";
import { ListPublicKeysOutput } from "./types/ListPublicKeysOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { LookupEventsInput } from "./types/LookupEventsInput";
import { LookupEventsOutput } from "./types/LookupEventsOutput";
import { MaximumNumberOfTrailsExceededException } from "./types/MaximumNumberOfTrailsExceededException";
import { NotOrganizationMasterAccountException } from "./types/NotOrganizationMasterAccountException";
import { OperationNotPermittedException } from "./types/OperationNotPermittedException";
import { OrganizationNotInAllFeaturesModeException } from "./types/OrganizationNotInAllFeaturesModeException";
import { OrganizationsNotInUseException } from "./types/OrganizationsNotInUseException";
import { PutEventSelectorsInput } from "./types/PutEventSelectorsInput";
import { PutEventSelectorsOutput } from "./types/PutEventSelectorsOutput";
import { RemoveTagsInput } from "./types/RemoveTagsInput";
import { RemoveTagsOutput } from "./types/RemoveTagsOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceTypeNotSupportedException } from "./types/ResourceTypeNotSupportedException";
import { S3BucketDoesNotExistException } from "./types/S3BucketDoesNotExistException";
import { StartLoggingInput } from "./types/StartLoggingInput";
import { StartLoggingOutput } from "./types/StartLoggingOutput";
import { StopLoggingInput } from "./types/StopLoggingInput";
import { StopLoggingOutput } from "./types/StopLoggingOutput";
import { TagsLimitExceededException } from "./types/TagsLimitExceededException";
import { TrailAlreadyExistsException } from "./types/TrailAlreadyExistsException";
import { TrailNotFoundException } from "./types/TrailNotFoundException";
import { TrailNotProvidedException } from "./types/TrailNotProvidedException";
import { UnsupportedOperationException } from "./types/UnsupportedOperationException";
import { UpdateTrailInput } from "./types/UpdateTrailInput";
import { UpdateTrailOutput } from "./types/UpdateTrailOutput";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CreateTrailCommand } from "./commands/CreateTrailCommand";
import { DeleteTrailCommand } from "./commands/DeleteTrailCommand";
import { DescribeTrailsCommand } from "./commands/DescribeTrailsCommand";
import { GetEventSelectorsCommand } from "./commands/GetEventSelectorsCommand";
import { GetTrailStatusCommand } from "./commands/GetTrailStatusCommand";
import { ListPublicKeysCommand } from "./commands/ListPublicKeysCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { LookupEventsCommand } from "./commands/LookupEventsCommand";
import { PutEventSelectorsCommand } from "./commands/PutEventSelectorsCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { StartLoggingCommand } from "./commands/StartLoggingCommand";
import { StopLoggingCommand } from "./commands/StopLoggingCommand";
import { UpdateTrailCommand } from "./commands/UpdateTrailCommand";

export class CloudTrail extends CloudTrailClient {
  /**
   * <p>Adds one or more tags to a trail, up to a limit of 50. Tags must be unique per trail. Overwrites an existing tag's value when a new value is specified for an existing tag key. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail that applies to all regions only from the region in which the trail was created (that is, from its home region).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the specified resource is not found.</p>
   *   - {CloudTrailARNInvalidException} <p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
   *   - {ResourceTypeNotSupportedException} <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
   *   - {TagsLimitExceededException} <p>The number of tags per trail has exceeded the permitted amount. Currently, the limit is 50.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {InvalidTagParameterException} <p>This exception is thrown when the key or value specified for the tag does not match the regular expression <code>^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$</code>.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
  public addTags(
    args: AddTagsInput,
    cb: (err: any, data?: AddTagsOutput) => void
  ): void;
  public addTags(
    args: AddTagsInput,
    cb?: (err: any, data?: AddTagsOutput) => void
  ): Promise<AddTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. A maximum of five trails can exist in a region, irrespective of the region in which they were created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MaximumNumberOfTrailsExceededException} <p>This exception is thrown when the maximum number of trails is reached.</p>
   *   - {TrailAlreadyExistsException} <p>This exception is thrown when the specified trail already exists.</p>
   *   - {S3BucketDoesNotExistException} <p>This exception is thrown when the specified S3 bucket does not exist.</p>
   *   - {InsufficientS3BucketPolicyException} <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
   *   - {InsufficientSnsTopicPolicyException} <p>This exception is thrown when the policy on the SNS topic is not sufficient.</p>
   *   - {InsufficientEncryptionPolicyException} <p>This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.</p>
   *   - {InvalidS3BucketNameException} <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
   *   - {InvalidS3PrefixException} <p>This exception is thrown when the provided S3 prefix is not valid.</p>
   *   - {InvalidSnsTopicNameException} <p>This exception is thrown when the provided SNS topic name is not valid.</p>
   *   - {InvalidKmsKeyIdException} <p>This exception is thrown when the KMS key ARN is invalid.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {TrailNotProvidedException} <p>This exception is deprecated.</p>
   *   - {InvalidParameterCombinationException} <p>This exception is thrown when the combination of parameters provided is not valid.</p>
   *   - {KmsKeyNotFoundException} <p>This exception is thrown when the KMS key does not exist, or when the S3 bucket and the KMS key are not in the same region.</p>
   *   - {KmsKeyDisabledException} <p>This exception is deprecated.</p>
   *   - {KmsException} <p>This exception is thrown when there is an issue with the specified KMS key and the trail can’t be updated.</p>
   *   - {InvalidCloudWatchLogsLogGroupArnException} <p>This exception is thrown when the provided CloudWatch log group is not valid.</p>
   *   - {InvalidCloudWatchLogsRoleArnException} <p>This exception is thrown when the provided role is not valid.</p>
   *   - {CloudWatchLogsDeliveryUnavailableException} <p>Cannot set a CloudWatch Logs delivery for this region.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {CloudTrailAccessNotEnabledException} <p>This exception is thrown when trusted access has not been enabled between AWS CloudTrail and AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other AWS Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
   *   - {InsufficientDependencyServiceAccessPermissionException} <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {OrganizationsNotInUseException} <p>This exception is thrown when the request is made from an AWS account that is not a member of an organization. To make this request, sign in using the credentials of an account that belongs to an organization.</p>
   *   - {OrganizationNotInAllFeaturesModeException} <p>This exception is thrown when AWS Organizations is not configured to support all features. All features must be enabled in AWS Organization to support creating an organization trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createTrail(args: CreateTrailInput): Promise<CreateTrailOutput>;
  public createTrail(
    args: CreateTrailInput,
    cb: (err: any, data?: CreateTrailOutput) => void
  ): void;
  public createTrail(
    args: CreateTrailInput,
    cb?: (err: any, data?: CreateTrailOutput) => void
  ): Promise<CreateTrailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTrailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {InvalidHomeRegionException} <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {InsufficientDependencyServiceAccessPermissionException} <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTrail(args: DeleteTrailInput): Promise<DeleteTrailOutput>;
  public deleteTrail(
    args: DeleteTrailInput,
    cb: (err: any, data?: DeleteTrailOutput) => void
  ): void;
  public deleteTrail(
    args: DeleteTrailInput,
    cb?: (err: any, data?: DeleteTrailOutput) => void
  ): Promise<DeleteTrailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTrailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves settings for the trail associated with the current region for your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTrails(
    args: DescribeTrailsInput
  ): Promise<DescribeTrailsOutput>;
  public describeTrails(
    args: DescribeTrailsInput,
    cb: (err: any, data?: DescribeTrailsOutput) => void
  ): void;
  public describeTrails(
    args: DescribeTrailsInput,
    cb?: (err: any, data?: DescribeTrailsOutput) => void
  ): Promise<DescribeTrailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTrailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions that you are logging for data events.</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getEventSelectors(
    args: GetEventSelectorsInput
  ): Promise<GetEventSelectorsOutput>;
  public getEventSelectors(
    args: GetEventSelectorsInput,
    cb: (err: any, data?: GetEventSelectorsOutput) => void
  ): void;
  public getEventSelectors(
    args: GetEventSelectorsInput,
    cb?: (err: any, data?: GetEventSelectorsOutput) => void
  ): Promise<GetEventSelectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetEventSelectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTrailStatus(
    args: GetTrailStatusInput
  ): Promise<GetTrailStatusOutput>;
  public getTrailStatus(
    args: GetTrailStatusInput,
    cb: (err: any, data?: GetTrailStatusOutput) => void
  ): void;
  public getTrailStatus(
    args: GetTrailStatusInput,
    cb?: (err: any, data?: GetTrailStatusOutput) => void
  ): Promise<GetTrailStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTrailStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidTimeRangeException} <p>Occurs if the timestamp values are invalid. Either the start time occurs after the end time or the time range is outside the range of possible values.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {InvalidTokenException} <p>Reserved for future use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPublicKeys(
    args: ListPublicKeysInput
  ): Promise<ListPublicKeysOutput>;
  public listPublicKeys(
    args: ListPublicKeysInput,
    cb: (err: any, data?: ListPublicKeysOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysInput,
    cb?: (err: any, data?: ListPublicKeysOutput) => void
  ): Promise<ListPublicKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPublicKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags for the trail in the current region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the specified resource is not found.</p>
   *   - {CloudTrailARNInvalidException} <p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
   *   - {ResourceTypeNotSupportedException} <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {InvalidTokenException} <p>Reserved for future use.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> captured by CloudTrail. Events for a region can be looked up in that region during the last 90 days. Lookup supports the following attributes:</p> <ul> <li> <p>AWS access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to one per second per account. If this limit is exceeded, a throttling error occurs.</p> </important> <important> <p>Events that occurred during the selected time range will not be available for lookup if CloudTrail logging was not enabled when the events occurred.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidLookupAttributesException} <p>Occurs when an invalid lookup attribute is specified.</p>
   *   - {InvalidTimeRangeException} <p>Occurs if the timestamp values are invalid. Either the start time occurs after the end time or the time range is outside the range of possible values.</p>
   *   - {InvalidMaxResultsException} <p>This exception is thrown if the limit specified is invalid.</p>
   *   - {InvalidNextTokenException} <p>Invalid token or token that was previously used in a request with different parameters. This exception is thrown if the token is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public lookupEvents(args: LookupEventsInput): Promise<LookupEventsOutput>;
  public lookupEvents(
    args: LookupEventsInput,
    cb: (err: any, data?: LookupEventsOutput) => void
  ): void;
  public lookupEvents(
    args: LookupEventsInput,
    cb?: (err: any, data?: LookupEventsOutput) => void
  ): Promise<LookupEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new LookupEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures an event selector for your trail. Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. </p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event but it doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in AWS CloudTrail</a> in the <i>AWS CloudTrail User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {InvalidHomeRegionException} <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
   *   - {InvalidEventSelectorsException} <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called with a number of event selectors or data resources that is not valid. The combination of event selectors and data resources is not valid. A trail can have up to 5 event selectors. A trail is limited to 250 data resources. These data resources can be distributed across event selectors, but the overall total cannot exceed 250.</p> <p>You can:</p> <ul> <li> <p>Specify a valid number of event selectors (1 to 5) for a trail.</p> </li> <li> <p>Specify a valid number of data resources (1 to 250) for an event selector. The limit of number of resources on an individual event selector is configurable up to 250. However, this upper limit is allowed only if the total number of data resources does not exceed 250 across all event selectors for a trail.</p> </li> <li> <p>Specify a valid value for a parameter. For example, specifying the <code>ReadWriteType</code> parameter with a value of <code>read-only</code> is invalid.</p> </li> </ul>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {InsufficientDependencyServiceAccessPermissionException} <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putEventSelectors(
    args: PutEventSelectorsInput
  ): Promise<PutEventSelectorsOutput>;
  public putEventSelectors(
    args: PutEventSelectorsInput,
    cb: (err: any, data?: PutEventSelectorsOutput) => void
  ): void;
  public putEventSelectors(
    args: PutEventSelectorsInput,
    cb?: (err: any, data?: PutEventSelectorsOutput) => void
  ): Promise<PutEventSelectorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutEventSelectorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from a trail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>This exception is thrown when the specified resource is not found.</p>
   *   - {CloudTrailARNInvalidException} <p>This exception is thrown when an operation is called with an invalid trail ARN. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
   *   - {ResourceTypeNotSupportedException} <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {InvalidTagParameterException} <p>This exception is thrown when the key or value specified for the tag does not match the regular expression <code>^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$</code>.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeTags(args: RemoveTagsInput): Promise<RemoveTagsOutput>;
  public removeTags(
    args: RemoveTagsInput,
    cb: (err: any, data?: RemoveTagsOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsInput,
    cb?: (err: any, data?: RemoveTagsOutput) => void
  ): Promise<RemoveTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {InvalidHomeRegionException} <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {InsufficientDependencyServiceAccessPermissionException} <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startLogging(args: StartLoggingInput): Promise<StartLoggingOutput>;
  public startLogging(
    args: StartLoggingInput,
    cb: (err: any, data?: StartLoggingOutput) => void
  ): void;
  public startLogging(
    args: StartLoggingInput,
    cb?: (err: any, data?: StartLoggingOutput) => void
  ): Promise<StartLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Suspends the recording of AWS API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {InvalidHomeRegionException} <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {InsufficientDependencyServiceAccessPermissionException} <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopLogging(args: StopLoggingInput): Promise<StopLoggingOutput>;
  public stopLogging(
    args: StopLoggingInput,
    cb: (err: any, data?: StopLoggingOutput) => void
  ): void;
  public stopLogging(
    args: StopLoggingInput,
    cb?: (err: any, data?: StopLoggingOutput) => void
  ): Promise<StopLoggingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopLoggingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the settings that specify delivery of log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {S3BucketDoesNotExistException} <p>This exception is thrown when the specified S3 bucket does not exist.</p>
   *   - {InsufficientS3BucketPolicyException} <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
   *   - {InsufficientSnsTopicPolicyException} <p>This exception is thrown when the policy on the SNS topic is not sufficient.</p>
   *   - {InsufficientEncryptionPolicyException} <p>This exception is thrown when the policy on the S3 bucket or KMS key is not sufficient.</p>
   *   - {TrailNotFoundException} <p>This exception is thrown when the trail with the given name is not found.</p>
   *   - {InvalidS3BucketNameException} <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
   *   - {InvalidS3PrefixException} <p>This exception is thrown when the provided S3 prefix is not valid.</p>
   *   - {InvalidSnsTopicNameException} <p>This exception is thrown when the provided SNS topic name is not valid.</p>
   *   - {InvalidKmsKeyIdException} <p>This exception is thrown when the KMS key ARN is invalid.</p>
   *   - {InvalidTrailNameException} <p>This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are invalid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>
   *   - {TrailNotProvidedException} <p>This exception is deprecated.</p>
   *   - {InvalidParameterCombinationException} <p>This exception is thrown when the combination of parameters provided is not valid.</p>
   *   - {InvalidHomeRegionException} <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
   *   - {KmsKeyNotFoundException} <p>This exception is thrown when the KMS key does not exist, or when the S3 bucket and the KMS key are not in the same region.</p>
   *   - {KmsKeyDisabledException} <p>This exception is deprecated.</p>
   *   - {KmsException} <p>This exception is thrown when there is an issue with the specified KMS key and the trail can’t be updated.</p>
   *   - {InvalidCloudWatchLogsLogGroupArnException} <p>This exception is thrown when the provided CloudWatch log group is not valid.</p>
   *   - {InvalidCloudWatchLogsRoleArnException} <p>This exception is thrown when the provided role is not valid.</p>
   *   - {CloudWatchLogsDeliveryUnavailableException} <p>Cannot set a CloudWatch Logs delivery for this region.</p>
   *   - {UnsupportedOperationException} <p>This exception is thrown when the requested operation is not supported.</p>
   *   - {OperationNotPermittedException} <p>This exception is thrown when the requested operation is not permitted.</p>
   *   - {CloudTrailAccessNotEnabledException} <p>This exception is thrown when trusted access has not been enabled between AWS CloudTrail and AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other AWS Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
   *   - {InsufficientDependencyServiceAccessPermissionException} <p>This exception is thrown when the IAM user or role that is used to create the organization trail is lacking one or more required permissions for creating an organization trail in a required service. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {OrganizationsNotInUseException} <p>This exception is thrown when the request is made from an AWS account that is not a member of an organization. To make this request, sign in using the credentials of an account that belongs to an organization.</p>
   *   - {NotOrganizationMasterAccountException} <p>This exception is thrown when the AWS account making the request to create or update an organization trail is not the master account for an organization in AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {OrganizationNotInAllFeaturesModeException} <p>This exception is thrown when AWS Organizations is not configured to support all features. All features must be enabled in AWS Organization to support creating an organization trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTrail(args: UpdateTrailInput): Promise<UpdateTrailOutput>;
  public updateTrail(
    args: UpdateTrailInput,
    cb: (err: any, data?: UpdateTrailOutput) => void
  ): void;
  public updateTrail(
    args: UpdateTrailInput,
    cb?: (err: any, data?: UpdateTrailOutput) => void
  ): Promise<UpdateTrailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTrailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
