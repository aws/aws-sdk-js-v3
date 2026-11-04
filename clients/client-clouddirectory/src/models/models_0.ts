// smithy-typescript generated code
import type {
  BatchReadExceptionType,
  ConsistencyLevel,
  DirectoryState,
  FacetAttributeType,
  FacetStyle,
  ObjectType,
  RangeMode,
  RequiredAttributeBehavior,
  RuleType,
  UpdateActionType,
} from "./enums";

/**
 * A unique identifier for an attribute.
 *
 * @public
 */
export interface AttributeKey {
  /**
   * The Amazon Resource Name (ARN) of the schema that contains the facet and attribute.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the facet that the attribute exists within.
   *
   * @public
   */
  FacetName: string | undefined;

  /**
   * The name of the attribute.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
 *
 * @public
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
   * A string data value.
   *
   * @public
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
   * A binary data value.
   *
   * @public
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
   * A Boolean data value.
   *
   * @public
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
   * A number data value.
   *
   * @public
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
   * A date and time value.
   *
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    BinaryValue: (value: Uint8Array) => T;
    BooleanValue: (value: boolean) => T;
    NumberValue: (value: string) => T;
    DatetimeValue: (value: Date) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The combination of an attribute key and an attribute value.
 *
 * @public
 */
export interface AttributeKeyAndValue {
  /**
   * The key of the attribute.
   *
   * @public
   */
  Key: AttributeKey | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * The reference that identifies an object.
 *
 * @public
 */
export interface ObjectReference {
  /**
   * A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see [Access Objects](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html). You can identify an object in one of the following ways:
   *
   * - *$ObjectIdentifier* - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes.
   * - *\/some/path* - Identifies the object based on path
   * - *#SomeBatchReference* - Identifies the object in a batch call
   *
   * @public
   */
  Selector?: string | undefined;
}

/**
 * A facet.
 *
 * @public
 */
export interface SchemaFacet {
  /**
   * The ARN of the schema that contains the facet with no minor component. See arns and [In-Place Schema Upgrade](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html) for a description of when to provide minor versions. If this value is set, FacetName must also be set.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The name of the facet. If this value is set, SchemaArn must also be set.
   *
   * @public
   */
  FacetName?: string | undefined;
}

/**
 * @public
 */
export interface AddFacetToObjectRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Identifiers for the facet that you are adding to the object. See SchemaFacet for details.
   *
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * Attributes on the facet that you are adding to the object.
   *
   * @public
   */
  ObjectAttributeList?: AttributeKeyAndValue[] | undefined;

  /**
   * A reference to the object you are adding the specified facet to.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AddFacetToObjectResponse {}

/**
 * @public
 */
export interface ApplySchemaRequest {
  /**
   * Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see arns.
   *
   * @public
   */
  PublishedSchemaArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory into which the schema is copied. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface ApplySchemaResponse {
  /**
   * The applied schema ARN that is associated with the copied schema in the Directory. You can use this ARN to describe the schema information applied on this directory. For more information, see arns.
   *
   * @public
   */
  AppliedSchemaArn?: string | undefined;

  /**
   * The ARN that is associated with the Directory. For more information, see arns.
   *
   * @public
   */
  DirectoryArn?: string | undefined;
}

/**
 * @public
 */
export interface AttachObjectRequest {
  /**
   * Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The parent object reference.
   *
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * The child object reference to be attached to the object.
   *
   * @public
   */
  ChildReference: ObjectReference | undefined;

  /**
   * The link name with which the child object is attached to the parent.
   *
   * @public
   */
  LinkName: string | undefined;
}

/**
 * @public
 */
export interface AttachObjectResponse {
  /**
   * The attached `ObjectIdentifier`, which is the child `ObjectIdentifier`.
   *
   * @public
   */
  AttachedObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface AttachPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that is associated with the policy object.
   *
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * The reference that identifies the object to which the policy will be attached.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AttachPolicyResponse {}

/**
 * @public
 */
export interface AttachToIndexRequest {
  /**
   * The Amazon Resource Name (ARN) of the directory where the object and index exist.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A reference to the index that you are attaching the object to.
   *
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * A reference to the object that you are attaching to the index.
   *
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface AttachToIndexResponse {
  /**
   * The `ObjectIdentifier` of the object that was attached to the index.
   *
   * @public
   */
  AttachedObjectIdentifier?: string | undefined;
}

/**
 * Identifies the attribute name and value for a typed link.
 *
 * @public
 */
export interface AttributeNameAndValue {
  /**
   * The attribute name of the typed link.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value for the typed link.
   *
   * @public
   */
  Value: TypedAttributeValue | undefined;
}

/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
 *
 * @public
 */
export interface TypedLinkSchemaAndFacetName {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The unique name of the typed link facet.
   *
   * @public
   */
  TypedLinkName: string | undefined;
}

/**
 * @public
 */
export interface AttachTypedLinkRequest {
  /**
   * The Amazon Resource Name (ARN) of the directory where you want to attach the typed link.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Identifies the source object that the typed link will attach to.
   *
   * @public
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * Identifies the target object that the typed link will attach to.
   *
   * @public
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * Identifies the typed link facet that is associated with the typed link.
   *
   * @public
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * A set of attributes that are associated with the typed link.
   *
   * @public
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The AttachTypedLink API returns a typed link specifier while the DetachTypedLink API accepts one as input. Similarly, the ListIncomingTypedLinks and ListOutgoingTypedLinks API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
 *
 * @public
 */
export interface TypedLinkSpecifier {
  /**
   * Identifies the typed link facet that is associated with the typed link.
   *
   * @public
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * Identifies the source object that the typed link will attach to.
   *
   * @public
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * Identifies the target object that the typed link will attach to.
   *
   * @public
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * Identifies the attribute value to update.
   *
   * @public
   */
  IdentityAttributeValues: AttributeNameAndValue[] | undefined;
}

/**
 * @public
 */
export interface AttachTypedLinkResponse {
  /**
   * Returns a typed link specifier as output.
   *
   * @public
   */
  TypedLinkSpecifier?: TypedLinkSpecifier | undefined;
}

/**
 * Retrieves attributes that are associated with a typed link inside a BatchRead operation. For more information, see GetLinkAttributes and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchGetLinkAttributes {
  /**
   * Allows a typed link specifier to be accepted as input.
   *
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * A list of attribute names whose values will be retrieved.
   *
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * Retrieves attributes within a facet that are associated with an object inside an BatchRead operation. For more information, see GetObjectAttributes and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchGetObjectAttributes {
  /**
   * Reference that identifies the object whose attributes will be retrieved.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * Identifier for the facet whose attributes will be retrieved. See SchemaFacet for details.
   *
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * List of attribute names whose values will be retrieved.
   *
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * Retrieves metadata about an object inside a BatchRead operation. For more information, see GetObjectInformation and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchGetObjectInformation {
  /**
   * A reference to the object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * Lists indices attached to an object inside a BatchRead operation. For more information, see ListAttachedIndices and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListAttachedIndices {
  /**
   * A reference to the object that has indices attached.
   *
   * @public
   */
  TargetReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A range of attribute values. For more information, see [Range Filters](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html).
 *
 * @public
 */
export interface TypedAttributeValueRange {
  /**
   * The inclusive or exclusive range start.
   *
   * @public
   */
  StartMode: RangeMode | undefined;

  /**
   * The value to start the range at.
   *
   * @public
   */
  StartValue?: TypedAttributeValue | undefined;

