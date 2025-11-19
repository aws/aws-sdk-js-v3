// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IntelligentTieringAccessTier, StorageClass } from "./enums";
import { S3ServiceException as __BaseException } from "./S3ServiceException";

/**
 * <p>The specified multipart upload does not exist.</p>
 * @public
 */
export class NoSuchUpload extends __BaseException {
  readonly name = "NoSuchUpload" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchUpload, __BaseException>) {
    super({
      name: "NoSuchUpload",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchUpload.prototype);
  }
}

/**
 * <p>The source object of the COPY action is not in the active tier and is only stored in Amazon S3
 *       Glacier.</p>
 * @public
 */
export class ObjectNotInActiveTierError extends __BaseException {
  readonly name = "ObjectNotInActiveTierError" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotInActiveTierError, __BaseException>) {
    super({
      name: "ObjectNotInActiveTierError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
  }
}

/**
 * <p>The requested bucket name is not available. The bucket namespace is shared by all users of the
 *       system. Select a different name and try again.</p>
 * @public
 */
export class BucketAlreadyExists extends __BaseException {
  readonly name = "BucketAlreadyExists" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyExists, __BaseException>) {
    super({
      name: "BucketAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
  }
}

/**
 * <p>The bucket you tried to create already exists, and you own it. Amazon S3 returns this error in all Amazon Web Services
 *       Regions except in the North Virginia Region. For legacy compatibility, if you re-create an existing
 *       bucket that you already own in the North Virginia Region, Amazon S3 returns 200 OK and resets the bucket
 *       access control lists (ACLs).</p>
 * @public
 */
export class BucketAlreadyOwnedByYou extends __BaseException {
  readonly name = "BucketAlreadyOwnedByYou" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BucketAlreadyOwnedByYou, __BaseException>) {
    super({
      name: "BucketAlreadyOwnedByYou",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
  }
}

/**
 * <p>The specified bucket does not exist.</p>
 * @public
 */
export class NoSuchBucket extends __BaseException {
  readonly name = "NoSuchBucket" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchBucket, __BaseException>) {
    super({
      name: "NoSuchBucket",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchBucket.prototype);
  }
}

/**
 * <p>Object is archived and inaccessible until restored.</p>
 *          <p>If the object you are retrieving is stored in the S3 Glacier Flexible Retrieval storage class, the
 *       S3 Glacier Deep Archive storage class, the S3 Intelligent-Tiering Archive Access tier, or the
 *       S3 Intelligent-Tiering Deep Archive Access tier, before you can retrieve the object you must first restore a copy
 *       using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a>. Otherwise, this operation returns an <code>InvalidObjectState</code> error. For
 *       information about restoring archived objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived Objects</a> in the
 *         <i>Amazon S3 User Guide</i>.</p>
 * @public
 */
export class InvalidObjectState extends __BaseException {
  readonly name = "InvalidObjectState" as const;
  readonly $fault = "client" as const;
  StorageClass?: StorageClass | undefined;
  AccessTier?: IntelligentTieringAccessTier | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidObjectState, __BaseException>) {
    super({
      name: "InvalidObjectState",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidObjectState.prototype);
    this.StorageClass = opts.StorageClass;
    this.AccessTier = opts.AccessTier;
  }
}

/**
 * <p>The specified key does not exist.</p>
 * @public
 */
export class NoSuchKey extends __BaseException {
  readonly name = "NoSuchKey" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchKey, __BaseException>) {
    super({
      name: "NoSuchKey",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchKey.prototype);
  }
}

/**
 * <p>The specified content does not exist.</p>
 * @public
 */
export class NotFound extends __BaseException {
  readonly name = "NotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFound, __BaseException>) {
    super({
      name: "NotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFound.prototype);
  }
}

/**
 * <p> The existing object was created with a different encryption type. Subsequent write requests must
 *       include the appropriate encryption parameters in the request or while creating the session. </p>
 * @public
 */
export class EncryptionTypeMismatch extends __BaseException {
  readonly name = "EncryptionTypeMismatch" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionTypeMismatch, __BaseException>) {
    super({
      name: "EncryptionTypeMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionTypeMismatch.prototype);
  }
}

/**
 * <p>You may receive this error in multiple cases. Depending on the reason for the error, you may receive
 *       one of the messages below:</p>
 *          <ul>
 *             <li>
 *                <p>Cannot specify both a write offset value and user-defined object metadata for existing
 *           objects.</p>
 *             </li>
 *             <li>
 *                <p>Checksum Type mismatch occurred, expected checksum Type: sha1, actual checksum Type:
 *           crc32c.</p>
 *             </li>
 *             <li>
 *                <p>Request body cannot be empty when 'write offset' is specified.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidRequest extends __BaseException {
  readonly name = "InvalidRequest" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequest, __BaseException>) {
    super({
      name: "InvalidRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequest.prototype);
  }
}

/**
 * <p> The write offset value that you specified does not match the current object size. </p>
 * @public
 */
export class InvalidWriteOffset extends __BaseException {
  readonly name = "InvalidWriteOffset" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidWriteOffset, __BaseException>) {
    super({
      name: "InvalidWriteOffset",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidWriteOffset.prototype);
  }
}

/**
 * <p> You have attempted to add more parts than the maximum of 10000 that are allowed for this object.
 *       You can use the CopyObject operation to copy this object to another and then add more data to the newly
 *       copied object. </p>
 * @public
 */
export class TooManyParts extends __BaseException {
  readonly name = "TooManyParts" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyParts, __BaseException>) {
    super({
      name: "TooManyParts",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyParts.prototype);
  }
}

/**
 * <p>Parameters on this idempotent request are inconsistent with parameters used in previous request(s). </p>
 *          <p>For a list of error codes and more information on Amazon S3 errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">Error codes</a>.</p>
 *          <note>
 *             <p>Idempotency ensures that an API request completes no more than one time. With an idempotent
 *         request, if the original request completes successfully, any subsequent retries complete successfully
 *         without performing any further actions.</p>
 *          </note>
 * @public
 */
export class IdempotencyParameterMismatch extends __BaseException {
  readonly name = "IdempotencyParameterMismatch" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyParameterMismatch, __BaseException>) {
    super({
      name: "IdempotencyParameterMismatch",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyParameterMismatch.prototype);
  }
}

/**
 * <p>This action is not allowed against this storage tier.</p>
 * @public
 */
export class ObjectAlreadyInActiveTierError extends __BaseException {
  readonly name = "ObjectAlreadyInActiveTierError" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectAlreadyInActiveTierError, __BaseException>) {
    super({
      name: "ObjectAlreadyInActiveTierError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
  }
}
