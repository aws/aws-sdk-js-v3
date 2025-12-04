// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudTrailServiceException as __BaseException } from "./CloudTrailServiceException";

/**
 * <p>
 *          You do not have sufficient access to perform this action.
 *       </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "AccountHasOngoingImportException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "AccountNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "AccountNotRegisteredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "AccountRegisteredException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 * @public
 */
export class ChannelARNInvalidException extends __BaseException {
  readonly name = "ChannelARNInvalidException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ChannelNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CloudTrailARNInvalidException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EventDataStoreARNInvalidException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EventDataStoreNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InactiveEventDataStoreException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTagParameterException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTrailNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "NoManagementAccountSLRExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "NotOrganizationMasterAccountException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "OperationNotPermittedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ResourceTypeNotSupportedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TagsLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified query cannot be canceled because it is in the <code>FINISHED</code>,
 *             <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code> state.</p>
 * @public
 */
export class InactiveQueryException extends __BaseException {
  readonly name = "InactiveQueryException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "QueryIdNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CannotDelegateManagementAccountException" as const;
  readonly $fault = "client" as const;
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
 * <p>
 *          This exception is thrown when the provided channel already exists.
 *       </p>
 * @public
 */
export class ChannelAlreadyExistsException extends __BaseException {
  readonly name = "ChannelAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ChannelExistsForEDSException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ChannelMaxLimitExceededException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 * @public
 */
export class InvalidEventDataStoreCategoryException extends __BaseException {
  readonly name = "InvalidEventDataStoreCategoryException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidSourceException" as const;
  readonly $fault = "client" as const;
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
 * <p>For the <code>CreateTrail</code>
 *             <code>PutInsightSelectors</code>, <code>UpdateTrail</code>, <code>StartQuery</code>, and <code>StartImport</code> operations, this exception is thrown
 *          when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *          <p>For all other operations, this exception is thrown when the policy for the KMS key does
 *          not have sufficient permissions for the operation.</p>
 * @public
 */
export class InsufficientEncryptionPolicyException extends __BaseException {
  readonly name = "InsufficientEncryptionPolicyException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidQueryStatementException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CloudTrailAccessNotEnabledException" as const;
  readonly $fault = "client" as const;
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
 * <p>An event data store with that name already exists.</p>
 * @public
 */
export class EventDataStoreAlreadyExistsException extends __BaseException {
  readonly name = "EventDataStoreAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EventDataStoreMaxLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InsufficientDependencyServiceAccessPermissionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidEventSelectorsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidKmsKeyIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "KmsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "KmsKeyNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "OrganizationNotInAllFeaturesModeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "OrganizationsNotInUseException" as const;
  readonly $fault = "client" as const;
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
 * <p>
 *          This exception is thrown when the request rate exceeds the limit.
 *       </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown when a call results in the <code>InvalidClientTokenId</code>
 *          error code. This can occur when you are creating or updating a trail to send notifications
 *          to an Amazon SNS topic that is in a suspended Amazon Web Services account.</p>
 * @public
 */
export class CloudTrailInvalidClientTokenIdException extends __BaseException {
  readonly name = "CloudTrailInvalidClientTokenIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CloudWatchLogsDeliveryUnavailableException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 * @public
 */
export class InsufficientS3BucketPolicyException extends __BaseException {
  readonly name = "InsufficientS3BucketPolicyException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InsufficientSnsTopicPolicyException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidCloudWatchLogsLogGroupArnException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidCloudWatchLogsRoleArnException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidParameterCombinationException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidS3BucketNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidS3PrefixException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidSnsTopicNameException" as const;
  readonly $fault = "client" as const;
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
 * @deprecated deprecated
 * @public
 */
export class KmsKeyDisabledException extends __BaseException {
  readonly name = "KmsKeyDisabledException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumNumberOfTrailsExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "S3BucketDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown when the specified trail already exists.</p>
 * @public
 */
export class TrailAlreadyExistsException extends __BaseException {
  readonly name = "TrailAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TrailNotProvidedException" as const;
  readonly $fault = "client" as const;
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
 * <p>
 *         You cannot delete the event data store because Lake query federation is enabled. To delete the event data store, run the <code>DisableFederation</code> operation to
 *          disable Lake query federation on the event data store.
 *       </p>
 * @public
 */
export class EventDataStoreFederationEnabledException extends __BaseException {
  readonly name = "EventDataStoreFederationEnabledException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EventDataStoreHasOngoingImportException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EventDataStoreTerminationProtectedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ResourceARNNotValidException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ResourcePolicyNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown when an operation is called on a trail from a Region other than
 *          the Region in which the trail was created.</p>
 * @public
 */
export class InvalidHomeRegionException extends __BaseException {
  readonly name = "InvalidHomeRegionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TrailNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * <p> This exception is thrown when the account making the request is not the organization's
 *          management account. </p>
 * @public
 */
export class NotOrganizationManagementAccountException extends __BaseException {
  readonly name = "NotOrganizationManagementAccountException" as const;
  readonly $fault = "client" as const;
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
 * <p>
 *          You are trying to update a resource when another request is in progress. Allow sufficient wait time for the previous request to complete, then retry your request.
 *       </p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
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
 * <p>
 *          This exception is thrown when a valid query could not be generated for the provided prompt.
 *       </p>
 * @public
 */
export class GenerateResponseException extends __BaseException {
  readonly name = "GenerateResponseException" as const;
  readonly $fault = "client" as const;
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
 * <p>The event data store is not in a status that supports the operation.</p>
 * @public
 */
export class InvalidEventDataStoreStatusException extends __BaseException {
  readonly name = "InvalidEventDataStoreStatusException" as const;
  readonly $fault = "client" as const;
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
 * <p> The specified import was not found. </p>
 * @public
 */
export class ImportNotFoundException extends __BaseException {
  readonly name = "ImportNotFoundException" as const;
  readonly $fault = "client" as const;
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
 * <p>If you run <code>GetInsightSelectors</code> on a trail or event data store that does not have Insights
 *          events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>.</p>
 * @public
 */
export class InsightNotEnabledException extends __BaseException {
  readonly name = "InsightNotEnabledException" as const;
  readonly $fault = "client" as const;
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
 * <p>This exception is thrown if the limit specified is not valid.</p>
 * @public
 */
export class InvalidMaxResultsException extends __BaseException {
  readonly name = "InvalidMaxResultsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
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
 * <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 * @public
 */
export class InvalidTimeRangeException extends __BaseException {
  readonly name = "InvalidTimeRangeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTokenException" as const;
  readonly $fault = "client" as const;
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
 * <p>A date range for the query was specified that is not valid. Be sure that the start time
 *          is chronologically before the end time. For more information about writing a query, see
 *             <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User Guide</i>.</p>
 * @public
 */
export class InvalidDateRangeException extends __BaseException {
  readonly name = "InvalidDateRangeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidQueryStatusException" as const;
  readonly $fault = "client" as const;
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
 * <p>Occurs if an event category that is not valid is specified as a value of
 *             <code>EventCategory</code>.</p>
 * @public
 */
export class InvalidEventCategoryException extends __BaseException {
  readonly name = "InvalidEventCategoryException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidLookupAttributesException" as const;
  readonly $fault = "client" as const;
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
 * <p>The task can't be completed because you are signed in with an account that lacks permissions to view or create a service-linked role. Sign in with an account that has the required permissions and then try again.</p>
 * @public
 */
export class InsufficientIAMAccessPermissionException extends __BaseException {
  readonly name = "InsufficientIAMAccessPermissionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidInsightSelectorsException" as const;
  readonly $fault = "client" as const;
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
 * <p>
 *          This exception is thrown when the resouce-based policy has syntax errors, or contains a principal that is not valid.
 *       </p>
 * @public
 */
export class ResourcePolicyNotValidException extends __BaseException {
  readonly name = "ResourcePolicyNotValidException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "DelegatedAdminAccountLimitExceededException" as const;
  readonly $fault = "client" as const;
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
 * <p> This exception is thrown when the provided source S3 bucket is not valid for import.
 *       </p>
 * @public
 */
export class InvalidImportSourceException extends __BaseException {
  readonly name = "InvalidImportSourceException" as const;
  readonly $fault = "client" as const;
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
 * <p>You are already running the maximum number of concurrent queries. The maximum number of concurrent queries is 10. Wait a minute for some
 *          queries to finish, and then run the query again.</p>
 * @public
 */
export class MaxConcurrentQueriesException extends __BaseException {
  readonly name = "MaxConcurrentQueriesException" as const;
  readonly $fault = "client" as const;
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