  /**
   * The inclusive or exclusive range end.
   *
   * @public
   */
  EndMode: RangeMode | undefined;

  /**
   * The attribute value to terminate the range at.
   *
   * @public
   */
  EndValue?: TypedAttributeValue | undefined;
}

/**
 * Identifies the range of attributes that are used by a specified filter.
 *
 * @public
 */
export interface TypedLinkAttributeRange {
  /**
   * The unique name of the typed link attribute.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The range of attribute values that are being selected.
   *
   * @public
   */
  Range: TypedAttributeValueRange | undefined;
}

/**
 * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object inside a BatchRead operation. For more information, see ListIncomingTypedLinks and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListIncomingTypedLinks {
  /**
   * The reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
   *
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls.
   *
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A range of attributes.
 *
 * @public
 */
export interface ObjectAttributeRange {
  /**
   * The key of the attribute that the attribute range covers.
   *
   * @public
   */
  AttributeKey?: AttributeKey | undefined;

  /**
   * The range of attribute values being selected.
   *
   * @public
   */
  Range?: TypedAttributeValueRange | undefined;
}

/**
 * Lists objects attached to the specified index inside a BatchRead operation. For more information, see ListIndex and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListIndex {
  /**
   * Specifies the ranges of indexed values that you want to query.
   *
   * @public
   */
  RangesOnIndexedValues?: ObjectAttributeRange[] | undefined;

  /**
   * The reference to the index to list.
   *
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListObjectAttributes operation.
 *
 * @public
 */
export interface BatchListObjectAttributes {
  /**
   * Reference of the object whose attributes need to be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Used to filter the list of object attributes that are associated with a certain facet.
   *
   * @public
   */
  FacetFilter?: SchemaFacet | undefined;
}

/**
 * Represents the output of a ListObjectChildren operation.
 *
 * @public
 */
export interface BatchListObjectChildren {
  /**
   * Reference of the object for which child objects are being listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a BatchRead operation. For more information, see ListObjectParentPaths and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListObjectParentPaths {
  /**
   * The reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Lists parent objects that are associated with a given object in pagination fashion.
 *
 * @public
 */
export interface BatchListObjectParents {
  /**
   * The reference that identifies an object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Returns policies attached to an object in pagination fashion inside a BatchRead operation. For more information, see ListObjectPolicies and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListObjectPolicies {
  /**
   * The reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object inside a BatchRead operation. For more information, see ListOutgoingTypedLinks and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListOutgoingTypedLinks {
  /**
   * The reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
   *
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.
   *
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Returns all of the `ObjectIdentifiers` to which a given policy is attached inside a BatchRead operation. For more information, see ListPolicyAttachments and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchListPolicyAttachments {
  /**
   * The reference that identifies the policy object.
   *
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Lists all policies from the root of the Directory to the object specified inside a BatchRead operation. For more information, see LookupPolicy and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchLookupPolicy {
  /**
   * Reference that identifies the object whose policies will be looked up.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Represents the output of a `BatchRead` operation.
 *
 * @public
 */
export interface BatchReadOperation {
  /**
   * Lists all attributes that are associated with an object.
   *
   * @public
   */
  ListObjectAttributes?: BatchListObjectAttributes | undefined;

  /**
   * Returns a paginated list of child objects that are associated with a given object.
   *
   * @public
   */
  ListObjectChildren?: BatchListObjectChildren | undefined;

  /**
   * Lists indices attached to an object.
   *
   * @public
   */
  ListAttachedIndices?: BatchListAttachedIndices | undefined;

  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see [Directory Structure](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html).
   *
   * @public
   */
  ListObjectParentPaths?: BatchListObjectParentPaths | undefined;

  /**
   * Retrieves metadata about an object.
   *
   * @public
   */
  GetObjectInformation?: BatchGetObjectInformation | undefined;

  /**
   * Retrieves attributes within a facet that are associated with an object.
   *
   * @public
   */
  GetObjectAttributes?: BatchGetObjectAttributes | undefined;

  /**
   * Lists parent objects that are associated with a given object in pagination fashion.
   *
   * @public
   */
  ListObjectParents?: BatchListObjectParents | undefined;

  /**
   * Returns policies attached to an object in pagination fashion.
   *
   * @public
   */
  ListObjectPolicies?: BatchListObjectPolicies | undefined;

  /**
   * Returns all of the `ObjectIdentifiers` to which a given policy is attached.
   *
   * @public
   */
  ListPolicyAttachments?: BatchListPolicyAttachments | undefined;

  /**
   * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the `ObjectIdentifier` for such objects. If policies are present, it returns `ObjectIdentifier`, `policyId`, and `policyType`. Paths that don't lead to the root from the target object are ignored. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
   *
   * @public
   */
  LookupPolicy?: BatchLookupPolicy | undefined;

  /**
   * Lists objects attached to the specified index.
   *
   * @public
   */
  ListIndex?: BatchListIndex | undefined;

  /**
   * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinks | undefined;

  /**
   * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinks | undefined;

  /**
   * Retrieves attributes that are associated with a typed link.
   *
   * @public
   */
  GetLinkAttributes?: BatchGetLinkAttributes | undefined;
}

/**
 * @public
 */
export interface BatchReadRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A list of operations that are part of the batch.
   *
   * @public
   */
  Operations: BatchReadOperation[] | undefined;

  /**
   * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * The batch read exception structure, which contains the exception type and message.
 *
 * @public
 */
export interface BatchReadException {
  /**
   * A type of exception, such as `InvalidArnException`.
   *
   * @public
   */
  Type?: BatchReadExceptionType | undefined;

  /**
   * An exception message that is associated with the failure.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Represents the output of a GetLinkAttributes response operation.
 *
 * @public
 */
export interface BatchGetLinkAttributesResponse {
  /**
   * The attributes that are associated with the typed link.
   *
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * Represents the output of a GetObjectAttributes response operation.
 *
 * @public
 */
export interface BatchGetObjectAttributesResponse {
  /**
   * The attribute values that are associated with an object.
   *
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * Represents the output of a GetObjectInformation response operation.
 *
 * @public
 */
export interface BatchGetObjectInformationResponse {
  /**
   * The facets attached to the specified object.
   *
   * @public
   */
  SchemaFacets?: SchemaFacet[] | undefined;

  /**
   * The `ObjectIdentifier` of the specified object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * Represents an index and an attached object.
 *
 * @public
 */
export interface IndexAttachment {
  /**
   * The indexed attribute values.
   *
   * @public
   */
  IndexedAttributes?: AttributeKeyAndValue[] | undefined;

