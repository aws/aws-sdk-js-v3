// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudTrailServiceException as __BaseException } from "./CloudTrailServiceException";

/**
 * @public
 * <p> This exception is thrown when you start a new import and a previous import is still in
 *          progress. </p>
 */
export class AccountHasOngoingImportException extends __BaseException {
  readonly name: "AccountHasOngoingImportException" = "AccountHasOngoingImportException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountHasOngoingImportException, __BaseException>) {
    super({
      name: "AccountHasOngoingImportException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountHasOngoingImportException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified account is not found or not part of an
 *          organization.</p>
 */
export class AccountNotFoundException extends __BaseException {
  readonly name: "AccountNotFoundException" = "AccountNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotFoundException, __BaseException>) {
    super({
      name: "AccountNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified account is not registered as the CloudTrail delegated administrator.</p>
 */
export class AccountNotRegisteredException extends __BaseException {
  readonly name: "AccountNotRegisteredException" = "AccountNotRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountNotRegisteredException, __BaseException>) {
    super({
      name: "AccountNotRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountNotRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the account is already registered as the CloudTrail
 *          delegated administrator.</p>
 */
export class AccountRegisteredException extends __BaseException {
  readonly name: "AccountRegisteredException" = "AccountRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountRegisteredException, __BaseException>) {
    super({
      name: "AccountRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A custom key-value pair associated with a resource such as a CloudTrail
 *          trail, event data store, or channel.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key in a key-value pair. The key must be must be no longer than 128 Unicode
   *          characters. The key must be unique for the resource to which it applies.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value in a key-value pair of a tag. The value must be no longer than 256 Unicode
   *          characters.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Specifies the tags to add to a trail, event data store, or channel.</p>
 */
export interface AddTagsRequest {
  /**
   * @public
   * <p>Specifies the ARN of the trail, event data store, or channel to which one or more tags will be
   *          added.</p>
   *          <p>The format of a trail ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>The format of an event data store ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>The format of a channel ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Contains a list of tags, up to a limit of 50</p>
   */
  TagsList: Tag[] | undefined;
}

/**
 * @public
 * <p>Returns the objects or data if successful. Otherwise, returns an error.</p>
 */
export interface AddTagsResponse {}

/**
 * @public
 * <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 */
export class ChannelARNInvalidException extends __BaseException {
  readonly name: "ChannelARNInvalidException" = "ChannelARNInvalidException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelARNInvalidException, __BaseException>) {
    super({
      name: "ChannelARNInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelARNInvalidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when CloudTrail cannot find the specified channel.</p>
 */
export class ChannelNotFoundException extends __BaseException {
  readonly name: "ChannelNotFoundException" = "ChannelNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelNotFoundException, __BaseException>) {
    super({
      name: "ChannelNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when an operation is called with a trail ARN that is not valid.
 *          The following is the format of a trail ARN.</p>
 *          <p>
 *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>This exception is also thrown when you call <code>AddTags</code> or <code>RemoveTags</code> on a trail, event data store, or channel with a resource ARN that is not valid.</p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 */
export class CloudTrailARNInvalidException extends __BaseException {
  readonly name: "CloudTrailARNInvalidException" = "CloudTrailARNInvalidException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudTrailARNInvalidException, __BaseException>) {
    super({
      name: "CloudTrailARNInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudTrailARNInvalidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 */
export class EventDataStoreARNInvalidException extends __BaseException {
  readonly name: "EventDataStoreARNInvalidException" = "EventDataStoreARNInvalidException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreARNInvalidException, __BaseException>) {
    super({
      name: "EventDataStoreARNInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreARNInvalidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified event data store was not found.</p>
 */
export class EventDataStoreNotFoundException extends __BaseException {
  readonly name: "EventDataStoreNotFoundException" = "EventDataStoreNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreNotFoundException, __BaseException>) {
    super({
      name: "EventDataStoreNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The event data store is inactive.</p>
 */
export class InactiveEventDataStoreException extends __BaseException {
  readonly name: "InactiveEventDataStoreException" = "InactiveEventDataStoreException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InactiveEventDataStoreException, __BaseException>) {
    super({
      name: "InactiveEventDataStoreException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InactiveEventDataStoreException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified tag key or values are not valid. It can also
 *          occur if there are duplicate tags or too many tags on the resource.</p>
 */
export class InvalidTagParameterException extends __BaseException {
  readonly name: "InvalidTagParameterException" = "InvalidTagParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagParameterException, __BaseException>) {
    super({
      name: "InvalidTagParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the provided trail name is not valid. Trail names must
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
 */
export class InvalidTrailNameException extends __BaseException {
  readonly name: "InvalidTrailNameException" = "InvalidTrailNameException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTrailNameException, __BaseException>) {
    super({
      name: "InvalidTrailNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTrailNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 */
export class NoManagementAccountSLRExistsException extends __BaseException {
  readonly name: "NoManagementAccountSLRExistsException" = "NoManagementAccountSLRExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoManagementAccountSLRExistsException, __BaseException>) {
    super({
      name: "NoManagementAccountSLRExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoManagementAccountSLRExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the Amazon Web Services account making the request to
 *          create or update an organization trail or event data store is not the management account
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store.html">Create an event data store</a>.</p>
 */
export class NotOrganizationMasterAccountException extends __BaseException {
  readonly name: "NotOrganizationMasterAccountException" = "NotOrganizationMasterAccountException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotOrganizationMasterAccountException, __BaseException>) {
    super({
      name: "NotOrganizationMasterAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotOrganizationMasterAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the requested operation is not permitted.</p>
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified resource is not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 */
export class ResourceTypeNotSupportedException extends __BaseException {
  readonly name: "ResourceTypeNotSupportedException" = "ResourceTypeNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceTypeNotSupportedException, __BaseException>) {
    super({
      name: "ResourceTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceTypeNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The number of tags per trail, event data store, or channel has exceeded the permitted amount. Currently, the limit is
 *          50.</p>
 */
export class TagsLimitExceededException extends __BaseException {
  readonly name: "TagsLimitExceededException" = "TagsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagsLimitExceededException, __BaseException>) {
    super({
      name: "TagsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagsLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the requested operation is not supported.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A single selector statement in an advanced event selector.</p>
 */
export interface AdvancedFieldSelector {
  /**
   * @public
   * <p> A field in a CloudTrail event record on which to filter events to be logged. For
   *          event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, the field is used only for
   *          selecting events as filtering is not supported. </p>
   *          <p> For CloudTrail event records, supported fields include <code>readOnly</code>,
   *             <code>eventCategory</code>, <code>eventSource</code> (for management events),
   *             <code>eventName</code>, <code>resources.type</code>, and <code>resources.ARN</code>. </p>
   *          <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, the only supported field is
   *             <code>eventCategory</code>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>readOnly</code>
   *                   </b> - Optional. Can be set to
   *                   <code>Equals</code> a value of <code>true</code> or <code>false</code>. If you do
   *                not add this field, CloudTrail logs both <code>read</code> and
   *                   <code>write</code> events. A value of <code>true</code> logs only
   *                   <code>read</code> events. A value of <code>false</code> logs only
   *                   <code>write</code> events.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>eventSource</code>
   *                   </b> - For filtering
   *                management events only. This can be set only to <code>NotEquals</code>
   *                   <code>kms.amazonaws.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>eventName</code>
   *                   </b> - Can use any operator.
   *                You can use it to ﬁlter in or ﬁlter out any data event logged to CloudTrail,
   *                such as <code>PutBucket</code> or <code>GetSnapshotBlock</code>. You can have
   *                multiple values for this ﬁeld, separated by commas.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>eventCategory</code>
   *                   </b> - This is required and
   *                must be set to <code>Equals</code>.
   *             </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                      For CloudTrail event records, the value
   *                      must be <code>Management</code> or <code>Data</code>.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                      For Config
   *                      configuration items, the value must be <code>ConfigurationItem</code>.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                      For Audit Manager evidence, the value must be <code>Evidence</code>.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                      For non-Amazon Web Services events, the value must be <code>ActivityAuditLog</code>.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>resources.type</code>
   *                   </b> - This ﬁeld is
   *                required for CloudTrail data events. <code>resources.type</code> can only
   *                use the <code>Equals</code> operator, and the value can be one of the
   *                following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DynamoDB::Table</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::Lambda::Function</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::S3::Object</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::CloudTrail::Channel</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::CodeWhisperer::Profile</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::Cognito::IdentityPool</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DynamoDB::Stream</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::Snapshot</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EMRWAL::Workspace</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::FinSpace::Environment</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::Glue::Table</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::GuardDuty::Detector</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::KendraRanking::ExecutionPlan</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ManagedBlockchain::Network</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ManagedBlockchain::Node</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::MedicalImaging::Datastore</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::SageMaker::ExperimentTrialComponent</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::SageMaker::FeatureGroup</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::S3::AccessPoint</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::S3ObjectLambda::AccessPoint</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::S3Outposts::Object</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::SSMMessages::ControlChannel</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::VerifiedPermissions::PolicyStore</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p> You can have only one <code>resources.type</code> ﬁeld per selector. To log data
   *                events on more than one resource type, add another selector.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>resources.ARN</code>
   *                   </b> - You can use any
   *                operator with <code>resources.ARN</code>, but if you use <code>Equals</code> or
   *                   <code>NotEquals</code>, the value must exactly match the ARN of a valid resource
   *                of the type you've speciﬁed in the template as the value of resources.type. For
   *                example, if resources.type equals <code>AWS::S3::Object</code>, the ARN must be in
   *                one of the following formats. To log all data events for all objects in a specific S3
   *                bucket, use the <code>StartsWith</code> operator, and include only the bucket ARN as
   *                the matching value.</p>
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
   *                <p>When resources.type equals <code>AWS::DynamoDB::Table</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:dynamodb:<region>:<account_ID>:table/<table_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::Lambda::Function</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:lambda:<region>:<account_ID>:function:<function_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::CloudTrail::Channel</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:cloudtrail:<region>:<account_ID>:channel/<channel_UUID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::CodeWhisperer::Profile</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:codewhisperer:<region>:<account_ID>:profile/<profile_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::Cognito::IdentityPool</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:cognito-identity:<region>:<account_ID>:identitypool/<identity_pool_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::DynamoDB::Stream</code>, and
   *                the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be
   *                in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:dynamodb:<region>:<account_ID>:table/<table_name>/stream/<date_time></code>
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
   *                <p>When <code>resources.type</code> equals <code>AWS::EMRWAL::Workspace</code>, and the
   *                operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in
   *                the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:emrwal:<region>::workspace/<workspace_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::FinSpace::Environment</code>,
   *                and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN
   *                must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:finspace:<region>:<account_ID>:environment/<environment_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::Glue::Table</code>, and the
   *                operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in
   *                the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:glue:<region>:<account_ID>:table/<database_name>/<table_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::GuardDuty::Detector</code>, and the
   *                operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in
   *                the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:guardduty:<region>:<account_ID>:detector/<detector_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::KendraRanking::ExecutionPlan</code>, and the
   *                operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in
   *                the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:kendra-ranking:<region>:<account_ID>:rescore-execution-plan/<rescore_execution_plan_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::ManagedBlockchain::Network</code>,
   *                and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN
   *                must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:managedblockchain:::networks/<network_name></code>
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
   *                <p>When <code>resources.type</code> equals <code>AWS::MedicalImaging::Datastore</code>,
   *                and the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN
   *                must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:medical-imaging:<region>:<account_ID>:datastore/<data_store_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::SageMaker::ExperimentTrialComponent</code>, and the operator is set to
   *                <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:sagemaker:<region>:<account_ID>:experiment-trial-component/<experiment_trial_component_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::SageMaker::FeatureGroup</code>, and the operator is set to
   *                <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:sagemaker:<region>:<account_ID>:feature-group/<feature_group_name></code>
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
   *                <p>When <code>resources.type</code> equals
   *                <code>AWS::S3ObjectLambda::AccessPoint</code>, and the operator is set to
   *                <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the following
   *                format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3-object-lambda:<region>:<account_ID>:accesspoint/<access_point_name></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::S3Outposts::Object</code>, and
   *                the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be
   *                in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:s3-outposts:<region>:<account_ID>:<object_path></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When <code>resources.type</code> equals <code>AWS::SSMMessages::ControlChannel</code>, and
   *                      the operator is set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be
   *                      in the following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:ssmmessages:<region>:<account_ID>:control-channel/<channel_ID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>When resources.type equals <code>AWS::VerifiedPermissions::PolicyStore</code>, and the operator is
   *                set to <code>Equals</code> or <code>NotEquals</code>, the ARN must be in the
   *                following format:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>arn:<partition>:verifiedpermissions:<region>:<account_ID>:policy-store/<policy_store_UUID></code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Field: string | undefined;

  /**
   * @public
   * <p> An operator that includes events that match the exact value of the event record field
   *          specified as the value of <code>Field</code>. This is the only valid operator that you can
   *          use with the <code>readOnly</code>, <code>eventCategory</code>, and
   *             <code>resources.type</code> fields.</p>
   */
  Equals?: string[];

  /**
   * @public
   * <p>An operator that includes events that match the first few characters of the event record
   *          field specified as the value of <code>Field</code>.</p>
   */
  StartsWith?: string[];

  /**
   * @public
   * <p>An operator that includes events that match the last few characters of the event record
   *          field specified as the value of <code>Field</code>.</p>
   */
  EndsWith?: string[];

  /**
   * @public
   * <p> An operator that excludes events that match the exact value of the event record field
   *          specified as the value of <code>Field</code>. </p>
   */
  NotEquals?: string[];

  /**
   * @public
   * <p> An operator that excludes events that match the first few characters of the event
   *          record field specified as the value of <code>Field</code>. </p>
   */
  NotStartsWith?: string[];

  /**
   * @public
   * <p> An operator that excludes events that match the last few characters of the event record
   *          field specified as the value of <code>Field</code>. </p>
   */
  NotEndsWith?: string[];
}

/**
 * @public
 * <p>Advanced event selectors let you create fine-grained selectors for the following CloudTrail event record ﬁelds. They help you control costs by logging only those
 *          events that are important to you. For more information about advanced event selectors, see
 *             <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> in the <i>CloudTrail User Guide</i>.</p>
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
   * @public
   * <p>An optional, descriptive name for an advanced event selector, such as "Log data events
   *          for only two S3 buckets".</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Contains all selector statements in an advanced event selector.</p>
   */
  FieldSelectors: AdvancedFieldSelector[] | undefined;
}

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * @public
   * @deprecated
   *
   * <p>The ARN (or the ID suffix of the ARN) of an event data store on which the specified
   *          query is running.</p>
   */
  EventDataStore?: string;

  /**
   * @public
   * <p>The ID of the query that you want to cancel. The <code>QueryId</code> comes from the
   *          response of a <code>StartQuery</code> operation.</p>
   */
  QueryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FINISHED: "FINISHED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 */
export interface CancelQueryResponse {
  /**
   * @public
   * <p>The ID of the canceled query.</p>
   */
  QueryId: string | undefined;

  /**
   * @public
   * <p>Shows the status of a query after a <code>CancelQuery</code> request. Typically, the
   *          values shown are either <code>RUNNING</code> or <code>CANCELLED</code>.</p>
   */
  QueryStatus: QueryStatus | undefined;
}

/**
 * @public
 * <p>The specified query cannot be canceled because it is in the <code>FINISHED</code>,
 *             <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code> state.</p>
 */
export class InactiveQueryException extends __BaseException {
  readonly name: "InactiveQueryException" = "InactiveQueryException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InactiveQueryException, __BaseException>) {
    super({
      name: "InactiveQueryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InactiveQueryException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request includes a parameter that is not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The query ID does not exist or does not map to a query.</p>
 */
export class QueryIdNotFoundException extends __BaseException {
  readonly name: "QueryIdNotFoundException" = "QueryIdNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryIdNotFoundException, __BaseException>) {
    super({
      name: "QueryIdNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryIdNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the management account of an organization is registered as
 *          the CloudTrail delegated administrator.</p>
 */
export class CannotDelegateManagementAccountException extends __BaseException {
  readonly name: "CannotDelegateManagementAccountException" = "CannotDelegateManagementAccountException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotDelegateManagementAccountException, __BaseException>) {
    super({
      name: "CannotDelegateManagementAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotDelegateManagementAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Contains information about a returned CloudTrail channel.</p>
 */
export interface Channel {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p> The name of the CloudTrail channel. For service-linked channels, the name is
   *             <code>aws-service-channel/service-name/custom-suffix</code> where
   *             <code>service-name</code> represents the name of the Amazon Web Services service that
   *          created the channel and <code>custom-suffix</code> represents the suffix created by the
   *             Amazon Web Services service. </p>
   */
  Name?: string;
}

/**
 * @public
 * <p>
 *          This exception is thrown when the provided channel already exists.
 *       </p>
 */
export class ChannelAlreadyExistsException extends __BaseException {
  readonly name: "ChannelAlreadyExistsException" = "ChannelAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelAlreadyExistsException, __BaseException>) {
    super({
      name: "ChannelAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified event data store cannot yet be deleted because it
 *          is in use by a channel.</p>
 */
export class ChannelExistsForEDSException extends __BaseException {
  readonly name: "ChannelExistsForEDSException" = "ChannelExistsForEDSException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelExistsForEDSException, __BaseException>) {
    super({
      name: "ChannelExistsForEDSException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelExistsForEDSException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>
 *          This exception is thrown when the maximum number of channels limit is exceeded.
 *       </p>
 */
export class ChannelMaxLimitExceededException extends __BaseException {
  readonly name: "ChannelMaxLimitExceededException" = "ChannelMaxLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelMaxLimitExceededException, __BaseException>) {
    super({
      name: "ChannelMaxLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelMaxLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DestinationType = {
  AWS_SERVICE: "AWS_SERVICE",
  EVENT_DATA_STORE: "EVENT_DATA_STORE",
} as const;

/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 * <p>Contains information about the destination receiving events.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>The type of destination for events arriving from a channel. For channels used for a CloudTrail Lake integration, the value is <code>EventDataStore</code>. For service-linked channels,
   *          the value is <code>AWS_SERVICE</code>. </p>
   */
  Type: DestinationType | undefined;

  /**
   * @public
   * <p> For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel.
   *          For service-linked channels, the location is the name of the Amazon Web Services service.</p>
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * @public
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the partner or external event source. You cannot change this name after you create the
   *          channel. A maximum of one channel is allowed per source.</p>
   *          <p>
   *          A source can be either <code>Custom</code> for all valid non-Amazon Web Services
   *          events, or the name of a partner event source. For information about the source names for available partners, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information">Additional information about integration partners</a> in the CloudTrail User Guide.
   *       </p>
   */
  Source: string | undefined;

  /**
   * @public
   * <p>One or more event data stores to which events arriving through a channel will be logged.</p>
   */
  Destinations: Destination[] | undefined;

  /**
   * @public
   * <p>A list of tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The name of the new channel.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The partner or external event source name.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The event data stores that log the events arriving through the channel.</p>
   */
  Destinations?: Destination[];

  /**
   * @public
   * <p>A list of tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 */
export class InvalidEventDataStoreCategoryException extends __BaseException {
  readonly name: "InvalidEventDataStoreCategoryException" = "InvalidEventDataStoreCategoryException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventDataStoreCategoryException, __BaseException>) {
    super({
      name: "InvalidEventDataStoreCategoryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventDataStoreCategoryException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified value of <code>Source</code> is not valid.</p>
 */
export class InvalidSourceException extends __BaseException {
  readonly name: "InvalidSourceException" = "InvalidSourceException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSourceException, __BaseException>) {
    super({
      name: "InvalidSourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other Amazon Web Services Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
 */
export class CloudTrailAccessNotEnabledException extends __BaseException {
  readonly name: "CloudTrailAccessNotEnabledException" = "CloudTrailAccessNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudTrailAccessNotEnabledException, __BaseException>) {
    super({
      name: "CloudTrailAccessNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudTrailAccessNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateEventDataStoreRequest {
  /**
   * @public
   * <p>The name of the event data store.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The advanced event selectors to use to select the events for the data store. You can
   *          configure up to five advanced event selectors for each event data store.</p>
   *          <p> For more information about how to use advanced event selectors to log CloudTrail
   *          events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">Log events by using advanced event selectors</a> in the CloudTrail User Guide.</p>
   *          <p>For more information about how to use advanced event selectors to include Config configuration items in your event data store, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-eds-config">Create an event data store for Config configuration
   *             items</a> in the CloudTrail User Guide.</p>
   *          <p>For more information about how to use advanced event selectors to include non-Amazon Web Services events in your event data store, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-integration">Create an integration to log events from outside Amazon Web Services</a> in the CloudTrail User Guide.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * <p>Specifies whether the event data store includes events from all Regions, or only from
   *          the Region in which the event data store is created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * <p>Specifies whether an event data store collects events logged for an organization in
   *             Organizations.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * <p>The retention period of the event data store, in days. You can set a retention period of
   *          up to 2557 days, the equivalent of seven years. CloudTrail  Lake determines whether to retain an event by checking if the <code>eventTime</code>
   *          of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events
   *       when the <code>eventTime</code> is older than 90 days.</p>
   *          <note>
   *             <p>If you plan to copy trail events to this event data store, we recommend
   *             that you consider both the age of the events that you
   *             want to copy as well as how long you want to keep the copied events
   *             in your event data store. For example, if you copy trail events that are 5 years old
   *             and specify a retention period of 7 years, the event data store
   *             will retain those events for two years.</p>
   *          </note>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>Specifies whether termination protection is enabled for the event data store. If
   *          termination protection is enabled, you cannot delete the event data store until termination
   *          protection is disabled.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * <p>A list of tags.</p>
   */
  TagsList?: Tag[];

  /**
   * @public
   * <p>Specifies the KMS key ID to use to encrypt the events delivered by
   *             CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a
   *          fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique
   *          identifier.</p>
   *          <important>
   *             <p>Disabling or deleting the KMS key, or removing CloudTrail
   *             permissions on the key, prevents CloudTrail from logging events to the event data
   *             store, and prevents users from querying the data in the event data store that was
   *             encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you
   *             disable or delete a KMS key that you are using with an event data store,
   *             delete or back up your event data store.</p>
   *          </important>
   *          <p>CloudTrail also supports KMS multi-Region keys. For more
   *          information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region
   *             keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies whether the event data store should start ingesting live events. The default is true.</p>
   */
  StartIngestion?: boolean;
}

/**
 * @public
 * @enum
 */
export const EventDataStoreStatus = {
  CREATED: "CREATED",
  ENABLED: "ENABLED",
  PENDING_DELETION: "PENDING_DELETION",
  STARTING_INGESTION: "STARTING_INGESTION",
  STOPPED_INGESTION: "STOPPED_INGESTION",
  STOPPING_INGESTION: "STOPPING_INGESTION",
} as const;

/**
 * @public
 */
export type EventDataStoreStatus = (typeof EventDataStoreStatus)[keyof typeof EventDataStoreStatus];

/**
 * @public
 */
export interface CreateEventDataStoreResponse {
  /**
   * @public
   * <p>The ARN of the event data store.</p>
   */
  EventDataStoreArn?: string;

  /**
   * @public
   * <p>The name of the event data store.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of event data store creation.</p>
   */
  Status?: EventDataStoreStatus;

  /**
   * @public
   * <p>The advanced event selectors that were used to select the events for the data
   *          store.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * <p>Indicates whether the event data store collects events from all Regions, or only from
   *          the Region in which it was created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * <p>The retention period of an event data store, in days.</p>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates whether termination protection is enabled for the event data store.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * <p>A list of tags.</p>
   */
  TagsList?: Tag[];

  /**
   * @public
   * <p>The timestamp that shows when the event data store was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp that shows when an event data store was updated, if applicable.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>An event data store with that name already exists.</p>
 */
export class EventDataStoreAlreadyExistsException extends __BaseException {
  readonly name: "EventDataStoreAlreadyExistsException" = "EventDataStoreAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreAlreadyExistsException, __BaseException>) {
    super({
      name: "EventDataStoreAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Your account has used the maximum number of event data stores.</p>
 */
export class EventDataStoreMaxLimitExceededException extends __BaseException {
  readonly name: "EventDataStoreMaxLimitExceededException" = "EventDataStoreMaxLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreMaxLimitExceededException, __BaseException>) {
    super({
      name: "EventDataStoreMaxLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreMaxLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 */
export class InsufficientDependencyServiceAccessPermissionException extends __BaseException {
  readonly name: "InsufficientDependencyServiceAccessPermissionException" =
    "InsufficientDependencyServiceAccessPermissionException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientDependencyServiceAccessPermissionException, __BaseException>) {
    super({
      name: "InsufficientDependencyServiceAccessPermissionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientDependencyServiceAccessPermissionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 */
export class InsufficientEncryptionPolicyException extends __BaseException {
  readonly name: "InsufficientEncryptionPolicyException" = "InsufficientEncryptionPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientEncryptionPolicyException, __BaseException>) {
    super({
      name: "InsufficientEncryptionPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientEncryptionPolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called
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
 */
export class InvalidEventSelectorsException extends __BaseException {
  readonly name: "InvalidEventSelectorsException" = "InvalidEventSelectorsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventSelectorsException, __BaseException>) {
    super({
      name: "InvalidEventSelectorsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventSelectorsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the KMS key ARN is not valid.</p>
 */
export class InvalidKmsKeyIdException extends __BaseException {
  readonly name: "InvalidKmsKeyIdException" = "InvalidKmsKeyIdException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKmsKeyIdException, __BaseException>) {
    super({
      name: "InvalidKmsKeyIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKmsKeyIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 */
export class KmsException extends __BaseException {
  readonly name: "KmsException" = "KmsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsException, __BaseException>) {
    super({
      name: "KmsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the KMS key does not exist, when the S3
 *          bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is
 *          not in the same Region.</p>
 */
export class KmsKeyNotFoundException extends __BaseException {
  readonly name: "KmsKeyNotFoundException" = "KmsKeyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyNotFoundException, __BaseException>) {
    super({
      name: "KmsKeyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when Organizations is not configured to support all
 *          features. All features must be enabled in Organizations to support creating an
 *          organization trail or event data store.</p>
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
  readonly name: "OrganizationNotInAllFeaturesModeException" = "OrganizationNotInAllFeaturesModeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotInAllFeaturesModeException, __BaseException>) {
    super({
      name: "OrganizationNotInAllFeaturesModeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the request is made from an Amazon Web Services account
 *          that is not a member of an organization. To make this request, sign in using the
 *          credentials of an account that belongs to an organization.</p>
 */
export class OrganizationsNotInUseException extends __BaseException {
  readonly name: "OrganizationsNotInUseException" = "OrganizationsNotInUseException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationsNotInUseException, __BaseException>) {
    super({
      name: "OrganizationsNotInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationsNotInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when a call results in the <code>InvalidClientTokenId</code>
 *          error code. This can occur when you are creating or updating a trail to send notifications
 *          to an Amazon SNS topic that is in a suspended Amazon Web Services account.</p>
 */
export class CloudTrailInvalidClientTokenIdException extends __BaseException {
  readonly name: "CloudTrailInvalidClientTokenIdException" = "CloudTrailInvalidClientTokenIdException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudTrailInvalidClientTokenIdException, __BaseException>) {
    super({
      name: "CloudTrailInvalidClientTokenIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudTrailInvalidClientTokenIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Cannot set a CloudWatch Logs delivery for this Region.</p>
 */
export class CloudWatchLogsDeliveryUnavailableException extends __BaseException {
  readonly name: "CloudWatchLogsDeliveryUnavailableException" = "CloudWatchLogsDeliveryUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudWatchLogsDeliveryUnavailableException, __BaseException>) {
    super({
      name: "CloudWatchLogsDeliveryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudWatchLogsDeliveryUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Specifies the settings for each trail.</p>
 */
export interface CreateTrailRequest {
  /**
   * @public
   * <p>Specifies the name of the trail. The name must meet the following requirements:</p>
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
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.
   *          See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3
   *             Bucket Naming Requirements</a>.</p>
   */
  S3BucketName: string | undefined;

  /**
   * @public
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200
   *          characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * <p>Specifies the name of the Amazon SNS topic defined for notification of log file
   *          delivery. The maximum length is 256 characters.</p>
   */
  SnsTopicName?: string;

  /**
   * @public
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the
   *          log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * @public
   * <p>Specifies whether the trail is created in the current Region or in all Regions. The
   *          default is false, which creates a trail only in the Region where you are signed in. As a
   *          best practice, consider creating trails that log events in all Regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * @public
   * <p>Specifies whether log file integrity validation is enabled. The default is false.</p>
   *          <note>
   *             <p>When you disable log file integrity validation, the chain of digest files is broken
   *             after one hour. CloudTrail does not create digest files for log files that were
   *             delivered during a period in which log file integrity validation was disabled. For
   *             example, if you enable log file integrity validation at noon on January 1, disable it at
   *             noon on January 2, and re-enable it at noon on January 10, digest files will not be
   *             created for the log files delivered from noon on January 2 to noon on January 10. The
   *             same applies whenever you stop CloudTrail logging or delete a trail.</p>
   *          </note>
   */
  EnableLogFileValidation?: boolean;

  /**
   * @public
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that
   *          represents the log group to which CloudTrail logs will be delivered. You must use a
   *          log group that exists in your account.</p>
   *          <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group. You must use a role that exists in your account.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * @public
   * <p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully
   *          specified ARN to an alias, a fully specified ARN to a key, or a globally unique
   *          identifier.</p>
   *          <p>CloudTrail also supports KMS multi-Region keys. For more
   *          information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region
   *             keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false,
   *          and cannot be true unless the call is made on behalf of an Amazon Web Services account that
   *          is the management account or delegated administrator account for an organization in Organizations.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * @public
   * <p>A list of tags.</p>
   */
  TagsList?: Tag[];
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface CreateTrailResponse {
  /**
   * @public
   * <p>Specifies the name of the trail.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log
   *          files.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This field is no longer in use. Use <code>SnsTopicARN</code>.</p>
   */
  SnsTopicName?: string;

  /**
   * @public
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
   *          notifications when log files are delivered. The format of a topic ARN is:</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * @public
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the
   *          log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * @public
   * <p>Specifies whether the trail exists in one Region or in all Regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * @public
   * <p>Specifies the ARN of the trail that was created. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail
   *          logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}

/**
 * @public
 * <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 */
export class InsufficientS3BucketPolicyException extends __BaseException {
  readonly name: "InsufficientS3BucketPolicyException" = "InsufficientS3BucketPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientS3BucketPolicyException, __BaseException>) {
    super({
      name: "InsufficientS3BucketPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientS3BucketPolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the policy on the Amazon SNS topic is not
 *          sufficient.</p>
 */
export class InsufficientSnsTopicPolicyException extends __BaseException {
  readonly name: "InsufficientSnsTopicPolicyException" = "InsufficientSnsTopicPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientSnsTopicPolicyException, __BaseException>) {
    super({
      name: "InsufficientSnsTopicPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientSnsTopicPolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the provided CloudWatch Logs log group is not
 *          valid.</p>
 */
export class InvalidCloudWatchLogsLogGroupArnException extends __BaseException {
  readonly name: "InvalidCloudWatchLogsLogGroupArnException" = "InvalidCloudWatchLogsLogGroupArnException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCloudWatchLogsLogGroupArnException, __BaseException>) {
    super({
      name: "InvalidCloudWatchLogsLogGroupArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCloudWatchLogsLogGroupArnException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the provided role is not valid.</p>
 */
export class InvalidCloudWatchLogsRoleArnException extends __BaseException {
  readonly name: "InvalidCloudWatchLogsRoleArnException" = "InvalidCloudWatchLogsRoleArnException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCloudWatchLogsRoleArnException, __BaseException>) {
    super({
      name: "InvalidCloudWatchLogsRoleArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCloudWatchLogsRoleArnException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the combination of parameters provided is not
 *          valid.</p>
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 */
export class InvalidS3BucketNameException extends __BaseException {
  readonly name: "InvalidS3BucketNameException" = "InvalidS3BucketNameException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketNameException, __BaseException>) {
    super({
      name: "InvalidS3BucketNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 */
export class InvalidS3PrefixException extends __BaseException {
  readonly name: "InvalidS3PrefixException" = "InvalidS3PrefixException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3PrefixException, __BaseException>) {
    super({
      name: "InvalidS3PrefixException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3PrefixException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the provided SNS topic name is not valid.</p>
 */
export class InvalidSnsTopicNameException extends __BaseException {
  readonly name: "InvalidSnsTopicNameException" = "InvalidSnsTopicNameException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnsTopicNameException, __BaseException>) {
    super({
      name: "InvalidSnsTopicNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnsTopicNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @deprecated
 *
 * <p>This exception is no longer in use.</p>
 */
export class KmsKeyDisabledException extends __BaseException {
  readonly name: "KmsKeyDisabledException" = "KmsKeyDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyDisabledException, __BaseException>) {
    super({
      name: "KmsKeyDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the maximum number of trails is reached.</p>
 */
export class MaximumNumberOfTrailsExceededException extends __BaseException {
  readonly name: "MaximumNumberOfTrailsExceededException" = "MaximumNumberOfTrailsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumNumberOfTrailsExceededException, __BaseException>) {
    super({
      name: "MaximumNumberOfTrailsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumNumberOfTrailsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 */
export class S3BucketDoesNotExistException extends __BaseException {
  readonly name: "S3BucketDoesNotExistException" = "S3BucketDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3BucketDoesNotExistException, __BaseException>) {
    super({
      name: "S3BucketDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3BucketDoesNotExistException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>
 *          This exception is thrown when the request rate exceeds the limit.
 *       </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the specified trail already exists.</p>
 */
export class TrailAlreadyExistsException extends __BaseException {
  readonly name: "TrailAlreadyExistsException" = "TrailAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrailAlreadyExistsException, __BaseException>) {
    super({
      name: "TrailAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrailAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is no longer in use.</p>
 */
export class TrailNotProvidedException extends __BaseException {
  readonly name: "TrailNotProvidedException" = "TrailNotProvidedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrailNotProvidedException, __BaseException>) {
    super({
      name: "TrailNotProvidedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrailNotProvidedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * @public
   * <p>The ARN or the <code>UUID</code> value of the channel that you want to delete.</p>
   */
  Channel: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelResponse {}

/**
 * @public
 */
export interface DeleteEventDataStoreRequest {
  /**
   * @public
   * <p>The ARN (or the ID suffix of the ARN) of the event data store to delete.</p>
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDataStoreResponse {}

/**
 * @public
 * <p> This exception is thrown when you try to update or delete an event data store that
 *          currently has an import in progress. </p>
 */
export class EventDataStoreHasOngoingImportException extends __BaseException {
  readonly name: "EventDataStoreHasOngoingImportException" = "EventDataStoreHasOngoingImportException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreHasOngoingImportException, __BaseException>) {
    super({
      name: "EventDataStoreHasOngoingImportException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreHasOngoingImportException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The event data store cannot be deleted because termination protection is enabled for
 *          it.</p>
 */
export class EventDataStoreTerminationProtectedException extends __BaseException {
  readonly name: "EventDataStoreTerminationProtectedException" = "EventDataStoreTerminationProtectedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreTerminationProtectedException, __BaseException>) {
    super({
      name: "EventDataStoreTerminationProtectedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreTerminationProtectedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail channel you're deleting the resource-based policy from.
   *          The following is the format of a resource ARN:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>.
   *       </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 * <p>
 *          This exception is thrown when the provided resource does not exist, or the ARN format of the resource is not valid. The following is the valid format for a resource ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>.
 *       </p>
 */
export class ResourceARNNotValidException extends __BaseException {
  readonly name: "ResourceARNNotValidException" = "ResourceARNNotValidException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceARNNotValidException, __BaseException>) {
    super({
      name: "ResourceARNNotValidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceARNNotValidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>
 *          This exception is thrown when the specified resource policy is not found.
 *       </p>
 */
export class ResourcePolicyNotFoundException extends __BaseException {
  readonly name: "ResourcePolicyNotFoundException" = "ResourcePolicyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyNotFoundException, __BaseException>) {
    super({
      name: "ResourcePolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request that specifies the name of a trail to delete.</p>
 */
export interface DeleteTrailRequest {
  /**
   * @public
   * <p>Specifies the name or the CloudTrail ARN of the trail to be deleted. The
   *          following is the format of a trail ARN.
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface DeleteTrailResponse {}

/**
 * @public
 * <p>This exception is thrown when an operation is called on a trail from a Region other than
 *          the Region in which the trail was created.</p>
 */
export class InvalidHomeRegionException extends __BaseException {
  readonly name: "InvalidHomeRegionException" = "InvalidHomeRegionException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidHomeRegionException, __BaseException>) {
    super({
      name: "InvalidHomeRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidHomeRegionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the trail with the given name is not found.</p>
 */
export class TrailNotFoundException extends __BaseException {
  readonly name: "TrailNotFoundException" = "TrailNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrailNotFoundException, __BaseException>) {
    super({
      name: "TrailNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrailNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Removes CloudTrail delegated administrator permissions from a specified member
 *          account in an organization that is currently designated as a delegated
 *          administrator.</p>
 */
export interface DeregisterOrganizationDelegatedAdminRequest {
  /**
   * @public
   * <p>A delegated administrator account ID. This is a member account in an organization that
   *          is currently designated as a delegated administrator.</p>
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * @public
 * <p>Returns the following response if successful. Otherwise, returns an error.</p>
 */
export interface DeregisterOrganizationDelegatedAdminResponse {}

/**
 * @public
 * <p> This exception is thrown when the account making the request is not the organization's
 *          management account. </p>
 */
export class NotOrganizationManagementAccountException extends __BaseException {
  readonly name: "NotOrganizationManagementAccountException" = "NotOrganizationManagementAccountException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotOrganizationManagementAccountException, __BaseException>) {
    super({
      name: "NotOrganizationManagementAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotOrganizationManagementAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeQueryRequest {
  /**
   * @public
   * @deprecated
   *
   * <p>The ARN (or the ID suffix of the ARN) of an event data store on which the specified
   *          query was run.</p>
   */
  EventDataStore?: string;

  /**
   * @public
   * <p>The query ID.</p>
   */
  QueryId?: string;

  /**
   * @public
   * <p>
   *          The alias that identifies a query template.
   *       </p>
   */
  QueryAlias?: string;
}

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ACCESS_DENIED_SIGNING_FILE: "ACCESS_DENIED_SIGNING_FILE",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FAILED_SIGNING_FILE: "FAILED_SIGNING_FILE",
  PENDING: "PENDING",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  SUCCESS: "SUCCESS",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * <p>Gets metadata about a query, including the number of events that were matched, the total
 *          number of events scanned, the query run time in milliseconds, and the query's creation
 *          time.</p>
 */
export interface QueryStatisticsForDescribeQuery {
  /**
   * @public
   * <p>The number of events that matched a query.</p>
   */
  EventsMatched?: number;

  /**
   * @public
   * <p>The number of events that the query scanned in the event data store.</p>
   */
  EventsScanned?: number;

  /**
   * @public
   * <p>The total bytes that the query scanned in the event data store. This value matches the
   *          number of bytes for which your account is billed for the query, unless the query is still
   *          running.</p>
   */
  BytesScanned?: number;

  /**
   * @public
   * <p>The query's run time, in milliseconds.</p>
   */
  ExecutionTimeInMillis?: number;

  /**
   * @public
   * <p>The creation time of the query.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribeQueryResponse {
  /**
   * @public
   * <p>The ID of the query.</p>
   */
  QueryId?: string;

  /**
   * @public
   * <p>The SQL code of a query.</p>
   */
  QueryString?: string;

  /**
   * @public
   * <p>The status of a query. Values for <code>QueryStatus</code> include <code>QUEUED</code>,
   *             <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>,
   *          <code>TIMED_OUT</code>, or <code>CANCELLED</code>
   *          </p>
   */
  QueryStatus?: QueryStatus;

  /**
   * @public
   * <p>Metadata about a query, including the number of events that were matched, the total
   *          number of events scanned, the query run time in milliseconds, and the query's creation
   *          time.</p>
   */
  QueryStatistics?: QueryStatisticsForDescribeQuery;

  /**
   * @public
   * <p>The error message returned if a query failed.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The URI for the S3 bucket where CloudTrail delivered query results, if
   *          applicable.</p>
   */
  DeliveryS3Uri?: string;

  /**
   * @public
   * <p>The delivery status.</p>
   */
  DeliveryStatus?: DeliveryStatus;
}

/**
 * @public
 * <p>Returns information about the trail.</p>
 */
export interface DescribeTrailsRequest {
  /**
   * @public
   * <p>Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The
   *          format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>If an empty list is specified, information for the trail in the current Region is
   *          returned.</p>
   *          <ul>
   *             <li>
   *                <p>If an empty list is specified and <code>IncludeShadowTrails</code> is false, then
   *                information for all trails in the current Region is returned.</p>
   *             </li>
   *             <li>
   *                <p>If an empty list is specified and IncludeShadowTrails is null or true, then
   *                information for all trails in the current Region and any associated shadow trails in
   *                other Regions is returned.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If one or more trail names are specified, information is returned only if the names
   *             match the names of trails belonging only to the current Region and current account. To
   *             return information about a trail in another Region, you must specify its trail
   *             ARN.</p>
   *          </note>
   */
  trailNameList?: string[];

  /**
   * @public
   * <p>Specifies whether to include shadow trails in the response. A shadow trail is the
   *          replication in a Region of a trail that was created in a different Region, or in the case
   *          of an organization trail, the replication of an organization trail in member accounts. If
   *          you do not include shadow trails, organization trails in a member account and Region
   *          replication trails will not be returned. The default is true.</p>
   */
  includeShadowTrails?: boolean;
}

/**
 * @public
 * <p>The settings for a trail.</p>
 */
export interface Trail {
  /**
   * @public
   * <p>Name of the trail set by calling <a>CreateTrail</a>. The maximum length is
   *          128 characters.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Name of the Amazon S3 bucket into which CloudTrail delivers your trail
   *          files. See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3
   *             Bucket Naming Requirements</a>.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200
   *          characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This field is no longer in use. Use <code>SnsTopicARN</code>.</p>
   */
  SnsTopicName?: string;

  /**
   * @public
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
   *          notifications when log files are delivered. The following is the format of a topic
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * @public
   * <p>Set to <b>True</b> to include Amazon Web Services API calls
   *          from Amazon Web Services global services such as IAM. Otherwise, <b>False</b>.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * @public
   * <p>Specifies whether the trail exists only in one Region or exists in all Regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * @public
   * <p>The Region in which the trail was created.</p>
   */
  HomeRegion?: string;

  /**
   * @public
   * <p>Specifies the ARN of the trail. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>Specifies whether log file validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * @public
   * <p>Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log
   *          group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies if the trail has custom event selectors.</p>
   */
  HasCustomEventSelectors?: boolean;

  /**
   * @public
   * <p>Specifies whether a trail has insight types specified in an <code>InsightSelector</code>
   *          list.</p>
   */
  HasInsightSelectors?: boolean;

  /**
   * @public
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface DescribeTrailsResponse {
  /**
   * @public
   * <p>The list of trail objects. Trail objects with string values are only returned if values
   *          for the objects exist in a trail's configuration. For example, <code>SNSTopicName</code>
   *          and <code>SNSTopicARN</code> are only returned in results if a trail is configured to send
   *          SNS notifications. Similarly, <code>KMSKeyId</code> only appears in results if a trail's
   *          log files are encrypted with KMS
   *          customer managed keys.</p>
   */
  trailList?: Trail[];
}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * @public
   * <p>The ARN or <code>UUID</code> of a channel.</p>
   */
  Channel: string | undefined;
}

/**
 * @public
 * <p>A table showing information about the most recent successful and failed attempts
 *          to ingest events.</p>
 */
export interface IngestionStatus {
  /**
   * @public
   * <p>The time stamp of the most recent successful ingestion of events for the channel.</p>
   */
  LatestIngestionSuccessTime?: Date;

  /**
   * @public
   * <p>The event ID of the most recent successful ingestion of events.</p>
   */
  LatestIngestionSuccessEventID?: string;

  /**
   * @public
   * <p>The error code for the most recent failure to ingest events.</p>
   */
  LatestIngestionErrorCode?: string;

  /**
   * @public
   * <p>The time stamp of the most recent attempt to ingest events on the channel.</p>
   */
  LatestIngestionAttemptTime?: Date;

  /**
   * @public
   * <p>The event ID of the most recent attempt to ingest events.</p>
   */
  LatestIngestionAttemptEventID?: string;
}

/**
 * @public
 * <p> Contains configuration information about the channel. </p>
 */
export interface SourceConfig {
  /**
   * @public
   * <p> Specifies whether the channel applies to a single Region or to all Regions.</p>
   */
  ApplyToAllRegions?: boolean;

  /**
   * @public
   * <p> The advanced event selectors that are configured for the channel.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * @public
   * <p>The ARN of an channel returned by a <code>GetChannel</code> request.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p> The name of the CloudTrail channel. For service-linked channels, the name is
   *             <code>aws-service-channel/service-name/custom-suffix</code> where
   *             <code>service-name</code> represents the name of the Amazon Web Services service that
   *          created the channel and <code>custom-suffix</code> represents the suffix generated by the
   *             Amazon Web Services service. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The source for the CloudTrail channel.</p>
   */
  Source?: string;

  /**
   * @public
   * <p> Provides information about the advanced event selectors configured for the channel, and
   *          whether the channel applies to all Regions or a single Region. </p>
   */
  SourceConfig?: SourceConfig;

  /**
   * @public
   * <p>The destinations for the channel. For channels created for integrations,
   *          the destinations are the event data stores that log events arriving through the channel.
   *          For service-linked channels, the destination is the Amazon Web Services service that created the service-linked channel to receive events.</p>
   */
  Destinations?: Destination[];

  /**
   * @public
   * <p>A table showing information about the most recent successful and failed attempts
   *       to ingest events.</p>
   */
  IngestionStatus?: IngestionStatus;
}

/**
 * @public
 */
export interface GetEventDataStoreRequest {
  /**
   * @public
   * <p>The ARN (or ID suffix of the ARN) of the event data store about which you want
   *          information.</p>
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface GetEventDataStoreResponse {
  /**
   * @public
   * <p>The event data store Amazon Resource Number (ARN).</p>
   */
  EventDataStoreArn?: string;

  /**
   * @public
   * <p>The name of the event data store.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of an event data store.</p>
   */
  Status?: EventDataStoreStatus;

  /**
   * @public
   * <p>The advanced event selectors used to select events for the data store.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * <p>Indicates whether the event data store includes events from all Regions, or only from
   *          the Region in which it was created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * <p>The retention period of the event data store, in days.</p>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates that termination protection is enabled.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * <p>The timestamp of the event data store's creation.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>Shows the time that an event data store was updated, if applicable.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface GetEventSelectorsRequest {
  /**
   * @public
   * <p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string
   *          must meet the following requirements:</p>
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
   *          <p>If you specify a trail ARN, it must be in the format:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailName: string | undefined;
}

/**
 * @public
 * <p>The Amazon S3 buckets, Lambda functions, or Amazon DynamoDB tables that you specify in your event selectors for your trail to log data events. Data
 *          events provide information about the resource operations performed on or within a resource
 *          itself. These are also known as data plane operations. You can specify up to 250 data
 *          resources for a trail.</p>
 *          <note>
 *             <p>The total number of allowed data resources is 250. This number can be distributed
 *             between 1 and 5 event selectors, but the total cannot exceed 250 across all
 *             selectors for the trail.</p>
 *             <p>If you are using advanced event selectors, the maximum total number of values for
 *             all conditions, across all advanced event selectors for the trail, is 500.</p>
 *          </note>
 *          <p>The following example demonstrates how logging works when you configure logging of all
 *          data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code>
 *          and <code>Write</code> data events.</p>
 *          <ol>
 *             <li>
 *                <p>A user uploads an image file to <code>bucket-1</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API.
 *                It is recorded as a data event in CloudTrail. Because the CloudTrail
 *                user specified an S3 bucket with an empty prefix, events that occur on any object in
 *                that bucket are logged. The trail processes and logs the event.</p>
 *             </li>
 *             <li>
 *                <p>A user uploads an object to an Amazon S3 bucket named
 *                   <code>arn:aws:s3:::bucket-2</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket
 *                that the CloudTrail user didn't specify for the trail. The trail doesn’t log
 *                the event.</p>
 *             </li>
 *          </ol>
 *          <p>The following example demonstrates how logging works when you configure logging of
 *             Lambda data events for a Lambda function named
 *             <i>MyLambdaFunction</i>, but not for all Lambda
 *          functions.</p>
 *          <ol>
 *             <li>
 *                <p>A user runs a script that includes a call to the
 *                   <i>MyLambdaFunction</i> function and the
 *                   <i>MyOtherLambdaFunction</i> function.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is
 *                an Lambda API. It is recorded as a data event in CloudTrail.
 *                Because the CloudTrail user specified logging data events for
 *                   <i>MyLambdaFunction</i>, any invocations of that function are
 *                logged. The trail processes and logs the event.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Invoke</code> API operation on
 *                   <i>MyOtherLambdaFunction</i> is an Lambda API. Because
 *                the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for
 *                   <i>MyOtherLambdaFunction</i> does not match the function specified
 *                for the trail. The trail doesn’t log the event. </p>
 *             </li>
 *          </ol>
 */
export interface DataResource {
  /**
   * @public
   * <p>The resource type in which you want to log data events. You can specify the following
   *             <i>basic</i> event selector resource types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS::DynamoDB::Table</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::Lambda::Function</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::S3::Object</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following resource types are also available through <i>advanced</i>
   *          event selectors. Basic event selector resource types are valid in advanced event selectors,
   *          but advanced event selector resource types are not valid in basic event selectors. For more
   *          information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedFieldSelector.html">AdvancedFieldSelector</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS::CloudTrail::Channel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::CodeWhisperer::Profile</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::Cognito::IdentityPool</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::DynamoDB::Stream</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::EC2::Snapshot</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::EMRWAL::Workspace</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::FinSpace::Environment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::Glue::Table</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::GuardDuty::Detector</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::KendraRanking::ExecutionPlan</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::ManagedBlockchain::Network</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::ManagedBlockchain::Node</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::MedicalImaging::Datastore</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::SageMaker::ExperimentTrialComponent</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::SageMaker::FeatureGroup</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::S3::AccessPoint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::S3ObjectLambda::AccessPoint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::S3Outposts::Object</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::SSMMessages::ControlChannel</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS::VerifiedPermissions::PolicyStore</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;

  /**
   * @public
   * <p>An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified
   *          objects.</p>
   *          <ul>
   *             <li>
   *                <p>To log data events for all objects in all S3 buckets in your Amazon Web Services account, specify the prefix as <code>arn:aws:s3</code>.</p>
   *                <note>
   *                   <p>This also enables logging of data event activity performed by any user or role
   *                   in your Amazon Web Services account, even if that activity is performed on a bucket
   *                   that belongs to another Amazon Web Services account.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>To log data events for all objects in an S3 bucket, specify the bucket and an
   *                empty object prefix such as <code>arn:aws:s3:::bucket-1/</code>. The trail logs data
   *                events for all objects in this S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>To log data events for specific objects, specify the S3 bucket and object prefix
   *                such as <code>arn:aws:s3:::bucket-1/example-images</code>. The trail logs data events
   *                for objects in this S3 bucket that match the prefix.</p>
   *             </li>
   *             <li>
   *                <p>To log data events for all Lambda functions in your Amazon Web Services account, specify the prefix as <code>arn:aws:lambda</code>.</p>
   *                <note>
   *                   <p>This also enables logging of <code>Invoke</code> activity performed by any user
   *                   or role in your Amazon Web Services account, even if that activity is performed on
   *                   a function that belongs to another Amazon Web Services account. </p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>To log data events for a specific Lambda function, specify the
   *                function ARN.</p>
   *                <note>
   *                   <p>Lambda function ARNs are exact. For example, if you specify a
   *                   function ARN
   *                      <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld</i>,
   *                   data events will only be logged for
   *                      <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld</i>.
   *                   They will not be logged for
   *                      <i>arn:aws:lambda:us-west-2:111111111111:function:helloworld2</i>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>To log data events for all DynamoDB tables in your Amazon Web Services account, specify the prefix as <code>arn:aws:dynamodb</code>.</p>
   *             </li>
   *          </ul>
   */
  Values?: string[];
}

/**
 * @public
 * @enum
 */
export const ReadWriteType = {
  All: "All",
  ReadOnly: "ReadOnly",
  WriteOnly: "WriteOnly",
} as const;

/**
 * @public
 */
export type ReadWriteType = (typeof ReadWriteType)[keyof typeof ReadWriteType];

/**
 * @public
 * <p>Use event selectors to further specify the management and data event settings for your
 *          trail. By default, trails created without specific event selectors will be configured to
 *          log all read and write management events, and no data events. When an event occurs in your
 *          account, CloudTrail evaluates the event selector for all trails. For each trail, if
 *          the event matches any event selector, the trail processes and logs the event. If the event
 *          doesn't match any event selector, the trail doesn't log the event.</p>
 *          <p>You can configure up to five event selectors for a trail.</p>
 *          <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
 */
export interface EventSelector {
  /**
   * @public
   * <p>Specify if you want your trail to log read-only events, write-only events, or all. For
   *          example, the EC2 <code>GetConsoleOutput</code> is a read-only API operation and
   *             <code>RunInstances</code> is a write-only API operation.</p>
   *          <p> By default, the value is <code>All</code>.</p>
   */
  ReadWriteType?: ReadWriteType;

  /**
   * @public
   * <p>Specify if you want your event selector to include management events for your
   *          trail.</p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Management Events</a> in the <i>CloudTrail User
   *          Guide</i>.</p>
   *          <p>By default, the value is <code>true</code>.</p>
   *          <p>The first copy of management events is free. You are charged for additional copies of
   *          management events that you are logging on any subsequent trail in the same Region. For more
   *          information about CloudTrail pricing, see <a href="http://aws.amazon.com/cloudtrail/pricing/">CloudTrail Pricing</a>.</p>
   */
  IncludeManagementEvents?: boolean;

  /**
   * @public
   * <p>CloudTrail supports data event logging for Amazon S3 objects, Lambda functions, and Amazon DynamoDB tables with basic event selectors.
   *          You can specify up to 250 resources for an individual event selector, but the total number
   *          of data resources cannot exceed 250 across all event selectors in a trail. This limit does
   *          not apply if you configure resource logging for all data events.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Data
   *             Events</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in CloudTrail</a> in the <i>CloudTrail User
   *          Guide</i>.</p>
   */
  DataResources?: DataResource[];

  /**
   * @public
   * <p>An optional list of service event sources from which you do not want management events
   *          to be logged on your trail. In this release, the list can be empty (disables the filter),
   *          or it can filter out Key Management Service or Amazon RDS Data API events by
   *          containing <code>kms.amazonaws.com</code> or <code>rdsdata.amazonaws.com</code>. By
   *          default, <code>ExcludeManagementEventSources</code> is empty, and KMS and
   *             Amazon RDS Data API events are logged to your trail. You can exclude management
   *          event sources only in Regions that support the event source.</p>
   */
  ExcludeManagementEventSources?: string[];
}

/**
 * @public
 */
export interface GetEventSelectorsResponse {
  /**
   * @public
   * <p>The specified trail ARN that has the event selectors.</p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>The event selectors that are configured for the trail.</p>
   */
  EventSelectors?: EventSelector[];

  /**
   * @public
   * <p> The advanced event selectors that are configured for the trail. </p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

/**
 * @public
 */
export interface GetImportRequest {
  /**
   * @public
   * <p> The ID for the import. </p>
   */
  ImportId: string | undefined;
}

/**
 * @public
 * <p> The settings for the source S3 bucket. </p>
 */
export interface S3ImportSource {
  /**
   * @public
   * <p> The URI for the source S3 bucket. </p>
   */
  S3LocationUri: string | undefined;

  /**
   * @public
   * <p> The Region associated with the source S3 bucket. </p>
   */
  S3BucketRegion: string | undefined;

  /**
   * @public
   * <p> The IAM ARN role used to access the source S3 bucket. </p>
   */
  S3BucketAccessRoleArn: string | undefined;
}

/**
 * @public
 * <p> The import source. </p>
 */
export interface ImportSource {
  /**
   * @public
   * <p> The source S3 bucket. </p>
   */
  S3: S3ImportSource | undefined;
}

/**
 * @public
 * <p> Provides statistics for the specified <code>ImportID</code>. CloudTrail does not
 *          update import statistics in real-time. Returned values for parameters such as
 *             <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import. </p>
 */
export interface ImportStatistics {
  /**
   * @public
   * <p> The number of S3 prefixes found for the import. </p>
   */
  PrefixesFound?: number;

  /**
   * @public
   * <p> The number of S3 prefixes that completed import. </p>
   */
  PrefixesCompleted?: number;

  /**
   * @public
   * <p>The number of log files that completed import.</p>
   */
  FilesCompleted?: number;

  /**
   * @public
   * <p> The number of trail events imported into the event data store. </p>
   */
  EventsCompleted?: number;

  /**
   * @public
   * <p> The number of failed entries. </p>
   */
  FailedEntries?: number;
}

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 */
export interface GetImportResponse {
  /**
   * @public
   * <p> The ID of the import. </p>
   */
  ImportId?: string;

  /**
   * @public
   * <p> The ARN of the destination event data store. </p>
   */
  Destinations?: string[];

  /**
   * @public
   * <p> The source S3 bucket. </p>
   */
  ImportSource?: ImportSource;

  /**
   * @public
   * <p> Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   */
  StartEventTime?: Date;

  /**
   * @public
   * <p> Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   */
  EndEventTime?: Date;

  /**
   * @public
   * <p> The status of the import. </p>
   */
  ImportStatus?: ImportStatus;

  /**
   * @public
   * <p> The timestamp of the import's creation. </p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p> The timestamp of when the import was updated. </p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p> Provides statistics for the import. CloudTrail does not update import statistics
   *          in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be
   *          lower than the actual value, because CloudTrail updates statistics incrementally
   *          over the course of the import. </p>
   */
  ImportStatistics?: ImportStatistics;
}

/**
 * @public
 * <p> The specified import was not found. </p>
 */
export class ImportNotFoundException extends __BaseException {
  readonly name: "ImportNotFoundException" = "ImportNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImportNotFoundException, __BaseException>) {
    super({
      name: "ImportNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImportNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetInsightSelectorsRequest {
  /**
   * @public
   * <p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string
   *          must meet the following requirements:</p>
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
   *          <p>If you specify a trail ARN, it must be in the format:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InsightType = {
  ApiCallRateInsight: "ApiCallRateInsight",
  ApiErrorRateInsight: "ApiErrorRateInsight",
} as const;

/**
 * @public
 */
export type InsightType = (typeof InsightType)[keyof typeof InsightType];

/**
 * @public
 * <p>A JSON string that contains a list of Insights types that are logged on a trail.</p>
 */
export interface InsightSelector {
  /**
   * @public
   * <p>The type of Insights events to log on a trail. <code>ApiCallRateInsight</code> and
   *             <code>ApiErrorRateInsight</code> are valid Insight types.</p>
   *          <p>The <code>ApiCallRateInsight</code> Insights type analyzes write-only
   *          management API calls that are aggregated per minute against a baseline API call volume.</p>
   *          <p>The <code>ApiErrorRateInsight</code> Insights type analyzes management
   *          API calls that result in error codes. The error is shown if the API call is
   *          unsuccessful.</p>
   */
  InsightType?: InsightType;
}

/**
 * @public
 */
export interface GetInsightSelectorsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to get Insights
   *          selectors.</p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>A JSON string that contains the insight types you want to log on a trail. In this
   *          release, <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code> are supported
   *          as insight types.</p>
   */
  InsightSelectors?: InsightSelector[];
}

/**
 * @public
 * <p>If you run <code>GetInsightSelectors</code> on a trail that does not have Insights
 *          events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>.</p>
 */
export class InsightNotEnabledException extends __BaseException {
  readonly name: "InsightNotEnabledException" = "InsightNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsightNotEnabledException, __BaseException>) {
    super({
      name: "InsightNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsightNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetQueryResultsRequest {
  /**
   * @public
   * @deprecated
   *
   * <p>The ARN (or ID suffix of the ARN) of the event data store against which the query was
   *          run.</p>
   */
  EventDataStore?: string;

  /**
   * @public
   * <p>The ID of the query for which you want to get results.</p>
   */
  QueryId: string | undefined;

  /**
   * @public
   * <p>A token you can use to get the next page of query results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of query results to display on a single page.</p>
   */
  MaxQueryResults?: number;
}

/**
 * @public
 * <p>Metadata about a query, such as the number of results.</p>
 */
export interface QueryStatistics {
  /**
   * @public
   * <p>The number of results returned.</p>
   */
  ResultsCount?: number;

  /**
   * @public
   * <p>The total number of results returned by a query.</p>
   */
  TotalResultsCount?: number;

  /**
   * @public
   * <p>The total bytes that the query scanned in the event data store. This value matches the
   *          number of bytes for which your account is billed for the query, unless the query is still
   *          running.</p>
   */
  BytesScanned?: number;
}

/**
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * @public
   * <p>The status of the query. Values include <code>QUEUED</code>, <code>RUNNING</code>,
   *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
   *             <code>CANCELLED</code>.</p>
   */
  QueryStatus?: QueryStatus;

  /**
   * @public
   * <p>Shows the count of query results.</p>
   */
  QueryStatistics?: QueryStatistics;

  /**
   * @public
   * <p>Contains the individual event results of the query.</p>
   */
  QueryResultRows?: Record<string, string>[][];

  /**
   * @public
   * <p>A token you can use to get the next page of query results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The error message returned if a query failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>This exception is thrown if the limit specified is not valid.</p>
 */
export class InvalidMaxResultsException extends __BaseException {
  readonly name: "InvalidMaxResultsException" = "InvalidMaxResultsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMaxResultsException, __BaseException>) {
    super({
      name: "InvalidMaxResultsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMaxResultsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy.
   *          The following is the format of a resource ARN:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>.
   *       </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail channel attached to resource-based policy.
   *       </p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>
   *          A JSON-formatted string that contains the resource-based policy attached to the CloudTrail channel.
   *       </p>
   */
  ResourcePolicy?: string;
}

/**
 * @public
 */
export interface GetTrailRequest {
  /**
   * @public
   * <p>The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve
   *          settings information.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTrailResponse {
  /**
   * @public
   * <p>The settings for a trail.</p>
   */
  Trail?: Trail;
}

/**
 * @public
 * <p>The name of a trail about which you want the current status.</p>
 */
export interface GetTrailStatusRequest {
  /**
   * @public
   * <p>Specifies the name or the CloudTrail ARN of the trail for which you are
   *          requesting status. To get the status of a shadow trail (a replication of the trail in
   *          another Region), you must specify its ARN. The following is the format of a trail
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface GetTrailStatusResponse {
  /**
   * @public
   * <p>Whether the CloudTrail trail is currently logging Amazon Web Services API
   *          calls.</p>
   */
  IsLogging?: boolean;

  /**
   * @public
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting
   *          to deliver log files to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket, and
   *             does not occur for requests that time out. To resolve the issue, create a new bucket,
   *             and then call <code>UpdateTrail</code> to specify the new bucket; or fix the existing
   *             objects so that CloudTrail can again write to the bucket.</p>
   *          </note>
   */
  LatestDeliveryError?: string;

  /**
   * @public
   * <p>Displays any Amazon SNS error that CloudTrail encountered when attempting
   *          to send a notification. For more information about Amazon SNS errors, see the
   *             <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon SNS
   *             Developer Guide</a>. </p>
   */
  LatestNotificationError?: string;

  /**
   * @public
   * <p>Specifies the date and time that CloudTrail last delivered log files to an
   *          account's Amazon S3 bucket.</p>
   */
  LatestDeliveryTime?: Date;

  /**
   * @public
   * <p>Specifies the date and time of the most recent Amazon SNS notification that
   *             CloudTrail has written a new log file to an account's Amazon S3
   *          bucket.</p>
   */
  LatestNotificationTime?: Date;

  /**
   * @public
   * <p>Specifies the most recent date and time when CloudTrail started recording API
   *          calls for an Amazon Web Services account.</p>
   */
  StartLoggingTime?: Date;

  /**
   * @public
   * <p>Specifies the most recent date and time when CloudTrail stopped recording API
   *          calls for an Amazon Web Services account.</p>
   */
  StopLoggingTime?: Date;

  /**
   * @public
   * <p>Displays any CloudWatch Logs error that CloudTrail encountered when attempting
   *          to deliver logs to CloudWatch Logs.</p>
   */
  LatestCloudWatchLogsDeliveryError?: string;

  /**
   * @public
   * <p>Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.</p>
   */
  LatestCloudWatchLogsDeliveryTime?: Date;

  /**
   * @public
   * <p>Specifies the date and time that CloudTrail last delivered a digest file to an
   *          account's Amazon S3 bucket.</p>
   */
  LatestDigestDeliveryTime?: Date;

  /**
   * @public
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting
   *          to deliver a digest file to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket, and
   *             does not occur for requests that time out. To resolve the issue, create a new bucket,
   *             and then call <code>UpdateTrail</code> to specify the new bucket; or fix the existing
   *             objects so that CloudTrail can again write to the bucket.</p>
   *          </note>
   */
  LatestDigestDeliveryError?: string;

  /**
   * @public
   * <p>This field is no longer in use.</p>
   */
  LatestDeliveryAttemptTime?: string;

  /**
   * @public
   * <p>This field is no longer in use.</p>
   */
  LatestNotificationAttemptTime?: string;

  /**
   * @public
   * <p>This field is no longer in use.</p>
   */
  LatestNotificationAttemptSucceeded?: string;

  /**
   * @public
   * <p>This field is no longer in use.</p>
   */
  LatestDeliveryAttemptSucceeded?: string;

  /**
   * @public
   * <p>This field is no longer in use.</p>
   */
  TimeLoggingStarted?: string;

  /**
   * @public
   * <p>This field is no longer in use.</p>
   */
  TimeLoggingStopped?: string;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * @public
   * <p> The maximum number of CloudTrail channels to display on a single page. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. This token
   *          must be passed in with the same parameters that were specified in the original call. For
   *          example, if the original call specified an AttributeKey of 'Username' with a value of
   *          'root', the call with NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * @public
   * <p> The list of channels in the account. </p>
   */
  Channels?: Channel[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventDataStoresRequest {
  /**
   * @public
   * <p>A token you can use to get the next page of event data store results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of event data stores to display on a single page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A storage lake of event data against which you can run complex SQL-based queries. An
 *          event data store can include events that you have logged on your account from the last 90
 *          to 2557 days (about three months to up to seven years). To select events for an event data
 *          store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">advanced event selectors</a>.</p>
 */
export interface EventDataStore {
  /**
   * @public
   * <p>The ARN of the event data store.</p>
   */
  EventDataStoreArn?: string;

  /**
   * @public
   * <p>The name of the event data store.</p>
   */
  Name?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>Indicates whether the event data store is protected from
   *          termination.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * @deprecated
   *
   * <p>The status of an event data store.</p>
   */
  Status?: EventDataStoreStatus;

  /**
   * @public
   * @deprecated
   *
   * <p>The advanced event selectors that were used to select
   *          events for the data store.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * @deprecated
   *
   * <p>Indicates whether the event data store includes events
   *          from all Regions, or only from the Region in which it was created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * @deprecated
   *
   * <p>Indicates that an event data store is collecting logged
   *          events for an organization.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * @deprecated
   *
   * <p>The retention period, in days.</p>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>The timestamp of the event data store's creation.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * @deprecated
   *
   * <p>The timestamp showing when an event data store was
   *          updated, if applicable. <code>UpdatedTimestamp</code> is always either the same or newer
   *          than the time shown in <code>CreatedTimestamp</code>.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface ListEventDataStoresResponse {
  /**
   * @public
   * <p>Contains information about event data stores in the account, in the current
   *          Region.</p>
   */
  EventDataStores?: EventDataStore[];

  /**
   * @public
   * <p>A token you can use to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImportFailuresRequest {
  /**
   * @public
   * <p> The ID of the import. </p>
   */
  ImportId: string | undefined;

  /**
   * @public
   * <p> The maximum number of failures to display on a single page. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> A token you can use to get the next page of import failures. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ImportFailureStatus = {
  FAILED: "FAILED",
  RETRY: "RETRY",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ImportFailureStatus = (typeof ImportFailureStatus)[keyof typeof ImportFailureStatus];

/**
 * @public
 * <p> Provides information about an import failure. </p>
 */
export interface ImportFailureListItem {
  /**
   * @public
   * <p> The location of the failure in the S3 bucket. </p>
   */
  Location?: string;

  /**
   * @public
   * <p> The status of the import. </p>
   */
  Status?: ImportFailureStatus;

  /**
   * @public
   * <p> The type of import error. </p>
   */
  ErrorType?: string;

  /**
   * @public
   * <p> Provides the reason the import failed. </p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p> When the import was last updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListImportFailuresResponse {
  /**
   * @public
   * <p> Contains information about the import failures. </p>
   */
  Failures?: ImportFailureListItem[];

  /**
   * @public
   * <p> A token you can use to get the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImportsRequest {
  /**
   * @public
   * <p> The maximum number of imports to display on a single page. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p> The ARN of the destination event data store. </p>
   */
  Destination?: string;

  /**
   * @public
   * <p> The status of the import. </p>
   */
  ImportStatus?: ImportStatus;

  /**
   * @public
   * <p> A token you can use to get the next page of import results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p> Contains information about an import that was returned by a lookup request. </p>
 */
export interface ImportsListItem {
  /**
   * @public
   * <p> The ID of the import. </p>
   */
  ImportId?: string;

  /**
   * @public
   * <p> The status of the import. </p>
   */
  ImportStatus?: ImportStatus;

  /**
   * @public
   * <p> The ARN of the destination event data store. </p>
   */
  Destinations?: string[];

  /**
   * @public
   * <p> The timestamp of the import's creation. </p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p> The timestamp of the import's last update. </p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface ListImportsResponse {
  /**
   * @public
   * <p> The list of returned imports. </p>
   */
  Imports?: ImportsListItem[];

  /**
   * @public
   * <p> A token you can use to get the next page of import results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 */
export class InvalidTimeRangeException extends __BaseException {
  readonly name: "InvalidTimeRangeException" = "InvalidTimeRangeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTimeRangeException, __BaseException>) {
    super({
      name: "InvalidTimeRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTimeRangeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Reserved for future use.</p>
 */
export class InvalidTokenException extends __BaseException {
  readonly name: "InvalidTokenException" = "InvalidTokenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTokenException, __BaseException>) {
    super({
      name: "InvalidTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Requests the public keys for a specified time range.</p>
 */
export interface ListPublicKeysRequest {
  /**
   * @public
   * <p>Optionally specifies, in UTC, the start of the time range to look up public keys for
   *             CloudTrail digest files. If not specified, the current time is used, and the
   *          current public key is returned.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>Optionally specifies, in UTC, the end of the time range to look up public keys for
   *             CloudTrail digest files. If not specified, the current time is used.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about a returned public key.</p>
 */
export interface PublicKey {
  /**
   * @public
   * <p>The DER encoded public key value in PKCS#1 format.</p>
   */
  Value?: Uint8Array;

  /**
   * @public
   * <p>The starting time of validity of the public key.</p>
   */
  ValidityStartTime?: Date;

  /**
   * @public
   * <p>The ending time of validity of the public key.</p>
   */
  ValidityEndTime?: Date;

  /**
   * @public
   * <p>The fingerprint of the public key.</p>
   */
  Fingerprint?: string;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface ListPublicKeysResponse {
  /**
   * @public
   * <p>Contains an array of PublicKey objects.</p>
   *          <note>
   *             <p>The returned public keys may have validity time ranges that overlap.</p>
   *          </note>
   */
  PublicKeyList?: PublicKey[];

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A date range for the query was specified that is not valid. Be sure that the start time
 *          is chronologically before the end time. For more information about writing a query, see
 *             <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User Guide</i>.</p>
 */
export class InvalidDateRangeException extends __BaseException {
  readonly name: "InvalidDateRangeException" = "InvalidDateRangeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDateRangeException, __BaseException>) {
    super({
      name: "InvalidDateRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDateRangeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The query status is not valid for the operation.</p>
 */
export class InvalidQueryStatusException extends __BaseException {
  readonly name: "InvalidQueryStatusException" = "InvalidQueryStatusException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidQueryStatusException, __BaseException>) {
    super({
      name: "InvalidQueryStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidQueryStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListQueriesRequest {
  /**
   * @public
   * <p>The ARN (or the ID suffix of the ARN) of an event data store on which queries were
   *          run.</p>
   */
  EventDataStore: string | undefined;

  /**
   * @public
   * <p>A token you can use to get the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of queries to show on a page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Use with <code>EndTime</code> to bound a <code>ListQueries</code> request, and limit its
   *          results to only those queries run within a specified time period.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>Use with <code>StartTime</code> to bound a <code>ListQueries</code> request, and limit
   *          its results to only those queries run within a specified time period.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The status of queries that you want to return in results. Valid values for
   *             <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>,
   *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
   *             <code>CANCELLED</code>.</p>
   */
  QueryStatus?: QueryStatus;
}

/**
 * @public
 * <p>A SQL string of criteria about events that you want to collect in an event data
 *          store.</p>
 */
export interface Query {
  /**
   * @public
   * <p>The ID of a query.</p>
   */
  QueryId?: string;

  /**
   * @public
   * <p>The status of the query. This can be <code>QUEUED</code>, <code>RUNNING</code>,
   *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
   *             <code>CANCELLED</code>.</p>
   */
  QueryStatus?: QueryStatus;

  /**
   * @public
   * <p>The creation time of a query.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListQueriesResponse {
  /**
   * @public
   * <p>Lists matching query results, and shows query ID, status, and creation time of each
   *          query.</p>
   */
  Queries?: Query[];

  /**
   * @public
   * <p>A token you can use to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies a list of tags to return.</p>
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>Specifies a list of trail, event data store, or channel ARNs whose tags will be listed. The list
   *          has a limit of 20 ARNs.</p>
   *          <p> Example trail ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   */
  ResourceIdList: string[] | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A resource tag.</p>
 */
export interface ResourceTag {
  /**
   * @public
   * <p>Specifies the ARN of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>A list of tags.</p>
   */
  TagsList?: Tag[];
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>A list of resource tags.</p>
   */
  ResourceTagList?: ResourceTag[];

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrailsRequest {
  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. This token
   *          must be passed in with the same parameters that were specified in the original call. For
   *          example, if the original call specified an AttributeKey of 'Username' with a value of
   *          'root', the call with NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information about a CloudTrail trail, including the trail's name, home Region,
 *          and Amazon Resource Name (ARN).</p>
 */
export interface TrailInfo {
  /**
   * @public
   * <p>The ARN of a trail.</p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>The name of a trail.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region in which a trail was created.</p>
   */
  HomeRegion?: string;
}

/**
 * @public
 */
export interface ListTrailsResponse {
  /**
   * @public
   * <p>Returns the name, ARN, and home Region of trails in the current account.</p>
   */
  Trails?: TrailInfo[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. If the token
   *          does not appear, there are no more results to return. The token must be passed in with the
   *          same parameters as the previous call. For example, if the original call specified an
   *          AttributeKey of 'Username' with a value of 'root', the call with NextToken should include
   *          those same parameters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Occurs if an event category that is not valid is specified as a value of
 *             <code>EventCategory</code>.</p>
 */
export class InvalidEventCategoryException extends __BaseException {
  readonly name: "InvalidEventCategoryException" = "InvalidEventCategoryException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventCategoryException, __BaseException>) {
    super({
      name: "InvalidEventCategoryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventCategoryException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Occurs when a lookup attribute is specified that is not valid.</p>
 */
export class InvalidLookupAttributesException extends __BaseException {
  readonly name: "InvalidLookupAttributesException" = "InvalidLookupAttributesException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLookupAttributesException, __BaseException>) {
    super({
      name: "InvalidLookupAttributesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLookupAttributesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const EventCategory = {
  Insight: "insight",
} as const;

/**
 * @public
 */
export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory];

/**
 * @public
 * @enum
 */
export const LookupAttributeKey = {
  ACCESS_KEY_ID: "AccessKeyId",
  EVENT_ID: "EventId",
  EVENT_NAME: "EventName",
  EVENT_SOURCE: "EventSource",
  READ_ONLY: "ReadOnly",
  RESOURCE_NAME: "ResourceName",
  RESOURCE_TYPE: "ResourceType",
  USERNAME: "Username",
} as const;

/**
 * @public
 */
export type LookupAttributeKey = (typeof LookupAttributeKey)[keyof typeof LookupAttributeKey];

/**
 * @public
 * <p>Specifies an attribute and value that filter the events returned.</p>
 */
export interface LookupAttribute {
  /**
   * @public
   * <p>Specifies an attribute on which to filter the events returned.</p>
   */
  AttributeKey: LookupAttributeKey | undefined;

  /**
   * @public
   * <p>Specifies a value for the specified AttributeKey.</p>
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 * <p>Contains a request for LookupEvents.</p>
 */
export interface LookupEventsRequest {
  /**
   * @public
   * <p>Contains a list of lookup attributes. Currently the list can contain only one
   *          item.</p>
   */
  LookupAttributes?: LookupAttribute[];

  /**
   * @public
   * <p>Specifies that only events that occur after or at the specified time are returned. If
   *          the specified start time is after the specified end time, an error is returned.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>Specifies that only events that occur before or at the specified time are returned. If
   *          the specified end time is before the specified start time, an error is returned.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Specifies the event category. If you do not specify an event category, events of the
   *          category are not returned in the response. For example, if you do not specify
   *             <code>insight</code> as the value of <code>EventCategory</code>, no Insights events are
   *          returned.</p>
   */
  EventCategory?: EventCategory;

  /**
   * @public
   * <p>The number of events to return. Possible values are 1 through 50. The default is
   *          50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. This token
   *          must be passed in with the same parameters that were specified in the original call. For
   *          example, if the original call specified an AttributeKey of 'Username' with a value of
   *          'root', the call with NextToken should include those same parameters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies the type and name of a resource referenced by an event.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The type of a resource referenced by the event returned. When the resource type cannot
   *          be determined, null is returned. Some examples of resource types are: <b>Instance</b> for EC2, <b>Trail</b> for CloudTrail, <b>DBInstance</b> for Amazon RDS, and <b>AccessKey</b> for IAM. To learn more about how to look up and filter
   *          events by the resource types supported for a service, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html#filtering-cloudtrail-events">Filtering CloudTrail Events</a>.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The name of the resource referenced by the event returned. These are user-created names
   *          whose values will depend on the environment. For example, the resource name might be
   *          "auto-scaling-test-group" for an Auto Scaling Group or "i-1234567" for an EC2
   *          Instance.</p>
   */
  ResourceName?: string;
}

/**
 * @public
 * <p>Contains information about an event that was returned by a lookup request. The result
 *          includes a representation of a CloudTrail event.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The CloudTrail ID of the event returned.</p>
   */
  EventId?: string;

  /**
   * @public
   * <p>The name of the event returned.</p>
   */
  EventName?: string;

  /**
   * @public
   * <p>Information about whether the event is a write event or a read event. </p>
   */
  ReadOnly?: string;

  /**
   * @public
   * <p>The Amazon Web Services access key ID that was used to sign the request. If the request
   *          was made with temporary security credentials, this is the access key ID of the temporary
   *          credentials.</p>
   */
  AccessKeyId?: string;

  /**
   * @public
   * <p>The date and time of the event returned.</p>
   */
  EventTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services service to which the request was made.</p>
   */
  EventSource?: string;

  /**
   * @public
   * <p>A user name or role name of the requester that called the API in the event
   *          returned.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>A list of resources referenced by the event returned.</p>
   */
  Resources?: Resource[];

  /**
   * @public
   * <p>A JSON string that contains a representation of the event returned.</p>
   */
  CloudTrailEvent?: string;
}

/**
 * @public
 * <p>Contains a response to a LookupEvents action.</p>
 */
export interface LookupEventsResponse {
  /**
   * @public
   * <p>A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed
   *          first.</p>
   */
  Events?: Event[];

  /**
   * @public
   * <p>The token to use to get the next page of results after a previous API call. If the token
   *          does not appear, there are no more results to return. The token must be passed in with the
   *          same parameters as the previous call. For example, if the original call specified an
   *          AttributeKey of 'Username' with a value of 'root', the call with NextToken should include
   *          those same parameters.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutEventSelectorsRequest {
  /**
   * @public
   * <p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string
   *          must meet the following requirements:</p>
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
   *          <p>If you specify a trail ARN, it must be in the following format.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailName: string | undefined;

  /**
   * @public
   * <p>Specifies the settings for your event selectors. You can configure up to five event
   *          selectors for a trail. You can use either <code>EventSelectors</code> or
   *             <code>AdvancedEventSelectors</code> in a <code>PutEventSelectors</code> request, but not
   *          both. If you apply <code>EventSelectors</code> to a trail, any existing
   *             <code>AdvancedEventSelectors</code> are overwritten.</p>
   */
  EventSelectors?: EventSelector[];

  /**
   * @public
   * <p> Specifies the settings for advanced event selectors. You can add advanced event
   *          selectors, and conditions for your advanced event selectors, up to a maximum of 500 values
   *          for all conditions and selectors on a trail. You can use either
   *             <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you
   *          apply <code>AdvancedEventSelectors</code> to a trail, any existing
   *             <code>EventSelectors</code> are overwritten. For more information about advanced event
   *          selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> in the <i>CloudTrail User Guide</i>. </p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

/**
 * @public
 */
export interface PutEventSelectorsResponse {
  /**
   * @public
   * <p>Specifies the ARN of the trail that was updated with event selectors. The following is
   *          the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>Specifies the event selectors configured for your trail.</p>
   */
  EventSelectors?: EventSelector[];

  /**
   * @public
   * <p>Specifies the advanced event selectors configured for your trail.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];
}

/**
 * @public
 * <p>The formatting or syntax of the <code>InsightSelectors</code> JSON statement in your
 *             <code>PutInsightSelectors</code> or <code>GetInsightSelectors</code> request is not
 *          valid, or the specified insight type in the <code>InsightSelectors</code> statement is not
 *          a valid insight type.</p>
 */
export class InvalidInsightSelectorsException extends __BaseException {
  readonly name: "InvalidInsightSelectorsException" = "InvalidInsightSelectorsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInsightSelectorsException, __BaseException>) {
    super({
      name: "InvalidInsightSelectorsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInsightSelectorsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutInsightSelectorsRequest {
  /**
   * @public
   * <p>The name of the CloudTrail trail for which you want to change or add Insights
   *          selectors.</p>
   */
  TrailName: string | undefined;

  /**
   * @public
   * <p>A JSON string that contains the insight types you want to log on a trail.
   *             <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code> are valid Insight
   *          types.</p>
   *          <p>The <code>ApiCallRateInsight</code> Insights type analyzes write-only
   *          management API calls that are aggregated per minute against a baseline API call volume.</p>
   *          <p>The <code>ApiErrorRateInsight</code> Insights type analyzes management
   *          API calls that result in error codes. The error is shown if the API call is
   *          unsuccessful.</p>
   */
  InsightSelectors: InsightSelector[] | undefined;
}

/**
 * @public
 */
export interface PutInsightSelectorsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to change or add Insights
   *          selectors.</p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>A JSON string that contains the Insights event types that you want to log on a trail.
   *          The valid Insights types in this release are <code>ApiErrorRateInsight</code> and
   *             <code>ApiCallRateInsight</code>.</p>
   */
  InsightSelectors?: InsightSelector[];
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy.
   *          The following is the format of a resource ARN:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>.
   *       </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>
   *          A JSON-formatted string for an Amazon Web Services resource-based policy.
   *       </p>
   *          <p>The following are requirements for the resource policy:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                Contains only one action: cloudtrail-data:PutAuditEvents
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                Contains at least one statement. The policy can have a maximum of 20 statements.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                Each statement contains at least one principal. A statement can have a maximum of 50 principals.
   *             </p>
   *             </li>
   *          </ul>
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * @public
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy.
   *       </p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>
   *          The JSON-formatted string of the Amazon Web Services resource-based policy attached to the CloudTrail channel.
   *       </p>
   */
  ResourcePolicy?: string;
}

/**
 * @public
 * <p>
 *          This exception is thrown when the resouce-based policy has syntax errors, or contains a principal that is not valid.
 *       </p>
 *          <p>The following are requirements for the resource policy:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                Contains only one action: cloudtrail-data:PutAuditEvents
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                Contains at least one statement. The policy can have a maximum of 20 statements.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                Each statement contains at least one principal. A statement can have a maximum of 50 principals.
 *             </p>
 *             </li>
 *          </ul>
 */
export class ResourcePolicyNotValidException extends __BaseException {
  readonly name: "ResourcePolicyNotValidException" = "ResourcePolicyNotValidException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePolicyNotValidException, __BaseException>) {
    super({
      name: "ResourcePolicyNotValidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePolicyNotValidException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception is thrown when the maximum number of CloudTrail delegated
 *          administrators is reached.</p>
 */
export class DelegatedAdminAccountLimitExceededException extends __BaseException {
  readonly name: "DelegatedAdminAccountLimitExceededException" = "DelegatedAdminAccountLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DelegatedAdminAccountLimitExceededException, __BaseException>) {
    super({
      name: "DelegatedAdminAccountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DelegatedAdminAccountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Specifies an organization member account ID as a CloudTrail delegated
 *          administrator.</p>
 */
export interface RegisterOrganizationDelegatedAdminRequest {
  /**
   * @public
   * <p>An organization member account ID that you want to designate as a delegated
   *          administrator.</p>
   */
  MemberAccountId: string | undefined;
}

/**
 * @public
 * <p>Returns the following response if successful. Otherwise, returns an error.</p>
 */
export interface RegisterOrganizationDelegatedAdminResponse {}

/**
 * @public
 * <p>Specifies the tags to remove from a trail, event data store, or channel.</p>
 */
export interface RemoveTagsRequest {
  /**
   * @public
   * <p>Specifies the ARN of the trail, event data store, or channel from which tags should be
   *          removed.</p>
   *          <p> Example trail ARN format:
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>Specifies a list of tags to be removed.</p>
   */
  TagsList: Tag[] | undefined;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface RemoveTagsResponse {}

/**
 * @public
 * <p>The event data store is not in a status that supports the operation.</p>
 */
export class InvalidEventDataStoreStatusException extends __BaseException {
  readonly name: "InvalidEventDataStoreStatusException" = "InvalidEventDataStoreStatusException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventDataStoreStatusException, __BaseException>) {
    super({
      name: "InvalidEventDataStoreStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventDataStoreStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface RestoreEventDataStoreRequest {
  /**
   * @public
   * <p>The ARN (or the ID suffix of the ARN) of the event data store that you want to
   *          restore.</p>
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface RestoreEventDataStoreResponse {
  /**
   * @public
   * <p>The event data store ARN.</p>
   */
  EventDataStoreArn?: string;

  /**
   * @public
   * <p>The name of the event data store.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the event data store.</p>
   */
  Status?: EventDataStoreStatus;

  /**
   * @public
   * <p>The advanced event selectors that were used to select events.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * <p>Indicates whether the event data store is collecting events from all Regions, or only
   *          from the Region in which the event data store was created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * <p>The retention period, in days.</p>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates that termination protection is enabled and the event data store cannot be
   *          automatically deleted.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * <p>The timestamp of an event data store's creation.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp that shows when an event data store was updated, if applicable.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface StartEventDataStoreIngestionRequest {
  /**
   * @public
   * <p>The ARN (or ID suffix of the ARN) of the event data store for which you want to start ingestion.</p>
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface StartEventDataStoreIngestionResponse {}

/**
 * @public
 * <p> This exception is thrown when the provided source S3 bucket is not valid for import.
 *       </p>
 */
export class InvalidImportSourceException extends __BaseException {
  readonly name: "InvalidImportSourceException" = "InvalidImportSourceException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidImportSourceException, __BaseException>) {
    super({
      name: "InvalidImportSourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidImportSourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartImportRequest {
  /**
   * @public
   * <p> The ARN of the destination event data store. Use this parameter for a new import.
   *       </p>
   */
  Destinations?: string[];

  /**
   * @public
   * <p> The source S3 bucket for the import. Use this parameter for a new import. </p>
   */
  ImportSource?: ImportSource;

  /**
   * @public
   * <p> Use with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *          When you specify a time range, CloudTrail checks the prefix and log file names to
   *          verify the names contain a date between the specified <code>StartEventTime</code> and
   *             <code>EndEventTime</code> before attempting to import events. </p>
   */
  StartEventTime?: Date;

  /**
   * @public
   * <p> Use with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *          When you specify a time range, CloudTrail checks the prefix and log file names to
   *          verify the names contain a date between the specified <code>StartEventTime</code> and
   *             <code>EndEventTime</code> before attempting to import events. </p>
   */
  EndEventTime?: Date;

  /**
   * @public
   * <p> The ID of the import. Use this parameter when you are retrying an import. </p>
   */
  ImportId?: string;
}

/**
 * @public
 */
export interface StartImportResponse {
  /**
   * @public
   * <p> The ID of the import. </p>
   */
  ImportId?: string;

  /**
   * @public
   * <p> The ARN of the destination event data store. </p>
   */
  Destinations?: string[];

  /**
   * @public
   * <p> The source S3 bucket for the import. </p>
   */
  ImportSource?: ImportSource;

  /**
   * @public
   * <p> Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   */
  StartEventTime?: Date;

  /**
   * @public
   * <p> Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   */
  EndEventTime?: Date;

  /**
   * @public
   * <p> Shows the status of the import after a <code>StartImport</code> request. An import
   *          finishes with a status of <code>COMPLETED</code> if there were no failures, or
   *             <code>FAILED</code> if there were failures. </p>
   */
  ImportStatus?: ImportStatus;

  /**
   * @public
   * <p> The timestamp for the import's creation. </p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p> The timestamp of the import's last update, if applicable. </p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>The request to CloudTrail to start logging Amazon Web Services API calls for an
 *          account.</p>
 */
export interface StartLoggingRequest {
  /**
   * @public
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail
   *          logs Amazon Web Services API calls. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface StartLoggingResponse {}

/**
 * @public
 * <p>The query that was submitted has validation errors, or uses incorrect syntax or
 *          unsupported keywords. For more information about writing a query, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User
 *             Guide</i>.</p>
 */
export class InvalidQueryStatementException extends __BaseException {
  readonly name: "InvalidQueryStatementException" = "InvalidQueryStatementException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidQueryStatementException, __BaseException>) {
    super({
      name: "InvalidQueryStatementException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidQueryStatementException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You are already running the maximum number of concurrent queries. The maximum number of concurrent queries is 10. Wait a minute for some
 *          queries to finish, and then run the query again.</p>
 */
export class MaxConcurrentQueriesException extends __BaseException {
  readonly name: "MaxConcurrentQueriesException" = "MaxConcurrentQueriesException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Brief description of the exception returned by the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxConcurrentQueriesException, __BaseException>) {
    super({
      name: "MaxConcurrentQueriesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxConcurrentQueriesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartQueryRequest {
  /**
   * @public
   * <p>The SQL code of your query.</p>
   */
  QueryStatement?: string;

  /**
   * @public
   * <p> The URI for the S3 bucket where CloudTrail delivers the query results. </p>
   */
  DeliveryS3Uri?: string;

  /**
   * @public
   * <p>
   *          The alias that identifies a query template.
   *       </p>
   */
  QueryAlias?: string;

  /**
   * @public
   * <p>
   *          The query parameters for the specified <code>QueryAlias</code>.
   *       </p>
   */
  QueryParameters?: string[];
}

/**
 * @public
 */
export interface StartQueryResponse {
  /**
   * @public
   * <p>The ID of the started query.</p>
   */
  QueryId?: string;
}

/**
 * @public
 */
export interface StopEventDataStoreIngestionRequest {
  /**
   * @public
   * <p>The ARN (or ID suffix of the ARN) of the event data store for which you want to stop ingestion.</p>
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface StopEventDataStoreIngestionResponse {}

/**
 * @public
 */
export interface StopImportRequest {
  /**
   * @public
   * <p> The ID of the import. </p>
   */
  ImportId: string | undefined;
}

/**
 * @public
 */
export interface StopImportResponse {
  /**
   * @public
   * <p> The ID for the import. </p>
   */
  ImportId?: string;

  /**
   * @public
   * <p> The source S3 bucket for the import. </p>
   */
  ImportSource?: ImportSource;

  /**
   * @public
   * <p> The ARN of the destination event data store. </p>
   */
  Destinations?: string[];

  /**
   * @public
   * <p> The status of the import. </p>
   */
  ImportStatus?: ImportStatus;

  /**
   * @public
   * <p> The timestamp of the import's creation. </p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p> The timestamp of the import's last update. </p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p> Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   */
  StartEventTime?: Date;

  /**
   * @public
   * <p> Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   */
  EndEventTime?: Date;

  /**
   * @public
   * <p> Returns information on the stopped import. </p>
   */
  ImportStatistics?: ImportStatistics;
}

/**
 * @public
 * <p>Passes the request to CloudTrail to stop logging Amazon Web Services API calls for
 *          the specified account.</p>
 */
export interface StopLoggingRequest {
  /**
   * @public
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail
   *          will stop logging Amazon Web Services API calls. The following is the format of a trail
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface StopLoggingResponse {}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * @public
   * <p>The ARN or ID (the ARN suffix) of the channel that you want to update.</p>
   */
  Channel: string | undefined;

  /**
   * @public
   * <p>The ARNs of event data stores that you want to log events arriving through the channel.</p>
   */
  Destinations?: Destination[];

  /**
   * @public
   * <p>
   *          Changes the name of the channel.
   *       </p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * @public
   * <p>The ARN of the channel that was updated.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The name of the channel that was updated.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The event source of the channel that was updated.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>The event data stores that log events arriving through the channel.</p>
   */
  Destinations?: Destination[];
}

/**
 * @public
 */
export interface UpdateEventDataStoreRequest {
  /**
   * @public
   * <p>The ARN (or the ID suffix of the ARN) of the event data store that you want to
   *          update.</p>
   */
  EventDataStore: string | undefined;

  /**
   * @public
   * <p>The event data store name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The advanced event selectors used to select events for the event data store. You can
   *          configure up to five advanced event selectors for each event data store.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * <p>Specifies whether an event data store collects events from all Regions, or only from the
   *          Region in which it was created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * <p>Specifies whether an event data store collects events logged for an organization in
   *             Organizations.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * <p>The retention period of the event data store, in days. You can set a retention period of
   *          up to 2557 days, the equivalent of seven years. CloudTrail  Lake determines whether to retain an event by checking if the <code>eventTime</code>
   *          of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events
   *          when the <code>eventTime</code> is older than 90 days.</p>
   *          <note>
   *             <p>If you decrease the retention period of an event data store, CloudTrail will remove any events with an <code>eventTime</code> older than the new retention period. For example, if the previous
   *             retention period was 365 days and you decrease it to 100 days, CloudTrail  will remove events with an <code>eventTime</code> older than 100 days.</p>
   *          </note>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates that termination protection is enabled and the event data store cannot be
   *          automatically deleted.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the KMS key ID to use to encrypt the events delivered by
   *             CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a
   *          fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique
   *          identifier.</p>
   *          <important>
   *             <p>Disabling or deleting the KMS key, or removing CloudTrail
   *             permissions on the key, prevents CloudTrail from logging events to the event data
   *             store, and prevents users from querying the data in the event data store that was
   *             encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you
   *             disable or delete a KMS key that you are using with an event data store,
   *             delete or back up your event data store.</p>
   *          </important>
   *          <p>CloudTrail also supports KMS multi-Region keys. For more
   *          information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region
   *             keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
   *          <p>Examples:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>12345678-1234-1234-1234-123456789012</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export interface UpdateEventDataStoreResponse {
  /**
   * @public
   * <p>The ARN of the event data store.</p>
   */
  EventDataStoreArn?: string;

  /**
   * @public
   * <p>The name of the event data store.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of an event data store.</p>
   */
  Status?: EventDataStoreStatus;

  /**
   * @public
   * <p>The advanced event selectors that are applied to the event data store.</p>
   */
  AdvancedEventSelectors?: AdvancedEventSelector[];

  /**
   * @public
   * <p>Indicates whether the event data store includes events from all Regions, or only from
   *          the Region in which it was created.</p>
   */
  MultiRegionEnabled?: boolean;

  /**
   * @public
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   */
  OrganizationEnabled?: boolean;

  /**
   * @public
   * <p>The retention period, in days.</p>
   */
  RetentionPeriod?: number;

  /**
   * @public
   * <p>Indicates whether termination protection is enabled for the event data store.</p>
   */
  TerminationProtectionEnabled?: boolean;

  /**
   * @public
   * <p>The timestamp that shows when an event data store was first created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp that shows when the event data store was last updated.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>Specifies settings to update for the trail.</p>
 */
export interface UpdateTrailRequest {
  /**
   * @public
   * <p>Specifies the name of the trail or trail ARN. If <code>Name</code> is a trail name, the
   *          string must meet the following requirements:</p>
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
   *          <p>If <code>Name</code> is a trail ARN, it must be in the following format.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.
   *          See <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3
   *             Bucket Naming Requirements</a>.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>. The maximum length is 200
   *          characters.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * <p>Specifies the name of the Amazon SNS topic defined for notification of log file
   *          delivery. The maximum length is 256 characters.</p>
   */
  SnsTopicName?: string;

  /**
   * @public
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * @public
   * <p>Specifies whether the trail applies only to the current Region or to all Regions. The
   *          default is false. If the trail exists only in the current Region and this value is set to
   *          true, shadow trails (replications of the trail) will be created in the other Regions. If
   *          the trail exists in all Regions and this value is set to false, the trail will remain in
   *          the Region where it was created, and its shadow trails in other Regions will be deleted. As
   *          a best practice, consider using trails that log events in all Regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * @public
   * <p>Specifies whether log file validation is enabled. The default is false.</p>
   *          <note>
   *             <p>When you disable log file integrity validation, the chain of digest files is broken
   *             after one hour. CloudTrail does not create digest files for log files that were
   *             delivered during a period in which log file integrity validation was disabled. For
   *             example, if you enable log file integrity validation at noon on January 1, disable it at
   *             noon on January 2, and re-enable it at noon on January 10, digest files will not be
   *             created for the log files delivered from noon on January 2 to noon on January 10. The
   *             same applies whenever you stop CloudTrail logging or delete a trail.</p>
   *          </note>
   */
  EnableLogFileValidation?: boolean;

  /**
   * @public
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that
   *          represents the log group to which CloudTrail logs are delivered. You must use a log
   *          group that exists in your account.</p>
   *          <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group. You must use a role that exists in your account.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * @public
   * <p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to
   *          an alias, a fully specified ARN to a key, or a globally unique identifier.</p>
   *          <p>CloudTrail also supports KMS multi-Region keys. For more
   *          information about multi-Region keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">Using multi-Region
   *             keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
   * @public
   * <p>Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false,
   *          and cannot be true unless the call is made on behalf of an Amazon Web Services account that
   *          is the management account or delegated administrator account for an organization in Organizations. If the trail is not an organization trail and this is set to
   *             <code>true</code>, the trail will be created in all Amazon Web Services accounts that
   *          belong to the organization. If the trail is an organization trail and this is set to
   *             <code>false</code>, the trail will remain in the current Amazon Web Services account but
   *          be deleted from all member accounts in the organization.</p>
   */
  IsOrganizationTrail?: boolean;
}

/**
 * @public
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 */
export interface UpdateTrailResponse {
  /**
   * @public
   * <p>Specifies the name of the trail.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log
   *          files.</p>
   */
  S3BucketName?: string;

  /**
   * @public
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your IAM Log Files</a>.</p>
   */
  S3KeyPrefix?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>This field is no longer in use. Use <code>SnsTopicARN</code>.</p>
   */
  SnsTopicName?: string;

  /**
   * @public
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
   *          notifications when log files are delivered. The following is the format of a topic
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   */
  SnsTopicARN?: string;

  /**
   * @public
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * @public
   * <p>Specifies whether the trail exists in one Region or in all Regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * @public
   * <p>Specifies the ARN of the trail that was updated. The following is the format of a trail
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   */
  TrailARN?: string;

  /**
   * @public
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * @public
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail
   *          logs are delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * @public
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * @public
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}
