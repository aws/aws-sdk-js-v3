// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudTrailServiceException as __BaseException } from "./CloudTrailServiceException";

/**
 * <p>
 *          You do not have sufficient access to perform this action.
 *       </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> This exception is thrown when you start a new import and a previous import is still in
 *          progress. </p>
 * @public
 */
export class AccountHasOngoingImportException extends __BaseException {
  readonly name: "AccountHasOngoingImportException" = "AccountHasOngoingImportException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified account is not found or not part of an
 *          organization.</p>
 * @public
 */
export class AccountNotFoundException extends __BaseException {
  readonly name: "AccountNotFoundException" = "AccountNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified account is not registered as the CloudTrail delegated administrator.</p>
 * @public
 */
export class AccountNotRegisteredException extends __BaseException {
  readonly name: "AccountNotRegisteredException" = "AccountNotRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the account is already registered as the CloudTrail
 *          delegated administrator.</p>
 * @public
 */
export class AccountRegisteredException extends __BaseException {
  readonly name: "AccountRegisteredException" = "AccountRegisteredException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A custom key-value pair associated with a resource such as a CloudTrail
 *          trail, event data store, dashboard, or channel.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key in a key-value pair. The key must be must be no longer than 128 Unicode
   *          characters. The key must be unique for the resource to which it applies.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value in a key-value pair of a tag. The value must be no longer than 256 Unicode
   *          characters.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Specifies the tags to add to a trail, event data store, dashboard, or channel.</p>
 * @public
 */
export interface AddTagsRequest {
  /**
   * <p>Specifies the ARN of the trail, event data store, dashboard, or channel to which one or more tags will be
   *          added.</p>
   *          <p>The format of a trail ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>The format of an event data store ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>The format of a dashboard ARN is: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>The format of a channel ARN is:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Contains a list of tags, up to a limit of 50</p>
   * @public
   */
  TagsList: Tag[] | undefined;
}

/**
 * <p>Returns the objects or data if successful. Otherwise, returns an error.</p>
 * @public
 */
export interface AddTagsResponse {}

/**
 * <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 * @public
 */
export class ChannelARNInvalidException extends __BaseException {
  readonly name: "ChannelARNInvalidException" = "ChannelARNInvalidException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when CloudTrail cannot find the specified channel.</p>
 * @public
 */
export class ChannelNotFoundException extends __BaseException {
  readonly name: "ChannelNotFoundException" = "ChannelNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when an operation is called with an ARN that is not valid.</p>
 *          <p>The following is the format of a trail ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a dashboard ARN: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 * @public
 */
export class CloudTrailARNInvalidException extends __BaseException {
  readonly name: "CloudTrailARNInvalidException" = "CloudTrailARNInvalidException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 * @public
 */
export class EventDataStoreARNInvalidException extends __BaseException {
  readonly name: "EventDataStoreARNInvalidException" = "EventDataStoreARNInvalidException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The specified event data store was not found.</p>
 * @public
 */
export class EventDataStoreNotFoundException extends __BaseException {
  readonly name: "EventDataStoreNotFoundException" = "EventDataStoreNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The event data store is inactive.</p>
 * @public
 */
export class InactiveEventDataStoreException extends __BaseException {
  readonly name: "InactiveEventDataStoreException" = "InactiveEventDataStoreException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified tag key or values are not valid. It can also
 *          occur if there are duplicate tags or too many tags on the resource.</p>
 * @public
 */
export class InvalidTagParameterException extends __BaseException {
  readonly name: "InvalidTagParameterException" = "InvalidTagParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class InvalidTrailNameException extends __BaseException {
  readonly name: "InvalidTrailNameException" = "InvalidTrailNameException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 * @public
 */
export class NoManagementAccountSLRExistsException extends __BaseException {
  readonly name: "NoManagementAccountSLRExistsException" = "NoManagementAccountSLRExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the Amazon Web Services account making the request to
 *          create or update an organization trail or event data store is not the management account
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html">Organization event data stores</a>.</p>
 * @public
 */
export class NotOrganizationMasterAccountException extends __BaseException {
  readonly name: "NotOrganizationMasterAccountException" = "NotOrganizationMasterAccountException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the requested operation is not permitted.</p>
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name: "OperationNotPermittedException" = "OperationNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified resource is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 * @public
 */
export class ResourceTypeNotSupportedException extends __BaseException {
  readonly name: "ResourceTypeNotSupportedException" = "ResourceTypeNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The number of tags per trail, event data store, dashboard, or channel has exceeded the permitted amount. Currently, the limit is
 *          50.</p>
 * @public
 */
export class TagsLimitExceededException extends __BaseException {
  readonly name: "TagsLimitExceededException" = "TagsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the requested operation is not supported.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A single selector statement in an advanced event selector.</p>
 * @public
 */
export interface AdvancedFieldSelector {
  /**
   * <p> A field in a CloudTrail event record on which to filter events to be logged. For
   *          event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or events outside of Amazon Web Services, the field is used only for
   *          selecting events as filtering is not supported.</p>
   *          <p>For more information, see
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedFieldSelector.html">AdvancedFieldSelector</a>
   *          in the <i>CloudTrail API Reference</i>.</p>
   *          <note>
   *             <p>Selectors don't support the use of wildcards like <code>*</code> . To match multiple values with a single condition,
   *             you may use <code>StartsWith</code>, <code>EndsWith</code>, <code>NotStartsWith</code>, or <code>NotEndsWith</code> to explicitly match the beginning or end of the event field.</p>
   *          </note>
   * @public
   */
  Field: string | undefined;

  /**
   * <p> An operator that includes events that match the exact value of the event record field
   *          specified as the value of <code>Field</code>. This is the only valid operator that you can
   *          use with the <code>readOnly</code>, <code>eventCategory</code>, and
   *             <code>resources.type</code> fields.</p>
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * <p>An operator that includes events that match the first few characters of the event record
   *          field specified as the value of <code>Field</code>.</p>
   * @public
   */
  StartsWith?: string[] | undefined;

  /**
   * <p>An operator that includes events that match the last few characters of the event record
   *          field specified as the value of <code>Field</code>.</p>
   * @public
   */
  EndsWith?: string[] | undefined;

  /**
   * <p> An operator that excludes events that match the exact value of the event record field
   *          specified as the value of <code>Field</code>. </p>
   * @public
   */
  NotEquals?: string[] | undefined;

  /**
   * <p> An operator that excludes events that match the first few characters of the event
   *          record field specified as the value of <code>Field</code>. </p>
   * @public
   */
  NotStartsWith?: string[] | undefined;