  /**
   * In response to ListIndex, the `ObjectIdentifier` of the object attached to the index. In response to ListAttachedIndices, the `ObjectIdentifier` of the index attached to the object. This field will always contain the `ObjectIdentifier` of the object on the opposite side of the attachment specified in the query.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a ListAttachedIndices response operation.
 *
 * @public
 */
export interface BatchListAttachedIndicesResponse {
  /**
   * The indices attached to the specified object.
   *
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListIncomingTypedLinks response operation.
 *
 * @public
 */
export interface BatchListIncomingTypedLinksResponse {
  /**
   * Returns one or more typed link specifiers as output.
   *
   * @public
   */
  LinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListIndex response operation.
 *
 * @public
 */
export interface BatchListIndexResponse {
  /**
   * The objects and indexed values attached to the index.
   *
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListObjectAttributes response operation.
 *
 * @public
 */
export interface BatchListObjectAttributesResponse {
  /**
   * The attributes map that is associated with the object. `AttributeArn` is the key; attribute value is the value.
   *
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListObjectChildren response operation.
 *
 * @public
 */
export interface BatchListObjectChildrenResponse {
  /**
   * The children structure, which is a map with the key as the `LinkName` and `ObjectIdentifier` as the value.
   *
   * @public
   */
  Children?: Record<string, string> | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns the path to the `ObjectIdentifiers` that is associated with the directory.
 *
 * @public
 */
export interface PathToObjectIdentifiers {
  /**
   * The path that is used to identify the object starting from directory root.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * Lists `ObjectIdentifiers` starting from directory root to the object in the request.
   *
   * @public
   */
  ObjectIdentifiers?: string[] | undefined;
}

/**
 * Represents the output of a ListObjectParentPaths response operation.
 *
 * @public
 */
export interface BatchListObjectParentPathsResponse {
  /**
   * Returns the path to the `ObjectIdentifiers` that are associated with the directory.
   *
   * @public
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A pair of ObjectIdentifier and LinkName.
 *
 * @public
 */
export interface ObjectIdentifierAndLinkNameTuple {
  /**
   * The ID that is associated with the object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * The name of the link between the parent and the child object.
   *
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * Represents the output of a ListObjectParents response operation.
 *
 * @public
 */
export interface BatchListObjectParentsResponse {
  /**
   * Returns a list of parent reference and LinkName Tuples.
   *
   * @public
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListObjectPolicies response operation.
 *
 * @public
 */
export interface BatchListObjectPoliciesResponse {
  /**
   * A list of policy `ObjectIdentifiers`, that are attached to the object.
   *
   * @public
   */
  AttachedPolicyIds?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListOutgoingTypedLinks response operation.
 *
 * @public
 */
export interface BatchListOutgoingTypedLinksResponse {
  /**
   * Returns a typed link specifier as output.
   *
   * @public
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a ListPolicyAttachments response operation.
 *
 * @public
 */
export interface BatchListPolicyAttachmentsResponse {
  /**
   * A list of `ObjectIdentifiers` to which the policy is attached.
   *
   * @public
   */
  ObjectIdentifiers?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the `PolicyType`, `PolicyId`, and the `ObjectIdentifier` to which it is attached. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
 *
 * @public
 */
export interface PolicyAttachment {
  /**
   * The ID of `PolicyAttachment`.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The `ObjectIdentifier` that is associated with `PolicyAttachment`.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * The type of policy that can be associated with `PolicyAttachment`.
   *
   * @public
   */
  PolicyType?: string | undefined;
}

/**
 * Used when a regular object exists in a Directory and you want to find all of the policies that are associated with that object and the parent to that object.
 *
 * @public
 */
export interface PolicyToPath {
  /**
   * The path that is referenced from the root.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * List of policy objects.
   *
   * @public
   */
  Policies?: PolicyAttachment[] | undefined;
}

/**
 * Represents the output of a LookupPolicy response operation.
 *
 * @public
 */
export interface BatchLookupPolicyResponse {
  /**
   * Provides list of path to policies. Policies contain `PolicyId`, `ObjectIdentifier`, and `PolicyType`. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
   *
   * @public
   */
  PolicyToPathList?: PolicyToPath[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the output of a `BatchRead` success response operation.
 *
 * @public
 */
export interface BatchReadSuccessfulResponse {
  /**
   * Lists all attributes that are associated with an object.
   *
   * @public
   */
  ListObjectAttributes?: BatchListObjectAttributesResponse | undefined;

  /**
   * Returns a paginated list of child objects that are associated with a given object.
   *
   * @public
   */
  ListObjectChildren?: BatchListObjectChildrenResponse | undefined;

  /**
   * Retrieves metadata about an object.
   *
   * @public
   */
  GetObjectInformation?: BatchGetObjectInformationResponse | undefined;

  /**
   * Retrieves attributes within a facet that are associated with an object.
   *
   * @public
   */
  GetObjectAttributes?: BatchGetObjectAttributesResponse | undefined;

  /**
   * Lists indices attached to an object.
   *
   * @public
   */
  ListAttachedIndices?: BatchListAttachedIndicesResponse | undefined;

  /**
   * Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see [Directory Structure](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html).
   *
   * @public
   */
  ListObjectParentPaths?: BatchListObjectParentPathsResponse | undefined;

  /**
   * Returns policies attached to an object in pagination fashion.
   *
   * @public
   */
  ListObjectPolicies?: BatchListObjectPoliciesResponse | undefined;

  /**
   * Returns all of the `ObjectIdentifiers` to which a given policy is attached.
   *
   * @public
   */
  ListPolicyAttachments?: BatchListPolicyAttachmentsResponse | undefined;

  /**
   * Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the `ObjectIdentifier` for such objects. If policies are present, it returns `ObjectIdentifier`, `policyId`, and `policyType`. Paths that don't lead to the root from the target object are ignored. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
   *
   * @public
   */
  LookupPolicy?: BatchLookupPolicyResponse | undefined;

  /**
   * Lists objects attached to the specified index.
   *
   * @public
   */
  ListIndex?: BatchListIndexResponse | undefined;

  /**
   * Returns a paginated list of all the outgoing TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  ListOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse | undefined;

  /**
   * Returns a paginated list of all the incoming TypedLinkSpecifier information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  ListIncomingTypedLinks?: BatchListIncomingTypedLinksResponse | undefined;

  /**
   * The list of attributes to retrieve from the typed link.
   *
   * @public
   */
  GetLinkAttributes?: BatchGetLinkAttributesResponse | undefined;

  /**
   * The list of parent objects to retrieve.
   *
   * @public
   */
  ListObjectParents?: BatchListObjectParentsResponse | undefined;
}

/**
 * Represents the output of a `BatchRead` response operation.
 *
 * @public
 */
export interface BatchReadOperationResponse {
  /**
   * Identifies which operation in a batch has succeeded.
   *
   * @public
   */
  SuccessfulResponse?: BatchReadSuccessfulResponse | undefined;

  /**
   * Identifies which operation in a batch has failed.
   *
   * @public
   */
  ExceptionResponse?: BatchReadException | undefined;
}

/**
 * @public
 */
export interface BatchReadResponse {
  /**
   * A list of all the responses for each batch read.
   *
   * @public
   */
  Responses?: BatchReadOperationResponse[] | undefined;
}

/**
 * Represents the output of a batch add facet to object operation.
 *
 * @public
 */
export interface BatchAddFacetToObject {
  /**
   * Represents the facet being added to the object.
   *
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * The attributes to set on the object.
   *
   * @public
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * A reference to the object being mutated.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * Represents the output of an AttachObject operation.
 *
 * @public
 */
export interface BatchAttachObject {
  /**
   * The parent object reference.
   *
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * The child object reference that is to be attached to the object.
   *
   * @public
   */
  ChildReference: ObjectReference | undefined;

  /**
   * The name of the link.
   *
   * @public
   */
  LinkName: string | undefined;
}

/**
 * Attaches a policy object to a regular object inside a BatchRead operation. For more information, see AttachPolicy and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchAttachPolicy {
  /**
   * The reference that is associated with the policy object.
   *
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * The reference that identifies the object to which the policy will be attached.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * Attaches the specified object to the specified index inside a BatchRead operation. For more information, see AttachToIndex and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchAttachToIndex {
  /**
   * A reference to the index that you are attaching the object to.
   *
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * A reference to the object that you are attaching to the index.
   *
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * Attaches a typed link to a specified source and target object inside a BatchRead operation. For more information, see AttachTypedLink and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchAttachTypedLink {
  /**
   * Identifies the source object that the typed link will attach to.
   *
   * @public
   */
  SourceObjectReference: ObjectReference | undefined;

  /**
   * Identifies the target object that the typed link will attach to.
   *
   * @public
   */
  TargetObjectReference: ObjectReference | undefined;

  /**
   * Identifies the typed link facet that is associated with the typed link.
   *
   * @public
   */
  TypedLinkFacet: TypedLinkSchemaAndFacetName | undefined;

  /**
   * A set of attributes that are associated with the typed link.
   *
   * @public
   */
  Attributes: AttributeNameAndValue[] | undefined;
}

/**
 * Creates an index object inside of a BatchRead operation. For more information, see CreateIndex and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchCreateIndex {
  /**
   * Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
   *
   * @public
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * Indicates whether the attribute that is being indexed has unique values or not.
   *
   * @public
   */
  IsUnique: boolean | undefined;

  /**
   * A reference to the parent object that contains the index object.
   *
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * The name of the link between the parent object and the index object.
   *
   * @public
   */
  LinkName?: string | undefined;

  /**
   * The batch reference name. See [Transaction Support](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html) for more information.
   *
   * @public
   */
  BatchReferenceName?: string | undefined;
}

/**
 * Represents the output of a CreateObject operation.
 *
 * @public
 */
export interface BatchCreateObject {
  /**
   * A list of `FacetArns` that will be associated with the object. For more information, see arns.
   *
   * @public
   */
  SchemaFacet: SchemaFacet[] | undefined;

