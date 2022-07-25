// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CloudDirectoryServiceException as __BaseException } from "./CloudDirectoryServiceException";

/**
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
 * <p>A unique identifier for an attribute.</p>
 */
export interface AttributeKey {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema that contains the facet and
   *       attribute.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet that the attribute exists within.</p>
   */
  FacetName: string | undefined;

  /**
   * <p>The name of the attribute.</p>
   */
  Name: string | undefined;
}

/**
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

export namespace TypedAttributeValue {
  /**
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
 * <p>The combination of an attribute key and an attribute value.</p>
 */
export interface AttributeKeyAndValue {
  /**
   * <p>The key of the attribute.</p>
   */
  Key: AttributeKey | undefined;

  /**
   * <p>The value of the attribute.</p>
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * <p>The reference that identifies an object.</p>
 */
export interface ObjectReference {
  /**
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
 * <p>A facet.</p>
 */
export interface SchemaFacet {
  /**
   * <p>The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions.
   *      If this value is set, FacetName must also be set.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the facet. If this value is set, SchemaArn must also be set.</p>
   */
  FacetName?: string;
}

export interface AddFacetToObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>Attributes on the facet that you are adding to the object.</p>
   */
  ObjectAttributeList?: AttributeKeyAndValue[];

  /**
   * <p>A reference to the object you are adding the specified facet to.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export interface AddFacetToObjectResponse {}

/**
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

export interface ApplySchemaRequest {
  /**
   * <p>Published schema Amazon Resource Name (ARN) that needs to be copied. For more
   *       information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       into which the schema is copied. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;
}

export interface ApplySchemaResponse {
  /**
   * <p>The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on
   *       this directory. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn?: string;

  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn?: string;
}

/**
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

export interface AttachObjectRequest {
  /**
   * <p>Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The child object reference to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;

  /**
   * <p>The link name with which the child object is attached to the parent.</p>
   */
  LinkName: string | undefined;
}

export interface AttachObjectResponse {
  /**
   * <p>The attached <code>ObjectIdentifier</code>, which is the child
   *         <code>ObjectIdentifier</code>.</p>
   */
  AttachedObjectIdentifier?: string;
}

/**
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

export interface AttachPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The reference that identifies the object to which the policy will be
   *       attached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export interface AttachPolicyResponse {}

/**
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

export interface AttachToIndexRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where the object and index
   *       exist.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export interface AttachToIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}

/**
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
 * <p>Identifies the attribute name and value for a typed link.</p>
 */
export interface AttributeNameAndValue {
  /**
   * <p>The attribute name of the typed link.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The value for the typed link.</p>
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * <p>Identifies the schema Amazon Resource Name (ARN) and facet name for the typed
 *       link.</p>
 */
export interface TypedLinkSchemaAndFacetName {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  TypedLinkName: string | undefined;
}

export interface AttachTypedLinkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to attach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * <p>Contains all the information that is used to uniquely identify a typed link. The
 *       parameters discussed in this topic are used to uniquely specify the typed link being operated
 *       on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API
 *       operations provide typed link specifiers as output. You can also construct a typed link
 *       specifier from scratch.</p>
 */
export interface TypedLinkSpecifier {
  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the attribute value to update.</p>
   */
  IdentityAttributeValues: AttributeNameAndValue[] | undefined;
}

export interface AttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}

export enum ConsistencyLevel {
  EVENTUAL = "EVENTUAL",
  SERIALIZABLE = "SERIALIZABLE",
}

/**
 * <p>Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}

/**
 * <p>Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectAttributes {
  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}

/**
 * <p>Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchGetObjectInformation {
  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListAttachedIndices {
  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export enum RangeMode {
  EXCLUSIVE = "EXCLUSIVE",
  FIRST = "FIRST",
  INCLUSIVE = "INCLUSIVE",
  LAST = "LAST",
  LAST_BEFORE_MISSING_VALUES = "LAST_BEFORE_MISSING_VALUES",
}

/**
 * <p>A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.</p>
 */
export interface TypedAttributeValueRange {
  /**
   * <p>The inclusive or exclusive range start.</p>
   */
  StartMode: RangeMode | string | undefined;

  /**
   * <p>The value to start the range at.</p>
   */
  StartValue?: TypedAttributeValue;

  /**
   * <p>The inclusive or exclusive range end.</p>
   */
  EndMode: RangeMode | string | undefined;

  /**
   * <p>The attribute value to terminate the range at.</p>
   */
  EndValue?: TypedAttributeValue;
}

/**
 * <p>Identifies the range of attributes that are used by a specified filter.</p>
 */
export interface TypedLinkAttributeRange {
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The range of attribute values that are being selected.</p>
   */
  Range: TypedAttributeValueRange | undefined;
}

/**
 * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIncomingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *        order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * <p>A range of attributes.</p>
 */
export interface ObjectAttributeRange {
  /**
   * <p>The key of the attribute that the attribute range covers.</p>
   */
  AttributeKey?: AttributeKey;

  /**
   * <p>The range of attribute values being selected.</p>
   */
  Range?: TypedAttributeValueRange;
}

/**
 * <p>Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListIndex {
  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: ObjectAttributeRange[];

  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> operation.</p>
 */
export interface BatchListObjectAttributes {
  /**
   * <p>Reference of the object whose attributes need to be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;
}

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> operation.</p>
 */
export interface BatchListObjectChildren {
  /**
   * <p>Reference of the object for which child objects are being listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of items to be retrieved in a single call. This is an approximate
   *        number.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectParentPaths {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Lists parent objects that are associated with a given object in pagination
 *       fashion.</p>
 */
export interface BatchListObjectParents {
  /**
   * <p>The reference that identifies an object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListObjectPolicies {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListOutgoingTypedLinks {
  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *        selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *        range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *        not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchListPolicyAttachments {
  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchLookupPolicy {
  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Represents the output of a <code>BatchRead</code> operation.</p>
 */
export interface BatchReadOperation {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributes;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildren;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndices;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPaths;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformation;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributes;

  /**
   * <p>Lists parent objects that are associated with a given object in pagination
   *       fashion.</p>
   */
  ListObjectParents?: BatchListObjectParents;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPolicies;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachments;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicy;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndex;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks;

  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributes;
}

export interface BatchReadRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: BatchReadOperation[] | undefined;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export enum BatchReadExceptionType {
  AccessDeniedException = "AccessDeniedException",
  CannotListParentOfRootException = "CannotListParentOfRootException",
  DirectoryNotEnabledException = "DirectoryNotEnabledException",
  FacetValidationException = "FacetValidationException",
  InternalServiceException = "InternalServiceException",
  InvalidArnException = "InvalidArnException",
  InvalidNextTokenException = "InvalidNextTokenException",
  LimitExceededException = "LimitExceededException",
  NotIndexException = "NotIndexException",
  NotNodeException = "NotNodeException",
  NotPolicyException = "NotPolicyException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ValidationException = "ValidationException",
}

/**
 * <p>The batch read exception structure, which contains the exception type and
 *       message.</p>
 */
export interface BatchReadException {
  /**
   * <p>A type of exception, such as <code>InvalidArnException</code>.</p>
   */
  Type?: BatchReadExceptionType | string;

  /**
   * <p>An exception message that is associated with the failure.</p>
   */
  Message?: string;
}

/**
 * <p>Represents the output of a <a>GetLinkAttributes</a> response operation.</p>
 */
export interface BatchGetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

/**
 * <p>Represents the output of a <a>GetObjectAttributes</a> response operation.</p>
 */
export interface BatchGetObjectAttributesResponse {
  /**
   * <p>The attribute values that are associated with an object.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

/**
 * <p>Represents the output of a <a>GetObjectInformation</a> response operation.</p>
 */
export interface BatchGetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object.</p>
   */
  SchemaFacets?: SchemaFacet[];

  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * <p>Represents an index and an attached object.</p>
 */
export interface IndexAttachment {
  /**
   * <p>The indexed attribute values.</p>
   */
  IndexedAttributes?: AttributeKeyAndValue[];