  /**
   * <p> An operator that excludes events that match the last few characters of the event record
   *          field specified as the value of <code>Field</code>. </p>
   * @public
   */
  NotEndsWith?: string[] | undefined;
}

/**
 * <p>Advanced event selectors let you create fine-grained selectors for CloudTrail management, data, and network activity events. They help you control costs by logging only those
 *          events that are important to you. For more information about configuring advanced event selectors, see
 *             the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html">Logging network activity events</a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events</a> topics in the <i>CloudTrail User Guide</i>.</p>
 *          <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
 *          <p>For information about configurable advanced event selector fields, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html">AdvancedEventSelector</a>
 *          in the <i>CloudTrail API Reference</i>.</p>
 * @public
 */
export interface AdvancedEventSelector {
  /**
   * <p>An optional, descriptive name for an advanced event selector, such as "Log data events
   *          for only two S3 buckets".</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Contains all selector statements in an advanced event selector.</p>
   * @public
   */
  FieldSelectors: AdvancedFieldSelector[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BillingMode = {
  EXTENDABLE_RETENTION_PRICING: "EXTENDABLE_RETENTION_PRICING",
  FIXED_RETENTION_PRICING: "FIXED_RETENTION_PRICING",
} as const;

/**
 * @public
 */
export type BillingMode = (typeof BillingMode)[keyof typeof BillingMode];

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * <p>The ARN (or the ID suffix of the ARN) of an event data store on which the specified
   *          query is running.</p>
   *
   * @deprecated
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * <p>The ID of the query that you want to cancel. The <code>QueryId</code> comes from the
   *          response of a <code>StartQuery</code> operation.</p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p>
   * The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
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
   * <p>The ID of the canceled query.</p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p>Shows the status of a query after a <code>CancelQuery</code> request. Typically, the
   *          values shown are either <code>RUNNING</code> or <code>CANCELLED</code>.</p>
   * @public
   */
  QueryStatus: QueryStatus | undefined;

  /**
   * <p>
   *    The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * <p>The specified query cannot be canceled because it is in the <code>FINISHED</code>,
 *             <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code> state.</p>
 * @public
 */
export class InactiveQueryException extends __BaseException {
  readonly name: "InactiveQueryException" = "InactiveQueryException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The request includes a parameter that is not valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The query ID does not exist or does not map to a query.</p>
 * @public
 */
export class QueryIdNotFoundException extends __BaseException {
  readonly name: "QueryIdNotFoundException" = "QueryIdNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the management account of an organization is registered as
 *          the CloudTrail delegated administrator.</p>
 * @public
 */
export class CannotDelegateManagementAccountException extends __BaseException {
  readonly name: "CannotDelegateManagementAccountException" = "CannotDelegateManagementAccountException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Contains information about a returned CloudTrail channel.</p>
 * @public
 */
export interface Channel {
  /**
   * <p>The Amazon Resource Name (ARN) of a channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p> The name of the CloudTrail channel. For service-linked channels, the name is
   *             <code>aws-service-channel/service-name/custom-suffix</code> where
   *             <code>service-name</code> represents the name of the Amazon Web Services service that
   *          created the channel and <code>custom-suffix</code> represents the suffix created by the
   *             Amazon Web Services service. </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>
 *          This exception is thrown when the provided channel already exists.
 *       </p>
 * @public
 */
export class ChannelAlreadyExistsException extends __BaseException {
  readonly name: "ChannelAlreadyExistsException" = "ChannelAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified event data store cannot yet be deleted because it
 *          is in use by a channel.</p>
 * @public
 */
export class ChannelExistsForEDSException extends __BaseException {
  readonly name: "ChannelExistsForEDSException" = "ChannelExistsForEDSException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>
 *          This exception is thrown when the maximum number of channels limit is exceeded.
 *       </p>
 * @public
 */
export class ChannelMaxLimitExceededException extends __BaseException {
  readonly name: "ChannelMaxLimitExceededException" = "ChannelMaxLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Contains information about the destination receiving events.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The type of destination for events arriving from a channel. For channels used for a CloudTrail Lake integration, the value is <code>EVENT_DATA_STORE</code>. For service-linked channels,
   *          the value is <code>AWS_SERVICE</code>. </p>
   * @public
   */
  Type: DestinationType | undefined;

  /**
   * <p> For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel.
   *          For service-linked channels, the location is the name of the Amazon Web Services service.</p>
   * @public
   */
  Location: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the partner or external event source. You cannot change this name after you create the
   *          channel. A maximum of one channel is allowed per source.</p>
   *          <p>
   *          A source can be either <code>Custom</code> for all valid non-Amazon Web Services
   *          events, or the name of a partner event source. For information about the source names for available partners, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information">Additional information about integration partners</a> in the CloudTrail User Guide.
   *       </p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>One or more event data stores to which events arriving through a channel will be logged.</p>
   * @public
   */
  Destinations: Destination[] | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The name of the new channel.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The partner or external event source name.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The event data stores that log the events arriving through the channel.</p>
   * @public
   */
  Destinations?: Destination[] | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 * @public
 */
export class InvalidEventDataStoreCategoryException extends __BaseException {
  readonly name: "InvalidEventDataStoreCategoryException" = "InvalidEventDataStoreCategoryException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified value of <code>Source</code> is not valid.</p>
 * @public
 */
export class InvalidSourceException extends __BaseException {
  readonly name: "InvalidSourceException" = "InvalidSourceException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @enum
 */
export const RefreshScheduleFrequencyUnit = {
  DAYS: "DAYS",
  HOURS: "HOURS",
} as const;

/**
 * @public
 */
export type RefreshScheduleFrequencyUnit =
  (typeof RefreshScheduleFrequencyUnit)[keyof typeof RefreshScheduleFrequencyUnit];

/**
 * <p>
 * Specifies the frequency for a dashboard refresh schedule.
 * </p>
 *          <p>
 *       For a custom dashboard, you can schedule a refresh for every 1, 6, 12, or 24 hours, or every day.
 *    </p>
 * @public
 */
export interface RefreshScheduleFrequency {
  /**
   * <p>
   *    The unit to use for the refresh.
   * </p>
   *          <p>For custom dashboards, the unit can be <code>HOURS</code> or <code>DAYS</code>.</p>
   *          <p>For the Highlights dashboard, the <code>Unit</code> must be <code>HOURS</code>.</p>
   * @public
   */
  Unit?: RefreshScheduleFrequencyUnit | undefined;

  /**
   * <p>
   * The value for the refresh schedule.
   * </p>
   *          <p>
   *    For custom dashboards, the following values are valid when the unit is <code>HOURS</code>: <code>1</code>, <code>6</code>, <code>12</code>, <code>24</code>
   *          </p>
   *          <p>For custom dashboards, the only valid value when the unit is <code>DAYS</code> is <code>1</code>.</p>
   *          <p>For the Highlights dashboard, the <code>Value</code> must be <code>6</code>.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RefreshScheduleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type RefreshScheduleStatus = (typeof RefreshScheduleStatus)[keyof typeof RefreshScheduleStatus];

/**
 * <p>
 * The schedule for a dashboard refresh.
 * </p>
 * @public
 */
export interface RefreshSchedule {
  /**
   * <p>
   * The frequency at which you want the dashboard refreshed.
   * </p>
   * @public
   */
  Frequency?: RefreshScheduleFrequency | undefined;

  /**
   * <p>
   * Specifies whether the refresh schedule is enabled. Set the value to <code>ENABLED</code> to enable the refresh schedule, or to <code>DISABLED</code> to turn off the refresh schedule.
   * </p>
   * @public
   */
  Status?: RefreshScheduleStatus | undefined;

  /**
   * <p>
   *    The time of day in UTC to run the schedule; for hourly only refer to minutes; default is 00:00.
   * </p>
   * @public
   */
  TimeOfDay?: string | undefined;
}

/**
 * <p>
 * Contains information about a widget on a CloudTrail Lake dashboard.
 * </p>
 * @public
 */
export interface RequestWidget {
  /**
   * <p>
   * The query statement for the widget. For custom dashboard widgets, you can query across multiple event data stores as long as all event data stores exist in your account.
   * </p>
   *          <note>
   *             <p>When a query uses <code>?</code> with <code>eventTime</code>, <code>?</code> must be surrounded by single quotes as follows: <code>'?'</code>.</p>
   *          </note>
   * @public
   */
  QueryStatement: string | undefined;

  /**
   * <p>
   *    The optional query parameters. The following query parameters are valid: <code>$StartTime$</code>, <code>$EndTime$</code>, and <code>$Period$</code>.
   * </p>
   * @public
   */
  QueryParameters?: string[] | undefined;

  /**
   * <p>
   *    The view properties for the widget. For more information about view properties, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-widget-properties.html">
   *       View properties for widgets
   *    </a> in the <i>CloudTrail User Guide</i>.
   * </p>
   * @public
   */
  ViewProperties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * <p>
   *    The name of the dashboard. The name must be unique to your account.
   * </p>
   *          <p>To create the Highlights dashboard, the name must be <code>AWSCloudTrail-Highlights</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *    The refresh schedule configuration for the dashboard.
   * </p>
   *          <p>To create the Highlights dashboard, you must set a refresh schedule and set the <code>Status</code> to <code>ENABLED</code>. The <code>Unit</code> for the refresh schedule must be <code>HOURS</code>
   *    and the <code>Value</code> must be <code>6</code>.</p>
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * <p>
   *    Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
   * </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>
   * An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets.
   * </p>
   *          <p>You do not need to specify widgets for the Highlights dashboard.</p>
   * @public
   */
  Widgets?: RequestWidget[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardType = {
  CUSTOM: "CUSTOM",
  MANAGED: "MANAGED",
} as const;

/**
 * @public
 */
export type DashboardType = (typeof DashboardType)[keyof typeof DashboardType];

/**
 * <p>
 *    A widget on a CloudTrail Lake dashboard.
 * </p>
 * @public
 */
export interface Widget {
  /**
   * <p>The query alias used to identify the query for the widget.
   * </p>
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * <p>
   * The SQL query statement for the widget.
   * </p>
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * <p>
   *    The query parameters for the widget.
   * </p>
   * @public
   */
  QueryParameters?: string[] | undefined;

  /**
   * <p>
   *    The view properties for the widget. For more information about view properties, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-widget-properties.html">
   *       View properties for widgets
   * </a> in the <i>CloudTrail User Guide</i>..
   * </p>
   * @public
   */
  ViewProperties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * <p>
   * The ARN for the dashboard.
   * </p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>
   * The name of the dashboard.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   * The dashboard type.
   * </p>
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * <p>
   * An array of widgets for the dashboard.
   * </p>
   * @public
   */
  Widgets?: Widget[] | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * <p>
   * The refresh schedule for the dashboard, if configured.
   * </p>
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * <p>
   *    Indicates whether termination protection is enabled for the dashboard.
   * </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 * @public
 */
export class InsufficientEncryptionPolicyException extends __BaseException {
  readonly name: "InsufficientEncryptionPolicyException" = "InsufficientEncryptionPolicyException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The query that was submitted has validation errors, or uses incorrect syntax or
 *          unsupported keywords. For more information about writing a query, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User
 *             Guide</i>.</p>
 * @public
 */
export class InvalidQueryStatementException extends __BaseException {
  readonly name: "InvalidQueryStatementException" = "InvalidQueryStatementException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>
 *    This exception is thrown when the quota is exceeded. For information about CloudTrail quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ct.html#limits_cloudtrail">Service quotas</a>
 *    in the <i>Amazon Web Services General Reference</i>.
 * </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_how-to-enable-disable-trusted-access">How to enable or disable trusted access</a> in the <i>Organizations User Guide</i> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> in the <i>CloudTrail User Guide</i>.</p>
 * @public
 */
export class CloudTrailAccessNotEnabledException extends __BaseException {
  readonly name: "CloudTrailAccessNotEnabledException" = "CloudTrailAccessNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The name of the event data store.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The advanced event selectors to use to select the events for the data store. You can
   *          configure up to five advanced event selectors for each event data store.</p>
   *          <p> For more information about how to use advanced event selectors to log CloudTrail
   *          events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced">Log events by using advanced event selectors</a> in the CloudTrail User Guide.</p>
   *          <p>For more information about how to use advanced event selectors to include Config configuration items in your event data store, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-eds-cli.html#lake-cli-create-eds-config">Create an event data store for Config configuration
   *             items</a> in the CloudTrail User Guide.</p>
   *          <p>For more information about how to use advanced event selectors to include events outside of Amazon Web Services events in your event data store, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-integrations-cli.html#lake-cli-create-integration">Create an integration to log events from outside Amazon Web Services</a> in the CloudTrail User Guide.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Specifies whether the event data store includes events from all Regions, or only from
   *          the Region in which the event data store is created.</p>
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether an event data store collects events logged for an organization in
   *             Organizations.</p>
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period of the event data store, in days. If <code>BillingMode</code> is set to <code>EXTENDABLE_RETENTION_PRICING</code>, you can set a retention period of
   *          up to 3653 days, the equivalent of 10 years. If <code>BillingMode</code> is set to <code>FIXED_RETENTION_PRICING</code>, you can set a retention period of
   *          up to 2557 days, the equivalent of seven years.</p>
   *          <p>CloudTrail  Lake determines whether to retain an event by checking if the <code>eventTime</code>
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
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>Specifies whether termination protection is enabled for the event data store. If
   *          termination protection is enabled, you cannot delete the event data store until termination
   *          protection is disabled.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the event data store should start ingesting live events. The default is true.</p>
   * @public
   */
  StartIngestion?: boolean | undefined;

  /**
   * <p>The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.</p>
   *          <p>The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EXTENDABLE_RETENTION_PRICING</code> - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years).
   *                 The default retention period for this billing mode is 366 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIXED_RETENTION_PRICING</code> - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years).
   *                 The default retention period for this billing mode is 2557 days.</p>
   *             </li>
   *          </ul>
   *          <p>The default value is <code>EXTENDABLE_RETENTION_PRICING</code>.</p>
   *          <p>For more information about CloudTrail pricing,
   *          see <a href="http://aws.amazon.com/cloudtrail/pricing/">CloudTrail Pricing</a> and
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html">Managing CloudTrail Lake costs</a>.</p>
   * @public
   */
  BillingMode?: BillingMode | undefined;
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
   * <p>The ARN of the event data store.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The name of the event data store.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of event data store creation.</p>
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * <p>The advanced event selectors that were used to select the events for the data
   *          store.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Indicates whether the event data store collects events from all Regions, or only from
   *          the Region in which it was created.</p>
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period of an event data store, in days.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>Indicates whether termination protection is enabled for the event data store.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagsList?: Tag[] | undefined;

  /**
   * <p>The timestamp that shows when the event data store was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp that shows when an event data store was updated, if applicable.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The billing mode for the event data store.</p>
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * <p>An event data store with that name already exists.</p>
 * @public
 */
export class EventDataStoreAlreadyExistsException extends __BaseException {
  readonly name: "EventDataStoreAlreadyExistsException" = "EventDataStoreAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Your account has used the maximum number of event data stores.</p>
 * @public
 */
export class EventDataStoreMaxLimitExceededException extends __BaseException {
  readonly name: "EventDataStoreMaxLimitExceededException" = "EventDataStoreMaxLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 * @public
 */
export class InsufficientDependencyServiceAccessPermissionException extends __BaseException {
  readonly name: "InsufficientDependencyServiceAccessPermissionException" =
    "InsufficientDependencyServiceAccessPermissionException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class InvalidEventSelectorsException extends __BaseException {
  readonly name: "InvalidEventSelectorsException" = "InvalidEventSelectorsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the KMS key ARN is not valid.</p>
 * @public
 */
export class InvalidKmsKeyIdException extends __BaseException {
  readonly name: "InvalidKmsKeyIdException" = "InvalidKmsKeyIdException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 * @public
 */
export class KmsException extends __BaseException {
  readonly name: "KmsException" = "KmsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the KMS key does not exist, when the S3
 *          bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is
 *          not in the same Region.</p>
 * @public
 */
export class KmsKeyNotFoundException extends __BaseException {
  readonly name: "KmsKeyNotFoundException" = "KmsKeyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when Organizations is not configured to support all
 *          features. All features must be enabled in Organizations to support creating an
 *          organization trail or event data store.</p>
 * @public
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
  readonly name: "OrganizationNotInAllFeaturesModeException" = "OrganizationNotInAllFeaturesModeException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the request is made from an Amazon Web Services account
 *          that is not a member of an organization. To make this request, sign in using the
 *          credentials of an account that belongs to an organization.</p>
 * @public
 */
export class OrganizationsNotInUseException extends __BaseException {
  readonly name: "OrganizationsNotInUseException" = "OrganizationsNotInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when a call results in the <code>InvalidClientTokenId</code>
 *          error code. This can occur when you are creating or updating a trail to send notifications
 *          to an Amazon SNS topic that is in a suspended Amazon Web Services account.</p>
 * @public
 */
export class CloudTrailInvalidClientTokenIdException extends __BaseException {
  readonly name: "CloudTrailInvalidClientTokenIdException" = "CloudTrailInvalidClientTokenIdException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Cannot set a CloudWatch Logs delivery for this Region.</p>
 * @public
 */
export class CloudWatchLogsDeliveryUnavailableException extends __BaseException {
  readonly name: "CloudWatchLogsDeliveryUnavailableException" = "CloudWatchLogsDeliveryUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Specifies the settings for each trail.</p>
 * @public
 */
export interface CreateTrailRequest {
  /**
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
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.
   *          For information about bucket naming rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Bucket naming rules</a>
   *          in the <i>Amazon Simple Storage Service User Guide</i>.
   *         </p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files">Finding Your CloudTrail Log Files</a>. The maximum length is 200
   *          characters.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>Specifies the name or ARN of the Amazon SNS topic defined for notification of log file
   *          delivery. The maximum length is 256 characters.</p>
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the
   *          log files.</p>
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * <p>Specifies whether the trail is created in the current Region or in all Regions. The
   *          default is false, which creates a trail only in the Region where you are signed in. As a
   *          best practice, consider creating trails that log events in all Regions.</p>
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
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
   * @public
   */
  EnableLogFileValidation?: boolean | undefined;

  /**
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that
   *          represents the log group to which CloudTrail logs will be delivered. You must use a
   *          log group that exists in your account.</p>
   *          <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group. You must use a role that exists in your account.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false,
   *          and cannot be true unless the call is made on behalf of an Amazon Web Services account that
   *          is the management account or delegated administrator account for an organization in Organizations.</p>
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagsList?: Tag[] | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface CreateTrailResponse {
  /**
   * <p>Specifies the name of the trail.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log
   *          files.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files">Finding Your CloudTrail Log Files</a>.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>This field is no longer in use. Use <code>SnsTopicARN</code>.</p>
   *
   * @deprecated
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
   *          notifications when log files are delivered. The format of a topic ARN is:</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the
   *          log files.</p>
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * <p>Specifies whether the trail exists in one Region or in all Regions.</p>
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * <p>Specifies the ARN of the trail that was created. The format of a trail ARN is:</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail
   *          logs will be delivered.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;
}

/**
 * <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 * @public
 */
export class InsufficientS3BucketPolicyException extends __BaseException {
  readonly name: "InsufficientS3BucketPolicyException" = "InsufficientS3BucketPolicyException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the policy on the Amazon SNS topic is not
 *          sufficient.</p>
 * @public
 */
export class InsufficientSnsTopicPolicyException extends __BaseException {
  readonly name: "InsufficientSnsTopicPolicyException" = "InsufficientSnsTopicPolicyException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the provided CloudWatch Logs log group is not
 *          valid.</p>
 * @public
 */
export class InvalidCloudWatchLogsLogGroupArnException extends __BaseException {
  readonly name: "InvalidCloudWatchLogsLogGroupArnException" = "InvalidCloudWatchLogsLogGroupArnException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the provided role is not valid.</p>
 * @public
 */
export class InvalidCloudWatchLogsRoleArnException extends __BaseException {
  readonly name: "InvalidCloudWatchLogsRoleArnException" = "InvalidCloudWatchLogsRoleArnException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the combination of parameters provided is not
 *          valid.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 * @public
 */
export class InvalidS3BucketNameException extends __BaseException {
  readonly name: "InvalidS3BucketNameException" = "InvalidS3BucketNameException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 * @public
 */
export class InvalidS3PrefixException extends __BaseException {
  readonly name: "InvalidS3PrefixException" = "InvalidS3PrefixException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the provided SNS topic name is not valid.</p>
 * @public
 */
export class InvalidSnsTopicNameException extends __BaseException {
  readonly name: "InvalidSnsTopicNameException" = "InvalidSnsTopicNameException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is no longer in use.</p>
 *
 * @deprecated
 * @public
 */
export class KmsKeyDisabledException extends __BaseException {
  readonly name: "KmsKeyDisabledException" = "KmsKeyDisabledException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the maximum number of trails is reached.</p>
 * @public
 */
export class MaximumNumberOfTrailsExceededException extends __BaseException {
  readonly name: "MaximumNumberOfTrailsExceededException" = "MaximumNumberOfTrailsExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 * @public
 */
export class S3BucketDoesNotExistException extends __BaseException {
  readonly name: "S3BucketDoesNotExistException" = "S3BucketDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>
 *          This exception is thrown when the request rate exceeds the limit.
 *       </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the specified trail already exists.</p>
 * @public
 */
export class TrailAlreadyExistsException extends __BaseException {
  readonly name: "TrailAlreadyExistsException" = "TrailAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is no longer in use.</p>
 * @public
 */
export class TrailNotProvidedException extends __BaseException {
  readonly name: "TrailNotProvidedException" = "TrailNotProvidedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The ARN or the <code>UUID</code> value of the channel that you want to delete.</p>
   * @public
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
export interface DeleteDashboardRequest {
  /**
   * <p>
   * The name or ARN for the dashboard.
   * </p>
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {}

/**
 * @public
 */
export interface DeleteEventDataStoreRequest {
  /**
   * <p>The ARN (or the ID suffix of the ARN) of the event data store to delete.</p>
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventDataStoreResponse {}

/**
 * <p>
 *         You cannot delete the event data store because Lake query federation is enabled. To delete the event data store, run the <code>DisableFederation</code> operation to
 *          disable Lake query federation on the event data store.
 *       </p>
 * @public
 */
export class EventDataStoreFederationEnabledException extends __BaseException {
  readonly name: "EventDataStoreFederationEnabledException" = "EventDataStoreFederationEnabledException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EventDataStoreFederationEnabledException, __BaseException>) {
    super({
      name: "EventDataStoreFederationEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EventDataStoreFederationEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> This exception is thrown when you try to update or delete an event data store that
 *          currently has an import in progress. </p>
 * @public
 */
export class EventDataStoreHasOngoingImportException extends __BaseException {
  readonly name: "EventDataStoreHasOngoingImportException" = "EventDataStoreHasOngoingImportException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The event data store cannot be deleted because termination protection is enabled for
 *          it.</p>
 * @public
 */
export class EventDataStoreTerminationProtectedException extends __BaseException {
  readonly name: "EventDataStoreTerminationProtectedException" = "EventDataStoreTerminationProtectedException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel you're deleting the resource-based policy from.</p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * <p>
 *          This exception is thrown when the provided resource does not exist, or the ARN format of the resource is not valid.
 *       </p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a dashboard ARN: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 * @public
 */
export class ResourceARNNotValidException extends __BaseException {
  readonly name: "ResourceARNNotValidException" = "ResourceARNNotValidException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>
 *          This exception is thrown when the specified resource policy is not found.
 *       </p>
 * @public
 */
export class ResourcePolicyNotFoundException extends __BaseException {
  readonly name: "ResourcePolicyNotFoundException" = "ResourcePolicyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The request that specifies the name of a trail to delete.</p>
 * @public
 */
export interface DeleteTrailRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail to be deleted. The
   *          following is the format of a trail ARN.
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface DeleteTrailResponse {}

/**
 * <p>This exception is thrown when an operation is called on a trail from a Region other than
 *          the Region in which the trail was created.</p>
 * @public
 */
export class InvalidHomeRegionException extends __BaseException {
  readonly name: "InvalidHomeRegionException" = "InvalidHomeRegionException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the trail with the given name is not found.</p>
 * @public
 */
export class TrailNotFoundException extends __BaseException {
  readonly name: "TrailNotFoundException" = "TrailNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Removes CloudTrail delegated administrator permissions from a specified member
 *          account in an organization that is currently designated as a delegated
 *          administrator.</p>
 * @public
 */
export interface DeregisterOrganizationDelegatedAdminRequest {
  /**
   * <p>A delegated administrator account ID. This is a member account in an organization that
   *          is currently designated as a delegated administrator.</p>
   * @public
   */
  DelegatedAdminAccountId: string | undefined;
}

/**
 * <p>Returns the following response if successful. Otherwise, returns an error.</p>
 * @public
 */
export interface DeregisterOrganizationDelegatedAdminResponse {}

/**
 * <p> This exception is thrown when the account making the request is not the organization's
 *          management account. </p>
 * @public
 */
export class NotOrganizationManagementAccountException extends __BaseException {
  readonly name: "NotOrganizationManagementAccountException" = "NotOrganizationManagementAccountException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The ARN (or the ID suffix of the ARN) of an event data store on which the specified
   *          query was run.</p>
   *
   * @deprecated
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * <p>The query ID.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>
   *          The alias that identifies a query template.
   *       </p>
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * <p>
   * The ID of the dashboard refresh.
   * </p>
   * @public
   */
  RefreshId?: string | undefined;

  /**
   * <p>
   * The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
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
 * <p>Gets metadata about a query, including the number of events that were matched, the total
 *          number of events scanned, the query run time in milliseconds, and the query's creation
 *          time.</p>
 * @public
 */
export interface QueryStatisticsForDescribeQuery {
  /**
   * <p>The number of events that matched a query.</p>
   * @public
   */
  EventsMatched?: number | undefined;

  /**
   * <p>The number of events that the query scanned in the event data store.</p>
   * @public
   */
  EventsScanned?: number | undefined;

  /**
   * <p>The total bytes that the query scanned in the event data store. This value matches the
   *          number of bytes for which your account is billed for the query, unless the query is still
   *          running.</p>
   * @public
   */
  BytesScanned?: number | undefined;

  /**
   * <p>The query's run time, in milliseconds.</p>
   * @public
   */
  ExecutionTimeInMillis?: number | undefined;

  /**
   * <p>The creation time of the query.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryResponse {
  /**
   * <p>The ID of the query.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>The SQL code of a query.</p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p>The status of a query. Values for <code>QueryStatus</code> include <code>QUEUED</code>,
   *             <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>,
   *          <code>TIMED_OUT</code>, or <code>CANCELLED</code>
   *          </p>
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * <p>Metadata about a query, including the number of events that were matched, the total
   *          number of events scanned, the query run time in milliseconds, and the query's creation
   *          time.</p>
   * @public
   */
  QueryStatistics?: QueryStatisticsForDescribeQuery | undefined;

  /**
   * <p>The error message returned if a query failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The URI for the S3 bucket where CloudTrail delivered query results, if
   *          applicable.</p>
   * @public
   */
  DeliveryS3Uri?: string | undefined;

  /**
   * <p>The delivery status.</p>
   * @public
   */
  DeliveryStatus?: DeliveryStatus | undefined;

  /**
   * <p>
   *          The prompt used for a generated query. For information about generated queries, see
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html">Create CloudTrail Lake queries from natural language prompts</a>
   *          in the <i>CloudTrail </i> user guide.
   *       </p>
   * @public
   */
  Prompt?: string | undefined;

  /**
   * <p>
   *    The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * <p>Returns information about the trail.</p>
 * @public
 */
export interface DescribeTrailsRequest {
  /**
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
   * @public
   */
  trailNameList?: string[] | undefined;

  /**
   * <p>Specifies whether to include shadow trails in the response. A shadow trail is the
   *          replication in a Region of a trail that was created in a different Region, or in the case
   *          of an organization trail, the replication of an organization trail in member accounts. If
   *          you do not include shadow trails, organization trails in a member account and Region
   *          replication trails will not be returned. The default is true.</p>
   * @public
   */
  includeShadowTrails?: boolean | undefined;
}

/**
 * <p>The settings for a trail.</p>
 * @public
 */
export interface Trail {
  /**
   * <p>Name of the trail set by calling <a>CreateTrail</a>. The maximum length is
   *          128 characters.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Name of the Amazon S3 bucket into which CloudTrail delivers your trail
   *          files. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Amazon S3
   *             Bucket naming rules</a>.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files">Finding Your CloudTrail Log Files</a>. The maximum length is 200
   *          characters.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>This field is no longer in use. Use <code>SnsTopicARN</code>.</p>
   *
   * @deprecated
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
   *          notifications when log files are delivered. The following is the format of a topic
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * <p>Set to <b>True</b> to include Amazon Web Services API calls
   *          from Amazon Web Services global services such as IAM. Otherwise, <b>False</b>.</p>
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * <p>Specifies whether the trail exists only in one Region or exists in all Regions.</p>
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * <p>The Region in which the trail was created.</p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p>Specifies the ARN of the trail. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>Specifies whether log file validation is enabled.</p>
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * <p>Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log
   *          group to which CloudTrail logs will be delivered.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies if the trail has custom event selectors.</p>
   * @public
   */
  HasCustomEventSelectors?: boolean | undefined;

  /**
   * <p>Specifies whether a trail has insight types specified in an <code>InsightSelector</code>
   *          list.</p>
   * @public
   */
  HasInsightSelectors?: boolean | undefined;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface DescribeTrailsResponse {
  /**
   * <p>The list of trail objects. Trail objects with string values are only returned if values
   *          for the objects exist in a trail's configuration. For example, <code>SNSTopicName</code>
   *          and <code>SNSTopicARN</code> are only returned in results if a trail is configured to send
   *          SNS notifications. Similarly, <code>KMSKeyId</code> only appears in results if a trail's
   *          log files are encrypted with KMS
   *          customer managed keys.</p>
   * @public
   */
  trailList?: Trail[] | undefined;
}

/**
 * <p>
 *          You are trying to update a resource when another request is in progress. Allow sufficient wait time for the previous request to complete, then retry your request.
 *       </p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DisableFederationRequest {
  /**
   * <p>
   *          The ARN (or ID suffix of the ARN) of the event data store for which you want to disable Lake query federation.
   *       </p>
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FederationStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;

/**
 * @public
 */
export type FederationStatus = (typeof FederationStatus)[keyof typeof FederationStatus];

/**
 * @public
 */
export interface DisableFederationResponse {
  /**
   * <p>
   *          The ARN of the event data store for which you disabled Lake query federation.
   *       </p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>
   *          The federation status.
   *       </p>
   * @public
   */
  FederationStatus?: FederationStatus | undefined;
}

/**
 * @public
 */
export interface EnableFederationRequest {
  /**
   * <p>The ARN (or ID suffix of the ARN) of the event data store for which you want to enable Lake query federation.</p>
   * @public
   */
  EventDataStore: string | undefined;

  /**
   * <p>
   *          The ARN of the federation role to use for the event data store. Amazon Web Services services like Lake Formation use this federation role to access data for the federated event
   *          data store. The federation role must exist in your account and provide the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions-role">required minimum permissions</a>.
   *       </p>
   * @public
   */
  FederationRoleArn: string | undefined;
}

/**
 * @public
 */
export interface EnableFederationResponse {
  /**
   * <p>
   *          The ARN of the event data store for which you enabled Lake query federation.
   *       </p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>
   *          The federation status.
   *       </p>
   * @public
   */
  FederationStatus?: FederationStatus | undefined;

  /**
   * <p>
   *          The ARN of the federation role.
   *       </p>
   * @public
   */
  FederationRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GenerateQueryRequest {
  /**
   * <p>
   *          The ARN (or ID suffix of the ARN) of the event data store
   *          that you want to query. You can only specify one event data store.
   *       </p>
   * @public
   */
  EventDataStores: string[] | undefined;

  /**
   * <p>
   *          The prompt that you want to use to generate the query. The prompt must be in English. For example prompts, see
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html#lake-query-generator-examples">Example prompts</a>
   *          in the <i>CloudTrail </i> user guide.
   *       </p>
   * @public
   */
  Prompt: string | undefined;
}

/**
 * @public
 */
export interface GenerateQueryResponse {
  /**
   * <p>
   *          The SQL query statement generated from the prompt.
   *       </p>
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * <p>
   *          An alias that identifies the prompt. When you run the <code>StartQuery</code> operation, you can pass in either the <code>QueryAlias</code> or
   *          <code>QueryStatement</code> parameter.
   *       </p>
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * <p>
   *    The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * <p>
 *          This exception is thrown when a valid query could not be generated for the provided prompt.
 *       </p>
 * @public
 */
export class GenerateResponseException extends __BaseException {
  readonly name: "GenerateResponseException" = "GenerateResponseException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GenerateResponseException, __BaseException>) {
    super({
      name: "GenerateResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GenerateResponseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * <p>The ARN or <code>UUID</code> of a channel.</p>
   * @public
   */
  Channel: string | undefined;
}

/**
 * <p>A table showing information about the most recent successful and failed attempts
 *          to ingest events.</p>
 * @public
 */
export interface IngestionStatus {
  /**
   * <p>The time stamp of the most recent successful ingestion of events for the channel.</p>
   * @public
   */
  LatestIngestionSuccessTime?: Date | undefined;

  /**
   * <p>The event ID of the most recent successful ingestion of events.</p>
   * @public
   */
  LatestIngestionSuccessEventID?: string | undefined;

  /**
   * <p>The error code for the most recent failure to ingest events.</p>
   * @public
   */
  LatestIngestionErrorCode?: string | undefined;

  /**
   * <p>The time stamp of the most recent attempt to ingest events on the channel.</p>
   * @public
   */
  LatestIngestionAttemptTime?: Date | undefined;

  /**
   * <p>The event ID of the most recent attempt to ingest events.</p>
   * @public
   */
  LatestIngestionAttemptEventID?: string | undefined;
}

/**
 * <p> Contains configuration information about the channel. </p>
 * @public
 */
export interface SourceConfig {
  /**
   * <p> Specifies whether the channel applies to a single Region or to all Regions.</p>
   * @public
   */
  ApplyToAllRegions?: boolean | undefined;

  /**
   * <p> The advanced event selectors that are configured for the channel.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * <p>The ARN of an channel returned by a <code>GetChannel</code> request.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p> The name of the CloudTrail channel. For service-linked channels, the name is
   *             <code>aws-service-channel/service-name/custom-suffix</code> where
   *             <code>service-name</code> represents the name of the Amazon Web Services service that
   *          created the channel and <code>custom-suffix</code> represents the suffix generated by the
   *             Amazon Web Services service. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The source for the CloudTrail channel.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p> Provides information about the advanced event selectors configured for the channel, and
   *          whether the channel applies to all Regions or a single Region. </p>
   * @public
   */
  SourceConfig?: SourceConfig | undefined;

  /**
   * <p>The destinations for the channel. For channels created for integrations,
   *          the destinations are the event data stores that log events arriving through the channel.
   *          For service-linked channels, the destination is the Amazon Web Services service that created the service-linked channel to receive events.</p>
   * @public
   */
  Destinations?: Destination[] | undefined;

  /**
   * <p>A table showing information about the most recent successful and failed attempts
   *       to ingest events.</p>
   * @public
   */
  IngestionStatus?: IngestionStatus | undefined;
}

/**
 * @public
 */
export interface GetDashboardRequest {
  /**
   * <p>
   * The name or ARN for the dashboard.
   * </p>
   * @public
   */
  DashboardId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DashboardStatus = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATED: "UPDATED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DashboardStatus = (typeof DashboardStatus)[keyof typeof DashboardStatus];

/**
 * @public
 */
export interface GetDashboardResponse {
  /**
   * <p>
   *    The ARN for the dashboard.
   * </p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>
   * The type of dashboard.
   * </p>
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * <p>
   * The status of the dashboard.
   * </p>
   * @public
   */
  Status?: DashboardStatus | undefined;

  /**
   * <p>
   * An array of widgets for the dashboard.
   * </p>
   * @public
   */
  Widgets?: Widget[] | undefined;

  /**
   * <p>
   * The refresh schedule for the dashboard, if configured.
   * </p>
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * <p>
   *    The timestamp that shows when the dashboard was created.
   * </p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>
   *    The timestamp that shows when the dashboard was last updated.
   * </p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>
   * The ID of the last dashboard refresh.
   * </p>
   * @public
   */
  LastRefreshId?: string | undefined;

  /**
   * <p>
   * Provides information about failures for the last scheduled refresh.
   * </p>
   * @public
   */
  LastRefreshFailureReason?: string | undefined;

  /**
   * <p>
   * Indicates whether termination protection is enabled for the dashboard.
   * </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetEventConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which you want to retrieve event configuration settings.</p>
   * @public
   */
  EventDataStore?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Type = {
  RequestContext: "RequestContext",
  TagContext: "TagContext",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>An object that contains information types to be included in CloudTrail enriched events.</p>
 * @public
 */
export interface ContextKeySelector {
  /**
   * <p>Specifies the type of the event record field in ContextKeySelector. Valid values include RequestContext, TagContext.</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>A list of keys defined by Type to be included in CloudTrail enriched events. </p>
   * @public
   */
  Equals: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MaxEventSize = {
  Large: "Large",
  Standard: "Standard",
} as const;

/**
 * @public
 */
export type MaxEventSize = (typeof MaxEventSize)[keyof typeof MaxEventSize];

/**
 * @public
 */
export interface GetEventConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which the event configuration settings are returned.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The maximum allowed size for events stored in the specified event data store.</p>
   * @public
   */
  MaxEventSize?: MaxEventSize | undefined;

  /**
   * <p>The list of context key selectors that are configured for the event data store.</p>
   * @public
   */
  ContextKeySelectors?: ContextKeySelector[] | undefined;
}

/**
 * <p>The event data store is not in a status that supports the operation.</p>
 * @public
 */
export class InvalidEventDataStoreStatusException extends __BaseException {
  readonly name: "InvalidEventDataStoreStatusException" = "InvalidEventDataStoreStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
export interface GetEventDataStoreRequest {
  /**
   * <p>The ARN (or ID suffix of the ARN) of the event data store about which you want
   *          information.</p>
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * <p>Contains information about a partition key for an event data store.</p>
 * @public
 */
export interface PartitionKey {
  /**
   * <p>The name of the partition key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The data type of the partition key. For example, <code>bigint</code> or <code>string</code>.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface GetEventDataStoreResponse {
  /**
   * <p>The event data store Amazon Resource Number (ARN).</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The name of the event data store.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of an event data store.</p>
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * <p>The advanced event selectors used to select events for the data store.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Indicates whether the event data store includes events from all Regions, or only from
   *          the Region in which it was created.</p>
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period of the event data store, in days.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>Indicates that termination protection is enabled.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>The timestamp of the event data store's creation.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>Shows the time that an event data store was updated, if applicable.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The billing mode for the event data store.</p>
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * <p>
   *          Indicates the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html">Lake query federation</a> status. The status is
   *          <code>ENABLED</code> if Lake query federation is enabled, or <code>DISABLED</code> if Lake query federation is disabled. You cannot delete an event data store if the <code>FederationStatus</code> is <code>ENABLED</code>.
   *       </p>
   * @public
   */
  FederationStatus?: FederationStatus | undefined;

  /**
   * <p>
   *          If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
   *       </p>
   * @public
   */
  FederationRoleArn?: string | undefined;

  /**
   * <p>The partition keys for the event data store. To improve query performance and efficiency, CloudTrail Lake organizes
   *          event data into partitions based on values derived from partition keys.</p>
   * @public
   */
  PartitionKeys?: PartitionKey[] | undefined;
}

/**
 * @public
 */
export interface GetEventSelectorsRequest {
  /**
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
   * @public
   */
  TrailName: string | undefined;
}

/**
 * <p>You can configure the <code>DataResource</code> in an <code>EventSelector</code> to log data events for the following three resource types:</p>
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
 *          <p>To log data events for all other resource types including objects stored in
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">directory buckets</a>, you must use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html">AdvancedEventSelectors</a>. You must also
 *          use <code>AdvancedEventSelectors</code> if you want to filter on the <code>eventName</code> field.</p>
 *          <p>Configure the <code>DataResource</code> to specify the resource type and resource ARNs for which you want to log data events.</p>
 *          <note>
 *             <p>The total number of allowed data resources is 250. This number can be distributed
 *             between 1 and 5 event selectors, but the total cannot exceed 250 across all
 *             selectors for the trail.</p>
 *          </note>
 *          <p>The following example demonstrates how logging works when you configure logging of all
 *          data events for a general purpose bucket named <code>amzn-s3-demo-bucket1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code>
 *          and <code>Write</code> data events.</p>
 *          <ol>
 *             <li>
 *                <p>A user uploads an image file to <code>amzn-s3-demo-bucket1</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API.
 *                It is recorded as a data event in CloudTrail. Because the CloudTrail
 *                user specified an S3 bucket with an empty prefix, events that occur on any object in
 *                that bucket are logged. The trail processes and logs the event.</p>
 *             </li>
 *             <li>
 *                <p>A user uploads an object to an Amazon S3 bucket named
 *                <code>arn:aws:s3:::amzn-s3-demo-bucket1</code>.</p>
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
 * @public
 */
export interface DataResource {
  /**
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
   *          <p>Additional resource types are available through <i>advanced</i>
   *          event selectors. For more
   *          information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html">AdvancedEventSelector</a>.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified
   *          resource type.</p>
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
   *                empty object prefix such as <code>arn:aws:s3:::amzn-s3-demo-bucket1/</code>. The trail logs data
   *                events for all objects in this S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>To log data events for specific objects, specify the S3 bucket and object prefix
   *                such as <code>arn:aws:s3:::amzn-s3-demo-bucket1/example-images</code>. The trail logs data events
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
   * @public
   */
  Values?: string[] | undefined;
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
 * <p>Use event selectors to further specify the management and data event settings for your
 *          trail. By default, trails created without specific event selectors will be configured to
 *          log all read and write management events, and no data events. When an event occurs in your
 *          account, CloudTrail evaluates the event selector for all trails. For each trail, if
 *          the event matches any event selector, the trail processes and logs the event. If the event
 *          doesn't match any event selector, the trail doesn't log the event.</p>
 *          <p>You can configure up to five event selectors for a trail.</p>
 *          <p>You cannot apply both event selectors and advanced event selectors to a trail.</p>
 * @public
 */
export interface EventSelector {
  /**
   * <p>Specify if you want your trail to log read-only events, write-only events, or all. For
   *          example, the EC2 <code>GetConsoleOutput</code> is a read-only API operation and
   *             <code>RunInstances</code> is a write-only API operation.</p>
   *          <p> By default, the value is <code>All</code>.</p>
   * @public
   */
  ReadWriteType?: ReadWriteType | undefined;

  /**
   * <p>Specify if you want your event selector to include management events for your
   *          trail.</p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Management Events</a> in the <i>CloudTrail User
   *          Guide</i>.</p>
   *          <p>By default, the value is <code>true</code>.</p>
   *          <p>The first copy of management events is free. You are charged for additional copies of
   *          management events that you are logging on any subsequent trail in the same Region. For more
   *          information about CloudTrail pricing, see <a href="http://aws.amazon.com/cloudtrail/pricing/">CloudTrail Pricing</a>.</p>
   * @public
   */
  IncludeManagementEvents?: boolean | undefined;

  /**
   * <p>CloudTrail supports data event logging for Amazon S3 objects in standard S3 buckets, Lambda functions, and Amazon DynamoDB tables with basic event selectors.
   *          You can specify up to 250 resources for an individual event selector, but the total number
   *          of data resources cannot exceed 250 across all event selectors in a trail. This limit does
   *          not apply if you configure resource logging for all data events.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Data
   *             Events</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in CloudTrail</a> in the <i>CloudTrail User
   *          Guide</i>.</p>
   *          <note>
   *             <p>To log data events for all other resource types including objects stored in
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html">directory buckets</a>, you must use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html">AdvancedEventSelectors</a>. You must also
   *             use <code>AdvancedEventSelectors</code> if you want to filter on the <code>eventName</code> field.</p>
   *          </note>
   * @public
   */
  DataResources?: DataResource[] | undefined;

  /**
   * <p>An optional list of service event sources from which you do not want management events
   *          to be logged on your trail. In this release, the list can be empty (disables the filter),
   *          or it can filter out Key Management Service or Amazon RDS Data API events by
   *          containing <code>kms.amazonaws.com</code> or <code>rdsdata.amazonaws.com</code>. By
   *          default, <code>ExcludeManagementEventSources</code> is empty, and KMS and
   *             Amazon RDS Data API events are logged to your trail. You can exclude management
   *          event sources only in Regions that support the event source.</p>
   * @public
   */
  ExcludeManagementEventSources?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEventSelectorsResponse {
  /**
   * <p>The specified trail ARN that has the event selectors.</p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>The event selectors that are configured for the trail.</p>
   * @public
   */
  EventSelectors?: EventSelector[] | undefined;

  /**
   * <p> The advanced event selectors that are configured for the trail. </p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface GetImportRequest {
  /**
   * <p> The ID for the import. </p>
   * @public
   */
  ImportId: string | undefined;
}

/**
 * <p> The settings for the source S3 bucket. </p>
 * @public
 */
export interface S3ImportSource {
  /**
   * <p> The URI for the source S3 bucket. </p>
   * @public
   */
  S3LocationUri: string | undefined;

  /**
   * <p> The Region associated with the source S3 bucket. </p>
   * @public
   */
  S3BucketRegion: string | undefined;

  /**
   * <p> The IAM ARN role used to access the source S3 bucket. </p>
   * @public
   */
  S3BucketAccessRoleArn: string | undefined;
}

/**
 * <p> The import source. </p>
 * @public
 */
export interface ImportSource {
  /**
   * <p> The source S3 bucket. </p>
   * @public
   */
  S3: S3ImportSource | undefined;
}

/**
 * <p> Provides statistics for the specified <code>ImportID</code>. CloudTrail does not
 *          update import statistics in real-time. Returned values for parameters such as
 *             <code>EventsCompleted</code> may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import. </p>
 * @public
 */
export interface ImportStatistics {
  /**
   * <p> The number of S3 prefixes found for the import. </p>
   * @public
   */
  PrefixesFound?: number | undefined;

  /**
   * <p> The number of S3 prefixes that completed import. </p>
   * @public
   */
  PrefixesCompleted?: number | undefined;

  /**
   * <p>The number of log files that completed import.</p>
   * @public
   */
  FilesCompleted?: number | undefined;

  /**
   * <p> The number of trail events imported into the event data store. </p>
   * @public
   */
  EventsCompleted?: number | undefined;

  /**
   * <p> The number of failed entries. </p>
   * @public
   */
  FailedEntries?: number | undefined;
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
   * <p> The ID of the import. </p>
   * @public
   */
  ImportId?: string | undefined;

  /**
   * <p> The ARN of the destination event data store. </p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p> The source S3 bucket. </p>
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * <p> Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * <p> Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * <p> The status of the import. </p>
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * <p> The timestamp of the import's creation. </p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p> The timestamp of when the import was updated. </p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p> Provides statistics for the import. CloudTrail does not update import statistics
   *          in real-time. Returned values for parameters such as <code>EventsCompleted</code> may be
   *          lower than the actual value, because CloudTrail updates statistics incrementally
   *          over the course of the import. </p>
   * @public
   */
  ImportStatistics?: ImportStatistics | undefined;
}

/**
 * <p> The specified import was not found. </p>
 * @public
 */
export class ImportNotFoundException extends __BaseException {
  readonly name: "ImportNotFoundException" = "ImportNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   *          <p>You cannot use this parameter with the <code>EventDataStore</code> parameter.</p>
   * @public
   */
  TrailName?: string | undefined;

  /**
   * <p>
   *          Specifies the ARN (or ID suffix of the ARN) of the event data store for which you want to get Insights
   *          selectors.
   *       </p>
   *          <p>You cannot use this parameter with the <code>TrailName</code> parameter.</p>
   * @public
   */
  EventDataStore?: string | undefined;
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
 * <p>A JSON string that contains a list of Insights types that are logged on a trail or event data store.</p>
 * @public
 */
export interface InsightSelector {
  /**
   * <p>The type of Insights events to log on a trail or event data store. <code>ApiCallRateInsight</code> and
   *             <code>ApiErrorRateInsight</code> are valid Insight types.</p>
   *          <p>The <code>ApiCallRateInsight</code> Insights type analyzes write-only
   *          management API calls that are aggregated per minute against a baseline API call volume.</p>
   *          <p>The <code>ApiErrorRateInsight</code> Insights type analyzes management
   *          API calls that result in error codes. The error is shown if the API call is
   *          unsuccessful.</p>
   * @public
   */
  InsightType?: InsightType | undefined;
}

/**
 * @public
 */
export interface GetInsightSelectorsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to get Insights
   *          selectors.</p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>A JSON string that contains the Insight types you want to log on a trail or event data store. <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code> are supported
   *          as Insights types.</p>
   * @public
   */
  InsightSelectors?: InsightSelector[] | undefined;

  /**
   * <p>
   *          The ARN of the source event data store that enabled Insights events.
   *       </p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>
   *          The ARN of the destination event data store that logs Insights events.
   *       </p>
   * @public
   */
  InsightsDestination?: string | undefined;
}

/**
 * <p>If you run <code>GetInsightSelectors</code> on a trail or event data store that does not have Insights
 *          events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>.</p>
 * @public
 */
export class InsightNotEnabledException extends __BaseException {
  readonly name: "InsightNotEnabledException" = "InsightNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The ARN (or ID suffix of the ARN) of the event data store against which the query was
   *          run.</p>
   *
   * @deprecated
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * <p>The ID of the query for which you want to get results.</p>
   * @public
   */
  QueryId: string | undefined;

  /**
   * <p>A token you can use to get the next page of query results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of query results to display on a single page.</p>
   * @public
   */
  MaxQueryResults?: number | undefined;

  /**
   * <p>
   * The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * <p>Metadata about a query, such as the number of results.</p>
 * @public
 */
export interface QueryStatistics {
  /**
   * <p>The number of results returned.</p>
   * @public
   */
  ResultsCount?: number | undefined;

  /**
   * <p>The total number of results returned by a query.</p>
   * @public
   */
  TotalResultsCount?: number | undefined;

  /**
   * <p>The total bytes that the query scanned in the event data store. This value matches the
   *          number of bytes for which your account is billed for the query, unless the query is still
   *          running.</p>
   * @public
   */
  BytesScanned?: number | undefined;
}

/**
 * @public
 */
export interface GetQueryResultsResponse {
  /**
   * <p>The status of the query. Values include <code>QUEUED</code>, <code>RUNNING</code>,
   *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
   *             <code>CANCELLED</code>.</p>
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * <p>Shows the count of query results.</p>
   * @public
   */
  QueryStatistics?: QueryStatistics | undefined;

  /**
   * <p>Contains the individual event results of the query.</p>
   * @public
   */
  QueryResultRows?: Record<string, string>[][] | undefined;

  /**
   * <p>A token you can use to get the next page of query results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The error message returned if a query failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>This exception is thrown if the limit specified is not valid.</p>
 * @public
 */
export class InvalidMaxResultsException extends __BaseException {
  readonly name: "InvalidMaxResultsException" = "InvalidMaxResultsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.</p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to resource-based policy.
   *       </p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>
   *          A JSON-formatted string that contains the resource-based policy attached to the CloudTrail event data store, dashboard, or channel.
   *       </p>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>
   *          The default resource-based policy that is automatically generated for the delegated administrator of an Organizations organization.
   *          This policy will be evaluated in tandem with any policy you submit for the resource. For more information about this policy,
   *          see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html#cloudtrail-lake-organizations-eds-rbp">Default resource policy for delegated administrators</a>.
   *       </p>
   * @public
   */
  DelegatedAdminResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetTrailRequest {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve
   *          settings information.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTrailResponse {
  /**
   * <p>The settings for a trail.</p>
   * @public
   */
  Trail?: Trail | undefined;
}

/**
 * <p>The name of a trail about which you want the current status.</p>
 * @public
 */
export interface GetTrailStatusRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which you are
   *          requesting status. To get the status of a shadow trail (a replication of the trail in
   *          another Region), you must specify its ARN.</p>
   *          <p>
   *          The following is the format of a trail
   *          ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <note>
   *             <p>If the trail is an organization trail and you are a member account in the organization in Organizations, you must provide the full ARN of that trail, and not just the name.</p>
   *          </note>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface GetTrailStatusResponse {
  /**
   * <p>Whether the CloudTrail trail is currently logging Amazon Web Services API
   *          calls.</p>
   * @public
   */
  IsLogging?: boolean | undefined;

  /**
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting
   *          to deliver log files to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket, and
   *             does not occur for requests that time out. To resolve the issue,
   *             fix the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html">bucket policy</a> so that CloudTrail
   *             can write to the bucket; or create a new bucket and call <code>UpdateTrail</code> to specify the new bucket.</p>
   *          </note>
   * @public
   */
  LatestDeliveryError?: string | undefined;

  /**
   * <p>Displays any Amazon SNS error that CloudTrail encountered when attempting
   *          to send a notification. For more information about Amazon SNS errors, see the
   *             <a href="https://docs.aws.amazon.com/sns/latest/dg/welcome.html">Amazon SNS
   *             Developer Guide</a>. </p>
   * @public
   */
  LatestNotificationError?: string | undefined;

  /**
   * <p>Specifies the date and time that CloudTrail last delivered log files to an
   *          account's Amazon S3 bucket.</p>
   * @public
   */
  LatestDeliveryTime?: Date | undefined;

  /**
   * <p>Specifies the date and time of the most recent Amazon SNS notification that
   *             CloudTrail has written a new log file to an account's Amazon S3
   *          bucket.</p>
   * @public
   */
  LatestNotificationTime?: Date | undefined;

  /**
   * <p>Specifies the most recent date and time when CloudTrail started recording API
   *          calls for an Amazon Web Services account.</p>
   * @public
   */
  StartLoggingTime?: Date | undefined;

  /**
   * <p>Specifies the most recent date and time when CloudTrail stopped recording API
   *          calls for an Amazon Web Services account.</p>
   * @public
   */
  StopLoggingTime?: Date | undefined;

  /**
   * <p>Displays any CloudWatch Logs error that CloudTrail encountered when attempting
   *          to deliver logs to CloudWatch Logs.</p>
   * @public
   */
  LatestCloudWatchLogsDeliveryError?: string | undefined;

  /**
   * <p>Displays the most recent date and time when CloudTrail delivered logs to CloudWatch Logs.</p>
   * @public
   */
  LatestCloudWatchLogsDeliveryTime?: Date | undefined;

  /**
   * <p>Specifies the date and time that CloudTrail last delivered a digest file to an
   *          account's Amazon S3 bucket.</p>
   * @public
   */
  LatestDigestDeliveryTime?: Date | undefined;

  /**
   * <p>Displays any Amazon S3 error that CloudTrail encountered when attempting
   *          to deliver a digest file to the designated bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html">Error
   *             Responses</a> in the Amazon S3 API Reference. </p>
   *          <note>
   *             <p>This error occurs only when there is a problem with the destination S3 bucket, and
   *             does not occur for requests that time out. To resolve the issue,
   *             fix the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-s3-bucket-policy-for-cloudtrail.html">bucket policy</a> so that CloudTrail
   *             can write to the bucket; or create a new bucket and call <code>UpdateTrail</code> to specify the new bucket.</p>
   *          </note>
   * @public
   */
  LatestDigestDeliveryError?: string | undefined;

  /**
   * <p>This field is no longer in use.</p>
   * @public
   */
  LatestDeliveryAttemptTime?: string | undefined;

  /**
   * <p>This field is no longer in use.</p>
   * @public
   */
  LatestNotificationAttemptTime?: string | undefined;

  /**
   * <p>This field is no longer in use.</p>
   * @public
   */
  LatestNotificationAttemptSucceeded?: string | undefined;

  /**
   * <p>This field is no longer in use.</p>
   * @public
   */
  LatestDeliveryAttemptSucceeded?: string | undefined;

  /**
   * <p>This field is no longer in use.</p>
   * @public
   */
  TimeLoggingStarted?: string | undefined;

  /**
   * <p>This field is no longer in use.</p>
   * @public
   */
  TimeLoggingStopped?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p> The maximum number of CloudTrail channels to display on a single page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. This token
   *          must be passed in with the same parameters that were specified in the original call. For
   *          example, if the original call specified an AttributeKey of 'Username' with a value of
   *          'root', the call with NextToken should include those same parameters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p> The list of channels in the account. </p>
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * <p>
   * Specify a name prefix to filter on.
   * </p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>
   * Specify a dashboard type to filter on: <code>CUSTOM</code> or <code>MANAGED</code>.
   * </p>
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * <p>
   *    A token you can use to get the next page of dashboard results.
   * </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *    The maximum number of dashboards to display on a single page.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>
 * Provides information about a CloudTrail Lake dashboard.
 * </p>
 * @public
 */
export interface DashboardDetail {
  /**
   * <p>
   * The ARN for the dashboard.
   * </p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>
   * The type of dashboard.
   * </p>
   * @public
   */
  Type?: DashboardType | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * <p>
   *    Contains information about dashboards in the account, in the current Region that match the applied filters.
   * </p>
   * @public
   */
  Dashboards?: DashboardDetail[] | undefined;

  /**
   * <p>
   *    A token you can use to get the next page of dashboard results.
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventDataStoresRequest {
  /**
   * <p>A token you can use to get the next page of event data store results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of event data stores to display on a single page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A storage lake of event data against which you can run complex SQL-based queries. An
 *          event data store can include events that you have logged on your account. To select events for an event data
 *          store, use <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-concepts.html#adv-event-selectors">advanced event selectors</a>.</p>
 * @public
 */
export interface EventDataStore {
  /**
   * <p>The ARN of the event data store.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The name of the event data store.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates whether the event data store is protected from
   *          termination.</p>
   *
   * @deprecated
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>The status of an event data store.</p>
   *
   * @deprecated
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * <p>The advanced event selectors that were used to select
   *          events for the data store.</p>
   *
   * @deprecated
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Indicates whether the event data store includes events
   *          from all Regions, or only from the Region in which it was created.</p>
   *
   * @deprecated
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Indicates that an event data store is collecting logged
   *          events for an organization.</p>
   *
   * @deprecated
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period, in days.</p>
   *
   * @deprecated
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>The timestamp of the event data store's creation.</p>
   *
   * @deprecated
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp showing when an event data store was
   *          updated, if applicable. <code>UpdatedTimestamp</code> is always either the same or newer
   *          than the time shown in <code>CreatedTimestamp</code>.</p>
   *
   * @deprecated
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventDataStoresResponse {
  /**
   * <p>Contains information about event data stores in the account, in the current
   *          Region.</p>
   * @public
   */
  EventDataStores?: EventDataStore[] | undefined;

  /**
   * <p>A token you can use to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportFailuresRequest {
  /**
   * <p> The ID of the import. </p>
   * @public
   */
  ImportId: string | undefined;

  /**
   * <p> The maximum number of failures to display on a single page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A token you can use to get the next page of import failures. </p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p> Provides information about an import failure. </p>
 * @public
 */
export interface ImportFailureListItem {
  /**
   * <p> The location of the failure in the S3 bucket. </p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p> The status of the import. </p>
   * @public
   */
  Status?: ImportFailureStatus | undefined;

  /**
   * <p> The type of import error. </p>
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * <p> Provides the reason the import failed. </p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p> When the import was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListImportFailuresResponse {
  /**
   * <p> Contains information about the import failures. </p>
   * @public
   */
  Failures?: ImportFailureListItem[] | undefined;

  /**
   * <p> A token you can use to get the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsRequest {
  /**
   * <p> The maximum number of imports to display on a single page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The ARN of the destination event data store. </p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p> The status of the import. </p>
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * <p> A token you can use to get the next page of import results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> Contains information about an import that was returned by a lookup request. </p>
 * @public
 */
export interface ImportsListItem {
  /**
   * <p> The ID of the import. </p>
   * @public
   */
  ImportId?: string | undefined;

  /**
   * <p> The status of the import. </p>
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * <p> The ARN of the destination event data store. </p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p> The timestamp of the import's creation. </p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p> The timestamp of the import's last update. </p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListImportsResponse {
  /**
   * <p> The list of returned imports. </p>
   * @public
   */
  Imports?: ImportsListItem[] | undefined;

  /**
   * <p> A token you can use to get the next page of import results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InsightsMetricDataType = {
  FILL_WITH_ZEROS: "FillWithZeros",
  NON_ZERO_DATA: "NonZeroData",
} as const;

/**
 * @public
 */
export type InsightsMetricDataType = (typeof InsightsMetricDataType)[keyof typeof InsightsMetricDataType];

/**
 * @public
 */
export interface ListInsightsMetricDataRequest {
  /**
   * <p>The Amazon Web Services service to which the request was made, such as <code>iam.amazonaws.com</code> or <code>s3.amazonaws.com</code>.</p>
   * @public
   */
  EventSource: string | undefined;

  /**
   * <p>The name of the event, typically the Amazon Web Services API on which unusual levels of activity were recorded.</p>
   * @public
   */
  EventName: string | undefined;

  /**
   * <p>The type of CloudTrail Insights event, which is either <code>ApiCallRateInsight</code> or <code>ApiErrorRateInsight</code>.
   *          The <code>ApiCallRateInsight</code> Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
   *          The <code>ApiErrorRateInsight</code> Insights type analyzes management API calls that result in error codes.</p>
   * @public
   */
  InsightType: InsightType | undefined;

  /**
   * <p>Conditionally required if the <code>InsightType</code> parameter is set to <code>ApiErrorRateInsight</code>.</p>
   *          <p>If returning metrics for the <code>ApiErrorRateInsight</code> Insights type, this is the error to retrieve data for. For example, <code>AccessDenied</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Specifies, in UTC, the start time for time-series data. The value specified is inclusive; results include data points with the specified time stamp.</p>
   *          <p>The default is 90 days before the time of request.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Specifies, in UTC, the end time for time-series data. The value specified is exclusive;
   *          results include data points up to the specified time stamp.</p>
   *          <p>The default is the time of request.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Granularity of data to retrieve, in seconds. Valid values are <code>60</code>, <code>300</code>, and <code>3600</code>.
   *          If you specify any other value, you will get an error. The default is 3600 seconds.</p>
   * @public
   */
  Period?: number | undefined;

  /**
   * <p>Type of data points to return. Valid values are <code>NonZeroData</code> and
   *          <code>FillWithZeros</code>. The default is <code>NonZeroData</code>.</p>
   * @public
   */
  DataType?: InsightsMetricDataType | undefined;

  /**
   * <p>The maximum number of data points to return. Valid values are integers from 1 to 21600.
   *          The default value is 21600.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returned if all datapoints can't be returned in a single call. For example, due to reaching <code>MaxResults</code>.</p>
   *          <p>Add this parameter to the request to continue retrieving results starting from the last evaluated point.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInsightsMetricDataResponse {
  /**
   * <p>The Amazon Web Services service to which the request was made, such as <code>iam.amazonaws.com</code> or <code>s3.amazonaws.com</code>.</p>
   * @public
   */
  EventSource?: string | undefined;

  /**
   * <p>The name of the event, typically the Amazon Web Services API on which unusual levels of activity were recorded.</p>
   * @public
   */
  EventName?: string | undefined;

  /**
   * <p>The type of CloudTrail Insights event, which is either <code>ApiCallRateInsight</code> or <code>ApiErrorRateInsight</code>.
   *          The <code>ApiCallRateInsight</code> Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
   *          The <code>ApiErrorRateInsight</code> Insights type analyzes management API calls that result in error codes.</p>
   * @public
   */
  InsightType?: InsightType | undefined;

  /**
   * <p>Only returned if <code>InsightType</code> parameter was set to <code>ApiErrorRateInsight</code>.</p>
   *          <p>If returning metrics for the <code>ApiErrorRateInsight</code> Insights type, this is the error to retrieve data for. For example, <code>AccessDenied</code>.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>List of timestamps at intervals corresponding to the specified time period.</p>
   * @public
   */
  Timestamps?: Date[] | undefined;

  /**
   * <p>List of values representing the API call rate or error rate at each timestamp. The number of values is equal to the number of timestamps.</p>
   * @public
   */
  Values?: number[] | undefined;

  /**
   * <p>Only returned if the full results could not be returned in a single query. You can set the <code>NextToken</code> parameter
   *          in the next request to this value to continue retrieval.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 * @public
 */
export class InvalidTimeRangeException extends __BaseException {
  readonly name: "InvalidTimeRangeException" = "InvalidTimeRangeException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Reserved for future use.</p>
 * @public
 */
export class InvalidTokenException extends __BaseException {
  readonly name: "InvalidTokenException" = "InvalidTokenException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Requests the public keys for a specified time range.</p>
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * <p>Optionally specifies, in UTC, the start of the time range to look up public keys for
   *             CloudTrail digest files. If not specified, the current time is used, and the
   *          current public key is returned.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Optionally specifies, in UTC, the end of the time range to look up public keys for
   *             CloudTrail digest files. If not specified, the current time is used.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about a returned public key.</p>
 * @public
 */
export interface PublicKey {
  /**
   * <p>The DER encoded public key value in PKCS#1 format.</p>
   * @public
   */
  Value?: Uint8Array | undefined;

  /**
   * <p>The starting time of validity of the public key.</p>
   * @public
   */
  ValidityStartTime?: Date | undefined;

  /**
   * <p>The ending time of validity of the public key.</p>
   * @public
   */
  ValidityEndTime?: Date | undefined;

  /**
   * <p>The fingerprint of the public key.</p>
   * @public
   */
  Fingerprint?: string | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface ListPublicKeysResponse {
  /**
   * <p>Contains an array of PublicKey objects.</p>
   *          <note>
   *             <p>The returned public keys may have validity time ranges that overlap.</p>
   *          </note>
   * @public
   */
  PublicKeyList?: PublicKey[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A date range for the query was specified that is not valid. Be sure that the start time
 *          is chronologically before the end time. For more information about writing a query, see
 *             <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User Guide</i>.</p>
 * @public
 */
export class InvalidDateRangeException extends __BaseException {
  readonly name: "InvalidDateRangeException" = "InvalidDateRangeException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The query status is not valid for the operation.</p>
 * @public
 */
export class InvalidQueryStatusException extends __BaseException {
  readonly name: "InvalidQueryStatusException" = "InvalidQueryStatusException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The ARN (or the ID suffix of the ARN) of an event data store on which queries were
   *          run.</p>
   * @public
   */
  EventDataStore: string | undefined;

  /**
   * <p>A token you can use to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of queries to show on a page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use with <code>EndTime</code> to bound a <code>ListQueries</code> request, and limit its
   *          results to only those queries run within a specified time period.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Use with <code>StartTime</code> to bound a <code>ListQueries</code> request, and limit
   *          its results to only those queries run within a specified time period.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The status of queries that you want to return in results. Valid values for
   *             <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>,
   *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
   *             <code>CANCELLED</code>.</p>
   * @public
   */
  QueryStatus?: QueryStatus | undefined;
}

/**
 * <p>A SQL string of criteria about events that you want to collect in an event data
 *          store.</p>
 * @public
 */
export interface Query {
  /**
   * <p>The ID of a query.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>The status of the query. This can be <code>QUEUED</code>, <code>RUNNING</code>,
   *             <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or
   *             <code>CANCELLED</code>.</p>
   * @public
   */
  QueryStatus?: QueryStatus | undefined;

  /**
   * <p>The creation time of a query.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListQueriesResponse {
  /**
   * <p>Lists matching query results, and shows query ID, status, and creation time of each
   *          query.</p>
   * @public
   */
  Queries?: Query[] | undefined;

  /**
   * <p>A token you can use to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies a list of tags to return.</p>
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>Specifies a list of trail, event data store, dashboard, or channel ARNs whose tags will be listed. The list
   *          has a limit of 20 ARNs.</p>
   *          <p> Example trail ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceIdList: string[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A resource tag.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>Specifies the ARN of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>A list of tags.</p>
   * @public
   */
  TagsList?: Tag[] | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>A list of resource tags.</p>
   * @public
   */
  ResourceTagList?: ResourceTag[] | undefined;

  /**
   * <p>Reserved for future use.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrailsRequest {
  /**
   * <p>The token to use to get the next page of results after a previous API call. This token
   *          must be passed in with the same parameters that were specified in the original call. For
   *          example, if the original call specified an AttributeKey of 'Username' with a value of
   *          'root', the call with NextToken should include those same parameters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about a CloudTrail trail, including the trail's name, home Region,
 *          and Amazon Resource Name (ARN).</p>
 * @public
 */
export interface TrailInfo {
  /**
   * <p>The ARN of a trail.</p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>The name of a trail.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which a trail was created.</p>
   * @public
   */
  HomeRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListTrailsResponse {
  /**
   * <p>Returns the name, ARN, and home Region of trails in the current account.</p>
   * @public
   */
  Trails?: TrailInfo[] | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token
   *          does not appear, there are no more results to return. The token must be passed in with the
   *          same parameters as the previous call. For example, if the original call specified an
   *          AttributeKey of 'Username' with a value of 'root', the call with NextToken should include
   *          those same parameters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Occurs if an event category that is not valid is specified as a value of
 *             <code>EventCategory</code>.</p>
 * @public
 */
export class InvalidEventCategoryException extends __BaseException {
  readonly name: "InvalidEventCategoryException" = "InvalidEventCategoryException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Occurs when a lookup attribute is specified that is not valid.</p>
 * @public
 */
export class InvalidLookupAttributesException extends __BaseException {
  readonly name: "InvalidLookupAttributesException" = "InvalidLookupAttributesException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Specifies an attribute and value that filter the events returned.</p>
 * @public
 */
export interface LookupAttribute {
  /**
   * <p>Specifies an attribute on which to filter the events returned.</p>
   * @public
   */
  AttributeKey: LookupAttributeKey | undefined;

  /**
   * <p>Specifies a value for the specified <code>AttributeKey</code>.</p>
   *          <p>The maximum length for the <code>AttributeValue</code> is 2000 characters. The
   *          following characters ('<code>_</code>', '<code> </code>', '<code>,</code>',
   *          '<code>\\n</code>') count as two characters towards the 2000 character limit.</p>
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * <p>Contains a request for LookupEvents.</p>
 * @public
 */
export interface LookupEventsRequest {
  /**
   * <p>Contains a list of lookup attributes. Currently the list can contain only one
   *          item.</p>
   * @public
   */
  LookupAttributes?: LookupAttribute[] | undefined;

  /**
   * <p>Specifies that only events that occur after or at the specified time are returned. If
   *          the specified start time is after the specified end time, an error is returned.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Specifies that only events that occur before or at the specified time are returned. If
   *          the specified end time is before the specified start time, an error is returned.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Specifies the event category. If you do not specify an event category, events of the
   *          category are not returned in the response. For example, if you do not specify
   *             <code>insight</code> as the value of <code>EventCategory</code>, no Insights events are
   *          returned.</p>
   * @public
   */
  EventCategory?: EventCategory | undefined;

  /**
   * <p>The number of events to return. Possible values are 1 through 50. The default is
   *          50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. This token
   *          must be passed in with the same parameters that were specified in the original call. For
   *          example, if the original call specified an AttributeKey of 'Username' with a value of
   *          'root', the call with NextToken should include those same parameters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Specifies the type and name of a resource referenced by an event.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The type of a resource referenced by the event returned. When the resource type cannot
   *          be determined, null is returned. Some examples of resource types are: <b>Instance</b> for EC2, <b>Trail</b> for CloudTrail, <b>DBInstance</b> for Amazon RDS, and <b>AccessKey</b> for IAM. To learn more about how to look up and filter
   *          events by the resource types supported for a service, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html#filtering-cloudtrail-events">Filtering CloudTrail Events</a>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the resource referenced by the event returned. These are user-created names
   *          whose values will depend on the environment. For example, the resource name might be
   *          "auto-scaling-test-group" for an Auto Scaling Group or "i-1234567" for an EC2
   *          Instance.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * <p>Contains information about an event that was returned by a lookup request. The result
 *          includes a representation of a CloudTrail event.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The CloudTrail ID of the event returned.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The name of the event returned.</p>
   * @public
   */
  EventName?: string | undefined;

  /**
   * <p>Information about whether the event is a write event or a read event. </p>
   * @public
   */
  ReadOnly?: string | undefined;

  /**
   * <p>The Amazon Web Services access key ID that was used to sign the request. If the request
   *          was made with temporary security credentials, this is the access key ID of the temporary
   *          credentials.</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The date and time of the event returned.</p>
   * @public
   */
  EventTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services service to which the request was made.</p>
   * @public
   */
  EventSource?: string | undefined;

  /**
   * <p>A user name or role name of the requester that called the API in the event
   *          returned.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>A list of resources referenced by the event returned.</p>
   * @public
   */
  Resources?: Resource[] | undefined;

  /**
   * <p>A JSON string that contains a representation of the event returned.</p>
   * @public
   */
  CloudTrailEvent?: string | undefined;
}

/**
 * <p>Contains a response to a LookupEvents action.</p>
 * @public
 */
export interface LookupEventsResponse {
  /**
   * <p>A list of events returned based on the lookup attributes specified and the CloudTrail event. The events list is sorted by time. The most recent event is listed
   *          first.</p>
   * @public
   */
  Events?: Event[] | undefined;

  /**
   * <p>The token to use to get the next page of results after a previous API call. If the token
   *          does not appear, there are no more results to return. The token must be passed in with the
   *          same parameters as the previous call. For example, if the original call specified an
   *          AttributeKey of 'Username' with a value of 'root', the call with NextToken should include
   *          those same parameters.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The task can't be completed because you are signed in with an account that lacks permissions to view or create a service-linked role. Sign in with an account that has the required permissions and then try again.</p>
 * @public
 */
export class InsufficientIAMAccessPermissionException extends __BaseException {
  readonly name: "InsufficientIAMAccessPermissionException" = "InsufficientIAMAccessPermissionException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientIAMAccessPermissionException, __BaseException>) {
    super({
      name: "InsufficientIAMAccessPermissionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientIAMAccessPermissionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutEventConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which you want to update event configuration settings.</p>
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * <p>The maximum allowed size for events to be stored in the specified event data store. If you are using context key selectors, MaxEventSize must be set to Large.</p>
   * @public
   */
  MaxEventSize: MaxEventSize | undefined;

  /**
   * <p>A list of context key selectors that will be included to provide enriched event data.</p>
   * @public
   */
  ContextKeySelectors: ContextKeySelector[] | undefined;
}

/**
 * @public
 */
export interface PutEventConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which the event configuration settings were updated.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The maximum allowed size for events stored in the specified event data store.</p>
   * @public
   */
  MaxEventSize?: MaxEventSize | undefined;

  /**
   * <p>The list of context key selectors that are configured for the event data store.</p>
   * @public
   */
  ContextKeySelectors?: ContextKeySelector[] | undefined;
}

/**
 * @public
 */
export interface PutEventSelectorsRequest {
  /**
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
   * @public
   */
  TrailName: string | undefined;

  /**
   * <p>Specifies the settings for your event selectors. You can use event selectors to log management events and data events for the following resource types:</p>
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
   *          <p>You can't use event selectors to log network activity events.</p>
   *          <p>You can configure up to five event
   *          selectors for a trail. You can use either <code>EventSelectors</code> or
   *             <code>AdvancedEventSelectors</code> in a <code>PutEventSelectors</code> request, but not
   *          both. If you apply <code>EventSelectors</code> to a trail, any existing
   *             <code>AdvancedEventSelectors</code> are overwritten.</p>
   * @public
   */
  EventSelectors?: EventSelector[] | undefined;

  /**
   * <p> Specifies the settings for advanced event selectors. You can use advanced event selectors to
   *          log management events, data events for all resource types, and network activity events.</p>
   *          <p>You can add advanced event
   *          selectors, and conditions for your advanced event selectors, up to a maximum of 500 values
   *          for all conditions and selectors on a trail. You can use either
   *             <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you
   *          apply <code>AdvancedEventSelectors</code> to a trail, any existing
   *             <code>EventSelectors</code> are overwritten. For more information about advanced event
   *          selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> and
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html">Logging network activity events</a>
   *          in the <i>CloudTrail User Guide</i>. </p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * @public
 */
export interface PutEventSelectorsResponse {
  /**
   * <p>Specifies the ARN of the trail that was updated with event selectors. The following is
   *          the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>Specifies the event selectors configured for your trail.</p>
   * @public
   */
  EventSelectors?: EventSelector[] | undefined;

  /**
   * <p>Specifies the advanced event selectors configured for your trail.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;
}

/**
 * <p>For <code>PutInsightSelectors</code>, this exception is thrown when the formatting or syntax of the <code>InsightSelectors</code> JSON statement is not
 *          valid, or the specified <code>InsightType</code> in the <code>InsightSelectors</code> statement is not
 *          valid. Valid values for <code>InsightType</code> are <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code>. To enable Insights on an event data store, the destination event data store specified by the
 *          <code>InsightsDestination</code> parameter must log Insights events and the source event data
 *          store specified by the <code>EventDataStore</code> parameter must log management events.</p>
 *          <p>For <code>UpdateEventDataStore</code>, this exception is thrown if Insights are enabled on the event data store and the updated
 *          advanced event selectors are not compatible with the configured <code>InsightSelectors</code>.
 *          If the <code>InsightSelectors</code> includes an <code>InsightType</code> of <code>ApiCallRateInsight</code>, the source event data store must log <code>write</code> management events.
 *          If the <code>InsightSelectors</code> includes an <code>InsightType</code> of <code>ApiErrorRateInsight</code>, the source event data store must log management events.</p>
 * @public
 */
export class InvalidInsightSelectorsException extends __BaseException {
  readonly name: "InvalidInsightSelectorsException" = "InvalidInsightSelectorsException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The name of the CloudTrail trail for which you want to change or add Insights
   *          selectors.</p>
   *          <p>You cannot use this parameter with the <code>EventDataStore</code> and <code>InsightsDestination</code> parameters.</p>
   * @public
   */
  TrailName?: string | undefined;

  /**
   * <p>A JSON string that contains the Insights types you want to log on a trail or event data store.
   *             <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code> are valid Insight
   *          types.</p>
   *          <p>The <code>ApiCallRateInsight</code> Insights type analyzes write-only
   *          management API calls that are aggregated per minute against a baseline API call volume.</p>
   *          <p>The <code>ApiErrorRateInsight</code> Insights type analyzes management
   *          API calls that result in error codes. The error is shown if the API call is
   *          unsuccessful.</p>
   * @public
   */
  InsightSelectors: InsightSelector[] | undefined;

  /**
   * <p>The ARN (or ID suffix of the ARN) of the source event data store for which you want to change or add Insights
   *          selectors. To enable Insights on an event data store, you must provide both the
   *          <code>EventDataStore</code> and <code>InsightsDestination</code> parameters.</p>
   *          <p>You cannot use this parameter with the <code>TrailName</code> parameter.</p>
   * @public
   */
  EventDataStore?: string | undefined;

  /**
   * <p>
   *          The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events. To enable Insights on an event data store, you must provide both the
   *          <code>EventDataStore</code> and <code>InsightsDestination</code> parameters.
   *       </p>
   *          <p>You cannot use this parameter with the <code>TrailName</code> parameter.</p>
   * @public
   */
  InsightsDestination?: string | undefined;
}

/**
 * @public
 */
export interface PutInsightSelectorsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of a trail for which you want to change or add Insights
   *          selectors.</p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>A JSON string that contains the Insights event types that you want to log on a trail or event data store.
   *          The valid Insights types are <code>ApiErrorRateInsight</code> and
   *             <code>ApiCallRateInsight</code>.</p>
   * @public
   */
  InsightSelectors?: InsightSelector[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source event data store for which you want to change or add Insights
   *          selectors.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>
   *             The ARN of the destination event data store that logs Insights events.
   *       </p>
   * @public
   */
  InsightsDestination?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.</p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *          A JSON-formatted string for an Amazon Web Services resource-based policy.
   *       </p>
   *          <p> For example resource-based policies, see
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html">CloudTrail resource-based policy examples</a>
   *          in the <i>CloudTrail User Guide</i>.</p>
   * @public
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
   *       </p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>
   *          The JSON-formatted string of the Amazon Web Services resource-based policy attached to the CloudTrail event data store, dashboard, or channel.
   *       </p>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>
   *          The default resource-based policy that is automatically generated for the delegated administrator of an Organizations organization.
   *          This policy will be evaluated in tandem with any policy you submit for the resource. For more information about this policy,
   *          see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html#cloudtrail-lake-organizations-eds-rbp">Default resource policy for delegated administrators</a>.
   *       </p>
   * @public
   */
  DelegatedAdminResourcePolicy?: string | undefined;
}

/**
 * <p>
 *          This exception is thrown when the resource-based policy has syntax errors, or contains a principal that is not valid.
 *       </p>
 * @public
 */
export class ResourcePolicyNotValidException extends __BaseException {
  readonly name: "ResourcePolicyNotValidException" = "ResourcePolicyNotValidException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>This exception is thrown when the maximum number of CloudTrail delegated
 *          administrators is reached.</p>
 * @public
 */
export class DelegatedAdminAccountLimitExceededException extends __BaseException {
  readonly name: "DelegatedAdminAccountLimitExceededException" = "DelegatedAdminAccountLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Specifies an organization member account ID as a CloudTrail delegated
 *          administrator.</p>
 * @public
 */
export interface RegisterOrganizationDelegatedAdminRequest {
  /**
   * <p>An organization member account ID that you want to designate as a delegated
   *          administrator.</p>
   * @public
   */
  MemberAccountId: string | undefined;
}

/**
 * <p>Returns the following response if successful. Otherwise, returns an error.</p>
 * @public
 */
export interface RegisterOrganizationDelegatedAdminResponse {}

/**
 * <p>Specifies the tags to remove from a trail, event data store, dashboard, or channel.</p>
 * @public
 */
export interface RemoveTagsRequest {
  /**
   * <p>Specifies the ARN of the trail, event data store, dashboard, or channel from which tags should be
   *          removed.</p>
   *          <p> Example trail ARN format:
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   *          <p>Example event data store ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
   *          </p>
   *          <p>Example dashboard ARN format: <code>arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash</code>
   *          </p>
   *          <p>Example channel ARN format:
   *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
   *          </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Specifies a list of tags to be removed.</p>
   * @public
   */
  TagsList: Tag[] | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface RemoveTagsResponse {}

/**
 * @public
 */
export interface RestoreEventDataStoreRequest {
  /**
   * <p>The ARN (or the ID suffix of the ARN) of the event data store that you want to
   *          restore.</p>
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface RestoreEventDataStoreResponse {
  /**
   * <p>The event data store ARN.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The name of the event data store.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the event data store.</p>
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * <p>The advanced event selectors that were used to select events.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Indicates whether the event data store is collecting events from all Regions, or only
   *          from the Region in which the event data store was created.</p>
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period, in days.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>Indicates that termination protection is enabled and the event data store cannot be
   *          automatically deleted.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>The timestamp of an event data store's creation.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp that shows when an event data store was updated, if applicable.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The billing mode for the event data store.</p>
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * @public
 */
export interface SearchSampleQueriesRequest {
  /**
   * <p>
   *          The natural language phrase to use for the semantic search. The phrase must be in English. The length constraint is in characters, not words.</p>
   * @public
   */
  SearchPhrase: string | undefined;

  /**
   * <p>
   *          The maximum number of results to return on a single page. The default value is 10.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *          A token you can use to get the next page of results. The length constraint is in characters, not words.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *          A search result returned by the <code>SearchSampleQueries</code> operation.
 *       </p>
 * @public
 */
export interface SearchSampleQueriesSearchResult {
  /**
   * <p>
   *          The name of a sample query.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *          A longer description of a sample query.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *          The SQL code of the sample query.
   *       </p>
   * @public
   */
  SQL?: string | undefined;

  /**
   * <p>
   *          A value between 0 and 1 indicating the similarity between the search phrase and result.
   *       </p>
   * @public
   */
  Relevance?: number | undefined;
}

/**
 * @public
 */
export interface SearchSampleQueriesResponse {
  /**
   * <p>
   *          A list of objects containing the search results ordered from most relevant to least relevant.
   *       </p>
   * @public
   */
  SearchResults?: SearchSampleQueriesSearchResult[] | undefined;

  /**
   * <p>
   *          A token you can use to get the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDashboardRefreshRequest {
  /**
   * <p>
   * The name or ARN of the dashboard.
   * </p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>
   *    The query parameter values for the dashboard
   * </p>
   *          <p>For custom dashboards, the following query parameters are valid: <code>$StartTime$</code>, <code>$EndTime$</code>, and <code>$Period$</code>.</p>
   *          <p>For managed dashboards, the following query parameters are valid: <code>$StartTime$</code>,
   *             <code>$EndTime$</code>, <code>$Period$</code>, and <code>$EventDataStoreId$</code>. The
   *             <code>$EventDataStoreId$</code> query parameter is required.</p>
   * @public
   */
  QueryParameterValues?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDashboardRefreshResponse {
  /**
   * <p>
   * The refresh ID for the dashboard.
   * </p>
   * @public
   */
  RefreshId?: string | undefined;
}

/**
 * @public
 */
export interface StartEventDataStoreIngestionRequest {
  /**
   * <p>The ARN (or ID suffix of the ARN) of the event data store for which you want to start ingestion.</p>
   * @public
   */
  EventDataStore: string | undefined;
}

/**
 * @public
 */
export interface StartEventDataStoreIngestionResponse {}

/**
 * <p> This exception is thrown when the provided source S3 bucket is not valid for import.
 *       </p>
 * @public
 */
export class InvalidImportSourceException extends __BaseException {
  readonly name: "InvalidImportSourceException" = "InvalidImportSourceException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p> The ARN of the destination event data store. Use this parameter for a new import.
   *       </p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p> The source S3 bucket for the import. Use this parameter for a new import. </p>
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * <p> Use with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *          When you specify a time range, CloudTrail checks the prefix and log file names to
   *          verify the names contain a date between the specified <code>StartEventTime</code> and
   *             <code>EndEventTime</code> before attempting to import events. </p>
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * <p> Use with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *          When you specify a time range, CloudTrail checks the prefix and log file names to
   *          verify the names contain a date between the specified <code>StartEventTime</code> and
   *             <code>EndEventTime</code> before attempting to import events. </p>
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * <p> The ID of the import. Use this parameter when you are retrying an import. </p>
   * @public
   */
  ImportId?: string | undefined;
}

/**
 * @public
 */
export interface StartImportResponse {
  /**
   * <p> The ID of the import. </p>
   * @public
   */
  ImportId?: string | undefined;

  /**
   * <p> The ARN of the destination event data store. </p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p> The source S3 bucket for the import. </p>
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * <p> Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * <p> Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * <p> Shows the status of the import after a <code>StartImport</code> request. An import
   *          finishes with a status of <code>COMPLETED</code> if there were no failures, or
   *             <code>FAILED</code> if there were failures. </p>
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * <p> The timestamp for the import's creation. </p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p> The timestamp of the import's last update, if applicable. </p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * <p>The request to CloudTrail to start logging Amazon Web Services API calls for an
 *          account.</p>
 * @public
 */
export interface StartLoggingRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail
   *          logs Amazon Web Services API calls. The following is the format of a trail ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface StartLoggingResponse {}

/**
 * <p>You are already running the maximum number of concurrent queries. The maximum number of concurrent queries is 10. Wait a minute for some
 *          queries to finish, and then run the query again.</p>
 * @public
 */
export class MaxConcurrentQueriesException extends __BaseException {
  readonly name: "MaxConcurrentQueriesException" = "MaxConcurrentQueriesException";
  readonly $fault: "client" = "client";
  /**
   * <p>Brief description of the exception returned by the request.</p>
   * @public
   */
  Message?: string | undefined;
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
   * <p>The SQL code of your query.</p>
   * @public
   */
  QueryStatement?: string | undefined;

  /**
   * <p> The URI for the S3 bucket where CloudTrail delivers the query results. </p>
   * @public
   */
  DeliveryS3Uri?: string | undefined;

  /**
   * <p>
   *          The alias that identifies a query template.
   *       </p>
   * @public
   */
  QueryAlias?: string | undefined;

  /**
   * <p>
   *          The query parameters for the specified <code>QueryAlias</code>.
   *       </p>
   * @public
   */
  QueryParameters?: string[] | undefined;

  /**
   * <p>
   * The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StartQueryResponse {
  /**
   * <p>The ID of the started query.</p>
   * @public
   */
  QueryId?: string | undefined;

  /**
   * <p>
   *    The account ID of the event data store owner.
   * </p>
   * @public
   */
  EventDataStoreOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface StopEventDataStoreIngestionRequest {
  /**
   * <p>The ARN (or ID suffix of the ARN) of the event data store for which you want to stop ingestion.</p>
   * @public
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
   * <p> The ID of the import. </p>
   * @public
   */
  ImportId: string | undefined;
}

/**
 * @public
 */
export interface StopImportResponse {
  /**
   * <p> The ID for the import. </p>
   * @public
   */
  ImportId?: string | undefined;

  /**
   * <p> The source S3 bucket for the import. </p>
   * @public
   */
  ImportSource?: ImportSource | undefined;

  /**
   * <p> The ARN of the destination event data store. </p>
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * <p> The status of the import. </p>
   * @public
   */
  ImportStatus?: ImportStatus | undefined;

  /**
   * <p> The timestamp of the import's creation. </p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p> The timestamp of the import's last update. </p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p> Used with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   * @public
   */
  StartEventTime?: Date | undefined;

  /**
   * <p> Used with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and
   *          limit imported trail events to only those events logged within a specified time period.
   *       </p>
   * @public
   */
  EndEventTime?: Date | undefined;

  /**
   * <p> Returns information on the stopped import. </p>
   * @public
   */
  ImportStatistics?: ImportStatistics | undefined;
}

/**
 * <p>Passes the request to CloudTrail to stop logging Amazon Web Services API calls for
 *          the specified account.</p>
 * @public
 */
export interface StopLoggingRequest {
  /**
   * <p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail
   *          will stop logging Amazon Web Services API calls. The following is the format of a trail
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface StopLoggingResponse {}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The ARN or ID (the ARN suffix) of the channel that you want to update.</p>
   * @public
   */
  Channel: string | undefined;

  /**
   * <p>The ARNs of event data stores that you want to log events arriving through the channel.</p>
   * @public
   */
  Destinations?: Destination[] | undefined;

  /**
   * <p>
   *          Changes the name of the channel.
   *       </p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel that was updated.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The name of the channel that was updated.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The event source of the channel that was updated.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The event data stores that log events arriving through the channel.</p>
   * @public
   */
  Destinations?: Destination[] | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * <p>
   *    The name or ARN of the dashboard.
   * </p>
   * @public
   */
  DashboardId: string | undefined;

  /**
   * <p>
   * An array of widgets for the dashboard. A custom dashboard can have a maximum of 10 widgets.
   * </p>
   *          <p>To add new widgets, pass in an array that includes the existing widgets along with any new widgets. Run the <code>GetDashboard</code> operation to get the list of widgets for the dashboard.</p>
   *          <p>To remove widgets, pass in an array that includes the existing widgets minus the widgets you want removed.</p>
   * @public
   */
  Widgets?: RequestWidget[] | undefined;

  /**
   * <p>
   * The refresh schedule configuration for the dashboard.
   * </p>
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * <p>
   *    Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
   * </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {
  /**
   * <p>
   * The ARN for the dashboard.
   * </p>
   * @public
   */
  DashboardArn?: string | undefined;

  /**
   * <p>
   * The name for the dashboard.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   * The type of dashboard.
   * </p>
   * @public
   */
  Type?: DashboardType | undefined;

  /**
   * <p>
   * An array of widgets for the dashboard.
   * </p>
   * @public
   */
  Widgets?: Widget[] | undefined;

  /**
   * <p>
   * The refresh schedule for the dashboard, if configured.
   * </p>
   * @public
   */
  RefreshSchedule?: RefreshSchedule | undefined;

  /**
   * <p>
   *    Indicates whether termination protection is enabled for the dashboard.
   * </p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>
   *    The timestamp that shows when the dashboard was created.
   * </p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>
   *    The timestamp that shows when the dashboard was updated.
   * </p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEventDataStoreRequest {
  /**
   * <p>The ARN (or the ID suffix of the ARN) of the event data store that you want to
   *          update.</p>
   * @public
   */
  EventDataStore: string | undefined;

  /**
   * <p>The event data store name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The advanced event selectors used to select events for the event data store. You can
   *          configure up to five advanced event selectors for each event data store.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Specifies whether an event data store collects events from all Regions, or only from the
   *          Region in which it was created.</p>
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether an event data store collects events logged for an organization in
   *             Organizations.</p>
   *          <note>
   *             <p>Only the management account for the organization can convert an organization event data store to a non-organization event data store, or convert a non-organization event data store to
   *          an organization event data store.</p>
   *          </note>
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period of the event data store, in days. If <code>BillingMode</code> is set to <code>EXTENDABLE_RETENTION_PRICING</code>, you can set a retention period of
   *          up to 3653 days, the equivalent of 10 years. If <code>BillingMode</code> is set to <code>FIXED_RETENTION_PRICING</code>, you can set a retention period of
   *          up to 2557 days, the equivalent of seven years.</p>
   *          <p>CloudTrail  Lake determines whether to retain an event by checking if the <code>eventTime</code>
   *          of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events
   *          when the <code>eventTime</code> is older than 90 days.</p>
   *          <note>
   *             <p>If you decrease the retention period of an event data store, CloudTrail will remove any events with an <code>eventTime</code> older than the new retention period. For example, if the previous
   *             retention period was 365 days and you decrease it to 100 days, CloudTrail  will remove events with an <code>eventTime</code> older than 100 days.</p>
   *          </note>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>Indicates that termination protection is enabled and the event data store cannot be
   *          automatically deleted.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <note>
   *             <p>You can't change the billing mode from <code>EXTENDABLE_RETENTION_PRICING</code> to <code>FIXED_RETENTION_PRICING</code>. If <code>BillingMode</code> is set to
   *             <code>EXTENDABLE_RETENTION_PRICING</code> and you want to use <code>FIXED_RETENTION_PRICING</code> instead, you'll need to stop ingestion on the event data store and create a new event data store that uses <code>FIXED_RETENTION_PRICING</code>.</p>
   *          </note>
   *          <p>The billing mode for the event data store determines the cost
   *          for ingesting events and the default and maximum retention period for the event data store.</p>
   *          <p>The following are the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EXTENDABLE_RETENTION_PRICING</code> - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is
   *                366 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIXED_RETENTION_PRICING</code> - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years).
   *                The default retention period for this billing mode is 2557 days.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about CloudTrail pricing,
   *          see <a href="http://aws.amazon.com/cloudtrail/pricing/">CloudTrail Pricing</a> and
   *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html">Managing CloudTrail Lake costs</a>.</p>
   * @public
   */
  BillingMode?: BillingMode | undefined;
}

/**
 * @public
 */
export interface UpdateEventDataStoreResponse {
  /**
   * <p>The ARN of the event data store.</p>
   * @public
   */
  EventDataStoreArn?: string | undefined;

  /**
   * <p>The name of the event data store.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of an event data store.</p>
   * @public
   */
  Status?: EventDataStoreStatus | undefined;

  /**
   * <p>The advanced event selectors that are applied to the event data store.</p>
   * @public
   */
  AdvancedEventSelectors?: AdvancedEventSelector[] | undefined;

  /**
   * <p>Indicates whether the event data store includes events from all Regions, or only from
   *          the Region in which it was created.</p>
   * @public
   */
  MultiRegionEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether an event data store is collecting logged events for an organization in
   *             Organizations.</p>
   * @public
   */
  OrganizationEnabled?: boolean | undefined;

  /**
   * <p>The retention period, in days.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>Indicates whether termination protection is enabled for the event data store.</p>
   * @public
   */
  TerminationProtectionEnabled?: boolean | undefined;

  /**
   * <p>The timestamp that shows when an event data store was first created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp that shows when the event data store was last updated.
   *             <code>UpdatedTimestamp</code> is always either the same or newer than the time shown in
   *             <code>CreatedTimestamp</code>.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The billing mode for the event data store.</p>
   * @public
   */
  BillingMode?: BillingMode | undefined;

  /**
   * <p>
   *          Indicates the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html">Lake query federation</a> status. The status is
   *          <code>ENABLED</code> if Lake query federation is enabled, or <code>DISABLED</code> if Lake query federation is disabled. You cannot delete an event data store if the <code>FederationStatus</code> is <code>ENABLED</code>.
   *       </p>
   * @public
   */
  FederationStatus?: FederationStatus | undefined;

  /**
   * <p>
   *          If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
   *       </p>
   * @public
   */
  FederationRoleArn?: string | undefined;
}

/**
 * <p>Specifies settings to update for the trail.</p>
 * @public
 */
export interface UpdateTrailRequest {
  /**
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
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.
   *          See <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Amazon S3
   *             Bucket naming rules</a>.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files">Finding Your CloudTrail Log Files</a>. The maximum length is 200
   *          characters.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>Specifies the name or ARN of the Amazon SNS topic defined for notification of log file
   *          delivery. The maximum length is 256 characters.</p>
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * <p>Specifies whether the trail applies only to the current Region or to all Regions. The
   *          default is false. If the trail exists only in the current Region and this value is set to
   *          true, shadow trails (replications of the trail) will be created in the other Regions. If
   *          the trail exists in all Regions and this value is set to false, the trail will remain in
   *          the Region where it was created, and its shadow trails in other Regions will be deleted. As
   *          a best practice, consider using trails that log events in all Regions.</p>
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
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
   * @public
   */
  EnableLogFileValidation?: boolean | undefined;

  /**
   * <p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that
   *          represents the log group to which CloudTrail logs are delivered. You must use a log
   *          group that exists in your account.</p>
   *          <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group. You must use a role that exists in your account.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
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
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false,
   *          and cannot be true unless the call is made on behalf of an Amazon Web Services account that
   *          is the management account for an organization in Organizations. If the trail is not an organization trail and this is set to
   *             <code>true</code>, the trail will be created in all Amazon Web Services accounts that
   *          belong to the organization. If the trail is an organization trail and this is set to
   *             <code>false</code>, the trail will remain in the current Amazon Web Services account but
   *          be deleted from all member accounts in the organization.</p>
   *          <note>
   *             <p>Only the management account for the organization can convert an organization trail to a non-organization trail, or convert a non-organization trail to
   *             an organization trail.</p>
   *          </note>
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;
}

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an
 *          error.</p>
 * @public
 */
export interface UpdateTrailResponse {
  /**
   * <p>Specifies the name of the trail.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log
   *          files.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you
   *          have designated for log file delivery. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files">Finding Your IAM Log Files</a>.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>This field is no longer in use. Use <code>SnsTopicARN</code>.</p>
   *
   * @deprecated
   * @public
   */
  SnsTopicName?: string | undefined;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send
   *          notifications when log files are delivered. The following is the format of a topic
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code>
   *          </p>
   * @public
   */
  SnsTopicARN?: string | undefined;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   * @public
   */
  IncludeGlobalServiceEvents?: boolean | undefined;

  /**
   * <p>Specifies whether the trail exists in one Region or in all Regions.</p>
   * @public
   */
  IsMultiRegionTrail?: boolean | undefined;

  /**
   * <p>Specifies the ARN of the trail that was updated. The following is the format of a trail
   *          ARN.</p>
   *          <p>
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
   *          </p>
   * @public
   */
  TrailARN?: string | undefined;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   * @public
   */
  LogFileValidationEnabled?: boolean | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail
   *          logs are delivered.</p>
   * @public
   */
  CloudWatchLogsLogGroupArn?: string | undefined;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's
   *          log group.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the
   *          following format.</p>
   *          <p>
   *             <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   * @public
   */
  IsOrganizationTrail?: boolean | undefined;
}