  /**
   * An attribute map, which contains an attribute ARN as the key and attribute value as the map value.
   *
   * @public
   */
  ObjectAttributeList: AttributeKeyAndValue[] | undefined;

  /**
   * If specified, the parent reference to which this object will be attached.
   *
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * The name of the link.
   *
   * @public
   */
  LinkName?: string | undefined;

  /**
   * The batch reference name. See [Transaction Support](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html) for more information.
   *
   * @public
   */
  BatchReferenceName?: string | undefined;
}

/**
 * Represents the output of a DeleteObject operation.
 *
 * @public
 */
export interface BatchDeleteObject {
  /**
   * The reference that identifies the object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * Detaches the specified object from the specified index inside a BatchRead operation. For more information, see DetachFromIndex and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchDetachFromIndex {
  /**
   * A reference to the index object.
   *
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * A reference to the object being detached from the index.
   *
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * Represents the output of a DetachObject operation.
 *
 * @public
 */
export interface BatchDetachObject {
  /**
   * Parent reference from which the object with the specified link name is detached.
   *
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * The name of the link.
   *
   * @public
   */
  LinkName: string | undefined;

  /**
   * The batch reference name. See [Transaction Support](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html) for more information.
   *
   * @public
   */
  BatchReferenceName?: string | undefined;
}

/**
 * Detaches the specified policy from the specified directory inside a BatchWrite operation. For more information, see DetachPolicy and BatchWriteRequest$Operations.
 *
 * @public
 */
export interface BatchDetachPolicy {
  /**
   * Reference that identifies the policy object.
   *
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * Reference that identifies the object whose policy object will be detached.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * Detaches a typed link from a specified source and target object inside a BatchRead operation. For more information, see DetachTypedLink and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchDetachTypedLink {
  /**
   * Used to accept a typed link specifier as input.
   *
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * A batch operation to remove a facet from an object.
 *
 * @public
 */
export interface BatchRemoveFacetFromObject {
  /**
   * The facet to remove from the object.
   *
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * A reference to the object whose facet will be removed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
 *
 * @public
 */
export interface LinkAttributeAction {
  /**
   * A type that can be either `UPDATE_OR_CREATE` or `DELETE`.
   *
   * @public
   */
  AttributeActionType?: UpdateActionType | undefined;

  /**
   * The value that you want to update to.
   *
   * @public
   */
  AttributeUpdateValue?: TypedAttributeValue | undefined;
}

/**
 * Structure that contains attribute update information.
 *
 * @public
 */
export interface LinkAttributeUpdate {
  /**
   * The key of the attribute being updated.
   *
   * @public
   */
  AttributeKey?: AttributeKey | undefined;

  /**
   * The action to perform as part of the attribute update.
   *
   * @public
   */
  AttributeAction?: LinkAttributeAction | undefined;
}

/**
 * Updates a given typed link’s attributes inside a BatchRead operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its `IdentityAttributeOrder`. For more information, see UpdateLinkAttributes and BatchReadRequest$Operations.
 *
 * @public
 */
export interface BatchUpdateLinkAttributes {
  /**
   * Allows a typed link specifier to be accepted as input.
   *
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * The attributes update structure.
   *
   * @public
   */
  AttributeUpdates: LinkAttributeUpdate[] | undefined;
}

/**
 * The action to take on the object attribute.
 *
 * @public
 */
export interface ObjectAttributeAction {
  /**
   * A type that can be either `Update` or `Delete`.
   *
   * @public
   */
  ObjectAttributeActionType?: UpdateActionType | undefined;

  /**
   * The value that you want to update to.
   *
   * @public
   */
  ObjectAttributeUpdateValue?: TypedAttributeValue | undefined;
}

/**
 * Structure that contains attribute update information.
 *
 * @public
 */
export interface ObjectAttributeUpdate {
  /**
   * The key of the attribute being updated.
   *
   * @public
   */
  ObjectAttributeKey?: AttributeKey | undefined;

  /**
   * The action to perform as part of the attribute update.
   *
   * @public
   */
  ObjectAttributeAction?: ObjectAttributeAction | undefined;
}

/**
 * Represents the output of a `BatchUpdate` operation.
 *
 * @public
 */
export interface BatchUpdateObjectAttributes {
  /**
   * Reference that identifies the object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * Attributes update structure.
   *
   * @public
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * Represents the output of a `BatchWrite` operation.
 *
 * @public
 */
export interface BatchWriteOperation {
  /**
   * Creates an object.
   *
   * @public
   */
  CreateObject?: BatchCreateObject | undefined;

  /**
   * Attaches an object to a Directory.
   *
   * @public
   */
  AttachObject?: BatchAttachObject | undefined;

  /**
   * Detaches an object from a Directory.
   *
   * @public
   */
  DetachObject?: BatchDetachObject | undefined;

  /**
   * Updates a given object's attributes.
   *
   * @public
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributes | undefined;

  /**
   * Deletes an object in a Directory.
   *
   * @public
   */
  DeleteObject?: BatchDeleteObject | undefined;

  /**
   * A batch operation that adds a facet to an object.
   *
   * @public
   */
  AddFacetToObject?: BatchAddFacetToObject | undefined;

  /**
   * A batch operation that removes a facet from an object.
   *
   * @public
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObject | undefined;

  /**
   * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
   *
   * @public
   */
  AttachPolicy?: BatchAttachPolicy | undefined;

  /**
   * Detaches a policy from a Directory.
   *
   * @public
   */
  DetachPolicy?: BatchDetachPolicy | undefined;

  /**
   * Creates an index object. See [Indexing and search](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm) for more information.
   *
   * @public
   */
  CreateIndex?: BatchCreateIndex | undefined;

  /**
   * Attaches the specified object to the specified index.
   *
   * @public
   */
  AttachToIndex?: BatchAttachToIndex | undefined;

  /**
   * Detaches the specified object from the specified index.
   *
   * @public
   */
  DetachFromIndex?: BatchDetachFromIndex | undefined;

