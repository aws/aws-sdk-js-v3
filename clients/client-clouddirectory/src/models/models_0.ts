// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudDirectoryServiceException as __BaseException } from "./CloudDirectoryServiceException";

/**
 * @public
 * <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A unique identifier for an attribute.</p>
 */
export interface AttributeKey {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema that contains the facet and
   *       attribute.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the facet that the attribute exists within.</p>
   */
  FacetName: string | undefined;

  /**
   * @public
   * <p>The name of the attribute.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Represents the data for a typed attribute. You can set one, and only one, of the
 *       elements. Each attribute in an item is a name-value pair. Attributes have a single
 *       value.</p>
 */
export type TypedAttributeValue =
  | TypedAttributeValue.BinaryValueMember
  | TypedAttributeValue.BooleanValueMember
  | TypedAttributeValue.DatetimeValueMember
  | TypedAttributeValue.NumberValueMember
  | TypedAttributeValue.StringValueMember
  | TypedAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace TypedAttributeValue {
  /**
   * @public
   * <p>A string data value.</p>
   */
  export interface StringValueMember {
    StringValue: string;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A binary data value.</p>
   */
  export interface BinaryValueMember {
    StringValue?: never;
    BinaryValue: Uint8Array;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A Boolean data value.</p>
   */
  export interface BooleanValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue: boolean;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A number data value.</p>
   */
  export interface NumberValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue: string;
    DatetimeValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A date and time value.</p>
   */
  export interface DatetimeValueMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    BinaryValue?: never;
    BooleanValue?: never;
    NumberValue?: never;
    DatetimeValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    BinaryValue: (value: Uint8Array) => T;
    BooleanValue: (value: boolean) => T;
    NumberValue: (value: string) => T;
    DatetimeValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TypedAttributeValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.BinaryValue !== undefined) return visitor.BinaryValue(value.BinaryValue);
    if (value.BooleanValue !== undefined) return visitor.BooleanValue(value.BooleanValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    if (value.DatetimeValue !== undefined) return visitor.DatetimeValue(value.DatetimeValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The combination of an attribute key and an attribute value.</p>
 */
export interface AttributeKeyAndValue {
  /**
   * @public
   * <p>The key of the attribute.</p>
   */
  Key: AttributeKey | undefined;

  /**
   * @public
   * <p>The value of the attribute.</p>
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * @public
 * <p>The reference that identifies an object.</p>
 */
export interface ObjectReference {
  /**
   * @public
   * <p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>/some/path</i> - Identifies the object based on path</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>#SomeBatchReference</i> - Identifies the object in a batch call</p>
   *             </li>
   *          </ul>
   */
  Selector?: string;
}

/**
 * @public
 * <p>A facet.</p>
 */
export interface SchemaFacet {
  /**
   * @public
   * <p>The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions.
   *      If this value is set, FacetName must also be set.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the facet. If this value is set, SchemaArn must also be set.</p>
   */
  FacetName?: string;
}

/**
 * @public
 */
export interface AddFacetToObjectRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * @public
   * <p>Attributes on the facet that you are adding to the object.</p>
   */
  ObjectAttributeList?: AttributeKeyAndValue[];

  /**
   * @public
   * <p>A reference to the object you are adding the specified facet to.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AddFacetToObjectResponse {}

/**
 * @public
 * <p>Operations are only permitted on enabled directories.</p>
 */
export class DirectoryNotEnabledException extends __BaseException {
  readonly name: "DirectoryNotEnabledException" = "DirectoryNotEnabledException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNotEnabledException, __BaseException>) {
    super({
      name: "DirectoryNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 */
export class FacetValidationException extends __BaseException {
  readonly name: "FacetValidationException" = "FacetValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetValidationException, __BaseException>) {
    super({
      name: "FacetValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that the provided ARN value is not valid.</p>
 */
export class InvalidArnException extends __BaseException {
  readonly name: "InvalidArnException" = "InvalidArnException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 */
export class RetryableConflictException extends __BaseException {
  readonly name: "RetryableConflictException" = "RetryableConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RetryableConflictException, __BaseException>) {
    super({
      name: "RetryableConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RetryableConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ApplySchemaRequest {
  /**
   * @public
   * <p>Published schema Amazon Resource Name (ARN) that needs to be copied. For more
   *       information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       into which the schema is copied. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface ApplySchemaResponse {
  /**
   * @public
   * <p>The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on
   *       this directory. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn?: string;

  /**
   * @public
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn?: string;
}

/**
 * @public
 * <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 */
export class InvalidAttachmentException extends __BaseException {
  readonly name: "InvalidAttachmentException" = "InvalidAttachmentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAttachmentException, __BaseException>) {
    super({
      name: "InvalidAttachmentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAttachmentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that a schema could not be created due to a naming conflict. Please select a
 *       different name and then try again.</p>
 */
export class SchemaAlreadyExistsException extends __BaseException {
  readonly name: "SchemaAlreadyExistsException" = "SchemaAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchemaAlreadyExistsException, __BaseException>) {
    super({
      name: "SchemaAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchemaAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AttachObjectRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The child object reference to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The link name with which the child object is attached to the parent.</p>
   */
  LinkName: string | undefined;
}

/**
 * @public
 */
export interface AttachObjectResponse {
  /**
   * @public
   * <p>The attached <code>ObjectIdentifier</code>, which is the child
   *         <code>ObjectIdentifier</code>.</p>
   */
  AttachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Indicates that a link could not be created due to a naming conflict. Choose a different
 *       name and then try again.</p>
 */
export class LinkNameAlreadyInUseException extends __BaseException {
  readonly name: "LinkNameAlreadyInUseException" = "LinkNameAlreadyInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LinkNameAlreadyInUseException, __BaseException>) {
    super({
      name: "LinkNameAlreadyInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LinkNameAlreadyInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The reference that identifies the object to which the policy will be
   *       attached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AttachPolicyResponse {}

/**
 * @public
 * <p>Indicates that the requested operation can only operate on policy objects.</p>
 */
export class NotPolicyException extends __BaseException {
  readonly name: "NotPolicyException" = "NotPolicyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotPolicyException, __BaseException>) {
    super({
      name: "NotPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotPolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AttachToIndexRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the directory where the object and index
   *       exist.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * @public
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AttachToIndexResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>An object has been attempted to be attached to an object that does not have the appropriate attribute value.</p>
 */
export class IndexedAttributeMissingException extends __BaseException {
  readonly name: "IndexedAttributeMissingException" = "IndexedAttributeMissingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IndexedAttributeMissingException, __BaseException>) {
    super({
      name: "IndexedAttributeMissingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IndexedAttributeMissingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that the requested operation can only operate on index objects.</p>
 */
export class NotIndexException extends __BaseException {
  readonly name: "NotIndexException" = "NotIndexException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotIndexException, __BaseException>) {
    super({
      name: "NotIndexException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotIndexException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Identifies the attribute name and value for a typed link.</p>
 */
export interface AttributeNameAndValue {
  /**
   * @public
   * <p>The attribute name of the typed link.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>The value for the typed link.</p>
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * @public
 * <p>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed
 *       link.</p>
 */
export interface TypedLinkSchemaAndFacetName {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The unique name of the typed link facet.</p>
   */
  TypedLinkName: string | undefined;
}

/**
 * @public
 */
export interface AttachTypedLinkRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the directory where you want to attach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * @public
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * @public
 * <p>Contains all the information that is used to uniquely identify a typed link. The
 *       parameters discussed in this topic are used to uniquely specify the typed link being operated
 *       on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API
 *       operations provide typed link specifiers as output. You can also construct a typed link
 *       specifier from scratch.</p>
 */
export interface TypedLinkSpecifier {
  /**
   * @public
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * @public
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifies the attribute value to update.</p>
   */
  IdentityAttributeValues: AttributeNameAndValue[] | undefined;
}

/**
 * @public
 */
export interface AttachTypedLinkResponse {
  /**
   * @public
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}

/**
 * @public
 * @enum
 */
export const ConsistencyLevel = {
  EVENTUAL: "EVENTUAL",
  SERIALIZABLE: "SERIALIZABLE",
} as const;

/**
 * @public
 */
export type ConsistencyLevel = (typeof ConsistencyLevel)[keyof typeof ConsistencyLevel];

/**
 * @public
 * <p>Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetLinkAttributes {
  /**
   * @public
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * @public
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}

/**
 * @public
 * <p>Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectAttributes {
  /**
   * @public
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * @public
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}

/**
 * @public
 * <p>Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectInformation {
  /**
   * @public
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListAttachedIndices {
  /**
   * @public
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const RangeMode = {
  EXCLUSIVE: "EXCLUSIVE",
  FIRST: "FIRST",
  INCLUSIVE: "INCLUSIVE",
  LAST: "LAST",
  LAST_BEFORE_MISSING_VALUES: "LAST_BEFORE_MISSING_VALUES",
} as const;

/**
 * @public
 */
export type RangeMode = (typeof RangeMode)[keyof typeof RangeMode];

/**
 * @public
 * <p>A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.</p>
 */
export interface TypedAttributeValueRange {
  /**
   * @public
   * <p>The inclusive or exclusive range start.</p>
   */
  StartMode: RangeMode | undefined;

  /**
   * @public
   * <p>The value to start the range at.</p>
   */
  StartValue?: TypedAttributeValue;

  /**
   * @public
   * <p>The inclusive or exclusive range end.</p>
   */
  EndMode: RangeMode | undefined;

  /**
   * @public
   * <p>The attribute value to terminate the range at.</p>
   */
  EndValue?: TypedAttributeValue;
}

/**
 * @public
 * <p>Identifies the range of attributes that are used by a specified filter.</p>
 */
export interface TypedLinkAttributeRange {
  /**
   * @public
   * <p>The unique name of the typed link attribute.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The range of attribute values that are being selected.</p>
   */
  Range: TypedAttributeValueRange | undefined;
}

/**
 * @public
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIncomingTypedLinks {
  /**
   * @public
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @public
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *        order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A range of attributes.</p>
 */
export interface ObjectAttributeRange {
  /**
   * @public
   * <p>The key of the attribute that the attribute range covers.</p>
   */
  AttributeKey?: AttributeKey;

  /**
   * @public
   * <p>The range of attribute values being selected.</p>
   */
  Range?: TypedAttributeValueRange;
}

/**
 * @public
 * <p>Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIndex {
  /**
   * @public
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: ObjectAttributeRange[];

  /**
   * @public
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectAttributes</a> operation.</p>
 */
export interface BatchListObjectAttributes {
  /**
   * @public
   * <p>Reference of the object whose attributes need to be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectChildren</a> operation.</p>
 */
export interface BatchListObjectChildren {
  /**
   * @public
   * <p>Reference of the object for which child objects are being listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of items to be retrieved in a single call. This is an approximate
   *        number.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectParentPaths {
  /**
   * @public
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Lists parent objects that are associated with a given object in pagination
 *       fashion.</p>
 */
export interface BatchListObjectParents {
  /**
   * @public
   * <p>The reference that identifies an object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectPolicies {
  /**
   * @public
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListOutgoingTypedLinks {
  /**
   * @public
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @public
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *        not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListPolicyAttachments {
  /**
   * @public
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchLookupPolicy {
  /**
   * @public
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchRead</code> operation.</p>
 */
export interface BatchReadOperation {
  /**
   * @public
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributes;

  /**
   * @public
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildren;

  /**
   * @public
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndices;

  /**
   * @public
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPaths;

  /**
   * @public
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformation;

  /**
   * @public
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributes;

  /**
   * @public
   * <p>Lists parent objects that are associated with a given object in pagination
   *       fashion.</p>
   */
  ListObjectParents?: BatchListObjectParents;

  /**
   * @public
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPolicies;

  /**
   * @public
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachments;

  /**
   * @public
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicy;

  /**
   * @public
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndex;

  /**
   * @public
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

  /**
   * @public
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks;

  /**
   * @public
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributes;
}

/**
 * @public
 */
export interface BatchReadRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: BatchReadOperation[] | undefined;

  /**
   * @public
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 * @enum
 */
export const BatchReadExceptionType = {
  AccessDeniedException: "AccessDeniedException",
  CannotListParentOfRootException: "CannotListParentOfRootException",
  DirectoryNotEnabledException: "DirectoryNotEnabledException",
  FacetValidationException: "FacetValidationException",
  InternalServiceException: "InternalServiceException",
  InvalidArnException: "InvalidArnException",
  InvalidNextTokenException: "InvalidNextTokenException",
  LimitExceededException: "LimitExceededException",
  NotIndexException: "NotIndexException",
  NotNodeException: "NotNodeException",
  NotPolicyException: "NotPolicyException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ValidationException: "ValidationException",
} as const;

/**
 * @public
 */
export type BatchReadExceptionType = (typeof BatchReadExceptionType)[keyof typeof BatchReadExceptionType];

/**
 * @public
 * <p>The batch read exception structure, which contains the exception type and
 *       message.</p>
 */
export interface BatchReadException {
  /**
   * @public
   * <p>A type of exception, such as <code>InvalidArnException</code>.</p>
   */
  Type?: BatchReadExceptionType;

  /**
   * @public
   * <p>An exception message that is associated with the failure.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>GetLinkAttributes</a> response operation.</p>
 */
export interface BatchGetLinkAttributesResponse {
  /**
   * @public
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

/**
 * @public
 * <p>Represents the output of a <a>GetObjectAttributes</a> response operation.</p>
 */
export interface BatchGetObjectAttributesResponse {
  /**
   * @public
   * <p>The attribute values that are associated with an object.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

/**
 * @public
 * <p>Represents the output of a <a>GetObjectInformation</a> response operation.</p>
 */
export interface BatchGetObjectInformationResponse {
  /**
   * @public
   * <p>The facets attached to the specified object.</p>
   */
  SchemaFacets?: SchemaFacet[];

  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents an index and an attached object.</p>
 */
export interface IndexAttachment {
  /**
   * @public
   * <p>The indexed attribute values.</p>
   */
  IndexedAttributes?: AttributeKeyAndValue[];

  /**
   * @public
   * <p>In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListAttachedIndices</a> response operation.</p>
 */
export interface BatchListAttachedIndicesResponse {
  /**
   * @public
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListIncomingTypedLinks</a> response operation.</p>
 */
export interface BatchListIncomingTypedLinksResponse {
  /**
   * @public
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListIndex</a> response operation.</p>
 */
export interface BatchListIndexResponse {
  /**
   * @public
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectAttributes</a> response operation.</p>
 */
export interface BatchListObjectAttributesResponse {
  /**
   * @public
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key; attribute value is the value.</p>
   */
  Attributes?: AttributeKeyAndValue[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectChildren</a> response operation.</p>
 */
export interface BatchListObjectChildrenResponse {
  /**
   * @public
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: Record<string, string>;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Returns the path to the <code>ObjectIdentifiers</code> that is associated with the
 *       directory.</p>
 */
export interface PathToObjectIdentifiers {
  /**
   * @public
   * <p>The path that is used to identify the object starting from directory root.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the
   *       request.</p>
   */
  ObjectIdentifiers?: string[];
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectParentPaths</a> response operation.</p>
 */
export interface BatchListObjectParentPathsResponse {
  /**
   * @public
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *        directory.</p>
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A pair of ObjectIdentifier and LinkName.</p>
 */
export interface ObjectIdentifierAndLinkNameTuple {
  /**
   * @public
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * @public
   * <p>The name of the link between the parent and the child object.</p>
   */
  LinkName?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectParents</a> response operation.</p>
 */
export interface BatchListObjectParentsResponse {
  /**
   * @public
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListObjectPolicies</a> response operation.</p>
 */
export interface BatchListObjectPoliciesResponse {
  /**
   * @public
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *        object.</p>
   */
  AttachedPolicyIds?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.</p>
 */
export interface BatchListOutgoingTypedLinksResponse {
  /**
   * @public
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>ListPolicyAttachments</a> response operation.</p>
 */
export interface BatchListPolicyAttachmentsResponse {
  /**
   * @public
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is
 *       attached. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 */
export interface PolicyAttachment {
  /**
   * @public
   * <p>The ID of <code>PolicyAttachment</code>.</p>
   */
  PolicyId?: string;

  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> that is associated with
   *       <code>PolicyAttachment</code>.</p>
   */
  ObjectIdentifier?: string;

  /**
   * @public
   * <p>The type of policy that can be associated with <code>PolicyAttachment</code>.</p>
   */
  PolicyType?: string;
}

/**
 * @public
 * <p>Used when a regular object exists in a <a>Directory</a> and you want to find
 *       all of the policies that are associated with that object and the parent to that
 *       object.</p>
 */
export interface PolicyToPath {
  /**
   * @public
   * <p>The path that is referenced from the root.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>List of policy objects.</p>
   */
  Policies?: PolicyAttachment[];
}

/**
 * @public
 * <p>Represents the output of a <a>LookupPolicy</a> response operation.</p>
 */
export interface BatchLookupPolicyResponse {
  /**
   * @public
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *        <code>PolicyType</code>. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: PolicyToPath[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchRead</code> success response operation.</p>
 */
export interface BatchReadSuccessfulResponse {
  /**
   * @public
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributesResponse;

  /**
   * @public
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildrenResponse;

  /**
   * @public
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformationResponse;

  /**
   * @public
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributesResponse;

  /**
   * @public
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndicesResponse;

  /**
   * @public
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPathsResponse;

  /**
   * @public
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPoliciesResponse;

  /**
   * @public
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;

  /**
   * @public
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicyResponse;

  /**
   * @public
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndexResponse;

  /**
   * @public
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

  /**
   * @public
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

  /**
   * @public
   * <p>The list of attributes to retrieve from the typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributesResponse;

  /**
   * @public
   * <p>The list of parent objects to retrieve.</p>
   */
  ListObjectParents?: BatchListObjectParentsResponse;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchRead</code> response operation.</p>
 */
export interface BatchReadOperationResponse {
  /**
   * @public
   * <p>Identifies which operation in a batch has succeeded.</p>
   */
  SuccessfulResponse?: BatchReadSuccessfulResponse;

  /**
   * @public
   * <p>Identifies which operation in a batch has failed.</p>
   */
  ExceptionResponse?: BatchReadException;
}

/**
 * @public
 */
export interface BatchReadResponse {
  /**
   * @public
   * <p>A list of all the responses for each batch read.</p>
   */
  Responses?: BatchReadOperationResponse[];
}

/**
 * @public
 * @enum
 */
export const BatchWriteExceptionType = {
  AccessDeniedException: "AccessDeniedException",
  DirectoryNotEnabledException: "DirectoryNotEnabledException",
  FacetValidationException: "FacetValidationException",
  IndexedAttributeMissingException: "IndexedAttributeMissingException",
  InternalServiceException: "InternalServiceException",
  InvalidArnException: "InvalidArnException",
  InvalidAttachmentException: "InvalidAttachmentException",
  LimitExceededException: "LimitExceededException",
  LinkNameAlreadyInUseException: "LinkNameAlreadyInUseException",
  NotIndexException: "NotIndexException",
  NotNodeException: "NotNodeException",
  NotPolicyException: "NotPolicyException",
  ObjectAlreadyDetachedException: "ObjectAlreadyDetachedException",
  ObjectNotDetachedException: "ObjectNotDetachedException",
  ResourceNotFoundException: "ResourceNotFoundException",
  StillContainsLinksException: "StillContainsLinksException",
  UnsupportedIndexTypeException: "UnsupportedIndexTypeException",
  ValidationException: "ValidationException",
} as const;

/**
 * @public
 */
export type BatchWriteExceptionType = (typeof BatchWriteExceptionType)[keyof typeof BatchWriteExceptionType];

/**
 * @public
 * <p>A <code>BatchWrite</code> exception has occurred.</p>
 */
export class BatchWriteException extends __BaseException {
  readonly name: "BatchWriteException" = "BatchWriteException";
  readonly $fault: "client" = "client";
  Index?: number;
  Type?: BatchWriteExceptionType;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchWriteException, __BaseException>) {
    super({
      name: "BatchWriteException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchWriteException.prototype);
    this.Index = opts.Index;
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Represents the output of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObject {
  /**
   * @public
   * <p>Represents the facet being added to the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * @public
   * <p>The attributes to set on the object.</p>
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * @public
   * <p>A reference to the object being mutated.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Represents the output of an <a>AttachObject</a> operation.</p>
 */
export interface BatchAttachObject {
  /**
   * @public
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The child object reference that is to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;
}

/**
 * @public
 * <p>Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachPolicy {
  /**
   * @public
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The reference that identifies the object to which the policy will be
   *        attached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachToIndex {
  /**
   * @public
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * @public
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachTypedLink {
  /**
   * @public
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * @public
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * @public
 * <p>Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchCreateIndex {
  /**
   * @public
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *        is supported.</p>
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * @public
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *        not.</p>
   */
  IsUnique: boolean | undefined;

  /**
   * @public
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * @public
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;

  /**
   * @public
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>CreateObject</a> operation.</p>
 */
export interface BatchCreateObject {
  /**
   * @public
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaFacet: SchemaFacet[] | undefined;

  /**
   * @public
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as
   *       the map value.</p>
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * @public
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * @public
   * <p>The name of the link.</p>
   */
  LinkName?: string;

  /**
   * @public
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>DeleteObject</a> operation.</p>
 */
export interface BatchDeleteObject {
  /**
   * @public
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachFromIndex {
  /**
   * @public
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * @public
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Represents the output of a <a>DetachObject</a> operation.</p>
 */
export interface BatchDetachObject {
  /**
   * @public
   * <p>Parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;

  /**
   * @public
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

/**
 * @public
 * <p>Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.</p>
 */
export interface BatchDetachPolicy {
  /**
   * @public
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 * <p>Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachTypedLink {
  /**
   * @public
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * @public
 * <p>A batch operation to remove a facet from an object.</p>
 */
export interface BatchRemoveFacetFromObject {
  /**
   * @public
   * <p>The facet to remove from the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * @public
   * <p>A reference to the object whose facet will be removed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateActionType = {
  CREATE_OR_UPDATE: "CREATE_OR_UPDATE",
  DELETE: "DELETE",
} as const;

/**
 * @public
 */
export type UpdateActionType = (typeof UpdateActionType)[keyof typeof UpdateActionType];

/**
 * @public
 * <p>The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.</p>
 */
export interface LinkAttributeAction {
  /**
   * @public
   * <p>A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.</p>
   */
  AttributeActionType?: UpdateActionType;

  /**
   * @public
   * <p>The value that you want to update to.</p>
   */
  AttributeUpdateValue?: TypedAttributeValue;
}

/**
 * @public
 * <p>Structure that contains attribute update information.</p>
 */
export interface LinkAttributeUpdate {
  /**
   * @public
   * <p>The key of the attribute being updated.</p>
   */
  AttributeKey?: AttributeKey;

  /**
   * @public
   * <p>The action to perform as part of the attribute update.</p>
   */
  AttributeAction?: LinkAttributeAction;
}

/**
 * @public
 * <p>Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchUpdateLinkAttributes {
  /**
   * @public
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * @public
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

/**
 * @public
 * <p>The action to take on the object attribute.</p>
 */
export interface ObjectAttributeAction {
  /**
   * @public
   * <p>A type that can be either <code>Update</code> or <code>Delete</code>.</p>
   */
  ObjectAttributeActionType?: UpdateActionType;

  /**
   * @public
   * <p>The value that you want to update to.</p>
   */
  ObjectAttributeUpdateValue?: TypedAttributeValue;
}

/**
 * @public
 * <p>Structure that contains attribute update information.</p>
 */
export interface ObjectAttributeUpdate {
  /**
   * @public
   * <p>The key of the attribute being updated.</p>
   */
  ObjectAttributeKey?: AttributeKey;

  /**
   * @public
   * <p>The action to perform as part of the attribute update.</p>
   */
  ObjectAttributeAction?: ObjectAttributeAction;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchUpdate</code> operation. </p>
 */
export interface BatchUpdateObjectAttributes {
  /**
   * @public
   * <p>Reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchWrite</code> operation. </p>
 */
export interface BatchWriteOperation {
  /**
   * @public
   * <p>Creates an object.</p>
   */
  CreateObject?: BatchCreateObject;

  /**
   * @public
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObject;

  /**
   * @public
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObject;

  /**
   * @public
   * <p>Updates a given object's attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributes;

  /**
   * @public
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObject;

  /**
   * @public
   * <p>A batch operation that adds a facet to an object.</p>
   */
  AddFacetToObject?: BatchAddFacetToObject;

  /**
   * @public
   * <p>A batch operation that removes a facet from an object.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObject;

  /**
   * @public
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicy;

  /**
   * @public
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicy;

  /**
   * @public
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndex;

  /**
   * @public
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndex;

  /**
   * @public
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndex;

  /**
   * @public
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLink;

  /**
   * @public
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLink;

  /**
   * @public
   * <p>Updates a given object's attributes.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributes;
}

/**
 * @public
 */
export interface BatchWriteRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: BatchWriteOperation[] | undefined;
}

/**
 * @public
 * <p>The result of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObjectResponse {}

/**
 * @public
 * <p>Represents the output batch <a>AttachObject</a> response operation.</p>
 */
export interface BatchAttachObjectResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the object that has been attached.</p>
   */
  attachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of an <a>AttachPolicy</a> response
 *       operation.</p>
 */
export interface BatchAttachPolicyResponse {}

/**
 * @public
 * <p>Represents the output of a <a>AttachToIndex</a> response operation.</p>
 */
export interface BatchAttachToIndexResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>AttachTypedLink</a> response operation.</p>
 */
export interface BatchAttachTypedLinkResponse {
  /**
   * @public
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}

/**
 * @public
 * <p>Represents the output of a <a>CreateIndex</a> response operation.</p>
 */
export interface BatchCreateIndexResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>CreateObject</a> response operation.</p>
 */
export interface BatchCreateObjectResponse {
  /**
   * @public
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>DeleteObject</a> response operation.</p>
 */
export interface BatchDeleteObjectResponse {}

/**
 * @public
 * <p>Represents the output of a <a>DetachFromIndex</a> response operation.</p>
 */
export interface BatchDetachFromIndexResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>DetachObject</a> response operation.</p>
 */
export interface BatchDetachObjectResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the detached object.</p>
   */
  detachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <a>DetachPolicy</a> response operation.</p>
 */
export interface BatchDetachPolicyResponse {}

/**
 * @public
 * <p>Represents the output of a <a>DetachTypedLink</a> response operation.</p>
 */
export interface BatchDetachTypedLinkResponse {}

/**
 * @public
 * <p>An empty result that represents success.</p>
 */
export interface BatchRemoveFacetFromObjectResponse {}

/**
 * @public
 * <p>Represents the output of a <a>UpdateLinkAttributes</a> response operation.</p>
 */
export interface BatchUpdateLinkAttributesResponse {}

/**
 * @public
 * <p>Represents the output of a <code>BatchUpdate</code> response operation.</p>
 */
export interface BatchUpdateObjectAttributesResponse {
  /**
   * @public
   * <p>ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
 */
export interface BatchWriteOperationResponse {
  /**
   * @public
   * <p>Creates an object in a <a>Directory</a>.</p>
   */
  CreateObject?: BatchCreateObjectResponse;

  /**
   * @public
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObjectResponse;

  /**
   * @public
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObjectResponse;

  /**
   * @public
   * <p>Updates a given object’s attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;

  /**
   * @public
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObjectResponse;

  /**
   * @public
   * <p>The result of an add facet to object batch operation.</p>
   */
  AddFacetToObject?: BatchAddFacetToObjectResponse;

  /**
   * @public
   * <p>The result of a batch remove facet from object operation.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;

  /**
   * @public
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicyResponse;

  /**
   * @public
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicyResponse;

  /**
   * @public
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndexResponse;

  /**
   * @public
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndexResponse;

  /**
   * @public
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndexResponse;

  /**
   * @public
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLinkResponse;

  /**
   * @public
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLinkResponse;

  /**
   * @public
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
}

/**
 * @public
 */
export interface BatchWriteResponse {
  /**
   * @public
   * <p>A list of all the responses for each batch write.</p>
   */
  Responses?: BatchWriteOperationResponse[];
}

/**
 * @public
 */
export interface CreateDirectoryRequest {
  /**
   * @public
   * <p>The name of the <a>Directory</a>. Should be unique per account, per
   *       region.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the published schema that will be copied into the
   *       data <a>Directory</a>. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryResponse {
  /**
   * @public
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The name of the <a>Directory</a>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The root object node of the created directory.</p>
   */
  ObjectIdentifier: string | undefined;

  /**
   * @public
   * <p>The ARN of the published schema in the <a>Directory</a>. Once a published
   *       schema is copied into the directory, it has its own ARN, which is referred to applied schema
   *       ARN. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn: string | undefined;
}

/**
 * @public
 * <p>Indicates that a <a>Directory</a> could not be created due to a naming
 *       conflict. Choose a different name and try again.</p>
 */
export class DirectoryAlreadyExistsException extends __BaseException {
  readonly name: "DirectoryAlreadyExistsException" = "DirectoryAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryAlreadyExistsException, __BaseException>) {
    super({
      name: "DirectoryAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RuleType = {
  BINARY_LENGTH: "BINARY_LENGTH",
  NUMBER_COMPARISON: "NUMBER_COMPARISON",
  STRING_FROM_SET: "STRING_FROM_SET",
  STRING_LENGTH: "STRING_LENGTH",
} as const;

/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * <p>Contains an Amazon Resource Name (ARN) and parameters that are associated with the
 *       rule.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>The type of attribute validation rule.</p>
   */
  Type?: RuleType;

  /**
   * @public
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const FacetAttributeType = {
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  DATETIME: "DATETIME",
  NUMBER: "NUMBER",
  STRING: "STRING",
  VARIANT: "VARIANT",
} as const;

/**
 * @public
 */
export type FacetAttributeType = (typeof FacetAttributeType)[keyof typeof FacetAttributeType];

/**
 * @public
 * <p>A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
 */
export interface FacetAttributeDefinition {
  /**
   * @public
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | undefined;

  /**
   * @public
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;

  /**
   * @public
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * @public
   * <p>Validation rules attached to the attribute definition.</p>
   */
  Rules?: Record<string, Rule>;
}

/**
 * @public
 * <p>The facet attribute reference that specifies the attribute definition that contains the
 *       attribute facet name and attribute name.</p>
 */
export interface FacetAttributeReference {
  /**
   * @public
   * <p>The target facet name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetFacetName: string | undefined;

  /**
   * @public
   * <p>The target attribute name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetAttributeName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RequiredAttributeBehavior = {
  NOT_REQUIRED: "NOT_REQUIRED",
  REQUIRED_ALWAYS: "REQUIRED_ALWAYS",
} as const;

/**
 * @public
 */
export type RequiredAttributeBehavior = (typeof RequiredAttributeBehavior)[keyof typeof RequiredAttributeBehavior];

/**
 * @public
 * <p>An attribute that is associated with the <a>Facet</a>.</p>
 */
export interface FacetAttribute {
  /**
   * @public
   * <p>The name of the facet attribute.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A facet attribute consists of either a definition or a reference. This structure
   *       contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeDefinition?: FacetAttributeDefinition;

  /**
   * @public
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeReference?: FacetAttributeReference;

  /**
   * @public
   * <p>The required behavior of the <code>FacetAttribute</code>.</p>
   */
  RequiredBehavior?: RequiredAttributeBehavior;
}

/**
 * @public
 * @enum
 */
export const FacetStyle = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type FacetStyle = (typeof FacetStyle)[keyof typeof FacetStyle];

/**
 * @public
 * @enum
 */
export const ObjectType = {
  INDEX: "INDEX",
  LEAF_NODE: "LEAF_NODE",
  NODE: "NODE",
  POLICY: "POLICY",
} as const;

/**
 * @public
 */
export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType];

/**
 * @public
 */
export interface CreateFacetRequest {
  /**
   * @public
   * <p>The schema ARN in which the new <a>Facet</a> will be created. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the <a>Facet</a>, which is unique for a given schema.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The attributes that are associated with the <a>Facet</a>.</p>
   */
  Attributes?: FacetAttribute[];

  /**
   * @public
   * <p>Specifies whether a given object created from this facet is of type node, leaf node,
   *       policy or index.</p>
   *          <ul>
   *             <li>
   *                <p>Node: Can have multiple children but one parent.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Leaf node: Cannot have children but can have multiple parents.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Policy: Allows you to store a policy document and policy type. For more
   *         information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Index: Can be created with the Index API.</p>
   *             </li>
   *          </ul>
   */
  ObjectType?: ObjectType;

  /**
   * @public
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle;
}

/**
 * @public
 */
export interface CreateFacetResponse {}

/**
 * @public
 * <p>A facet with the same name already exists.</p>
 */
export class FacetAlreadyExistsException extends __BaseException {
  readonly name: "FacetAlreadyExistsException" = "FacetAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetAlreadyExistsException, __BaseException>) {
    super({
      name: "FacetAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Occurs when any of the rule parameter keys or values are invalid.</p>
 */
export class InvalidRuleException extends __BaseException {
  readonly name: "InvalidRuleException" = "InvalidRuleException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRuleException, __BaseException>) {
    super({
      name: "InvalidRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRuleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * @public
   * <p>The ARN of the directory where the index should be created.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *       is supported.</p>
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * @public
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *       not.</p>
   */
  IsUnique: boolean | undefined;

  /**
   * @public
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * @public
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 * <p>Indicates that the requested index type is not supported.</p>
 */
export class UnsupportedIndexTypeException extends __BaseException {
  readonly name: "UnsupportedIndexTypeException" = "UnsupportedIndexTypeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedIndexTypeException, __BaseException>) {
    super({
      name: "UnsupportedIndexTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedIndexTypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateObjectRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       in which the object will be created. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacets: SchemaFacet[] | undefined;

  /**
   * @public
   * <p>The attribute map whose attribute ARN contains the key and attribute value as the map
   *       value.</p>
   */
  ObjectAttributeList?: AttributeKeyAndValue[];

  /**
   * @public
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * @public
   * <p>The name of link that is used to attach this object to a parent.</p>
   */
  LinkName?: string;
}

/**
 * @public
 */
export interface CreateObjectResponse {
  /**
   * @public
   * <p>The identifier that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * @public
   * <p>The name that is associated with the schema. This is unique to each account and in each
   *       region.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

/**
 * @public
 * <p>A typed link attribute definition.</p>
 */
export interface TypedLinkAttributeDefinition {
  /**
   * @public
   * <p>The unique name of the typed link attribute.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | undefined;

  /**
   * @public
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;

  /**
   * @public
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * @public
   * <p>Validation rules that are attached to the attribute definition.</p>
   */
  Rules?: Record<string, Rule>;

  /**
   * @public
   * <p>The required behavior of the <code>TypedLinkAttributeDefinition</code>.</p>
   */
  RequiredBehavior: RequiredAttributeBehavior | undefined;
}

/**
 * @public
 * <p>Defines the typed links structure and its attributes. To create a typed link facet, use
 *       the <a>CreateTypedLinkFacet</a> API.</p>
 */
export interface TypedLinkFacet {
  /**
   * @public
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   */
  Attributes: TypedLinkAttributeDefinition[] | undefined;

  /**
   * @public
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   */
  IdentityAttributeOrder: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTypedLinkFacetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>
   *             <a>Facet</a> structure that is associated with the typed link
   *       facet.</p>
   */
  Facet: TypedLinkFacet | undefined;
}

/**
 * @public
 */
export interface CreateTypedLinkFacetResponse {}

/**
 * @public
 */
export interface DeleteDirectoryRequest {
  /**
   * @public
   * <p>The ARN of the directory to delete.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectoryResponse {
  /**
   * @public
   * <p>The ARN of the deleted directory.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 * <p>A directory that has been deleted and to which access has been attempted. Note: The
 *       requested resource will eventually cease to exist.</p>
 */
export class DirectoryDeletedException extends __BaseException {
  readonly name: "DirectoryDeletedException" = "DirectoryDeletedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryDeletedException, __BaseException>) {
    super({
      name: "DirectoryDeletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryDeletedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An operation can only operate on a disabled directory.</p>
 */
export class DirectoryNotDisabledException extends __BaseException {
  readonly name: "DirectoryNotDisabledException" = "DirectoryNotDisabledException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNotDisabledException, __BaseException>) {
    super({
      name: "DirectoryNotDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNotDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteFacetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the facet to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteFacetResponse {}

/**
 * @public
 * <p>Occurs when deleting a facet that contains an attribute that is a target to an
 *       attribute reference in a different facet.</p>
 */
export class FacetInUseException extends __BaseException {
  readonly name: "FacetInUseException" = "FacetInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetInUseException, __BaseException>) {
    super({
      name: "FacetInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified <a>Facet</a> could not be found.</p>
 */
export class FacetNotFoundException extends __BaseException {
  readonly name: "FacetNotFoundException" = "FacetNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FacetNotFoundException, __BaseException>) {
    super({
      name: "FacetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FacetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteObjectRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DeleteObjectResponse {}

/**
 * @public
 * <p>Indicates that the requested operation cannot be completed because the object has not
 *       been detached from the tree.</p>
 */
export class ObjectNotDetachedException extends __BaseException {
  readonly name: "ObjectNotDetachedException" = "ObjectNotDetachedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotDetachedException, __BaseException>) {
    super({
      name: "ObjectNotDetachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotDetachedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaResponse {
  /**
   * @public
   * <p>The input ARN that is returned as part of the response. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

/**
 * @public
 * <p>The object could not be deleted because links still exist. Remove the links and then
 *       try the operation again.</p>
 */
export class StillContainsLinksException extends __BaseException {
  readonly name: "StillContainsLinksException" = "StillContainsLinksException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StillContainsLinksException, __BaseException>) {
    super({
      name: "StillContainsLinksException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StillContainsLinksException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteTypedLinkFacetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypedLinkFacetResponse {}

/**
 * @public
 */
export interface DetachFromIndexRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the directory the index and object exist
   *       in.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * @public
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DetachFromIndexResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Indicates that the object is not attached to the index.</p>
 */
export class ObjectAlreadyDetachedException extends __BaseException {
  readonly name: "ObjectAlreadyDetachedException" = "ObjectAlreadyDetachedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectAlreadyDetachedException, __BaseException>) {
    super({
      name: "ObjectAlreadyDetachedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectAlreadyDetachedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DetachObjectRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The link name associated with the object that needs to be detached.</p>
   */
  LinkName: string | undefined;
}

/**
 * @public
 */
export interface DetachObjectResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> that was detached from the object.</p>
   */
  DetachedObjectIdentifier?: string;
}

/**
 * @public
 * <p>Occurs when any invalid operations are performed on an object that is not a node, such
 *       as calling <code>ListObjectChildren</code> for a leaf node object.</p>
 */
export class NotNodeException extends __BaseException {
  readonly name: "NotNodeException" = "NotNodeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotNodeException, __BaseException>) {
    super({
      name: "NotNodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotNodeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DetachPolicyResponse {}

/**
 * @public
 */
export interface DetachTypedLinkRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the directory where you want to detach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryRequest {
  /**
   * @public
   * <p>The ARN of the directory to disable.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryResponse {
  /**
   * @public
   * <p>The ARN of the directory that has been disabled.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryRequest {
  /**
   * @public
   * <p>The ARN of the directory to enable.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryResponse {
  /**
   * @public
   * <p>The ARN of the enabled directory.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppliedSchemaVersionRequest {
  /**
   * @public
   * <p>The ARN of the applied schema.</p>
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppliedSchemaVersionResponse {
  /**
   * @public
   * <p>Current applied schema ARN, including the minor version in use if one was provided.</p>
   */
  AppliedSchemaArn?: string;
}

/**
 * @public
 */
export interface GetDirectoryRequest {
  /**
   * @public
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DirectoryState = {
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DirectoryState = (typeof DirectoryState)[keyof typeof DirectoryState];

/**
 * @public
 * <p>Directory structure that includes the directory name and directory ARN.</p>
 */
export interface Directory {
  /**
   * @public
   * <p>The name of the directory.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the directory. For more
   *       information, see <a>arns</a>.</p>
   */
  DirectoryArn?: string;

  /**
   * @public
   * <p>The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.</p>
   */
  State?: DirectoryState;

  /**
   * @public
   * <p>The date and time when the directory was created.</p>
   */
  CreationDateTime?: Date;
}

/**
 * @public
 */
export interface GetDirectoryResponse {
  /**
   * @public
   * <p>Metadata about the directory.</p>
   */
  Directory: Directory | undefined;
}

/**
 * @public
 */
export interface GetFacetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the facet to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code>
 *                <a>Rule</a>s</code>, and
 *       <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.</p>
 */
export interface Facet {
  /**
   * @public
   * <p>The name of the <a>Facet</a>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType;

  /**
   * @public
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle;
}

/**
 * @public
 */
export interface GetFacetResponse {
  /**
   * @public
   * <p>The <a>Facet</a> structure that is associated with the facet.</p>
   */
  Facet?: Facet;
}

/**
 * @public
 */
export interface GetLinkAttributesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * @public
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;

  /**
   * @public
   * <p>The consistency level at which to retrieve the attributes on a typed link.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface GetLinkAttributesResponse {
  /**
   * @public
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

/**
 * @public
 */
export interface GetObjectAttributesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The consistency level at which to retrieve the attributes on an object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;

  /**
   * @public
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * @public
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesResponse {
  /**
   * @public
   * <p>The attributes that are associated with the object.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

/**
 * @public
 */
export interface GetObjectInformationRequest {
  /**
   * @public
   * <p>The ARN of the directory being retrieved.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The consistency level at which to retrieve the object information.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface GetObjectInformationResponse {
  /**
   * @public
   * <p>The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.</p>
   */
  SchemaFacets?: SchemaFacet[];

  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 */
export interface GetSchemaAsJsonRequest {
  /**
   * @public
   * <p>The ARN of the schema to retrieve.</p>
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaAsJsonResponse {
  /**
   * @public
   * <p>The name of the retrieved schema.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The JSON representation of the schema document.</p>
   */
  Document?: string;
}

/**
 * @public
 */
export interface GetTypedLinkFacetInformationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTypedLinkFacetInformationResponse {
  /**
   * @public
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet. When
   *       providing ranges to typed link selection, any inexact ranges must be specified at the end. Any
   *       attributes that do not have a range specified are presumed to match the entire range. Filters
   *       are interpreted in the order of the attributes on the typed link facet, not the order in which
   *       they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder?: string[];
}

/**
 * @public
 * <p>Indicates that the <code>NextToken</code> value is not valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
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
export interface ListAppliedSchemaArnsRequest {
  /**
   * @public
   * <p>The ARN of the directory you are listing.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListAppliedSchemaArnsResponse {
  /**
   * @public
   * <p>The ARNs of schemas that are applied to the directory.</p>
   */
  SchemaArns?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAttachedIndicesRequest {
  /**
   * @public
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The consistency level to use for this operation.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListAttachedIndicesResponse {
  /**
   * @public
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevelopmentSchemaArnsRequest {
  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDevelopmentSchemaArnsResponse {
  /**
   * @public
   * <p>The ARNs of retrieved development schemas.</p>
   */
  SchemaArns?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDirectoriesRequest {
  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The state of the directories in the list. Can be either Enabled, Disabled, or
   *       Deleted.</p>
   */
  state?: DirectoryState;
}

/**
 * @public
 */
export interface ListDirectoriesResponse {
  /**
   * @public
   * <p>Lists all directories that are associated with your account in pagination
   *       fashion.</p>
   */
  Directories: Directory[] | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFacetAttributesRequest {
  /**
   * @public
   * <p>The ARN of the schema where the facet resides.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the facet whose attributes will be retrieved.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFacetAttributesResponse {
  /**
   * @public
   * <p>The attributes attached to the facet.</p>
   */
  Attributes?: FacetAttribute[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFacetNamesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) to retrieve facet names from.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFacetNamesResponse {
  /**
   * @public
   * <p>The names of facets that exist within the schema.</p>
   */
  FacetNames?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIncomingTypedLinksRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @public
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *       order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListIncomingTypedLinksResponse {
  /**
   * @public
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIndexRequest {
  /**
   * @public
   * <p>The ARN of the directory that the index exists in.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: ObjectAttributeRange[];

  /**
   * @public
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListIndexResponse {
  /**
   * @public
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListManagedSchemaArnsRequest {
  /**
   * @public
   * <p>The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListManagedSchemaArnsResponse {
  /**
   * @public
   * <p>The ARNs for all AWS managed schemas.</p>
   */
  SchemaArns?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListObjectAttributesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;

  /**
   * @public
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;
}

/**
 * @public
 */
export interface ListObjectAttributesResponse {
  /**
   * @public
   * <p>Attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key, and attribute value is the value.</p>
   */
  Attributes?: AttributeKeyAndValue[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListObjectChildrenRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that identifies the object for which child objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListObjectChildrenResponse {
  /**
   * @public
   * <p>Children structure, which is a map with key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: Record<string, string>;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListObjectParentPathsRequest {
  /**
   * @public
   * <p>The ARN of the directory to which the parent path applies.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that identifies the object whose parent paths are listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListObjectParentPathsResponse {
  /**
   * @public
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *       directory.</p>
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Cannot list the parents of a <a>Directory</a> root.</p>
 */
export class CannotListParentOfRootException extends __BaseException {
  readonly name: "CannotListParentOfRootException" = "CannotListParentOfRootException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotListParentOfRootException, __BaseException>) {
    super({
      name: "CannotListParentOfRootException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotListParentOfRootException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListObjectParentsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that identifies the object for which parent objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;

  /**
   * @public
   * <p>When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.</p>
   */
  IncludeAllLinksToEachParent?: boolean;
}

/**
 * @public
 */
export interface ListObjectParentsResponse {
  /**
   * @public
   * <p>The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and
   *       LinkName as the value.</p>
   */
  Parents?: Record<string, string>;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];
}

/**
 * @public
 */
export interface ListObjectPoliciesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Reference that identifies the object for which policies will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListObjectPoliciesResponse {
  /**
   * @public
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *       object.</p>
   */
  AttachedPolicyIds?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOutgoingTypedLinksRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>A reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @public
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *       not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListOutgoingTypedLinksResponse {
  /**
   * @public
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPolicyAttachmentsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel;
}

/**
 * @public
 */
export interface ListPolicyAttachmentsResponse {
  /**
   * @public
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPublishedSchemaArnsRequest {
  /**
   * @public
   * <p>The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPublishedSchemaArnsResponse {
  /**
   * @public
   * <p>The ARNs of published schemas.</p>
   */
  SchemaArns?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
 */
export class InvalidTaggingRequestException extends __BaseException {
  readonly name: "InvalidTaggingRequestException" = "InvalidTaggingRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTaggingRequestException, __BaseException>) {
    super({
      name: "InvalidTaggingRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTaggingRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The pagination token. This is for future use. Currently pagination is not supported for
   *       tagging.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The <code>MaxResults</code> parameter sets the maximum number of results returned in a
   *       single page. This is for future use and is not supported currently.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The tag structure that contains a tag key and value.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key that is associated with the tag.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value that is associated with the tag.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tag key value pairs that are associated with the response.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTypedLinkFacetAttributesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTypedLinkFacetAttributesResponse {
  /**
   * @public
   * <p>An ordered set of attributes associate with the typed link.</p>
   */
  Attributes?: TypedLinkAttributeDefinition[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTypedLinkFacetNamesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTypedLinkFacetNamesResponse {
  /**
   * @public
   * <p>The names of typed link facets that exist within the schema.</p>
   */
  FacetNames?: string[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface LookupPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface LookupPolicyResponse {
  /**
   * @public
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *       <code>PolicyType</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: PolicyToPath[];

  /**
   * @public
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PublishSchemaRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the development schema. For
   *       more information, see <a>arns</a>.</p>
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * @public
   * <p>The major version under which the schema will be published. Schemas have both a major and minor version associated with them.</p>
   */
  Version: string | undefined;

  /**
   * @public
   * <p>The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.</p>
   */
  MinorVersion?: string;

  /**
   * @public
   * <p>The new name under which the schema will be published. If this is not provided, the
   *       development schema is considered.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface PublishSchemaResponse {
  /**
   * @public
   * <p>The ARN that is associated with the published schema. For more information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn?: string;
}

/**
 * @public
 * <p>Indicates that a schema is already published.</p>
 */
export class SchemaAlreadyPublishedException extends __BaseException {
  readonly name: "SchemaAlreadyPublishedException" = "SchemaAlreadyPublishedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchemaAlreadyPublishedException, __BaseException>) {
    super({
      name: "SchemaAlreadyPublishedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchemaAlreadyPublishedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Indicates that the provided <code>SchemaDoc</code> value is not valid.</p>
 */
export class InvalidSchemaDocException extends __BaseException {
  readonly name: "InvalidSchemaDocException" = "InvalidSchemaDocException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSchemaDocException, __BaseException>) {
    super({
      name: "InvalidSchemaDocException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSchemaDocException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutSchemaFromJsonRequest {
  /**
   * @public
   * <p>The ARN of the schema to update.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The replacement JSON schema.</p>
   */
  Document: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaFromJsonResponse {
  /**
   * @public
   * <p>The ARN of the schema to update.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface RemoveFacetFromObjectRequest {
  /**
   * @public
   * <p>The ARN of the directory in which the object resides.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The facet to remove. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * @public
   * <p>A reference to the object to remove the facet from.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface RemoveFacetFromObjectResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Keys of the tag that need to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>An attempt to modify a <a>Facet</a> resulted in an invalid schema
 *       exception.</p>
 */
export class InvalidFacetUpdateException extends __BaseException {
  readonly name: "InvalidFacetUpdateException" = "InvalidFacetUpdateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFacetUpdateException, __BaseException>) {
    super({
      name: "InvalidFacetUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFacetUpdateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A structure that contains information used to update an attribute.</p>
 */
export interface FacetAttributeUpdate {
  /**
   * @public
   * <p>The attribute to update.</p>
   */
  Attribute?: FacetAttribute;

  /**
   * @public
   * <p>The action to perform when updating the attribute.</p>
   */
  Action?: UpdateActionType;
}

/**
 * @public
 */
export interface UpdateFacetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the facet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>List of attributes that need to be updated in a given schema <a>Facet</a>.
   *       Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update
   *       operation to perform. </p>
   */
  AttributeUpdates?: FacetAttributeUpdate[];

  /**
   * @public
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType;
}

/**
 * @public
 */
export interface UpdateFacetResponse {}

/**
 * @public
 */
export interface UpdateLinkAttributesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * @public
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateLinkAttributesResponse {}

/**
 * @public
 */
export interface UpdateObjectAttributesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * @public
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateObjectAttributesResponse {
  /**
   * @public
   * <p>The <code>ObjectIdentifier</code> of the updated object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * @public
 */
export interface UpdateSchemaRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * @public
   * <p>The ARN that is associated with the updated schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

/**
 * @public
 * <p>A typed link facet attribute update.</p>
 */
export interface TypedLinkFacetAttributeUpdate {
  /**
   * @public
   * <p>The attribute to update.</p>
   */
  Attribute: TypedLinkAttributeDefinition | undefined;

  /**
   * @public
   * <p>The action to perform when updating the attribute.</p>
   */
  Action: UpdateActionType | undefined;
}

/**
 * @public
 */
export interface UpdateTypedLinkFacetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * @public
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: TypedLinkFacetAttributeUpdate[] | undefined;

  /**
   * @public
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet.  When
   *       providing ranges to a typed link selection, any inexact ranges must be specified at the end.
   *       Any attributes that do not have a range specified are presumed to match the entire range.
   *       Filters are interpreted in the order of the attributes on the typed link facet, not the order
   *       in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateTypedLinkFacetResponse {}

/**
 * @public
 * <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
 */
export class IncompatibleSchemaException extends __BaseException {
  readonly name: "IncompatibleSchemaException" = "IncompatibleSchemaException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleSchemaException, __BaseException>) {
    super({
      name: "IncompatibleSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleSchemaException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpgradeAppliedSchemaRequest {
  /**
   * @public
   * <p>The revision of the published schema to upgrade the directory to.</p>
   */
  PublishedSchemaArn: string | undefined;

  /**
   * @public
   * <p>The ARN for the directory to which the upgraded schema will be applied.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * @public
   * <p>Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface UpgradeAppliedSchemaResponse {
  /**
   * @public
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;

  /**
   * @public
   * <p>The ARN of the directory that is returned as part of the response.</p>
   */
  DirectoryArn?: string;
}

/**
 * @public
 */
export interface UpgradePublishedSchemaRequest {
  /**
   * @public
   * <p>The ARN of the development schema with the changes used for the upgrade.</p>
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the published schema to be upgraded.</p>
   */
  PublishedSchemaArn: string | undefined;

  /**
   * @public
   * <p>Identifies the minor version of the published schema that will be created. This parameter is NOT optional.</p>
   */
  MinorVersion: string | undefined;

  /**
   * @public
   * <p>Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.</p>
   */
  DryRun?: boolean;
}

/**
 * @public
 */
export interface UpgradePublishedSchemaResponse {
  /**
   * @public
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;
}