  /**
   * <p>In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <a>ListAttachedIndices</a> response operation.</p>
 */
export interface BatchListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListIncomingTypedLinks</a> response operation.</p>
 */
export interface BatchListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListIndex</a> response operation.</p>
 */
export interface BatchListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListObjectAttributes</a> response operation.</p>
 */
export interface BatchListObjectAttributesResponse {
  /**
   * <p>The attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key; attribute value is the value.</p>
   */
  Attributes?: AttributeKeyAndValue[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListObjectChildren</a> response operation.</p>
 */
export interface BatchListObjectChildrenResponse {
  /**
   * <p>The children structure, which is a map with the key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: Record<string, string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Returns the path to the <code>ObjectIdentifiers</code> that is associated with the
 *       directory.</p>
 */
export interface PathToObjectIdentifiers {
  /**
   * <p>The path that is used to identify the object starting from directory root.</p>
   */
  Path?: string;

  /**
   * <p>Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the
   *       request.</p>
   */
  ObjectIdentifiers?: string[];
}

/**
 * <p>Represents the output of a <a>ListObjectParentPaths</a> response operation.</p>
 */
export interface BatchListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *        directory.</p>
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>A pair of ObjectIdentifier and LinkName.</p>
 */
export interface ObjectIdentifierAndLinkNameTuple {
  /**
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;

  /**
   * <p>The name of the link between the parent and the child object.</p>
   */
  LinkName?: string;
}

/**
 * <p>Represents the output of a <a>ListObjectParents</a> response operation.</p>
 */
export interface BatchListObjectParentsResponse {
  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListObjectPolicies</a> response operation.</p>
 */
export interface BatchListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *        object.</p>
   */
  AttachedPolicyIds?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.</p>
 */
export interface BatchListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <a>ListPolicyAttachments</a> response operation.</p>
 */
export interface BatchListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is
 *       attached. For more
 *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
 */
export interface PolicyAttachment {
  /**
   * <p>The ID of <code>PolicyAttachment</code>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The <code>ObjectIdentifier</code> that is associated with
   *       <code>PolicyAttachment</code>.</p>
   */
  ObjectIdentifier?: string;

  /**
   * <p>The type of policy that can be associated with <code>PolicyAttachment</code>.</p>
   */
  PolicyType?: string;
}

/**
 * <p>Used when a regular object exists in a <a>Directory</a> and you want to find
 *       all of the policies that are associated with that object and the parent to that
 *       object.</p>
 */
export interface PolicyToPath {
  /**
   * <p>The path that is referenced from the root.</p>
   */
  Path?: string;

  /**
   * <p>List of policy objects.</p>
   */
  Policies?: PolicyAttachment[];
}

/**
 * <p>Represents the output of a <a>LookupPolicy</a> response operation.</p>
 */
export interface BatchLookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *        <code>PolicyType</code>. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: PolicyToPath[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the output of a <code>BatchRead</code> success response operation.</p>
 */
export interface BatchReadSuccessfulResponse {
  /**
   * <p>Lists all attributes that are associated with an object.</p>
   */
  ListObjectAttributes?: BatchListObjectAttributesResponse;

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  ListObjectChildren?: BatchListObjectChildrenResponse;

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  GetObjectInformation?: BatchGetObjectInformationResponse;

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  GetObjectAttributes?: BatchGetObjectAttributesResponse;

  /**
   * <p>Lists indices attached to an object.</p>
   */
  ListAttachedIndices?: BatchListAttachedIndicesResponse;

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *        policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   */
  ListObjectParentPaths?: BatchListObjectParentPathsResponse;

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  ListObjectPolicies?: BatchListObjectPoliciesResponse;

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse;

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *        specified. If there are no policies present, an empty list is returned. If policies are
   *        present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *        for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *        <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *        information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  LookupPolicy?: BatchLookupPolicyResponse;

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  ListIndex?: BatchListIndexResponse;

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *        information for an object. It also supports filtering by typed link facet and identity
   *        attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

  /**
   * <p>The list of attributes to retrieve from the typed link.</p>
   */
  GetLinkAttributes?: BatchGetLinkAttributesResponse;

  /**
   * <p>The list of parent objects to retrieve.</p>
   */
  ListObjectParents?: BatchListObjectParentsResponse;
}

/**
 * <p>Represents the output of a <code>BatchRead</code> response operation.</p>
 */
export interface BatchReadOperationResponse {
  /**
   * <p>Identifies which operation in a batch has succeeded.</p>
   */
  SuccessfulResponse?: BatchReadSuccessfulResponse;

  /**
   * <p>Identifies which operation in a batch has failed.</p>
   */
  ExceptionResponse?: BatchReadException;
}

export interface BatchReadResponse {
  /**
   * <p>A list of all the responses for each batch read.</p>
   */
  Responses?: BatchReadOperationResponse[];
}

export enum BatchWriteExceptionType {
  AccessDeniedException = "AccessDeniedException",
  DirectoryNotEnabledException = "DirectoryNotEnabledException",
  FacetValidationException = "FacetValidationException",
  IndexedAttributeMissingException = "IndexedAttributeMissingException",
  InternalServiceException = "InternalServiceException",
  InvalidArnException = "InvalidArnException",
  InvalidAttachmentException = "InvalidAttachmentException",
  LimitExceededException = "LimitExceededException",
  LinkNameAlreadyInUseException = "LinkNameAlreadyInUseException",
  NotIndexException = "NotIndexException",
  NotNodeException = "NotNodeException",
  NotPolicyException = "NotPolicyException",
  ObjectAlreadyDetachedException = "ObjectAlreadyDetachedException",
  ObjectNotDetachedException = "ObjectNotDetachedException",
  ResourceNotFoundException = "ResourceNotFoundException",
  StillContainsLinksException = "StillContainsLinksException",
  UnsupportedIndexTypeException = "UnsupportedIndexTypeException",
  ValidationException = "ValidationException",
}

/**
 * <p>A <code>BatchWrite</code> exception has occurred.</p>
 */
export class BatchWriteException extends __BaseException {
  readonly name: "BatchWriteException" = "BatchWriteException";
  readonly $fault: "client" = "client";
  Index?: number;
  Type?: BatchWriteExceptionType | string;
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
 * <p>Represents the output of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObject {
  /**
   * <p>Represents the facet being added to the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>The attributes to set on the object.</p>
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * <p>A reference to the object being mutated.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Represents the output of an <a>AttachObject</a> operation.</p>
 */
export interface BatchAttachObject {
  /**
   * <p>The parent object reference.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The child object reference that is to be attached to the object.</p>
   */
  ChildReference: ObjectReference | undefined;

  /**
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;
}

/**
 * <p>Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachPolicy {
  /**
   * <p>The reference that is associated with the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The reference that identifies the object to which the policy will be
   *        attached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachToIndex {
  /**
   * <p>A reference to the index that you are attaching the object to.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object that you are attaching to the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * <p>Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchAttachTypedLink {
  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * <p>Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchCreateIndex {
  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *        is supported.</p>
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *        not.</p>
   */
  IsUnique: boolean | undefined;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

/**
 * <p>Represents the output of a <a>CreateObject</a> operation.</p>
 */
export interface BatchCreateObject {
  /**
   * <p>A list of <code>FacetArns</code> that will be associated with the object. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaFacet: SchemaFacet[] | undefined;

  /**
   * <p>An attribute map, which contains an attribute ARN as the key and attribute value as
   *       the map value.</p>
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

/**
 * <p>Represents the output of a <a>DeleteObject</a> operation.</p>
 */
export interface BatchDeleteObject {
  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachFromIndex {
  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * <p>Represents the output of a <a>DetachObject</a> operation.</p>
 */
export interface BatchDetachObject {
  /**
   * <p>Parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The name of the link.</p>
   */
  LinkName: string | undefined;

  /**
   * <p>The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.</p>
   */
  BatchReferenceName?: string;
}

/**
 * <p>Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.</p>
 */
export interface BatchDetachPolicy {
  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * <p>Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchDetachTypedLink {
  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * <p>A batch operation to remove a facet from an object.</p>
 */
export interface BatchRemoveFacetFromObject {
  /**
   * <p>The facet to remove from the object.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>A reference to the object whose facet will be removed.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export enum UpdateActionType {
  CREATE_OR_UPDATE = "CREATE_OR_UPDATE",
  DELETE = "DELETE",
}

/**
 * <p>The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.</p>
 */
export interface LinkAttributeAction {
  /**
   * <p>A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.</p>
   */
  AttributeActionType?: UpdateActionType | string;

  /**
   * <p>The value that you want to update to.</p>
   */
  AttributeUpdateValue?: TypedAttributeValue;
}

/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface LinkAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  AttributeKey?: AttributeKey;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  AttributeAction?: LinkAttributeAction;
}

/**
 * <p>Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.</p>
 */
export interface BatchUpdateLinkAttributes {
  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

/**
 * <p>The action to take on the object attribute.</p>
 */
export interface ObjectAttributeAction {
  /**
   * <p>A type that can be either <code>Update</code> or <code>Delete</code>.</p>
   */
  ObjectAttributeActionType?: UpdateActionType | string;

  /**
   * <p>The value that you want to update to.</p>
   */
  ObjectAttributeUpdateValue?: TypedAttributeValue;
}

/**
 * <p>Structure that contains attribute update information.</p>
 */
export interface ObjectAttributeUpdate {
  /**
   * <p>The key of the attribute being updated.</p>
   */
  ObjectAttributeKey?: AttributeKey;

  /**
   * <p>The action to perform as part of the attribute update.</p>
   */
  ObjectAttributeAction?: ObjectAttributeAction;
}

/**
 * <p>Represents the output of a <code>BatchUpdate</code> operation. </p>
 */
export interface BatchUpdateObjectAttributes {
  /**
   * <p>Reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * <p>Represents the output of a <code>BatchWrite</code> operation. </p>
 */
export interface BatchWriteOperation {
  /**
   * <p>Creates an object.</p>
   */
  CreateObject?: BatchCreateObject;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObject;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObject;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributes;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObject;

  /**
   * <p>A batch operation that adds a facet to an object.</p>
   */
  AddFacetToObject?: BatchAddFacetToObject;

  /**
   * <p>A batch operation that removes a facet from an object.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObject;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicy;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicy;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndex;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndex;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndex;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLink;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLink;

  /**
   * <p>Updates a given object's attributes.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributes;
}

export interface BatchWriteRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of operations that are part of the batch.</p>
   */
  Operations: BatchWriteOperation[] | undefined;
}

/**
 * <p>The result of a batch add facet to object operation.</p>
 */
export interface BatchAddFacetToObjectResponse {}

/**
 * <p>Represents the output batch <a>AttachObject</a> response operation.</p>
 */
export interface BatchAttachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that has been attached.</p>
   */
  attachedObjectIdentifier?: string;
}

/**
 * <p>Represents the output of an <a>AttachPolicy</a> response
 *       operation.</p>
 */
export interface BatchAttachPolicyResponse {}

/**
 * <p>Represents the output of a <a>AttachToIndex</a> response operation.</p>
 */
export interface BatchAttachToIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was attached to the index.</p>
   */
  AttachedObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <a>AttachTypedLink</a> response operation.</p>
 */
export interface BatchAttachTypedLinkResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifier?: TypedLinkSpecifier;
}

/**
 * <p>Represents the output of a <a>CreateIndex</a> response operation.</p>
 */
export interface BatchCreateIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <a>CreateObject</a> response operation.</p>
 */
export interface BatchCreateObjectResponse {
  /**
   * <p>The ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <a>DeleteObject</a> response operation.</p>
 */
export interface BatchDeleteObjectResponse {}

/**
 * <p>Represents the output of a <a>DetachFromIndex</a> response operation.</p>
 */
export interface BatchDetachFromIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <a>DetachObject</a> response operation.</p>
 */
export interface BatchDetachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the detached object.</p>
   */
  detachedObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <a>DetachPolicy</a> response operation.</p>
 */
export interface BatchDetachPolicyResponse {}

/**
 * <p>Represents the output of a <a>DetachTypedLink</a> response operation.</p>
 */
export interface BatchDetachTypedLinkResponse {}

/**
 * <p>An empty result that represents success.</p>
 */
export interface BatchRemoveFacetFromObjectResponse {}

/**
 * <p>Represents the output of a <a>UpdateLinkAttributes</a> response operation.</p>
 */
export interface BatchUpdateLinkAttributesResponse {}

/**
 * <p>Represents the output of a <code>BatchUpdate</code> response operation.</p>
 */
export interface BatchUpdateObjectAttributesResponse {
  /**
   * <p>ID that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

/**
 * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
 */
export interface BatchWriteOperationResponse {
  /**
   * <p>Creates an object in a <a>Directory</a>.</p>
   */
  CreateObject?: BatchCreateObjectResponse;

  /**
   * <p>Attaches an object to a <a>Directory</a>.</p>
   */
  AttachObject?: BatchAttachObjectResponse;

  /**
   * <p>Detaches an object from a <a>Directory</a>.</p>
   */
  DetachObject?: BatchDetachObjectResponse;

  /**
   * <p>Updates a given object’s attributes.</p>
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse;

  /**
   * <p>Deletes an object in a <a>Directory</a>.</p>
   */
  DeleteObject?: BatchDeleteObjectResponse;

  /**
   * <p>The result of an add facet to object batch operation.</p>
   */
  AddFacetToObject?: BatchAddFacetToObjectResponse;

  /**
   * <p>The result of a batch remove facet from object operation.</p>
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse;

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *        policies.</p>
   */
  AttachPolicy?: BatchAttachPolicyResponse;

  /**
   * <p>Detaches a policy from a <a>Directory</a>.</p>
   */
  DetachPolicy?: BatchDetachPolicyResponse;

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.</p>
   */
  CreateIndex?: BatchCreateIndexResponse;

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  AttachToIndex?: BatchAttachToIndexResponse;

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  DetachFromIndex?: BatchDetachFromIndexResponse;

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  AttachTypedLink?: BatchAttachTypedLinkResponse;

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DetachTypedLink?: BatchDetachTypedLinkResponse;

  /**
   * <p>Represents the output of a <code>BatchWrite</code> response operation.</p>
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse;
}

export interface BatchWriteResponse {
  /**
   * <p>A list of all the responses for each batch write.</p>
   */
  Responses?: BatchWriteOperationResponse[];
}

export interface CreateDirectoryRequest {
  /**
   * <p>The name of the <a>Directory</a>. Should be unique per account, per
   *       region.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the published schema that will be copied into the
   *       data <a>Directory</a>. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export interface CreateDirectoryResponse {
  /**
   * <p>The ARN that is associated with the <a>Directory</a>. For more information,
   *       see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The name of the <a>Directory</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The root object node of the created directory.</p>
   */
  ObjectIdentifier: string | undefined;

  /**
   * <p>The ARN of the published schema in the <a>Directory</a>. Once a published
   *       schema is copied into the directory, it has its own ARN, which is referred to applied schema
   *       ARN. For more information, see <a>arns</a>.</p>
   */
  AppliedSchemaArn: string | undefined;
}

/**
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

export enum RuleType {
  BINARY_LENGTH = "BINARY_LENGTH",
  NUMBER_COMPARISON = "NUMBER_COMPARISON",
  STRING_FROM_SET = "STRING_FROM_SET",
  STRING_LENGTH = "STRING_LENGTH",
}

/**
 * <p>Contains an Amazon Resource Name (ARN) and parameters that are associated with the
 *       rule.</p>
 */
export interface Rule {
  /**
   * <p>The type of attribute validation rule.</p>
   */
  Type?: RuleType | string;

  /**
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   */
  Parameters?: Record<string, string>;
}

export enum FacetAttributeType {
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  DATETIME = "DATETIME",
  NUMBER = "NUMBER",
  STRING = "STRING",
  VARIANT = "VARIANT",
}

/**
 * <p>A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
 */
export interface FacetAttributeDefinition {
  /**
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | string | undefined;

  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * <p>Validation rules attached to the attribute definition.</p>
   */
  Rules?: Record<string, Rule>;
}

/**
 * <p>The facet attribute reference that specifies the attribute definition that contains the
 *       attribute facet name and attribute name.</p>
 */
export interface FacetAttributeReference {
  /**
   * <p>The target facet name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetFacetName: string | undefined;

  /**
   * <p>The target attribute name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  TargetAttributeName: string | undefined;
}

export enum RequiredAttributeBehavior {
  NOT_REQUIRED = "NOT_REQUIRED",
  REQUIRED_ALWAYS = "REQUIRED_ALWAYS",
}

/**
 * <p>An attribute that is associated with the <a>Facet</a>.</p>
 */
export interface FacetAttribute {
  /**
   * <p>The name of the facet attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>A facet attribute consists of either a definition or a reference. This structure
   *       contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeDefinition?: FacetAttributeDefinition;

  /**
   * <p>An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.</p>
   */
  AttributeReference?: FacetAttributeReference;

  /**
   * <p>The required behavior of the <code>FacetAttribute</code>.</p>
   */
  RequiredBehavior?: RequiredAttributeBehavior | string;
}

export enum FacetStyle {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC",
}

export enum ObjectType {
  INDEX = "INDEX",
  LEAF_NODE = "LEAF_NODE",
  NODE = "NODE",
  POLICY = "POLICY",
}

export interface CreateFacetRequest {
  /**
   * <p>The schema ARN in which the new <a>Facet</a> will be created. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the <a>Facet</a>, which is unique for a given schema.</p>
   */
  Name: string | undefined;

  /**
   * <p>The attributes that are associated with the <a>Facet</a>.</p>
   */
  Attributes?: FacetAttribute[];

  /**
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
  ObjectType?: ObjectType | string;

  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle | string;
}

export interface CreateFacetResponse {}

/**
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

export interface CreateIndexRequest {
  /**
   * <p>The ARN of the directory where the index should be created.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute
   *       is supported.</p>
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or
   *       not.</p>
   */
  IsUnique: boolean | undefined;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
   */
  LinkName?: string;
}

export interface CreateIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the index created by this operation.</p>
   */
  ObjectIdentifier?: string;
}

/**
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

export interface CreateObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       in which the object will be created. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacets: SchemaFacet[] | undefined;

  /**
   * <p>The attribute map whose attribute ARN contains the key and attribute value as the map
   *       value.</p>
   */
  ObjectAttributeList?: AttributeKeyAndValue[];

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: ObjectReference;

  /**
   * <p>The name of link that is used to attach this object to a parent.</p>
   */
  LinkName?: string;
}

export interface CreateObjectResponse {
  /**
   * <p>The identifier that is associated with the object.</p>
   */
  ObjectIdentifier?: string;
}

export interface CreateSchemaRequest {
  /**
   * <p>The name that is associated with the schema. This is unique to each account and in each
   *       region.</p>
   */
  Name: string | undefined;
}

export interface CreateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

/**
 * <p>A typed link attribute definition.</p>
 */
export interface TypedLinkAttributeDefinition {
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the attribute.</p>
   */
  Type: FacetAttributeType | string | undefined;

  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: TypedAttributeValue;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * <p>Validation rules that are attached to the attribute definition.</p>
   */
  Rules?: Record<string, Rule>;

  /**
   * <p>The required behavior of the <code>TypedLinkAttributeDefinition</code>.</p>
   */
  RequiredBehavior: RequiredAttributeBehavior | string | undefined;
}

/**
 * <p>Defines the typed links structure and its attributes. To create a typed link facet, use
 *       the <a>CreateTypedLinkFacet</a> API.</p>
 */
export interface TypedLinkFacet {
  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.</p>
   */
  Attributes: TypedLinkAttributeDefinition[] | undefined;

  /**
   * <p>The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.</p>
   */
  IdentityAttributeOrder: string[] | undefined;
}

export interface CreateTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>
   *             <a>Facet</a> structure that is associated with the typed link
   *       facet.</p>
   */
  Facet: TypedLinkFacet | undefined;
}

export interface CreateTypedLinkFacetResponse {}

export interface DeleteDirectoryRequest {
  /**
   * <p>The ARN of the directory to delete.</p>
   */
  DirectoryArn: string | undefined;
}

export interface DeleteDirectoryResponse {
  /**
   * <p>The ARN of the deleted directory.</p>
   */
  DirectoryArn: string | undefined;
}

/**
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

export interface DeleteFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteFacetResponse {}

/**
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

export interface DeleteObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export interface DeleteObjectResponse {}

/**
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

export interface DeleteSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;
}

export interface DeleteSchemaResponse {
  /**
   * <p>The input ARN that is returned as part of the response. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

/**
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

export interface DeleteTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}

export interface DeleteTypedLinkFacetResponse {}

export interface DetachFromIndexRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory the index and object exist
   *       in.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the index object.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>A reference to the object being detached from the index.</p>
   */
  TargetReference: ObjectReference | undefined;
}

export interface DetachFromIndexResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the object that was detached from the index.</p>
   */
  DetachedObjectIdentifier?: string;
}

/**
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

export interface DetachObjectRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The parent reference from which the object with the specified link name is
   *       detached.</p>
   */
  ParentReference: ObjectReference | undefined;

  /**
   * <p>The link name associated with the object that needs to be detached.</p>
   */
  LinkName: string | undefined;
}

export interface DetachObjectResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> that was detached from the object.</p>
   */
  DetachedObjectIdentifier?: string;
}

/**
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

export interface DetachPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where both objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>Reference that identifies the object whose policy object will be detached.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export interface DetachPolicyResponse {}

export interface DetachTypedLinkRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to detach the typed
   *       link.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used to accept a typed link specifier as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

export interface DisableDirectoryRequest {
  /**
   * <p>The ARN of the directory to disable.</p>
   */
  DirectoryArn: string | undefined;
}

export interface DisableDirectoryResponse {
  /**
   * <p>The ARN of the directory that has been disabled.</p>
   */
  DirectoryArn: string | undefined;
}

export interface EnableDirectoryRequest {
  /**
   * <p>The ARN of the directory to enable.</p>
   */
  DirectoryArn: string | undefined;
}

export interface EnableDirectoryResponse {
  /**
   * <p>The ARN of the enabled directory.</p>
   */
  DirectoryArn: string | undefined;
}

export interface GetAppliedSchemaVersionRequest {
  /**
   * <p>The ARN of the applied schema.</p>
   */
  SchemaArn: string | undefined;
}

export interface GetAppliedSchemaVersionResponse {
  /**
   * <p>Current applied schema ARN, including the minor version in use if one was provided.</p>
   */
  AppliedSchemaArn?: string;
}

export interface GetDirectoryRequest {
  /**
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;
}

export enum DirectoryState {
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Directory structure that includes the directory name and directory ARN.</p>
 */
export interface Directory {
  /**
   * <p>The name of the directory.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the directory. For more
   *       information, see <a>arns</a>.</p>
   */
  DirectoryArn?: string;

  /**
   * <p>The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.</p>
   */
  State?: DirectoryState | string;

  /**
   * <p>The date and time when the directory was created.</p>
   */
  CreationDateTime?: Date;
}

export interface GetDirectoryResponse {
  /**
   * <p>Metadata about the directory.</p>
   */
  Directory: Directory | undefined;
}

export interface GetFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * <p>A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code>
 *                <a>Rule</a>s</code>, and
 *       <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.</p>
 */
export interface Facet {
  /**
   * <p>The name of the <a>Facet</a>.</p>
   */
  Name?: string;

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType | string;

  /**
   * <p>There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.</p>
   */
  FacetStyle?: FacetStyle | string;
}

export interface GetFacetResponse {
  /**
   * <p>The <a>Facet</a> structure that is associated with the facet.</p>
   */
  Facet?: Facet;
}

export interface GetLinkAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>A list of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The consistency level at which to retrieve the attributes on a typed link.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface GetLinkAttributesResponse {
  /**
   * <p>The attributes that are associated with the typed link.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

export interface GetObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The consistency level at which to retrieve the attributes on an object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: string[] | undefined;
}

export interface GetObjectAttributesResponse {
  /**
   * <p>The attributes that are associated with the object.</p>
   */
  Attributes?: AttributeKeyAndValue[];
}

export interface GetObjectInformationRequest {
  /**
   * <p>The ARN of the directory being retrieved.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The consistency level at which to retrieve the object information.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface GetObjectInformationResponse {
  /**
   * <p>The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.</p>
   */
  SchemaFacets?: SchemaFacet[];

  /**
   * <p>The <code>ObjectIdentifier</code> of the specified object.</p>
   */
  ObjectIdentifier?: string;
}

export interface GetSchemaAsJsonRequest {
  /**
   * <p>The ARN of the schema to retrieve.</p>
   */
  SchemaArn: string | undefined;
}

export interface GetSchemaAsJsonResponse {
  /**
   * <p>The name of the retrieved schema.</p>
   */
  Name?: string;

  /**
   * <p>The JSON representation of the schema document.</p>
   */
  Document?: string;
}

export interface GetTypedLinkFacetInformationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;
}

export interface GetTypedLinkFacetInformationResponse {
  /**
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

export interface ListAppliedSchemaArnsRequest {
  /**
   * <p>The ARN of the directory you are listing.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListAppliedSchemaArnsResponse {
  /**
   * <p>The ARNs of schemas that are applied to the directory.</p>
   */
  SchemaArns?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListAttachedIndicesRequest {
  /**
   * <p>The ARN of the directory.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference to the object that has indices attached.</p>
   */
  TargetReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The consistency level to use for this operation.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListAttachedIndicesResponse {
  /**
   * <p>The indices attached to the specified object.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListDevelopmentSchemaArnsRequest {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListDevelopmentSchemaArnsResponse {
  /**
   * <p>The ARNs of retrieved development schemas.</p>
   */
  SchemaArns?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListDirectoriesRequest {
  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The state of the directories in the list. Can be either Enabled, Disabled, or
   *       Deleted.</p>
   */
  state?: DirectoryState | string;
}

export interface ListDirectoriesResponse {
  /**
   * <p>Lists all directories that are associated with your account in pagination
   *       fashion.</p>
   */
  Directories: Directory[] | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListFacetAttributesRequest {
  /**
   * <p>The ARN of the schema where the facet resides.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet whose attributes will be retrieved.</p>
   */
  Name: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListFacetAttributesResponse {
  /**
   * <p>The attributes attached to the facet.</p>
   */
  Attributes?: FacetAttribute[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListFacetNamesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to retrieve facet names from.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListFacetNamesResponse {
  /**
   * <p>The names of facets that exist within the schema.</p>
   */
  FacetNames?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListIncomingTypedLinksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * <p>Filters are interpreted in the order of the attributes on the typed link facet, not the
   *       order in which they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListIncomingTypedLinksResponse {
  /**
   * <p>Returns one or more typed link specifiers as output.</p>
   */
  LinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListIndexRequest {
  /**
   * <p>The ARN of the directory that the index exists in.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Specifies the ranges of indexed values that you want to query.</p>
   */
  RangesOnIndexedValues?: ObjectAttributeRange[];

  /**
   * <p>The reference to the index to list.</p>
   */
  IndexReference: ObjectReference | undefined;

  /**
   * <p>The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListIndexResponse {
  /**
   * <p>The objects and indexed values attached to the index.</p>
   */
  IndexAttachments?: IndexAttachment[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListManagedSchemaArnsRequest {
  /**
   * <p>The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListManagedSchemaArnsResponse {
  /**
   * <p>The ARNs for all AWS managed schemas.</p>
   */
  SchemaArns?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>Used to filter the list of object attributes that are associated with a certain
   *       facet.</p>
   */
  FacetFilter?: SchemaFacet;
}

export interface ListObjectAttributesResponse {
  /**
   * <p>Attributes map that is associated with the object. <code>AttributeArn</code> is the
   *       key, and attribute value is the value.</p>
   */
  Attributes?: AttributeKeyAndValue[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListObjectChildrenRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object for which child objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListObjectChildrenResponse {
  /**
   * <p>Children structure, which is a map with key as the <code>LinkName</code> and
   *         <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: Record<string, string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListObjectParentPathsRequest {
  /**
   * <p>The ARN of the directory to which the parent path applies.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object whose parent paths are listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}

export interface ListObjectParentPathsResponse {
  /**
   * <p>Returns the path to the <code>ObjectIdentifiers</code> that are associated with the
   *       directory.</p>
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
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

export interface ListObjectParentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object for which parent objects are being
   *       listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;

  /**
   * <p>When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.</p>
   */
  IncludeAllLinksToEachParent?: boolean;
}

export interface ListObjectParentsResponse {
  /**
   * <p>The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and
   *       LinkName as the value.</p>
   */
  Parents?: Record<string, string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of parent reference and LinkName Tuples.</p>
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[];
}

export interface ListObjectPoliciesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object for which policies will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListObjectPoliciesResponse {
  /**
   * <p>A list of policy <code>ObjectIdentifiers</code>, that are attached to the
   *       object.</p>
   */
  AttachedPolicyIds?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListOutgoingTypedLinksRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to list the typed
   *       links.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>A reference that identifies the object whose attributes will be listed.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>Provides range filters for multiple attributes. When providing ranges to typed link
   *       selection, any inexact ranges must be specified at the end. Any attributes that do not have a
   *       range specified are presumed to match the entire range.</p>
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * <p>Filters are interpreted in the order of the attributes defined on the typed link facet,
   *       not the order they are supplied to any API calls.</p>
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;

  /**
   * <p>The consistency level to execute the request at.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListOutgoingTypedLinksResponse {
  /**
   * <p>Returns a typed link specifier as output.</p>
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListPolicyAttachmentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where objects reside. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the policy object.</p>
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;

  /**
   * <p>Represents the manner and timing in which the successful write or update of an object
   *       is reflected in a subsequent read operation of that same object.</p>
   */
  ConsistencyLevel?: ConsistencyLevel | string;
}

export interface ListPolicyAttachmentsResponse {
  /**
   * <p>A list of <code>ObjectIdentifiers</code> to which the policy is attached.</p>
   */
  ObjectIdentifiers?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListPublishedSchemaArnsRequest {
  /**
   * <p>The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListPublishedSchemaArnsResponse {
  /**
   * <p>The ARNs of published schemas.</p>
   */
  SchemaArns?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

/**
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The pagination token. This is for future use. Currently pagination is not supported for
   *       tagging.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>MaxResults</code> parameter sets the maximum number of results returned in a
   *       single page. This is for future use and is not supported currently.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The tag structure that contains a tag key and value.</p>
 */
export interface Tag {
  /**
   * <p>The key that is associated with the tag.</p>
   */
  Key?: string;

  /**
   * <p>The value that is associated with the tag.</p>
   */
  Value?: string;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key value pairs that are associated with the response.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListTypedLinkFacetAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListTypedLinkFacetAttributesResponse {
  /**
   * <p>An ordered set of attributes associate with the typed link.</p>
   */
  Attributes?: TypedLinkAttributeDefinition[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface ListTypedLinkFacetNamesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to retrieve.</p>
   */
  MaxResults?: number;
}

export interface ListTypedLinkFacetNamesResponse {
  /**
   * <p>The names of typed link facets that exist within the schema.</p>
   */
  FacetNames?: string[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface LookupPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Reference that identifies the object whose policies will be looked up.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The token to request the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be retrieved in a single call. This is an approximate
   *       number.</p>
   */
  MaxResults?: number;
}

export interface LookupPolicyResponse {
  /**
   * <p>Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and
   *       <code>PolicyType</code>. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  PolicyToPathList?: PolicyToPath[];

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;
}

export interface PublishSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the development schema. For
   *       more information, see <a>arns</a>.</p>
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * <p>The major version under which the schema will be published. Schemas have both a major and minor version associated with them.</p>
   */
  Version: string | undefined;

  /**
   * <p>The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.</p>
   */
  MinorVersion?: string;

  /**
   * <p>The new name under which the schema will be published. If this is not provided, the
   *       development schema is considered.</p>
   */
  Name?: string;
}

export interface PublishSchemaResponse {
  /**
   * <p>The ARN that is associated with the published schema. For more information, see <a>arns</a>.</p>
   */
  PublishedSchemaArn?: string;
}

/**
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

export interface PutSchemaFromJsonRequest {
  /**
   * <p>The ARN of the schema to update.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The replacement JSON schema.</p>
   */
  Document: string | undefined;
}

export interface PutSchemaFromJsonResponse {
  /**
   * <p>The ARN of the schema to update.</p>
   */
  Arn?: string;
}

export interface RemoveFacetFromObjectRequest {
  /**
   * <p>The ARN of the directory in which the object resides.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The facet to remove. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * <p>A reference to the object to remove the facet from.</p>
   */
  ObjectReference: ObjectReference | undefined;
}

export interface RemoveFacetFromObjectResponse {}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. Tagging is only supported for
   *       directories.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Keys of the tag that need to be removed from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
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
 * <p>A structure that contains information used to update an attribute.</p>
 */
export interface FacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute?: FacetAttribute;

  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action?: UpdateActionType | string;
}

export interface UpdateFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>.
   *       For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>List of attributes that need to be updated in a given schema <a>Facet</a>.
   *       Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update
   *       operation to perform. </p>
   */
  AttributeUpdates?: FacetAttributeUpdate[];

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: ObjectType | string;
}

export interface UpdateFacetResponse {}

export interface UpdateLinkAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

export interface UpdateLinkAttributesResponse {}

export interface UpdateObjectAttributesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>
   *       where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>The reference that identifies the object.</p>
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

export interface UpdateObjectAttributesResponse {
  /**
   * <p>The <code>ObjectIdentifier</code> of the updated object.</p>
   */
  ObjectIdentifier?: string;
}

export interface UpdateSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the development schema. For more information, see
   *         <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The name of the schema.</p>
   */
  Name: string | undefined;
}

export interface UpdateSchemaResponse {
  /**
   * <p>The ARN that is associated with the updated schema. For more information, see <a>arns</a>.</p>
   */
  SchemaArn?: string;
}

/**
 * <p>A typed link facet attribute update.</p>
 */
export interface TypedLinkFacetAttributeUpdate {
  /**
   * <p>The attribute to update.</p>
   */
  Attribute: TypedLinkAttributeDefinition | undefined;

  /**
   * <p>The action to perform when updating the attribute.</p>
   */
  Action: UpdateActionType | string | undefined;
}

export interface UpdateTypedLinkFacetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the schema. For more
   *       information, see <a>arns</a>.</p>
   */
  SchemaArn: string | undefined;

  /**
   * <p>The unique name of the typed link facet.</p>
   */
  Name: string | undefined;

  /**
   * <p>Attributes update structure.</p>
   */
  AttributeUpdates: TypedLinkFacetAttributeUpdate[] | undefined;

  /**
   * <p>The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed
   *       links considers the order that the attributes are defined on the typed link facet.  When
   *       providing ranges to a typed link selection, any inexact ranges must be specified at the end.
   *       Any attributes that do not have a range specified are presumed to match the entire range.
   *       Filters are interpreted in the order of the attributes on the typed link facet, not the order
   *       in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  IdentityAttributeOrder: string[] | undefined;
}

export interface UpdateTypedLinkFacetResponse {}

/**
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

export interface UpgradeAppliedSchemaRequest {
  /**
   * <p>The revision of the published schema to upgrade the directory to.</p>
   */
  PublishedSchemaArn: string | undefined;

  /**
   * <p>The ARN for the directory to which the upgraded schema will be applied.</p>
   */
  DirectoryArn: string | undefined;

  /**
   * <p>Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.</p>
   */
  DryRun?: boolean;
}

export interface UpgradeAppliedSchemaResponse {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;

  /**
   * <p>The ARN of the directory that is returned as part of the response.</p>
   */
  DirectoryArn?: string;
}

export interface UpgradePublishedSchemaRequest {
  /**
   * <p>The ARN of the development schema with the changes used for the upgrade.</p>
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * <p>The ARN of the published schema to be upgraded.</p>
   */
  PublishedSchemaArn: string | undefined;

  /**
   * <p>Identifies the minor version of the published schema that will be created. This parameter is NOT optional.</p>
   */
  MinorVersion: string | undefined;

  /**
   * <p>Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.</p>
   */
  DryRun?: boolean;
}

export interface UpgradePublishedSchemaResponse {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;
}

/**
 * @internal
 */
export const AttributeKeyFilterSensitiveLog = (obj: AttributeKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TypedAttributeValueFilterSensitiveLog = (obj: TypedAttributeValue): any => {
  if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
  if (obj.BinaryValue !== undefined) return { BinaryValue: obj.BinaryValue };
  if (obj.BooleanValue !== undefined) return { BooleanValue: obj.BooleanValue };
  if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
  if (obj.DatetimeValue !== undefined) return { DatetimeValue: obj.DatetimeValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AttributeKeyAndValueFilterSensitiveLog = (obj: AttributeKeyAndValue): any => ({
  ...obj,
  ...(obj.Value && { Value: TypedAttributeValueFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const ObjectReferenceFilterSensitiveLog = (obj: ObjectReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaFacetFilterSensitiveLog = (obj: SchemaFacet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFacetToObjectRequestFilterSensitiveLog = (obj: AddFacetToObjectRequest): any => ({
  ...obj,
  ...(obj.ObjectAttributeList && {
    ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AddFacetToObjectResponseFilterSensitiveLog = (obj: AddFacetToObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplySchemaRequestFilterSensitiveLog = (obj: ApplySchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplySchemaResponseFilterSensitiveLog = (obj: ApplySchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachObjectRequestFilterSensitiveLog = (obj: AttachObjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachObjectResponseFilterSensitiveLog = (obj: AttachObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachPolicyRequestFilterSensitiveLog = (obj: AttachPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachPolicyResponseFilterSensitiveLog = (obj: AttachPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachToIndexRequestFilterSensitiveLog = (obj: AttachToIndexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachToIndexResponseFilterSensitiveLog = (obj: AttachToIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeNameAndValueFilterSensitiveLog = (obj: AttributeNameAndValue): any => ({
  ...obj,
  ...(obj.Value && { Value: TypedAttributeValueFilterSensitiveLog(obj.Value) }),
});

/**
 * @internal
 */
export const TypedLinkSchemaAndFacetNameFilterSensitiveLog = (obj: TypedLinkSchemaAndFacetName): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachTypedLinkRequestFilterSensitiveLog = (obj: AttachTypedLinkRequest): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeNameAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TypedLinkSpecifierFilterSensitiveLog = (obj: TypedLinkSpecifier): any => ({
  ...obj,
  ...(obj.IdentityAttributeValues && {
    IdentityAttributeValues: obj.IdentityAttributeValues.map((item) => AttributeNameAndValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AttachTypedLinkResponseFilterSensitiveLog = (obj: AttachTypedLinkResponse): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
});

/**
 * @internal
 */
export const BatchGetLinkAttributesFilterSensitiveLog = (obj: BatchGetLinkAttributes): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
});

/**
 * @internal
 */
export const BatchGetObjectAttributesFilterSensitiveLog = (obj: BatchGetObjectAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetObjectInformationFilterSensitiveLog = (obj: BatchGetObjectInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListAttachedIndicesFilterSensitiveLog = (obj: BatchListAttachedIndices): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TypedAttributeValueRangeFilterSensitiveLog = (obj: TypedAttributeValueRange): any => ({
  ...obj,
  ...(obj.StartValue && { StartValue: TypedAttributeValueFilterSensitiveLog(obj.StartValue) }),
  ...(obj.EndValue && { EndValue: TypedAttributeValueFilterSensitiveLog(obj.EndValue) }),
});

/**
 * @internal
 */
export const TypedLinkAttributeRangeFilterSensitiveLog = (obj: TypedLinkAttributeRange): any => ({
  ...obj,
  ...(obj.Range && { Range: TypedAttributeValueRangeFilterSensitiveLog(obj.Range) }),
});

/**
 * @internal
 */
export const BatchListIncomingTypedLinksFilterSensitiveLog = (obj: BatchListIncomingTypedLinks): any => ({
  ...obj,
  ...(obj.FilterAttributeRanges && {
    FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ObjectAttributeRangeFilterSensitiveLog = (obj: ObjectAttributeRange): any => ({
  ...obj,
  ...(obj.Range && { Range: TypedAttributeValueRangeFilterSensitiveLog(obj.Range) }),
});

/**
 * @internal
 */
export const BatchListIndexFilterSensitiveLog = (obj: BatchListIndex): any => ({
  ...obj,
  ...(obj.RangesOnIndexedValues && {
    RangesOnIndexedValues: obj.RangesOnIndexedValues.map((item) => ObjectAttributeRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchListObjectAttributesFilterSensitiveLog = (obj: BatchListObjectAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectChildrenFilterSensitiveLog = (obj: BatchListObjectChildren): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectParentPathsFilterSensitiveLog = (obj: BatchListObjectParentPaths): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectParentsFilterSensitiveLog = (obj: BatchListObjectParents): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectPoliciesFilterSensitiveLog = (obj: BatchListObjectPolicies): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListOutgoingTypedLinksFilterSensitiveLog = (obj: BatchListOutgoingTypedLinks): any => ({
  ...obj,
  ...(obj.FilterAttributeRanges && {
    FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchListPolicyAttachmentsFilterSensitiveLog = (obj: BatchListPolicyAttachments): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchLookupPolicyFilterSensitiveLog = (obj: BatchLookupPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchReadOperationFilterSensitiveLog = (obj: BatchReadOperation): any => ({
  ...obj,
  ...(obj.ListIndex && { ListIndex: BatchListIndexFilterSensitiveLog(obj.ListIndex) }),
  ...(obj.ListOutgoingTypedLinks && {
    ListOutgoingTypedLinks: BatchListOutgoingTypedLinksFilterSensitiveLog(obj.ListOutgoingTypedLinks),
  }),
  ...(obj.ListIncomingTypedLinks && {
    ListIncomingTypedLinks: BatchListIncomingTypedLinksFilterSensitiveLog(obj.ListIncomingTypedLinks),
  }),
  ...(obj.GetLinkAttributes && { GetLinkAttributes: BatchGetLinkAttributesFilterSensitiveLog(obj.GetLinkAttributes) }),
});

/**
 * @internal
 */
export const BatchReadRequestFilterSensitiveLog = (obj: BatchReadRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchReadExceptionFilterSensitiveLog = (obj: BatchReadException): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetLinkAttributesResponseFilterSensitiveLog = (obj: BatchGetLinkAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchGetObjectAttributesResponseFilterSensitiveLog = (obj: BatchGetObjectAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchGetObjectInformationResponseFilterSensitiveLog = (obj: BatchGetObjectInformationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexAttachmentFilterSensitiveLog = (obj: IndexAttachment): any => ({
  ...obj,
  ...(obj.IndexedAttributes && {
    IndexedAttributes: obj.IndexedAttributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchListAttachedIndicesResponseFilterSensitiveLog = (obj: BatchListAttachedIndicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListIncomingTypedLinksResponseFilterSensitiveLog = (
  obj: BatchListIncomingTypedLinksResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListIndexResponseFilterSensitiveLog = (obj: BatchListIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectAttributesResponseFilterSensitiveLog = (obj: BatchListObjectAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchListObjectChildrenResponseFilterSensitiveLog = (obj: BatchListObjectChildrenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathToObjectIdentifiersFilterSensitiveLog = (obj: PathToObjectIdentifiers): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectParentPathsResponseFilterSensitiveLog = (obj: BatchListObjectParentPathsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectIdentifierAndLinkNameTupleFilterSensitiveLog = (obj: ObjectIdentifierAndLinkNameTuple): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectParentsResponseFilterSensitiveLog = (obj: BatchListObjectParentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListObjectPoliciesResponseFilterSensitiveLog = (obj: BatchListObjectPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListOutgoingTypedLinksResponseFilterSensitiveLog = (
  obj: BatchListOutgoingTypedLinksResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchListPolicyAttachmentsResponseFilterSensitiveLog = (obj: BatchListPolicyAttachmentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyAttachmentFilterSensitiveLog = (obj: PolicyAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyToPathFilterSensitiveLog = (obj: PolicyToPath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchLookupPolicyResponseFilterSensitiveLog = (obj: BatchLookupPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchReadSuccessfulResponseFilterSensitiveLog = (obj: BatchReadSuccessfulResponse): any => ({
  ...obj,
  ...(obj.ListObjectAttributes && {
    ListObjectAttributes: BatchListObjectAttributesResponseFilterSensitiveLog(obj.ListObjectAttributes),
  }),
  ...(obj.GetObjectAttributes && {
    GetObjectAttributes: BatchGetObjectAttributesResponseFilterSensitiveLog(obj.GetObjectAttributes),
  }),
  ...(obj.GetLinkAttributes && {
    GetLinkAttributes: BatchGetLinkAttributesResponseFilterSensitiveLog(obj.GetLinkAttributes),
  }),
});

/**
 * @internal
 */
export const BatchReadOperationResponseFilterSensitiveLog = (obj: BatchReadOperationResponse): any => ({
  ...obj,
  ...(obj.SuccessfulResponse && {
    SuccessfulResponse: BatchReadSuccessfulResponseFilterSensitiveLog(obj.SuccessfulResponse),
  }),
});

/**
 * @internal
 */
export const BatchReadResponseFilterSensitiveLog = (obj: BatchReadResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAddFacetToObjectFilterSensitiveLog = (obj: BatchAddFacetToObject): any => ({
  ...obj,
  ...(obj.ObjectAttributeList && {
    ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchAttachObjectFilterSensitiveLog = (obj: BatchAttachObject): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachPolicyFilterSensitiveLog = (obj: BatchAttachPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachToIndexFilterSensitiveLog = (obj: BatchAttachToIndex): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachTypedLinkFilterSensitiveLog = (obj: BatchAttachTypedLink): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeNameAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchCreateIndexFilterSensitiveLog = (obj: BatchCreateIndex): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateObjectFilterSensitiveLog = (obj: BatchCreateObject): any => ({
  ...obj,
  ...(obj.ObjectAttributeList && {
    ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchDeleteObjectFilterSensitiveLog = (obj: BatchDeleteObject): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachFromIndexFilterSensitiveLog = (obj: BatchDetachFromIndex): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachObjectFilterSensitiveLog = (obj: BatchDetachObject): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachPolicyFilterSensitiveLog = (obj: BatchDetachPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachTypedLinkFilterSensitiveLog = (obj: BatchDetachTypedLink): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
});

/**
 * @internal
 */
export const BatchRemoveFacetFromObjectFilterSensitiveLog = (obj: BatchRemoveFacetFromObject): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LinkAttributeActionFilterSensitiveLog = (obj: LinkAttributeAction): any => ({
  ...obj,
  ...(obj.AttributeUpdateValue && {
    AttributeUpdateValue: TypedAttributeValueFilterSensitiveLog(obj.AttributeUpdateValue),
  }),
});

/**
 * @internal
 */
export const LinkAttributeUpdateFilterSensitiveLog = (obj: LinkAttributeUpdate): any => ({
  ...obj,
  ...(obj.AttributeAction && { AttributeAction: LinkAttributeActionFilterSensitiveLog(obj.AttributeAction) }),
});

/**
 * @internal
 */
export const BatchUpdateLinkAttributesFilterSensitiveLog = (obj: BatchUpdateLinkAttributes): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
  ...(obj.AttributeUpdates && {
    AttributeUpdates: obj.AttributeUpdates.map((item) => LinkAttributeUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ObjectAttributeActionFilterSensitiveLog = (obj: ObjectAttributeAction): any => ({
  ...obj,
  ...(obj.ObjectAttributeUpdateValue && {
    ObjectAttributeUpdateValue: TypedAttributeValueFilterSensitiveLog(obj.ObjectAttributeUpdateValue),
  }),
});

/**
 * @internal
 */
export const ObjectAttributeUpdateFilterSensitiveLog = (obj: ObjectAttributeUpdate): any => ({
  ...obj,
  ...(obj.ObjectAttributeAction && {
    ObjectAttributeAction: ObjectAttributeActionFilterSensitiveLog(obj.ObjectAttributeAction),
  }),
});

/**
 * @internal
 */
export const BatchUpdateObjectAttributesFilterSensitiveLog = (obj: BatchUpdateObjectAttributes): any => ({
  ...obj,
  ...(obj.AttributeUpdates && {
    AttributeUpdates: obj.AttributeUpdates.map((item) => ObjectAttributeUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchWriteOperationFilterSensitiveLog = (obj: BatchWriteOperation): any => ({
  ...obj,
  ...(obj.UpdateObjectAttributes && {
    UpdateObjectAttributes: BatchUpdateObjectAttributesFilterSensitiveLog(obj.UpdateObjectAttributes),
  }),
  ...(obj.AddFacetToObject && { AddFacetToObject: BatchAddFacetToObjectFilterSensitiveLog(obj.AddFacetToObject) }),
  ...(obj.AttachTypedLink && { AttachTypedLink: BatchAttachTypedLinkFilterSensitiveLog(obj.AttachTypedLink) }),
  ...(obj.DetachTypedLink && { DetachTypedLink: BatchDetachTypedLinkFilterSensitiveLog(obj.DetachTypedLink) }),
  ...(obj.UpdateLinkAttributes && {
    UpdateLinkAttributes: BatchUpdateLinkAttributesFilterSensitiveLog(obj.UpdateLinkAttributes),
  }),
});

/**
 * @internal
 */
export const BatchWriteRequestFilterSensitiveLog = (obj: BatchWriteRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAddFacetToObjectResponseFilterSensitiveLog = (obj: BatchAddFacetToObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachObjectResponseFilterSensitiveLog = (obj: BatchAttachObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachPolicyResponseFilterSensitiveLog = (obj: BatchAttachPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachToIndexResponseFilterSensitiveLog = (obj: BatchAttachToIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAttachTypedLinkResponseFilterSensitiveLog = (obj: BatchAttachTypedLinkResponse): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
});

/**
 * @internal
 */
export const BatchCreateIndexResponseFilterSensitiveLog = (obj: BatchCreateIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateObjectResponseFilterSensitiveLog = (obj: BatchCreateObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteObjectResponseFilterSensitiveLog = (obj: BatchDeleteObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachFromIndexResponseFilterSensitiveLog = (obj: BatchDetachFromIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachObjectResponseFilterSensitiveLog = (obj: BatchDetachObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachPolicyResponseFilterSensitiveLog = (obj: BatchDetachPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetachTypedLinkResponseFilterSensitiveLog = (obj: BatchDetachTypedLinkResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchRemoveFacetFromObjectResponseFilterSensitiveLog = (obj: BatchRemoveFacetFromObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateLinkAttributesResponseFilterSensitiveLog = (obj: BatchUpdateLinkAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateObjectAttributesResponseFilterSensitiveLog = (
  obj: BatchUpdateObjectAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchWriteOperationResponseFilterSensitiveLog = (obj: BatchWriteOperationResponse): any => ({
  ...obj,
  ...(obj.AttachTypedLink && { AttachTypedLink: BatchAttachTypedLinkResponseFilterSensitiveLog(obj.AttachTypedLink) }),
});

/**
 * @internal
 */
export const BatchWriteResponseFilterSensitiveLog = (obj: BatchWriteResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDirectoryRequestFilterSensitiveLog = (obj: CreateDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDirectoryResponseFilterSensitiveLog = (obj: CreateDirectoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FacetAttributeDefinitionFilterSensitiveLog = (obj: FacetAttributeDefinition): any => ({
  ...obj,
  ...(obj.DefaultValue && { DefaultValue: TypedAttributeValueFilterSensitiveLog(obj.DefaultValue) }),
});

/**
 * @internal
 */
export const FacetAttributeReferenceFilterSensitiveLog = (obj: FacetAttributeReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FacetAttributeFilterSensitiveLog = (obj: FacetAttribute): any => ({
  ...obj,
  ...(obj.AttributeDefinition && {
    AttributeDefinition: FacetAttributeDefinitionFilterSensitiveLog(obj.AttributeDefinition),
  }),
});

/**
 * @internal
 */
export const CreateFacetRequestFilterSensitiveLog = (obj: CreateFacetRequest): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => FacetAttributeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateFacetResponseFilterSensitiveLog = (obj: CreateFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIndexRequestFilterSensitiveLog = (obj: CreateIndexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIndexResponseFilterSensitiveLog = (obj: CreateIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateObjectRequestFilterSensitiveLog = (obj: CreateObjectRequest): any => ({
  ...obj,
  ...(obj.ObjectAttributeList && {
    ObjectAttributeList: obj.ObjectAttributeList.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateObjectResponseFilterSensitiveLog = (obj: CreateObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchemaRequestFilterSensitiveLog = (obj: CreateSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSchemaResponseFilterSensitiveLog = (obj: CreateSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TypedLinkAttributeDefinitionFilterSensitiveLog = (obj: TypedLinkAttributeDefinition): any => ({
  ...obj,
  ...(obj.DefaultValue && { DefaultValue: TypedAttributeValueFilterSensitiveLog(obj.DefaultValue) }),
});

/**
 * @internal
 */
export const TypedLinkFacetFilterSensitiveLog = (obj: TypedLinkFacet): any => ({
  ...obj,
  ...(obj.Attributes && {
    Attributes: obj.Attributes.map((item) => TypedLinkAttributeDefinitionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateTypedLinkFacetRequestFilterSensitiveLog = (obj: CreateTypedLinkFacetRequest): any => ({
  ...obj,
  ...(obj.Facet && { Facet: TypedLinkFacetFilterSensitiveLog(obj.Facet) }),
});

/**
 * @internal
 */
export const CreateTypedLinkFacetResponseFilterSensitiveLog = (obj: CreateTypedLinkFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDirectoryRequestFilterSensitiveLog = (obj: DeleteDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDirectoryResponseFilterSensitiveLog = (obj: DeleteDirectoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFacetRequestFilterSensitiveLog = (obj: DeleteFacetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFacetResponseFilterSensitiveLog = (obj: DeleteFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteObjectRequestFilterSensitiveLog = (obj: DeleteObjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteObjectResponseFilterSensitiveLog = (obj: DeleteObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchemaRequestFilterSensitiveLog = (obj: DeleteSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSchemaResponseFilterSensitiveLog = (obj: DeleteSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTypedLinkFacetRequestFilterSensitiveLog = (obj: DeleteTypedLinkFacetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTypedLinkFacetResponseFilterSensitiveLog = (obj: DeleteTypedLinkFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachFromIndexRequestFilterSensitiveLog = (obj: DetachFromIndexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachFromIndexResponseFilterSensitiveLog = (obj: DetachFromIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachObjectRequestFilterSensitiveLog = (obj: DetachObjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachObjectResponseFilterSensitiveLog = (obj: DetachObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachPolicyRequestFilterSensitiveLog = (obj: DetachPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachPolicyResponseFilterSensitiveLog = (obj: DetachPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachTypedLinkRequestFilterSensitiveLog = (obj: DetachTypedLinkRequest): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
});

/**
 * @internal
 */
export const DisableDirectoryRequestFilterSensitiveLog = (obj: DisableDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableDirectoryResponseFilterSensitiveLog = (obj: DisableDirectoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableDirectoryRequestFilterSensitiveLog = (obj: EnableDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableDirectoryResponseFilterSensitiveLog = (obj: EnableDirectoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppliedSchemaVersionRequestFilterSensitiveLog = (obj: GetAppliedSchemaVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppliedSchemaVersionResponseFilterSensitiveLog = (obj: GetAppliedSchemaVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDirectoryRequestFilterSensitiveLog = (obj: GetDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DirectoryFilterSensitiveLog = (obj: Directory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDirectoryResponseFilterSensitiveLog = (obj: GetDirectoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFacetRequestFilterSensitiveLog = (obj: GetFacetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FacetFilterSensitiveLog = (obj: Facet): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFacetResponseFilterSensitiveLog = (obj: GetFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLinkAttributesRequestFilterSensitiveLog = (obj: GetLinkAttributesRequest): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
});

/**
 * @internal
 */
export const GetLinkAttributesResponseFilterSensitiveLog = (obj: GetLinkAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetObjectAttributesRequestFilterSensitiveLog = (obj: GetObjectAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetObjectAttributesResponseFilterSensitiveLog = (obj: GetObjectAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetObjectInformationRequestFilterSensitiveLog = (obj: GetObjectInformationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetObjectInformationResponseFilterSensitiveLog = (obj: GetObjectInformationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSchemaAsJsonRequestFilterSensitiveLog = (obj: GetSchemaAsJsonRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSchemaAsJsonResponseFilterSensitiveLog = (obj: GetSchemaAsJsonResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTypedLinkFacetInformationRequestFilterSensitiveLog = (
  obj: GetTypedLinkFacetInformationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTypedLinkFacetInformationResponseFilterSensitiveLog = (
  obj: GetTypedLinkFacetInformationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppliedSchemaArnsRequestFilterSensitiveLog = (obj: ListAppliedSchemaArnsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppliedSchemaArnsResponseFilterSensitiveLog = (obj: ListAppliedSchemaArnsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttachedIndicesRequestFilterSensitiveLog = (obj: ListAttachedIndicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAttachedIndicesResponseFilterSensitiveLog = (obj: ListAttachedIndicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevelopmentSchemaArnsRequestFilterSensitiveLog = (obj: ListDevelopmentSchemaArnsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDevelopmentSchemaArnsResponseFilterSensitiveLog = (obj: ListDevelopmentSchemaArnsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDirectoriesRequestFilterSensitiveLog = (obj: ListDirectoriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDirectoriesResponseFilterSensitiveLog = (obj: ListDirectoriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFacetAttributesRequestFilterSensitiveLog = (obj: ListFacetAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFacetAttributesResponseFilterSensitiveLog = (obj: ListFacetAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => FacetAttributeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListFacetNamesRequestFilterSensitiveLog = (obj: ListFacetNamesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFacetNamesResponseFilterSensitiveLog = (obj: ListFacetNamesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIncomingTypedLinksRequestFilterSensitiveLog = (obj: ListIncomingTypedLinksRequest): any => ({
  ...obj,
  ...(obj.FilterAttributeRanges && {
    FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListIncomingTypedLinksResponseFilterSensitiveLog = (obj: ListIncomingTypedLinksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIndexRequestFilterSensitiveLog = (obj: ListIndexRequest): any => ({
  ...obj,
  ...(obj.RangesOnIndexedValues && {
    RangesOnIndexedValues: obj.RangesOnIndexedValues.map((item) => ObjectAttributeRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListIndexResponseFilterSensitiveLog = (obj: ListIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedSchemaArnsRequestFilterSensitiveLog = (obj: ListManagedSchemaArnsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedSchemaArnsResponseFilterSensitiveLog = (obj: ListManagedSchemaArnsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectAttributesRequestFilterSensitiveLog = (obj: ListObjectAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectAttributesResponseFilterSensitiveLog = (obj: ListObjectAttributesResponse): any => ({
  ...obj,
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeKeyAndValueFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListObjectChildrenRequestFilterSensitiveLog = (obj: ListObjectChildrenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectChildrenResponseFilterSensitiveLog = (obj: ListObjectChildrenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectParentPathsRequestFilterSensitiveLog = (obj: ListObjectParentPathsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectParentPathsResponseFilterSensitiveLog = (obj: ListObjectParentPathsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectParentsRequestFilterSensitiveLog = (obj: ListObjectParentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectParentsResponseFilterSensitiveLog = (obj: ListObjectParentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectPoliciesRequestFilterSensitiveLog = (obj: ListObjectPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListObjectPoliciesResponseFilterSensitiveLog = (obj: ListObjectPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOutgoingTypedLinksRequestFilterSensitiveLog = (obj: ListOutgoingTypedLinksRequest): any => ({
  ...obj,
  ...(obj.FilterAttributeRanges && {
    FilterAttributeRanges: obj.FilterAttributeRanges.map((item) => TypedLinkAttributeRangeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListOutgoingTypedLinksResponseFilterSensitiveLog = (obj: ListOutgoingTypedLinksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPolicyAttachmentsRequestFilterSensitiveLog = (obj: ListPolicyAttachmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPolicyAttachmentsResponseFilterSensitiveLog = (obj: ListPolicyAttachmentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPublishedSchemaArnsRequestFilterSensitiveLog = (obj: ListPublishedSchemaArnsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPublishedSchemaArnsResponseFilterSensitiveLog = (obj: ListPublishedSchemaArnsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTypedLinkFacetAttributesRequestFilterSensitiveLog = (
  obj: ListTypedLinkFacetAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTypedLinkFacetAttributesResponseFilterSensitiveLog = (
  obj: ListTypedLinkFacetAttributesResponse
): any => ({
  ...obj,
  ...(obj.Attributes && {
    Attributes: obj.Attributes.map((item) => TypedLinkAttributeDefinitionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListTypedLinkFacetNamesRequestFilterSensitiveLog = (obj: ListTypedLinkFacetNamesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTypedLinkFacetNamesResponseFilterSensitiveLog = (obj: ListTypedLinkFacetNamesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LookupPolicyRequestFilterSensitiveLog = (obj: LookupPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LookupPolicyResponseFilterSensitiveLog = (obj: LookupPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishSchemaRequestFilterSensitiveLog = (obj: PublishSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishSchemaResponseFilterSensitiveLog = (obj: PublishSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSchemaFromJsonRequestFilterSensitiveLog = (obj: PutSchemaFromJsonRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSchemaFromJsonResponseFilterSensitiveLog = (obj: PutSchemaFromJsonResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFacetFromObjectRequestFilterSensitiveLog = (obj: RemoveFacetFromObjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFacetFromObjectResponseFilterSensitiveLog = (obj: RemoveFacetFromObjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FacetAttributeUpdateFilterSensitiveLog = (obj: FacetAttributeUpdate): any => ({
  ...obj,
  ...(obj.Attribute && { Attribute: FacetAttributeFilterSensitiveLog(obj.Attribute) }),
});

/**
 * @internal
 */
export const UpdateFacetRequestFilterSensitiveLog = (obj: UpdateFacetRequest): any => ({
  ...obj,
  ...(obj.AttributeUpdates && {
    AttributeUpdates: obj.AttributeUpdates.map((item) => FacetAttributeUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateFacetResponseFilterSensitiveLog = (obj: UpdateFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLinkAttributesRequestFilterSensitiveLog = (obj: UpdateLinkAttributesRequest): any => ({
  ...obj,
  ...(obj.TypedLinkSpecifier && { TypedLinkSpecifier: TypedLinkSpecifierFilterSensitiveLog(obj.TypedLinkSpecifier) }),
  ...(obj.AttributeUpdates && {
    AttributeUpdates: obj.AttributeUpdates.map((item) => LinkAttributeUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateLinkAttributesResponseFilterSensitiveLog = (obj: UpdateLinkAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateObjectAttributesRequestFilterSensitiveLog = (obj: UpdateObjectAttributesRequest): any => ({
  ...obj,
  ...(obj.AttributeUpdates && {
    AttributeUpdates: obj.AttributeUpdates.map((item) => ObjectAttributeUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateObjectAttributesResponseFilterSensitiveLog = (obj: UpdateObjectAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchemaRequestFilterSensitiveLog = (obj: UpdateSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSchemaResponseFilterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TypedLinkFacetAttributeUpdateFilterSensitiveLog = (obj: TypedLinkFacetAttributeUpdate): any => ({
  ...obj,
  ...(obj.Attribute && { Attribute: TypedLinkAttributeDefinitionFilterSensitiveLog(obj.Attribute) }),
});

/**
 * @internal
 */
export const UpdateTypedLinkFacetRequestFilterSensitiveLog = (obj: UpdateTypedLinkFacetRequest): any => ({
  ...obj,
  ...(obj.AttributeUpdates && {
    AttributeUpdates: obj.AttributeUpdates.map((item) => TypedLinkFacetAttributeUpdateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateTypedLinkFacetResponseFilterSensitiveLog = (obj: UpdateTypedLinkFacetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeAppliedSchemaRequestFilterSensitiveLog = (obj: UpgradeAppliedSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeAppliedSchemaResponseFilterSensitiveLog = (obj: UpgradeAppliedSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradePublishedSchemaRequestFilterSensitiveLog = (obj: UpgradePublishedSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradePublishedSchemaResponseFilterSensitiveLog = (obj: UpgradePublishedSchemaResponse): any => ({
  ...obj,
});