  /**
   * Attaches a typed link to a specified source and target object. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  AttachTypedLink?: BatchAttachTypedLink | undefined;

  /**
   * Detaches a typed link from a specified source and target object. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  DetachTypedLink?: BatchDetachTypedLink | undefined;

  /**
   * Updates a given object's attributes.
   *
   * @public
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributes | undefined;
}

/**
 * @public
 */
export interface BatchWriteRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A list of operations that are part of the batch.
   *
   * @public
   */
  Operations: BatchWriteOperation[] | undefined;
}

/**
 * The result of a batch add facet to object operation.
 *
 * @public
 */
export interface BatchAddFacetToObjectResponse {}

/**
 * Represents the output batch AttachObject response operation.
 *
 * @public
 */
export interface BatchAttachObjectResponse {
  /**
   * The `ObjectIdentifier` of the object that has been attached.
   *
   * @public
   */
  attachedObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of an AttachPolicy response operation.
 *
 * @public
 */
export interface BatchAttachPolicyResponse {}

/**
 * Represents the output of a AttachToIndex response operation.
 *
 * @public
 */
export interface BatchAttachToIndexResponse {
  /**
   * The `ObjectIdentifier` of the object that was attached to the index.
   *
   * @public
   */
  AttachedObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a AttachTypedLink response operation.
 *
 * @public
 */
export interface BatchAttachTypedLinkResponse {
  /**
   * Returns a typed link specifier as output.
   *
   * @public
   */
  TypedLinkSpecifier?: TypedLinkSpecifier | undefined;
}

/**
 * Represents the output of a CreateIndex response operation.
 *
 * @public
 */
export interface BatchCreateIndexResponse {
  /**
   * The `ObjectIdentifier` of the index created by this operation.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a CreateObject response operation.
 *
 * @public
 */
export interface BatchCreateObjectResponse {
  /**
   * The ID that is associated with the object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a DeleteObject response operation.
 *
 * @public
 */
export interface BatchDeleteObjectResponse {}

/**
 * Represents the output of a DetachFromIndex response operation.
 *
 * @public
 */
export interface BatchDetachFromIndexResponse {
  /**
   * The `ObjectIdentifier` of the object that was detached from the index.
   *
   * @public
   */
  DetachedObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a DetachObject response operation.
 *
 * @public
 */
export interface BatchDetachObjectResponse {
  /**
   * The `ObjectIdentifier` of the detached object.
   *
   * @public
   */
  detachedObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a DetachPolicy response operation.
 *
 * @public
 */
export interface BatchDetachPolicyResponse {}

/**
 * Represents the output of a DetachTypedLink response operation.
 *
 * @public
 */
export interface BatchDetachTypedLinkResponse {}

/**
 * An empty result that represents success.
 *
 * @public
 */
export interface BatchRemoveFacetFromObjectResponse {}

/**
 * Represents the output of a UpdateLinkAttributes response operation.
 *
 * @public
 */
export interface BatchUpdateLinkAttributesResponse {}

/**
 * Represents the output of a `BatchUpdate` response operation.
 *
 * @public
 */
export interface BatchUpdateObjectAttributesResponse {
  /**
   * ID that is associated with the object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * Represents the output of a `BatchWrite` response operation.
 *
 * @public
 */
export interface BatchWriteOperationResponse {
  /**
   * Creates an object in a Directory.
   *
   * @public
   */
  CreateObject?: BatchCreateObjectResponse | undefined;

  /**
   * Attaches an object to a Directory.
   *
   * @public
   */
  AttachObject?: BatchAttachObjectResponse | undefined;

  /**
   * Detaches an object from a Directory.
   *
   * @public
   */
  DetachObject?: BatchDetachObjectResponse | undefined;

  /**
   * Updates a given object’s attributes.
   *
   * @public
   */
  UpdateObjectAttributes?: BatchUpdateObjectAttributesResponse | undefined;

  /**
   * Deletes an object in a Directory.
   *
   * @public
   */
  DeleteObject?: BatchDeleteObjectResponse | undefined;

  /**
   * The result of an add facet to object batch operation.
   *
   * @public
   */
  AddFacetToObject?: BatchAddFacetToObjectResponse | undefined;

  /**
   * The result of a batch remove facet from object operation.
   *
   * @public
   */
  RemoveFacetFromObject?: BatchRemoveFacetFromObjectResponse | undefined;

  /**
   * Attaches a policy object to a regular object. An object can have a limited number of attached policies.
   *
   * @public
   */
  AttachPolicy?: BatchAttachPolicyResponse | undefined;

  /**
   * Detaches a policy from a Directory.
   *
   * @public
   */
  DetachPolicy?: BatchDetachPolicyResponse | undefined;

  /**
   * Creates an index object. See [Indexing and search](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm) for more information.
   *
   * @public
   */
  CreateIndex?: BatchCreateIndexResponse | undefined;

  /**
   * Attaches the specified object to the specified index.
   *
   * @public
   */
  AttachToIndex?: BatchAttachToIndexResponse | undefined;

  /**
   * Detaches the specified object from the specified index.
   *
   * @public
   */
  DetachFromIndex?: BatchDetachFromIndexResponse | undefined;

  /**
   * Attaches a typed link to a specified source and target object. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  AttachTypedLink?: BatchAttachTypedLinkResponse | undefined;

  /**
   * Detaches a typed link from a specified source and target object. For more information, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  DetachTypedLink?: BatchDetachTypedLinkResponse | undefined;

  /**
   * Represents the output of a `BatchWrite` response operation.
   *
   * @public
   */
  UpdateLinkAttributes?: BatchUpdateLinkAttributesResponse | undefined;
}

/**
 * @public
 */
export interface BatchWriteResponse {
  /**
   * A list of all the responses for each batch write.
   *
   * @public
   */
  Responses?: BatchWriteOperationResponse[] | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryRequest {
  /**
   * The name of the Directory. Should be unique per account, per region.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the published schema that will be copied into the data Directory. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryResponse {
  /**
   * The ARN that is associated with the Directory. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The name of the Directory.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The root object node of the created directory.
   *
   * @public
   */
  ObjectIdentifier: string | undefined;

  /**
   * The ARN of the published schema in the Directory. Once a published schema is copied into the directory, it has its own ARN, which is referred to applied schema ARN. For more information, see arns.
   *
   * @public
   */
  AppliedSchemaArn: string | undefined;
}

/**
 * Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.
 *
 * @public
 */
export interface Rule {
  /**
   * The type of attribute validation rule.
   *
   * @public
   */
  Type?: RuleType | undefined;

  /**
   * The minimum and maximum parameters that are associated with the rule.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * A facet attribute definition. See [Attribute References](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html) for more information.
 *
 * @public
 */
export interface FacetAttributeDefinition {
  /**
   * The type of the attribute.
   *
   * @public
   */
  Type: FacetAttributeType | undefined;

  /**
   * The default value of the attribute (if configured).
   *
   * @public
   */
  DefaultValue?: TypedAttributeValue | undefined;

  /**
   * Whether the attribute is mutable or not.
   *
   * @public
   */
  IsImmutable?: boolean | undefined;

  /**
   * Validation rules attached to the attribute definition.
   *
   * @public
   */
  Rules?: Record<string, Rule> | undefined;
}

/**
 * The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.
 *
 * @public
 */
export interface FacetAttributeReference {
  /**
   * The target facet name that is associated with the facet reference. See [Attribute References](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html) for more information.
   *
   * @public
   */
  TargetFacetName: string | undefined;

  /**
   * The target attribute name that is associated with the facet reference. See [Attribute References](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html) for more information.
   *
   * @public
   */
  TargetAttributeName: string | undefined;
}

/**
 * An attribute that is associated with the Facet.
 *
 * @public
 */
export interface FacetAttribute {
  /**
   * The name of the facet attribute.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See [Attribute References](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html) for more information.
   *
   * @public
   */
  AttributeDefinition?: FacetAttributeDefinition | undefined;

  /**
   * An attribute reference that is associated with the attribute. See [Attribute References](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html) for more information.
   *
   * @public
   */
  AttributeReference?: FacetAttributeReference | undefined;

  /**
   * The required behavior of the `FacetAttribute`.
   *
   * @public
   */
  RequiredBehavior?: RequiredAttributeBehavior | undefined;
}

/**
 * @public
 */
export interface CreateFacetRequest {
  /**
   * The schema ARN in which the new Facet will be created. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the Facet, which is unique for a given schema.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The attributes that are associated with the Facet.
   *
   * @public
   */
  Attributes?: FacetAttribute[] | undefined;

  /**
   * Specifies whether a given object created from this facet is of type node, leaf node, policy or index.
   *
   * - Node: Can have multiple children but one parent.
   *
   * - Leaf node: Cannot have children but can have multiple parents.
   *
   * - Policy: Allows you to store a policy document and policy type. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
   *
   * - Index: Can be created with the Index API.
   *
   * @public
   */
  ObjectType?: ObjectType | undefined;

  /**
   * There are two different styles that you can define on any given facet, `Static` and `Dynamic`. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.
   *
   * @public
   */
  FacetStyle?: FacetStyle | undefined;
}

/**
 * @public
 */
export interface CreateFacetResponse {}

/**
 * @public
 */
export interface CreateIndexRequest {
  /**
   * The ARN of the directory where the index should be created.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
   *
   * @public
   */
  OrderedIndexedAttributeList: AttributeKey[] | undefined;

  /**
   * Indicates whether the attribute that is being indexed has unique values or not.
   *
   * @public
   */
  IsUnique: boolean | undefined;

  /**
   * A reference to the parent object that contains the index object.
   *
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * The name of the link between the parent object and the index object.
   *
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * @public
 */
export interface CreateIndexResponse {
  /**
   * The `ObjectIdentifier` of the index created by this operation.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateObjectRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory in which the object will be created. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A list of schema facets to be associated with the object. Do not provide minor version components. See SchemaFacet for details.
   *
   * @public
   */
  SchemaFacets: SchemaFacet[] | undefined;

  /**
   * The attribute map whose attribute ARN contains the key and attribute value as the map value.
   *
   * @public
   */
  ObjectAttributeList?: AttributeKeyAndValue[] | undefined;

  /**
   * If specified, the parent reference to which this object will be attached.
   *
   * @public
   */
  ParentReference?: ObjectReference | undefined;

  /**
   * The name of link that is used to attach this object to a parent.
   *
   * @public
   */
  LinkName?: string | undefined;
}

/**
 * @public
 */
export interface CreateObjectResponse {
  /**
   * The identifier that is associated with the object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaRequest {
  /**
   * The name that is associated with the schema. This is unique to each account and in each region.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn?: string | undefined;
}

/**
 * A typed link attribute definition.
 *
 * @public
 */
export interface TypedLinkAttributeDefinition {
  /**
   * The unique name of the typed link attribute.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the attribute.
   *
   * @public
   */
  Type: FacetAttributeType | undefined;

  /**
   * The default value of the attribute (if configured).
   *
   * @public
   */
  DefaultValue?: TypedAttributeValue | undefined;

  /**
   * Whether the attribute is mutable or not.
   *
   * @public
   */
  IsImmutable?: boolean | undefined;

  /**
   * Validation rules that are attached to the attribute definition.
   *
   * @public
   */
  Rules?: Record<string, Rule> | undefined;

  /**
   * The required behavior of the `TypedLinkAttributeDefinition`.
   *
   * @public
   */
  RequiredBehavior: RequiredAttributeBehavior | undefined;
}

/**
 * Defines the typed links structure and its attributes. To create a typed link facet, use the CreateTypedLinkFacet API.
 *
 * @public
 */
export interface TypedLinkFacet {
  /**
   * The unique name of the typed link facet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.
   *
   * @public
   */
  Attributes: TypedLinkAttributeDefinition[] | undefined;

  /**
   * The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See ListOutgoingTypedLinks and ListIncomingTypedLinks for details.
   *
   * @public
   */
  IdentityAttributeOrder: string[] | undefined;
}

/**
 * @public
 */
export interface CreateTypedLinkFacetRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * Facet structure that is associated with the typed link facet.
   *
   * @public
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
   * The ARN of the directory to delete.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectoryResponse {
  /**
   * The ARN of the deleted directory.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFacetRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Facet. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the facet to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteFacetResponse {}

/**
 * @public
 */
export interface DeleteObjectRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A reference that identifies the object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DeleteObjectResponse {}

/**
 * @public
 */
export interface DeleteSchemaRequest {
  /**
   * The Amazon Resource Name (ARN) of the development schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaResponse {
  /**
   * The input ARN that is returned as part of the response. For more information, see arns.
   *
   * @public
   */
  SchemaArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTypedLinkFacetRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The unique name of the typed link facet.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the directory the index and object exist in.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A reference to the index object.
   *
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * A reference to the object being detached from the index.
   *
   * @public
   */
  TargetReference: ObjectReference | undefined;
}

/**
 * @public
 */
export interface DetachFromIndexResponse {
  /**
   * The `ObjectIdentifier` of the object that was detached from the index.
   *
   * @public
   */
  DetachedObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DetachObjectRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The parent reference from which the object with the specified link name is detached.
   *
   * @public
   */
  ParentReference: ObjectReference | undefined;

  /**
   * The link name associated with the object that needs to be detached.
   *
   * @public
   */
  LinkName: string | undefined;
}

/**
 * @public
 */
export interface DetachObjectResponse {
  /**
   * The `ObjectIdentifier` that was detached from the object.
   *
   * @public
   */
  DetachedObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Reference that identifies the policy object.
   *
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * Reference that identifies the object whose policy object will be detached.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the directory where you want to detach the typed link.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Used to accept a typed link specifier as input.
   *
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryRequest {
  /**
   * The ARN of the directory to disable.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryResponse {
  /**
   * The ARN of the directory that has been disabled.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryRequest {
  /**
   * The ARN of the directory to enable.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryResponse {
  /**
   * The ARN of the enabled directory.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppliedSchemaVersionRequest {
  /**
   * The ARN of the applied schema.
   *
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppliedSchemaVersionResponse {
  /**
   * Current applied schema ARN, including the minor version in use if one was provided.
   *
   * @public
   */
  AppliedSchemaArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRequest {
  /**
   * The ARN of the directory.
   *
   * @public
   */
  DirectoryArn: string | undefined;
}

/**
 * Directory structure that includes the directory name and directory ARN.
 *
 * @public
 */
export interface Directory {
  /**
   * The name of the directory.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that is associated with the directory. For more information, see arns.
   *
   * @public
   */
  DirectoryArn?: string | undefined;

  /**
   * The state of the directory. Can be either `Enabled`, `Disabled`, or `Deleted`.
   *
   * @public
   */
  State?: DirectoryState | undefined;

  /**
   * The date and time when the directory was created.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDirectoryResponse {
  /**
   * Metadata about the directory.
   *
   * @public
   */
  Directory: Directory | undefined;
}

/**
 * @public
 */
export interface GetFacetRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Facet. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the facet to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A structure that contains `Name`, `ARN`, `Attributes`, `Rules`, and `ObjectTypes`. See [Facets](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html) for more information.
 *
 * @public
 */
export interface Facet {
  /**
   * The name of the Facet.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The object type that is associated with the facet. See CreateFacetRequest$ObjectType for more details.
   *
   * @public
   */
  ObjectType?: ObjectType | undefined;

  /**
   * There are two different styles that you can define on any given facet, `Static` and `Dynamic`. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.
   *
   * @public
   */
  FacetStyle?: FacetStyle | undefined;
}

/**
 * @public
 */
export interface GetFacetResponse {
  /**
   * The Facet structure that is associated with the facet.
   *
   * @public
   */
  Facet?: Facet | undefined;
}

/**
 * @public
 */
export interface GetLinkAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see arns or [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Allows a typed link specifier to be accepted as input.
   *
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * A list of attribute names whose values will be retrieved.
   *
   * @public
   */
  AttributeNames: string[] | undefined;

  /**
   * The consistency level at which to retrieve the attributes on a typed link.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface GetLinkAttributesResponse {
  /**
   * The attributes that are associated with the typed link.
   *
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Reference that identifies the object whose attributes will be retrieved.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The consistency level at which to retrieve the attributes on an object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;

  /**
   * Identifier for the facet whose attributes will be retrieved. See SchemaFacet for details.
   *
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * List of attribute names whose values will be retrieved.
   *
   * @public
   */
  AttributeNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetObjectAttributesResponse {
  /**
   * The attributes that are associated with the object.
   *
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;
}

/**
 * @public
 */
export interface GetObjectInformationRequest {
  /**
   * The ARN of the directory being retrieved.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A reference to the object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The consistency level at which to retrieve the object information.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface GetObjectInformationResponse {
  /**
   * The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See GetAppliedSchemaVersion for details.
   *
   * @public
   */
  SchemaFacets?: SchemaFacet[] | undefined;

  /**
   * The `ObjectIdentifier` of the specified object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaAsJsonRequest {
  /**
   * The ARN of the schema to retrieve.
   *
   * @public
   */
  SchemaArn: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaAsJsonResponse {
  /**
   * The name of the retrieved schema.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The JSON representation of the schema document.
   *
   * @public
   */
  Document?: string | undefined;
}

/**
 * @public
 */
export interface GetTypedLinkFacetInformationRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The unique name of the typed link facet.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTypedLinkFacetInformationResponse {
  /**
   * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  IdentityAttributeOrder?: string[] | undefined;
}

/**
 * @public
 */
export interface ListAppliedSchemaArnsRequest {
  /**
   * The ARN of the directory you are listing.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The response for `ListAppliedSchemaArns` when this parameter is used will list all minor version ARNs for a major version.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppliedSchemaArnsResponse {
  /**
   * The ARNs of schemas that are applied to the directory.
   *
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedIndicesRequest {
  /**
   * The ARN of the directory.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A reference to the object that has indices attached.
   *
   * @public
   */
  TargetReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The consistency level to use for this operation.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListAttachedIndicesResponse {
  /**
   * The indices attached to the specified object.
   *
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevelopmentSchemaArnsRequest {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDevelopmentSchemaArnsResponse {
  /**
   * The ARNs of retrieved development schemas.
   *
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDirectoriesRequest {
  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.
   *
   * @public
   */
  state?: DirectoryState | undefined;
}

/**
 * @public
 */
export interface ListDirectoriesResponse {
  /**
   * Lists all directories that are associated with your account in pagination fashion.
   *
   * @public
   */
  Directories: Directory[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFacetAttributesRequest {
  /**
   * The ARN of the schema where the facet resides.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the facet whose attributes will be retrieved.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFacetAttributesResponse {
  /**
   * The attributes attached to the facet.
   *
   * @public
   */
  Attributes?: FacetAttribute[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFacetNamesRequest {
  /**
   * The Amazon Resource Name (ARN) to retrieve facet names from.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFacetNamesResponse {
  /**
   * The names of facets that exist within the schema.
   *
   * @public
   */
  FacetNames?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIncomingTypedLinksRequest {
  /**
   * The Amazon Resource Name (ARN) of the directory where you want to list the typed links.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
   *
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls.
   *
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The consistency level to execute the request at.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListIncomingTypedLinksResponse {
  /**
   * Returns one or more typed link specifiers as output.
   *
   * @public
   */
  LinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIndexRequest {
  /**
   * The ARN of the directory that the index exists in.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Specifies the ranges of indexed values that you want to query.
   *
   * @public
   */
  RangesOnIndexedValues?: ObjectAttributeRange[] | undefined;

  /**
   * The reference to the index to list.
   *
   * @public
   */
  IndexReference: ObjectReference | undefined;

  /**
   * The maximum number of objects in a single page to retrieve from the index during a request. For more information, see [Amazon Cloud Directory Limits](http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html).
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The consistency level to execute the request at.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListIndexResponse {
  /**
   * The objects and indexed values attached to the index.
   *
   * @public
   */
  IndexAttachments?: IndexAttachment[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedSchemaArnsRequest {
  /**
   * The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListManagedSchemaArnsResponse {
  /**
   * The ARNs for all AWS managed schemas.
   *
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;

  /**
   * Used to filter the list of object attributes that are associated with a certain facet.
   *
   * @public
   */
  FacetFilter?: SchemaFacet | undefined;
}

/**
 * @public
 */
export interface ListObjectAttributesResponse {
  /**
   * Attributes map that is associated with the object. `AttributeArn` is the key, and attribute value is the value.
   *
   * @public
   */
  Attributes?: AttributeKeyAndValue[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectChildrenRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that identifies the object for which child objects are being listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListObjectChildrenResponse {
  /**
   * Children structure, which is a map with key as the `LinkName` and `ObjectIdentifier` as the value.
   *
   * @public
   */
  Children?: Record<string, string> | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectParentPathsRequest {
  /**
   * The ARN of the directory to which the parent path applies.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that identifies the object whose parent paths are listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListObjectParentPathsResponse {
  /**
   * Returns the path to the `ObjectIdentifiers` that are associated with the directory.
   *
   * @public
   */
  PathToObjectIdentifiersList?: PathToObjectIdentifiers[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListObjectParentsRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that identifies the object for which parent objects are being listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;

  /**
   * When set to True, returns all ListObjectParentsResponse$ParentLinks. There could be multiple links between a parent-child pair.
   *
   * @public
   */
  IncludeAllLinksToEachParent?: boolean | undefined;
}

/**
 * @public
 */
export interface ListObjectParentsResponse {
  /**
   * The parent structure, which is a map with key as the `ObjectIdentifier` and LinkName as the value.
   *
   * @public
   */
  Parents?: Record<string, string> | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns a list of parent reference and LinkName Tuples.
   *
   * @public
   */
  ParentLinks?: ObjectIdentifierAndLinkNameTuple[] | undefined;
}

/**
 * @public
 */
export interface ListObjectPoliciesRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Reference that identifies the object for which policies will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListObjectPoliciesResponse {
  /**
   * A list of policy `ObjectIdentifiers`, that are attached to the object.
   *
   * @public
   */
  AttachedPolicyIds?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOutgoingTypedLinksRequest {
  /**
   * The Amazon Resource Name (ARN) of the directory where you want to list the typed links.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * A reference that identifies the object whose attributes will be listed.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
   *
   * @public
   */
  FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined;

  /**
   * Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.
   *
   * @public
   */
  FilterTypedLink?: TypedLinkSchemaAndFacetName | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The consistency level to execute the request at.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListOutgoingTypedLinksResponse {
  /**
   * Returns a typed link specifier as output.
   *
   * @public
   */
  TypedLinkSpecifiers?: TypedLinkSpecifier[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyAttachmentsRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory where objects reside. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that identifies the policy object.
   *
   * @public
   */
  PolicyReference: ObjectReference | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
   *
   * @public
   */
  ConsistencyLevel?: ConsistencyLevel | undefined;
}

/**
 * @public
 */
export interface ListPolicyAttachmentsResponse {
  /**
   * A list of `ObjectIdentifiers` to which the policy is attached.
   *
   * @public
   */
  ObjectIdentifiers?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublishedSchemaArnsRequest {
  /**
   * The response for `ListPublishedSchemaArns` when this parameter is used will list all minor version ARNs for a major version.
   *
   * @public
   */
  SchemaArn?: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPublishedSchemaArnsResponse {
  /**
   * The ARNs of published schemas.
   *
   * @public
   */
  SchemaArns?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The pagination token. This is for future use. Currently pagination is not supported for tagging.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The `MaxResults` parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * @public
 */
export interface Tag {
  /**
   * The key that is associated with the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value that is associated with the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tag key value pairs that are associated with the response.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The unique name of the typed link facet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetAttributesResponse {
  /**
   * An ordered set of attributes associate with the typed link.
   *
   * @public
   */
  Attributes?: TypedLinkAttributeDefinition[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetNamesRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTypedLinkFacetNamesResponse {
  /**
   * The names of typed link facets that exist within the schema.
   *
   * @public
   */
  FacetNames?: string[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface LookupPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Directory. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Reference that identifies the object whose policies will be looked up.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The token to request the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be retrieved in a single call. This is an approximate number.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface LookupPolicyResponse {
  /**
   * Provides list of path to policies. Policies contain `PolicyId`, `ObjectIdentifier`, and `PolicyType`. For more information, see [Policies](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies).
   *
   * @public
   */
  PolicyToPathList?: PolicyToPath[] | undefined;

  /**
   * The pagination token.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PublishSchemaRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the development schema. For more information, see arns.
   *
   * @public
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * The major version under which the schema will be published. Schemas have both a major and minor version associated with them.
   *
   * @public
   */
  Version: string | undefined;

  /**
   * The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.
   *
   * @public
   */
  MinorVersion?: string | undefined;

  /**
   * The new name under which the schema will be published. If this is not provided, the development schema is considered.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface PublishSchemaResponse {
  /**
   * The ARN that is associated with the published schema. For more information, see arns.
   *
   * @public
   */
  PublishedSchemaArn?: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaFromJsonRequest {
  /**
   * The ARN of the schema to update.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The replacement JSON schema.
   *
   * @public
   */
  Document: string | undefined;
}

/**
 * @public
 */
export interface PutSchemaFromJsonResponse {
  /**
   * The ARN of the schema to update.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFacetFromObjectRequest {
  /**
   * The ARN of the directory in which the object resides.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The facet to remove. See SchemaFacet for details.
   *
   * @public
   */
  SchemaFacet: SchemaFacet | undefined;

  /**
   * A reference to the object to remove the facet from.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag key-value pairs.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Keys of the tag that need to be removed from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * A structure that contains information used to update an attribute.
 *
 * @public
 */
export interface FacetAttributeUpdate {
  /**
   * The attribute to update.
   *
   * @public
   */
  Attribute?: FacetAttribute | undefined;

  /**
   * The action to perform when updating the attribute.
   *
   * @public
   */
  Action?: UpdateActionType | undefined;
}

/**
 * @public
 */
export interface UpdateFacetRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the Facet. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the facet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * List of attributes that need to be updated in a given schema Facet. Each attribute is followed by `AttributeAction`, which specifies the type of update operation to perform.
   *
   * @public
   */
  AttributeUpdates?: FacetAttributeUpdate[] | undefined;

  /**
   * The object type that is associated with the facet. See CreateFacetRequest$ObjectType for more details.
   *
   * @public
   */
  ObjectType?: ObjectType | undefined;
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
   * The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see arns or [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Allows a typed link specifier to be accepted as input.
   *
   * @public
   */
  TypedLinkSpecifier: TypedLinkSpecifier | undefined;

  /**
   * The attributes update structure.
   *
   * @public
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
   * The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * The reference that identifies the object.
   *
   * @public
   */
  ObjectReference: ObjectReference | undefined;

  /**
   * The attributes update structure.
   *
   * @public
   */
  AttributeUpdates: ObjectAttributeUpdate[] | undefined;
}

/**
 * @public
 */
export interface UpdateObjectAttributesResponse {
  /**
   * The `ObjectIdentifier` of the updated object.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaRequest {
  /**
   * The Amazon Resource Name (ARN) of the development schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaResponse {
  /**
   * The ARN that is associated with the updated schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn?: string | undefined;
}

/**
 * A typed link facet attribute update.
 *
 * @public
 */
export interface TypedLinkFacetAttributeUpdate {
  /**
   * The attribute to update.
   *
   * @public
   */
  Attribute: TypedLinkAttributeDefinition | undefined;

  /**
   * The action to perform when updating the attribute.
   *
   * @public
   */
  Action: UpdateActionType | undefined;
}

/**
 * @public
 */
export interface UpdateTypedLinkFacetRequest {
  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see arns.
   *
   * @public
   */
  SchemaArn: string | undefined;

  /**
   * The unique name of the typed link facet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Attributes update structure.
   *
   * @public
   */
  AttributeUpdates: TypedLinkFacetAttributeUpdate[] | undefined;

  /**
   * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see [Typed Links](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink).
   *
   * @public
   */
  IdentityAttributeOrder: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateTypedLinkFacetResponse {}

/**
 * @public
 */
export interface UpgradeAppliedSchemaRequest {
  /**
   * The revision of the published schema to upgrade the directory to.
   *
   * @public
   */
  PublishedSchemaArn: string | undefined;

  /**
   * The ARN for the directory to which the upgraded schema will be applied.
   *
   * @public
   */
  DirectoryArn: string | undefined;

  /**
   * Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpgradeAppliedSchemaResponse {
  /**
   * The ARN of the upgraded schema that is returned as part of the response.
   *
   * @public
   */
  UpgradedSchemaArn?: string | undefined;

  /**
   * The ARN of the directory that is returned as part of the response.
   *
   * @public
   */
  DirectoryArn?: string | undefined;
}

/**
 * @public
 */
export interface UpgradePublishedSchemaRequest {
  /**
   * The ARN of the development schema with the changes used for the upgrade.
   *
   * @public
   */
  DevelopmentSchemaArn: string | undefined;

  /**
   * The ARN of the published schema to be upgraded.
   *
   * @public
   */
  PublishedSchemaArn: string | undefined;

  /**
   * Identifies the minor version of the published schema that will be created. This parameter is NOT optional.
   *
   * @public
   */
  MinorVersion: string | undefined;

  /**
   * Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpgradePublishedSchemaResponse {
  /**
   * The ARN of the upgraded schema that is returned as part of the response.
   *
   * @public
   */
  UpgradedSchemaArn?: string | undefined;
}
